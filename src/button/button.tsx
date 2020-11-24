import * as React from 'react';
import { tuple } from '../_utils/type';

// ButtonType
const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');
// 在这里的typeof 只会返回上面定义的类型？
export type ButtonType = typeof ButtonTypes[number];

// ButtonShape
const ButtonShapes = tuple('circle', 'round');
export type ButtonShape = typeof ButtonShapes[number];

// ButtonHTMLType
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

// 链接类Button
export type AnchorButtonProps = {
  href: string
}

export type NativeButtonProps = {

}

export interface BaseButtonProps{
  type?: ButtonType;
  icon?: React.ReactNode;
}


export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

const InternalButton: React.ForwardRefRenderFunction<unknown,  ButtonProps> = (props, ref){

}
