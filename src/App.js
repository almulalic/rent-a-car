import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import { DatePicker } from "antd";

function App() {
  return (
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  );
}

export default App;
