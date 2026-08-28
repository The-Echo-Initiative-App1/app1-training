let fruits=['apple','orange','banana','strawberry'];
fruits.forEach(capitalize);
fruits.forEach(display);

function display(element){
    console.log(element);
}
function uppercase(element,index,array){
    array[index]=element.toUpperCase();
}
function lowercase(element,index,array){
    array[index]=element.toLowerCase();
}
function capitalize(element,index,array){
    array[index]=element.charAt().toUpperCase()+element.slice(1);
}