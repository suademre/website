import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (endpoint: string) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3004/${endpoint}`);
      setData(response.data);
    };

    fetchData();
  }, [endpoint]);
  return { data };
};

export default useFetchData;
