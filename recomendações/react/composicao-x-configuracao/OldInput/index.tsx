import React, { ReactNode } from 'react'


type OldInputProps = {
  label?: string;
  value: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onChange: (value: string) => void;
  errorMessage?: string;
}
export function OldInput({
  label,
  value,
  leftIcon = null,
  rightIcon = null,
  onChange,
  errorMessage
}: OldInputProps
) {
  return (
    <div>
      {label && <label>{label}</label>}
      {leftIcon}
      <input type='text' value={value} onChange={e => onChange(e.target.value)} />
      {rightIcon}
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  )
}
