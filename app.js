let cardsArray = [
    {
        'name': 'CSS',
        'img': 'http://thapatechnical.online/logos/css.png',
    },
    {
        'name': 'HTML',
        'img': 'http://thapatechnical.online/logos/html5.png',
    },
    {
        'name': 'jQuery',
        'img': 'http://thapatechnical.online/logos/jquery.png',
    },
    {
        'name': 'JS',
        'img': 'http://thapatechnical.online/logos/js.png',
    },
    {
        'name': 'Node',
        'img': 'http://thapatechnical.online/logos/nodejs.png',
    },
    {
        'name': 'Python',
        'img': 'http://thapatechnical.online/logos/python.png',
    }
];


const parentDiv = document.querySelector("#card-section");
const gameCard = cardsArray.concat(cardsArray);
let shuffleChild = Array.from(gameCard).sort(() => 0.5 - Math.random());
for (let i = 0; i <shuffleChild.length; i++) {
    const childdiv = document.createElement('div');
    childdiv.classList.add('card');
    childdiv.dataset.name = shuffleChild[i].name;

   

   const frontDiv = document.createElement('div');
   frontDiv.classList.add('front-card');

   
   const backDiv = document.createElement('div');
   backDiv.classList.add('back-card');
   backDiv.style.backgroundImage = `url(${shuffleChild[i].img})`;
   parentDiv.appendChild(childdiv);
   childdiv.appendChild(frontDiv);
   childdiv.appendChild(backDiv);
}
let clickcount = 0;
let firstcard = '';
let secondcard = '';
let check =0;
let cardmatch = 0;
const card_matches = () => {
    let card_selected = document.querySelectorAll('.card-selected');
   let card = document.querySelectorAll('.card');
    card.forEach((elem) => {
        if (elem.classList.contains('card-selected')) {
            check++;
           // console.log(check);
        }
        if (elem.classList.contains('card-match')) {
            cardmatch++;
            console.log(cardmatch);
          
        }
        
       })

       
       if(check == 2){
   if(card_selected)
    card_selected.forEach((curelem) => {
   curelem.classList.add('card-match');
    })
    check = 0;
}
else{
    
    check = 0;
    console.log(check);
}
if (cardmatch == 10) {
    var win = document.getElementById('win');
    win.style.display = 'block';
win.innerText = 'Yipee! You Won 🏆🥇';
setTimeout(() => {
  //  location.reload();
},5000)
}else{
    cardmatch = null;
}

}

const resetGame = () => {
    clickcount = 0;
    firstcard = '';
    secondcard = '';
    let card_selected = document.querySelectorAll('.card-selected');
   let card = document.querySelectorAll('.card' );
  
    card_selected.forEach((curelem) => {
   curelem.classList.remove('card-selected');
    }
    
    )
}
const cards = document.querySelectorAll('.card');
parentDiv.addEventListener('click' ,(event) => {

    let  curcard  = event.target;
    if(curcard.id === 'card-section'){
        return false;
        clickcount =0;
      }else if(curcard.className === 'card'){
        return false;
        clickcount =0;
      }else{
    clickcount++;
      }
    if (clickcount< 3) {

if (clickcount === 1) {
         firstcard = curcard.parentNode.dataset.name;
         curcard.parentNode.classList.add('card-selected');
}
else{
    secondcard = curcard.parentNode.dataset.name;
    console.log(firstcard,secondcard);
    curcard.parentNode.classList.add('card-selected');
}
 if (firstcard != '' && secondcard != '') {
    if (firstcard === secondcard) {
        //curcard.classList.add('card-match');
        card_matches()
        setTimeout( () => {
        
            resetGame();
        },1000);

    }
    else{
        setTimeout( () => {

            resetGame();
        },1000);
    }
    
 } 
 
 
    }
  

   
})