import dynamic from "next/dynamic";

const DynamicDatepicker = dynamic(() => import("../components/datePicker"), { ssr: false });

const Home = () => {
  return (
    <>
      <DynamicDatepicker />
    </>
  );
};

export default Home;