import dynamic from 'next/dynamic';

const PostEditor = dynamic(
  () => import('@components/PostEditor'),
  { ssr: false },
);
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
