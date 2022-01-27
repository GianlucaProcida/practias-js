// /* HISTORIA COFLA 1 

// dineroCofla = prompt("cuanto dinero tienes cofla?");
// dineroRoberto = prompt("cuanto dinero tienes roberto?");
// dineroPedro = prompt("cuanto dinero tienes pedro?");

// dineroCofla = parseInt(dineroCofla);

// if (dineroCofla >= 0.6 && dineroCofla < 1) {
//     alert("Cofla, comprate el helado de agua");
//     alert("y te sobran" + (dineroCofla - 0.6));
// }

// else if (dineroCofla >= 1 && dineroCofla < 1.6) {
//     alert("Cofla, comprate el helado de crema");
//     alert("y te sobran" + (dineroCofla - 1));
// }

// else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
//     alert("Cofla, comprate el helado de heladix");
//     alert("y te sobran" + (dineroCofla - 1.6));
// }

// else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
//     alert("Cofla, comprate el helado de heladovich");
//     alert("y te sobran" + (dineroCofla - 1.7));
// }

// else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
//     alert("Cofla, comprate el helado de helardo");
//     alert("y te sobran" + (dineroCofla - 1.8));
// }

// else if (dineroCofla >= 2.9) {
//     alert("Cofla, podes comprar el helado con confites o el pote de 1/4kg");
//     alert("y te sobran" + (dineroCofla - 2.9));
// }

// else {
//     alert("lo siento Cofla, pobre de mierda, no te alcanza");
// }



// if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
//     alert("Roberto, comprate el helado de agua");
// }

// else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
//     alert("Roberto, comprate el helado de crema");
// }

// else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
//     alert("Roberto, comprate el helado de heladix");
// }

// else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
//     alert("Roberto, comprate el helado de heladovich");
// }

// else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
//     alert("Roberto, comprate el helado de helardo");
// }

// else if (dineroRoberto >= 2.9) {
//     alert("Roberto, helado con confites o el pote de 1/4kg");
// }

// else {
//     alert("lo siento Roberto, pobre de mierda, no te alcanza");
// }





// if (dineroPedro >= 0.6 && dineroPedro < 1) {
//     alert("Pedro,  comprate el helado de agua");
// }

// else if (dineroPedro >= 1 && dineroPedro < 1.6) {
//     alert("Pedro,  comprate el helado de crema");
// }

// else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
//     alert("Pedro,  comprate el helado de heladix");
// }

// else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
//     alert("Pedro,  comprate el helado de heladovich");
// }

// else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
//     alert("Pedro,  comprate el helado de helardo");
// }

// else if (dineroPedro >= 2.9) {
//     alert("Pedro,  helado con confites o el pote de 1/4kg");
// }

// else {
//     alert("lo siento Pedro, pobre de mierda, no te alcanza");
// }*/



/*HISTORIA COFLA 2

// let free = false;

// const validarCliente = (time)=>{
//     let edad = prompt("¿Cual es tu edad?");
//     if (edad >= 18){
//         if (time >= 2 && time < 7 && free == false){
//             alert("podes pasar gratis porque sos la 1er persona despues de las 2 am");
//             free = true;
//         } else{
//             alert(`son las ${time} y podes pasar, pero tenes que pagar la entrada`);
//         }
//     } else {
//         alert("menor de edad, no podes pasar");
//     }
// }

// validarCliente(23);
// validarCliente(0.2);
// validarCliente(0.6);
// validarCliente(24);
// validarCliente(1);
// validarCliente(2);
// validarCliente(2.4);

// let cantidad = prompt("¿Cuantos alumnos son?");
// let alumnosTotales = [];

// for (i = 0; i < cantidad; i++) {
//     alumnosTotales[i] = [prompt("Nombre del alumno" + (i + 1)),0];
// }

// const tomarAsistencia = (nombre,p)=>{
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P"){
//         alumnosTotales[p][1]++;
//     }
// }

// for (i = 0; i < 30; i++){
//     for (alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0], alumno);
//     }
// }

// for (alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//     __________Presentes: ${alumnosTotales[alumno][1]} <br>
//     __________Ausencias: ${30 - alumnosTotales[alumno][1]}`;
    
//     if (30 - alumnosTotales[alumno][1] > 18) {
//         resultado+= "REPROBADO POR INASISTENCIAS <br><br><br>";
//     } else{
//         resultado+= "<br><br>"
//     } 
//     document.write(resultado)
// }

const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("¿Que operacion deseas realizar?")
let operacion = prompt("1: sumar, 2: restar, 3: dividir, 4: multiplicar")

if (operacion == 1){
    let numero1 = prompt("primer número para sumar");
    let numero2 = prompt("segundo número para sumar");
    resultado = sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2){
    let numero1 = prompt("primer número para restar");
    let numero2 = prompt("segundo número para restar");
    resultado = restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3){
    let numero1 = prompt("primer número para dividir");
    let numero2 = prompt("segundo número para dividir");
    resultado = dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4){
    let numero1 = prompt("primer número para multiplicar");
    let numero2 = prompt("segundo número para multiplicar");
    resultado = multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else{
    alert("no se ha encontrado la operación");
}*/

