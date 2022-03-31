// Solicitud de Nombre y Apellido del Alumno -----------------------------

nombre_alumno = prompt("Ingrese su Nombre: ");
apellido_alumno = prompt("Ingrese su apellido: ");

var nombre_ape = document.getElementById("nombre_apellido");
nombre_ape.innerHTML = nombre_alumno + " " + apellido_alumno;


// Solicitud e Ingreso de notas ramo 1 (HTML) ----------------------------

var r1nota1 = document.getElementById("ramo1_nota1");
var r1nota2 = document.getElementById("ramo1_nota2");
var r1nota3 = document.getElementById("ramo1_nota3");
var r1prome = document.getElementById("ramo1_promedio");

html1 = prompt("Ingrese la Nota 1 de HTML: ");
html2 = prompt("Ingrese la Nota 2 de HTML: ");
html3 = prompt("Ingrese la Nota 3 de HTML: ");
htmlprom = ((Number(html1) + Number(html2) + Number(html3)) / 3).toFixed(2);

r1nota1.innerHTML = html1;
r1nota2.innerHTML = html2;
r1nota3.innerHTML = html3;
r1prome.innerHTML = htmlprom;


// Solicitud e Ingreso de notas ramo 2 (CSS) ------------------------------

var r2nota1 = document.getElementById("ramo2_nota1");
var r2nota2 = document.getElementById("ramo2_nota2");
var r2nota3 = document.getElementById("ramo2_nota3");
var r2prome = document.getElementById("ramo2_promedio");

css1 = prompt("Ingrese la Nota 1 de css: ");
css2 = prompt("Ingrese la Nota 2 de css: ");
css3 = prompt("Ingrese la Nota 3 de css: ");
cssprom = ((Number(css1) + Number(css2) + Number(css3)) / 3).toFixed(2);

r2nota1.innerHTML = css1;
r2nota2.innerHTML = css2;
r2nota3.innerHTML = css3;
r2prome.innerHTML = cssprom;


// Solicitud e Ingreso de notas ramo 3 (JavaScript) ------------------------

var r3nota1 = document.getElementById("ramo3_nota1");
var r3nota2 = document.getElementById("ramo3_nota2");
var r3nota3 = document.getElementById("ramo3_nota3");
var r3prome = document.getElementById("ramo3_promedio");

jscript1 = prompt("Ingrese la Nota 1 de JavaScript: ");
jscript2 = prompt("Ingrese la Nota 2 de JavaScript: ");
jscript3 = prompt("Ingrese la Nota 3 de JavaScript: ");
jscriptprom = ((Number(jscript1) + Number(jscript2) + Number(jscript3)) / 3).toFixed(2);

r3nota1.innerHTML = jscript1;   
r3nota2.innerHTML = jscript2;  
r3nota3.innerHTML = jscript3;  
r3prome.innerHTML = jscriptprom;

// END.