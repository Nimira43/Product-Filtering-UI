import { products } from "./js/products.js"

const productsWrapperEl = document.getElementById('products-wrapper')
const checkEls = document.querySelectorAll('.check')
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

filtersContainer.addEventListener('change', filterProducts)
searchInput.addEventListener('input', filterProducts)

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
  productEl.querySelector('.status').addEventListener('click', addToCart)
  return productEl
}

function addToCart(e) {
  const statusEl = e.target
  if (statusEl.classList.contains('added')) {
    statusEl.classList.remove('added')
    statusEl.innerText = 'Add to Cart'
    statusEl.classList.remove('bg-[#d61414]')
    statusEl.classList.add('bg-[#000]')
    cartItemCount--
  } else {
    statusEl.classList.add('added')
    statusEl.innerText = 'Remove from Cart'
    statusEl.classList.remove('bg-[#000]')
    statusEl.classList.add('bg-[#d61414]')
    cartItemCount++
  }
  cartCount.innerText = cartItemCount.toString()
}

function filterProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase()
  const checkedCategories = Array
    .from(checkEls)
    .filter((check) => check.checked)
    .map((check) => check.id)
  productsEls.forEach((productEl, index) => {
    const product = products[index]
    const matchedSearchTerm = product.name.toLowerCase().includes(searchTerm)
    const isInCheckedCategory = checkedCategories.length === 0 || checkedCategories.includes(product.type)
    if (matchedSearchTerm && isInCheckedCategory) {
      productEl.classList.remove('hidden')
    } else {
      productEl.classList.add('hidden')
    }
  })
}
