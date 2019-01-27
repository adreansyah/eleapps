import React from 'react';
export const Listeachalbums = (props)=>{    
    let {
        data,
        name
    } = props.data; 
    let {actions} = props;
    return(
        <div className="col-md-6">
            <div className="box box-success">
                <div className="box-header with-border">
                    <h3 className="box-title"><i className="fa fa-folder"></i> User Albums</h3>
                </div>
                <div className="box-body box-post">
                    <ul className="timeline">
                        <li className="time-label">
                            <span className="bg-olive"><i className="fa fa-user"></i> {name}</span>
                        </li>
                        {
                            (data === undefined)?false:                            
                            data.map((item,index)=>{                                
                                return (
                                    <li key={index}>
                                        <i className="fa fa-folder bg-olive"></i>
                                        <div className="timeline-item">                                            
                                            <h3 className="timeline-header"><b>Albums</b></h3>
                                            <div className="timeline-body">{item.title}</div>
                                            <div className="timeline-footer">
                                                <button onClick={()=>actions.HandleClickDetailAlbums(item.userId,name)} className="btn btn-success btn-xs">Click Albums !!!</button>
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
    )
}