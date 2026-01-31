import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function Home() {
  return (
    <div className="bg-[#0e0f1c] text-white min-h-screen">
      <Header />

      <Hero />

      <About />

      <Footer />
    </div>
  );
}

export default Home;
