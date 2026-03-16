import reduce from "./Reduce.js"
function filter(){


let amount=[35,56,42,23,10,40,50]

let greaterthan=amount.filter(x=>x>20)

console.log("Greterthan 20 :",greaterthan)



//FInding the EVen number

let even=amount.filter((num)=>num%2==0)
console.log("even number",even)

//filter the data from the object
let data=[
    {name:"harish",age:20},
    {name:"lokesh",age:18},
    {name:"sathish",age:24},
    {name:"manoj",age:23},
    {name:"vishwa", age:19}
]
let ages=data.filter((data)=>data.age<=18)
console.log("age",ages)





//Reduce imported from the Reduce.js file
console.log("-----------------------Reduce------------------------")
reduce()
 }
export default  filter