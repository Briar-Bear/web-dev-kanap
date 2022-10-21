
const params = new URLSearchParams(window.location.search);
const productId = params.get('id')


window.fetch('http://localhost:3000/api/products/' + productId)
.then (response => response.json())
.then(product => {
    const imgContainer = document.querySelector('.item__img')
    const title = document.querySelector('#title')
    const price = document.querySelector('#price')

    imgContainer.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
    title.textContent = product.name
}).catch((error) => {
    console.log(error);
})



