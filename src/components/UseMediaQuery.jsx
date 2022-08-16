import { useState, useEffect } from 'react';

function UseMediaQuery(query) {
    const mediaMatch = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaMatch.matches);
    const matchHandler = e => setMatches(e.matches);
    
    useEffect(() => {
        mediaMatch.addEventListener('change', matchHandler);
        return () => mediaMatch.removeEventListener('change', matchHandler);
    }, []);

    return matches;
}

export {
    UseMediaQuery
};
