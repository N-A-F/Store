import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Iphone from "./img/iphone14.jpg";

function GridExample() {
  return (
    <div className="cont">
      <Row xs={1} md={3} className="g-5">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={Iphone} />
              <Card.Body>
                <Card.Title>iphone 14</Card.Title>
                <Card.Text>
                  A magical new way to interact with iPhone. A vital safety
                  feature designed to save lives. An innovative 48MP camera for
                  mind-blowing detail. All powered by the ultimate smartphone
                  chip.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default GridExample;
