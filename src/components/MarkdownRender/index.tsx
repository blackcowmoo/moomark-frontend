import { useEffect, createElement, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { markDownID } from '@components/HeadingAnchor';
import styles from './markdown.module.scss';

interface Props {
  markdown: string;
  updateAnchorList: (value: markDownID[]) => void;
  updateFocusAnchor: (value: string) => void;
}

const getScrollTop = () => {
  if (!document.body) return 0;
  const scrollTop = document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop;
  console.log(scrollTop);
  return scrollTop;
};

const MarkDownRender: React.FC<Props> = ({ markdown, updateAnchorList, updateFocusAnchor }) => {
  const [height, setHeight] = useState<number>(0);
  const anchorList: markDownID[] = [];
  const selector = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rect = selector?.current?.getBoundingClientRect();
    console.log(rect);
    console.log(rect?.top);
    updateAnchorPosition(anchorList);
    updateAnchorList([...anchorList]);
    console.log(anchorList);

    window.addEventListener('scroll', scrollEvent, false);
    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);

  const scrollEvent = () => {
    getScrollTop();
    const checkFocused = (origin: markDownID, dynamicY: number) => {
      if (!origin.positionY) return false;
      return (origin.positionY < dynamicY + 30)? true : false;
      //return Math.abs(origin.positionY - dynamicY) < 60 ? true : false;
    };
    const rect = document.body.getBoundingClientRect();
    console.log(rect?.top * -1);
    for(let i = anchorList.length -1; i>-1; i--){
      if(!anchorList[i].positionY) return;
      if(checkFocused(anchorList[i], rect.top * -1)) {
        console.log('update!');
        updateFocusAnchor(anchorList[i].id);
      }
    }
    // for (const item of anchorList) {
    //   if (checkFocused(item, rect.top * -1)) {
    //     console.log('update!');
    //     console.log(item.id);
    //     updateFocusAnchor(item.id);
    //   }
    // }
  };

  const generateId = (() => {
    const levelCountArr = Array.from({ length: 6 }, () => 0);
    return (level: number, name: string) => {
      levelCountArr[level - 1] += 1;
      const idString = `h${level}-${levelCountArr[level - 1]}`;
      anchorList.push({ level, id: `#${idString}`, name, positionY: -1 });
      return idString;
    };
  })();

  const updateAnchorPosition = (anchorList: markDownID[]) => {
    const scrollTop = getScrollTop();
    for (let item of anchorList) {
      console.log(selector?.current?.childNodes);
      console.log(item.id, document.getElementById(item.id.substr(1))?.offsetTop);
      // item.positionY = document.getElementById(item.id.substr(1))?.offsetTop;

      const anchor = document.getElementById(item.id.substr(1));
    }
  };

  const headingRenderer = (props: any) => {
    const slug = generateId(props.level, props.children);
    return createElement(`h${props.level}`, { id: slug }, props.children);
  };

  return (
    <div className={styles.markdown} ref={selector}>
      <ReactMarkdown source={markdown} renderers={{ heading: headingRenderer }} />
    </div>
  );
};

export default MarkDownRender;
