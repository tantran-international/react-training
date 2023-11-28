import { TDrawer } from '@/types/TDrawer';
import './Drawer.css';

export const Drawer = ({
  additionalClass,
  children
}: TDrawer) => {
  return (
    <aside className={`drawer drawer-${additionalClass}`}>{children}</aside>
  );
};
