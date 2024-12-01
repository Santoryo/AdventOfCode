import { readInput, createTwoLists, splitLines } from "./helpers";

function calculateSimilarityScore(list1: number[], list2: number[]): number
{
    let similarityScore = 0;
    for (let i = 0; i < list1.length; i++)
    {
        for (let j = 0; j < list2.length; j++)
        {
            if(list1[i] === list2[j])
                similarityScore += list1[i];
        }
    }
    return similarityScore;
}

const input = readInput('input');
const lines = splitLines(input);
const [list1, list2] = createTwoLists(lines);
const answer: number = calculateSimilarityScore(list1, list2);
console.log(answer);

