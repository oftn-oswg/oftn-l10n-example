const l10n = require('oftn-l10n');
const path = require('path');
const oslocale = require('os-locale');

const R = l10n.proxy({
  // Location of root localizations object
  path: 'lang/all.json',
  lang: oslocale.sync().replace(/_/g, '-')
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(R.welcome); // R.welcome = "Welcome!"

// R.get_lang = "Before we get started, what language do you speak? "
rl.question(R.get_lang, (lang) => {
  R({ lang: lang });

  // R.get_name = "What is your name? "
  rl.question(R.get_name, (name) => {

    // R.thank_you = "Thank you very much, {0}!"
    console.log(l10n.format(R.thank_you, name));
    // R.goodbye = "Goodbye."
    console.log(R.goodbye);

    rl.close();
  })
});