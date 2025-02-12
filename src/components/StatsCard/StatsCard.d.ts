export interface ITab {
  title: string;
  icon: string;
  data: number;
  colorClass: string;
}

export interface IStatsCardProps {
  tabs: ITab[];
}
