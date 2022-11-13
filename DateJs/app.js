

var tarix = new Date().getHours();
var body = document.body

console.log(tarix)

if (tarix<=12) {
    body.style.backgroundColor='yellow'
    alert('sabahiniz xetyir')
}


else if(tarix>12){
    body.style.backgroundColor='black'
    alert('geceniz xeyre')
}