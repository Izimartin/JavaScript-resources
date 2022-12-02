function rotate(matrix) {
    n = matrix.length;
    for (i=0; n < n/2; i++) {
        first = layer;
        last = n-1 -layer;
    }

    for (i = 0; i< last; i++){
        offset = i-first;
        top = matrix[first][i];
        matrix[first][i] = matrix[last-offset][first];
        matrix[last-offset][first] = matrix[last][last-offset];
        matrix[last][last-offset] = matrix[i][last];
        matrix[i][last] = top
    }
    return true
}