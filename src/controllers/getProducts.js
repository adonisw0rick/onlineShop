import $ from 'jquery';
/* import { resolve } from 'dns'; */

const apiDataEbay = {
    key:'danielcl-proyecto-PRD-75d80d3bd-19963953',
    categories:{
        watches:31387,
        tablets:171485,
        cameras:31388
    },
    totalItems:12
}

const apiDataWalmart = {
    key:'hs75pqbvydfbyhkft2embzbf',
    categories:{
        cameras:'camera',
        watches:'watches',
        tablets: 'tablets'
    }
}


const processProductEbay = productList =>{
    const listaDefinitiva = [];
    productList.findItemsByCategoryResponse[0].searchResult[0].item.map(e=>{
        let Original;
        let rebajado;
        let producto;
        try {
            rebajado = parseFloat(e.sellingStatus[0].currentPrice[0].__value__);
            Original = parseFloat(e.discountPriceInfo[0].originalRetailPrice[0].__value__);
        } catch (error) {
           Original = rebajado;
           rebajado = 0;
        }
        try{
            producto = e.productId[0].__value__;
        } catch(error){
            producto = e.itemId
        }
        const aux =  {
            price:{
                original:Original, 
                actual:rebajado
            },
            name:e.title[0],
            description:e.subtitle,
            img:e.galleryURL,
            id:producto,
            link:e.viewItemURL
        }
        listaDefinitiva.push(aux);
    })
    return listaDefinitiva;
}

const processProductWalmart = productList =>{
    const listaDefinitiva = [];
    productList.items.map(e => {
        const aux =  {
            price:{
                original:e.msrp,
                actual:e.salePrice
            },
            name:e.name,
            description:e.shortDescription,
            img:e.thumbnailImage,
            id:e.itemId,
            link: e.productUrl
        }
        listaDefinitiva.push(aux);
    })
    return listaDefinitiva;
}
const walmartPromise = category => new Promise((resolve,reject)=>$.ajax({
    url:'http://api.walmartlabs.com/v1/search',
    data:{
        query:apiDataWalmart.categories[category],
        format:'json',
        apiKey:apiDataWalmart.key
    },
    dataType:'JSONP'
}).done(resolve).fail(reject)
)
const ebayPromise = category => new Promise((resolve,reject)=>
    $.ajax({
        url:`https://svcs.ebay.com/services/search/FindingService/v1`,
        data:{
            'SECURITY-APPNAME':apiDataEbay.key,
            'OPERATION-NAME':'findItemsByCategory',
            'SERVICE-VERSION':'1.0.0',
            'RESPONSE-DATA-FORMAT':'JSON',
            'REST-PAYLOAD':'true',
            'categoryId':apiDataEbay.categories[category],
            'paginationInput.entriesPerPage':apiDataEbay.totalItems,
            'GLOBAL-ID':'EBAY-US',
            'siteid':'0'
        },
        type:'GET',
        dataType: 'JSONP'}).done(resolve).fail(reject)
)

export {processProductEbay,ebayPromise,processProductWalmart,walmartPromise}