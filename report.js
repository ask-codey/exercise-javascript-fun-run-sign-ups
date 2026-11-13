// Prints the Riverside 5K's check-in sheet from signups.json, using your functions from signups.js,
// and saves the tidied list in checked-in.json.
// Run it with: node report.js
// This file is ready to use: you don't need to change it.
import { readFileSync, writeFileSync } from 'node:fs';
import { tidyName, bibNumber, shirtSize, donation, emergencyPhone, saveSignups, loadSignups } from './signups.js';

const text = readFileSync(new URL('./signups.json', import.meta.url), 'utf8');
const runners = loadSignups(text);

console.log(`Riverside 5K check-in sheet: ${runners.length} runners`);

const tidied = [];
for (const runner of runners) {
  const line = [
    bibNumber(runner.bib),
    tidyName(runner.name).padEnd(12),
    `shirt ${shirtSize(runner)}`.padEnd(8),
    `$${donation(runner)}`.padEnd(4),
    emergencyPhone(runner),
  ];
  console.log(line.join('  '));
  tidied.push({ ...runner, name: tidyName(runner.name), shirtSize: shirtSize(runner), donation: donation(runner) });
}

const saved = saveSignups(tidied);
writeFileSync(new URL('./checked-in.json', import.meta.url), saved);
console.log(`Saved checked-in.json: ${saved.length} characters.`);
