arr = []

document.getElementById('btn').onclick = 

function push() {
    var inputValue = document.getElementById('input').value;

    if(inputValue === '') {
        arr = arr;
        alert('Enter a valid input');
    }

    else {
        arr.push(inputValue);
        console.log('arr',arr)

    }

    


    document.getElementById('display').innerText = arr.join(' ');
    document.getElementById('input').value = ''
}

document.getElementById('btn1').onclick = 

function pop() {
    arr.pop();

    document.getElementById('display').innerText = arr.join(' ');
    
}