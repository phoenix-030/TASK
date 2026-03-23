function reduce(){
let  amount=[10,20,30,40,50]

let sum=amount.reduce((acc,cur)=>acc+cur,0)
console.log("Sum :",sum)

//flat and reduce using to find the number of charachter in the array
let arr=[['a','b','c'],['c','d','f'],   ['d','f','g']]
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


//without funcition
let numbers=[23,4,3,235,64,23,5,6,7,8,9]

let resust=[]
for(let i=0;i<numbers.length;i++)
    {

   resust.push(numbers[i]+numbers[i])
}

console.log(resust)

//with function

    
       function reducee(arr, current) {
    let acc = current;

    for (let i = 0; i < arr.length; i++) {
        acc =acc+ arr[i];
    }

    return acc;
}

 let name=reducee([1,2,3,4,5,6], 0)//pass the value to fuction
console.log("total valuee: ", name);
