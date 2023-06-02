import React, { useState } from 'react';


// Essa função tem o objetivo de registrar um novo usuário no banco.
async function register(data) {
  // Desestrutura os dados recebidos.
  const { email, name, avatar } = data;

  // Verifica se o avatar foi informado.
  if (!avatar) return { error: 'avatar is required' };

  // Verifica se o nome foi informado.
  if (!name) return { error: 'name is required' };

  // Essa função retorna o usuário a partir do email informado
  const userMail = getUserByEmail(email);

  // Verificação se o email informado já foi utilizado por algum usuário.
  if (userMail) {
    return { error: 'email already used' };
  }

  // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
  const avatar2 = convertImageToJPG(avatar);

  // Cria o usuário no banco de dados
  const user = await createUser({ email, name, avatar: avatar2 });

  return { user };
}


// // // // // // // // // // // // // //  
// // // // // // // // // // // // // //  
// // // // // // // // // // // // // //  
// // // // // // // // // // // // // //  

type ExampleComponentProps = {
  condition: boolean,
};
export const ExampleComponent = ({ condition }: ExampleComponentProps) => {
  const [estado, setEstado] = useState('inicial'); // Estado atual do componente

  // Verifica o estado atual
  if (estado === 'inicial') {
    // Se o estado for 'inicial'
    if (condition) {
      // Se a variável de controle for verdadeira
      setEstado('atualizado'); // Atualiza o estado para "atualizado"
    } else {
      setEstado('erro'); // Atualiza o estado para "erro"
    }
  } else {
    if (estado === 'atualizado') {
      // Se o estado for 'atualizado'
      return (
        <div style={{ backgroundColor: 'green', color: 'white' }}>
          {/* Título para o estado atualizado */}
          <h1>Estado Atualizado</h1>
          <p>Lorem Ipsum</p>
        </div>
      );
    } else {
      return (
        <div style={{ backgroundColor: 'red', color: 'white' }}>
          {/* Título para o estado de erro */}
          <h1>Estado de Erro</h1>
          <p>Lorem Ipsum</p>
        </div>
      );
    }
  }

  // Retorna o componente com o estado inicial
  return (
    <div style={{ backgroundColor: 'gray', color: 'black' }}>
      {/* Título para o estado inicial */}
      <h1>Estado Inicial</h1>
      <p>Lorem Ipsum</p>
    </div>
  );
};