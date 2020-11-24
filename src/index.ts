// 基本类型使用 stringm, number, boolean [], (undefined, null 其他类型的子类型), object, symbol
// Array<type>
let _name: string = 'mengyue'
// 元组
let point: [number, number]
// 枚举
enum Gender{
  BOY,
  GIRL
}
// never: throw new Error() 或 死循环, any, void 空
// 强行断言----断言不为空；内部定义的节点类型？??
let root = document.getElementById('root')
root!.style.color = 'red'
// as 或 <>  unknown
let str: unknown = 'this is a string'
let len = (str as string).length
let leng = (<string>str).length
// 联合类型 |   &
let aa: number | string; // 赋值后才能使用其属性与方法， 或以用as后来使用该属性或方法
// 字面量类型
let Gender1: 'BOY' | 'GIRL'
// 包装对象

// 接口interface   ro: ReadonlyArray<number> = XX  类似于 XX = ro as number[]
interface test {
  width?: number;
  readonly height?: number;
  area(width: number, height: number): number;
  [propName: string]: any;
}

// 函数
function a(name: string = 'mengyue', ...other: Array<any>):void{
}

// 函数作为参数，高阶函数如何写？

// ??? 声明函数类型
type GetAType = () => void
let getA: GetAType = function():void{

}
// 函数声明：重载 与 函数声明要与实现在一起
function sum_1(a: number, b:number): number;
function sum_1(a: string, b:string): string;
function sum_1(a: any, b:any): any{
  return a+b;
}
sum_1(1, 2);
// 箭头函数
type DelayType = (ms: number) => void;
let delay: DelayType = (ms: number) => {

}
// 类
