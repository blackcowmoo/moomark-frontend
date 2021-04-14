import ReactMarkdown from 'react-markdown';
import { markDownID } from '@components/HeadingAnchor';
import { useState, VoidFunctionComponent, useEffect } from 'react';
import styles from './markdown.module.scss';
import React from 'react';

interface Props {
  markdown: string;
  updateAnchorList: (value: markDownID[]) => void;
}

const MarkDownRender: React.FC<Props> = ({ markdown, updateAnchorList }) => {
  const anchorList: markDownID[] = [];

  useEffect(() => {
    updateAnchorList([...anchorList]);
  }, [])

  const generateId = (() => {
    let levelCountArr = Array.from({ length: 6 }, () => 0 );
    return (level: number, name: string) => {
      const idString =  `h${level}-${++levelCountArr[level - 1]}`;
      console.log(idString);
      anchorList.push({level: level, id:`#${idString}`, name: name });
      return idString; 
    };
  })();

  const HeadingRenderer = (props: any) => {
    const slug = generateId(props.level, props.children);
    return React.createElement(`h${props.level}`, { id: slug }, props.children);
  };
  
  return (
    <div className={styles.markdown}>
      <ReactMarkdown source={markdown} renderers={{ heading: HeadingRenderer }} />
    </div>
  );
};

export default MarkDownRender;
