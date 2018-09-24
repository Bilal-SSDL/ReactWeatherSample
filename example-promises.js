// function getTempCallBack (location, callback) {
//     callback(undefined, 78);
//     callback('City Not Found');

// }

// getTempCallBack('Karachi', function (err, temp){
//     if(err){
//         console.log('error!',err);
//     }
//     else {
//         console.log('success', temp);
//     }

// });

// function getTempPromises(location){
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(79);
//             reject('City Not Found');
//         },3000)
        
//     });
// }
// getTempPromises('Islamabad').then(function (temp){
//     console.log('Promises Success', temp);
// },function (err){
//     console.log('Promise Failed',err);
// })
// challenge
// function AddNumberPromise(a,b){
//     return new Promise (function (resolve,reject){
//         if(typeof a === 'number' && typeof b === 'number')
//         {
//             const sum = a + b;
//             resolve(sum);
//         }
//         else
//         {
//             reject('Value not Valid');
//         }
//     });
// }
// AddNumberPromise(12, 10).then(function (sum){
//     console.log('Promises Success: Sum is ', sum )
// }, function (error) {
//     console.log('Promise Failed',err);
// })

// AddNumberPromise('abc', 10).then(function (sum){
//     console.log('Error case function: Sum is ', sum )
// }.catch(function (error){
//     console.log('Error case function: Promise Failed!!!',error );
// }))