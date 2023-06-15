import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>My alert</Alert>}
      <Button onClick={() => setShowAlert(true)} color='secondary'>
        {/*passing setShowAlert as a fat arrow function ensures that the function
      is not immediately called but is only executed when the button is
      clicked.*/}
        My Button
      </Button>
    </div>
  );
}

export default App;
