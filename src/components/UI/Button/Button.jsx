import css from "./Button.module.css";

function Button({ onClick, type, inverted, children }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={inverted ? css.btnInverted : css.btnMain}
    >
      {children}
    </button>
  );
}
export default Button;
