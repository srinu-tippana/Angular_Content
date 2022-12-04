let b:boolean=false;
console.log(b);
let c:number=2;
console.log(c);
let d:number=0o123;
console.log(d);

let firstname:string="Edureka!";
console.log(firstname);

let a:string[]=["TS","JS"];
console.log(a);

let ab:Array<string>=["TS","JS"];
console.log(ab);

let ac:[number,string];

const ad =10;/* const will not allow  value to changed*/

enum fruit
{
    apple=1,
    mango,
    banana,
    orange,
}
let fruitname:string=fruit[2];
console.log(fruitname);


let ag:any;
/* ag will accept numbers strings etc*/
ag=10;
ag="Edureka";
console.log(ag);

let myvr;
let myvr2 =(myvr as string);