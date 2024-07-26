console.log('Starting esbuild...');
const { build } = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');

build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outdir: 'build',
  minify: true,
  sourcemap: true,
  define: { 'process.env.NODE_ENV': '"production"' },
  plugins: [sassPlugin()],
}).catch(() => process.exit(1));
