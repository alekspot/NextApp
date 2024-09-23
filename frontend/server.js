const next = require('next');
const https = require('https');
const fs = require('fs');

const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev, hostname, port });

const sslsert = dev ? 'docker.pfx' : 'timeweb.pfx';

console.log(`sslsert = ${sslsert}`);
console.log(`hostname = ${hostname}`);

const sslOptions = {
  pfx: fs.readFileSync(`./ssl/${sslsert}`),
  passphrase: 'test',
};

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = https.createServer(sslOptions, (req, res) => {
    // custom api middleware
    if (req.url.startsWith('/api')) {
      return handle(req, res);
    } else {
      // Handle Next.js routes
      return handle(req, res);
    }
  });
  server.listen(port, (err) => {
    if (err) throw err;

    console.log(`> Ready on https://${hostname}:` + port);
  });
});
