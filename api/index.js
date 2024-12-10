export default import('../dist/angular-ssr-vercel/server/main.server.mjs')
  .then(module => module.app());