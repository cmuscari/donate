import React from 'react';

function OrgForm() {
    return (
        <div>
            <h2 className="newpost-head">Post a Charitable Organization YOU care about</h2>
           <form className="post-form">
            <div>
            <label htmlFor="category">Choose a Category:</label>
            <select id="category" name="category" className='pselect'>
                <option value="animal">Animal</option>
                <option value="artcultr">Arts and Culture</option>
                <option value="children">Children</option>
                <option value="education">Education</option>
                <option value="enviornmental">Enviornmental</option>
                <option value="health">Health</option>
                <option value="humciv">Human and Civil Rights</option>
                <option value="humacom">Humanitarian and Community</option>
                <option value="int">International</option>
                <option value="psm">Public Service and Military</option>
            </select>
            </div>
            <div>
            <label htmlFor="org-name">Organization Name:</label>
            <input type="text" id="org-name" name="org-name" className="pinput"></input>
            </div>
            <div>
            <label htmlFor="org-web">Organization Website:</label>
            <input type="text" id="org-web" name="org-web" className="pinput"></input>
            </div>
            <div>
            <label htmlFor="loc" id="loc" name="loc">Location (city, state):</label>
            <input type="text" id="loc" name="loc" className="pinput"></input>
            </div>
            <div>
            <label htmlFor="desc" id="desc" name="desc">Description:</label>
            <input type="text" id="desc" name="desc" className="pinput"></input>
            </div>
            <div>
                <input type="submit" value="Submit" className="post-btn"></input>
            </div>
           </form>
        </div>
    )
}

export default OrgForm;