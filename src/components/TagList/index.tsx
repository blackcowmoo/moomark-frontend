import React, { useState, useEffect, useRef} from 'react';
import Tag from './tag';
import styles from './tag.module.scss';

export interface tagContainerProps {
  isEditable: boolean;
  tagList: string[];
}

const tagContainer: React.FC<tagContainerProps> = (props) => {
  const [tagArray, setTagList] = useState<string[]>([]);
  const inputRef = useRef(null);

  const removeTag = (index: number) => {
    const newTagList = [...tagArray];
    newTagList.splice(index, 1);
    setTagList(newTagList);
  };

  const addTag = (tag: string) => {
    console.log(tag);
    console.log([...tagArray]);
    
    setTagList([...tagArray, tag]);
  }

  const tagInputCheck = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key==='Enter' || e.key===' '){
      console.log(inputRef);
      console.log(inputRef.current.value);
      addTag(inputRef.current.value);
      
      inputRef.current.value='';
    }
  }

  useEffect(() => {
    setTagList(props.tagList);
  }, []);

  return (
    <>
    <div className={styles.tagList}>
      {tagArray&& tagArray.map((tag, index) => {
        return <Tag key={index} deleteable={props.isEditable} text={tag} index={index} removeTag={removeTag} />;
      })}
      {props.isEditable && <input ref={inputRef} className={styles.edit} onKeyDown={tagInputCheck} />}
    </div>
    </>
  );
};

export default tagContainer;
