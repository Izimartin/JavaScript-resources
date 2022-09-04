/*
 * LA CARRERA DE OBSTÁCULOS
 * Dificultad: MEDIA
 *
 * Enunciado: Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo) o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla) será correcto y no
 *        variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.

 */

// Refactor to js

fun main() {
    println(checkRace(listOf(AthleteState.RUN, AthleteState.JUMP, AthleteState.RUN, AthleteState.JUMP, AthleteState.RUN), "_|_|_"))
    println(checkRace(listOf(AthleteState.RUN, AthleteState.RUN, AthleteState.RUN, AthleteState.JUMP, AthleteState.RUN), "_|_|_"))
    println(checkRace(listOf(AthleteState.RUN, AthleteState.RUN, AthleteState.JUMP, AthleteState.JUMP, AthleteState.RUN), "_|_|_"))
    println(checkRace(listOf(AthleteState.RUN, AthleteState.RUN, AthleteState.JUMP, AthleteState.JUMP, AthleteState.RUN), "_|_|_|_"))
    println(checkRace(listOf(AthleteState.RUN, AthleteState.JUMP, AthleteState.RUN, AthleteState.JUMP), "_|_|_"))
    println(checkRace(listOf(AthleteState.RUN, AthleteState.JUMP, AthleteState.RUN, AthleteState.JUMP, AthleteState.RUN, AthleteState.JUMP, AthleteState.RUN), "_|_|_"))
    println(checkRace(listOf(AthleteState.JUMP, AthleteState.JUMP, AthleteState.JUMP, AthleteState.JUMP, AthleteState.JUMP), "|||||"))
    println(checkRace(listOf(AthleteState.JUMP, AthleteState.JUMP, AthleteState.JUMP, AthleteState.JUMP, AthleteState.JUMP), "||?||"))
}


private enum class AthleteState(val segment: String) {
    RUN("_"),
    JUMP("|")
}

private fun checkRace(athlete: List<AthleteState>, track: String) : Boolean {

    val totalActions = if (athlete.count() > track.count())  athlete.count() else track.count()
    val minActions = if (athlete.count() > track.count()) track.count() else athlete.count()

    val trackSegments = track.toList()

    var athleteTrack = ""

    for (index in (0 until totalActions)) {
        athleteTrack += if (index >= minActions) {
            "?"
        } else {
            val segment = trackSegments[index]
            when(val state = athlete[index]) {
                AthleteState.RUN -> if (segment.toString() == state.segment) state.segment else "/"
                AthleteState.JUMP -> if (segment.toString() == state.segment) state.segment else "x"
            }
        }
    }

    println(athleteTrack)

    return track == athleteTrack
}