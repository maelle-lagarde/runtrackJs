function tri(numbers, order) {
    if (order === "asc") {
        return triAscendant(numbers);
    } else if (order === "desc") {
        return triDescendant(numbers);
    } else {
        console.log("Ordre de tri invalide.");
        return numbers;
    }
}

function triAscendant(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - 1 - i; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    } return numbers;
}

function triDescendant(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - 1 -i; j++) {
            if (numbers[j] < numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    } return numbers;
}

let numbers1 = [12, 5, 7, 56, 13, 1, 92];
console.log(tri(numbers1, "asc"));

let numbers2 = [48, 3, 30, 6, 17, 62, 22];
console.log(tri(numbers2, "desc"));