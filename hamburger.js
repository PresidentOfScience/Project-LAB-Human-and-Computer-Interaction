// Original code created by Fendy Wijaya (2602092150)

const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.list-menu')

let keeper = 0
hamburger.addEventListener('click',()=>{
    if(keeper === 0){
        menu.classList += ' hamburger-down'
        keeper = 1;
    }
    else{
        menu.classList = 'list-menu'
        keeper = 0;
    }
})