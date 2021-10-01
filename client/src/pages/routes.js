import Home from './dashboard/home/Home'
import Feed from './inClassroom/feed/Feed'
import JoinClass from './inClassroom/joinClass/JoinClass'

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
    {
        path: '/h/:id',
        component: JoinClass,
        isAuth: true,
        exact: true,
    }
]