import css from "./Button.module.css";

function Button({ onClick, type, inverted, children, del }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        `${css.btnMain} ${inverted && css.btnInverted} ${del && css.delete}`
        // inverted ? css.btnInverted : css.btnMain || del ? css.delete : null
      }
    >
      {children}
    </button>
  );
}
export default Button;