/*HISTORIA DE COFLA 3*/

// class Celular {
//     constructor(nombre,color,peso,tamaño,rdc,ram){
//         this.nombre = nombre
//         this.color = color;
//         this.peso = peso;
//         this.tamaño = tamaño;
//         this.resolucionDeCamara = rdc;
//         this.memoriaRam = ram;
//         this.encendido = false;
//     }
//     presionarBotonEncendido(){
//         if (this.encendido == false){
//             alert("celular prendido");
//             this.encendido = true;
//         } else {
//             alert("celular apagado");
//             this.encendido = false;
//         }
//     }
//     reiniciar(){
//         if (this.encendido == true){
//             alert("reiniciando celular");
//         } else{
//             alert("el celular esta apagado");
//         }
//     }
//     tomarFotos(){
//         alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara} `);
//     }
//     grabarVideo(){
//         alert(`grabando video en ${this.resolucionDeCamara}`);
//     }   
//     mobileInfo(){
//         return `
//         <b>${this.nombre}</b><br>
//         Color: <b>${this.color}</b><br>
//         Peso: <b>${this.peso}</b><br>
//         Tamaño: <b>${this.tamaño}</b><br>
//         Memoria Ram: <b>${this.memoriaRam}</b><br>
//         Resolucion de Video: <b>${this.resolucionDeCamara}</b><br>
//         `;
//     }
// }

// class CelularAltaGama extends Celular{
//     constructor(nombre,color,peso,tamaño,rdc,ram,rdce){
//         super(nombre,color,peso,tamaño,rdc,ram);
//         this.resolucionDeCamaraExtra = rdce;
//     }
//     grabarVideoLento(){
//         alert("estas grabando en camara lenta");
//     }
//     reconocimientoFacial(){
//         alert("vamos a iniciar un reconocimiento facial");
//     }
//     infoAltaGama(){
//         return this.mobileInfo() + `Resolucion de Camara extra: <b>${this.resolucionDeCamaraExtra}</b>`
//     }
// }

// // celular1 = new Celular ("iphone7","rojo","150gr","5'","hd","1GB");
// // celular2 = new Celular ("iphone8","negro","155gr","5.4'","full hd","2GB");
// // celular3 = new Celular ("iphoneX","blanco","146gr","5.9'","full hd","2GB");


// // celular1.presionarBotonEncendido();
// // celular1.tomarFotos();
// // celular1.grabarVideo();
// // celular1.reiniciar();
// // celular1.presionarBotonEncendido();

// // document.write(`
// //     ${celular1.mobileInfo()} <br>
// //     ${celular2.mobileInfo()} <br>
// //     ${celular3.mobileInfo()} <br>
// // `);

// celular1 = new CelularAltaGama("iphone x Pro","rojo","130gr","5.2'","4k","3GB","full hd");
// celular2 = new CelularAltaGama("Iphone X Max", "negro","142gr","6'","4k","4GB","hd");

