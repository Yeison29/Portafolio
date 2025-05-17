export const calculateScrollbarWidth = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty(
      '--scrollbar-width', 
      `${scrollbarWidth}px`
    );
    return scrollbarWidth;
  };