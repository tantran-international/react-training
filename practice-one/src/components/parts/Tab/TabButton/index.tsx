import '@/components/parts/Tab/TabButton/TabButton.css'

/* Types */
interface ITabButton {
  title: string;
  isActiveTab: boolean;
  index: number;
  onTabClick: (index: number) => void;
}
export const TabButton = ({
  title,
  isActiveTab,
  index,
  onTabClick,
}: ITabButton) => {
  const handleTabClick = () => {
    onTabClick(index);
  };
  return (
    <button
      className={`tab-item ${isActiveTab
        ? 'tab-item-active'
        : ''
      }`}
      type='button'
      onClick={handleTabClick}
    >
      {title}
    </button>
  );
};
