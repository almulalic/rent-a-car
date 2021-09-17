// import { Layout, Menu } from "antd";
import { BackTop, Layout } from "antd";
import { UpOutlined } from "@ant-design/icons";
import HeroText from "./Components/HeroText";
import RentDiv from "./Components/RentDiv";
import OurCars from "./Components/OurCars";
import "./Landing.css";
import { Navbar } from "../../../components/Navbar/Navbar";
import { PersonalizedFooter } from "../../../components/Footer/PersonalizedFooter";

export const Landing = () => {
  const { Content } = Layout;

  return (
    <Layout className="layout">
      <Navbar />
      <Content>
        <div className="site-layout-content">
          <HeroText />
        </div>
      </Content>
      <RentDiv />
      <BackTop>
        <div className="site-layout-outline">
          <UpOutlined />
        </div>
      </BackTop>
      <OurCars />
      <PersonalizedFooter />
    </Layout>
  );
};
