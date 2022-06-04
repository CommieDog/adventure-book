// import Container from "./components/Container/pageContainer";
import Nav from "./components/Navbar/navbar";
import Foot from "./components/Footer/footer";
import Home from "./pages/Home";
import './App.css';

export default function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Foot />
    </div>
  )
}
