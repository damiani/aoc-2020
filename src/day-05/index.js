function getSeatIds(input) {
    return input.split("\n").map(row => calculateSeatId(row));
}

function calculateSeatId(val) {
    let row = parseInt(binary(val.substring(0, 7), 'F', 'B'), 2);
    let col = parseInt(binary(val.substring(7), 'L', 'R'), 2);

    return row * 8 + col;
}

function binary(chars, low, high) {
    return chars.split(low).join(0).split(high).join(1);
}

exports.one = (input) => {
    console.log(Math.max(...getSeatIds(input)));
};

exports.two = (input) => {
    new Int32Array(getSeatIds(input)).sort().forEach((id, index, sorted) => {
        if (sorted[index + 1] - id === 2) {
            console.log('Your seat is ' + (id + 1));
        }
    });
};
