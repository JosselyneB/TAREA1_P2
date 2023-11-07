function Registro() {
    // Obtiene los valores de los campos del formulario
    var cedula = document.getElementById("cedula").value;
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var email = document.getElementById("email").value;

    // Realiza la validación
    if (cedula === "" || nombres === "" || apellidos === "" || fechaNacimiento === "" || email === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }



    // Si pasa todas las validaciones, puedes enviar los datos o realizar otras acciones
    alert("Registro exitoso");
}
