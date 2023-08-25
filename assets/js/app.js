let btn = document.getElementById('colorbtn');
let colorName = document.getElementById('textofcolor');


colors = ['red','black','green','yellow', 'pink'];

//listen button click
btn.addEventListener('click', function(){
    //change background to a static color;
    // document.body.style.backgroundColor = 'green';

    let randomnumber = (Math.random() * colors.length);

    let pageColor = Math.floor(randomnumber);

    console.log(pageColor);

    //getting color from colors array
    document.body.style.backgroundColor = colors[pageColor];
    colorName.textContent = colors[pageColor];
});


//counter project variables
let ourActualCount = 0;
let counterBtns = document.querySelectorAll('.btn');
let counterValue = document.getElementById('value');

//listen for button click
counterBtns.forEach( counterBtn => {
    counterBtn.addEventListener('click',function(e){
        let classes = e.currentTarget.classList;
        if (classes.contains('increase')) {
            ourActualCount = ourActualCount + 1;
            counterValue.innerText = ourActualCount;
        }
        else if(classes.contains('decrease')){
            ourActualCount = ourActualCount - 1;
            counterValue.textContent = ourActualCount;
        }
        else{
            ourActualCount = 0;
            counterValue.textContent = ourActualCount;
        }

        if (ourActualCount > 0) {
            counterValue.style.color = 'green';
        }
        else if(ourActualCount < 0){
            counterValue.style.color = 'red';
        }
        else{
            counterValue.style.color = 'black';
        }

    })
});

