import React, { useState } from 'react';
import styles from '../styles/components/Form';

const {
  FormContainer,
  Input,
  InputContainer,
  SubmitButton,
  SubmitButtonContainer,
  TextAreaContainer,
  TextArea,
} = styles;

const Form: React.FC = () => {
  const [name, setName] = useState('');

  const onChangeName = (event) => setName(event.target.value);

  const onSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <FormContainer>
      <InputContainer>
        <label htmlFor="name">Nome:</label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onChangeName}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          name="email"
          value={name}
          onChange={onChangeName}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="telephone">Telefone:</label>
        <Input
          type="tel"
          name="telephone"
          value={name}
          onChange={onChangeName}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="address">Endereço:</label>
        <Input
          type="text"
          name="address"
          value={name}
          onChange={onChangeName}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="number">Número:</label>
        <Input
          type="text"
          name="number"
          value={name}
          onChange={onChangeName}
          width="10%"
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="neighborhood">Bairro:</label>
        <Input
          name="neighborhood"
          value={name}
          onChange={onChangeName}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="complement">Complemento:</label>
        <Input
          name="complement"
          value={name}
          onChange={onChangeName}
        />
      </InputContainer>
      <TextAreaContainer>
        <label htmlFor="description">Descrição:</label>
        <TextArea
          name="description"
          value={name}
          onChange={onChangeName}
        />
      </TextAreaContainer>
      <SubmitButtonContainer>
        <SubmitButton
          type="submit"
          value="Cadastrar"
          onClick={onSubmit}
        />
      </SubmitButtonContainer>
    </FormContainer>
  );
};

export default Form;
