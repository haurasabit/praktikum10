function kirim(){
    let username = document.getElementById("username").value;
    let pss = document.getElementById("pss").value;
    let login = document.getElementById("forms");
    if (username == "ahmad2017" || pss == "integrity"){
        window.alert("Login Sukses! Welcome Ahmad")
        window.location.href = "sukses-login.html";
        console.log("berhasil login ahmad2017")
        
    } else{
        window.alert("Login Gagal, invalid username or password");
        console.log("login gagal")
    }
    
    }
 