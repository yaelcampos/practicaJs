

/* let magico =["mago","galera","duende","varita"];

for(magia in magico){
    document.write(magia + "<br>");

}

document.write("<br>");

for(magia of magico){
    document.write(magia + "<br>");

} */

document.write("<br>");

array1=["maria","josefa","roberta"];
array2=["pedro","marcelo",array1,"josefina"];

 //sentencia label 
forRancio:
for (let array in array2){
    if (array == 2){

        for(let array of array1){
            break forRancio;
             //corta el bucle 
            document.write(array + "<br>");
        }   

    } else {
        document.write(array2[array] + "<br>");
    }
}

document.write("<br>")
/* 
function saludar (){
respuesta = prompt("Hola Yael! Como estas hoy?");

if (respuesta == bien) {
    alert("Me alegro")
}else {
    alert("Que pena guachi")
}

}

saludar ()   */

/*
function sumar(num1,num2){
    let res = num1 + num2;
    document.write(res);
    document.write("<br>")

}

sumar(56,9)

document.write("<br>")
// funciones flechas

const saludar = (nombre)=>{
    document.write("Hola! Como estas?" + nombre)
}

saludar("Pedrito")

document.write("<br>")

let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if (edad > 18){
        if(time >= 2 && time < 7 && free == false){
            alert("podes pasar gratis podes pasar porque sos la primera persona despues de las 2AM");
            free = true;
        } else {
            alert( `son las ${time}:00Hs y podes psasar, pero tenes que pagar la entrada`);
        }
    }else{
        alert("mira papu, sos menor de edad por no vas a pasar, MAQUINOLA")
    }
}

validarCliente(23);
validarCliente(17);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(2);


 document.write("<br>")

let cantidad = prompt("¿cuantos almunos son?");
let alumnosTotales = [];

for(i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
//decimos que entra a un elemento e en la primer posicion de otro array
        alumnosTotales[p][1]++;
    }
}

//toma lista 30 dias seguidos
for(i= 0; i < 30; i++){
    //nos pasa la posicion
    for(alumno in alumnosTotales){
        //               posi p/acceder nombre   posicion
        tomarAsistencia(alumnosTotales[alumno[0],alumno]);
    }
}

//n° total de P y A
for(alumno in alumnosTotales){
    //                obtenemos el nombre en la pos 0
    let resultado =`${alumnosTotales[alumno][0]}:<br>                                    
    ________Presentes: ${alumnosTotales[alumno[1]]}<br> 
    ________Ausencias: ${30 - parseInt(alumnosTotales[alumno[1]])}
    `;
    if (30 - alumnosTotales[alumno[1]] > 18){
        resultado+= "REPROBADO POR INASISTENCIAS <br>"
    } else {
        resultado+="<br><br>"
    }document.write(resultado)
} */

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


alert("¿Que operacion desea realizar?");
let operacion = prompt("1: suma, 2: restar, 3: dividir,4: multiplicar");

