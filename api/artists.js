const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.statusCode = 204;
    return res.end();
  }

  const { name_like, genre } = req.query || {};
  const p = path.join(process.cwd(), 'api-artists', 'artists.json');

  let data;
  try {
    data = JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (err) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).json({ error: 'Unable to read artists.json' });
    return;
  }

  let artists = Array.isArray(data) ? data : data.artists || [];

  if (name_like) {
    const term = String(name_like).toLowerCase();
    artists = artists.filter((a) => (a.name || '').toLowerCase().includes(term));
  }

  if (genre) {
    const g = String(genre).toLowerCase();
    artists = artists.filter((a) => (a.genre || '').toLowerCase() === g);
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(artists);
};
