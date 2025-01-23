import Section_2 from "./components/HomePage/Section_2";
import Slider from "./components/HomePage/Slider";
import ExpoStatistics from "./components/HomePage/ExpoStatistics";

const Home = () => {
  return (
    <div>
      <main>
        <Slider />
        <Section_2 />
        <ExpoStatistics />
      </main>
    </div>
  );
}

export default Home;
