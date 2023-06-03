import { OnedriveFile } from "@lib/onedriveApi";
import Button from "./Button";
import { FC } from "react";

interface DataLoadButtonProps {
  data: OnedriveFile[];
  handleLoadMore: () => {};
  isLoadMore: boolean;
  buttonDisable: boolean;
}

const DataLoadButton: FC<DataLoadButtonProps> = ({
  data,
  handleLoadMore,
  isLoadMore,
  buttonDisable,
}) => {
  return (
    <div className="flex justify-center my-6">
      {data?.length > 16 ? (
        <Button
          variant="ghost"
          onClick={handleLoadMore}
          isLoading={isLoadMore}
          disabled={buttonDisable}
          className=" font-semibold px-10 py-0 framer-motion bg-slate-200 dark:bg-slate-800 shadow-md"
        >
          {buttonDisable ? "No More" : " Load More"}
        </Button>
      ) : null}
    </div>
  );
};

export default DataLoadButton;
