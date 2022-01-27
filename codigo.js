/*recipiente = "papel"

alert(recipiente)¨*/

/*
string = "cadena de texto"

number = 19

booleano = true
*/

/*
let numero = 29;

alert(numero);
*/

/*let nombre = prompt("instrucciones para mundo NACHI");

alert(nombre);*/

/*let nombre = prompt("Dime tu nombre");

alert("Hola " + nombre);*/

/*OPERADOR DE ADICCION
let numero = 10;

numero += 5;

document.write(numero) */

/*OPERADOR DE SUSTRACCION

let numero = 10;

numero -= 5;

document.write(numero)*/

/*OPERADOR DE RESTO
let numero = 10;

numero %= 5;

document.write(numero)*/

/*EXPONENCIAL
let numero = 10;

numero **= 5;

document.write(numero)*/

/*OPERADOR DE ASIGNACION
numero1 = 10;

numero2 = 5;

resultado = numero1 + numero2;

alert(resultado);*/

/*CONCATENACION

saludo = "¡hola juan carlos!";
pregunta = " ¿como estas?";

frase = saludo + pregunta;

document.write(frase);


numero1 = 53;
numero2 = 8;

frase = "" + numero1 + numero2;

document.write(frase);

numero1 = "53";
numero2 = "8";

frase = numero1.concat(numero2);

document.write(frase);


nombre = "Gianluca"

frase = `soy ${nombre} y estoy caminando`;
document.write(frase);
*/

/*OPERADORES DE COMPARACION

let numero = 23;
let numero2 = 13;

document.write(numero == numero2);

let texto = 23;
let texto2 = 13;

document.write(texto != texto2);
*/

/*OPERADORES LOGICOS

let valor = true;
let valor2 = true;

let resultado = valor && valor2;
let resultado2 = valor || valor2;
let resultado3 = !valor;

document.write(resultado3)
*/

/*CALCULOS CON OP LOGICOS
num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3)
op = (true || true) && (false && true);
op = true && false;
document.write(op)
*/

/*CONDICIONALES

//if (10 < 15) {
//    alert("hola")
//}

nombre = "juan carlos"

if (nombre == "Juan"){
    alert("tu nombre es malardo");
}

else if (nombre == "Gianluca"){
    alert("tu nombre es buenardo");
}

else {
    alert("no sabes tu nombre TREMENDO");*/


/* ARRAYS    
let frutas = ["banana", "manzana", "pera"];

document.write(frutas[2])*/

/*ARRAY ASOCIATIVO

let pc1 ={
    nombre: "Dalto PC",
    procesador: "Intel Core 17",
    ram: "16GB",
    espacio: "1TB",};



let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
         el procesador es: <b>${procesador}</b> <br>
         la memoria ram es: <b>${ram}</b> <br>
         el espacio en disco es de <b>${espacio}</b>`;
         
document.write(frase);*/

/*BUCLES*/

//let numero = 0;

//while (numero < 6){
    
//    numero++;

//    document.write(numero + "<br>")
//}

//se ejecuta permanentemente hasta que no se cumpla
//la regla que declaramos

//let numero = 0;

//do{

//    document.write(numero + "<br>");

//    numero++;
//}

//while (numero <= 6)

//primero se ejecuta la regla y ejecuta la condicion

/*let numero = 0;



while(numero < 1000) {
        numero++;
        document.write(numero);
        if (numero == 10){
            break;
        }
  
}

//if breack permite que se genere el bucle hasta que no se
//cumpla mas la condicion que declaramos dentro de if*/

/*for (let i = 0; i < 20; i++) {
    document.write(i + "<br>")
}*/

/*let animales = ["gato", "perro", "tiranosaurio rex"];


for (animal in animales) {
        document.write(animal + "<br>");
}

document.write("<br>");

for (animal of animales) {
    document.write(animal + "<br>");
}

//in nos devuelve la posicion, mientras que of nos
//devuelve el valor declarado*/

/*array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];

forJuanCarlos:
for (let array in array2) {
    if (array == 2) {
        for (let array of array1){
            break forJuanCarlos;
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}

//para terminar exactamente donde quiero la ejecucion
//deberia aplicar un for(nombre que le quiera dar) 
//que englobe a todo el bloque y luego ese utilizarlo
//en el bracket */

