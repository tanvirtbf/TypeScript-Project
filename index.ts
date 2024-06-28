//@ts-ignore

function sum(a:number,b:number):number{
  return a+b;
}
console.log(sum(1,2))

function hello(a:string,b:number):string{
  if(b>20) return a;
  return "Not Match";
}
console.log(hello("Hello World",12))