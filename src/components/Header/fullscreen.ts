export function isInFullScreen() {
  const document: any = window.document;
  return (
    (document.fullscreenElement && document.fullscreenElement !== null) ||
    (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null)
  );
}

export function requestFullScreen(elem: any) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullScreen) {
    elem.webkitRequestFullScreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else {
    console.warn('Did not find a requestFullScreen method on this element', elem);
  }
}

export function exitFullScreen() {
  const document: any = window.document;
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
