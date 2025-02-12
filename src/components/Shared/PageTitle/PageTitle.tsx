import { IPageTitleProps } from "./PageTitle.d";

const PageTitle: React.FC<IPageTitleProps> = ({ title }) => {
  return <h1 className="font-medium text-xl">{title}</h1>;
};

export default PageTitle;
