import Home from '../components/home.vue'
import News from '../components/news.vue'
import Login from '../views/login.vue'

export default {
    routes:[
        {
            path:'/home',
            component: Home
        },
        {
            path:'/news',
            component: News
        },
        {
            path:'/',
            redirect: '/login'
        },
        {
            path:'/login',
            component: Login
        },

    ]
}
