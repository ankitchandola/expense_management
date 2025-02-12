const Tabs: React.FC<{ title: string; isActive?: boolean }> = ({
  title,
  isActive,
}) => {
  return (
    <div className={`flex cursor-pointer`}>
      <p
        className={`py-2.5 md:px-4 px-2 ${
          isActive ? "bg-blue-950 text-white" : ""
        }
      `}
      >
        {title}
      </p>
    </div>
  );
};

export default Tabs;
