let countEl =document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 0
 function increment (){
count+=1

countEl.innerText=count
// console.log(countEl)


    

 }

//  increment()

//  let sv = 'Log Out'
//  function save(){
//     console.log(sv)
//  }


//  save ()


 function save() {
   
   
   let entries= count + "-"
  
  
   saveEl.textContent += entries
   countEl.textContent=0
   count =0
  //  console.log(saveEl)
   
}

// save ()
