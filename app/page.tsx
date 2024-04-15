import HeroSection from "./components/HeroSection";
import MyFooter from "./components/MyFooter";
import Statistic from "./components/Statistic";
export default function Home() {
  return (
    <main>
      <div className="">
        <HeroSection />
      </div>
      <div>
        <Statistic />
      </div>
      <div>
        <MyFooter />
      </div>
    </main>
  );
}
