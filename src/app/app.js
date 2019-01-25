import React from 'react'; 
import Header from './component/Header';
import Body from './component/Body';
import { Router, Route, Link, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
let Base_Url = window.location.href;
let arr = Base_Url.split("/");
let Url_Result = arr[0] + "//" + arr[2];

class HelloWorld extends React.Component {
  render() {    
    return (
      <Router history={history}>        
        <div className="wrapper">                  
          <Header history={history}/>  
          <Body />              
        </div>
      </Router>
    )
  }
}

export default HelloWorld; 