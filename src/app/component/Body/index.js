import React from 'react'; 
import MDSpinner from "react-md-spinner";
import { ListUsers, PostbyUsers, AlbumsbyUsers, CommentbyPosts } from '../../configs/config';
import { Replacingstring }from '../../configs/MainFunctions'; 
import { Listusers }      from './ListUsers';
import { Listeachpost }   from './Listeachpost';
import { Listcomments }   from './Listcomments';
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
            showcomments:false, 
            loading:true, 
            loadingpost:false,
            loadingalbums:false,      
            indikator:false,         
        };                    
        this.HandleClickPost         = this.HandleClickPost.bind(this);
        this.HandleClickAlbums       = this.HandleClickAlbums.bind(this);
        this.HandleClickDetailPost   = this.HandleClickDetailPost.bind(this);
        this.HandleClickDetailAlbums = this.HandleClickDetailAlbums.bind(this);
        this.HandleClickAddPost      = this.HandleClickAddPost.bind(this);
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
            showalbums,
            showcomments,        
            loadingpost,
            loadingalbums,
            indikator
        } = this.state;       
        console.log(indikator);                           
        return (
            <section className="content">                      
                <div className="row">            
                    <div className="col-md-12 col-md-offset3">
                        <div className="margin text-center">
                            <button onClick={()=>this.HandleClickAddPost()} className="margin btn btn-danger">Add Posting</button>
                            <button className="margin btn btn-warning">Add Comment</button>
                        </div>                    
                    </div>                                                                                      
                    <Listusers data={data} actions={this} />                                                         
                    {
                        (indikator === true)?<Indikator/>:''
                    }
                    {
                        (loadingpost === true)?
                        <div className="col-md-6">
                        <div className="loader text-center"><MDSpinner/></div></div>:
                        (showpost === false)?'':                        
                        <Listeachpost data={post} actions={this}/>                                             
                    }                                                       
                    {
                        (loadingalbums === true)?
                        <div className="col-md-6">
                        <div className="loader text-center"><MDSpinner/></div></div>:
                        (showalbums === false)?'':
                        <Listeachalbums data={albums} actions={this} />
                    } 
                    {
                        (showcomments === false)?'':
                        <Listcomments data={comment}/>
                    }                                                                       
                </div>                       
            </section>
        )
    }

    HandleClickPost(id,username){   
        let {history} = this.props;                
        history.push({            
            search: `?user-post=${id}`,
        });
        this.setState(function(previousState) {
            return {               
                showpost:true,  
                showalbums:false,  
                showcomments:false, 
                loadingpost: !previousState.loadingpost,
                indikator:false
            };
        });              
        PostbyUsers(id).then((res) => setTimeout(() => { 
            this.setState(() => ({
                post:{
                    data:res,
                    name:username
                },                   
                loadingpost: false
            }))
        },2000));                
    }

    HandleClickAlbums(id,username){  
        let {history} = this.props;        
        history.push({          
            search: `?user-albums=${id}`,
        });
        this.setState(function(previousState) {
            return {               
                showpost:false, 
                showalbums:true, 
                showcomments:false, 
                loadingalbums: !previousState.loadingalbums,
                indikator:false
            };
        });      

        AlbumsbyUsers(id).then((res) => setTimeout(() => { 
            this.setState(() => ({
                albums:{
                    data:res,
                    name:username
                },               
                loadingalbums:false 
            }))
        },2000));               
    }

    HandleClickDetailPost(id,title,body,name){   
        let {history} = this.props;                     
        history.push({          
            search: `?user-detail-post=${id}`,
        });              
        CommentbyPosts(id).then((res) => this.setState(
            {
                comment:{
                    data:res,
                    title:title,
                    body:body,
                    name:name
                },     
                showcomments:true,                                            
            }
        ));                      
    }

    HandleClickDetailAlbums(id,name){               
        let {history} = this.props;                     
        history.push({
            pathname:'albums',          
            search: `?${Replacingstring(name)}=${id}`,
            state: { 
                id: id,
                name: name
            }
        });               
    }

    HandleClickAddPost(){     
        let {history} = this.props;                     
        history.push({
            pathname:'add',            
        });     
    }

    componentDidMount(){      
        ListUsers().then((res) => setTimeout(() => { 
            this.setState(() => ({
                data:res,
                loading: false,
                indikator:true
            }))
        },2000));                     
    }
}

const Indikator =()=>{
    return(
        <div className="col-md-6">
            <div className="border-indicator">
                <div className="center-indikator">
                    <p>Welcome !!!</p>
                    <p>Click Button View To Show Detail</p>
                </div>
            </div>
        </div>
    )
}

export default Body; 
