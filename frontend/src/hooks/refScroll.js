import { useRef } from 'react';

//hook
function useMoveScroll(props) {
  const element = useRef(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  console.log(props)
  return { element, onMoveToElement};
}

export default useMoveScroll;