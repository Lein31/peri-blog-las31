---
title: 'Operadores Aritmeticos'
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
date: '2024-03-03'
modified_date: '2024-03-03'
image: /assets/images/posts/random-img.jpg
---

Definiciones Importantes

Operador: Un símbolo.

Operadores aritméticos: Todo operador matemático que sirve para realizar operaciones matemáticas.

Expresión Matemática: combinación de símbolos, letras y números que esperan un resultado matemático. 

Estos se resuelven en un orden jerárquico o de precendecia, dicho orden es: 

***¿Para qué sirven?***

Estos realizan operaciones matemáticas como sumas o restas con operandos.

Estos tienen dos tipos de operadores: Unarios y binarios.

Unarios: Realizan acciones con un solo operando.

Binarios: Realizan acciones con dos operandos.

En una expresión compleja (cuando este tiene dos o más operandos) en el orden de la evaluación depende de las reglas de precendencia.

```c

int orden(int a, int b) {
  
  "1)" Exponentes y Radicales: **,√

  "2)" Negatividad:  –2  –6 

  "3)" Multiplicación división y módulos: * , / , mod (%)

  "4)" Sumas y restas: + –

  return Orden;

}

```
***Operadores Aritméticos Binarios***

Este Inserta un espacio antes y después de un operador aritmético.


```js
function operadores_aritmeticos() {
  
+------+--------------+---------+---------------------------------------------------------+
| "(+)"  |     Suma     |  a + b  |               Sumar los dos operandos                   |
+------+--------------+---------+---------------------------------------------------------+ |
| "(-)"  |    Resta     |  a - b  |     Restar el segundo operando del primero              |
+------+--------------+---------+---------------------------------------------------------+ |
| "(*)"  | Multiplicación| a * b   |              Multiplicar los dos operandos             |
+------+--------------+---------+---------------------------------------------------------+ |
| "(/)"  |   División   |  a / b  |       Dividir el primer operando por el segundo         |
+------+--------------+---------+---------------------------------------------------------+ |
| "(**)" |   Potencia   | a ** b  |    Elevar el primer operando a la potencia del segundo  |
+------+--------------+---------+---------------------------------------------------------+ |
| "(%)"  |    Resto     |  a % b  |  Dividir el primer operando por el segundo y dar como   |
|        |              |         |       resultado la parte restante                       |
+------+--------------+---------+---------------------------------------------------------+

}
```


