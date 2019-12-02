// //===========DOM==========
// //Query selector

// const element = document.querySelector('p');

// element.textContent= `${element.textContent} From sby`;

// console.log(element);

// //=================================
// const newParagraph =document.createElement('p');

// newParagraph.textContent='Hellowww';
// document.querySelector('body').appendChild(newParagraph);//appenChild is for adding new content in some tag


// //=========Dom using class===============
// //const newClass =document.createElement('.satu');
// // newClass.textContent='ini class';

// //=============Handling user interaction=============

// // document.querySelector('button').addEventListener('click',function(e){
// //      e.targer.textContent ='Button Clicked';
// //     // console.log(e.target.value);
// // });

// document.querySelector('input').addEventListener('input',function(e){
//     // e.targer.textContent ='Button Clicked';
//     console.log(e.target.value);
    
// });

// document.querySelector('#myCheck').addEventListener('change',function(e){
//     // e.targer.textContent ='Button Clicked';
//     console.log(e.target.checked);
//     e.target.value.textContent="Clicked";
// });
// document.querySelector('#mySelect').addEventListener('change',function(e){
//     // e.targer.textContent ='Button Clicked';
//     console.log(e.target.value);
// });


// //===========DATA STORAGE================
// // ACCESS LOCAL STORAGE 
// document.querySelector('input').addEventListener('input',function(e){
//     // e.targer.textContent ='Button Clicked';
//     localStorage.setItem('username',e.target.value);
//     document.getElementById("myLocal").innerHTML = localStorage.getItem("username");
//     localStorage.removeItem('username');
// });

// // SAVE OBJECT IN LOCAL STORAGE
// const user =[
//     {
//         name : 'Hil',
//         age : 22,
//     },
//     {
//         name : 'Dan',
//         age : 22,
//     }
// ];

// localStorage.setItem('myObj',JSON.stringify(user)); //JSON.stringify is for converting JSON to be a string
// console.log(localStorage.getItem('myObj'));
// console.log(
//     JSON.parse(// That word is for parsing JSON. THOSE ALL SYNTAX ARE NOT MAGIC DUDE
//         localStorage.getItem('myObj')
//     )
// );

let todos =[
    {
        mytext : 'todo1',
        complete : false
    },
    {
        mytext : 'todo2',
        complete : true
    }
];

const generateTodos = function(todos){
    const li = document.createElement('li')
    const cek = document.createElement('input')
    cek.setAttribute("type", "checkbox")
    cek.setAttribute("id", todos.mytext)
    li.setAttribute("id", todos.mytext+'li')

    if(todos.complete == true){
    li.style.cssText = 'color:green;'
    li.textContent = todos.mytext 
    cek.checked = true   
    }else{
        li.style.cssText = 'color:red;'
        li.textContent = todos.mytext 
        cek.checked = false
    }
    return {li, cek};
}
const renderTodos = function(todos){
    document.getElementById("todos").innerHTML="";
    todos.forEach(function(todos) {
        document.querySelector("#todos")
        .appendChild(generateTodos(todos).li );
        document.querySelector("#todos")
        .appendChild(generateTodos(todos).cek);
    });
    
}

renderTodos(todos);

const complete = function (todos) {
    todos.forEach(function(todos){
    let mytext = todos.mytext
    let complete = todos.complete
    let checkbox = document.getElementById(mytext);
    checkbox.addEventListener( 'change', function() {
        if(this.checked) {
            complete = 'true'
            let li =  document.getElementById(mytext+'li')
            li.style.cssText = 'color:green;'
            console.log(complete)
        } else {
            complete = 'false'
            let li =  document.getElementById(mytext+'li')
            li.style.cssText = 'color:red;'
            console.log(complete)
        }
    });
});
} 

complete(todos)

document.querySelector('#new-todo')
.addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        mytext : e.target.elements.text.value,
        complete : false
    })
    renderTodos(todos);
    e.target.elements.text.value="";
    complete(todos)
    console.log(todos);
    
});



// document.querySelector('#todo 1')
// .addEventListener('change', function(e){
//     console.log(e.target.elements.text.value); 
// })

// //==== Arrow function====
// function tes5 (){
//     console.log("es5");
// }

// let tes6 = () =>{
//     console.log("es6");
// }

// const ages =[12,17,24,46,57];
// const full = ages.map(function (arr){
//         return arr >=18;
//     }
// );
// console.log(ages[full.indexOf(true)]);

// //========Destructuring=========
// const foo = ['one', 'two', 'three'];
// console.log(foo[0]);

// const [red, yellow, green] = foo;
// console.log(red);


// const users ={
//     name : 'Dandi',
//     umur : 22
// }

// console.log(users.name);

// const {name : nm, age} = users;
// console.log(nm, age);