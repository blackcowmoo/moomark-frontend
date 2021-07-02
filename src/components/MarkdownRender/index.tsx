import { useEffect, createElement, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { markDownID } from '@components/HeadingAnchor';
import styles from './markdown.module.scss';

interface Props {
  markdown: string;
  updateAnchorList: (value: markDownID[]) => void;
  updateFocusAnchor: (value: string) => void;
}

const MarkDownRender: React.FC<Props> = ({ markdown, updateAnchorList, updateFocusAnchor }) => {
  const anchorList: markDownID[] = [];
  const selector = useRef<HTMLDivElement>(null);

  const generateId = (() => {
    const levelCountArr = Array.from({ length: 6 }, () => 0);
    return (level: number, name: string) => {
      levelCountArr[level - 1] += 1;
      const idString = `h${level}-${levelCountArr[level - 1]}`;
      anchorList.push({ level, id: `${idString}`, name, height: -1 });
      return idString;
    };
  })();

  const headingRenderer = (props: any) => {
    const slug = generateId(props.level, props.children);
    return createElement(`h${props.level}`, { id: slug }, props.children);
  };

  const getScrollTop = () => {
    if (!document.body) return 0;
    const scrollTop = document.documentElement ? document.documentElement.scrollTop || document.body.scrollTop : document.body.scrollTop;
    return scrollTop;
  };

  const checkFocused = (origin: markDownID, dynamicY: number) => {
    if (!origin.height) return false;
    return origin.height < dynamicY + 30;
  };

  const updateAnchorPosition = () => {
    const scrollTop = getScrollTop();
    for (const item of anchorList) {
      const anchor = document.getElementById(item.id);
      if (!anchor) {
        item.height = 0;
      } else {
        item.height = anchor.getBoundingClientRect().top + scrollTop;
      }
    }
  };

  const scrollEvent = () => {
    const rect = document.body.getBoundingClientRect();
    for (let i = anchorList.length - 1; i > -1; i -= 1) {
      if (!anchorList[i].height) return;
      if (checkFocused(anchorList[i], rect.top * -1)) {
        updateFocusAnchor(anchorList[i].id);
        return;
      }
    }
  };

  useEffect(() => {
    updateAnchorPosition();
    updateAnchorList([...anchorList]);
    window.addEventListener('scroll', scrollEvent, false);
    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);

  return (
    <div className={styles.markdown} ref={selector}>
      <ReactMarkdown source={markdown} renderers={{ heading: headingRenderer }} plugins={[gfm]} />
    </div>
  );
};

export default MarkDownRender;
