import BakeryAndBiscuits from "../components/home/BakeryAndBiscuits";
import Categories from "../components/home/Categories";
import DairyBreadAndEggs from "../components/home/DairyBreadAndEggs";
import PanCorner from "../components/home/PanCorner";

const Home = () => {
  return (
    <>
      <PanCorner />
      <Categories />
      <DairyBreadAndEggs />
      <BakeryAndBiscuits />
    </>
  );
};

export default Home;