// document.write(`
//     ${celular1.infoAltaGama()} <br><br>
//     ${celular2.infoAltaGama()} <br>
// `);

// class App {
//     constructor(nombre,descargas,puntuacion,peso){
//         this.nombre = nombre;
//         this.descargas = descargas;
//         this.puntuacion = puntuacion
//         this.peso = peso;
//         this.abierta = false;
//         this.instalada = false;
//     }
//     instalar(){
//         if (this.instalada == false) {
//             this.instalada = true;
//             alert("La aplicación fue instalada con exito");    
//         }
//     }
//     desinstalar(){
//         if (this.instalada == true) {
//             this.instalada = false;
//             alert("La aplicación fue desinstalada con exito");
//         }
//     }
//     abrir(){
//         if (this.abierta == false && this.instalada == true){
//             this.abierta = true;
//             alert("App abierta");
//         }
//     }
//     cerrar(){
//         if (this.abierta == true && this.instalada == true){
//             this.abierta = false;
//             alert("App cerrada");
//         }
//     }
//     appInfo(){
//         return ` 
//         <b>${this.nombre}</b><br>
//         Descargas: <b>${this.descargas}</b><br>
//         Puntuacion: <b>${this.puntuacion}</b><br>
//         Peso: <b>${this.peso}</b><br>
//         `;
//     }
// }

// app = new App("Instagram","16.000","*****","900mb");
// app2 = new App("Facebook","50.569","****","1200mb");
// app3 = new App("Waze","8.012","***","500mb");
// app4 = new App("Tinder","2.000","****","870mb");
// app5 = new App("Discord","6.572","*","723mb");
// app6 = new App("Ronin Wallet","10.096","***","6120mb");
// app7 = new App("Twitter","1.809","**","500mb");

// document.write(`
//     ${app.appInfo()} <br><br>
//     ${app2.appInfo()} <br><br>
//     ${app3.appInfo()} <br><br>
//     ${app4.appInfo()} <br><br>
//     ${app5.appInfo()} <br><br>
//     ${app6.appInfo()} <br><br>
//     ${app7.appInfo()} <br><br> `);


