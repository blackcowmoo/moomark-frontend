import { useState, useEffect } from 'react';
import Tag from './tag';
import styles from './tag.module.scss';

export interface tagContainerProps {
  isDeleteable: boolean;
  tagList: string[];
}
const tagContainer: React.FC<tagContainerProps> = (props) => {
  const [tagList, setTagList] = useState<string[]>([]);

  const removeTag = (index: number) => {
    const newTagList = [...tagList];
    newTagList.splice(index, 1);
    setTagList(newTagList);
  };

  useEffect(() => {
    setTagList(props.tagList);
  }, []);

  return (
    <div className={styles.tagList}>
      {tagList.map((tag, index) => {
        return <Tag key ={index} deleteable={props.isDeleteable} text={tag} index={index} removeTag={removeTag} />;
      })}
    </div>
  );
};

export default tagContainer;
