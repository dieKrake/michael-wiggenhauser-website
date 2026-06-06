import { useState, useEffect } from 'react';

export function useExitIntent() {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse left the top of the viewport
      if (e.clientY <= 0) {
        // Check if user has already seen the popup in this session
        const hasSeenPopup = sessionStorage.getItem('exitPopupSeen');
        
        if (!hasSeenPopup) {
          setShowExitPopup(true);
          sessionStorage.setItem('exitPopupSeen', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { showExitPopup, setShowExitPopup };
}
