import fs from 'fs';

function readInput(filename: string): string
{
  return fs.readFileSync(filename, 'utf8').trim();
}

function splitLines(input: string): string[] 
{
    return input.split('\n');
}

function createTwoLists(lines: string[]): [number[], number[]]
{
    const list1: number[] = [];
    const list2: number[] = [];

    for (const line of lines)
    {
        const [first, second] = line.split(/\s+/);
        list1.push(parseInt(first));
        list2.push(parseInt(second));
    }

    return [list1, list2];
}

function calculateDistance(list1: number[], list2: number[]): number
{
    let distance = 0;
    for (let i = 0; i < list1.length; i++)
    {
        distance += Math.abs(list1[i] - list2[i]);
    }
    return distance;
}

function main()
{
    const input = readInput('input');
    const lines = splitLines(input);
    const [list1, list2] = createTwoLists(lines);
    const sortedList1 = list1.sort((a, b) => a - b);
    const sortedList2 = list2.sort((a, b) => a - b);
    const distance = calculateDistance(sortedList1, sortedList2);
    console.log(distance);
}

main();