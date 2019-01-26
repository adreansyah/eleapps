import React from 'react'; 
import { ListUsers, PostbyUsers, AlbumsbyUsers, CommentbyPosts } from '../../configs/config';
import { Listusers }    from './ListUsers';
import { Listeachpost } from './Listeachpost';
import { Listeachalbums } from './Listeachalbums';

class Body extends React.Component {
    constructor() {
        super();       
        this.state = {
            data:[], 
            post:{}, 
            albums:{},
            comment:{},
            showpost:false,
            showalbums:false,    
        };                    
        this.HandleClickPost       = this.HandleClickPost.bind(this);
        this.HandleClickAlbums     = this.HandleClickAlbums.bind(this);
        this.HandleClickDetailPost = this.HandleClickDetailPost.bind(this);
    }        

    componentWillMount(){
        console.log('Mounting Component to DOM');
    }       

    componentWillUnmount(){
        console.log('Unmounting component From DOM')        
    }

    render() {                                                             
        let { 
            data,
            post,
            albums,
            comment,
            showpost,
            showalbums
        } = this.state;                   
        return (
            <section className="content">                      
                <div className="row margin">                                                                                                  
                    <Listusers data={data} actions={this} />  
                    {
                        (showpost === false)?'':<Listeachpost data={post} actions={this}/>                                             
                    }                                                       
                    {
                        (showalbums === false)?'':<Listeachalbums data={albums} />
                    }                              
                    <ListComments data={comment}/>                      
                </div>                       
            </section>
        )
    }

    HandleClickPost(id,username){       
        PostbyUsers(id).then((res) => this.setState(
            {
                post:{
                    data:res,
                    name:username
                }, 
                showpost:true,  
                showalbums:false,                                  
            }
        ));        
    }

    HandleClickAlbums(id,username){       
        AlbumsbyUsers(id).then((res) => this.setState(
            {
                albums:{
                    data:res,
                    name:username
                }, 
                showpost:false, 
                showalbums:true,                                   
            }
        ));        
    }

    HandleClickDetailPost(id,title,body,name){               
        CommentbyPosts(id).then((res) => this.setState(
            {
                comment:{
                    data:res,
                    title:title,
                    body:body,
                    name:name
                },                                                
            }
        ));                      
    }

    componentDidMount(){      
        ListUsers().then((res) => this.setState(
            {
                data: res,                                    
            }
        ));               
    }
}

const ListComments = (props) =>{
    let {
        data,       
        name,
        title,
        body
    } = props.data;         
    console.log(props);
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
                </div>
                <div className="box-footer box-comments">
                    
                </div>
            </div>
        </div>
    )
}

export default Body; 
