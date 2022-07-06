import styles from './Button.module.scss';

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  buttonColor?: string;
  backgroundColor?: string;
  border?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  text?: string;
  textColor?: string;
  width?: string;
}

const index: React.FC<Props> = ({
  onClick,
  text = 'Button',
  type,
  buttonColor = 'var(--accent)',
  border = 'none',
  textColor = 'var(--bg-secondary)',
  children,
}) => {
  return (
    <button
      className={styles.Button}
      type={type}
      style={{
        color: textColor,
        border,
        backgroundColor: buttonColor,
      }}
      onClick={onClick}
    >
      {children || text}
    </button>
  );
};

export default index;
