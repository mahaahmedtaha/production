import React from 'react';
import Loadable from 'react-loadable'


function Loading() {
    return <div></div>;
  }
  
const home = Loadable({
    loader: () => import('./Containers/home'),
    loading: Loading,
  });
// Multiple pages  
const fieding = Loadable({
    loader: () => import('./Containers/fiedingSector'),
    loading: Loading,
  });  
const construction = Loadable({
    loader: () => import('./Containers/constructionSector'),
    loading: Loading,
  });
// const food = Loadable({
//     loader: () => import('./Containers/foodStuffsSector'),
//     loading: Loading,
//   });  
const industry = Loadable({
    loader: () => import('./Containers/industrialSector'),
    loading: Loading,
  });
// single page  
const fish = Loadable({
    loader: () => import('./Containers/fishSector'),
    loading: Loading,
  });  
const medical = Loadable({
    loader: () => import('./Containers/medicalSector'),
    loading: Loading,
  });  
// const transportation = Loadable({
//     loader: () => import('./Containers/transportationSector'),
//     loading: Loading,
//   });  

// Akfa contact us ,complains, about us, apply for job
const contact = Loadable({
    loader: () => import('./Containers/contactUs'),
    loading: Loading,
  });
const complains = Loadable({
    loader: () => import('./Containers/complains'),
    loading: Loading,
  });  
// const about = Loadable({
//     loader: () => import('./Containers/aboutUs'),
//     loading: Loading,
//   });  
const apply = Loadable({
    loader: () => import('./Containers/applyForJob'),
    loading: Loading,
  });  

const routes=[
    // { path: '/web/', name: 'Home Page', component:{home}},
    { path: '/web/fieding', name: 'fieding Sector', component:{fieding}},
    { path: '/web/construction', name: 'construction Sector', component:{construction}},
    // { path: '/web/food', name: 'food Sector', component:{food}},
    { path: '/web/industrial', name: 'industrial Sector', component:{industry}  },
    { path: '/web/fish', name: 'fish sector', component:{fish}  },
    { path: '/web/medical', name: 'medical Sector', component:{medical}  },
    // { path: '/web/transportation', name: 'transportation Sector', component:{transportation}  },
    { path: '/web/contact', name: 'contact us', component:{contact}  },
    { path: '/web/complain', name: 'complains', component:{complains}  },
    // { path: '/web/about', name: 'about us', component:{about}  },
    { path: '/web/apply', name: 'apply for job', component:{apply}  },
]

export default routes;