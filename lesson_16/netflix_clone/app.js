import {cards_data} from './assets/cards/Cards_data.js'


// const cardListHero = document.getElementById('card-list-hero') 

let categories = ['Blockbuster Movies', 'Only on Netflix', 'upcoming', 'Top Picks for You']

function renderCards(){
    let cardsHtml = ''

    cardsHtml = cards_data.map((card)=>{
        return `
                <div class="card">
                    <img src="${card.image}" alt="poster of ${card.name}"/>
                    <p>${card.name}</p>
                </div>
        `
    })

    let titleCardsHtml = `
        <div class="title-cards">
                    <h2>Popular on Netflix</h2>
                    <div id="card-list-hero" class="card-list">
                        ${cardsHtml.join('')}
                    </div>
                </div>
    `
    
    document.getElementById('hero-caption').innerHTML += titleCardsHtml

    renderCategories(cardsHtml)
    
}

renderCards()

function renderCategories(arrHtml){
    let moretitleCardsHtml = ''
    
    for(let i=0; i<categories.length; i++){
        moretitleCardsHtml += `
                <div class="title-cards">
                    <h2>${categories[i]}</h2>
                    <div id="card-list-hero" class="card-list">
                        ${arrHtml.join('')}
                    </div>
                </div>
    `;
    }

    document.getElementById('more-cards').innerHTML = moretitleCardsHtml
}
