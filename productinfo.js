const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', (event) => {
    mainImage.src = event.target.src;
  });
});

const quantityDisplay = document.querySelector('.quantity');
let quantity = 2;

document.getElementById('increaseQuantity').addEventListener('click', () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

document.getElementById('decreaseQuantity').addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});
