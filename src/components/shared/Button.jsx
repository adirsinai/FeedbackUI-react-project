import ProTypes from "prop-types";

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.prototype = {
  children: ProTypes.node.isRequired,
  version: ProTypes.string,
  type: ProTypes.string,
  isDisabled: ProTypes.bool,
};

export default Button;
