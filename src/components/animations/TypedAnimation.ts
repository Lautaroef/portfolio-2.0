import Typed, { TypedOptions } from "typed.js";

// Configuration for the only typed anim | Home section
function TypedAnimation() {
  var options: TypedOptions = {
    strings: [
      "<b style='color:#694AF6'>Microservices architecture</b> ^200",
      "<b>Some cybersecurity</b> ^200",
      "<b>Project management</b>",
    ],
    typeSpeed: 50, // typeSpeed in milliseconds
    startDelay: 800, // startDelay Time before typing starts in milliseconds
    backDelay: 500, // backDelay Time before backspacing in milliseconds
    backSpeed: 40, // backSpeed in milliseconds

    fadeOut: true, // fadeOut Fade out transition instead of backspace. Default false
    fadeOutClass: "custom-fade-out", // fadeOutClass Css class for fade animation
    fadeOutDelay: 900, // fadeOutDelay Fade out delay in milliseconds

    loop: true,
    loopCount: Infinity,
  };
  new Typed(".element", options);
}

export default TypedAnimation;
