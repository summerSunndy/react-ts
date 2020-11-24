// T继承 字符数组, 再将其返回？
export const tuple = <T extends string[]>(...args: T) => args;
