var productName = document.getElementById('productName');
var productDesc = document.getElementById('productDesc');
var productStock = document.getElementById('productStock');
var productType = document.getElementById('ProductType');                   
var productPrice = document.getElementById('productPrice');
var productBtn = document.getElementById('productBtn');
var productImg = document.getElementById('ProductType');
var formControl = document.getElementsByClassName('form-control');
var myClose = document.getElementsByClassName('myClose');
var mySearchInp = document.getElementById('mySearchInp');
var productHeadline = document.getElementById('productHeadline');
//var viewBtn = document.getElementById('viewBtn');
var successProductAlert = document.getElementById('successProductAlert');
var productContainer;
var currentIndex = 0;
var ImgPath = "";

var InyectorProductos = document.getElementById('InyectorProductos');
var HomeBtn = document.getElementById('ShowMe');

//check for local storage at begining
if (localStorage.getItem('productsStorage') == null) {
    productContainer = [];
    productHeadline.style.display = 'none';
    searchItem.style.display = 'none';
} else {
    productContainer = JSON.parse(localStorage.getItem('productsStorage'));
    showProducts();
}

//check for empty fields to disable button
disableBtn();


function showAlert() {
    $(successProductAlert).fadeIn(500, function () {
        $(successProductAlert).fadeOut(2000);
    });
}
//if (productName.value == '' && productDesc.value == '' && productStock.value == '' && productPrice.value == '')
function disableBtn() {
    for (var i = 0; i < formControl.length - 1; i++) {
        if (formControl[i].value == '') {
            productBtn.disabled = true;
            //console.log('empty');
        } else {
            productBtn.removeAttribute('disabled');
        }
    }
}

$("#ProductType").change(
    function(){_data_image = $('option:selected',this).data('image');
$('.active').removeClass('active');
$(_data_image).addClass('active');
});

function imagen () {
    var path = productImg.value
    switch (path){
        case "Marco" :
            ImgPath = "images/cuadro1.jpg"
            break;
        
        case "Pila":
            ImgPath = "images/pila.png"
            break;
        
        case "Rollo Fotografico":
            ImgPath = "images/rollo.jpg"
            break;

        default :
            console.log("hola");
    }
}


function showProducts() {

    var rows = '';
    for (var i = 0; i < productContainer.length; i++) {
        rows += '<div class="col-lg-4 col-md-6 col-sm-12 my-2 products"><div class="product"><div class="card p-1 text-center m-auto" style="width: 18rem;"><img class="img-fluid" src="'+ productContainer[i].productImg +'" class="card-img-top" alt="test"><div class="card-body"><h5 class="card-title"><b>' + productContainer[i].productName + '</h5><p class="card-text">' + productContainer[i].productDesc + '</p><p class="card-text bg-success text-white">' + ' $ '  + productContainer[i].productPrice + ' </p><p class="card-text">' + 'Stock  = ' + productContainer[i].productStock + '</b></div></div></div></div>';
    }
    document.getElementById('InyectorProductos').innerHTML = rows;
    //console.log(productContainer);
    productContainer = JSON.parse(localStorage.getItem('productsStorage'));
    productHeadline.style.display = 'block';
    searchItem.style.display = 'block';
}


function emptyFields() {
    for (var i = 0; i < formControl.length; i++) {
        formControl[i].value = '';
    }
    disableBtn();
}

mySearchInp.addEventListener('keyup', function (e) {
    //console.log(e.target.value);
    var rows = '';
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].productName.toLowerCase().includes(e.target.value.toLowerCase())) {
            rows += '<div class="col-lg-4 col-md-6 col-sm-12 my-2 products"><div class="product"><div class="card p-1 text-center m-auto" style="width: 18rem;"><img class="img-fluid" src="'+ productContainer[i].productImg +'" class="card-img-top" alt="test"><div class="card-body"><h5 class="card-title"><b>' + productContainer[i].productName + '</h5><p class="card-text">' + productContainer[i].productDesc + '</p><p class="card-text bg-success text-white">' + ' $ '  + productContainer[i].productPrice + ' </p><p class="card-text">' + 'Stock  = ' + productContainer[i].productStock + '</b></div></div></div></div>';
        }
    }
    document.getElementById('InyectorProductos').innerHTML = rows;
});

//nav bar scroll
let navHeight = $('nav').outerHeight();
//console.log('nav height = ' + navHeight);
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > navHeight) {
        document.querySelector('nav').style.position = 'fixed';
        document.querySelector('nav').style.zIndex = '1000';
        document.querySelector('.my-Container').style.width = '85%';
        document.querySelector('nav').style.width = '85%';
        document.querySelector('.marginTop').style.marginTop = '0rem';
    } else {
        // $('nav').css('backgroundColor', 'green');
        document.querySelector('nav').style.position = 'relative';
        document.querySelector('.my-Container').style.width = '85%';
        document.querySelector('nav').style.width = '100%';
        document.querySelector('.marginTop').style.marginTop = '3rem';
    }
});

