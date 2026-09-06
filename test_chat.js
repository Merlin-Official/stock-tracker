const fetch = require('node-fetch');
const headers = { 'Content-Type': 'application/json' };
const body = JSON.stringify({ prompt: 'top 1 stock', watchlist: [] });
fetch('http://localhost:3000/api/chat', { method: 'POST', headers, body })
    .then(res => res.json().then(j => console.log('Status', res.status, j)))
    .catch(console.error);
