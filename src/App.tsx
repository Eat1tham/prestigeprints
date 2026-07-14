import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { useLenis } from "./hooks/useLenis";
import Hero from "./components/sections/Hero";
import VideoCarousel from "./components/sections/VideoCarousel";
import VehicleTransform from "./components/sections/VehicleTransform";
import Transformation from "./components/sections/Transformation";
import HowItWorks from "./components/sections/HowItWorks";
import ProductShowcase from "./components/sections/ProductShowcase";
// StickerPack is temporarily unmounted per request; component kept for later use.
// import StickerPack from "./components/sections/StickerPack";
import CustomStickerPacks from "./components/sections/CustomStickerPacks";
// VideoReveal's videos now live as floating cards in the Hero; component kept for later use.
// import VideoReveal from "./components/sections/VideoReveal";
import OrderCTA from "./components/sections/OrderCTA";

function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <Hero />
        <VideoCarousel />
        <VehicleTransform />
        <HowItWorks />
        <ProductShowcase />
        <CustomStickerPacks />
        <Transformation />
        <OrderCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
