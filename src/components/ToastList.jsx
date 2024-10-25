import React , {useEffect, useRef} from 'react'
import Toast from './Toast';

function ToastList({data, removeToast}) {
    const listRef = useRef(null);
    const handleScrolling = (el) => {
        el?.scrollTo(0, el.scrollHeight);
    };
    useEffect(() => {
      handleScrolling(listRef.current);
    }, [data]);
    
  return (
    data.length > 0 && (
        <div className='absolute top-4 right-9' ref={listRef}>
        {data.map((toast)=>(
            <Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)}/>
        ))}
        </div>
    )
  )
}

export default ToastList