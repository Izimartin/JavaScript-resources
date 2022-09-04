/*
 * CALCULADORA .TXT
 * Dificultad: MEDIA
 *
 * Enunciado: Lee el fichero "Challenge21.txt" incluido en el proyecto, calcula su resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*" y división "/".
 * - El resultado se muestra al finalizar la lectura de la última línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han podido resolver las operaciones.
 *

 */


if (result == null) {
    result = number
} else {
    when(lastOperator) {
        "+"-> {
            result = result?.plus(number)
        }
        "-"-> {
            result = result?.minus(number)
        }
        "*"-> {
            result = result?.times(number)
        }
        "/"-> {
            result = result?.div(number)
        }
        else -> {
            fileError = true
            return@forEachLine
        }
    }
    lastOperator = null
}
} ?: run {
if (lastOperator == null) {
    lastOperator = line
} else {
    fileError = true
    return@forEachLine
}
}