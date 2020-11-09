import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ButtonModal from '../../components/ButtonModal';
import ApiSchedule from '../../utils/ApiSchedule';
import MarkedSchedule from '../../components/Marked_Schedule';
import './schedule.css';

class Schedule extends Component {
  
  state = {
    schedule : []
  }

  constructor(){
    super();
    this.getSchedules();
    }

    getSchedules = async () => {
      let data = await ApiSchedule.get('/').then(({ data }) => data);
      this.setState({schedule: data})
    }

    deleteSchedule = async (id) => {
      let data = await ApiSchedule.delete(`/${id}`);
      alert('Cancelado com Sucesso')
      this.getSchedules();
    }


  render(){
  return (
    <>
      <NavBar />
      <div className='schedule'>
        <div className='container-schedule'>
          <div className='all-schedule'>
            <ButtonModal />
            <h1>Consultas</h1>
            <div className='history-schedule'>
            <MarkedSchedule>
            {this.state.schedule.map(schedule =>
            <div>
               <h2 key={schedule.id}>{schedule.especiality}</h2>
               <p>Consulta com: <label>{schedule.doctorName}</label></p>
               <p>Horário:<label> {schedule.hour} - {schedule.data}</label></p>
               <button className='btn-cancelar' onClick={() => this.deleteSchedule(schedule.id)}>Cancelar</button>
            </div>
               )}
            </MarkedSchedule>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
}

export default Schedule;