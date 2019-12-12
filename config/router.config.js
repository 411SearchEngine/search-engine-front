export default [

  {
    path: '/',
    routes: [
      // dashboard
      {path: '/', redirect: '/index'},
      {path: '/index', component: './Index/index'},


      {
        path: '/list/search',
        name: 'searchlist',
        component: './List/List',
        routes: [
          {
            path: '/list/search',
            redirect: '/list/search/articles',
          },
          {
            path: '/list/search/articles',
            name: 'articles',
            component: './List/Articles',
          },
          {
            path: '/list/search/projects',
            name: 'projects',
            component: './List/Projects',
          },
          {
            path: '/list/search/applications',
            name: 'applications',
            component: './List/Applications',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
