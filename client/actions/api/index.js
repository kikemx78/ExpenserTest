import 'es6-promise';
import fetch from 'isomorphic-fetch'


const testAsync = (id, source, keyword) => {
 
  let URL = 'http://www.omdbapi.com/?';
  
  switch(source) {
    case 2:
      URL += 's=' + keyword + '&page=' + id;
      break;
    case 1:
      URL += 's=' + keyword;
      break;
    case 0:
      URL += 'i=' + id + '&plot=full';
      break;
    default:
      console.log('none');
  }

  let request = new Request(URL, {
    method: 'GET',
    mode: 'cors'
  });

  return fetch(request);
  
}

export default {
  testAsync
};