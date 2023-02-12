
const serverUrl = 'http://localhost:3000/'
const itemsPath = 'items';
const imagesPath = 'images/';

window.onload = getData();

const items = document.querySelector('#container');

function getData() {
    fetch(`${serverUrl}${itemsPath}`)
    .then((res) => res.json())
    .then((data) => printData(data))
}

function printData(data){
    const itemContainer = document.createElement('div')
    itemContainer.className = 'featured__container grid'

    data.forEach(item => {
        itemContainer.innerHTML += createDomElement(item)
        items.append(itemContainer);  
        //console.log(items); 
    })
}

function createDomElement(item){
    const itemHtml = `
    
    <article class="featured__card">
      <span class="featured__tag">Sale</span>
      <div class="featured__data" id="item">
        <div>
      <img
        src="Resources/images/featured1.png"
        alt=""
        class="featured__img" id="item-image"
      />

          <h3 class="featured__title" id="item-title">Jazzmaster</h3>
          <span class="featured__price" id="item-price">$1050</span>

          <button class="button featured__button" id="addToCart" >ADD TO CART</button>
        </div>
    </div>
    </article>
    

  `;

     return itemHtml;
}