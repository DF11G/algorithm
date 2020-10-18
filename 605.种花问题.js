// 间隔放置问题。在遍历时，放置后对指针移动一定间距即可。
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i - 1] != 1 && flowerbed[i] == 0 && flowerbed[i + 1] != 1) {
            n--
            i++ // 移动间距
        }
    }
    if (n > 0) {
        return false
    } else {
        return true
    }
};