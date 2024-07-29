import useWriteText from '../hooks/useWriteText';

function Loading() {
  const text = 'Loading...';
  const loadingText = useWriteText(text, 30);

  return (
    <div
      className="flex flex-col md:w-full text-center justify-center h-52 animate-pulse"
    >
      <p>
        {text.slice(0, loadingText)}
      </p>
    </div>
  );
}

export default Loading;