if( operacion == 1){
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);

} else if  (operacion == 2){
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if  (operacion == 3){
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    resultado = dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if  (operacion == 4){
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}

// funcion hecho para argentina programa.
let gus = {
    nick: "wiski",
    promedioPeliculaMensuales:5,
    plataforma:"Netflix"
};

let ariel ={
    nick: "Ari",
    promedioPeliculaMensuales:10,
    plataforma:"Amason"
}


function resumenInfo(pelicula){
    document.write(`Se estima que  ${pelicula.nick} vera ${pelicula.promedioPeliculaMensuales} en un año utilizando ${pelicula.plataforma} ` + "<br>")
    
}

resumenInfo(gus)
resumenInfo(ariel)

"<br>"


//<-------------------------------------------Programacion orientada a Objetos---------------------------------------->
//clase: fabrica de objetos, que pueda hacer este y tenga estas cosas.
//objeto: son resultados de las clases.
//atributo: caracteriesticas de este objeto.
//metodo: son las cosas que puede hacer nuestro obj.
//constructor: Una funcion obligatoria, nos va a construir las propiedades del objeto. 
//instanciacion:
class Animal{
    constructor(especie,edad,color){
        this.especie = especie
        this.edad = edad
        this.color = color
        this.info = `Soy un ${this.especie} , mi edad es ${this.edad} mi color es ${this.color} `
    }
    //creamos un method HORA 4:21 DE LA CLASE
    //Dentro del objeto es un method, fuera del objeto es una funcion. 
    verInformacion(){
        document.write(this.info + "<br>")
    }

    maullar(){
        if (this.especie == gatito){
            document.write("miauuuu");
        }
        else{
            document.write(`No puedo auyar bebe porque soy un ${this.especie} <br><br>`)
        }
    }
} 
//HERENCIA:La clase perro, hereda la clase Animal y todo lo que esta dentro.
//Y dentro de la nueva clase Gato agregamos NOMBRE.
//No puedo tener un OBJETO con el mismo nombre que la CLASE

     /*    class Gato extends Animal {
            constructor(especie,edad,color,nombre){
                super(especie,edad,color);
                this.nombre = nombre;

            }
        //de esta manera modificamos el valor    
            set setEdad(NewEdad){
                this.edad= "NewEdad"
            }
            //devuelve ese valor ej: linea 272
            get getEdad(){
                return this.getEdad;
            }
        
        }
    

//va a ser iguaL a un obejeto de ANIMAL
const gatito = new Gato("gatito", 3, "Blanco y gris como suertudo", "suertudo" + "<br>");
const pajarito = new Animal ("pajaro", 1, " verdecito");

gatito.verInformacion(); 
pajarito.verInformacion();
"<br>"

gatito.maullar();
pajarito.maullar();

gatito.setEdad= 4
"<br>"
"<br>"
document.write(gatito.getEdad)

*/
"<br>" 

//Ejercio de cofla
//Creamos un sistema para mostrarle a Cofla las particularidades de cada celular. 

class celular {
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara =  rdc;
        this.memoriaRam = ram;
        this.encendido = false;
        
    }
        
    presionarBotonEncendido(){
        if(this.encendido == false){
            document.write("CELULAR PRENDIDO <br><br>"  );
            this.encendido = true;
        }
        else{
            document.write("YA ESTA APAGADO PERRITO <br><br>")
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true){
            document.write("REINICIANDO TU CELULAR <br><br>");
        }
        else{
            document.write("EL CELULAR ESTA APAGADO <br><br>")
        }
    }

    tomarFotos(){
        document.write(`Foto tomada en una resolucion de ${this.resolucionDeCamara} <br><br>`)
    }

    grabar(){
        document.write(`Se grabaran videos en una resolucion de ${this.resolucionDeCamara}<br><br>`)
    }

    mobileInfo(){
        return `
            color: <b> ${this.color} </b></br>
            peso: <b> ${this.peso} </b></br>
            resolucionDePantalla: <b> ${this.resolucionDePantalla} </b></br>
            resolucionDeCamara: <b> ${this.resolucionDeCamara}</b></br>
            memoriaRam:<b> ${this.memoriaRam} </b></br>
        `;

    }
}

//<------------------------------------herencias----------------------------------------->

class CelularAltaGama extends celular {
    constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram);
        this.resulucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        document.write("Estas grabando en camara lenta")
    }
    reconocimientoFacil(){
        document.write("Vamos a realizar un reconocimiento de tu carita ")
    }
        infoAltaGama(){
            return this.mobileInfo() + `Resolucion de camara extra: ${this.resulucionDeCamaraExtra} <br>`;
        }
}

celular1 = new CelularAltaGama("Negro","130grs","5 '","4k","6Gb", "full hd")
celular2 = new CelularAltaGama("Blue","125grs","5.5 '","5K","4Gb","re full hd")



/* let celular1 = new celular("Rojo","120grs","5'","hd","1gb");
let celular2 = new celular("Violeta","125grs","5.4'","full hd","2gb");
let celular3 = new celular("Celeste","100grs","5.5'","full hd","3gb"); */
"<br>"
"<br>"

document.write(`
${celular1.infoAltaGama()} <br> <br>
${celular2.infoAltaGama()} <br>
`
)

"<br>"
"<br>"

class app{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            document.write("app instalada correctamente <br><br>")
        }
    }
    desinstalar(){
        if(this.instalada == true && this.iniciada == true){
            this.instalada = false;
            document.write("app desintalada correctamente <br>")
        }
    }
    abrir(){
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            document.write("app iniciada <br>")
        }
    }
    cerrar(){
        if(this.iniciada == true   && this.instalada == true) {
            this.iniciada = false;
            document.write("app cerrada <br>")
        }
    }
    
}

app = new app ("16.000"," 5 estrellas hermosas", "900mb")

app.instalar();
app.desinstalar();

"<br>"
"<br>"

