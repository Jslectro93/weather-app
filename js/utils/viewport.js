export function setViewportSize($el) {
    const viewportBLockSize = getViewport()
    $el.style.blockSize = `${viewportBLockSize}px`
}

export function getViewport() {
  return window.innerHeight;
}

export function onViewPortResize(callback) {
  window.addEventListener("resize", callback);
}

export function offViewportResize(callback) {
  window.removeEventListener("resize", callback);
}

export function viewportSize($el) {
    setViewportSize($el)
    
    onViewPortResize(() => setViewportSize($el))
}


