import slide_image_1 from "../assets/avatar.png";
import slide_image_2 from "../assets/avatar.png";
import slide_image_3 from "../assets/avatar.png";
import slide_image_4 from "../assets/avatar.png";
import slide_image_5 from "../assets/avatar.png";
import slide_image_6 from "../assets/avatar.png";
import slide_image_7 from "../assets/avatar.png";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";

export default function CarouselComponent() {
  const images = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
  ];
  return (
    <div className="carousel W-2">
      <FancyCarousel
        images={images}
        carouselRadius={300}
        peripheralImageRadius={80}
        peripheralImageBoxShadow="0px"
        centralImageBoxShadow="0px"
        autoRotateTime={3}
        borderHexColor={"1c364f"}
      />
    </div>
  );
}
