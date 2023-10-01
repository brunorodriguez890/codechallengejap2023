document.addEventListener("DOMContentLoaded",()=>{

    document.getElementById("enviar").addEventListener("click",()=>{
      let link = document.getElementById("apiendpoint").value;
    fetch(link, {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    fechanacimiento: document.getElementById("nacimiento").value,
  })
})
.then(response => response.json())
.then(data => {
  console.log(data)
})
    })
})
