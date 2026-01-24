const Gname = document.querySelector('.Gname')
const Gdate = document.querySelector('.Gdate')
const Add_btn = document.querySelector('.Add_btn')
const collect = document.querySelector('.collect')
let Compiler = JSON.parse(localStorage.getItem('Compile')) || []
Display();

Add_btn.addEventListener('click', function () {
  const Name = Gname.value
  const Date = Gdate.value

  Compiler.push({Name : `${Name}`, Date: `${Date}`})
  console.log(Compiler)
  Display();
  Gname.value =''
 
})


 //APPLYING THE forEach function instead of stressing over loops
 function Display () {
let html=''

Compiler.forEach(function (Value, i) {
  const Name = Value.Name
  const Date = Value.Date

  html += `<div>${Name}</div><div>${Date}</div><button onclick='
  Compiler.splice(${i},1);
  Display();
  '>Delete</button>`
});

collect.innerHTML= html 
localStorage.setItem('Compile', JSON.stringify(Compiler))
 }

 
 /* function Display () {
let html=''
for (let i=0; i<Compiler.length; i++) {

  const Name = Compiler[i].Name
  const Date = Compiler[i].Date

  html += `<div>${Name}</div><div>${Date}</div><button onclick='
  Compiler.splice(${i},1);
  Display();
  '>Delete</button>`
  
}
collect.innerHTML= html 
localStorage.setItem('Compile', JSON.stringify(Compiler))
 } */