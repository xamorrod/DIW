import { BrowserRouter as Router } from "react-router-dom"; 
import AppRoutes from "./routes/AppRoutes";
import './i18n/i18n';

import Navbar from "./components/Navbar";
import SocialLinks from "./components/ui/SocialLinks";
import IntroSection from "./components/Intro/IntroSection";

function App() {
  return (
    <Router>
      <Navbar />
      <SocialLinks />
      <AppRoutes />
    </Router>
  );
}

export default App;
