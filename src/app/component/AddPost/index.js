import React from 'react'; 
import { ListUsers, AddPostUsers, EditPostUsers, DeletePostUsers, ListPostUsers } from '../../configs/config';
import { AddPost } from './Postadd';
import { ReadPost } from './Postread';

class Postcrud extends React.Component {
    constructor(){
        super();
        this.state = {   
            id:'',  
            control:'',               
            userData:[],
            postData:[],            
        }
        this.title  = React.createRef();
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
        ListPostUsers().then((res) => { 
            this.setState(() => ({
                postData:res
            }))
        });       
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
            this.select.current.value = 1;
            this.title.current.value  = '';
            this.body.current.value   = ''; 
        })
    }

    handleCancel(){
        this.setState(() => ({           
            control:'Add'
        }))
        this.select.current.value = 1;
        this.title.current.value  = '';
        this.body.current.value   = ''; 
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

export default Postcrud;