/*HISTORIA DE COFLA 4

// class Calculadora {
//     constructor(){

//     }
// sumar(num1,num2){
//     return parseInt(num1) + parseInt(num2);
// }
// restar(num1,num2){
//     return parseInt(num1) - parseInt(num2);
// }
// dividir(num1,num2){
//     return parseInt(num1) / parseInt(num2);
// }
// multiplicar(num1,num2){
//     return parseInt(num1) * parseInt(num2);
// }
// potenciar(num,exp){
//     let numero = num;
//     for (var i = 1; i < exp; i++){
//         numero = numero * num;
//     }
//     return numero;
// }
// raizCuadrada(num){
//     return Math.sqrt(num);
// }
// raizCubica(num){
//     return Math.cbrt(num);
// }
// }

// const calculadora = new Calculadora();

// alert("¿Que operacion deseas realizar?")
// let operacion = prompt("1: sumar, 2: restar, 3: dividir, 4: multiplicar, 5: potenciar, 6: raiz cuadrada, 7: raiz cubica");

// if (operacion == 1){
//     let numero1 = prompt("primer número para sumar");
//     let numero2 = prompt("segundo número para sumar");
//     resultado = calculadora.sumar(numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 2){
//     let numero1 = prompt("primer número para restar");
//     let numero2 = prompt("segundo número para restar");
//     resultado = calculadora.restar(numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 3){
//     let numero1 = prompt("primer número para dividir");
//     let numero2 = prompt("segundo número para dividir");
//     resultado = calculadora.dividir(numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 4){
//     let numero1 = prompt("primer número para multiplicar");
//     let numero2 = prompt("segundo número para multiplicar");
//     resultado = calculadora.multiplicar(numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 5){
//     let numero1 = prompt("Numero a potenciar");
//     let numero2 = prompt("Exponente");
//     resultado = calculadora.potenciar(numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 6){
//     let numero1 = prompt("Conocer la raiz cuadrada de: ");
//     resultado = calculadora.raizCuadrada(numero1);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 7){
//     let numero1 = prompt("Conocer la raiz cubica de: ");
//     resultado = calculadora.raizCubica(numero1);
//     alert(`tu resultado es ${resultado}`);
// }
// else{
//     alert("no se ha encontrado la operación");
// }


// const obtenerInformacion = (materia)=>{
//     materias = {
//         fisica: ["Perez","Pedro","Pepito","Cofla","Maria"],
//         programacion:  ["Martinez","Pedro","Juan","Pepito"],
//         logica:  ["Juan Carlos","Pedro","Juan","Pepito","Cofla","Maria"],
//         quimica:  ["Gomez","Pedro","Juan","Pepito","Cofla","Maria"]
//     }
//     if (materias[materia] !== undefined) {
//         return [materias[materia],materia,materias];
//     } else {
//         return materias;
//     }
// }

// const mostrarInformacion = (materia)=>{
//     let informacion = obtenerInformacion(materia);

// if (informacion !== false){
//     let profesor = informacion[0][0];
//     let alumnos = informacion[0];
//     alumnos.shift();
//     document.write(`El profesor de <b>${informacion[1]}</b>: <b style='color:red'> ${profesor}</b><br>
//         Los alumnos son: <b style='color:blue'>${alumnos} </b><br><br>
//     `);
// }
// }

// const cantidadDeClases = (alumno)=>{
//     let informacion = obtenerInformacion();
//     let clasesPresentes = [];
//     let cantidadTotal = 0;
//     for (info in informacion) {
//         if (informacion[info].includes(alumno)) {
//             cantidadTotal++;
//             clasesPresentes.push(" " + info)
//         }
//     }
//     return `<b style='color:blue'>${alumno}</b> esta en <b>${cantidadTotal} clases</b><br>
//     Esta cursando las clases de <b>${clasesPresentes}</b><br><br>`;
// }

// mostrarInformacion("fisica");
// mostrarInformacion("quimica");
// mostrarInformacion("programacion");
// mostrarInformacion("logica");

// document.write(cantidadDeClases("Cofla"));
// document.write(cantidadDeClases("Maria"));
// document.write(cantidadDeClases("Pedro"));

let materias = {
    fisica: ["Perez","Pedro","Pepito","Cofla","Maria"],
    programacion:  ["Martinez","Pedro","Juan","Pepito"],
    logica:  ["Juan Carlos","Pedro","Juan","Pepito","Cofla","Maria"],
    quimica:  ["Gomez","Pedro","Juan","Pepito","Cofla","Maria"]
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`<br>Lo siento ${alumno}, las clases de ${materia} ya estan llenas <br><br>`);
    } else {
        personas.push(alumno);
        if (materia == "fisica") {
            materias = {
                fisica: personas,
                programacion:  materias['programacion'],
                logica:  materias['logica'],
                quimica: materias['quimica']
            }

        }
        else if (materia == "programacion") {
            materias = {
                fisica: materias['fisica'],
                programacion:  personas,
                logica:  materias['logica'],
                quimica: materias['quimica']
            }
        }
        else if (materia == "logica") {
            materias = {
                fisica: materias['fisica'],
                programacion:  materias['programacion'],
                logica:  personas,
                quimica: materias['quimica']
            }
        }
        else  if (materia == "quimica") {

            materias = {
                fisica: materias['fisica'],
                programacion:  materias['programacion'],
                logica:  materias['quimica'],
                quimica: personas
            }
        }
        document.write(`<br><br> Felicidades ${alumno}! te has inscripto a ${materia} correctamente.`);
    }
}

document.write(materias['fisica'] + "<br>");

inscribir("pedrito","fisica");
inscribir("juan","fisica");
inscribir("carlos","fisica");
inscribir("nacho","fisica");
inscribir("fede","fisica");
inscribir("gian","fisica");
inscribir("julian","fisica");
inscribir("agustin","fisica");
inscribir("leo","fisica");
inscribir("lea","fisica");
inscribir("muriel","fisica");
inscribir("silvia","fisica");
inscribir("joaquin","fisica");
inscribir("martin","fisica");
inscribir("tincho","fisica");
inscribir("osvaldo","fisica");
inscribir("ada","fisica");
inscribir("fiorella","fisica");
inscribir("esteban","fisica");
inscribir("esther","fisica");
inscribir("juanca","fisica");
inscribir("rodrigo","fisica");
inscribir("pablito","fisica");
inscribir("marcelo","fisica");


document.write("<br>" + materias['fisica']);
*/

