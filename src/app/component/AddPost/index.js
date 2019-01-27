import React from 'react'; 
import { ListUsers, AddPostUsers, EditPostUsers, ListPostUsers, DeletePostUsers } from '../../configs/config';

class Postcrud extends React.Component {
    constructor(){
        super();
        this.state = {   
            id:'',  
            control:'',               
            userData:[],
            postData:[]
        }
        this.title  = React.createRef();
        this.body   = React.createRef();
        this.select = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRead   = this.handleRead.bind(this); 
        this.handleEdit   = this.handleEdit.bind(this);
        this.handleSubmitEdit   = this.handleSubmitEdit.bind(this);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
    }          

    render(){      
        console.log(this.state.control)  
        let {userData,postData,control} = this.state            
        return (
            <section className="content">
                <div className="row">     
                    <AddPost  data={userData} actions={this}/>
                    <ReadPost data={postData} actions={this}/>                   
                </div>
            </section>
        )                    
    }

    handleSubmit(event){        
        event.preventDefault();           
        let userId = this.select.current.value,
            title  = this.title.current.value,
            body   = this.body.current.value,
            parameter = JSON.stringify({
                title: title,
                body: body,
                userId: userId
            });         
        AddPostUsers(parameter).then(()=>{
            this.handleRead();
            this.select.current.value = 1;
            this.title.current.value  = '';
            this.body.current.value   = ''; 
        })        
    }    

    handleRead(){     
        ListPostUsers().then((res) => setTimeout(() => { 
            this.setState(() => ({
                postData:res
            }))
        },2000));       
    }

    handleEdit(id,userId,title,body){     
        this.setState(() => ({
            control:'Edit',
            id:id
        }));
        this.select.current.value = userId;
        this.title.current.value  = title;
        this.body.current.value   = body;        
    }

    handleSubmitEdit(event){               
        event.preventDefault();          
        let userId = this.select.current.value,
            title  = this.title.current.value,
            body   = this.body.current.value,
            id     = this.state.id,
            parameter = JSON.stringify({
                id:id,
                title: title,
                body: body,
                userId: userId
            });  
        EditPostUsers(parameter,id).then((res)=>{
            this.handleRead();
        })        
    }

    handleSubmitDelete(id){                                                             
        DeletePostUsers(id).then((res)=>{
            this.handleRead();
        })
    }
    
    componentDidMount(){
        this.handleRead();
        ListUsers().then((res)=>{
            this.setState(() => ({
                userData:res,
                control:'Add'
            }))
        })
    }  
}

const AddPost = (props) =>{    
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
                                        console.log(item);
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
                        <button type="submit" className="btn btn-info">{control} Posts</button>
                    </div>
                </form>
            </div>                       
        </div>
    )
}

const ReadPost = (props)=>{   
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
                                <th>no</th>
                                <th>UserID</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th width="20%" className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item,index)=>{                                           
                                    let {
                                        id,
                                        userId,
                                        title,
                                        body
                                    } = item;                         
                                    return(
                                        <tr key={ index }>
                                            <td>{ id }</td>
                                            <td>{ userId }</td>
                                            <td>{ title }</td>
                                            <td>{ body }</td>
                                            <td className="text-center">
                                                <button onClick={()=>actions.handleEdit(
                                                    id,userId,title,body
                                                )} data-toggle="tooltip" title="Edit" className="btn margin btn-sm btn-success"><i className="fa fa-edit"></i></button>
                                                <button onClick={()=>actions.handleSubmitDelete(
                                                    id,userId,title,body
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
export default Postcrud;