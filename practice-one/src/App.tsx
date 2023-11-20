import './App.css';

/* Components */
import { Popper } from '@components/commons/Popper/index';
import { ListNavigation } from '@components/commons/ListNavigation/index';
import { Drawer } from '@components/parts/Drawer/index';
import { ToolBar } from '@components/parts/ToolBar/index';

function App() {
  return (
    <>
      <header className='user-manager-header'>User Manager</header>

      <div className='app-body'>
        <Drawer>
          <div className='popper-wrapper'>
            <Popper />
          </div>
          <ListNavigation />
        </Drawer>

        <div className='app-content-wrapper'>
          <ToolBar content='Users' />
        </div>
      </div>
    </>
  );
}

export default App;
