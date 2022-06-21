const laranja = {
    value: 2,
};
const maca = {
    value: 3,
};

function mapArray() {
    const array = [1, 2, 3, 4, 5];

    return array.map(function(item) {
        return item * this.value;
    }, maca);
}

console.log(mapArray());