import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Form.css';

const initialValue = {
  name: '',
  email: '',
  endereco: '',
  phone: ''
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


    axios.put('http://localhost:8080/pacients/184', values)
    .then(() => {
        console.log(values);
        alert('Atualizado com Sucesso')
        history.push('/perfil');
       });
  }

  return (
    <div>

      <form onSubmit={onSubmit}>
        <div className="initial-form__group">
          <label htmlFor="name">Nome</label>
          <input id="name" name="name" type="text" vonChange={onChange} />
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
        <div>
          <button className="new-schedule" type="submit">Atualizar</button>
        </div>
      </form>
    </div>
  )
};

export default InitialForm;