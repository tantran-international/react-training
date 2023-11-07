import { AddNewPopper } from '@components/commons/popper/popper';
import { TextField } from '@components/commons/text-field/text-field';
import './App.css';

function App() {
  return (
    <>
      <div className='popper-wrapper'>
        <AddNewPopper />
      </div>
      <TextField className='customize-textfield' placeholder='test prop' />
    </>
  );
}

export default App;
