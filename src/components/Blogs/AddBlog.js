import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AddBlogAction} from '../../Actions/BlogActions';

class CreateBlog extends Component{
    state={
        title:'',
        blog:''
    }
    handleInput=(event)=>{
        const {name, value} = event.target
        this.setState({[name]: value});
    }

    handleAddBlog=(event)=>{
        event.preventDefault();
        const {title, blog} = this.state
        this.props.AddBlogAction({title, blog})
        .then(this.props.FetchBlogsAction)
    }
    render(){
        const {title, blog} = this.state
        return(
            <div>
        <button type="button" className="btn btn-primary addbtn" data-toggle="modal" data-target="#exampleModal">
        <i className="fa fa-plus-circle"/> Create a blog
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add a blog post</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
            <form onSubmit={this.handleAddBlog}>
                <div className="form-group">
            <label htmlFor="formGroupExampleInput">Enter Title</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Life challenges"
            name="title" value={title} onChange={this.handleInput}/>
            </div>
            <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Blog post</label>
            <input type="text" className="form-control" id="formGroupExampleInput2"
            placeholder="My story" name="blog" value={blog} onChange={this.handleInput}/>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal" id="CloseAddModal">Close</button>
        <button type="submit" className="btn btn-success">Publish Blog</button>
      </div>
        </form>
      </div>
      
    </div>
  </div>
</div>
            </div>
        )
    }
}
export default connect (null, {AddBlogAction})(CreateBlog);