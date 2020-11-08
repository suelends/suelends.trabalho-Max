import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './scheduleForm.css';

const initialValue = {
  especiality: '',
  doctorName: '',
  data: '',
  hour: ''
}

const ScheduleForm = () => {

  const [values, setValues] = useState(initialValue);
  const history = useHistory();


  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();


    axios.post('http://localhost:8080/schedule', values)
    .then(() => {
        console.log(values);
        alert('Agendado com Sucesso')
        history.push('/schedule');
       });
  }
 

  return (
    <form className='form-modal' onSubmit={onSubmit}>
      <div className='forms'>
        <label htmlFor="especialidade">Especialidade</label>
        <input id="especialidade" name="especiality" type="text" onChange={onChange} />
      </div>
      <div className='forms'>
        <label htmlFor="profissional">Profissional</label>
        <input id="profissional" name="doctorName" type="text" onChange={onChange} />
      </div>
      <div className='forms'>
        <label htmlFor="data">Data</label>
        <input id="data" name="data" type="text" onChange={onChange} />
      </div>
      <div className='forms'>
        <label htmlFor="hora">Horário</label>
        <input id="hora" name="hour" type="text" onChange={onChange} />
      </div>
      <div>
        <button className="btn-cancelar" type="submit" >Agendar</button>
      </div>
    </form>
  )
};

export default ScheduleForm;