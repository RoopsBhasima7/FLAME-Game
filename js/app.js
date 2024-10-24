// FLAMES
// if 1 then F = Friends
// if 2 then L = Lovers
// if 3 then A = Affections
// if 4 then M = Marry
// if 5 then E = Enemy
// if 6 then S = Secret Lover
function getMatch(match){
    return{
        1 : 'are friends',
        2 : 'are lovers',
        3 : 'have affection for each other',
        4 : 'will get marry',
        5 : 'are enemies',
        6 : 'are secret lovers'
    }[match];
}
console.log(getMatch(1));
console.log(getMatch(2));
console.log(getMatch(3));
console.log(getMatch(4));
console.log(getMatch(5));
console.log(getMatch(6));
var arr = [];
const inputs = document.querySelectorAll('.inputBox input')
const checkMatchBtn = document.getElementById('checkMatchBtn');
const tryAgainBtn = document.getElementById('tryAgainBtn');
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
    // SHOW LOADER GIF
    checkMatchBtn.querySelector('span').style.display = 'none';
    checkMatchBtn.querySelector('img').style.display = 'block';
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

    // EMPTY NAME ARRAY
    var arr = [];
    var randomTime = Math.floor(Math.random() * (7000 - 3000 + 1) + 3000);

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
    var finalNameLength = arr.join('').toString().length;

    // PRINT MATCH ON FINAL LENGTH
    if(finalNameLength > 6){
        var remainingLength = finalNameLength - 6;
        setTimeout(function(){
            // HIDE LOADER AFTER RANDOM SECOND BETWEEN 3 TO 7
            checkMatchBtn.querySelector('span').style.display = 'block';
            checkMatchBtn.querySelector('img').style.display = 'none';
            matchResultBox.innerHTML = userName + ' and ' + crushName + ' ' + getMatch(remainingLength);
            matchResultBox.classList.add('visible');
            // SHOW TRY AGAIN BUTTON
            tryAgainBtn.style.display = 'block';
            // HIDE MATCH AGAIN BUTTON
            checkMatchBtn.style.display = 'none';
        }, randomTime)// create random time between 3s to 7s
    } else{
        setTimeout(function(){
            // HIDE LOADER AFTER 3 SECONDS
            checkMatchBtn.querySelector('span').style.display = 'block';
            checkMatchBtn.querySelector('img').style.display = 'none';
            matchResultBox.innerHTML = userName + ' and ' + crushName + ' ' + getMatch(finalNameLength);
            matchResultBox.classList.add('visible');
            // SHOW TRY AGAIN BUTTON
            tryAgainBtn.style.display = 'block';
            // HIDE MATCH AGAIN BUTTON
            checkMatchBtn.style.display = 'none';
        }, randomTime)
    }
})
tryAgainBtn.addEventListener('click',()=>{
    location.reload();
})