import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  width: 1920px;
  height: 400px;
`;

// const MyIcon = styled(LeftOutlined)`
//   transform: translate(0, -50%);
//   font-size: 100px;
//   right: 100px;
//   color: white;
//   top: 50%;
//   border: 1px solid red;
// `;

// function NextArrow({ className, style, onClick }) {
//   return <MyIcon className={className} style={{ ...style }} onClick={onClick} />;
// }

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

export default function LayoutBanner(): JSX.Element {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 8000,
    // nextArrow: <NextArrow />,
  };

  return (
    <Wrapper>
      <CustomSlider {...settings}>
        <div>
          <a href="https://github.com/DumakIt" target="_blank">
            <img src={"/banner/GitHub.png"} />
          </a>
        </div>
        <div>
          <a href="https://velog.io/@dumakit" target="_blank">
            <img src={"/banner/velog.png"} />
          </a>
        </div>
      </CustomSlider>
    </Wrapper>
  );
}
