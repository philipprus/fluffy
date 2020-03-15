import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDataApi = (initialUrl, initialData) => {
      const [data, setData] = useState(initialData);
      const [url, setUrl] = useState(initialUrl);
      const [fetch, setFetch] = useState(0);
      const [isLoading, setIsLoading] = useState(false);
      const [isError, setIsError] = useState(false);
      useEffect(() => {
        const fetchData = async () => {
          setIsError(false);
          setIsLoading(true);
          try {
            const result = await axios(url);
            setData(result.data);
          } catch (error) {
            setIsError(true);
          }
          setIsLoading(false);
        };
        fetchData();
      }, [url, fetch]);
      return [{ data, isLoading, isError }, setUrl, fetch, setFetch];
    };
    

  export const consoleLog = (text) => {
    process.env.NODE_ENV !== "production" && console.log(text);
  }

 
 

 

 
