import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import Global from "./styles/global";
import ModalProvider from "./contexts/ModalContext";

const App = () => {
  return (
    <div className="App">
      <ModalProvider>
        <Global />
        <Header />
        <ProductList />
        <Footer />
      </ModalProvider>
    </div>
  );
};

export default App;
