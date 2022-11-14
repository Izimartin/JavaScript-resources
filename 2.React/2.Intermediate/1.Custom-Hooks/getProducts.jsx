// import { useState } from "react";
// import memoizePromiseFn from "../lib/memoizeFn";
import useFetch from "./useFetch";

export default function JsonData() {

  const url = 'https://tecnoelectrocomercioonline.com/api/productos/';

  // const corsConfig = {
  //   "method": "GET",
  //   'mode': 'no-cors',
  //   "Content-Type": "application/json",
  //   'headers': {
  //     'Access-Control-Allow-Origin': '*',
  //   }
  // }

  useFetch(url);

}

  // let cachedFetchTodos = memoizePromiseFn(fetchFn);
  // cachedFetchTodos(fetchFn);
  // cachedFetchTodos(id)
  // .then((response) => {
  //   dataEl.innerText = JSON.stringify(response, 2, null);
  // })
  // .catch((error) => {
  //   dataEl.innerText = "ERROR" + JSON.stringify(error);
  // });
