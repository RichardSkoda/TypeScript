// literal type

function combination(input1: string | number, input2: string | number, resultType: string){
    let result: number | string
    if(typeof(input1) === 'number' && typeof(input2) === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
        return result;
    } else {
        result = input1.toString() + input2.toLocaleString();
        return result;
    }

    // if(resultType === 'as-number'){
    //     result = +result;
    //     return result
    // } else{
    //     return result.toLocaleString()
    // }
};

console.log(combination(5, 6, 'as-number'));

const xxx = (combination("Richard", 'Renata', 'as-number'));
console.log(typeof(xxx))
console.log(xxx)

console.log(combination("10", '8', 'as-number'));