/*FUNCIONES*/ 

/*function saludar() {
    respuesta = prompt("hola Gianluca, como fue tu dia");
if (respuesta == "bien"){
    alert("me alegro")
}
else {
    alert("una pena");
}

}

saludar()
saludar()*/

//Esto nos permite acortar la escritura

/*function saludar() {
    alert("hola");
    return "la funcion se ejecuto correctamente"
}

let saludo = saludar();
document.write(saludo)

//return se aplica para devolver una respuesta y ahi finaliza la funcion.*/

/*function suma(num1, num2){
    let res = num1 + num2;
    document.write(res + "<br>");
}

suma(12,32)

suma(22, 55)

//Esto nos permite brindar los parametros o valores
//de forma mas practica y asi evitar volver a 
//reescribir el mismo codigo*/

/*function saludar(nombre){
    let frase = `¡Hola ${nombre}! ¿Como estas?`;
    document.write(frase + "<br>")
}

saludar("Pedro")
saludar("Juan")
saludar("Carlos")
saludar("Gian")
saludar("Tiago")*/



// function saludar(nombre){
//     let frase = `¡Hola ${nombre}! ¿Como estas?`;
//     document.write(frase + "<br>")
// }

// const saludar = function(nombre){
//     let frase = `¡Hola ${nombre}! ¿Como estas?`;
//     document.write(frase);
// }

// saludar("pedro")

/*FUNCIONES FLECHA*/

// const saludar = (nombre)=>{
//       let frase = `¡Hola ${nombre}! ¿Como estas?`;
//       document.write(frase);
// }
// saludar("pedro")

//Si solamente estamos usando un parametro no es 
//necesario colocarle parentesis. Inclusive no es
//necesario colocar llaves

// const saludar = (nombre)=>{
//     document.write("hola como estas?" + nombre)
// }
// saludar("pedro")

/*PROGRAMACION ORIENTADA A OBJETOS
// class animal{
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color} `;
//     }
//      verInformacion(){

//         document.write(this.informacion + "<br>");
//     }

// }
    


// const perro = new animal("perro", 5, "rojo");
// const gato = new animal("gato", 10, "negro");
// const nachi = new animal("nachi", 40, "blanco");

// // document.write(perro.informacion + "<br>")
// // document.write(gato.informacion + "<br>")
// // document.write(nachi.informacion + "<br>")

// perro.verInformacion();
// gato.verInformacion();
// nachi.verInformacion();



// this es el objeto que estoy creando, dentro del constructor
//estan los parametros que defino. Cuando lo declaro en this estoy
//dandole las caracteristicas no necesariamente debe terner el
//mismo nombre que los parametros. Luego del = si colocamos el 
//parametro que definamos para el objeto.
//Con new estoy instanciando un bojeto en este caso animal. 
//

// class Animal{
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color} `;
//     }
//      verInformacion(){

//         document.write(this.informacion + "<br>");
//     }

    
// }
    
// class Perro extends Animal {
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color);
//         this.raza = raza;
//         this.informacion = `Soy ${this.especie}, tengo ${this.edad} años, soy de color ${this.color} y mi raza es ${this.raza} `;
//     }
//     ladrar(){
//         alert("WAW");
//     }
// }






// const perro = new Perro("perro", 5, "rojo", "doberman");
// const gato = new Animal("gato", 10, "negro");
// const nachi = new Animal("nachi", 40, "blanco");


// perro.verInformacion();
// gato.verInformacion();
// nachi.verInformacion();

//Con extends hacemos que dentro de esta clase incluya todo
//lo que tiene la otra clase. No puedo tener un objeto con
//el nombre de la clase*/

