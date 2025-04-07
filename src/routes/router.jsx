import About from '../pages/About'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import Team from '../pages/Team'
import Contact from '../pages/Contact'

const router = [
  {
    path: '/',
    element: <Home />,
    title: 'Home'
    // icon: <DynamicFeedIcon />
  },
  {
    path: 'about',
    element: <About />,
    title: 'About'
    // icon: <DynamicFeedIcon />
  },
  {
    path: 'portfolio',
    element: <Portfolio />,
    title: 'Portfolio'
    // icon: <DynamicFeedIcon />
  },
  {
    path: 'team',
    element: <Team />,
    title: 'Teams'
    // icon: <DynamicFeedIcon />
  },
  {
    path: 'contact',
    element: <Contact />,
    title: 'Contacts'
    // icon: <DynamicFeedIcon />
  }
]

export default router
