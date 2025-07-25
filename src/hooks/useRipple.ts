import { useCallback } from 'react';

export const useRipple = () => {
  const createRipple = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 600ms linear;
      background-color: rgba(255, 255, 255, 0.3);
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      pointer-events: none;
    `;
    
    // Check if button has dark background for appropriate ripple color
    const computedStyle = window.getComputedStyle(button);
    const backgroundColor = computedStyle.backgroundColor;
    
    // Simple heuristic to determine if background is light or dark
    if (backgroundColor.includes('255, 255, 255') || 
        backgroundColor.includes('bae6ff') || 
        backgroundColor.includes('seafoam')) {
      ripple.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    }
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }, []);

  return createRipple;
};
