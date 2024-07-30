import { products } from "./js/products.js"

const productsWrapperEl = document.getElementById('products-wrapper')
const checksEls = document.querySelectorAll('.check')
const filtersContainer = document.getElementById('filters-container')
const searchInput = document.getElementById('search')
const cartButton = document.getElementById('cartButton')
const cartCount = document.getElementById('cartCount')

let cartItemCount = 0

const productsEls = []

products.forEach((product) => {
  const productEl = createProductElement(product)
  productsEls.push(productEl)
  productsWrapperEl.appendChild(productEl)
})

function createProductElement(product) {
  const productEl = document.createElement('div')
  
  productEl.className = 'item space-y-2'

  productEl.innerHTML = 
    
    `
      
      <div
        class="bg-[#fff] flex justify-center relative overflow-hidden group cursor-pointer border border-[#ff4500]"
      >
        
        <img
          src="${product.url}"
          alt="${product.name}"
          class="w-full h-fill object-cover"
        >
        
        <span
          class="status bg-[#000] text-[#fff] absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition border-t border-[#ff4500] group-hover:translate-y-0"
        >
          Add To Cart
        </span>
      
      </div>
      
      <p
        class="text-xl"
      >
        ${product.name}
      </p>
      
      <strong>
        ${product.price.toLocaleString()}
      </strong>      
    `


}

