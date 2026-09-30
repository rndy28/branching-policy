const x = 12;

const y = 29;

const b = 239;

function add(x,y){
    return x + y;
}


function pipe(...arr) {

    return (value) => arr.map((fn) => fn(value));
}