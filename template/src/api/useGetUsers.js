import { useMemo, useState } from "react";
import { tempApi } from "./index";

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState([]);

  const itemList = useMemo(() => {
    return item.map((item) => {
      return "";
    });
  }, [item]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await tempApi();
      setItem(res);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return { item, getData, isLoading, itemList };
};
