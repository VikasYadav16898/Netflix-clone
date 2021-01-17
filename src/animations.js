export const topCarousalAnimation = {
  hidden: {
    y: "-100vh",
    opacity: "0",
  },
  show: {
    y: "0vh",
    opacity: "1",
    transition: {
      duration: "2",
      delay: "2",
    },
  },
};

export const ListAnimation = {
  hidden: {
    y: "100vh",
    opacity: "0",
  },
  show: {
    y: "0vh",
    opacity: "1",
    transition: {
      duration: "2",
      delay: "2",
    },
  },
};

export const descriptionAnimation = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 5,
    },
  },
};
