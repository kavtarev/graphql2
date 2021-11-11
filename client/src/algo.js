let str = 'aaabcccaddddbb'

function change(str) {
    let sym = str[0]
    let count = 1
    let arr = []

    for (let i = 1; i < str.length; i++) {
        if (str[i] === sym) {
            count += 1
        } else {
            arr.push(sym)
            arr.push(count)
            sym = str[i]
            count = 1
        }
    }
    arr.push(sym)
    arr.push(count)
    return arr.join('')
}

console.log(change(str))
