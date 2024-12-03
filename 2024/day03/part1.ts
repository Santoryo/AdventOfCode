import { readInput } from "../utils/inputToArray";

const unparsedText = readInput('input');

const mulStrings: RegExpStringIterator<RegExpExecArray> = 
unparsedText.matchAll(/mul\(\d+(?:\.\d{1,3})?,\d+(?:\.\d{1,3})?\)/ig);

let sum: number = 0;

for (const it of mulStrings)
{
    let val: string = it[0].replace("mul(", "").replace(")", "");
    const [first, second] = val.split(",");
    sum += parseInt(first) * parseInt(second);
}

console.log(sum);