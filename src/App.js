import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestProducts from "./components/LatestProducts";
import Loader from "./components/Loader";
import MainSlider from "./components/MainSlider";

function App() {
  return (
    <div>
      <Loader />

      <Header />

      <MainSlider />

      <LatestProducts />

      <Footer />
    </div>
  );
}

export default App;
