let example = document.getElementsByClassName('example');
console.log(example);


myFunction = () => {
    for (let i = 0; i < example.length; i++) { //i++ damit er hochiteriert
        example[i].style.backgroundColor = "pink";
    }
}

//console.log(example.length);
//DOM lvl1-2-lev1_2