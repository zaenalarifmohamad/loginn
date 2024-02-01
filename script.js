function getArr() {
    return Array.from(arguments);
}
const result = getArr(...[1,2,3]);

console.log(result);