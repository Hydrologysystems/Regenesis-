import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

async function prerender() {
  console.log('Starting static pre-rendering (SSG)...');
  
  const distPath = path.resolve(process.cwd(), 'dist');
  const indexPath = path.join(distPath, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('dist/index.html does not exist. Run vite build first.');
    process.exit(1);
  }

  // Create a Vite dev server in SSR mode to safely load and transform image/css/tsx imports
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  try {
    // Dynamically load src/App.tsx through Vite SSR module loader
    const { default: App } = await vite.ssrLoadModule('/src/App.tsx');

    // Render the App component to static HTML string
    const appHtml = renderToString(React.createElement(App));

    // Read the built index.html
    let indexHtml = fs.readFileSync(indexPath, 'utf-8');

    // Replace <div id="root"></div> with the pre-rendered HTML
    if (indexHtml.includes('<div id="root"></div>')) {
      indexHtml = indexHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    } else if (indexHtml.includes('<div id="root">')) {
      indexHtml = indexHtml.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${appHtml}</div>`);
    }

    fs.writeFileSync(indexPath, indexHtml, 'utf-8');
    console.log('Successfully injected pre-rendered static HTML into dist/index.html!');
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error('Error during static pre-rendering:', err);
  process.exit(1);
});
