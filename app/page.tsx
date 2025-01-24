import Section_2 from "./components/HomePage/Section_2";
import Slider from "./components/HomePage/Slider";
import ExpoStatistics from "./components/HomePage/ExpoStatistics";
import ImageSlider2 from "./components/ImageSlider/ImageSlider-2";

const Home = () => {
  return (
    <div>
      <main>
        <Slider />
        <Section_2 />
        <ExpoStatistics />
        <ImageSlider2 />

      </main>
    </div>
  );
}

export default Home;
