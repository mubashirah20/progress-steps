const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1 ;

next.addEventListener('click', () =>{
    currentActive++ ;

    ///if it gets to the end, doesn't go past 4
    ///circles is a node list, treat like an array, length is amount of circles
    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    //to check on console, the loop
    //console.log(currentActive)
    update()
})

prev.addEventListener('click', () =>{
    currentActive--

    //if currentActive < 1, then you at beginning
    if (currentActive < 1) {
        currentActive = 1
    }

    update()
    //to check on console, the loop
    //console.log(currentActive)
})

//highlights each circle
function update() {
    circles.forEach((circle,idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })

    const actives= document.querySelectorAll('.active')

    progress.style.width = ((actives.length - 1)/ (circles.length - 1 )* 100 + '%')

    //greys out buttons once you can't go more next or more prev
    if (currentActive === 1){
        prev.disabled = true 
    } else if(currentActive === circles.length)  {
        next.disabled = true
    } else {
        prev.disabled = false 
        next.disabled = false 
    }
}