import {useEffect} from 'react';

export const useNavObserver = (selectors: string, handler: (section: string | null) => void) => {
  console.log('selectors ', selectors);
  useEffect(() => {
    // Create the IntersectionObserver API
    const observer = new IntersectionObserver(
      entries => {
        console.log('000', entries);
        entries.forEach(entry => {
          console.log(entry);
          console.log(selectors);
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -70% 0px',
      },
    );

    // Cleanup
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Dependency here is the post content.
};
