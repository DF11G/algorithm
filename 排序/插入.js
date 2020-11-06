function sort(arr) {
    let now = 0
    let nowValue = 0
    let len = arr.length
    for (let i = 1; i < len; i++) {
        now = i - 1
        nowValue = arr[i]
        while (now >= 0 && arr[now] > nowValue) {
            arr[now + 1] = arr[now]
            now = now - 1
        }
        arr[now + 1] = nowValue
    }
    console.log(arr)
}