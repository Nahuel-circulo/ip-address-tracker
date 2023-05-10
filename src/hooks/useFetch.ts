import { useEffect, useState } from "react";


export const useFetch = <T>(url: string) => {

  const [state, setState] = useState<{ data: T | null, isLoading: boolean, error: boolean }>({
    data: null,
    isLoading: true,
    error: false
  })

  const getFetch = async () => {

    setState({ ...state, isLoading: true, error: false })

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      error: false
    })

    if (data.code === 422) {

      setState({
        data: null,
        isLoading: false,
        error: true
      })
    }



  }

  useEffect(() => {
    getFetch()
  }, [url])


  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error
  }
};

