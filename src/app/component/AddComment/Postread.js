import React from 'react';

export const ReadPost = (props)=>{   
    let {
        data,
        actions
    } = props;        
    return(                    
        <div className="col-md-6">
            <div className="box box-info">
                <div className="box-header with-border">
                    <h3 className="box-title">
                        Data Post
                    </h3>
                </div>
                <div className="box-body table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th widt="5px">#</th>
                                <th>UserID</th>                                
                                <th>Body</th>
                                <th width="20%" className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (data.length === 0)?<tr><td colSpan="5" className="text-center">Data not found</td></tr>:
                                data.map((item,index)=>{                                                                                                                                                    
                                    let {
                                        id,
                                        postId,                                   
                                        body
                                    } = item;                         
                                    return(
                                        <tr key={ index }>
                                            <td>{ id }</td>
                                            <td>{ postId }</td>                                            
                                            <td>{ body }</td>
                                            <td className="text-center">
                                                <button onClick={()=>actions.handleEdit(
                                                    id,postId,body
                                                )} data-toggle="tooltip" title="Edit" className="btn margin btn-sm btn-success"><i className="fa fa-edit"></i></button>
                                                <button onClick={()=>actions.handleSubmitDelete(
                                                    id,postId,body
                                                )} data-toggle="tooltip" title="Edit" className="btn margin btn-sm btn-danger"><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>                   
    )    
}