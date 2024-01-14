import Image from "next/image";
import { Scenes } from "./_components/scenes";
import { Timer } from "./_components/timer";

const ScenarioPage = () => {
  return (
    <div>
      <Scenes />
      <Timer />
    </div>
  );
};

export default ScenarioPage;
