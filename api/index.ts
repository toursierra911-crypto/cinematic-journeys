// Vercel API route for SSR
// This serves the client-side app with proper caching headers

export const config = {
  runtime: 'nodejs',
};

export default async function handler(req, res) {
  const url = new URL(req.url, `https://${req.headers.host}`);
  const path = url.pathname;
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // For now, serve a simple HTML that loads the client app
  // The actual SSR would require a proper Node.js server entry
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TourSierra - Himalayan Journeys</title>
  <script type="module" crossorigin src="/assets/index-BzpFWBEa.js"></script>
  <link rel="stylesheet" href="/assets/styles-CJU6DDFy.css">
</head>
<body>
  <div id="root">Loading...</div>
  <script>
    // Client-side hydration will handle the rest
    window.__BASEPATH__ = '/';
  </script>
</body>
</html>`;
  
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  return res.send(html);
}