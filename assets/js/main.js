

async function getApi() {
    try {
        let { data } = await axios.get("https://fakestoreapi.com/products")
        let container = document.querySelector(".container")
        container.innerHTML = ""
        data.map((item) => {
            container.innerHTML += `
               <div class="product">
                    <div class="image">
                     <img src="${item.image}" alt="">
                    </div>
                    <div class="productInfo">
                        <h3>Title: ${item.title}</h3>
                        <span>price: ${item.price}$</span>
                        <button>Elave et</button>
                        <button onclick="getDetail(${item.id})">Detail get</button>
                    </div>
                </div>
        `


        })

    } catch (error) {
        console.log(error);
    }
}


getApi()

function getDetail(id){
    window.location.href=`./productDetail.html?productId=${id}`
}
