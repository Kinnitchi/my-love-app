import React, { useEffect } from 'react';

export default function TerminalTypewriter({ text, isActive, onDone, style }) {
  const [output, setOutput] = React.useState('');
  const [idx, setIdx] = React.useState(0);

  useEffect(() => {
    if (!isActive) {
      setOutput('');
      setIdx(0);
      return;
    }
    if (idx < text.length) {
      const timeout = setTimeout(() => {
        setOutput((prev) => prev + text[idx]);
        setIdx((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    } else if (isActive && onDone) {
      onDone();
    }
    // eslint-disable-next-line
  }, [isActive, idx, text, onDone]);

  useEffect(() => {
    if (!isActive) {
      setOutput('');
      setIdx(0);
    }
  }, [isActive]);

  return (
    <span style={style}>{output}</span>
  );
}
