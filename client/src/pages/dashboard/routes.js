import Home from './home/Home'
import Classwork from './classwork/Classwork'
import Member from './member/Member'

export const routes = [    
    {
        path: '/dashboard/',
        component: Home,
        isAuth: true,
        exact: true
    },
    {
        path: '/dashboard/classwork',
        component: Classwork,
        isAuth: true,
        exact: true
    },
    {
        path: '/dashboard/member',
        component: Member,
        isAuth: true,
        exact: true
    },
]