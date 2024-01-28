import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";

function App() {
  return (
    <div className="h-auto w-screen bg-[#0a2a43]/80">
      <Header />
      <HomeScreen />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
