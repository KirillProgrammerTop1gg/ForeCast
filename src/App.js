import Header from "./Components/header/Header";
import Weather from "./Components/Weather/Weather";
import Info from "./Components/Info/Info";
import Slider from "./Components/Slider/Slider";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      <Header checkLogin={(val) => setLogin(val)}/>
      <Weather isLogin={login}/>
      <Info />
      <Slider />
      <Footer />
    </>
  )
}

export default App;