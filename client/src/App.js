import Main from "./views/Main";
import CreatePet from "./views/CreatePet";
import UpdatePet from "./views/UpdatePet";
import Detail from "./views/Detail";
import {Router} from '@reach/router';

function App() {
  return (
    <div className="container">
      <Router>
        <Main path="/"/>
        <CreatePet path="/create"/>
        <UpdatePet path="/update/:id"/>
        <Detail path="/detail/:id"/>
      </Router>
    </div>
  );
}

export default App;
