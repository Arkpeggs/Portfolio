import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    return (
        <div className="contactApp">
<div className="container">
    <div className="card">
             <section className="row">
  <div className="col-md-8">
    <form method="POST" action="https://formspree.io/xwkrjjbw" className="block form-horizontal">
      <h1 className="block-header">Contact</h1>
      <p>Phone: 612-470-0521</p>
      <hr />
      <div className="form-group">
        <label htmlFor="name" className="col-sm-2 control-label">Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="name" placeholder="Name" name="f&lname" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email" className="col-sm-2 control-label">Email</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="email" placeholder="Email" name="_replyto" required />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label" htmlFor="msg">Message</label>
        <div className="col-sm-10">
          <textarea id="msg" className="form-control" rows={3} placeholder="Message" name="message" required defaultValue={""} />
        </div>
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  </div>
</section>

        </div>
   </div>     
</div>
                        )
                    }
export default Contact