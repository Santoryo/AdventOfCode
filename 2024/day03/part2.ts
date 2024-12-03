import { readInput } from "../utils/inputToArray";

const unparsedText = readInput('input');

const mulStrings: RegExpStringIterator<RegExpExecArray> = 
unparsedText.matchAll(/mul\(\d+(?:\.\d{1,3})?,\d+(?:\.\d{1,3})?\)|do\(\)|don't\(\)/ig);

let sum: number = 0;
let isDo: boolean = true;

for (const it of mulStrings)
{
    if(it[0] === "don't()")
    {
        isDo = false;
        continue;
    }
    if(it[0] === "do()")
    {
        isDo = true;
        continue;
    }
    if(!isDo) continue;

    let val: string = it[0].replace("mul(", "").replace(")", "");
    const [first, second] = val.split(",");
    sum += parseInt(first) * parseInt(second);
}

console.log(sum);