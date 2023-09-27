let a = [
    [1, 3],
    [2, 5]
];

let b = [
    [2, 2],
    [0, 1]
];

let c = [[], []];
if (a.length != b.length || a[0].length != b[0].length) {

} else {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            c[i][j] = 0;
            for (let k = 0; k < a.length; k++) {
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }
}

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[0].length; j++) {
        console.log(c[i][j]);
    }
}



