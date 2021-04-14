import { useEffect, useState } from 'react'

const UseFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPanding, setPanding] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const abortCont = new AbortController();

            fetch(url, { signal: abortCont.signal })
            .then(res => {
               if(!res.ok){
                  throw Error('could not find fetch');
               }
                return res.json();
            })
            .then(data => {
                setData(data)
                setPanding(false) 
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log("fetch aborted");
                } else {
                    console.log(err.message)
                    setError(err.message);
                    setPanding(false)
                }
            })
           return () => abortCont.abort();
    },[url]);

    return  { data, isPanding, error}
  
}

export default UseFetch
