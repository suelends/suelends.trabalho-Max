import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Form.css';

const initialValue = {
  name: '',
  email: '',
  phone: '',
  password: '',
}

const InitialForm = () => {
  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();


    axios.post('http://localhost:8080/pacients', values)
    .then(() => {
        console.log(values);
        alert('Cadastrado com Sucesso')
        history.push('/');
       });
  }

  return (
    <div>

      <form onSubmit={onSubmit}>
        <div className="initial-form__group">
          <label htmlFor="name">Nome</label>
          <input id="name" name="name" type="text" onChange={onChange} />
        </div>
        <div className="initial-form__group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="text" onChange={onChange} />
        </div>
        <div className="initial-form__group">
          <label htmlFor="endereco">Endereco</label>
          <input id="endereco" name="endereco" type="text" onChange={onChange} />
        </div>
        <div className="initial-form__group">
          <label htmlFor="phone">Telefone</label>
          <input id="phone" name="phone" type="text" onChange={onChange} />
        </div>
        <div className="initial-form__group">
          <label htmlFor="password">Senha</label>
          <input id="password" name="password" type="password" onChange={onChange} />
        </div>
        <div>
          <button className="new-schedule" type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  )
};

export default InitialForm;