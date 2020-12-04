const fs = require('fs');
const day = parseInt(process.argv[2], 10);

if (Number.isNaN(day) || day < 1 || day > 25) {
    console.error('Invalid day.');
    process.exit(1);
}

const part = process.argv[2].slice(-1) === '+' ? 'two' : 'one';
const dir = `/day-${day.toString().padStart(2, 0)}`;
const input = fs.readFileSync(__dirname + dir + '/input.txt', 'utf-8').trim();

require(__dirname + dir + '/index.js')[part](input);
