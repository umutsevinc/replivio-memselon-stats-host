import fs from 'fs';
const n = 77;
let b64 = '';
for (let i = 0; i < n; i++) {
  const name = String(i).padStart(2, '0') + '.txt';
  b64 += fs.readFileSync('c/' + name, 'utf8').trim();
}
fs.writeFileSync('stats.jpg', Buffer.from(b64, 'base64'));
console.log('wrote', fs.statSync('stats.jpg').size);
