import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CreateBlog from './AddBlog';
import EditBlog from './EditBlog';
import DeleteBlog from './DeleteBlog';
import {FetchBlogAction, DeleteBlogAction} from '../../Actions/BlogActions';

const Blog=(props)=>(
    <div className="blogcard">
    <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><strong>Title</strong>{props.title}</h5>
        <p class="card-text"><strong>Blog</strong>: {props.blog} </p>
        <p class="card-text"><strong>Owner</strong>: {props.created_by} </p>
        <p class="card-text"><strong>Created_on</strong>: {props.created_on} </p>
            <Link
            className="btn btn-sm btn-primary card-link"
            data-toggle="modal"
            data-target={`#edit_blog${props.id}`}
            to="#"><i className="fa fa-edit" /> Edit</Link>
            <Link
            className="btn btn-sm btn-danger card-link"
            data-toggle="modal"
            data-target={`#delete_blog${props.id}`}
            to="#"><i className="fa fa-trash" /> Delete</Link>
      </div>
    </div>
  </div>
  </div>
  <DeleteBlog id={props.id} title={props.title} blog={props.blog} delete={props.delete} getblogs={props.getblogs}/>
  <EditBlog id={props.id} title={props.title} blog={props.blog} />
  </div>
)

class Dashboard extends Component{
    componentDidMount(){
        this.props.FetchBlogAction()
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
                <Blog 
                id={blog.id}
                blog={blog.blog}
                title={blog.title}
                created_by={blog.created_by}
                created_on={blog.date_created}
                key={blog.id}
                delete={this.props.DeleteBlogAction}
                getblogs={this.props.FetchBlogAction}/>);
        return(
            <div>
                <CreateBlog/>
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
export default connect(mapStateToProps, {FetchBlogAction, DeleteBlogAction})(Dashboard);