import { galleryItems } from './gallery-items.js';

const creatCardContainer = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);

creatCardContainer.insertAdjacentHTML('beforeend',cardsMarkup)
function createCardsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
        }).join('');
}
creatCardContainer.addEventListener('click',onClickCards);

function onClickCards(evt){
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')){
        return;
    }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="auto" height="auto">
`)

instance.show()
creatCardContainer.addEventListener("keydown", e =>{
    if(e.code === "Escape"){
        instance.close();
    }
})
}

