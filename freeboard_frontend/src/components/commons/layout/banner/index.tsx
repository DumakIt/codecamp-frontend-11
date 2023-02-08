import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 40px;
`;

const CustomSlider = styled(Slider)`
  .slick-prev {
    color: white;
    left: 200px;
    width: 100px;
    height: 100px;
    transform: translate(0, -50%);
    top: 50%;
    z-index: 1;
    &::before {
      font-size: 100px;
    }
  }

  .slick-next {
    right: 200px;
    width: 100px;
    height: 100px;
    transform: translate(0, -50%);
    top: 50%;
    &::before {
      font-size: 100px;
    }
  }
  .slick-dots {
    bottom: 25px;

    li button:before {
      color: white;
    }
  }
  .slick-slide {
    visibility: hidden;
  }
  .slick-slide.slick-active {
    visibility: visible;
  }
`;

const ImgDiv = styled.div`
  width: 100%;
  height: 400px;
`;

const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export default function LayoutBanner(): JSX.Element {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <Wrapper>
      <CustomSlider {...settings}>
        <ImgDiv>
          <a href="https://github.com/DumakIt" target="_blank">
            <Img src={"/layout/GitHub.png"} />
          </a>
        </ImgDiv>
        <ImgDiv>
          <a href="https://velog.io/@dumakit" target="_blank">
            <Img src={"/layout/velog.png"} />
          </a>
        </ImgDiv>
      </CustomSlider>
    </Wrapper>
  );
}
