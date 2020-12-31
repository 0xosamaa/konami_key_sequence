// const keysArr = []
// const code = 'mpkfa'
// let flag = false
// window.addEventListener('keyup', (e) => {
//     keysArr.push(e.key)
//   for (let i = 0; i < keysArr.length; i++) {
//     if (keysArr[i] === code[i]) {
//         flag = true
//     }else{
//         flag = false
//         keysArr.length = 0
//     }
//   }
//   if(flag && keysArr.length == code.length){
//     console.log('cheat activated')
//     keysArr.length = 0
//     flag = false
//   }
// })

const body = document.querySelector('body')
const text = document.querySelector('h1')
const pressed = []
const secretCode = 'mpkfa'
let flag = false

window.addEventListener('keyup', (e) => {
    pressed.push(e.key)

    pressed.splice(0, pressed.length - secretCode.length)
    console.log(pressed)

    if(pressed.join('') === secretCode){
        console.log('Secret world unlocked.')
        body.style.background = 'black'
        body.style.color = '#fff'
        text.innerText = 'Access Granted\n\n Press Enter'
        flag = true
    }
    if(flag && e.key =='Enter'){
        cornify_add()
    }
})
