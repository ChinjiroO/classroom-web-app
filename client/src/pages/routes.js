import Home from './dashboard/home/Home'
import Feed from './inClassroom/feed/Feed'

export const routes = [    
    {
        path: '/h',
        component: Home,
        isAuth: true,
        exact: true,
    },    
    {
        path: '/',
        component: Home,
        isAuth: true,
        exact: true,
    },    
    {
        path: '/h/:id/feed',
        component: Feed,
        isAuth: true,
        exact: true,
    },
]