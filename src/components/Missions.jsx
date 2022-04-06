import React from 'react';
import Title from './Title';
import Mission from '../data/missions';
import MissionCard from './MissionCard';
import '../App.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {Mission.map((a, b) => (<MissionCard
          key={ b }
          name={ a.name }
          year={ a.year }
          country={ a.country }
          destination={ a.destination }
        />)) }
      </div>
    );
  }
}

export default Missions;
