import App from '@/App'
import home from './home'
import template from './template'

const routerConfig = [
  { path: '/', component: App, exact: true },
  ...home,
  ...template,
]
export default routerConfig
