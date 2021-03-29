export interface editPostProps{
  editorName: string;
  tags: string[];
}

const EditPost: React.FC<editPostProps> = ({ editorName, tags }) => {
  // document.title = `${editPostProps.editorName}`;
  return (
    <>
      {editorName}
      {tags}
    </>
  );
};

export default EditPost;
