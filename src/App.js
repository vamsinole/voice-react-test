import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './App/Screens/Home';
import Register from './App/Components/Registers';

import Knowledge from './App/Screens/Knowledge';
import Voice from './App/Screens/Voice';
import Users from './App/Screens/Users';
import Calls from './App/Screens/Calls';
import Actions from './App/Screens/Actions';
import Customers from './App/Screens/Customers';
import Orders from './App/Screens/Orders';
import Emails from './App/Screens/Emails';

import NewAssistant from './App/Screens/NewAssistant';
import AssistantDashboard from './App/Screens/AssistantDashboard';
import AuthLogin from './App/Screens/AuthLogin';
import Setting from './App/Screens/Setting';
import UsersControls from './App/Screens/UsersControls';

import LandingPage from './App/Screens/LandingPage';
import Privacy from './App/Screens/Privacy';
import Terms from './App/Screens/Terms';



const publicRoutes = [
  { path: '/', component: Home },
  // { path: 'login', component: Login },
  { path: 'register', component: Register },

  { path: 'knowledge', component: Knowledge },
  { path: 'assistant', component: Home },
  { path: 'voice', component: Voice },
  { path: 'users', component: Users },
  { path: 'calls', component: Calls },
  { path: 'actions', component: Actions },
  { path: 'customers', component: Customers },
  { path: 'orders', component: Orders },
  { path: 'emails', component: Emails },
  { path: 'newassistant', component: NewAssistant },
  { path: 'assistant-dashboard', component: AssistantDashboard },
  { path: 'login', component: AuthLogin },
  { path: 'landing', component: LandingPage },
  { path: 'terms', component: Terms },
  { path: 'privacy', component: Privacy },

  { path: 'setting', component: Setting },
  { path: 'userscontrols', component: UsersControls },


  // { path: '*', component: Pagenotfound },
]

function App() {

  return (
    <>

      <>
        <BrowserRouter>
          {/* <Header/> */}
          <Routes>
            <Route path="/" index element={<Home />} />
            {publicRoutes.map(({ path, component: Component }) => (
              <Route key={'path-' + path} path={path} element={<Component />} />
            ))}
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </>
    </>
  );
}

export default App;