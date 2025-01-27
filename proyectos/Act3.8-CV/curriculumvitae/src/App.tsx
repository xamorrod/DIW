import { Box, Button, Text } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom"; 
import AppRoutes from "./routes/AppRoutes";
import './i18n/i18n';

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
