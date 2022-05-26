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
  border = '1px solid #8F8F8F;',
  textColor = 'var(--bg-secondary)',
  children,
}) => {
  return (
    <button
      className={styles.Button}
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
