import { Fragment } from 'react'; // thẻ ảo k chứa j
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters, privateRouters } from '~/routes';
import Layoutmaster from './Components/layout/Layoutmaster.js';

function App() {
   return (
      <Router>
         <div>
            <Routes>
               {publicRouters.map((route, index) => {
                  const Page = route.component;
                  let Layout = Layoutmaster;
                  if (route.layout) {
                     Layout = route.layout;
                  } else if (route.layout === null) {
                     Layout = Fragment;
                  }
                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     />
                  );
               })}
            </Routes>
         </div>
      </Router>
   );
}
export default App;
