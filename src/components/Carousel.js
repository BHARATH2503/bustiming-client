import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import "../css/Carousel.css";
function CarouselFadeExample() {
  return (
    <Container>
    <Carousel fade variant='dark'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/passengers-bus-stop_40816-736.jpg?size=626&ext=jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/public-transport-people-composition-passengers-stand-bus-stop-waiting-their-bus-while-other-buses-pass-by-vector-illustration_1284-69526.jpg?size=626&ext=jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/passengers-bus-stop_40816-736.jpg?size=626&ext=jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel><br></br>
    </Container>
  );
}

export default CarouselFadeExample;
