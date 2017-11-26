const toLowerCase = input => {
    const output = [];

    for (let i = 0; i < input.length; i++) {
        output.push(input[i].toLowerCase());
    }

    return output; // [ 'abc', 'xyz' ]
};

toLowerCase(['ABC', 'XYZ']);
