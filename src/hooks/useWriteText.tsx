import { useState } from 'react';

function useWriteText(
  userText: any,
  timer: number = 100,
  go: boolean = true,
) {
  const [writeText, setWriteText] = useState(0);
  const text = userText;
  if (writeText < text.length) {
    const write = () => setTimeout(() => {
      setWriteText(writeText + 1);
    }, timer);
    for (let i = 0; i < text.length && go; i++) {
      write();
      clearTimeout(write());
    }
    clearTimeout(write());
  }
  return writeText;
}

export default useWriteText;
