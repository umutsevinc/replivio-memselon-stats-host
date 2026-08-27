import fs from 'fs';
const parts = [0,1,2,3,4,5,6,7].map(i => fs.readFileSync('b64/' + i + '.txt', 'utf8'));
const b64 = parts.join('');
fs.writeFileSync('stats.jpg', Buffer.from(b64, 'base64'));
console.log('wrote', fs.statSync('stats.jpg').size);
