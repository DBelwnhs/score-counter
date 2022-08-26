let count1=0
let count2=0
home = document.getElementById("HomeScore")
guest = document.getElementById("GuestScore")

function add1(){
    count1+=1
    home.textContent = count1
}

function add2(){
    count1+=2
    home.textContent = count1
    
}

function add3(){
    count1+=3
    home.textContent = count1
    
}
// for guest
function add1G(){
    count2+=1
    guest.textContent = count2
}

function add2G(){
    count2+=2
    guest.textContent = count2
    
}

function add3G(){
    count2+=3
    guest.textContent = count2
    
}