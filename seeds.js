// var mongoose = require("mongoose");
// var Camps = require("./models/camps");
// var Comments = require("./models/comment");
// var data = [
//         {
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         },
//         {
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         },
//         {
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         },{
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         },{
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         },{
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         },{
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         },{
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         },{
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         },{
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         },{
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         },{
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         },{
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         },{
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         },{
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         },{
//             name:"Steep Valley",
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUooXyq-RKDjTyrQBgUsN21ebyvooNG20koSCR1fcDvanlW16KnQ",
//             description:"A dangerous place to visit"
//         }
//     ];


// function seedDB(){
//     Camps.remove({},function(err,removedCamps){
//         if(err){
//                 console.log(err)}
//         else{
//                 console.log("DB empty")
//                 data.forEach(function(seed){
//                             Camps.create(seed,function(err,newCamp){
//                                         if(err){
//                                             console.log(err)
//                                         }else
//                                                 {
//                                                     Comments.create(
//                                                         {
//                                                             content:"New Place to visit",
//                                                             author:"Ammu"
//                                                         },
//                                                             function(err,comment){
//                                                                 if(err){
//                                                                     console.log(err)
//                                                                 }else
//                                                                 {
//                                                                     newCamp.comments.push(comment);
//                                                                     newCamp.save(function(err,savedObj)
//                                                                     {
//                                                                         if(err){
//                                                                             console.log(err)
//                                                                         }else{
//                                                                             // console.log(savedObj)
//                                                                         }
//                                                                     });
//                                                                 }
//                                                             });
                                                    
                            
//                                                 }
//                             });
//                 });
                
//             }
//     });
// };

// module.exports = seedDB;