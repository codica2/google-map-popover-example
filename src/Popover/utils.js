/**
 *	Takes an google event object and returns mouseEvent
 */
export const getMouseEvent = e => {
  let mouseEvent = {};

  for (let prop in e) {
    if (
      e[prop] &&
      (!!(e[prop].type === "mouseover") || !!(e[prop].type === "mouseout"))
    ) {
      mouseEvent = e[prop];
    }
  }

  return mouseEvent;
};

/**
 * Returns an reference object
 */
export const getReferenceElement = element => {
  const {
    top,
    left,
    right,
    bottom,
    width,
    height
  } = element.getBoundingClientRect();

  return {
    getBoundingClientRect: () => ({
      top,
      left,
      right,
      bottom
    }),
    clientWidth: width,
    clientHeight: height
  };
};
