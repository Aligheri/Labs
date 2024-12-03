function array() {
    const internalArray = [];

    const accessor = index => internalArray[index];

    accessor.push = value => internalArray.push(value);
    accessor.pop = () => internalArray.pop();

    return accessor;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());