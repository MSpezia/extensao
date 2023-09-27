let a = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log("Matriz Normal");
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < 1; j++) {
        console.log(a[i][j], a[i][j + 1]);
    }
}
console.log("\nMatriz Transposta");

for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < 1; j++) {
        console.log(a[j][i], a[j + 1][i], a[j + 2][i]);
    }
}