function reduce(){
let  amount=[10,20,30,40,50]

let sum=amount.reduce((acc,cur)=>acc+cur,0)
console.log("Sum :",sum)

//flat and reduce using to find the number of charachter in the array
let arr=[['a','b','c'],
            ['c','d','f'],
            ['d','f','g']]
 let result=arr.flat().reduce((accu,current)=>{
                if(accu[current]){
                    accu[current]++
                }else{
                    accu[current]=1
                }
                return accu
            },{})

            console.log(result)
}



//find the total price of this things
let cart = [
  { item: "Book", price: 100 },
  { item: "Pen", price: 20 },
  { item: "Bag", price: 500 }
];

let total = cart.reduce((acc, product)=>acc + product.price,0)
let itm=cart.reduce((accc,productt)=>accc+productt.item,"")
console.log("Total :",total)
console.log("Item :",itm)



export default reduce;



