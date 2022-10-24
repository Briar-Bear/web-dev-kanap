
const params = new URLSearchParams(window.location.search);
const productId = params.get('id')


window.fetch('http://localhost:3000/api/products/' + productId)
.then (response => response.json())
.then(product => {
    const imgContainer = document.querySelector('.item__img')
    const title = document.querySelector('#title')
    const price = document.querySelector('#price')
    const selectColor = document.querySelector('#color')
    const description = document.querySelector('#description')

    price.innerHTML = `${product.price}`
    description.innerHTML =  `${product.description}`
    imgContainer.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`
    title.textContent = product.name
}).catch((error) => {
    console.log(error);

    for (let i = 0; i < product.colors.length; i++) {
        const color = product.colors[i];
        const option = document.createElement('option')

        option.setAttribute('value', color)
        option.textContent = color

        selectColor.appendChild(option)
    }
})





