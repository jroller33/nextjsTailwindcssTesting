import dynamic from "next/dynamic";
import Carousel from "../components/Carousel";

const DynamicCarousel = dynamic(() => import("../components/Carousel"), { ssr: false });
// const DynamicDatepicker = dynamic(() => import("../components/datePicker"), { ssr: false });

const Home = () => {
  return (
    <div>

      <Carousel />

    </div>
  );
};

export default Home;