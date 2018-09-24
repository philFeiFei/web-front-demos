import * as imp from "./export1.js";
import * as export2 from "./export2.js";
import exp from "./export2.js";
//import { sex, calR, fName as firstName, lastName } from "./export1.js";
console.log("sex=" + imp.sex);

imp.calR();
console.log("allName=" + imp.lastName + " " + imp.fName);

console.log("export2.name1=" + export2.name1);
console.log("exp.name=" + exp.name);
exp.getName();
