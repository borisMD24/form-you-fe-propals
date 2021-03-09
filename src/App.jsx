import './components/components.scss';
import TextForm from './components/textForm/index';
import Signup from './components/signupForm/index'

function App() {
  return (
    <div className="App">
          voili voilou les petits atome et les petites molecules eeeeeeeeeeeeet on commence par les champs :D <br/> <br/>
          <div className="container">
            {"<"}TextForm label="Prenom"/{">"} : 
            <div className="wrapper">
              <TextForm label="Nom"/>
            </div>
            {"<"}TextForm label="Nom" valid={"{"}false{"}"}/{">"} : 
            <div className="wrapper">
              <TextForm label="Nom" valid={false}/>
            </div>
            {"<"}TextForm label="Mot De Passe" password/{">"} : 
            <div className="wrapper">
              <TextForm label="Mot De Passe" password valid/>
            </div>
          </div>
          premiere molecule : signup form
          <div className="container">
            <Signup/>
          </div>
    </div>
  );
}

export default App;
