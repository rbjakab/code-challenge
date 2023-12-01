const { getColor } = require('./apiMock');
const { Green, Blue, Red, White, Black } = require('./classes');

function parseArgs() {
    const args = process.argv.slice(2);

    const colors = args.filter((arg) => !arg.includes('--'));
    const flags = args.filter((arg) => arg.includes('--'));

    return { colors, flags };
}

function parseFlags(flags) {
    const colorFlags = ['--HEX', '--RGB'];
    const orderFlags = ['--par', '--seq'];

    const colorFlag = flags.filter((flag) => colorFlags.includes(flag));
    const orderFlag = flags.filter((flag) => orderFlags.includes(flag));

    if (colorFlag.length !== 1) {
        throw Error('You must specify one color flag!');
    }

    if (orderFlag.length !== 1) {
        throw Error('You must specify one order flag!');
    }

    return {
        colorFlag: colorFlag[0].substring(2),
        orderFlag: orderFlag[0].substring(2),
    };
}

async function colors() {
    const { colors, flags } = parseArgs();
    const { colorFlag, orderFlag } = parseFlags(flags);

    if (orderFlag === 'par') {
        const promises = colors.map((color) => getColor(color));
        const results = await Promise.all(promises);
        console.log(results.map((result) => result[colorFlag]));
    }

    if (orderFlag === 'seq') {
        for (const color of colors) {
            const result = await getColor(color);
            console.log(result[colorFlag]);
        }
    }
}

colors();
