//pages
import Home from '~/Components/layout/Home';
// import Following from '~/pages/Following';
// import Profile from '~/pages/Following';
// import Upload from '~/pages/Upload';
// import Search from '~/pages/Search';

// layout
// import { HeaderOnly } from '~/Components/Layoutmaster';

// không cầm đăng nhập vẫn vào đc
const publicRouters = [
   { path: '/', component: Home },
   // { path: '/following', component: Following },
   // { path: '/profile', component: Profile },
   // { path: '/upload', component: Upload, layout: HeaderOnly },
   // { path: '/search', component: Search, layout: null },
   // { path: '/search', component: Search, layout: null },
];

// đăng nhập mới vào được còn không chuyến hướng
const privateRouters = [];
export { publicRouters, privateRouters };
