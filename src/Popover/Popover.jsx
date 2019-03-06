import React, { useState, useRef, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import { Popper, placements } from "react-popper";
import { useSpring, animated, config } from "react-spring";

import { MapContext } from "../App";
import { getMouseEvent, getReferenceElement } from "./utils";

import "./popover.scss";

const modifiers = {
  preventOverflow: { padding: 10 },
  offset: { offset: "10px, 10px" },
  flip: { padding: 10 }
};

const Popover = ({
  preferredPosition,
  className,
  children,
  trigger,
  width,
  height
}) => {
  const [isOpen, toggleOpen] = useState(false);
  const [referenceElement, updateReferenceElement] = useState({});
  const { isDragging, zoom } = useContext(MapContext);
  const popoverEl = useRef();

  useEffect(() => {
    React.Children.only(trigger);
    React.Children.only(children);
  }, []);

  useEffect(() => {
    toggleOpen(false);
  }, [zoom]);

  const handleMouseOver = e => {
    const { target } = getMouseEvent(e);
    const referenceElement = getReferenceElement(target);

    updateReferenceElement(referenceElement);
    toggleOpen(true);
  };

  const handleMouseOut = e => {
    const { toElement } = getMouseEvent(e);

    const target = toElement && toElement.className;
    const isActive =
      popoverEl.current && popoverEl.current.getElementsByClassName(target)[0];

    if (!isActive) toggleOpen(false);
  };

  const transition = useSpring({
    opacity: isOpen ? 1 : 0,
    config: config.molasses
  });

  const popoverClassName = cx("popover", [className]);

  return (
    <>
      {React.cloneElement(trigger, {
        onMouseOver: handleMouseOver,
        onMouseOut: handleMouseOut
      })}

      {isOpen &&
        !isDragging &&
        ReactDOM.createPortal(
          <Popper
            placement={preferredPosition}
            positionFixed={true}
            referenceElement={referenceElement}
            modifiers={modifiers}
          >
            {({ ref, style, placement, arrowProps }) => (
              <animated.div
                ref={node => {
                  popoverEl.current = node;
                  return ref(node);
                }}
                style={{
                  ...style,
                  ...transition,
                  width,
                  height
                }}
                className={popoverClassName}
                onMouseLeave={handleMouseOut}
              >
                <div className="popover-content">{children}</div>

                <div
                  ref={arrowProps.ref}
                  className="popover-arrow"
                  data-placement={placement}
                  style={arrowProps.style}
                />
              </animated.div>
            )}
          </Popper>,
          document.getElementById("root")
        )}
    </>
  );
};

Popover.propTypes = {
  trigger: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
  preferredPosition: PropTypes.oneOf(placements),
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

Popover.defaultProps = {
  preferredPosition: "right",
  className: "",
  width: 250,
  height: 300
};

export default Popover;
