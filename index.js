const learnMoreBtn = document.getElementsByClassName('learn-more-btn');
const cardText = document.querySelector('.card-text')

for(let i = 0; i < learnMoreBtn.length; i++){
    learnMoreBtn[i].addEventListener('click', (e)=>{
        cardText.classList.toggle('show-more')
    })
    console.log(learnMoreBtn[i])
}
