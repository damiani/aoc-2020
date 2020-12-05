function parseInput(input) {
    return input.split("\n");
}

function parseRow(val) {
    let rule = val.replace(':', '').split(' ');

    return {
        low: rule[0].split('-')[0],
        high: rule[0].split('-')[1],
        character: rule[1][0],
        password: rule[2],
    };
}

function isValidOne(row) {
    let rule = parseRow(row);
    let count = [...rule.password].filter(c => c === rule.character).length;

    return count >= rule.low && count <= rule.high;
}

function isValidTwo(row) {
    let rule = parseRow(row);
    let characters = [...rule.password];

    return (characters[rule.low - 1] === rule.character)
        + (characters[rule.high - 1] === rule.character)
        === 1;
}

exports.one = (input) => {
    console.log(
        parseInput(input).map(row => isValidOne(row)).filter(val => val).length
    );
};

exports.two = (input) => {
    console.log(
        parseInput(input).map(row => isValidTwo(row)).filter(val => val).length
    );
};
