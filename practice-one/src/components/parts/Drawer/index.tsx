import '@/components/parts/Drawer/Drawer.css';

/* Types */
interface IDrawer {
  additionalClass?: string;
  children: JSX.Element;
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
