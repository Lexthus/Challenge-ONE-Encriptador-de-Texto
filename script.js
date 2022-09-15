const inputTexto = document.querySelector(".input-texto");
const respuesta = document.querySelector(".respuesta");
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none"


//Botón Encriptar

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value)
  respuesta.value = textoEncriptado
  respuesta.style.backgroundImage = "none"
  inputTexto.value = ""
  btnCopy.style.display = "block"
}

//Encriptar mensaje

function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringEncriptada;
}


//Botón desencriptar

function btnDesencriptar() {
  const textoEncriptado = desencriptar(inputTexto.value)
  respuesta.value = textoEncriptado
  inputTexto.value = ""
}

//Desencriptar mensaje

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }
  return stringDesencriptada;
}

//Botón copiar

function copiar() {

  respuesta.select();
  navigator.clipboard.writeText(respuesta.value)
  respuesta.value = "";
  swal.fire(
    '',
    "Texto Copiado",
    'success',
  )

}
