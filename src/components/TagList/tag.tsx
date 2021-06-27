import Link from 'next/link';
import styles from './tag.module.scss';

interface TagComponents{
  index: number;
  text: string;
  deleteable: boolean;
  removeTag: (value:number)=>void;
}

const Tag: React.FC<TagComponents> = (props) => {
  return (
    <div className={styles.tag}>
      {props.deleteable
        ? <div onClick ={() => props.removeTag(props.index)} >{props.text}</div>
        : <Link href='/search'>{props.text}</Link>
      }
    </div>
  );
};

export default Tag;
