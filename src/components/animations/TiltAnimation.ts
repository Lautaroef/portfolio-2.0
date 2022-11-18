import VanillaTilt from "vanilla-tilt";

function TiltAnimation() {
  const elements: NodeListOf<HTMLElement> = document.querySelectorAll(".box");
  const elementsArray: HTMLElement[] = Array.from(elements);

  VanillaTilt.init(elementsArray, {
    max: 1.2, // max tilt rotation (degrees) 35 1.2
    perspective: 900, // Transform perspective, the lower the more extreme the tilt gets. 1000 - 900
    scale: 1.02, // 1.015
    speed: 700, // Speed of the enter/exit transition 300 / 700
    glare: true,
    "max-glare": 0.07, // 0.09
  });
}

export default TiltAnimation;
