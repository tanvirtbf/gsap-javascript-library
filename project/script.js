let myFun = console.log("function called")

gsap.to("#box1", {
  x:500, 
  y:300,
  rotation: 360,
  duration: 5,
  // delay : 2,
  // repeat: 3,
  // yoyo : true
  // ease : 'bounce.out',
  runBackwards : true
})
