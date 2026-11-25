// Tests for signups.js. Run them with: node --test
// You don't need to change this file.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { tidyName, bibNumber, daysToGo, shirtSize, donation, emergencyPhone, saveSignups, loadSignups } from './signups.js';

test('tidyName: trimmed, one space between words, each word capitalized', () => {
  assert.equal(tidyName('  mARIA  lopez '), 'Maria Lopez', "'  mARIA  lopez ' becomes 'Maria Lopez'.");
  assert.equal(tidyName('jamal REED'), 'Jamal Reed', "'jamal REED' becomes 'Jamal Reed'.");
  assert.equal(tidyName('priya'), 'Priya', "A one-word name works too: 'priya' becomes 'Priya'.");
  assert.equal(tidyName('sam   okafor'), 'Sam Okafor', "Three spaces between words become one: 'Sam Okafor'.");
  assert.equal(tidyName('   '), '', 'A name of only spaces becomes an empty string.');
});

test('bibNumber: at least four digits, zeros in front', () => {
  assert.equal(bibNumber(7), '0007', 'Runner 7 wears 0007.');
  assert.equal(bibNumber(58), '0058', 'Runner 58 wears 0058.');
  assert.equal(bibNumber(250), '0250', 'Runner 250 wears 0250.');
  assert.equal(bibNumber(12345), '12345', 'A number with five digits stays as it is: 12345.');
});

test('daysToGo: whole days until race day, and 0 on or after it', () => {
  assert.equal(daysToGo(new Date(2026, 3, 30), new Date(2026, 4, 16)), 16, 'April 30 to May 16, 2026 is 16 days.');
  assert.equal(daysToGo(new Date(2026, 2, 1), new Date(2026, 2, 15)), 14,
    'March 1 to March 15, 2026 is 14 days. Where the clocks change on March 8, that day has 23 hours: round, don\'t cut off.');
  assert.equal(daysToGo(new Date(2026, 4, 16), new Date(2026, 4, 16)), 0, 'On race day there are 0 days to go.');
  assert.equal(daysToGo(new Date(2026, 4, 20), new Date(2026, 4, 16)), 0, 'After the race, it stays 0, never a negative number.');
});

test('shirtSize: in capitals, trimmed, and M when there is none', () => {
  assert.equal(shirtSize({ name: 'Priya Shah', shirtSize: 'S' }), 'S', 'Priya picked S.');
  assert.equal(shirtSize({ name: 'Jamal Reed', shirtSize: ' xl ' }), 'XL', "' xl ' becomes 'XL'.");
  assert.equal(shirtSize({ name: 'Sam Okafor' }), 'M', 'Sam has no shirtSize, so he gets an M.');
  assert.equal(shirtSize({ name: 'Lee Park', shirtSize: null }), 'M', 'A shirtSize of null gets an M too.');
});

test('donation: the amount given, 10 when blank, and a 0 stays 0', () => {
  assert.equal(donation({ name: 'Maria Lopez', donation: 25 }), 25, 'Maria gave $25.');
  assert.equal(donation({ name: 'Sam Okafor' }), 10, 'Sam left it blank (no donation property), so the suggested $10.');
  assert.equal(donation({ name: 'Lee Park', donation: null }), 10, 'A donation of null gets the suggested $10.');
  assert.equal(donation({ name: 'Priya Shah', donation: 0 }), 0,
    'Priya chose 0, a real answer, so it stays 0. (|| would turn it into 10: ?? keeps it.)');
});

test("emergencyPhone: the contact's phone, or 'No emergency contact'", () => {
  const maria = { name: 'Maria Lopez', emergencyContact: { name: 'Ana Lopez', phone: '555-555-0142' } };
  assert.equal(emergencyPhone(maria), '555-555-0142', "Maria's contact's phone is 555-555-0142.");
  assert.equal(emergencyPhone({ name: 'Jamal Reed', emergencyContact: null }), 'No emergency contact',
    "Jamal's emergencyContact is null. Reading .phone of null stops the program: ?. reads it safely.");
  assert.equal(emergencyPhone({ name: 'Sam Okafor' }), 'No emergency contact', 'Sam has no emergencyContact at all.');
  assert.equal(emergencyPhone({ name: 'Lee Park', emergencyContact: { name: 'Jo Park' } }), 'No emergency contact',
    "Lee's contact has no phone.");
});

test('saveSignups: JSON text, indented by 2 spaces', () => {
  const runners = [{ name: 'Maria Lopez', bib: 7 }, { name: 'Jamal Reed', bib: 12, emergencyContact: null }];
  const saved = saveSignups(runners);
  assert.equal(typeof saved, 'string', 'saveSignups returns text: a string.');
  assert.equal(saved, '[\n  {\n    "name": "Maria Lopez",\n    "bib": 7\n  },\n  {\n    "name": "Jamal Reed",\n    "bib": 12,\n    "emergencyContact": null\n  }\n]',
    'The JSON is indented by 2 spaces, one property to a line.');
});

test('loadSignups: the runners from JSON text, or [] when the text is broken', () => {
  assert.deepEqual(loadSignups('[{"name": "Maria Lopez", "bib": 7}, {"name": "Jamal Reed", "bib": 12}]'),
    [{ name: 'Maria Lopez', bib: 7 }, { name: 'Jamal Reed', bib: 12 }], 'Valid JSON becomes a list of two runners.');
  assert.deepEqual(loadSignups('[{"name": "Maria Lopez", "bib": 7},]'), [],
    'A comma after the last item is not valid JSON, so the answer is [] and the program carries on.');
  assert.deepEqual(loadSignups(''), [], 'Empty text is not valid JSON either: [].');
});

test('a round trip: what saveSignups writes, loadSignups reads back', () => {
  const runners = [{ name: 'Priya Shah', bib: 58, donation: 0, shirtSize: 'S' }];
  assert.deepEqual(loadSignups(saveSignups(runners)), runners, 'Saving and loading gives back the same runners.');
});
