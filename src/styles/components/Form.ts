import styled from 'styled-components';

const FormContainer = styled.form`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const InputContainer = styled.div`
  width: 80%;
  height: 10vh;
`;

const Input = styled.input`
  width: 100%;
  height: 50%;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
`;

const SubmitButton = styled.input`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textSecondary};
  width: 10vw;
  height: 7vh;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  :active {
    transform: translateY(1.5px);
  }

  @media (min-width: 320px) and (max-width: 420px) {
    width: 80%;
  }
`;

export default {
  FormContainer,
  Input,
  InputContainer,
  SubmitButton,
};
