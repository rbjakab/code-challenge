const { getColor } = require('./apiMock');

const { Green, Blue, Red, White, Black } = require('./classes');

async function getColors(green, blue, red, white, black, order, callback) {
    const colors = [];

    if (green === 'true') {
        green = new Green();
        colors[order.indexOf(green.name)] = getColor(green.name);
    }
    if (blue === 'true') {
        blue = new Blue();
        colors[order.indexOf(blue.name)] = getColor(blue.name);
    }
    if (red === 'true') {
        red = new Red();
        colors[order.indexOf(red.name)] = getColor(red.name);
    }
    if (white === 'true') {
        white = new White();
        colors[order.indexOf(white.name)] = getColor(white.name);
    }
    if (black === 'true') {
        black = new Black();
        colors[order.indexOf(black.name)] = getColor(black.name);
    }
    callback(colors);
    return colors;
}

function colors() {
    console.log('DEBUG: ', process.argv);

    let green = process.argv[2];
    let blue = process.argv[3];
    let red = process.argv[4];
    let white = process.argv[5];
    let black = process.argv[6];
    const colorOrder = process.argv[7];

    getColors(green, blue, red, white, black, JSON.parse(colorOrder), async function (colors) {
        colors = await Promise.all(colors);
        var hexColors = [];
        colors.forEach((color) => (color ? hexColors.push(color.HEX) : null));
        console.log(hexColors);
    });
}

colors();

/*
To run application:
node ~/code-challenge/src/index.js true false true '["green","blue", "red"]'
*/
