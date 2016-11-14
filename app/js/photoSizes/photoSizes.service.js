

//
// var Product_Service = $resource('api/Product/:productId', { productId: '@id' },
//     {
//         'update': { method: 'PUT' },
//         'bulkDelete': {
//             method: 'POST',
//             url: 'api/Product/BulkDelete',
//             isArray:true,
//             params:{
//
//                 hi:'@hi'
//             }
//         }
//     };