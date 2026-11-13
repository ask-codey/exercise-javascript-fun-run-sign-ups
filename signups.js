// The Riverside 5K's sign-ups: seven small functions for you to finish.
//
// Each function returns a placeholder for now (0, '' or []). Replace the placeholder with your own
// code, on the TODO line. The comment above each function says what it should return, with examples.
// `export` in front lets other files, such as the tests and report.js, use the function.
// Module 3's lesson "Modules: import and export" explains how.

/*
 * A runner's name, tidied for their bib: no spaces at the ends, one space between words,
 * and each word with a capital first letter and small letters after it.
 *
 * tidyName('  mARIA  lopez ') -> 'Maria Lopez'
 * tidyName('jamal REED') -> 'Jamal Reed'
 * tidyName('priya') -> 'Priya'
 * tidyName('   ') -> ''
 */
export function tidyName(typed) {
  // TODO: replace '' with your code.
  return '';
}

/*
 * The number printed on a runner's bib: always at least four digits, with zeros in front.
 * A number that already has four or more digits stays as it is.
 *
 * bibNumber(7) -> '0007'
 * bibNumber(58) -> '0058'
 * bibNumber(12345) -> '12345'
 */
export function bibNumber(number) {
  // TODO: replace '' with your code.
  return '';
}

/*
 * The shirt size to order for a runner, in capital letters with no spaces at the ends.
 * A runner with no shirtSize (missing, or null) gets an M.
 *
 * shirtSize({ name: 'Priya Shah', shirtSize: 'S' }) -> 'S'
 * shirtSize({ name: 'Jamal Reed', shirtSize: ' xl ' }) -> 'XL'
 * shirtSize({ name: 'Sam Okafor' }) -> 'M'
 */
export function shirtSize(runner) {
  // TODO: replace '' with your code.
  return '';
}

/*
 * The runner's donation in dollars. A runner who left the box blank (no donation, or null)
 * gives the suggested $10. A donation of 0 is a real answer, and stays 0.
 *
 * donation({ name: 'Maria Lopez', donation: 25 }) -> 25
 * donation({ name: 'Priya Shah', donation: 0 }) -> 0
 * donation({ name: 'Sam Okafor' }) -> 10
 */
export function donation(runner) {
  // TODO: replace 0 with your code.
  return 0;
}

/*
 * The phone number of the runner's emergency contact, or 'No emergency contact' when there
 * isn't one: no emergencyContact, an emergencyContact that is null, or a contact with no phone.
 *
 * emergencyPhone({ emergencyContact: { name: 'Ana Lopez', phone: '555-555-0142' } }) -> '555-555-0142'
 * emergencyPhone({ emergencyContact: null }) -> 'No emergency contact'
 * emergencyPhone({}) -> 'No emergency contact'
 */
export function emergencyPhone(runner) {
  // TODO: replace '' with your code.
  return '';
}

/*
 * The list of runners as JSON text, ready to save in a file: indented by 2 spaces,
 * one property to a line.
 *
 * saveSignups([{ name: 'Maria Lopez', bib: 7 }]) ->
 * '[\n  {\n    "name": "Maria Lopez",\n    "bib": 7\n  }\n]'
 */
export function saveSignups(runners) {
  // TODO: replace '' with your code.
  return '';
}

/*
 * The list of runners from JSON text, such as the text in signups.json.
 * Text that isn't valid JSON gives an empty list, [], instead of stopping the program.
 *
 * loadSignups('[{"name": "Maria Lopez", "bib": 7}]') -> [{ name: 'Maria Lopez', bib: 7 }]
 * loadSignups('[{"name": "Maria Lopez", "bib": 7},]') -> []   (a comma after the last item)
 * loadSignups('') -> []
 */
export function loadSignups(text) {
  // TODO: replace [] with your code. Text that isn't valid JSON must give [] too.
  return [];
}
