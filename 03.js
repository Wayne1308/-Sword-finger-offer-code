/**
 * 实现一个函数，把字符串 s 中的每个空格替换成"%20"
 * @method fun
 * @s 输入值
 */
function fun(s) {
    console.log('input: ', [...arguments])
    // write code here
    const list = Array.from(s)
    const res = list.map(el => {
        if(el === " ") {
            el = "%20"
        }
        return el;
    })
    return res.join("")
}

const params = 'We are happy.'

console.log('output: ', fun(params))