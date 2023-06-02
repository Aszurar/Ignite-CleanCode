import React, { useState, useEffect } from 'react';

async function registerUser(data) {
  const { email, name, avatar } = data;

  if (!avatar) return { error: 'avatar is required' };
  if (!name) return { error: 'name is required' };

  const userMail = getUserByEmail(email);

  if (userMail) {
    return { error: 'email already used' };
  }

  // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
  const avatarConverted = convertImageToJPG(avatar);

  const newUser = await createUser({ email, name, avatar: avatarConverted });

  return { newUser };
}



// // // // // // // // // // // // // //  
// // // // // // // // // // // // // //  
// // // // // // // // // // // // // //  
// // // // // // // // // // // // // //  


type ExampleComponentProps = {
  isValid: boolean,
};
export const ExampleComponent = ({ isValid }: ExampleComponentProps) => {
  const [status, setStatus] = useState('initial');

  const colorMap = {
    updated: { backgroundColor: 'green', textColor: 'white', title: 'Status Atualizado' },
    error: { backgroundColor: 'red', textColor: 'white', title: 'Status de Erro' },
    initial: { backgroundColor: 'gray', textColor: 'black', title: 'Status Inicial' },
  };


  function updateStatus() {
    if (status === 'initial') {
      if (isValid) {
        setStatus('updated');
        return;
      }
      setStatus('error');
    }
  };

  useEffect(() => {
    updateStatus();
  }, [isValid, status]);

  const { backgroundColor, textColor, title } = colorMap[status];

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <h1>{title}</h1>
      <p>Lorem Ipsum</p>
    </div>
  );
};
