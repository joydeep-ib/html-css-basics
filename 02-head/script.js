function addRainbow() {
  const elems = document.querySelectorAll('.rainbow')

  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
  ]
  setInterval(() => {
    elems.forEach(e => e.className = colors[parseInt(Math.random() * 7)])
  }, 200)
}


addRainbow();
