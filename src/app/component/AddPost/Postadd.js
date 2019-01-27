import React from 'react';

export const AddPost = (props) =>{    
    let { data,actions } = props,
        { control }      = actions.state; 

    let onstate = (control === 'Add')?actions.handleSubmit:actions.handleSubmitEdit; 
    return(
        <div className="col-md-6">
            <div className="box box-info">
                <div className="box-header with-border">
                    <h3 className="box-title"><i className="fa fa-plus"></i> Add Post Data</h3>
                </div>
                <form role="form" onSubmit={onstate}>  
                    <div className="box-body">
                        <div className="form-group">
                            <label>userId</label>
                            <select required name ="userId" className="form-control" ref={actions.select}>
                                {
                                    data.map((item,index)=>{                                        
                                        return(
                                            <option key={index} value={item.id}>{item.id}.) {item.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Title</label>
                            <input required name="title" className="form-control" placeholder="Title..." ref={actions.title}/>
                        </div>
                        <div className="form-group">
                            <label>Body</label>
                            <input required name="body" className="form-control" placeholder="Body..." ref={actions.body}/>
                        </div>                                    
                    </div>
                    <div className="box-footer">
                        <button type="submit" className="btn margin btn-info">{control} Posts</button>
                        {(control === 'Edit')?
                        <button onClick={()=>actions.handleCancel()} type="button" className="btn margin btn-warning">Cancel Action</button>:''}
                    </div>
                </form>
            </div>                       
        </div>
    )
}