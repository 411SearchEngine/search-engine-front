export default [
  {path: '/', component: './Index/index'},

  {
    path: '/list/search/articles/:keyword',
    component: './List/List',
  },

  {
    component: '404',
  },
];
