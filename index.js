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


function toggleMenu(){
    let navMobileLinks= document.getElementById('mobileDiv')
    navMobileLinks.classList.toggle('show-mobile-links')

}
