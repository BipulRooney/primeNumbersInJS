function createArray(min, max) {
    arr = []
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
}

var my_arr = createArray(1, 100);

var i, j;
var arr_len = my_arr.length;
for (i = 0; i < arr_len; i++) {
    for (j = i + 1; j < arr_len; j++) {
        if (my_arr[j] % my_arr[i] == 0) {
            my_arr.splice(j, 1);
        }
    }
}

console.log(my_arr);
