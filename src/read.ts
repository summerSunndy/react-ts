// react 组件声明 React.Component<P, S> 即props, state, React.PureComponent<P, S, SS> getSnapshotBeforeUpdate

// 函数组件 React.FC<Props> = ({children}) 已经规定好的children的类型和函数返回值




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

// 接口interface   ro: ReadonlyArray<number> = XX  类似于 XX = ro as number[]，接口继承？？？用来约束函数
// 声明数组对象？里面的属性
interface test {
  width?: number;
  readonly height?: number;
  area(width: number, height: number): number;
  // 任意属性
  [propName: string]: any;
}

interface Discount{
  (discount: number): number
}
// 接口声明了参数类型与返回值类型，实现处是否省略比较好
const dis: Discount = function(param: number):number {
  return param * 0.8;
}

// 接口用来约束数组或对象
interface userInterface{
  [index: number]: string
}

// 接口来约束类
interface myUserInterface{
  username: string;
  getUserName(): string;
}
class myUser implements myUserInterface{
  username: string;
  constructor(name: string){
    this.username = name;
  }
  getUserName(){
    return this.username;
  }
}

// 约束构造函数？
interface withNameClass{
  new(name: string): myUser
}

// 函数
function a(name: string = 'mengyue', ...other: Array<any>):void{
}

// 函数作为参数，高阶函数如何写？

// ??? 声明函数类型
type GetAType = () => void
let getA: GetAType = function():void{

}
// 函数声明：重载 与 函数声明要与实现在一起，类中的函数如何重载？
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
// 类 与 abstract 类必须实现其所有方法，属性必须？？；readonly属性
// 返回的类要和这个类，类装饰器常完成的功能？
function reDefineClass(target: any){
  return class child extends target{
    constructor(age: number){
      super()
      target.property.age = age;
    }
  }
}
@reDefineClass
class Person{
  username: string
  constructor(name: string){
    this.username = name;
  }
  get name(){
    return this.username;
  }
  set name(newValue: string){
    this.username = newValue.toLocaleUpperCase();
  }
  getAge(){

  }
}
// static 类的属性
// 子类继承，public, protected(自己与子类可访问), private(只能自己访问)
// target是类定义
// 会和类的属性合并？
interface Student{
  xx: string
}
function enhaner(target: any){
  target.exam = 'english';
  target.prototype.xx = 'xx';
}
@enhaner
class Student extends Person{
  stuNo: number;
  constructor(name:string, age:number, stuNo: number ){
    super(name);
    this.stuNo = stuNo;
  }
}

// 装饰器---类(不修改类的情况下，增强类)、方法、属性、参数
// 属性装饰器, target 为原型，propertyName为属性名
function canEnum(flag: boolean){
  return function(target: any, methodName: string, propertyDescriptor: PropertyDescriptor){
    propertyDescriptor.enumerable = flag;
  }
}
function attachProperty(target: any, propertyName: string){
  let value = target[propertyName];
  const getter = ()=> value;
  const setter = (newVal: string[]) =>{ value = newVal}
  delete target[propertyName];
  Object.defineProperty(target, propertyName, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
    // writable: true
  })
}
function setAge(age: number){
  return function(target: any, propertyName: string, propertyDescriptor: PropertyDescriptor){
    target.age = age;
  }
}
// 装饰属性，参数为原型、方法名、参数下标？
function mix16(target: any, methodName: string, paramsIndex: number){

}
class teacher{
  @attachProperty
  hobbies: string[] = [];
  classId: number;
  className: string;
  // 既然用了装饰器，所有属性还要在这声明，那耦合很强？？？
  static age: number;
  constructor(classId: number, className: string){
    this.classId = classId;
    this.className = className;
  }
  @canEnum(true)
  getClassName(){
    return this.className
  }
  @setAge(20)
  static getAge(){
    teacher.age;
  }
  setPassword(@mix16 password: string){

  }
}

// 泛型：根据参数返回依据参数返回，调用决定类型，调用时
// 占位符T，可以设置默认类型
interface setType{

}
// 继承后，此时不能定义默认类型
function createA<T extends setType>(param: T): Array<T>{
  let arr: Array<T>
  // T不能进行 +， -运算，方法呢？需经在接口中定义，继承接口
  return arr;
}
function swap<A, B>(tuple: [A, B]):[B, A]{
  return [tuple[1], tuple[0]];
}
// 调用时可以不指定类型，会根据参数推断
swap<number, string>([1, 'xiaohan']);
// 类泛型
class MyArray<T>{

}
new MyArray<number>()
// 接口泛型，接口中规定了函数的约束，那函数实现处是否省掉类型约束会更好？
interface cal{
  <T>(): T
}
// 泛型的约束，因定义时不知道类型，故不能使用其对应方法；使用继承接口，在接口中定义其对应属性和方法，但此时不能定义默认类型？
// 泛型类型别名，不能被继承或实现
type cart<T> = {list : cal[]} | cal[]

// 接口兼容性，ts和对象类型比较的是属性，而非定义的类型名

// 类型 | 根据赋值类型而确定其类型

// 类的兼容性----不管具体类型，也只与其属性有关
// 函数的兼容性-----实现的参数个数不能比定义的参数个数多，返回值对象属性不能少于其定义的
type GetPerson = (name: string)=>{
  name: string;
  age: number
}
let getPerson: GetPerson;
function g1() {
  return {name: '1', age: 1, hobbies: 'pingpang'}
}
getPerson = g1;

// 函数参数的协变，实现的类型，比要求的类型更多可以，但不能少
type logFunc = (a: number | string) => void;
let log1: logFunc;
function log11(a: number | string | boolean){
  console.log(a);
}
log1 = log11;

// 判断兼容性时，先判断具体类型，再进行兼容性判断 ???
interface Empty<T>{

}
let x: Empty<string>;
let y!: Empty<number>;
x = y;

interface Empty1<T>{
  data: T
}
let x1: Empty<string>;
let y1!: Empty<number>;
x1 = y1;

// 类型保护 typeof, instanceof, === 更精确知道其类型，以便使用其对应方法;   keyof
// a!.length 断言非空；a?.length 判断是否存在再使用，但暂不支持？
// |>管道操作符，暂不支持

// 自定义类型保护
interface Bird{
  legs: number;
}
interface Dog{
  legs: number;
  name: string;
}
// x is 用的好像可有可无，用的不太对？
function isBird(x: Bird | Dog ): x is Bird{
  return x.legs === 2;
}

// 交叉类型&

// type Person = typeof p 通过获取再来定义
// 索引访问操作符，通过[]来获取一个类型的子类，与普通对象属性访问类似
// keyof 返回一个对象key的集合
type BirdKeys = {
  [key in keyof Bird]?: Bird[key] // 默认是一个循环
  // 强制全部用 -?
}

type _Pick<T, K extends keyof T> = {
  [key in K]: T[key]
}

//对接口、对象、类的属性只用部分或强制全部，Readonly, Record, Exclude, Extract, Omit, NonNullable, Parameters, ConstructorParameters, ReturnType, InstanceType
type P = Partial<Bird> // 属性变为可选
type Pi = Pick<Bird, 'legs'>
type All = Required<Bird> // 必填

// Exclude<T, U>
// Extract<T, U> 提取可以赋值给U的类型
// Record<K, T>将K中所有属性值转为T类型
// Omit<T, K> T中排除key是K的属性
// NonNullable<T>
// type UserInfo = RenturnType<typeof FunName> 获取函数返回值类型
// type ClassInfo = InstanceType<typeof ClassName> 获取函数返回值类型

// 类作为类型？接口作为类型？接口的实现？

// unknown
