import React, {Component} from 'react';
import {connect} from 'react-redux';
import {EditBlogAction, FetchBlogAction} from '../../Actions/BlogActions';

class EditBlog extends Component{
    state={
        title:'',
        blog:''
    }
    componentDidMount(){
        this.setState({title:this.props.title});
        this.setState({blog:this.props.blog})
    }
    handleInput=(event)=>{
        const {name, value} = event.target
        this.setState({[name]: value});
    }

    handleUpdateBlog=(event)=>{
        event.preventDefault();
        const {title, blog} = this.state
        this.props.EditBlogAction({title, blog})
        .then(this.props.FetchBlogAction)
    }
    render(){
        const {title, blog} = this.state
        return(
            <div>
        <div className="modal fade" id={`edit_blog${this.props.id}`} 
            tabIndex="-1" role="dialog" 
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit a blog post</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
            <form onSubmit={this.handleUpdateBlog}>
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
        <button type="submit" className="btn btn-success">Update blog</button>
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
export default connect (null, {EditBlogAction, FetchBlogAction})(EditBlog);