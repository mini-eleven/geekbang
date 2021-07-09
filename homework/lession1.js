
const RADIX = 64

/**
 * 十进制转六十四进制
 * @param {*} number 
 */
function DEC2MIME(number) {
    if (isNaN(number) || number == null || number == '') {
        throw new Error('input must be a number')
    }
    let numArr = number.toString().split('.')
    let integerPart = parseInt(numArr[0])
    let integerArr = []
    
    do {
        let mod = integerPart % RADIX
        integerArr.unshift(mod)
        integerPart = parseInt(integerPart / 64)
    } while(integerPart)

    let tempInt = integerArr.join(' ')
}