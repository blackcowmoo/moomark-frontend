import { RefObject, useState } from 'react';
import { insertText } from './utils';

interface toolBarProps {
  refTextArea: RefObject<HTMLTextAreaElement>;
}

interface inputStyle {
  prefix?: string;
  suffix?: string;
  trimFirst?: boolean;
}

interface toolButton extends inputStyle {
  name: string;
}

const ToolBar: React.FC<toolBarProps> = ({ refTextArea }) => {
  const [lastTool, setLastTool] = useState<string | null>(null);
  const buttonList: toolButton[] = [
    { name: 'header_1', prefix: '\n# ' },
    { name: 'header_2', prefix: '\n## ' },
    { name: 'header_3', prefix: '\n### ' },
    { name: 'header_4', prefix: '\n#### ' },
    { name: 'horizontal_rule', prefix: '\n***\n' },
    { name: 'quote', prefix: '\n> ' },
    { name: 'bold', prefix: '**', suffix: '**' },
    { name: 'strikethrough', prefix: '~~', suffix: '~~' },
    { name: 'italic', prefix: '_', suffix: '_' },
    { name: 'code', prefix: '\n```\n', suffix: '\n```\n' },
  ];

  const checkUndoInput = (name: string) => {
    if (name === lastTool) {
      return true;
    }
    setLastTool(name);
    return false;
  };

  const onClickToolButton = (button: toolButton) => {
    if (checkUndoInput(button.name)) return;

    if (refTextArea.current) {
      const field = refTextArea.current;
      if (field.selectionStart || field.selectionStart === 0) {
        const startPos = field.selectionStart;
        let input: string = '';

        if (button.prefix && button.suffix) {
          input = button.prefix + button.name + button.suffix;
          insertText(field, input);
          const startSelection = startPos + button.prefix.length;
          field.setSelectionRange(startSelection, startSelection + button.name.length);
        } else if (button.prefix && button.suffix === undefined) {
          if (button.name === 'horizontal_rule') {
            input = button.prefix;
            insertText(field, input);
          } else {
            input = button.prefix + button.name;
            insertText(field, input);
            const startSelection = startPos + button.prefix.length;
            field.setSelectionRange(startSelection, startSelection + button.name.length);
          }
          field.focus();
        }
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
