let start = document.getElementById("buttonGame")
let p = document.getElementById("gameH1")
let w = document.querySelector(".hushum")

let i = 3
start.addEventListener("click" , function () {
    let y = +document.getElementById("input").value
    let g = Math.ceil(Math.random() * 10)
    if (g == y) {
        p.innerText = "you win:)"
        start.style.display = "none"
        w.style.display = "none"
        document.getElementById("resultH1").style.display = "none"
    }else if(y > g){
        i = i - 1
        w.innerText = "number is less than the number you typed"
        }else{
            i = i - 1
            w.innerText = "number is greater than the number you typed"
        }
        
        if (i <= 0) {
            document.getElementById("resultH1").innerText = "you lose։("
            document.getElementById("input").style.display = "none";
            start.style.display = "none"
            p.style.display = "none"
            w.style.display = "none"
        }else{
            document.getElementById("resultH1").innerText = `left to you ${i} experience`
        } 
    }
)