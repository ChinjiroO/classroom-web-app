import Home from './home/Home'

export const routes = [    
    {
        path: '/',
        component: Home,
        isAuth: true,
        exact: true
    },
]