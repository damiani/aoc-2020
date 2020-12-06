function parseToGroups(input) {
    return input.split("\n\n");
}

function toString(chars) {
    return chars.join('');
}

function countUnique(chars) {
    return new Set(toString(chars)).size;
}

function countCommon(chars) {
    let str = toString(chars);

    return [...new Set(str)].reduce((sum, char) => {
        return sum + (countLettersInString(str, char) === chars.length ? 1 : 0);
    }, 0);
}

function countLettersInString(chars, char) {
    return chars.split(char).length - 1;
}

exports.one = (input) => {
    console.log (parseToGroups(input).reduce((sum, group) => {
        return sum + countUnique(group.split("\n"));
    }, 0));
};

exports.two = (input) => {
    console.log (parseToGroups(input).reduce((sum, group) => {
        return sum + countCommon(group.split("\n"));
    }, 0));
};
