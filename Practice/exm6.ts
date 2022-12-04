interface MyIntegers
{
    s:number;
    t:string;
    myFunc();
}

class A implements MyIntegers
{
    s:number;
    t:string ;
    constructor(s:number,t:string)
    {
        this.s=s;
        this.t=t;
    }
    myFunc()
    {
        console.log("Implementing an Interface"+this.s+" "+this.t);
    }
}
let o = new A(2,"srinu");
console.log(o.myFunc());
