import React from 'react'; 
import Header from './component/Header';
import Body from './component/Body';
import Albums from './component/Albums';
import Postcrud from './component/AddPost'
import Postcomment from './component/AddComment'
import { Router, Route, Link, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

class HelloWorld extends React.Component {
  render() {    
    return (
      <Router history={history}>        
        <div className="wrapper">                  
          <Header history={history}/>  
          <Switch>                
              <Route exact path="/" component={()=><Body history={history}/>} /> 
              <Route exact path="/albums" component={Albums} /> 
              <Route exact path="/add" component={()=><Postcrud history={history}/>} /> 
              <Route exact path="/add-comment" component={()=><Postcomment history={history}/>} /> 
              <Route path="/:page" component={()=><Body history={history}/>} />               
          </Switch>          
        </div>
      </Router>
    )
  }
}

export default HelloWorld; 