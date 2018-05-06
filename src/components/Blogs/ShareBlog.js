import React from 'react';

const ShareBlog =(props)=>(
    <div className="modal fade" id={`share_blog${props.id}`} 
    tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div className="modal-dialog" role="document">
     <div className="modal-content">
       <div className="modal-header">
         <h4 className="modal-title" id="exampleModalLabel">Share blog {props.title}</h4>
         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div className="modal-body">
         <h5>Are you sure you want to share <strong> {props.title} </strong> blog? Enter email for recepient</h5>
         <input type="text" className="form-control" aria-label="small" aria-describedby="inputGroup-sizing-sm"
            name="email" placeholder="example@gmail.com"/>
       </div>
       <div className="modal-footer">
         <button type="button" className="btn btn-secondary" data-dismiss="modal" id={`closeShareModal${props.id}`}>Close</button>
         <button type="button" className="btn btn-success" to={`#`}>Share</button>
       </div>
     </div>
   </div>
 </div>
)
export default ShareBlog;