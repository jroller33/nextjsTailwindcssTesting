import dynamic from "next/dynamic";
import MyCarousel from "../components/MyCarousel";

const DynamicCarousel = dynamic(() => import("../components/MyCarousel"), { ssr: false });
// const DynamicDatepicker = dynamic(() => import("../components/datePicker"), { ssr: false });

const Home = () => {
  return (
    <div>

      <MyCarousel />

    </div>
  );
};

export default Home;