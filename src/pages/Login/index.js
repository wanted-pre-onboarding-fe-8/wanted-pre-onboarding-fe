import React from 'react';

import styled from 'styled-components';
import { useAuthState } from '../../context/AuthContext';
import useValidation from '../../hooks/useValidation';
import { setItem } from '../../utils/helpers/stroage';

const EMAIL = 'test@test.com';
const PASSWORD = '123456aA!';

const Login = () => {
  const { login } = useAuthState();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const [isValidValue, updateValidValue] = useValidation();

  const handleKeyDown = (e) => {
    if (e.isComposing && e.key === 'Enter') handleSubmit();
  };

  const handleOnChange = (e, ref) => {
    updateValidValue(ref);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (
      emailRef.current?.value === EMAIL &&
      passwordRef.current?.value === PASSWORD
    ) {
      const id = emailRef.current.value;
      login(id);
    }
  };

  return (
    <Container>
      <Box>
        <LogoBox>
          <Logo src={`${process.env.PUBLIC_URL}/images/logo.png`} />
        </LogoBox>
        <Form onSubmit={handleSubmit}>
          <Input
            name="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            ref={emailRef}
            onChange={(event) => handleOnChange(event, emailRef)}
            onKeyDown={handleKeyDown}
            isValidated={isValidValue.email !== false}
          />
          <Input
            name="password"
            type="password"
            placeholder="비밀번호"
            ref={passwordRef}
            onChange={(event) => handleOnChange(event, passwordRef)}
            onKeyDown={handleKeyDown}
            isValidated={isValidValue.password !== false}
          />
          <Button
            id="button"
            type="submit"
            isValidated={isValidValue.email && isValidValue.password}
          >
            로그인
          </Button>
        </Form>
      </Box>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  min-height: 100vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 350px;
  height: 395px;
  background-color: white;
  border: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > p {
    color: #3a3a3a;
    font-size: 12px;
    text-align: center;
    margin-top: 6px;
  }
`;

const LogoBox = styled.div`
  padding: 30px;
`;

const Logo = styled.img`
  height: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Input = styled.input`
  width: 270px;
  height: 38px;
  padding: 10px;
  font-size: 12px;
  border: 1px solid;
  border-color: ${(props) => (props.isValidated ? '#dbdbdb' : 'red')};
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: #fafafa;
`;

const Button = styled.button.attrs(({ isValidated }) => ({
  disabled: !isValidated,
}))`
  width: 270px;
  height: 38px;
  padding: 10px;
  font-size: 14px;
  font-weight: 800;
  background-color: ${(props) => (props.isValidated ? '#0094f6' : '#b2defc')};
  border-radius: 5px;
  margin-top: 5px;
  color: white;
  text-align: center;
  cursor: ${({ isValidated }) => (isValidated ? 'pointer' : 'default')};
`;
const BtnImg = styled.img`
  height: 40px;
  flex-grow: 0;
`;
