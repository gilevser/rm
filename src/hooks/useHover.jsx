import { useState, useRef, useEffect } from 'react';

export const  useHover = () => {
    const [hovered, setHovered] = useState(false);

    const ref = useRef(null);

      useEffect(() => {

        const hoveredElement = ref.current;

        if (hoveredElement) {
            hoveredElement.addEventListener("mouseover", () => setHovered(true));
            hoveredElement.addEventListener("mouseout", () => setHovered(false));

        }

        return () => {
            hoveredElement.removeEventListener("mouseover", () => setHovered(true));
            hoveredElement.removeEventListener("mouseout", () => setHovered(false));
        }
    
    }, [ref.current])

    return {
        ref, hovered
    }
}