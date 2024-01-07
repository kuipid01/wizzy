import  { useEffect, useState } from 'react'

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<number >(window.innerWidth)
   
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); // Empty dependency array ensures that effect runs only on mount and unmount
    
      
    return windowWidth
}

export default useWindowWidth