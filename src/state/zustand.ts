import create from "zustand";

type State = {
  pageVariants: {
    off: { opacity: number; y: number };
    on: { opacity: number; y: number };
  };
  pageTransitions: {
    type: string;
    // stiffness: number;
    // ease: string;
    // duration: number;
  };
};

const useStore = create<State>((set) => ({
  pageVariants: {
    off: { opacity: 0, y: -25 }, // x: "-25"
    on: { opacity: 1, y: 0 }, // x: 0
  },
  pageTransitions: {
    type: "tween", // "spring"
    // stiffness: 85,
    // ease: "anticipate", // "easeOut",
    // duration: 0.5,
  },
}));

export default useStore;
