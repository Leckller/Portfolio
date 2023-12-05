import { useState } from 'react';

function useWriteText(userText: string, timer: number = 100, go: boolean = true) {
  const [writeText, setWriteText] = useState(0);
  const text = userText;
  for (let i = 0; i < text.length && go; i++) {
    const write = () => setTimeout(() => {
      setWriteText(writeText + 1);
    }, timer);
    write();
    clearTimeout(write());
  }
  return writeText;
}

export default useWriteText;
