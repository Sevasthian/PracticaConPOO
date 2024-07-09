
let dato = ""; // Variable donde se guardará el valor del input

document.querySelector('#body').innerHTML = /*html*/`
<h1>Formulario</h1>
<input type="text">
`;
// Escuchamos el evento de cambio en el input
document.querySelector('input[type="text"]').addEventListener('change', function(event) {
    dato = event.target.value; // Guardamos el valor del input en la variable dato
    console.log('Dato introducido:', dato);
    
    // Crear una instancia de Persona con el dato introducido
    let nuevaPersona = new Persona(dato, 25, 'Masculino'); // Por ejemplo, edad y sexo ficticios
    console.log('Persona creada:', nuevaPersona);
});
class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    static saludar() {
        return `Hola, mi nombre es ${this.nombre}`;
    }
}

// Actualizamos el contenido del body con el formulario
document.querySelector('#body').innerHTML = /*html*/`
    <h1>Formulario</h1>
    <input type="text">
    <span>${Persona.saludar()}</span>
`;