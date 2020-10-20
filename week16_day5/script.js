var btn = document.getElementById('btn')

btn.addEventListener('click', clickMe)
btn.addEventListener('mouseover', clickMe2)

function clickMe() {
    alert('Button Clicked');
}

function clickMe2() {
  btn.style.backgroundColor = 'red'
}