import React from 'react';
import TeamCard from './TeamCard';
import './CardList.css';

const TeamList = props => {
    return (
        <div className='team-list'>
            {props.team !== undefined ? props.team.map(member => {
                return <TeamCard info={member} key={member.index} />
            }): ''}
        </div>
    )
}

export default TeamList;