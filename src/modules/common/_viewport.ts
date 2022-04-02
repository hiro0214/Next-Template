export const switchViewportBehaivor = (): void => {
  const viewport = document.querySelector('meta[name="viewport"]') as Element;
  const deviceBp = 768;
  const pcBaseSize = 1040;
  const spBaseSize = 360;
  const initValue = 'width=device-width,initial-scale=1';

  const switchViewport = (): void => {
    const pcMedia = matchMedia(`${deviceBp <= window.outerWidth && window.outerWidth < pcBaseSize}`);
    const value =
      pcMedia.media === 'true'
        ? `width=${pcBaseSize}`
        : window.outerWidth < spBaseSize
        ? `width=${spBaseSize}`
        : initValue;

    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  };

  window.addEventListener('resize', switchViewport, false);
  switchViewport();
};
