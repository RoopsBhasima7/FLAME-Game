var arr = [];
const inputs = document.querySelectorAll('.inputBox input')
const checkMatchBtn = document.getElementById('checkMatchBtn');
const matchResultBox = document.querySelector('.matchResultBox');


checkMatchBtn.addEventListener('click',(e)=> {
    // GETTING NAMES
    var userName = document.getElementById('userName').value;
    var crushName = document.getElementById('crushName').value;
    console.log(userName + ' ' + crushName);
    // VALIDATE NAMES
    if(userName.length < 3 || crushName.length < 3){
        matchResultBox.innerHTML = 'Name must be greater than 2 characters';
        matchResultBox.classList.add('visible');
        return;
    }
    // GETTING BOTH NAMES 
    var bothNames = userName + crushName;

    // CHECK FOR REPEATED CHARACTERS
    const nameArray = [...bothNames].sort();
    const repeatedChars = [];
    for(let i =0; i < nameArray.length - 1; i++ ){
        if(nameArray[i] === nameArray[i + 1]) repeatedChars.push(nameArray[i]);
    }
    // GETTING REPEATED CHARACTERS ARRAY
    const repeatedCharsArray = [...new Set(repeatedChars)];

    // GETTING ALL CHARACTERS OF BOTH NAMES
    for(let i=0; i < bothNames.length; i++){
        arr.push(bothNames.charAt(i));
        // NOW REMOVE REPEATED CHARACTERS
        for(let j = 0; j < repeatedCharsArray.length; j++){
            arr = arr.filter(e => e !== repeatedCharsArray[j]);
        }
    }
    // GETTING ARRAY VALUE AFTER REMOVE REPEATED CHARACTERS
    var finalName = arr.join('').toString(); // convert array to string
    // GETTING NAME LENGTH WHICH IS SIMPORTANT FOR OUR GAME
    var finamNameLength = arr.join('').toString().length;

    console.log('FINAL NAME : ' + finalName);
    console.log('FINAL NAME LENGTH : ' + finalNameLength);
})