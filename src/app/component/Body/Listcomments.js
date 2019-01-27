import React from 'react'; 

export const Listcomments = (props) =>{
    let {
        data,       
        name,
        title,
        body
    } = props.data;             
    return (
        <div className="col-md-8 col-md-offset-2">
            <div className="box box-widget">
                <div className="box-header with-border">
                    <div className="user-block">
                        <img className="img-circle" src="https://randomuser.me/api/portraits/lego/7.jpg" alt="User Image"/>
                        <span className="username">{name}</span>
                        <span className="description">Shared publicly - 7:30 PM Today</span>
                    </div>
                </div>
                <div className="box-body">
                    <p>{ title }</p>
                    <p>{ body }</p>
                    <span className="pull-right text-muted">
                        <i className="fa fa-comments"></i> { data.length } comments
                    </span>
                </div>
                <div className="box-footer box-comments">  
                    {
                        (data === undefined)?false:                            
                        data.map((item,index)=>{                         
                            return (
                                <div key={index} className="box-comment">
                                    <img className="img-circle img-sm" src="https://randomuser.me/api/portraits/lego/6.jpg" alt="User Image" />
                                    <div className="comment-text">
                                        <span className="username">
                                            {item.email}
                                            <span className="text-muted pull-right">8:03 PM Today</span>                                
                                        </span>
                                        <p>{ item.name }</p>
                                        <p>{ item.body }</p>
                                    </div>
                                </div>
                            )
                        })
                    }                                  
                </div>
            </div>
        </div>
    )
}