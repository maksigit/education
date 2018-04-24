function test(a, b, c) {
    return 'a=' + a + ',b=' + b + ',c=' + c;
}

function partialAny(fn, ...partialArgs) {
    return function (...args) {
        for (let i = 0; i < partialArgs.length; i++) {
            if (partialArgs[i] === undefined) {
                partialArgs[i] = args;
            }
        }
        return fn.apply(this, partialArgs.concat(args));
    }
}

let test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3