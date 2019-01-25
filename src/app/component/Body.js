import React from 'react'; 


class Body extends React.Component {
    constructor() {
        super();       
        this.state = {
            data:[],                  
        };             
    }    

    render() {                                                      
        return (
            <section className="content">                      
                <div className="row margin">                                                                                                  
                    <Listusers data={this}/>                                                
                </div>                       
            </section>
        )
    }
}

const Listusers = (props) =>{      
    return(                                           
        <div className="col-md-6">                                                                                                                                                                                             
            capung
        </div>
    )
}

export default Body; 
