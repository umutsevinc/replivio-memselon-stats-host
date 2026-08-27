import fs from 'fs';
const b64 = fs.readFileSync('a.txt', 'utf8').trim() + fs.readFileSync('b.txt', 'utf8').trim();
fs.writeFileSync('stats.jpg', Buffer.from(b64, 'base64'));
console.log('wrote', fs.statSync('stats.jpg').size);
