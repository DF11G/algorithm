// 求最大公约数 * 辗转相除法 *
function common(a, b) {
    return b === 0 ? a : common(b, a % b)
}