/*HISTORIA DE COFLA 5

// let materias = {
//     fisica: [90,6,4,"fisica"],
//     matematica: [84,8,8,"matematica"],
//     logica: [90,6,4,"logica"],
//     quimica: [90,6,4,"quimica"],
//     calculo: [90,6,4,"calculo"],
//     programacion: [90,6,4,"programacion"],
//     biologia: [76,6,4,"biologia"],
//     bbdd: [55,6,4,"bbdd"],
//     algebra: [20,6,4,"algebra"]
// }

// const aprobo = ()=>{
//     for (materia in materias){

//         let asistencias = materias[materia][0];
//         let promedio = materias[materia][1];
//         let trabajos = materias[materia][2]

//         console.log(materias[materia][3]);

//         if (asistencias >= 90){  
//             console.log("%c   Asistencias en orden","color:green");
//         } else {
//             console.log("%c   Falta de Asistencias","color:red");
//         }

//         if (promedio >= 7) {
//             console.log("%c   Promedio en orden","color:green");
//         }  else {
//             console.log("%c   Promedio desaprobado","color:red");
//         }

//         if (trabajos >= 3) {
//             console.log("%c   Trabajos Practicos en orden","color:green");
//         } else {
//             console.log("%c   Faltan trabajos practicos","color:red");
//         }
//     }

// }

// aprobo()

let tp = "100 minutos trabajos practicos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";






console.log("TAREAS");

for (var i = 0; i < 14; i++) { 
    if (i == 0){
        console.group("semana 1");
    }

console.groupCollapsed("dia " + (i+1));
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
if (i == 7) {
    
        console.groupEnd();
        console.groupCollapsed("semana 2");
    
}
}

console.groupEnd();
console.groupEnd();
*/

/*HISTORIA DE COFLA 6

const contenedor = document.querySelector(".flex-container");


function crearLlave(nombre,modelo,precio){
    img = "<img class='llave-img' src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}


let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}`, `modelo ${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click", ()=>{ 
        document.querySelector(".key-data").value = modeloRandom;
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);
6*/


/*HISTORIA COFLA 7

// let alto = window.screen.availHeight;
// let ancho = window.screen.availWidth;

// comprar = confirm(`El alto es: ${alto} y el ancho es: ${ancho} `);

// if (comprar) {
//     alert("Compra realizada exitosamente");
// } else {
//     alert("Compra cancelada");
// }

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br>`;
html += `Hostname: <b>${hostname}</b><br>`;
html += `Pathname: <b>${pathname}</b><br>`;
html += `URL Completa: <b>${href}</b><br>`;

document.write(html);
*/

