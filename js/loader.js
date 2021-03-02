export function loader(state) {
    const loader = document.querySelector('div.loader')
    if (state === 'active') {
      loader.classList.add('loading')
    } else {
      loader.classList.remove('loading')
    }
  }