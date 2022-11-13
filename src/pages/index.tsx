import { type NextPage } from "next";
import { TMap } from "../component/Map";

const Home: NextPage = () => {
  return (
    <div className="h-[300px] w-[300px]">
      <TMap coordinates={[26, 8]} />
    </div>
  );
};

export default Home;
