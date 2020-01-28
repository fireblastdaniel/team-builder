import React, { useState} from 'react';
import Form from './components/Form';
import TeamList from './components/teamList';
import './App.css';

function App() {
  const [team, setTeam] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});
  const [teamMember, setTeamMember] = useState({
    fname: '',
    lname: '',
    role: '',
    email: ''
  });
  

  const handleSubmit = event => {
    event.preventDefault();
    setTeam([...team, teamMember]);
  }

  const handleChange = event => {
    setTeamMember({...teamMember, [event.target.name]: event.target.value});
  };

  return (
    <div className="App">
      <h1>Team List Generator</h1>
      <Form handleSubmit={handleSubmit} handleChange={handleChange} memberToEdit={memberToEdit}/>

      <TeamList team={team}></TeamList>
    </div>
  );
}

export default App;
