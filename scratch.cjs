const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/prisma/data.json', 'utf8'));
const csv = fs.readFileSync('src/prisma/shopee.csv', 'utf8');

const lines = csv.split('\n').filter(Boolean);
const map = {};

lines.slice(1).forEach(line => {
  // Parsing simple CSV with structure: "image_url","title"
  const match = line.match(/"([^"]+)",\s*"([^"]+)"/);
  if (match) {
    const url = match[1];
    const title = match[2];
    map[title.trim()] = url.trim();
  } else {
    // try fallback without quotes if they are somewhat missing
    const parts = line.split(',');
    if (parts.length >= 2) {
      let url = parts[0].replace(/"/g, '').trim();
      let title = parts.slice(1).join(',').replace(/"/g, '').trim();
      map[title] = url;
    }
  }
});

let updatedCount = 0;
data.forEach(item => {
  const title = item.nama.trim();
  if (map[title]) {
    item.gambar = map[title];
    updatedCount++;
  } else {
    console.log("No match found for:", title);
  }
});

console.log(`Updated ${updatedCount} items.`);
fs.writeFileSync('src/prisma/data.json', JSON.stringify(data, null, 2));
