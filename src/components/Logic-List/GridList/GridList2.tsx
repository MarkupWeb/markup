type GridListProps<T> = {
    records: T[];
    renderItem: (record: T) => JSX.Element;
  };
  
  const GridList2 = <T extends { id?: number }>({
    records,
    renderItem,
  }: GridListProps<T>) => {
    const renderList =
      records.length > 0 ? (
        records.map((record) => (
          <div
            key={record.id}
            className="flex items-center justify-center gap-2"
            
          >
            {renderItem(record)}
          </div>
        ))
      ) : (
        <div className="">Loading....</div>
      );
    return (
      <div className="grid grid-cols-4 sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-8 lg:px-8 pt-5">
        {renderList}
      </div>
    );
  };
  
  export default GridList2;
  