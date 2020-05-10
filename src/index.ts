
const {version: VERSION} = require('../package.json');
console.log(VERSION);

async function foo() {
    let obj = {foo: "bar"};//await import('./anotherFile');
    console.log(obj);
}

export async function bar() {
    console.log('foo');
    await foo();
}
