// Original code created by Fendy Wijaya (2602092150)

// Code Javascript untuk mengatur penambahan atau pengurangan item produk di product.html

const min = document.querySelector('.minus')
const plus = document.querySelector('.plus')
let angka = document.getElementsByClassName('angka')[0]

count = 1

min.addEventListener('click', () => {
    if(count - 1 === -1){
        alert("Jumlah barang tidak boleh di bawah 0")
        return
    }
    count -= 1
    angka.innerHTML = count 
})

plus.addEventListener('click', () => {
    count += 1
    angka.innerHTML = count;
    console.log(count)  
})