/*HISTORIA DE COFLA 9

// const nombre = document.getElementById("nombre");
// const email = document.getElementById("email");
// const materia = document.getElementById("materia");
// const boton = document.getElementById("btn-enviar");
// const resultado = document.querySelector(".resultado");

// boton.addEventListener("click", (e)=>{
//     e.preventDefault();
//     let error = validarCampos();
//     if (error[0]) {
//         resultado.innerHTML = error[1];
//         resultado.classList.add("red");
//     } else {
//         resultado.innerHTML = "Solicitud enviada correctamente";
//         resultado.classList.add("green");
//         resultado.classList.remove("red");
//     }

// })

// const validarCampos = ()=>{
//     let error = [];
//     if (nombre.value.length < 5 || nombre.value.length > 40) {
//         error[0] = true;
//         error[1] = "El nombre es invalido";
//         return error;
//     } else if (email.value.length < 5 || 
//                email.value.length > 40 ||
//                email.value.indexOf("@") == -1 ||
//                email.value.indexOf(".") == -1) {
//         error[0] = true;
//         error[1] = "El mail es invalido";
//         return error;        
//     } else if (materia.value.length < 4 || materia.value.length > 40){
//         error[0] = true;
//         error[1] = "La materia no existe";
//     }

//     error[0] = false;
//     return error;
// } 

let alumnos = [{
    nombre: "Gianluca Dimitrioff",
    email: "gdimitrioff@gmail.com",
    materia: "Fisica 3"
},{
    nombre: "Federico Alvarez",
    email: "fedealvarez@gmail.com",
    materia: "gimnasia 1"
},{
    nombre: "Juan Pepito",
    email: "pepito@gmail.com",
    materia: "algebra 2"
},{
    nombre: "Matias Ross",
    email: "matiross@gmail.com",
    materia: "logica 4"
},{
    nombre: "Lalala Muqueño",
    email: "muqueño@gmail.com",
    materia: "Matematica 1"
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container")

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = ` 
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
          <option value="Semana 1">Semana 1</option>
          <option value="Semana 2">Semana 2</option>
        </select>
    </div> `;
    contenedor.innerHTML+= htmlCode;
}

boton.addEventListener("click",()=>{
    let confirmar = confirm("¿realmente quieres confirmar?");
    if (confirmar) { 
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
    


})
*/

/*HISTORIA COFLA 10

const senButton = document.getElementById('snd-nota');

senButton.addEventListener("click",()=>{
    let resultado,mensaje;
    try {
       prevRes = parseInt(document.getElementById('nota').value);
       if (isNaN(prevRes)) {
           throw "Gracioso";
       }
       
     
     mensaje = definirMensaje(prevRes);
     resultado = verificarAprobacion(8,4,prevRes);
    } catch(e){
        resultado = "¿SOS GRACIOSO?"
        mensaje = "He descubierto que eres un oloroso Pett"
    }
    abrirModal(resultado,mensaje);
})

const definirMensaje = (pr)=>{
    let resultado;
    switch (pr){
        case 1: resultado = "No podes ser tan HDP";
        break; 
        case 2: resultado = "Sos malisimo para mi materia";
        break; 
        case 3: resultado = "No sabes casi anda";
        break; 
        case 4: resultado = "Muy mal";
        break; 
        case 5: resultado = "mal";
        break; 
        case 6: resultado = "Regular";
        break; 
        case 7: resultado = "Bien, pero puede mejorar";
        break; 
        case 8: resultado = "Muy bien";
        break; 
        case 9: resultado = "Excelente";
        break; 
        case 10: resultado = "Sobresaliente";
        break; 
        default: resultado = null;
    }
    return resultado
}
 
const verificarAprobacion = (nota1,nota2,prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio >= 7) { 
        return "<span class='green'>APROBADO</span>";
    }
    return "<span class='red'>DESAPROBADO</span>";
}

const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}
*/
//HAY UN PROBLEMA EN LA EDICION DEL VIDEO PRIMERO MUESTRA QUE AGREGAR [] A LOS RETURN DE LA CONST VERAPRO Y LUEGO LOS QUITA
//NO ENCONTRE SOLUCION, asi que lo deje como estaba de un principio.

/*HISTORIA COFLA 11

const materiasHTML = document.querySelector(".materias")

const materias = [
    {
        nombre: "Fisica 4",
        nota: "7"
    },{
        nombre: "calculo 3",
        nota: "8"
    },{
        nombre: "Bases de datos 3",
        nota: "9"
    },{
        nombre: "Matematicas discretas 2",
        nota: "7"
    },{
        nombre: "Programacion 4",
        nota: "8"
    }
];


const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if (materia == undefined) reject("la materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*400);
    })

}

const devolverMaterias = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div> `;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();
*/