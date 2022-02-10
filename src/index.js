// You should implement your task here.

// module.exports = function towelSort(matrix) {
//     let arr = [];
//     if (matrix !== undefined) {
//         for (let i = 0; i < matrix.length; i++) {
//             if (i % 2 !== 0) {
//                 matrix[i].reverse();
//             }
//             arr.push(...matrix[i]);
//         }
//     }
//     return arr;
// };
module.exports = function towelSort(matrix) {
    let arr = [];
    if (matrix !== undefined) {
        matrix.map((el, i) => {
            if (i % 2 !== 0) {
                el.reverse();
            }
            arr.push(...el);
        });
    }
    return arr;
};
