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


