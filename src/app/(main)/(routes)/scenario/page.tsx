import { Scenes } from "./_components/scenes";
import { Timer } from "./_components/timer";

const ScenarioPage = () => {
  return (
    <div className="flex-1 items-center justify-center pt-10">
      {/* <p>Hola</p>
      <p>Hola 2</p> */}
      <Scenes />
      <Timer />
    </div>
  );
};

export default ScenarioPage;
