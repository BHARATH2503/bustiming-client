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
// function UncontrolledExample() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="size d-block"
//           src="https://media.istockphoto.com/photos/bus-terminal-picture-id530183841?k=20&m=530183841&s=612x612&w=0&h=H1P5SpvdzmSTOuUIHwuEnvZR_KhkKDjrwI5GDgdraOY="
//           alt="First slide" />
       
//         <Carousel.Caption>
//           <h3>Best Bus Stand</h3>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="size d-block"
//           src="https://c1.wallpaperflare.com/preview/604/391/623/ankara-bus-photos-intercity.jpg" alt="Second slide"/>

//         <Carousel.Caption>
//           <h3>Best Bus Stand</h3>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="size d-block"
//           src="https://c4.wallpaperflare.com/wallpaper/532/594/483/digital-art-artwork-bus-stop-street-japan-hd-wallpaper-preview.jpg" alt="Third slide"
//         />
          

//         <Carousel.Caption>
//           <h3>Best Bus Stand</h3>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;