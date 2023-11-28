import '@/components/parts/Drawer/Drawer.css';

/* Types */
interface IDrawer {
  additionalClass?: string;
  children: any;
}

export const Drawer = ({
  additionalClass,
  children
}: IDrawer) => {
  return (
    <aside className={`drawer drawer-${additionalClass}`}>
      {children}
    </aside>
  );
};
