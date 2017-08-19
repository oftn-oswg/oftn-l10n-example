# oftn-l10n Example

Run `node src/index.js` or `node .` in this directory. Set the language with the environment variable `LANG`.

## Usage

```
$ LANG=es node .
Bienvenidos!
Antes de empezar, ¿cuál idioma prefieres? ru
Как тебя зовут? Сама́рин
Большое спасибо, Сама́рин!
До свидания.
```

## Add strings

Edit `src/index.js` to your heart's content. When you are finished, run `npm install && npm run build`. This will generate `dist/` which we can ignore for now. The program will still continue to run but any strings that have not been translated yet will remain untranslated. Add any translations to the corresponding `lang/*.json` file and the program will work.