import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

export const useWindowScroll = () => {
    const [scroll, setScroll] = useState({x: window.scrollX, y: window.scrollY})

    const handleScroll = () => {
        setScroll({x: window.scrollX, y: window.scrollY})
    }

    useWindowEvent('scroll', handleScroll)

    const scrollTo = ({ x = 0, y = 0 }) => {
        window.scrollTo({ top: y, left: x, behavior: 'smooth' });
      };
    
      return [scroll, scrollTo];
}