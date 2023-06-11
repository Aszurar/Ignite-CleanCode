import React, { ReactNode } from 'react'
import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

type RootProps = {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return (
    <div>
      {children}
    </div>
  )
}

type InputFormProps = InputHTMLAttributes<HTMLInputElement>;

export function InputForm({ ...props }: InputFormProps) {
  return (
    <input {...props} />
  )
}

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ ...props }: LabelProps) {
  return (
    <label {...props} />
  )
}


type IconProps = {
  children: ReactNode;
}

export function Icon({ children }: IconProps) {
  return (
    <span>{children}</span>
  )
}


type ErrorMessageProps = {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <span>{message}</span>
  )
}