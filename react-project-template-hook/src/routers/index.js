import Index from '@/views/index'
import home from './modules/home'
import blog from './modules/blog'

const routers = [
  { path: '/layout', component: Index, exact: true },
  ...home,
  ...blog,
]

console.log(routers, 'routers')
export default routers
