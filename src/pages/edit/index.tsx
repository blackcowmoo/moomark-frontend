import PostEditor from '@components/PostEditor';

interface editPostProps{
  editorName: string;
  isNewPost: boolean;
}

const EditPage: React.FC<editPostProps> = (props) => {
  return (
    <>
      <PostEditor editorName={'mockCow'} isNewPost={props.isNewPost} text={''} tags={[]} title={''}/>
    </>
  );
};

export default EditPage;
