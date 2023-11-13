import { Popper } from '@components/commons/popper/popper';
import { ListNavigation } from '@components/commons/list-navigation/list-navigation';
import { Drawer } from '@components/parts/drawer/drawer';
import './App.css';

function App() {
  return (
    <>
    <header className='user-manager-header'>User Manager</header>
      <Drawer>
        <div className='popper-wrapper'>
          <Popper />
        </div>
        <ListNavigation />
      </Drawer>
    </>
  );
}

export default App;
