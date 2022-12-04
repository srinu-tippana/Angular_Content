class ParentClass
{
    j:number;
    constructor(k:number)
    {
        this.j=k;
    }
}
class ChildClass extends ParentClass
{
    l:number;
    constructor(m:number,k:number)
    {
        super(k);/*this is for the parameter that i have taken from the  parent class  */
        this.l=m;
    }
    value()
    {
        return ("value from parent is "+this.j+"and the value of child"+this.l);
    }
}
 let newObj = new ChildClass(12,23);
 console.log(newObj.value());