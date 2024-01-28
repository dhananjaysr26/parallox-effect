import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const homeScreenEle = document.querySelector("#home-screen");
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: homeScreenEle,
        start: "top top",
        scrub: true,
      },
    });
    t1.to(
      "#moon",
      {
        x: 500,
        y: 300,
        scale: 0.1,
      },
      0
    );
    t1.to(
      "#mountain",
      {
        y: 100,
      },
      0
    );
    t1.to(
      "#road",
      {
        y: 200,
      },
      0
    );
    t1.to(
      "#name",
      {
        scale: 0.4,
        fontSize: 20,
        y: -200,
        top: 200,
      },
      0
    );
    // adding 0 will trigger/start all animation at the same time
  }, []);
  return (
    <div className="h-screen w-screen relative" id="home-screen">
      <img src="/images/bg.jpg" alt="image-1" className="absolute" />
      <img
        src="/images/moon.png"
        alt="image-2"
        className="absolute"
        id="moon"
      />
      <h1
        className=" text-[80px] font-bold text-white absolute top-[250px] left-1/2 -translate-x-1/2  "
        id="name"
      >
        MOON LIGHT
      </h1>
      <img src="/images/mountain.png" className="absolute" id="mountain" />
      <img
        src="/images/road.png"
        alt="image-4"
        className="absolute"
        id="road"
      />
    </div>
  );
};

export default HomeScreen;
