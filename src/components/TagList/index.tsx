import React, { useState, useEffect, useRef } from 'react';
import Tag from './Tag';
import styles from './tag.module.scss';

export interface tagContainerProps {
  isEditable: boolean;
  tagList: string[];
}

const tagContainer: React.FC<tagContainerProps> = (props) => {
  const [text, setText] = useState<string>('');
  const [tagArray, setTagList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const removeTag = (index: number) => {
    const newTagList = [...tagArray];
    newTagList.splice(index, 1);
    setTagList(newTagList);
  };

  const addTag = (tag: string) => {
    setTagList([...tagArray, tag]);
  };



  const tagInputCheck = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    
    if (e.key === 'Enter') {
      if (inputRef?.current?.value) {
        for(const item of tagArray){
          if(item===inputRef.current.value){

            return;
          }
        }
        addTag(inputRef.current.value);
        // inputRef.current.value = '';
        setText('');
      }
    }
    else if(e.key==='Backspace' && text===''){
      if(tagArray.length){
      removeTag(tagArray.length-1);
      }
    }
  };

  useEffect(() => {
    setTagList(props.tagList);
  }, []);

  return (
    <>
      <div className={styles.tagList}>
        {tagArray &&
          tagArray.map((tag, index) => {
            return <Tag key={index} deleteable={props.isEditable} text={tag} index={index} removeTag={removeTag} />;
          })}
        {props.isEditable && <input placeholder = {'input Tag'} className={styles.tagInput} ref={inputRef} onChange={(e)=>setText(e.target.value)} onKeyDown={tagInputCheck} value={text} />}
      </div>
    </>
  );
};

export default tagContainer;
