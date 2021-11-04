import langs from 'langs';
import { franc, francAll } from 'franc'
import colors from 'colors'

let input = process.argv[2];
const langCode = franc(input);
const language = langs.where("3", langCode)
try {
  console.log(language.name.green);
} catch (e) {
  console.log("Could not match a language. Try a large sample");
}


