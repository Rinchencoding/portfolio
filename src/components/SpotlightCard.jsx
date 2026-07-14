import PropTypes from "prop-types";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "130,69,236",
  Component = motion.article,
  clipOverflow = true,
  ...motionProps
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(${spotlightColor}, 0.18), transparent 80%)`;

  return (
    <Component
      onMouseMove={handleMouseMove}
      className={`group relative ${clipOverflow ? "overflow-hidden" : ""} ${className}`}
      {...motionProps}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      {children}
    </Component>
  );
};

SpotlightCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  spotlightColor: PropTypes.string,
  Component: PropTypes.elementType,
  clipOverflow: PropTypes.bool,
};

export default SpotlightCard;
