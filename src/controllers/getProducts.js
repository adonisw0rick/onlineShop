import $ from 'jquery';
/* import { resolve } from 'dns'; */

const apiData = {
    key:'danielcl-proyecto-PRD-75d80d3bd-19963953',
    categories:{
        watches:31387,
        tablets:171485,
        cameras:31388
    },
    totalItems:10
}

const processProductEbay = product =>{
    let Original;
    let rebajado;
    let producto;
    try {
        rebajado = parseFloat(product.sellingStatus[0].currentPrice[0].__value__);
        Original = parseFloat(product.discountPriceInfo[0].originalRetailPrice[0].__value__);
    } catch (error) {
       Original = rebajado;
       rebajado = 0;
    }
    try{
        producto = product.productId[0].__value__;
    } catch(error){
        producto = product.itemId
    }
    const aux =  {
        price:{
            original:Original,
            actual:rebajado
        },
        name:product.title,
        description:product.subtitle,
        img:product.galleryURL,
        id:producto
    }
    return aux;
}

const processProductWalmart = product =>{
    const aux =  {
        price:{
            original:product.msrp,
            actual:product.salePrice
        },
        name:product.name,
        description:product.shortDescription,
        img:product.thumbnailImage,
        id:product.itemId
    }
    return aux;
}
const walmartPromise = () => new Promise((resolve,reject)=>$.ajax({
    url:'http://api.walmartlabs.com/v1/search',
    data:{
        query:'camera',
        format:'json',
        apiKey:'hdzpqc9grjc2nhg8m9e3evd'
    },
    dataType:'JSONP'
}).done(resolve).fail(reject)
)
const ebayPromise = () => new Promise((resolve,reject)=>
    $.ajax({
        url:`https://svcs.ebay.com/services/search/FindingService/v1`,
        data:{
            'SECURITY-APPNAME':apiData.key,
            'OPERATION-NAME':'findItemsByCategory',
            'SERVICE-VERSION':'1.0.0',
            'RESPONSE-DATA-FORMAT':'JSON',
            'REST-PAYLOAD':'true',
            'categoryId':apiData.categories.cameras,
            'paginationInput.entriesPerPage':apiData.totalItems,
            'GLOBAL-ID':'EBAY-US',
            'siteid':'0'
        },
        type:'GET',
        dataType: 'JSONP'}).done(resolve).fail(reject)
)

export {processProductEbay,ebayPromise,processProductWalmart,walmartPromise}