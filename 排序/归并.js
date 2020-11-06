function sort(arr) {
    let len = arr.length
    if (len < 2) {
        return arr
    }
    let left = []
    let right = []
    let middle = 0
    middle = Math.floor(len / 2)
    left = arr.slice(0, middle)
    right = arr.slice(middle)
    return merge(sort(left), sort(right))
}
function merge(left, right) {
    let result = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    while (left.length) {
        result.push(left.shift())
    }
    while (right.length) {
        result.push(right.shift())
    }
    return result
}