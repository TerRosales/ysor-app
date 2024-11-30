import Link from "next/link";
import "@/app/styles/home.css";
import Image from "next/image";
import { FaSpaceAwesome } from "react-icons/fa6";

type Props = {};

const MainButton = (props: Props) => {
  return (
    <div className="container">
      <a href="#" className="button">
        <div className="button__content">
          <span className="button__text">Download</span>
          <FaSpaceAwesome />

          <div className="button__reflection-1"></div>
          <div className="button__reflection-2"></div>
        </div>

        <Image
          src="/assets/star.png"
          alt=""
          className="button__star-1"
          width={150}
          height={150}
        />
        <Image
          src="/assets/star.png"
          alt=""
          className="button__star-2"
          width={150}
          height={150}
        />
        <Image
          src="/assets/circle.png"
          alt=""
          className="button__circle-1"
          width={150}
          height={150}
        />
        <Image
          src="/assets/circle.png"
          alt=""
          className="button__circle-2"
          width={150}
          height={150}
        />
        <Image
          src="/assets/diamond.png"
          alt=""
          className="button__diamond"
          width={150}
          height={150}
        />
        <Image
          src="/assets/triangle.png"
          alt=""
          className="button__triangle"
          width={150}
          height={150}
        />

        <div className="button__shadow"></div>
      </a>
    </div>
  );
};

export default MainButton;
