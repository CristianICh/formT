let estado=document.getElementById('estado');
console.log(estado);
let parrafo=document.getElementById('parrafo');
console.log(parrafo);

estado.addEventListener('change',(e)=>{
    console.log(e.target.value);

    parrafo.textContent="Opción seleccionada: " +e.target.value;
})