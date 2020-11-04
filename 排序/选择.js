function sort(arr) {
    let item = 0, len = arr.length
    for (let i = 0; i < len - 1; i++) {
        item = i
        for (let j = i; j < len; j++) {
            if (arr[item] > arr[j]) {
                item = j
            }
        }
        [arr[i], arr[item]] = [arr[item], arr[i]]
    }
    console.log(arr)
}