//<---------------------------------------CADENAS---------------------------------------->
let cadena = "hola a todos soy una cadena ";
let cadena2 = "una bonita cadena<br>";
"<br>"
resultado = cadena.concat(cadena2);
document.write(resultado)

//devuelve true si ambas cadenas tienen los mismos strings
let cadena_prueba = "buenos dias";
let cadena_prueba1 = "buenos dias";

resultado = cadena_prueba.startsWith(cadena_prueba1);
document.write("<br>"+ resultado);

//si una cadena puede encontrarse dentro de otra cadena, devuelve true , sino devuleve false.
let cadena_prueba2 = "cadena de prueba";
let cadena_prueba3 = "no";

resultado = cadena_prueba2.endsWith(cadena_prueba3);
document.write("<br>" + resultado);

//si una cadena puede encontrarse dentro de otra cadena, devuelve true sino devuelve false
let cadena_prueba4 = "segui a dalto en instagram";

resultado = cadena_prueba4.includes("seguime");
document.write("<br>"+ resultado);

//nos devuelve la posicion ,sino existe devuelve -1
let cadena_prueba5 = "mi señor frodo "

resultado = cadena_prueba5.indexOf("frodo");
document.write("<br>"+ resultado);

//devuelve el ultimo indice del primer caracter de la cadena, sino existe devuelve -1
let cadena_prueba6 = "segui al maravilloso dalto en instagram instagram instagram ";

resultado = cadena_prueba6.lastIndexOf("instagram ");
document.write("<br>"+ resultado);

//completa una cadena de string
let cadena6 = "abcd";

resultado = cadena6.padStart(18,"JA");
document.write("<br>"+ resultado);

//divide la cadena como le digamos 
let cadena3 = "bebecito como estas hoy?¡"

resultado = cadena3.split("-");
document.write("<br>"+ resultado);

//limita la cadena de string entre dos posiciones
let cadenita = "ABCDFGGH"

resultado = cadenita.substring(0,4)
document.write("<br>"+resultado)

//quita los espacios en blanco
let espacio = "   pedro   ";

resultado = espacio.trim();
document.write("<br>"+ resultado.length);


//Metodos del Array- Transformadores
//pop : elimina el ultimo elemento del array y lo devuelve
let nombres = ["Sibi", "Jaque", "Pedrito","Ruben","Esteban"];

let resultado1 = nombres.pop();
document.write(resultado1 + "<br>" );
document.write(nombres + "<br>" );

//Agrega elementos al array.
let resultado0 = nombres.push("juancito");
document.write(nombres + "<br>" );
let numeros = [1,2,4,,8,5,3]

//sirve para ordenar los elementos
numeros.sort();
document.write(numeros + "<br>")

//Agrega y elimina
numeros.splice(0,0,"7","10");
document.write(numeros)

//une con lo que le pongamos y crea una nueva cadena de texto
document.write(nombres + "<br>");
let resultado4 = nombres.join(" - ");
document.write(resultado4 + "<br>")
"<br>"
//devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin.
let colores = ["azul","bordo","celeste","amariilo","negro","blanco"]
document.write(colores + "<br>")
let resultado88 = colores.slice(1,4);
document.write(resultado88 + "<br>");

//<-----------------------------------ITERACIONES----------------------------------------->
//           funcion flecha
colores.forEach((color) => {
    document.write(color + "<br>")
});

document.write("-------------- <br>")
//ponemos condicion pra el filtro
//si la cadena color tien m,as de 4 letras la agrega a resultado90
//nos crea un nuevo array RESULTADO90
resultado90 = colores.filter(color => color.length > 4) 
document.write(resultado90 + "<br>")

//<-------------------------------objeto math------------------------------>
//raiz cuadrada
numero = Math.sqrt(25);
document.write(numero + "<br>");

numero1 = Math.cbrt(27);
document.write(numero1 + "<br>"  );

//devuelve el mayor
numero2 = Math.max(3,78,0,1687,454,7,);
document.write(numero2 + "<br>" )

//devuelve un numero pseudo-aleatorio entre 0 y 1 
//buscamos numeros aleatorios en 0 y 100

for (var i = 0; i < 200; i++) {
    
let numero3 = Math.random() *99;
numero3 = Math.floor(numero3 + 1 );

//document.write(numero3 + "<br>");
}

//redondea
let numerazo = Math.fround(9.7588999);
document.write(numerazo  + "<br>");

//redondea al numero mas cercano
let numerillo = Math.round(9.2);
document.write(numerillo + "<br>");

