import { RefObject } from 'react';

interface toolBarProps {
  targetTextArea: RefObject<HTMLTextAreaElement>;
  changeText: (e: string) => void;
}

interface inputStyle {
  prefix?: string;
  suffix?: string;
  // trimFirst?: boolean;
  // multiline?: boolean;
  // surroundWithNewlines?: boolean;
  // blockPrefix?: string;
  // blockSuffix?: string;
  // replaceNext?: string;
  // scanFor?: string;
  // orderedList?: boolean;
  // prefixSpace?: boolean;
}

interface toolButton extends inputStyle {
  name: string;
}

const ToolBar: React.FC<toolBarProps> = ({ targetTextArea, changeText }) => {
  const buttonList: toolButton[] = [
    { name: 'header_1', prefix: '\n# ' },
    { name: 'header_2', prefix: '\n## ' },
    { name: 'header_3', prefix: '\n### ' },
    { name: 'header_4', prefix: '\n#### ' },
    { name: 'horizontal_rule', prefix: '\n***\n' },
    { name: 'bold', prefix: '**', suffix: '**' },
    { name: 'strikethrough', prefix: '~~', suffix: '~~' },
    { name: 'italic', prefix: '_', suffix: '_' },
    { name: 'code', prefix: '```\n', suffix: '\n```\n' },
  ];
  const onClickToolButton = (button: toolButton) => {
    if (targetTextArea.current) {
      const field = targetTextArea.current;
      console.log(field.selectionStart);
      console.log(field.selectionEnd);
      console.log(button);
      if (field.selectionStart || field.selectionStart === 0) {
        const startPos = field.selectionStart;
        const endPos = field.selectionEnd;
        let input: string = '';

        if (button.prefix && button.suffix) {
          const before = field.value.slice(0, startPos);
          const after = field.value.slice(endPos);

          input = button.prefix + button.name + button.suffix;
          field.value = before + input + after;

          changeText(before + input + after);
          const startSelection = startPos + button.prefix.length;
          field.setSelectionRange(startSelection, startSelection + button.name.length);
          field.focus();
        } else if (button.prefix && button.suffix === undefined) {
          const before = field.value.slice(0, startPos);
          const after = field.value.slice(endPos);
          if (button.name === 'horizontal_rule') {
            input = button.prefix;
            changeText(before + input + after);
          } else {
            input = button.prefix;
            changeText(before + input + after);
            const startSelection = startPos + button.prefix.length;
            console.log(startSelection, startSelection + button.name.length);
            field.setSelectionRange(startSelection, startSelection);
          }
          field.focus();
        }
        // field.value[startPos]
      }
    }
  };

  return (
    <div>
      {buttonList.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              onClickToolButton(item);
            }}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default ToolBar;