/*METODO DE CADENAS

// let cadena = "cadena de prueba";
// let cadena2 = "cadena"
// resultado = cadena.concat(cadena2);

// document.write(resultado);

// let cadena = "cadena de prueba";
// let cadena2 = "cadena"
// resultado = cadena.startsWith(cadena2);

// document.write(resultado);

// let cadena = "Hola Juan Carlos como estas";
// let cadena2 = ""
// resultado = cadena.includes("como");

// document.write(resultado);

// let cadena = "Hola Juan Carlos como estas";
// let cadena2 = "como";

// resultado = cadena.indexOf(cadena2);

// document.write(resultado);

// let cadena = "Hola Juan Carlos como como como como como como";
// let cadena2 = "como";

// resultado = cadena.lastIndexOf(cadena2);

// document.write(cadena[42] + cadena[43] + cadena[44] + cadena[45]);

// let cadena = "abc";
// let cadena2 = "";

// resultado = cadena.padStart(11,"1234");

// document.write(resultado);

// let cadena = "hola como estas";

// resultado = cadena.split("como");

// document.write(resultado);

// let cadena = "ABCDEFG";

// resultado = cadena.substring(0,2);

// document.write(resultado);

// let cadena = "HOLA COMO ESTAS";

// resultado = cadena.toLowerCase();

// document.write(resultado);

// let cadena = "hola como estas";

// resultado = cadena.toUpperCase();

// document.write(resultado);

// let cadena = 50;

// let resultado = cadena.toString();

// document.write(2 + "50");*/




/*METODO DE ARRAYS TRANSFORMADORES

// let nombres = ["Pedro","Maria","Jorge"];

// let resultado = nombres.pop();

// document.write(resultado);

// let nombres = ["Pedro","Maria","Jorge"];

// document.write(nombres + "<br>");

// let resultado = nombres.push("juancito","robert");

// document.write(resultado);

// document.write(nombres)

// let nombres = ["Pedro","Maria","Jorge"];

// document.write(nombres + "<br>");

// let resultado = nombres.reverse();

// document.write(resultado);

// let numeros = [1,2,3,4,5];

// document.write(numeros + "<br>");

// numeros.unshift(1,3);

// document.write(numeros);

// let numeros = [1,5,0,8,4];

// document.write(numeros + "<br>");

// numeros.sort();

// document.write(numeros);

// let numeros = ["abecedario","manzana","pedro","dedo","bobo"];

// document.write(numeros + "<br>");

// numeros.splice(1,3,"roberto");

// document.write(numeros);*/



/*METODOS DE ARRAYS ACCESORES
// let numeros = ["abecedario","manzana","pedro","dedo","bobo"];

// document.write(numeros + "<br>");

// let resultado = numeros.join("<br>elemento: ");

// document.write("elemento: " + resultado);

// let numeros = ["abecedario","manzana","pedro","dedo","bobo"];

// document.write(numeros + "<br>");

// let resultado = numeros.slice(0,-1);

// document.write(resultado);*/

/*METODOS DE ARRAYS DE REPETICIÒN

let numeros = ["abecedario","manzana","pedro","dedo","bobo"];

resultado = numeros.filter(numero => numero.length > 6);

document.write(resultado);*/




/*OBJETO MATH

// numero = Math.max(4,1,6,12,63,243,90);

// document.write(numero);

// numero = Math.random()*100;
// numero = numero.toString();
// num = numero[0] + numero[1];
// if (numero[1] == "."){
//     num = numero[0]
// }

// document.write(num);

// let numero = Math.random()*100;
// let numero = Math.round(numero);


// document.write(numero);
*/


/*DOM

// const rangoEtario = document.querySelector(".rangoEtario");

// rangoEtario.setAttribute("type","color");

// const titulo = document.querySelector(".titulo");

// titulo.setAttribute("contentEditable","true");

// const input = document.querySelector(".input-normal");

// input.value;


// const titulo = document.querySelector(".titulo");

// let resultado = titulo.textContent;

// document.write(resultado)


// const contenedor = document.querySelector(".contenedor");

// const fragmento = document.createDocumentFragment();

// for (i = 0; i < 20; i++) { 
// const item = document.createElement("LI");
// item.innerHTML = "este es un elemento de la lista";
// //Esto NO es un objeto texto
// fragmento.appendChild(item)
// }

// // const textoDelItem =  document.createTextNode("Este es un item de la lista");

// // item.appendChild(textoDelItem);
// //Esto es un objeto texto

// contenedor.appendChild(fragmento);


// console.log(fragmento);

// //Asi evitamos el consumo excesivo de recursos


// const contenedor = document.querySelector(".contenedor");

// const primerHijo = contenedor.firstElementChild;
// //No admite propiedades de arrays.

// console.log(primerHijo)
*/

