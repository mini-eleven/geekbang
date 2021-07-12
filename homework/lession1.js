const CHARS = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ-~'.split('')
const RADIX = CHARS.length || 64
const DIGIT = 10 // 小数只保留十位

/**
 * 十进制转六十四进制
 * @param {Number} number 
 */
function _10to64(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        throw new Error('input must be a number')
    }

    // 符号位
    const sign = Math.sign(number)
    number = Math.abs(number)

    // 整数部分
    let integerArr = []
    // 浮点数部分
    let floatArr = []
    let integerPart = Math.trunc(number)
    do {
        let mod = integerPart % RADIX
        integerArr.unshift(CHARS[mod])
        integerPart = parseInt(integerPart / 64)
    } while (integerPart)

    // 判断是否有小数部分
    if (number % 1 !== 0) {
        let floatPart = number % 1
        do {
            let temp = floatPart * RADIX
            floatArr.push(CHARS[Math.floor(temp)])
            floatPart = temp % 1
        }
        while (floatArr.length < DIGIT)
    }

    let result = floatArr.length == 0 ? integerArr.join('') : integerArr.join('') + '.' + floatArr.join('')

    //负数不多做处理了..
    return sign < 0 ? '-' + result : result
}

// console.log(_10to64(''))
// console.log(_10to64('abc'))

console.log(_10to64(100))
console.log(_10to64(-100))

console.log(_10to64(56.32))
console.log(_10to64(-56.32))