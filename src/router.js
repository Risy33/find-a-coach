import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesRegistration from './pages/coaches/CoachesRegistration.vue';
import RequestRecieved from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/requests/NotFound.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    {
      path: '/coaches',
      component: CoachesList,
    },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: [{ path: '/contact', component: ContactCoach }], // /coaches/coachId/contact
    },
    { path: '/register', component: CoachesRegistration },
    { path: '/requests', component: RequestRecieved },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
