import { Popper } from '@components/commons/popper/popper';
import { ListNavigation } from '@components/commons/list-navigation/list-navigation';
import { Drawer } from '@components/parts/drawer/drawer';
import { ToolBar } from '@components/parts/tool-bar/tool-bar';
import './App.css';

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
