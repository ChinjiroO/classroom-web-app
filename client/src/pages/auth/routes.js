import SignIn from './signIn/SignIn'
import SignUp from './signUp/SignUp'

export const routes = [
    {
        path: '/sign_in',
        component: SignIn,
        isAuth: false,
        exact: true
    },
    {
        path: '/sign_up',
        component: SignUp,
        isAuth: false,
        exact: true
    },
]