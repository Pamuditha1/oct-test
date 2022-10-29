import "antd/dist/antd.css";
import "./styles/main.css";
import { RecoilRoot } from "recoil";
import ChartCom from "./components/Chart";
import ChartsMenu from "./components/ChartsMenu";
import Title from "./components/Title";

function App() {
  return (
    <RecoilRoot>
      <div style={{ margin: "3% 10%" }}>
        <Title title="Dashboard" />
        <ChartsMenu />
        <ChartCom />
      </div>
    </RecoilRoot>
  );
}

export default App;
