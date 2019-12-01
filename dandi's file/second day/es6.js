//==== Arrow function====
function tes5 (){
    console.log("es5");
}

let tes6 = () =>{
    console.log("es6");
}

const ages =[12,17,24,46,57];
const full = age.map(function (arr){
        return arr >=18;
    }
);
console.log(ages[full.indexOf(true)]);