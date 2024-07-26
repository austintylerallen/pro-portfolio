const { build } = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');

console.log('Starting esbuild...');

build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outdir: 'build',
  minify: true,
  sourcemap: true,
  define: { 'process.env.NODE_ENV': '"production"' },
  loader: {
    '.js': 'jsx',
    '.jsx': 'jsx',
    '.svg': 'file',
    '.jpg': 'file',
    '.png': 'file',
    '.mp4': 'file'
  },
  plugins: [sassPlugin()],
}).then(() => {
  console.log('Build completed successfully.');
}).catch((error) => {
  console.error('Build failed:', error);
  process.exit(1);
});
