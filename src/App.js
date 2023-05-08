import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/herosection/herosection";
import Boxes from "./components/boxes/boxes";
import Info from "./components/info/info";
import Info2 from "./components/info/info2";
import Info3 from "./components/info/info3";
import Info4 from "./components/info/info4";
import Questions from "./components/questions/questions";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Boxes />
      <Info />
      <Info2 />
      <Info3 />
      <Info4 />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
