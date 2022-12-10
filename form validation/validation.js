const nama = document.getElementById('nama')
const email = document.getElementById('email')
const jam = document.getElementById('jam')
const tujuan = document.getElementById('jam')
const jumlah = document.getElementById('jumlah')
const forms = document.getElementById('forms')
const errorElement = document.getElementById('error')



forms.addEventListener('submit', (e) => {
    let messages = []
    if (nama.value.length <= 30){
        messages.push('Name is required, must be less than 30 characters')
    }else{
        window.alert("Validasi gagal, something required");
        console.log("gagal")
    }

    if(jumlah.value.length >= 10){
        messages.push('tiket tidak bisa lebih dari 10 tiket')
    }else{
        window.alert("Validasi gagal, something required");
        console.log("gagal")
    }
    e.preventDefault()
})