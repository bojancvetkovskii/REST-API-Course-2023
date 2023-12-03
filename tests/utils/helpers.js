export async function generateUniqueName() {
    const length = 15;

    return generateUniqueString(length);
}

export async function generateDescription() {

    const currentDate = new Date();
    const date = currentDate.toISOString().split('T')[0];
    const time = currentDate.toISOString().split('T')[1];

    return date + " " + time;
}

// Generates primary color code in range [0, 255]
export async function generatePrimaryColorCode() {

    const colorCode = Math.floor(Math.random() * (256));

    return colorCode
}

// Generates alpha component of the color [0, 1]
export async function generateAlphaColorCode() {

    const colorCode = Math.random();

    return colorCode
}

export async function generateTestData() {
    setEnvironment(process.argv.slice(process.argv.length - 1)[0])
}

function setEnvironment(env) {
    global.env = env
}

export async function generateUniqueString(length) {
    let uniqueString = '';

    while (uniqueString.length < length) {
        uniqueString += (Math.random() + 1).toString(36).substring(7);
    }

    return uniqueString.substring(0, length);
}

export async function generateInvalidProjectId() {
    let length = 24;
    let uniqueString = '';

    while (uniqueString.length < length) {
        uniqueString += (Math.random() + 1).toString(10).substring(7);
    }

    return uniqueString.substring(0, length);
}
