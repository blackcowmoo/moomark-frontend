import { RefObject } from 'react';

interface toolBarProps{
  targetTextArea: RefObject<HTMLTextAreaElement> 
}
interface SelectionRange {
  text: string;
  startAt?: number;
  endAt?: number;
}
const insertText=(textarea: HTMLTextAreaElement)=>{



}

const ToolBar:React.FC<toolBarProps>= (props) => {

  return (
    <div>

    </div>
  );
};

export default ToolBar;
