
import React from 'react'
import { OldInput } from './OldInput'
import * as NewInput from './NewInput'

export default function Home() {
  return (
    <div>
      <div>Home</div>

      <OldInput
        label='Nome'
        value='Nome'
        onChange={value => console.log(value)}
        errorMessage='Nome inválido'
        leftIcon={<span> LeftIcon</span>}
        rightIcon={<span> RightIcon</span>}
      />

      <NewInput.Root>
        <NewInput.Label
          htmlFor='inputNome'
        >Nome</NewInput.Label>
        <NewInput.Icon><span>LeftIcon</span></NewInput.Icon>

        <NewInput.InputForm
          value='Nome'
          onChange={value => console.log(value)}
        />
        <NewInput.Icon><span>RightIcon</span></NewInput.Icon>
        <NewInput.ErrorMessage message='Nome inválido' />
      </NewInput.Root>

    </div>
  )
}