numero1 = prompt("digite um número")
numero2 = prompt("digite outro número")

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

soma= numero1 + numero2;
subtrair = numero1 - numero2;
multiplicar = numero1 * numero2;
dividir = numero1 / numero2;
resto = numero1 % numero2;

document.getElementsByTagName("div")[0].innerHTML=soma+"<br>"+subtrair+"<br>"+dividir+"<br>"+resto;