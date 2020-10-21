// ----------------- Data ---------------------------
var JsonProductObj = [{
        "product": {
            "ID": 1,
            "name": "Bioderma",
            "img": "product_01.png",
            "description": "Ibuprofen Tablets, 200mg",
            "moreDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natussoluta dolores iusto!",
            "price": "550.00 L.E",
            "Category": "Vitamins"
        }
    },
    {
        "product": {
            "ID": 2,
            "name": "Chanca Piedra",
            "img": "product_02.png",
            "description": "Ibuprofen Tablets, 200mg",
            "moreDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natussoluta dolores iusto!",
            "price": "700.00 L.E",
            "Category": "Antibiotics"
        }
    },
    {
        "product": {
            "ID": 3,
            "name": "Umcka Cold Care",
            "img": "product_03.png",
            "description": "Ibuprofen Tablets, 200mg",
            "moreDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natussoluta dolores iusto!",
            "price": "1200.00",
            "Category": "Anti-inflammatory"
        }
    },
    {
        "product": {
            "ID": 4,
            "name": "Cetyl Pure",
            "img": "product_04.png",
            "description": "Ibuprofen Tablets, 200mg",
            "moreDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natussoluta dolores iusto!",
            "price": "450.00 L.E",
            "Category": "Diet &amp; Nutrition"
        }
    },
    {
        "product": {
            "ID": 5,
            "name": "CLA Core",
            "img": "product_05.png",
            "description": "Ibuprofen Tablets, 200mg",
            "moreDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natussoluta dolores iusto!",
            "price": "380.00 L.E",
            "Category": "Cosmetology"
        }
    },
    {
        "product": {
            "ID": 6,
            "name": "Poo Pourri",
            "img": "product_06.png",
            "description": "Ibuprofen Tablets, 200mg",
            "moreDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natussoluta dolores iusto!",
            "price": "890.00 L.E",
            "Category": "Supplements"
        }
    }
]

var getProduct = document.getElementById("getProducts");

function getProductOnLoad() {
    for (let index = 0; index < JsonProductObj.length; index++) {
        getProduct.innerHTML += "<section class='col-sm-6 col-lg-4 text-center item mb-4'> <a href='productDetailsPage.html'> <img src='../Resource/img/product/" + JsonProductObj[index].product.img + "' alt='Image'> </a> <h3 class='text-dark'> <a href='productDetailsPage.html'> " + JsonProductObj[index].product.name + " </a> </h3> <p class='price'>" + JsonProductObj[index].product.price + "</p></section>";
    }
};

