import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const PORT = process.env.PORT || 3000;
const server = express();
const directory = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    let template = fs.readFileSync(path.resolve(directory, 'index.html'), 'utf-8');
    template = await vite.transformIndexHtml(url, template);
    const html = template.split(`<!--ssr-inject-->`);

    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

    const { pipe } = await render(url, {
      onShellReady() {
        res.write(html[0]);
        pipe(res);
      },
      onAllReady() {
        res.write(html[0] + html[1]);
        res.end();
      },
    });
  });
}

server.use(express.static(path.resolve(directory, '.', 'dist'), { maxAge: '30d' }));

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

startServer();
