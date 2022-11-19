import { createRouter, createWebHistory } from 'vue-router';
import listPage from '../components/listPage'
import addPage from '../components/addPage'
import themePage from '../components/themePage'
import editPage from '../components/editPage'

const routes = [
    {
        path: "/",
        name: "listPage",
        component: listPage
    },
    {
        path: "/add",
        name: "addPage",
        component: addPage
    },
    {
        path: "/list/:themeId",
        name: "themePage",
        component: themePage,
        props: true
    },
    {
        path: "/edit/:themeId",
        name: "editPage",
        component: editPage,
        props: true
    },
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})
export default router 