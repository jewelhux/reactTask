import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const PORT = process.env.PORT || 3000;
const server = express();
const directory = path.dirname(fileURLToPath(import.meta.url));
const viteServer = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

async function startServer() {
  server.use(viteServer.middlewares);

  server.use('*', async (req, res) => {
    const data = await viteServer.transformIndexHtml(
      req.originalUrl,
      fs.readFileSync(path.resolve(directory, 'index.html'), 'utf-8')
    );

    const { render } = await viteServer.ssrLoadModule('/src/enterServer.tsx');
    const { pipe } = await render(req.originalUrl, {
      onShellReady() {
        res.write(data.split(`<!--ssr-inject-->`)[0]);
        pipe(res);
      },
      onAllReady() {
        res.write(data.split(`<!--ssr-inject-->`)[0] + data.split(`<!--ssr-inject-->`)[1]);
        res.end();
      },
    });
  });

  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

startServer();
