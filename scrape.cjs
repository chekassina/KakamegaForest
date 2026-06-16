const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

// Read services.ts using regex or we can just import it if it's compiled, but it's typescript.
// Let's hardcode the URLs or read them from a quick regex.

const getUrls = () => {
  const content = fs.readFileSync('src/data/services.ts', 'utf-8');
  const urls = [];
  const regex = /title:\s*'([^']+)',\s*link:\s*'([^']+)'/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
      // Exclude trip advisor or non wilbersafariholidays or wetravel links if needed.
      // WeTravel links are hosted entirely differently. Wilbersafariholidays pages have a specific elementor layout.
      if (match[2].includes('wilbersafariholidays.com') && !match[2].includes('tripadvisor') && !match[2].includes('etakenya') && !match[2].includes('horizonguides')) {
          urls.push({ title: match[1], link: match[2] });
      }
  }
  return urls;
};

const fetchUrl = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location));
      }
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
};

(async () => {
  const urls = getUrls();
  const db = [];

  console.log(`Found ${urls.length} urls to scrape...`);

  for (let i = 0; i < urls.length; i++) {
    const { title, link } = urls[i];
    console.log(`[${i+1}/${urls.length}] Scraping ${title}...`);
    try {
      const html = await fetchUrl(link);
      const $ = cheerio.load(html);

      // Try to extract useful info
      // e.g. text blocks inside Elementor. We are looking for overview, Included, Excluded, Itinerary.
      let included = [];
      let excluded = [];
      let descriptions = [];

      // Find "Included"
      const incHeader = $('h2.elementor-heading-title').filter((i, el) => $(el).text().trim().toLowerCase() === 'included');
      if (incHeader.length) {
        const incUl = incHeader.closest('.elementor-widget-heading').nextAll('.elementor-widget-text-editor').first().find('ul li');
        incUl.each((i, el) => included.push($(el).text().trim()));
      }

      // Find "Excluded"
      const excHeader = $('h2.elementor-heading-title').filter((i, el) => $(el).text().trim().toLowerCase() === 'excluded');
      if (excHeader.length) {
        const excUl = excHeader.closest('.elementor-widget-heading').nextAll('.elementor-widget-text-editor').first().find('ul li');
        excUl.each((i, el) => excluded.push($(el).text().trim()));
      }

      // Grab some general text
      // usually inside .elementor-widget-text-editor p
      // We don't want menu links, footer links, etc.
      const textWidgets = $('.elementor-widget-text-editor p');
      textWidgets.each((i, el) => {
         const t = $(el).text().trim();
         if (t.length > 50 && !t.includes('All Rights Reserved') && !t.includes('For all general enquires')) {
           descriptions.push(t);
         }
      });
      // Deduplicate and join first few paragraphs
      const uniqueDesc = [...new Set(descriptions)].slice(0, 3).join('\n\n');

      db.push({
        title,
        link,
        description: uniqueDesc || title,
        included,
        excluded
      });
    } catch (e) {
      console.error(`Error scraping ${title}:`, e);
      db.push({ title, link, description: title, included: [], excluded: [] });
    }
    // simple delay
    await new Promise(r => setTimeout(r, 500));
  }

  fs.writeFileSync('src/data/toursData.json', JSON.stringify(db, null, 2));
  console.log('Finished scraping');
})();
