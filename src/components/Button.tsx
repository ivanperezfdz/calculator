import styles from "../styles/Button.module.scss";

interface ButtonProps {
  type?: "special" | "equals";
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, label, onClick }) => {
  return (
    <button
      className={`${styles.button} ${type ? styles[type] : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
