import React, { useContext } from 'react';
import Context1 from '../context/Context1';


const NewPost = () => {
    const{handleSubmit,postName,setPostName,postEdu,setPostEdu}=useContext(Context1);    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h2>New Post</h2>
                <label>Name : </label>
                <input 
                    type="text" required
                    placeholder='Enter the name'
                    value={postName}
                    onChange={(e)=>setPostName(e.target.value)}/><br></br>
                <label>Edu : </label>
                <input 
                    type="text" required
                    placeholder='Enter the edu'
                    value={postEdu}
                    onChange={(e)=>setPostEdu(e.target.value)}/><br></br>
                <button type="submit">Submit</button>    
            </form>
            
        </div>
    );
};

export default NewPost;