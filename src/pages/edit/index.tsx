import Editor from '@components/Editor';

interface editPostProps{
  editorName: string;
  isNewPost: boolean;
}

const EditPost: React.FC<editPostProps> = (props) => {
  return (
    <>
      <Editor isNewPost={props.isNewPost} text={'hello?'}/>
    </>
  );
};

export default EditPost;
