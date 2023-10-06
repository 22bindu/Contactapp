import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

let SectionTwo = () => {
  return (
    <React.Fragment>
      <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block custom-image'
        itemId={1}
        src='https://st3.depositphotos.com/33542994/35552/i/450/depositphotos_355525782-stock-photo-abstract-digital-connection-dots-lines.jpg'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block custom-image'
        itemId={2}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block custom-image '
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
    </React.Fragment>
  );
};
export default SectionTwo;
