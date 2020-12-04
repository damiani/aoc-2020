function parseToRows(input) {
    return input.replace(/\n\n/g, '%').replace(/\n/g, ' ').split('%');
}

function parseRow(row) {
    return row
        .trim()
        .split(' ')
        .reduce(function(carry, item) {
            let split = item.split(':');
            carry[split[0]] = split[1];

            return carry;
        }, {})
}

function hasAllValues(passport, required) {
    return required.every(key => passport.hasOwnProperty(key));
}

function isValid(passport) {
    return byrIsValid(passport.byr)
        && iyrIsValid(passport.iyr)
        && eyrIsValid(passport.eyr)
        && hgtIsValid(passport.hgt)
        && hclIsValid(passport.hcl)
        && eclIsValid(passport.ecl)
        && pidIsValid(passport.pid);
}

function byrIsValid(val) {
    let i = parseInt(val);
    return i >= 1920 && i <= 2002;
}

function iyrIsValid(val) {
    let i = parseInt(val);
    return i >= 2010 && i <= 2020;
}

function eyrIsValid(val) {
    let i = parseInt(val);
    return i >= 2020 && i <= 2030;
}

function hgtIsValid(val) {
    let cms = val.split('cm');

    if (cms.length === 2) {
        i = parseInt(cms[0]);
        return i >= 150 && i <= 193;
    }

    let ins = val.split('in');

    if (ins.length === 2) {
        i = parseInt(ins[0]);
        return i >= 59 && i <= 76;
    }
}

function hclIsValid(val) {
    let regex = /^#[0-9a-f]{6}$/g;

    return regex.test(val);
}

function eclIsValid(val) {
    return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(val);
}

function pidIsValid(val) {
    let regex = /^\d{9}$/g;

    return regex.test(val);
}

exports.one = (input) => {
    let rows = parseToRows(input).map(row => parseRow(row));
    let required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    let valid = rows.map(row => hasAllValues(row, required)).filter(val => val);

    console.log(valid.length);
};

exports.two = (input) => {
    let rows = parseToRows(input).map(row => parseRow(row));
    let required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    let valid = rows.map(row => hasAllValues(row, required) ? row : null)
        .filter(val => val)
        .map(row => isValid(row) ? row : null)
        .filter(val => val);

    console.log(valid.length);
};
