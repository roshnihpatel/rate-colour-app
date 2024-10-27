import ColoursList from './comonents/ColoursList';
import './App.css';
import AddColourForm from './comonents/AddColourForm';

function App() {
  
  return (
    <div className='App'>
      <AddColourForm/>
      <ColoursList /> 
    </div>
  );
}

export default App;