/*WINDOW

// let youtubeURL = "https://youtube.com";

// let ventana = window.open(youtubeURL);

// ventana.close();

// const screen = window.screen;

// console.log(screen);
// document.write(screen.availWidth);

// const scrollY = window.scrollY;
// const scrollX = window.scrollX;

// alert("X:" + scrollX + " Y:" + scrollY);
*/

/*EVENTOS*/

// const button = document.querySelector(".button");

// button.onclick = ()=>{
//     alert("hola");
// }
//no es recomendable usarlo asi

// const button = document.querySelector(".button");

// button.addEventListener("click",()=>{
//     alert("pedro");
// })
//Manera correcta

//Para lograr hacer que solo se ejecute una vez deberiamos hacer lo siguiente

// const button = document.querySelector(".button");

// button.addEventListener("click",saludar);

// function saludar(){
//     alert("hola");
//     button.removeEventListener("click",saludar);
// }

// const button = document.querySelector(".button");

// button.addEventListener("click",(e)=>
//     console.log(e.target)
// );

// const temporizador = setTimeout(()=>{
//     document.write("hola");
// }, 2000)



/*SENTENCIA SWITCH*/

// let expr = "banana";

// switch(expr){
//     case "banana": console.log("esto es una banana"); 
//     break;
//     case "pera": console.log("esto es una pera");
//     break;
//     case "manzana": console.log("esto es una manzana");
//     break;
// }

/*Try... Catch*/

// try {
//     asdasgdfhgh

// }

// catch(error){
//     console.log(error);

// }


/*CALLBACKS*/

// function prueba(callback){
//     callback("pedro");
// } 


// function decirNombre(nombre){
//     console.log(nombre);
// }

// prueba(decirNombre)

// function prueba(callback){
//     callback("roberto");
// }

// prueba(nombre => console.log(nombre))


/*PROMESAS
class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const data = [
    ["Gianluca Dimitrioff","@gian_procida"],
    ["Matias Ramirez","@elmateee"],
    ["Juan Carlos","@holajuancarlos"],
    ["Juan Pepito","@pepetooo"],

];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0],data[i][1]);
}

const obtenerPersona = (id,)=>{
  return new Promise ((resolve,reject)=>{
      if (personas[id] == undefined) reject("No se ha encontrado la persona");
      else {resolve(personas[id])}
  })
}

const obtenerInstagram = (id,)=>{
  return new Promise ((resolve,reject)=>{
    if (personas[id].instagram == undefined) reject("No se ha encontrado el instagram");
    else {resolve(personas[id].instagram)}
  })
}

obtenerPersona(1).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInstagram(1);
}).then((instagram)=>{
        console.log(instagram)
    }).catch((e)=>{
        console.log(e);
    })










// class Persona {
//     constructor(nombre,instagram){
//         this.nombre = nombre;
//         this.instagram = instagram;
//     }
// };

// const data = [
//     ["Gianluca Dimitrioff","@gian_procida"],
//     ["Matias Ramirez","@elmateee"],
//     ["Juan Carlos","@holajuancarlos"],
//     ["Juan Pepito","@pepetooo"],

// ];

// const personas = [];

// for (let i = 0; i < data.length; i++) {
//     personas[i] = new Persona(data[i][0],data[i][1]);
// }

// const obtenerPersona = (id,cb)=>{
//     if (personas[id] == undefined) {
//         cb("No se ha encontrado la persona");
//     } else {
//         cb(null,personas[id],id);
//     }
// }

// const obtenerInstagram = (id,cb)=>{
//     if (personas[id].instagram == undefined) {
//         cb("No se ha encontrado el instagram");
//     } else {
//         cb(null,personas[id].instagram);
//     }
// }

// obtenerPersona(0,(err,persona,id)=>{
//     if (err) console.log(err);    
//     else {
//         console.log(persona.nombre);
//         obtenerInstagram(id,(err,instagram)=>{
//             if (err) console.log(err);
//             else console.log(instagram);
//         })
//     }
// })

// let nombre = "pedro";

// const promesa = new Promise((resolve,reject)=>{
//     if (nombre !== "pedro") reject("Lo siento, el nombre no es pedro");
//     else resolve(nombre);
// })

// promesa.then((resultado)=>{
//     console.log(resultado)
// }).catch((e)=>{
//     console.log(e)
// })

*/

