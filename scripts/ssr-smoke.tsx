/**
 * Dev-only smoke test: renders every route to a string so a broken component
 * fails loudly in CI/terminal instead of in the browser. Safe to delete.
 */
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App'

const routes = ['/', '/pods', '/apna-pc', '/about', '/start-a-pod', '/stories', '/donate', '/contact', '/does-not-exist']

let failed = 0
for (const route of routes) {
  try {
    const html = renderToString(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>,
    )
    const hasH1 = /<h1/.test(html)
    console.log(`ok    ${route.padEnd(18)} ${String(html.length).padStart(6)} chars  h1:${hasH1 ? 'yes' : 'no'}`)
  } catch (error) {
    failed += 1
    console.error(`FAIL  ${route}`, error)
  }
}
console.log(failed === 0 ? '\nAll routes rendered.' : `\n${failed} route(s) failed.`)
process.exit(failed === 0 ? 0 : 1)
