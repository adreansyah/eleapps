import React from 'react'; 
import { AlbumsPost } from '../../configs/config';
import MDSpinner from "react-md-spinner";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


class Albums extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data:[],
            loading:true,
            photoIndex: 0,
            isOpen: false,
        }
    }
    componentWillMount(){
        console.log('MOUNTING COMPONENT TO DOM');        
    }

    componentWillUnmount(){
        console.log('REMOVE COMPONENT FROM DOM');
    }

    render(){
        let { photoIndex, isOpen, loading, data } = this.state;
        let {name} = this.props.location.state;       
        let images =[];
        data.forEach(element => {        
            images.push(element.url);
        });
        console.log(images);       
        return(
            <section className="content">
                 <div className="col-md-12">
                    <div className="box box-success">
                        <div className="box-header with-border">
                            <h3 className="box-title"><i className="fa fa-folder"></i> User Albums</h3>
                        </div>
                        <div className="box-body">
                            <ul className="timeline">
                                <li className="time-label">
                                    <span className="bg-olive"><i className="fa fa-user"></i> {name}</span>
                                </li>                          
                                <li>
                                    <i className="fa fa-camera bg-olive"></i>
                                    <div className="timeline-item">                                            
                                        <h3 className="timeline-header"><b>Albums</b></h3>                                        
                                        <div className="timeline-body">
                                        {
                                            (loading=== true)?                                            
                                            <div className="loader text-center"><MDSpinner/></div>:                                                                                                                             
                                            data.map((item,index)=>{                                                
                                                return(
                                                    <img key={index} onClick={() => this.setState({ isOpen: true })} src={item.thumbnailUrl} alt="..." className="margin-x img-bordered cursor"/>                                            
                                                )
                                            })
                                        }
                                        {isOpen && (
                                            <Lightbox
                                                mainSrc={images[photoIndex]}
                                                nextSrc={images[(photoIndex + 1) % images.length]}
                                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                                onCloseRequest={() => this.setState({ isOpen: false })}
                                                imageTitle="jangkrik"
                                                onMovePrevRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                                })
                                                }
                                                onMoveNextRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + 1) % images.length,
                                                })
                                                }
                                            />
                                            )}
                                        </div>                                        
                                    </div>                                        
                                </li>                                                                                                                 
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )        
    }

    componentDidMount(){
        let {id} = this.props.location.state;
        AlbumsPost(id).then((res) => setTimeout(() => { 
            this.setState(() => ({
                data:res,
                loading: false
            }))
        },2000));    
    }
}

export default Albums; 