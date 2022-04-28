window.addEventListener('load', function () {
  setTimeout(function () {
    document.body.classList.add('animation-start')
  }, 200)

  console.log(Waypoint.viewportHeight(), 'x', Waypoint.viewportWidth())

  var waypoint = new Waypoint({
    element: document.getElementById('waypoint-step-1'),
    handler: function (direction) {
      console.log('Basic waypoint triggered', direction, this.triggerPoint)
      document.body.classList.add('animation-step-1')
      this.destroy()
      // this.disable()
    },
    offset: '50%'
  })

});
