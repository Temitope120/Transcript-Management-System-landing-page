// const learnMoreBtn = document.getElementsByClassName('learn-more-btn');
// const cardText = document.querySelector('.card-text');
// const moreText  = document.getElementsByClassName('moreText');
// console.log('The hidden Text', moreText[0])



 function showMore(item){
    let textOne = document.getElementById('one');
    let textTwo = document.getElementById('two');
    let textThree = document.getElementById('three');

    // cards
    let cardOne = document.getElementById('card-one');
    let cardTwo = document.getElementById('card-two');
    let cardThree = document.getElementById('card-three');

    if(item === "individual"){
        textOne.classList.toggle('show-more');
        cardOne.classList.toggle('h-auto')
    }else if(item === "organization"){
        textTwo.classList.toggle('show-more')
        cardTwo.classList.toggle('h-auto')
    }else{
        textThree.classList.toggle('show-more');
        cardThree.classList.toggle('h-auto')
    }
  
}
