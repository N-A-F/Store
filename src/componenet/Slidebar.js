import Carousel from "react-bootstrap/Carousel";
import Iphone from "./img/iphone14.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="as"
          src={Iphone}
          style={{ height: 300 }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>iphone 14</h3>
          <p>
            A magical new way to interact with iPhone. A vital safety feature
            designed to save lives. An innovative 48MP camera for mind-blowing
            detail. All powered by the ultimate smartphone chip.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="as"
          src={Iphone}
          style={{ height: 300 }}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Pro.Beyond.</h3>
          <p>iPhone 14 Pro and iPhone 14 Pro Max</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="as"
          src={Iphone}
          style={{ height: 300 }}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Designed for durability.</h3>
          <p>
            With Ceramic Shield, tougher than any smartphone glass. Water
            resistance.1 Surgical-grade stainless steel. 6.1″ and 6.7″ display
            sizes.2 All in four Pro colors.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
