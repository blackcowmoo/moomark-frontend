import MarkdownRender from '@components/MarkdownRender';
import styles from './postcontents.module.scss';

interface Props{
  contents: string;
};

const PostContents:React.FC<Props> = ({contents}) => {
  return (
    <div className={styles.contents}>
      <MarkdownRender content={contents}/>
      
    </div>
  )

}

export default PostContents;