document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('ready')
  console.log('ready')
});

window.addEventListener('load', function () {
  document.body.classList.add('loaded')
  console.log('loaded')
});
