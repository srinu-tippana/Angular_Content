class myClass
{
     j:number
     constructor(k:number)
     {
         this.j=k;
     }
     value()
     {
         return("The number is "+this.j);
     }

}
let myobj = new  myClass(6);
console.log(myobj.value());