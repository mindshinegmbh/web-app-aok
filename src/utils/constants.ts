export const InputType = {
  text: 'text',
  checkbox: 'checkbox',
  radio: 'radiobutton',
};

export const InitialAnimationYD = {
  y: -300,
  opacity: 0,
};
export const EnterAnimationYD = {
  y: 0,
  opacity: 1,
};
export const ExitAnimationYD = {
  y: 300,
  opacity: 0,
};

export const InitialAnimationY = {
  y: -100,
  opacity: 0,
};
export const EnterAnimationY = {
  y: 0,
  opacity: 1,
};
export const ExitAnimationY = {
  y: 100,
  opacity: 0,
};

export const InitialAnimationS = {
  scale: 0.5,
  opacity: 0,
};
export const EnterAnimationS = {
  scale: 1,
  opacity: 1,
};
export const ExitAnimationS = {
  scale: -0.5,
  opacity: 0,
};

export const InitialAnimationO = {
  opacity: 0,
};
export const EnterAnimationO = {
  opacity: 1,
};
export const ExitAnimationO = {
  opacity: 0,
};

export const transitionTop = {
  duration: 0.4,
  delay: 0.1,
  ease: 'easeIn',
  type: 'tween',
};

export const transitionInput = {
  duration: 0.4,
  delay: 0.5,
  ease: 'easeIn',
  type: 'tween',
};

export const transitionStandard = {
  duration: 0.9,
  delay: 0.5,
  ease: 'easeIn',
  type: 'spring',
};

export const ulAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

export const liAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const buttonAnimationTransition = { type: 'spring', stiffness: 400, damping: 10 };
export const buttonAnimationTap = { scale: 1 };
export const buttonAnimationHover = {
  scale: 1.02,
};
export const buttonAnimationHoverCircle = {
  scale: 1.1,
};