//elimina los decimales

let numerillo1 = Math.trunc(6.980);
document.write(numerillo1);

//<-----------------------------------------CONSOLE--------------------------------->
//FUNCIONES DE REGISTRO
//limpia la consola
/* console.clear()

//escribir un error
console.error("que hiciste hoy")

//crea una tabla
console.table([4,6,8,15])

//es un  mensaje depurativo
console.log("taka taka")

//es un mensaje informativo
console.info("tiki taka")

//FUNCIONES DE CONTEO

console.count();

console.countReset();

//crea un grupo
console.group()
//agregas con console.log

//elimina un grupo
console.groupEnd()

//comienza un contador
console.time()

//muestra el tiempo transcurrido
console.timeLog()

//elimino el contador con 
console.timeEnd()



console.log("%cRANCIO","color:red;background:black;padding:20px") */

let materias = {
    fisica : [90,6,4,"fisica"],
    matematica : [84,8,2,"matematica"],
    logica : [92,8,4,"logica"],
    quimica : [96,8,4,"quimica"],
    calculo : [91,6,3,"calculo"],
    programacion : [79,7,4,"programacion"],
    biologia : [72,9,2,"biologia"],
    bbdd : [98,9,1,"bbdd"],
    algebra : [100,10,4,"algebra"],
}

const aprobo = () =>{
    for (materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        if (asistencias >= 90){
            console.log(materias[materia][3]);
            console.log("%c  Asistencia en orden","color:green")
        } else {

            console.log(materias[materia][3]);
            console.log("%c  Falta de asistencias","color:red")
        }

        if(promedio >= 7){
            console.log("%c  Promedio en orden","color:green")
        } else {
            console.log("%c Promedio desaprobado","color:red")
        }

        if(trabajos >= 3){
            console.log("%c Trabajos practicas en orden","color:green")
        } else {
            console.log("%c A ponerse al dia con los tps", "color:red")
        }
    }
}

aprobo();

let trabajo = "240 minutos para trabajar fuera de la casa";
let estudio = "100 minutos para estudiar";
let tp = "100 minutos de hacer trabajo practicos";
let homework = "30 minutos de hacer labores de la casita";
let descanso = "10 minutos de descanso, Jesus";

console.log("TAREAS")

for (var i = 0; i < 14; i++) {
    if(i == 0){
        console.group("semana 1")
    }
    console.groupCollapsed("dia " + (i+1));
    console.log(trabajo);
    console.log(estudio);
    console.log(tp);
    console.log(trabajo);
    console.log(homework);
    console.groupEnd()
    if(i ==7){
        console.groupEnd();
        console.groupCollapsed("semana 2")
    }
}

console.groupEnd();
console.groupEnd();

//<------------------------DOM----------------------->

//Traemos la informacion que contiene ese ID.
document.getElementById("parrafo")

//selecciona una clase
document.querySelector(".parafo")

//selecciona un id
document.querySelector("#rancio")


//cambia el atributo
const rangoEtario = document.querySelector(".rangoEtario")

//rangoEtario.setAttribute("type","color")

//obtener el valor del atributo
const rango = document.querySelector(".rangoEtario")
//valorDelAtributo = rangoEtario.getAttribute("type")
//document.write(valorDelAtributo)

//remover el valor del atributo
//const range= document.querySelector(".rangoEtario")
//remove = rangoEtario.removeAttribute("type")


//el atributo tirulo pasa a poder editarse
const titulo = document.querySelector("#bienvenida")
titulo.setAttribute("contentEditable","true")
//mueve el atributo hacia la derecha
titulo.setAttribute("dir","rtl")
titulo.removeAttribute("hidden")
titulo.setAttribute("title","jajajjajajajxd")

//<------------------------------Atributos de los input------------------>
const input = document.querySelector(".input-normal")

document.write("<br>")
document.write(input.className)
document.write("<br>")
document.write(input.value) 
//input.type = "color"


//<-------------------------Style del elemento-------------->
titulo.style.color ="red"
titulo.style.padding ="30px"

//<------------------------Modificar Clases---------------->
const subtitulo = document.querySelector(".subtitulo")


subtitulo.classList.item(1)

//busca la clase y si existe la elimina
subtitulo.classList.toggle("grande")

//reemplaza la clase
subtitulo.classList.replace("sarasa","grade")

//<------------------Obtencion y modificacion de elementos------->
//Muestra el contenido del h1 en esta caso
document.write(subtitulo.textContent)