import Card from "./components/Card";
import SideBar from "./components/SideBar";
import data from "./data/data.json";
import "./App.scss";
import { useState } from "react";
import { toCamelCase } from "./utils/text.utils";
import { icons } from "./configs/icons";
import { colors } from "./configs/colors";

function App() {
  const [selectedNav, setSelectedNav] = useState<View>("weekly");
  return (
    <>
      <main>
        <SideBar currentView={selectedNav} setView={setSelectedNav} />
        <div className="app-grid">
          {data.map((item) => {
            const iconKey = `${toCamelCase(
              item.title
            )}Icon` as keyof typeof icons;
            const colorKey = `${toCamelCase(
              item.title
            )}Color` as keyof typeof colors;

            return (
              <Card
                key={item.title}
                title={item.title}
                main={item.timeframes[selectedNav].current}
                sub={item.timeframes[selectedNav].previous}
                icon={icons[iconKey]}
                color={colors[colorKey]}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
