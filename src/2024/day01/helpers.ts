import fs from 'fs';

export function readInput(filename: string): string
{
  return fs.readFileSync(filename, 'utf8').trim();
}

export function splitLines(input: string): string[] 
{
    return input.split('\n');
}

export function createTwoLists(lines: string[]): [number[], number[]]
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