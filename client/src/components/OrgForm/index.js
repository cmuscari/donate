import React from 'react';

function OrgForm() {
    return (
        <div>
            <form className="post-form">
                <div>
                    <h2 className="newpost-head">Let others know what YOU care about.<br></br>Share an organization here!</h2>
                    <label htmlFor="category">Select a Category:</label>
                    <select id="category" name="category" className='pselect'>
                        <option value="animals">Animals</option>
                        <option value="art-cultre">Arts & Culture</option>
                        <option value="children">Children</option>
                        <option value="education">Education</option>
                        <option value="environmental">Environmental</option>
                        <option value="health">Health</option>
                        <option value="human-civil">Human & Civil Rights</option>
                        <option value="human-community">Humanitarian & Community</option>
                        <option value="international">International</option>
                        <option value="public-military">Public Service & Military</option>
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
                    <input type="text" id="org-loc" name="loc" className="pinput"></input>
                </div>
                <div>
                    <label htmlFor="desc" id="desc" name="desc">Description:</label>
                    <textarea type="text" id="org-desc" name="desc" className="pinput"></textarea>
                </div>
                <div className="post-btn-container">
                    <button type="submit" name="submit-button" className="post-btn">
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    )
}

export default OrgForm;
