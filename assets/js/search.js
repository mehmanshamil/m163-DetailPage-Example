let container = document.querySelector(".container")
let db;
async function getApi() {
    try {
        let { data } = await axios.get("https://fakestoreapi.com/products")
        db = data
        visiable(db)
    } catch (error) {
        console.log(error);
    }
}
getApi()
function getDetail(id) {
    window.location.href = `./productDetail.html?productId=${id}`
}
let inp = document.getElementById("searcInpt")
inp.addEventListener("input", findProduct)

function findProduct(e) {
    let searchText = e.target.value.trim()
    let result = db.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()))

    if (result.length > 0) {
        visiable(result)
    } else {``
        container.innerHTML = "";
        container.innerHTML = `<p class="error">Axtardiginiz  '${searchText}' adli  mehsul movcud deyil !</p>`

    }
}
let alfabe = document.getElementById("alfabe")
let befala = document.getElementById("befala")
let cheaptoExpancise = document.getElementById("cheaptoExpancise")
let expanciseToCheap = document.getElementById("expansiveToCheap")
let defaultProduct = document.getElementById("default")


defaultProduct.addEventListener("click", getApi)
cheaptoExpancise.addEventListener("click", () => visiable(cheaptoExpanciseFunc()))
alfabe.addEventListener("click", () => visiable(alfabeFunc()))
befala.addEventListener("click", () => visiable(alfabeFunc().reverse()))
expanciseToCheap.addEventListener("click", () => visiable(cheaptoExpanciseFunc().reverse()))

function alfabeFunc() {
    return db.slice().sort((a, b) => a.title.localeCompare(b.title))
}

function cheaptoExpanciseFunc() {
    return db.slice().sort((a, b) => a.price - b.price)
}
function visiable(result) {
    container.innerHTML = ""
    result.map((item) => {
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
}