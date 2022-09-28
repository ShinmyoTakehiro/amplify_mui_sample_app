
export type BudgetObject = {
  title: string,
  money: number,
  percent: number,
  caption: string,
  icon: string,
  iconColor: string,
}

// タブの切り替えパネル
export type TabPanelProps = {
	children?: React.ReactNode;
	index: number;
	value: number;
};