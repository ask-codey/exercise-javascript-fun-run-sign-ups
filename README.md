# Exercise: Fun Run Sign-Ups

Exercise code for the lesson **Exercise: Fun Run Sign-Ups** in JavaScript in Depth on [ask-codey.com](https://www.ask-codey.com).

The Riverside 5K Fun Run's sign-up form collected names typed every which way, shirt sizes some runners skipped, donations left blank, and emergency contacts that are sometimes missing. You'll finish nine small functions in `signups.js` that tidy it all up for the check-in table: names, bib numbers, the days left until race day, shirt sizes, donations, emergency phone numbers, phone numbers typed every which way, and saving and loading the list as JSON. Tests check every function.

## Before you start

You need Node.js installed (`node --version` in a terminal prints its version). Nothing else: there's nothing to install with npm.

## What's here

- `signups.js`: the nine functions, each returning a placeholder (`''`, `0` or `[]`) for now. The comment above each one says what it should return, with examples. For you to finish.
- `report.js`: prints the check-in sheet from `signups.json` using your functions, and saves the tidied list in `checked-in.json`. Ready to use.
- `signups.json`: four runners' sign-ups, as the form saved them, messy text and all. Ready to use.
- `signups.test.js`: the tests that check your functions. You don't need to change it.
- `package.json`: tells Node that these files share functions with `import` and `export`. Ready to use.

## Run it

Open the folder in VS Code, and a terminal there (**Terminal > New Terminal**). Then:

```bash
node report.js
```

At first it says *0 runners*, because `loadSignups` doesn't read the file yet. Each function you finish fills in more of the sheet.

## Check your work

```bash
node --test
```

At first every test fails: that is expected. Each function you finish turns its test green. A failing test's message says which values it used and what it expected, for example *Priya chose 0, a real answer, so it stays 0.*

## The rules

- Never change a string in place: every string method hands back a new string, so keep what it returns.
- Give defaults with `??`, so a real `0` stays `0`.
- Read the emergency contact's phone with `?.`, so a missing contact never stops the program.
- `loadSignups` must not stop the program on broken text: it returns `[]` instead.

## Tips

- Work `tidyName` out by hand first: what do `trim`, then `split(' ')`, give you for `'  mARIA  lopez '`? Which pieces do you need to throw away?
- Fixing one word is the first letter as a capital plus the rest in small letters. `map` does that to every word in an array, and `join` puts the words back together.
- `padStart` is a string method, and a bib number is a number.
- Subtracting two dates gives milliseconds. *Dates and Times* shows how to turn them into days, and why to round.
- `cleanPhone` takes two patterns: one that takes out every character that isn't a digit (with the flag that changes every match), and one with three groups that puts the hyphens back with `$1`, `$2` and `$3`. *Patterns in Text: Regular Expressions* shows both.
- `JSON.stringify` takes two more arguments that make its text readable.
- Put the risky line inside `try { }`, and say what to return instead in `catch (error) { }`.

## Hand it in

When it works, put your solution in a public repo of your own on GitHub, then paste that repo's address into **Submit your exercise** on the lesson page at [ask-codey.com](https://www.ask-codey.com). That's what completes the lesson. You don't need Git: create the repo on GitHub, choose **Add file**, then **Upload files**, and upload everything in this folder. The lesson page shows each step, and the lesson *Put Your Code on GitHub* walks through every screen.
