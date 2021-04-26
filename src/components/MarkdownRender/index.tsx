import { useEffect, createElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { markDownID } from '@components/HeadingAnchor';
import styles from './markdown.module.scss';

interface Props {
  markdown: string;
  updateAnchorList: (value: markDownID[]) => void;
}

const MarkDownRender: React.FC<Props> = ({ markdown, updateAnchorList }) => {
  const anchorList: markDownID[] = [];

  useEffect(() => {
    updateAnchorList([...anchorList]);
  }, []);

  const generateId = (() => {
    const levelCountArr = Array.from({ length: 6 }, () => 0);
    return (level: number, name: string) => {
      levelCountArr[level - 1] += 1;
      const idString = `h${level}-${levelCountArr[level - 1]}`;
      anchorList.push({ level, id: `#${idString}`, name });
      return idString;
    };
  })();

  const HeadingRenderer = (props: any) => {
    const slug = generateId(props.level, props.children);
    return createElement(`h${props.level}`, { id: slug }, props.children);
  };

  return (
    <div className={styles.markdown}>
      <ReactMarkdown source={markdown} renderers={{ heading: HeadingRenderer }} />
    </div>
  );
};

export default MarkDownRender;
