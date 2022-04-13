import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Button

} from 'reactstrap';
import { signupHandler } from '../../../redux/user/action';

const Signup = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeId = (e) => {
        setId(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(id === '') return alert('아이디를 입력하세요.');
        if(password === '') return alert('패스워드를 입력하세요.');
        if(name === '') return alert('이름을 입력하세요.');
        const obj = {bypass:false, id: id, password: password, name: name};
        dispatch(signupHandler(obj));
        alert('회원가입이 완료되었습니다.');
        navigate('/user/login');
    }

    return (
        <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="userId">
            Id
          </Label>
          <Input
            id="userId"
            name="id"
            placeholder="아이디를 입력하세요."
            type="text"
            value={id}
            onChange={onChangeId}
          />
        </FormGroup>
        <FormGroup>
          <Label for="userPassword">
            Password
          </Label>
          <Input
            id="userPassword"
            name="password"
            placeholder="패스워드를 입력하세요."
            type="password"
            value={password}
            onChange={onChangePassword}
          />
        </FormGroup>
        <FormGroup>
          <Label for="userName">
            이름
          </Label>
          <Input
            id="userName"
            name="name"
            placeholder="이름을 입력하세요."
            type="text"
            value={name}
            onChange={onChangeName}
          />
        </FormGroup>
        <Button type="submit">
          회원가입
        </Button>
    </Form>
    );
};

export default Signup;