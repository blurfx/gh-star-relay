import { useState } from 'react';

const useSearchParams = (): [URLSearchParams, (params: URLSearchParams) => void] => {
  const [params, setParams] = useState<URLSearchParams>(new URLSearchParams(window.location.search));

  const changeSearchParams = (newSearchParam: URLSearchParams) => {
    history.pushState(newSearchParam.toString(), '', `${window.location.pathname}?${newSearchParam.toString()}`);
    setParams(newSearchParam);
  };

  return [params, changeSearchParams];
};

export default useSearchParams;