'use client';
import {
  EditorBubble,
  EditorBubbleItem,
  EditorCommand,
  EditorCommandItem,
  EditorContent,
  EditorRoot,
} from 'novel';
import { useState } from 'react';

const EditorText = () => {
  const [content, setContent] = useState('sdfds');

  return (
    <EditorRoot>
      <EditorContent
        initialContent={content}
        onUpdate={({ editor }) => {
          const json = editor.getJSON();
          setContent(json);
        }}
      />
    </EditorRoot>
  );
};
export default EditorText;
