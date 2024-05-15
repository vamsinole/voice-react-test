import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App/Screens/Home";
import Register from "./App/Components/Registers";

import Knowledge from "./App/Screens/Knowledge";
import Voice from "./App/Screens/Voice";
import Users from "./App/Screens/Users";
import Calls from "./App/Screens/Calls";
import Actions from "./App/Screens/Actions";
import Customers from "./App/Screens/Customers";
import Orders from "./App/Screens/Orders";
import Emails from "./App/Screens/Emails";

import NewAssistant from "./App/Screens/NewAssistant";
import AssistantDashboard from "./App/Screens/AssistantDashboard";
import EditAssistant from "./App/Screens/EditAssistant";
import AuthLogin from "./App/Screens/AuthLogin";
import Setting from "./App/Screens/Setting";
import UsersControls from "./App/Screens/UsersControls";

import LandingPage from "./App/Screens/LandingPage";
import Privacy from "./App/Screens/Privacy";
import Terms from "./App/Screens/Terms";
// import ForgetPassword from "./App/Screens/ForgotPassword";
// import Profile from "./App/Screens/Profile";
// import Security from "./App/Screens/Security";
// import OtpVerification from "./App/Screens/OtpVerification";
// import NewPassword from "./App/Screens/NewPassword";

const publicRoutes = [
  { path: "/", component: LandingPage },
  // { path: 'login', component: Login },
  { path: "register", component: Register },

  { path: "knowledge", component: Knowledge },
  { path: "assistants/:id", component: EditAssistant },
  { path: "assistants", component: Home },
  { path: "voice", component: Voice },
  { path: "users", component: Users },
  { path: "calls", component: Calls },
  { path: "actions", component: Actions },
  { path: "customers", component: Customers },
  { path: "orders", component: Orders },
  { path: "emails", component: Emails },
  { path: "newassistant", component: NewAssistant },
  { path: "new-assistant", component: AssistantDashboard },
  { path: "login", component: AuthLogin },
  { path: "landing", component: LandingPage },
  { path: "terms", component: Terms },
  { path: "privacy", component: Privacy },

  { path: "setting", component: Setting },
  { path: "userscontrols", component: UsersControls },
  // <-- new pages added -->
  // { path: "forgotpassword", component: ForgetPassword },
  // { path: "profile", component: Profile },
  // { path: "security", component: Security },
  // { path: "otp-verification", component: OtpVerification },
  // { path: "reset-password", component: NewPassword },

  // { path: '*', component: Pagenotfound },
];

function App() {
  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<LandingPage />} />
            {publicRoutes.map(({ path, component: Component }) => (
              <Route key={"path-" + path} path={path} element={<Component />} />
            ))}
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;