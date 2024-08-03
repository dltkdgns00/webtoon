import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const scenes = [
  { id: 1, image: process.env.PUBLIC_URL + '/scene1.png', description: 'Scene 1 description' },
  { id: 2, image: process.env.PUBLIC_URL + '/scene2.png', description: 'Scene 2 description' },
  { id: 3, image: process.env.PUBLIC_URL + '/scene3.png', description: 'Scene 3 description' },
  { id: 4, image: process.env.PUBLIC_URL + '/scene4.png', description: 'Scene 4 description' },
  { id: 5, image: process.env.PUBLIC_URL + '/scene5.png', description: 'Scene 5 description' },
];
function App()
{
  const [currentScene, setCurrentScene] = useState(0);

  const nextScene = () =>
  {
    setCurrentScene((prevScene) => (prevScene + 1) % scenes.length);
  };

  const prevScene = () =>
  {
    setCurrentScene((prevScene) => (prevScene - 1 + scenes.length) % scenes.length);
  };

  return (
    <div className="App">
      <header className="App-header bg-primary text-white py-3">
        <h1>Karis Webtoon</h1>
      </header>
      <main className="container mt-4">
        <div className="scene mb-3">
          <img className="img-fluid" src={scenes[currentScene].image} alt={`Scene ${currentScene + 1}`} />
          <p className="mt-2">{scenes[currentScene].description}</p>
        </div>
        <div className="navigation d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={prevScene}>&lt; Previous</button>
          <button className="btn btn-secondary" onClick={nextScene}>Next &gt;</button>
        </div>
      </main>
    </div>
  );
}

export default App;