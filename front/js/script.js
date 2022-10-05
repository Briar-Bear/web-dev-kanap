

fetch('http://localhost:3000/api/products')
.then((data) => {
    return data.json();
}).then((completedata) => {
    //console.log(completedata[2].name);
    let data1 ="";
    completedata.map((values) => {
        data1+= `<section class="items" id="items">
        <a href="./product.html?id=42">
          <article>
            <img
              src=${values.imageUrl}
              alt="Lorem ipsum dolor sit amet, Kanap name1"
            />
            <h3 class="productName">${values.name}</h3>
            <p class="productDescription">${values.description}
            </p>
          </article>
        </a>
      </section>`
    });
    document.getElementById("items").innerHTML=data1;


}).catch((error) => {
    console.log(error);
})




//.then((response) => response.json())
//.then((data) => console.log(data));