/*PROMESAS ASINCRONAS
const objeto = { 
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
} ;


const obtenerInformacion = (text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(text)},Math.random()*200)
    })
}

const mostrarData = async ()=>{
    data1 = await obtenerInformacion("1: pito");
    data2 = await obtenerInformacion("2: Juan");
    data3 = await obtenerInformacion("3: Carlos");
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData()*/

// /*JSON*/

// // objeto = {
// //     "variable1": "PEDRO",
// //     "variable2": "JORGE"
// // };

// // console.log(objeto);

// /*DESERIALIZACION JSON*/
// objeto = {"variable1": "PEDRO","variable2": "JORGE"};
// console.log(objeto);

// /*SERIALIZACION JSON*/
// const objeto = '{"variable1": "PEDRO","variable2": "JORGE"}';
// console.log(objeto);

// /*DE DESERIALIZADO A SERIALIZADO CON STRINGIFY*/
// const deserializado = {"variable1": "PEDRO","variable2": "JORGE"};

// const serializado = JSON.stringify(deserializado);
// console.log(typeof serializado);

// /*DE DESERIALIZADO A SERIALIZADO CON PARSE*/
// const serializado = '{"variable1": "PEDRO","variable2": "JORGE"}';

// const deserializado = JSON.parse(serializado);
// console.log(typeof deserializado);


/*AJAX
// const peticion = new XMLHttpRequest();

// peticion.addEventListener("readystatechange",()=>{
//     if (peticion.readyState == 4) {
//         console.log(peticion.response)
//     }
// })

// peticion.open("GET","informacion.txt");

// peticion.send()
// console.log(peticion)

let peticion;

if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");

peticion.addEventListener("load",()=>{
    let respuesta;
    if (peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;
    else respuesta = "Lo siento, no se ha encontrado el recurso";
    console.log(JSON.parse(respuesta))

})

peticion.open("POST","https://reqres.in/api/users");

peticion.setRequestHeader("Content-type","application/json;charset=UTF8");

peticion.send(JSON.stringify({
    "nombre": "Gianluca",
    "trabajo": "Desempleado"
}));

*/

/*FETCH*/

// fetch("https://reqres.in/api/unknown/2")
//         .then(res=>res.text())
//         .then(res=>console.log(res))

/* FETCH CONVERTIDO A POST*/
// fetch("https://reqres.in/api/users",{
//     method : "POST",
//     body : JSON.stringify({
//         "nombre": "Gianluca",
//         "apellido" : "Dimitrioff"

//     }),
//     headers: {"Content-type" : "application/json"}
// })
//     .then(res=>res.json())
//     .then(res=>console.log(res))

/*FETCH BLOB*/

// const imagen = document.querySelector(".imagen");

// fetch("data:image/jpeg;base64,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")
//     .then(res=>res.blob())
//     .then(img=>imagen.src = URL.createObjectURL(img))

//BLOB sirve para imagenes y utilizamos URL que es una API nativa, objeto nativo, 
//crea una URL para que todo el objeto se pueda visualizar. Con BLOB creamos una URL 
//temporal que cambia cada vez que actualizo el sitio.

/*AXIOS*/

// axios.post("https://reqres.in/api/users",{
//     "nombre" : "Gianluca",
//     "apellido" : "Dimitrioff"

// })
//     .then(res=>console.log(res))


/*FETCH Y AXIOS CON AWAIT Y ASYNC*/

const getName = async ()=>{

    let peticion = await fetch("informacion.txt");
    let resultado = await peticion.json();
   
    console.log(resultado);
}

getName()