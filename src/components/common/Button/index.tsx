import styles from './Button.module.scss';

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  buttonColor?: string;
  backgroundColor?: string;
  border?: string;
  text?: string;
  textColor?: string;
  width?: string;
}

const index: React.FC<Props> = ({
  onClick,
  text = 'Button',
  buttonColor = 'var(--accent)',
  border = 'none',
  textColor = 'var(--bg-secondary)',
  children,
}) => {
  return (
    <button
      className={styles.Button}
      style={{
        color: textColor,
        border: border,
        backgroundColor: buttonColor,
      }}
      onClick={onClick}
    >
      {children || text}
    </button>
  );
};

export default index;
