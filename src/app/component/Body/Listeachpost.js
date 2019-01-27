import React from 'react'; 

export const Listeachpost = (props) =>{      
    let {
        data,       
        name
    } = props.data;       
    let {actions} = props;    
    return(  
        <div className="col-md-6">
            <div className="box box-info">
                <div className="box-header with-border">
                    <h3 className="box-title"><i className="fa fa-comment"></i> User Post</h3>
                </div>
                <div className="box-body box-post">
                    <ul className="timeline">
                        <li className="time-label">
                            <span className="bg-aqua"><i className="fa fa-user"></i> {name}</span>
                        </li>
                        {
                            (data === undefined)?false:                            
                            data.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <i className="fa fa-comment bg-aqua"></i>
                                        <div className="timeline-item">                                            
                                            <h3 className="timeline-header">{item.title}</h3>
                                            <div className="timeline-body">
                                                {item.body}                                                
                                            </div>
                                            <div className="timeline-footer">
                                                <button onClick={()=> actions.HandleClickDetailPost(item.id,item.title,item.body,name)} className="btn btn-primary btn-xs">Click Detail !!!</button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }                                                
                    </ul>
                </div>
            </div>
        </div>
    );
}