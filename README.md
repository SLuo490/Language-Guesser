# Language-Guesser

Using [franc](https://www.npmjs.com/package/franc), [langs](https://www.npmjs.com/package/langs) and [colors](https://www.npmjs.com/package/colors) dependencies to create a langugage guesser

<img src = "https://github.com/SLuo490/Language-Guesser/blob/master/languageGuesser.gif" width = "1000px">


# Code

```js
import langs from 'langs';
import { franc, francAll } from 'franc'
import colors from 'colors'

let input = process.argv[2]; // accepts the second argument in terminal
const langCode = franc(input); // find language code of input 
const language = langs.where("3", langCode) // find language of language code

//log the language name to terminal
try {
  console.log(language.name.rainbow);
} catch (e) {
  console.log("Could not match a language. Try a larger sample");
}
```
