import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Blogs from './components/Blogs.vue'
import contact from './components/Contact.vue'
import Blog from './components/Blog/Blog.vue'

import All from './components/Portfolio/All.vue'
import Logo from './components/Portfolio/Logo.vue'
import Video from './components/Portfolio/Video.vue'
import GraphicDesign from './components/Portfolio/Graphic Design.vue'
let routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    {
        path: "/portfolio/all",
        component: Portfolio,
        children: [
            { path: "/portfolio/all", component: All },
            { path: "/portfolio/logo", component: Logo },
            { path: "/portfolio/video", component: Video },
            { path: "/portfolio/graphicDesign", component: GraphicDesign },
        ]
    },
    {
        path: "/blogs",
        component: Blogs,
        children: [
            { path: "/blogs/:id", component: Blog },
        ]
    },
    { path: "/contact", component: contact },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;