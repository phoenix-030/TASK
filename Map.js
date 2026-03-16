//!examples of map 
import filter from './Filter.js'

let cars=new Map()
//adding the new mapped data .
cars.set("brand","BMW")
cars.set("model","M5")
cars.set("year",2022)

//overwriting the value using the key........
cars.set("brand","black")

//getting  value from the key. 
console.log(cars.get("brand"))
console.log(cars)



//map is used to transform the array of  data into the new data of array.
//array of value va vera oru value of transfrom pannrathuku namaba map use pandorm.
let convertINR=[1,2,3,4,5,6,7,8,9,10]
let converUSD=convertINR.map((conver)=>conver*90)        
// console.log(converUSD)

//using function to callthe  map
function conver(value){
    return value*90;

}
console.log(converUSD)



//using object

const data=[{ name:"harihskumar",age:21},
            {name:"lokesh",age:18},
            {name:"maha",age:23},
            {name:"jeeva",age:24}
]
let ages=data.map((age)=>age.age)
let name=data.map((name)=>name.name)
console.log("Ages",ages,"names",name)
//============================================================

//get unique value from the array
let arre = [4, 6, 2, 3, 1, 1, 3, 5, 7, 8, 4, 3];
let unique = new Set(arre);
console.log("unique", unique);  


console.log("-----------------------Filter------------------------")


filter()



