import { useState, useRef } from 'react';
import Tag from './Tag';
import styles from './tag.module.scss';

export interface tagContainerProps {
  isEditable: boolean;
  tagList: string[];
  setTagList?: (item: string[]) => void;
}

const tagContainer: React.FC<tagContainerProps> = (props) => {
  const [text, setText] = useState<string>('');
  const { isEditable, tagList, setTagList } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const removeTag = (index: number) => {
    const newTagList = [...tagList];
    newTagList.splice(index, 1);
    if (setTagList) {
      setTagList(newTagList);
    }
  };

  const addTag = (tag: string) => {
    if (setTagList) {
      setTagList([...tagList, tag]);
    }
  };

  const tagInputCheck = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (inputRef?.current?.value) {
        for (const item of tagList) {
          if (item === inputRef.current.value) {
            return;
          }
        }
        setText('');
        addTag(inputRef.current.value);
      }
    } else if (e.key === 'Backspace' && text === '') {
      if (tagList.length) {
        removeTag(tagList.length - 1);
      }
    }
  };

  return (
    <>
      <div className={styles.tagList}>
        {tagList
          && tagList.map((tag, index) => {
            return <Tag key={index} deleteable={isEditable} text={tag} index={index} removeTag={removeTag} />;
          })}
        {isEditable && (
          <input
            placeholder={'input Tag'}
            className={styles.tagInput}
            ref={inputRef}
            onChange={(e) => setText(e.target.value)}
            onKeyUp={tagInputCheck}
            value={text}
          />
        )}
      </div>
    </>
  );
};

export default tagContainer;
