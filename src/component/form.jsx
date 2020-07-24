import React from 'react';

const Form = (props) => {

 const  {handleChange,value,submit} = props;
    return (
        <form onSubmit={e=>submit(e)}>
        <div className="row">
        <div className="col-md-5 offset-md-3">
           <input
           onChange = {e=>handleChange(e.currentTarget.value)}
             type="text"
             value={value}
             className="form-control"
             id="newlist"
             name="userlist"
             placeholder="Add somthing To do"
           />
         </div>
         <div className="col-md-1">
         <button type="submit"
          className="btn btn-primary"
          >
           Add
         </button>
         </div>
        </div>
       </form>
    );
};

export default Form;