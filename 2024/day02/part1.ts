import * as iTA from '../utils/inputToArray';

const input = iTA.readInput('input');
const lines = iTA.splitLines(input).map(line => line.trim());

let safeReports = 0;

const isIncreasing = (arr: number[]) => arr.every((v, i, a) => i === 0 || a[i - 1] <= v);
const isDecreasing = (arr: number[]) => arr.every((v, i, a) => i === 0 || a[i - 1] >= v);
const isOrdered = (arr: number[]) => isIncreasing(arr) || isDecreasing(arr);
const checkRange = (arr: number[]) => arr.every((_, i, arr) => i === 0 || Math.abs(arr[i] - arr[i - 1]) >= 1 && Math.abs(arr[i] - arr[i - 1]) <= 3);


for (const line of lines)
{
    const numbers: number[] = line.split(/\s+/).map(x => parseInt(x));

    if(isOrdered(numbers) && checkRange(numbers))
        safeReports++;
}

console.log(safeReports);