import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import ArtistView from '../views/Artist.vue';
import SearchView from '../views/Search.vue';
import AlbumView from '../views/Album.vue';
import Login from '../views/Login.vue';
import Callback from '../views/Callback.vue';
import defaultLayout from '@/layout/default.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: defaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
      ],
    },
    {
      path: '/artists/:id',
      name: 'artist',
      component: defaultLayout,
      children: [
        {
          path: '/artists/:id',
          name: 'artist',
          component: ArtistView,
        },
      ],
    },
    {
      path: '/search/:search?',
      name: 'search',
      component: defaultLayout,
      children: [
        {
          path: '/search/:search?',
          name: 'search',
          component: SearchView,
        },
      ],
    },
    {
      path: '/albums/:id',
      name: 'album',
      component: defaultLayout,
      children: [
        {
          path: '/albums/:id',
          name: 'album',
          component: AlbumView,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: defaultLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login,
        },
      ],
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback,
    },
  ],
});

export default router;
