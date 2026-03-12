```javascript
let intro = document.getElementById("intro")
let bgm = document.getElementById("bgm")

let canvas = document.getElementById("game")
let ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let bg = new Image()
bg.src = "bg.png"

let noteImg = new Image()
noteImg.src = "normal note.png"

let notes = []

fetch("chart.json")
.then(r => r.json())
.then(data => {

notes = data.notes

})

intro.play()

intro.onended = () => {

intro.style.display = "none"

bgm.play()

requestAnimationFrame(loop)

}

function loop(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.drawImage(bg,0,0,canvas.width,canvas.height)

let time = bgm.currentTime

for(let n of notes){

let y = (time - n.time + 2) * 400

if(y > -100 && y < canvas.height){

ctx.drawImage(noteImg,n.lane * 150,y,80,80)

}

}

requestAnimationFrame(loop)

}
```
