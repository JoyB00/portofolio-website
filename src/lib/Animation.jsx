const VerticalPanUP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.5 },
};
const VerticalPanDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.5 },
};
const Fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1.5 },
};
const HorizontalPanRight = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
  transition: { duration: 1 },
};
const HorizontalPanLeft = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
  transition: { duration: 1 },
};

export {
  VerticalPanDown,
  VerticalPanUP,
  HorizontalPanRight,
  HorizontalPanLeft,
  Fade,
};
