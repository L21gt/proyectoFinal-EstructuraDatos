let separador = " ";
let antesD = "Array antes de ordenar:";
let despuesD = "Array despues del ordenamiento:";



/**Creacion de la funcion para generar los numeros al azar del 0 al 10,000
 * de manera aleatoria*/
function generarNumerosAleatorios(cantidad, maximo) {
    const numeros = [];
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.floor(Math.random() * (maximo + 1)); // Genera un número aleatorio entre 0 y maximo inclusive
        numeros.push(numeroAleatorio);
    }
    return numeros;
}



//-----------------------------------------------------------------------------
// ****** Bubble Sort ******

function bubbleSort(array) {
    let n = array.length;
    let intercambiado;
    do {
        intercambiado = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                // Intercambiar elementos
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                intercambiado = true;
            }
        }
        n--; // Optimización: reducir el rango de comparación
    } while (intercambiado);
    return array;
}

// Crear array de numeros aleatorios antes de ordenar
console.log(separador);
console.log("********** BUBBLE SORT **********");

console.time("Tiempo de generacion e impresion del array");  //inicia el timer para medir el tiempo de ejecucion
const numerosAleatorios1 = generarNumerosAleatorios(10000, 100000);
console.log(antesD, numerosAleatorios1);
console.timeEnd("Tiempo de generacion e impresion del array");  // finaliza el tiempo de ejecucion para medir el total



// Ordenar el array
console.time("Tiempo de ordenamiento e impresion de array ordenado con Bubble Sort");
const numerosOrdenados1 = bubbleSort(numerosAleatorios1);
console.log(despuesD, numerosOrdenados1);
console.timeEnd("Tiempo de ordenamiento e impresion de array ordenado con Bubble Sort");



//-----------------------------------------------------------------------------
// ****** Selection Sort ******

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Intercambia el elemento más pequeño encontrado con el primer elemento
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}


console.log(separador);
console.log("********** SELECTION SORT **********");


// Crear array de numeros aleatorios antes de ordenar
console.time("Tiempo de generacion e impresion del array");  //inicia el timer para medir el tiempo de ejecucion
const numerosAleatorios2 = generarNumerosAleatorios(10000, 100000);
console.log(antesD, numerosAleatorios2);
console.timeEnd("Tiempo de generacion e impresion del array");  // finaliza el tiempo de ejecucion para medir el total


// Ordenar el array usando Selection Sort
console.time("Tiempo de ordenamiento e impresion de array ordenado con Selection Sort");
const numerosOrdenados2 = selectionSort(numerosAleatorios2);
console.log(despuesD, numerosOrdenados2);
console.timeEnd("Tiempo de ordenamiento e impresion de array ordenado con Selection Sort");



//-----------------------------------------------------------------------------
// ****** Insertion Sort ******

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}

console.log(separador);
console.log("********** INSERTION SORT **********");


console.time("Tiempo de generacion e impresion del array");  //inicia el timer para medir el tiempo de ejecucion
const numerosAleatorios3 = generarNumerosAleatorios(10000, 10000);
console.log("Antes de ordenar:", numerosAleatorios3); 
console.timeEnd("Tiempo de generacion e impresion del array");  // finaliza el tiempo de ejecucion para medir el total


console.time("Tiempo de ordenamiento e impresion de array ordenado con Insertion Sort");
const numerosOrdenados3 = insertionSort(numerosAleatorios3);
console.log("Después de ordenar:", numerosOrdenados3); 
console.timeEnd("Tiempo de ordenamiento e impresion de array ordenado con Insertion Sort");



//-----------------------------------------------------------------------------
// ****** Merge Sort ******

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mitad = Math.floor(arr.length / 2);
    const izquierda = arr.slice(0, mitad);
    const derecha = arr.slice(mitad);

    return merge(mergeSort(izquierda), mergeSort(derecha));
}

function merge(izquierda, derecha) {
    let resultado = [];
    let i = 0;
    let j = 0;

    while (i < izquierda.length && j < derecha.length) {
        if (izquierda[i] < derecha[j]) {
            resultado.push(izquierda[i]);
            i++;
        } else {
            resultado.push(derecha[j]);
            j++;
        }
    }

    return resultado.concat(izquierda.slice(i)).concat(derecha.slice(j));
}


console.log(separador);
console.log("********** MERGE SORT **********");

console.time("Tiempo de generacion e impresion del array");  //inicia el timer para medir el tiempo de ejecucion
const numerosAleatorios4 = generarNumerosAleatorios(10000, 10000);
console.log("Array sin ordenar:", numerosAleatorios4);
console.timeEnd("Tiempo de generacion e impresion del array");  // finaliza el tiempo de ejecucion para medir el total

console.time("Tiempo de ordenamiento e impresion de array ordenado con Merge Sort");
const numerosOrdenados4 = mergeSort(numerosAleatorios4);
console.log("Array ordenado:", numerosOrdenados4);
console.timeEnd("Tiempo de ordenamiento e impresion de array ordenado con Merge Sort");


//-----------------------------------------------------------------------------
// ****** Quick Sort ******

// Función de Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];
    
    for (let num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        } else {
            equal.push(num);
        }
    }
    
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

console.log(separador);
console.log("********** QUICK SORT **********");

// Generar el array de números aleatorios
console.time("Tiempo de generacion e impresion del array");  //inicia el timer para medir el tiempo de ejecucion
const numerosAleatorios5 = generarNumerosAleatorios(10000, 10000);
console.log(antesD, numerosAleatorios5);
console.timeEnd("Tiempo de generacion e impresion del array");  // finaliza el tiempo de ejecucion para medir el total

// Ordenar el array usando Quick Sort
console.time("Tiempo de ordenamiento e impresion de array ordenado con Quick Sort");
const numerosOrdenados5 = quickSort(numerosAleatorios5);
console.log(despuesD, numerosOrdenados5);
console.timeEnd("Tiempo de ordenamiento e impresion de array ordenado con Quick Sort");




//Veredicto final
console.log(separador);
console.log("-----------------------------------------------------------------------------");
console.log(separador);
console.log("EL METODO DE ORDENAMIENTO MAS RAPIDO ES *** Quicksight ***");
