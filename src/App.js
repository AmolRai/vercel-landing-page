import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import Chart from "./components/Chart";
import DeploymentFeatures from "./components/DeploymentFeatures";
import ScaleCard from "./components/ScaleCard";
import DeployCard from "./components/DeployCard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="vercel-page-container">
      <Navbar />
      <div className="content-section">
        <HeroSection />
        <Feature />
        <Chart />
        <DeploymentFeatures />
        <ScaleCard />
        <DeployCard />
      </div>
      <Footer />
    </div>
  );
};

export default App;
