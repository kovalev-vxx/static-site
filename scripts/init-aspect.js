function initAspect() {
  if (typeof window === 'undefined') return

  const parents = document.querySelectorAll('[data-aspect-parent]')

  parents.forEach(parent => {
    const child = parent.querySelector('[data-aspect-child]')
    if (!child) return

    const rectChild = child.getBoundingClientRect()
    const rectParent = parent.getBoundingClientRect()

    const aspect = rectChild.width / rectChild.height
    parent.style.aspectRatio = aspect.toFixed(4)

    const scale = rectParent.width / rectChild.width
    child.style.transformOrigin = 'top left'
    child.style.transform = `scale(${scale.toFixed(4)})`
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAspect)
} else {
  initAspect()
}

window.addEventListener('next-route-changed', initAspect)
