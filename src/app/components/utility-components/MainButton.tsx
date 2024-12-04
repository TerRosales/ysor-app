import Link from "next/link";
import "@/app/styles/home.css";
import Image from "next/image";
import { FaSpaceAwesome } from "react-icons/fa6";

type Props = {};

const MainButton = (props: Props) => {
  return (
    <div className="container">
      <Link href="/sign-in" className="button">
        <div className="button-content">
          <span className="button-text">Launch App</span>
          <FaSpaceAwesome />

          <div className="button-reflection-1"></div>
          <div className="button-reflection-2"></div>
        </div>

        <Image
          src="/assets/star.png"
          alt=""
          className="button-star-1"
          width={150}
          height={150}
        />
        <Image
          src="/assets/space-trooper.png"
          alt=""
          className="button-star-2"
          width={150}
          height={150}
        />
        <Image
          src="/assets/planet.png"
          alt=""
          className="button-circle-1"
          width={150}
          height={150}
        />
        <Image
          src="/assets/planet.png"
          alt=""
          className="button-circle-2"
          width={150}
          height={150}
        />
        <Image
          src="/assets/dronebot.png"
          alt=""
          className="button-spacetrooper"
          width={150}
          height={150}
        />
        <Image
          priority
          src="/assets/spaceship.png"
          alt=""
          className="button-triangle"
          width={150}
          height={150}
        />

        <div className="button-shadow"></div>
      </Link>
    </div>
  );
};

export default MainButton;
