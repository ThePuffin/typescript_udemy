import { abc } from "./modules";
import { abcBis as cdf } from "./modules";
import * as mods from "./modules.multi";

const abcUse = new abc("a", "b", 3);
console.log(abcUse.c);
console.log(abcUse);

const cdfUser = new cdf("aa", "bb", 33);
console.log(cdfUser);

const cdfUserBis = new mods.abc("aaa", "abb", 333);
console.log(cdfUserBis);
