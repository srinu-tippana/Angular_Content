export class Faculty
{
    facName:string;
    facEmail:string;
    contactNo:number;

    constructor(facName:string,facEmail:string,contactNo:number)
    {
        this.facName=facName;
        this.facEmail=facEmail;
        this.contactNo=contactNo;


    }
/* created a construcutor here and  this would be passed
it is exportd and to be imported in  faculty component ts */

}