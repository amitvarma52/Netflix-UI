import "./App.css";
import Cards from "./Components/Cards/Cards";
import Nav from "./Components/Nav/Nav";
import Trending from "./Components/Trending/Trending";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Nav/>
      <Trending/>
      <Cards />
      <Footer/>
    </>
  );
}

export default App;
