import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCard from './components/PlanetCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        {/* <PlanetCard planetName="" planetImage="" /> */}
      </div>
    );
  }
}

export default App;
