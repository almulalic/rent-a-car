import React from "react";
import "./OurCars.css";
import car1 from "../../../../images/car1.png";
import car2 from "../../../../images/car2.png";
import car3 from "../../../../images/car3.png";

import { Row, Col, Card } from "antd";

const { Meta } = Card;

const contentStyle = {
  height: "20%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

class OurCars extends React.Component {
  render() {
    return (
      <div className="ourCars">
        <Row>
          <Col span={24}>
            <h2>Our</h2>
            <h1>Cars</h1>
          </Col>
        </Row>
        <Row id="carousel" gutter={16}>
          <Col xs={0} md={1} lg={1} class="col"></Col>
          <Col xs={24} md={7} lg={7}>
            <Card
              hoverable
              style={{ width: "100%", backgroundColor: "#ffbf00" }}
              cover={<img alt="example" src={car1} />}
            >
              <h4>SUV Class</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit, vulputate eu.
              </p>
              <h3>$25 / Day</h3>
            </Card>
          </Col>
          <Col xs={24} md={8} lg={8}>
            <Card
              hoverable
              style={{ width: "100%", backgroundColor: "#ffbf00" }}
              cover={<img alt="example" src={car2} />}
            >
              <h4>Sedan Class</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit, vulputate eu.
              </p>
              <h3>$25 / Day</h3>
            </Card>
          </Col>
          <Col xs={24} md={7} lg={7}>
            <Card
              hoverable
              style={{ width: "100%", backgroundColor: "#ffbf00" }}
              cover={<img alt="example" src={car3} />}
            >
              <h4>Hatchback Class</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit, vulputate eu.
              </p>
              <h3>$25 / Day</h3>
            </Card>
          </Col>

          <Col xs={0} md={1} lg={1} class="col"></Col>
        </Row>
      </div>
    );
  }
}

export default OurCars;
