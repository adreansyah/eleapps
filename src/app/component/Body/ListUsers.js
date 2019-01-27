import React from 'react'; 
import MDSpinner from "react-md-spinner";

export const Listusers = (props) =>{              
    let {data,actions} = props; 
    let {loading} = actions.state;  
    // console.log(loading);    
    return(                                           
        <div className="col-md-6">                                                                                                                                                                                             
            <div className="box box-info">
                <div className="box-header with-border">
                    <h3 className="box-title"><i className="fa fa-users"></i> User Lists</h3>
                </div>
                <div className="box-body table-responsive box-post">
                {
                    (loading=== true)?<div className="text-center"><MDSpinner/></div>
                    :<table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Username</th>  
                                <th>website</th>  
                                <th className="text-center">Button View</th>                                
                            </tr>
                        </thead> 
                        <tbody>
                            {
                                data.map((item, index) => {                                    
                                    return(
                                        <tr key={ index }>
                                            <td>{ item.id }</td>
                                            <td>{ item.name }</td>
                                            <td>{ item.username }</td>  
                                            <td>{ item.website }</td>                                     
                                            <td width="30%" className="text-center">
                                                <button onClick={()=> actions.HandleClickPost(item.id,item.name)} className="btn btn-sm margin btn-flat btn-info" data-toggle="tooltip" title="Check Post">
                                                    <i className="fa fa-comment"></i>
                                                </button>
                                                <button onClick={()=> actions.HandleClickAlbums(item.id,item.name)} className="btn btn-sm margin btn-flat btn-success" data-toggle="tooltip" title="Check Albums">
                                                    <i className="fa fa-folder"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>                                               
                    </table>
                }                    
                </div>
            </div>
        </div>
    )
}