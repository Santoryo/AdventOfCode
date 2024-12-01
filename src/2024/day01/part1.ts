import { readInput, createTwoLists, splitLines } from "./helpers";

function calculateDistance(list1: number[], list2: number[]): number
{
    let distance = 0;
    for (let i = 0; i < list1.length; i++)
    {
        distance += Math.abs(list1[i] - list2[i]);
    }
    return distance;
}

const input = readInput('input');
const lines = splitLines(input);
const [list1, list2] = createTwoLists(lines);
const sortedList1 = list1.sort((a, b) => a - b);
const sortedList2 = list2.sort((a, b) => a - b);
const distance = calculateDistance(sortedList1, sortedList2);
console.log(distance);
