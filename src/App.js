import CarousalMain from "./components/CarousalMain";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyles";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <CarousalMain /> */}
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
