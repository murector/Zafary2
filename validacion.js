function validar_usuario()
{
    var x = document.getElementById("input_1").value;
    var y = document.getElementById("input_2").value;
    if (x=="ejemplo@gmail.com" && y=="123456"){
        console.log("Iniciando sesión...")
        alert("Iniciando sesion...")
    }
    else{
        console.log("Email y/o contraseña incorrecto")
        alert("Email y/o contraseña incorrecto")
    }
}
