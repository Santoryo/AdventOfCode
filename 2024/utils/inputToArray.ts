import fs from 'fs';

export function readInput(filename: string): string
{
  return fs.readFileSync(filename, 'utf8').trim();
}

export function splitLines(input: string): string[] 
{
    return input.split('\n');
}