import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/app.css'
import ContPrincipal from './components/ContPrincipal'
function App() {
  return (
    <div className="conteiner-fluid" id="drum-machine">
      <div className="d-flex align-items-center justify-content-center">
        <div className="col-xs-6 p-5 rounded box">
          <div className="mb-4">
    <ContPrincipal/>
          </div>
        </div>
    </div>
    </div>
  );
}

export default App;
