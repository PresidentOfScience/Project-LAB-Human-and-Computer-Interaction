// Original code created by Fendy Wijaya (2602092150)

const submit = document.getElementById('submit')

submit.addEventListener('click', e=>{
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const pw= document.getElementById('pw').value
    const address = document.getElementById('address').value
    const comment= document.getElementById('comment').value
    const term= document.getElementById('term')
    e.preventDefault
    if(name === ''){
        alert("Nama tidak boleh kosong!")
        return false
    }
    if(email === ''){
        alert("Email tidak boleh kosong!")
        return false
    }
    if(pw === ''){
        alert("Kata sandi tidak boleh kosong!")
        return false
    }
    if(address === ''){
        alert('Alamat tidak boleh kosong!')
        return false
    }
    if(comment === ''){
        alert("Masukkan kendala yang Anda alami.")
        return false
    }
    if(email.includes("@")===false){
        alert("Masukkan alamat email yang tepat!")
        return false
    }
    else if(!email.split("@")[1].includes(".")){
        alert("Masukkan alamat email yang tepat!")
        return false
    }
    if(!term.checked){
        alert("Beri tanda centang untuk menyetujui program ini.")
        return false
    }
    alert('Formulir berhasil dikumpulkan!') 
    location.reload(true)
})