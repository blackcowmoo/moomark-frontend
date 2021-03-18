export interface editPostProps{
  editorName: string;
  tags: string[];
}

const EditPost: React.FC<editPostProps> = (editPostProps) => {
  // document.title = `${editPostProps.editorName}`;
  return (
    <>
      edit page
    </>
  );
};

export default EditPost;
