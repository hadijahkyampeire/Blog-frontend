import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ShareBlog from './ShareBlog';
import {FetchPublishedBlogAction} from '../../Actions/BlogActions';


const PublicBlog=(props)=>(
    <div className="blogcard">
    <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><strong>Title</strong>:{props.title}</h5>
        <p class="card-text"><strong>Blog</strong>: {props.blog} </p>
        <p class="card-text"><strong>Owner</strong>: {props.created_by} </p>
        <p class="card-text"><strong>Created_on</strong>: {props.created_on} </p>
        <Link
            className="btn btn-sm btn-success card-link"
            data-toggle="modal"
            data-target={`#share_blog${props.id}`}
            to="#"><i className="fa fa-share" /> Share</Link>
      </div>
    </div>
  </div>
  </div>
  <ShareBlog id={props.id} title={props.title} blog={props.blog}/>
  </div>
)

class PublicBlogs extends Component{
    componentDidMount(){
        this.props.FetchPublishedBlogAction()
    }
    render(){
        const {blogs} = this.props;
        
        const items = blogs.blog_items
        if(!items) {
            return(
                <div>
                </div>
            );
        }else {
            const blog_items = items.map(blog=> 
                <PublicBlog 
                id={blog.id}
                blog={blog.blog}
                title={blog.title}
                created_by={blog.created_by}
                created_on={blog.date_created}
                key={blog.id}
                getpublicblogs={this.props.FetchPublishedBlogAction}/>);
        return(
            <div>
                <div>
                <span>Blog Posts</span>
                {blog_items}
                </div>
            </div>
        );
    }
}
}

const mapStateToProps =(state) =>{
    return{
        // global state
        blogs:state.blogs
    }
}
export default connect(mapStateToProps, {FetchPublishedBlogAction})(PublicBlogs);