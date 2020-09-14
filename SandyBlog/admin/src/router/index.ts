import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
// import CourseList from '../views/courses/List.vue'
// import CourseEdit from '../views/courses/Edit.vue'
// import EpisodeList from '../views/episodes/List.vue'
import ResourceCrud from '../views/ResourceCrud.vue'

Vue.use(VueRouter)

  const routes:RouteConfig[] = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      { path: '/', component: Home },
      { path: '/:resource/list',name:'course-crud', component: ResourceCrud,props:true },

      // { path: '/courses/list', component: CourseList },
      // { path: '/courses/create', component: CourseEdit },
      // { path: '/courses/edit/:id', component: CourseEdit ,props:true},
      // { path: '/episodes/list', component: EpisodeList },


    ]
  },
 
]

const router = new VueRouter({
  routes
})

export default router
