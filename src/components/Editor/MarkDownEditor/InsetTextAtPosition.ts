function canManipulateViaTextNodes(targetTextArea: HTMLTextAreaElement | HTMLInputElement) {
  if (targetTextArea.nodeName !== 'TEXTAREA') {
    return false;
  }
  let browserSupportsTextareaTextNodes;
  if (typeof browserSupportsTextareaTextNodes === 'undefined') {
    const textarea = document.createElement('textarea');
    textarea.value = '1';
    browserSupportsTextareaTextNodes = !!textarea.firstChild;
  }
  return browserSupportsTextareaTextNodes;
}

export function insertText(targetTextArea: HTMLTextAreaElement | HTMLInputElement, text: string) {
  targetTextArea.focus();

  // IE 8-10
  if ((document as any).selection) {
    const ieRange = (document as any).selection.createRange();
    ieRange.text = text;

    ieRange.collapse(false /* to the end */);
    ieRange.select();

    return;
  }

  // Webkit + Edge
  const isSuccess = document.execCommand('insertText', false, text);
  if (!isSuccess) {
    const start = targetTextArea.selectionStart;
    const end = targetTextArea.selectionEnd;
    if (!(start && end)) return;
    // Firefox (non-standard method)
    if (typeof (targetTextArea as any).setRangeText === 'function') {
      (targetTextArea as any).setRangeText(text);
    } else if (canManipulateViaTextNodes(targetTextArea)) {
      const textNode = document.createTextNode(text);
      let node = targetTextArea.firstChild;

      // If textarea is empty, just insert the text
      if (!node) {
        targetTextArea.appendChild(textNode);
      } else {
        // Otherwise we need to find a nodes for start and end
        let offset = 0;
        let startNode = null;
        let endNode = null;

        // To make a change we just need a Range, not a Selection
        const range = document.createRange();

        while (node && (startNode === null || endNode === null)) {
          const nodeLength = node.nodeValue ? node.nodeValue.length
            : 0;

          // if start of the selection falls into current node
          if (start >= offset && start <= offset + nodeLength) {
            range.setStart((startNode = node), start - offset);
          }

          // if end of the selection falls into current node
          if (end >= offset && end <= offset + nodeLength) {
            range.setEnd((endNode = node), end - offset);
          }

          offset += nodeLength;
          node = node.nextSibling;
        }

        if (start !== end) {
          range.deleteContents();
        }
        range.insertNode(textNode);
      }
    } else {
      const { value } = targetTextArea;
      targetTextArea.value = value.slice(0, start) + text + value.slice(end);
    }

    targetTextArea.setSelectionRange(start + text.length, start + text.length);

    const e = document.createEvent('UIEvent');
    e.initEvent('targetTextArea', true, false);
    targetTextArea.dispatchEvent(e);
  }
}
