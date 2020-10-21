function LoadData() {
    var XHR = new XMLHttpRequest();
    XHR.open("get", "productData.json", true);


    XHR.onreadystatechange = function () {
        if (XHR.readyState == 0)
            console("not Intialized");
        else if (XHR.readyState == 1)
            console.log("server connection established");
        else if (XHR.readyState == 2)
            console.log("request recived")
        else if (XHR.readyState == 3)
            console.log("request is processing")
        else if (XHR.readyState == 4 && XHR.status == 200) {
            var ourData = eval('(' + XHR.responseText + ')');

            var getProduct = document.getElementById("getProducts");

            for (let index = 0; index < ourData.length; index++) {
                getProduct.innerHTML += "<section class='col-sm-6 col-lg-4 text-center item mb-4'> <a href='productDetailsPage.html'> <img src='../Resource/img/product/" + ourData[index].product.img + "' alt='Image'> </a> <h3 class='text-dark'> <a href='productDetailsPage.html'> " + ourData[index].product.name + " </a> </h3> <p class='price'>" + ourData[index].product.price + "</p></section>";
            }
        } else {
            alert("Error");
        }
    };

    XHR.send();
}