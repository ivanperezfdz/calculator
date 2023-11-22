import styles from "../styles/Display.module.scss";

interface DisplayProps {
  value: string;
  error: string;
}

const Display: React.FC<DisplayProps> = ({ value, error }) => {
  return <div className={styles.display}>{error || value || "0"}</div>;
};

export default Display;
