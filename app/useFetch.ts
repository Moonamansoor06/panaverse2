import { useState, useEffect } from 'react';

function useFetch(url:string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
      setLoading(true)
      setData(null);
      setError(false);
    
    fetch(url, )
      .then((res:any) => {
          setLoading(false);
          //checking for multiple responses for more flexibility 
          //with the url we send in.
          res.data.content && setData(res.data.content);
          res.content && setData(res.content);
      })
      .catch((err:boolean) => {
          setLoading(false)
          setError(true)
      })
     
  }, [url])

  return { data, loading, error }
}
export default useFetch