import Editor from '@components/Editor';

interface editPostProps{
  editorName: string;
  isNewPost: boolean;
}

const EditPage: React.FC<editPostProps> = (props) => {
  return (
    <>
      <Editor editorName={'mockCow'} isNewPost={props.isNewPost} text={'hello?'} tags={[]} title={''}/>
    </>
  );
};

export default EditPage;
