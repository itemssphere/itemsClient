import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
import AboutUs from "./Pages/AboutUs";
import Charities from "./Pages/Charities";
import Main from "./Pages/Main";
import Market from "./Pages/Market";
import NewsPage from "./Pages/NewsPage";
import Organizations from "./Pages/Organizations";
import Shops from "./Pages/Shops";
import SocialProgramsPage from "./Pages/SocialProgramsPage";
import {useState} from "react";
import ProductPage from "./Components/ProductsPage/ProductPage";

function App() {

  const [headerType, setHeaderType] = useState([]);

  return (
    <div className="App">
      <Header type={headerType} />
      <Switch>
        <Route path="/" exact><Main typesetter={setHeaderType} /></Route>
        <Route path="/market" exact><Market typesetter={setHeaderType} /></Route>
        <Route path="/shops" exact><Shops typesetter={setHeaderType} /></Route>
        <Route path="/charities" exact><Charities typesetter={setHeaderType} /></Route>
        <Route path="/social-programs" exact><SocialProgramsPage typesetter={setHeaderType} /></Route>
        <Route path="/news" exact><NewsPage typesetter={setHeaderType} /></Route>
        <Route path="/about" exact><AboutUs typesetter={setHeaderType} /></Route>
        <Route path="/organizations" ><Organizations typesetter={setHeaderType} /></Route>
        <Route path="/product/:id" ><ProductPage /></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
