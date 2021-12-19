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
        ? <span >{props.text} <button onClick ={() => props.removeTag(props.index)} >x</button></span>
        : <Link href='/search'>{props.text}</Link>
      }
    </div>
  );
};

export default Tag;
