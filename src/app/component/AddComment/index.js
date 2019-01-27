import React from 'react'; 
import { ListPostUsers, ListComments, AddPostComments, EditPostComments, DeletePostComments } from '../../configs/config';
import { AddPost } from './Postadd';
import { ReadPost } from './Postread';

class Postcomment extends React.Component {
    constructor(){
        super();
        this.state = {   
            id:'',  
            control:'',               
            userData:[],
            postData:[],            
        }        
        this.body   = React.createRef();
        this.select = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRead   = this.handleRead.bind(this); 
        this.handleEdit   = this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmitEdit   = this.handleSubmitEdit.bind(this);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
    }      

    render(){        
        let {userData,postData} = this.state                   
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
        let postId = this.select.current.value,            
            body   = this.body.current.value,            
            parameter = JSON.stringify({                               
                body: body,
                postId: postId
            });    
        console.log(parameter);
        AddPostComments(parameter).then(()=>{
            this.handleRead();
            this.select.current.value = 1;            
            this.body.current.value   = ''; 
        })        
    }    

    handleRead(){     
        ListComments().then((res) => { 
            this.setState(() => ({
                postData:res
            }))
        });       
    }

    handleEdit(id,postId,body){             
        this.setState(() => ({
            control:'Edit',
            id:id
        }));
        this.select.current.value = postId;        
        this.body.current.value   = body;        
    }

    handleSubmitEdit(event){               
        event.preventDefault();              
        let postId = this.select.current.value,            
            body   = this.body.current.value,
            id     = this.state.id,
            parameter = JSON.stringify({
                id:id,              
                body: body,
                postId: postId
            });                               
        EditPostComments(parameter,id).then((res)=>{
            this.handleRead();
        })        
    }

    handleSubmitDelete(id){                                                             
        DeletePostComments(id).then((res)=>{
            this.handleRead();
            this.select.current.value = 1;            
            this.body.current.value   = ''; 
        })
    }

    handleCancel(){
        this.setState(() => ({           
            control:'Add'
        }))
        this.select.current.value = 1;        
        this.body.current.value   = ''; 
    }
    
    componentDidMount(){
        this.handleRead();
        ListPostUsers().then((res)=>{
            this.setState(() => ({
                userData:res,
                control:'Add'
            }))
        })
    }  
}

export default Postcomment;