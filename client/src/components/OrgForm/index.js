import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';

const OrgForm = () => {

    const [addPost, { error }] = useMutation(ADD_POST);

    const [textInfo, setTextInfo] = useState({
        category: "",
        orgName: "",
        location: "",
        website: "",
        description: "",
        username: "",
    });

    const handleFormSubmit = async event => {
        event.preventDefault();
        console.log(textInfo);

        try {
            // add post to database
            const { data } = await addPost({
                variables: { ...textInfo }
            });
            
            // clear form value
            setTextInfo({
                category: "",
                orgName: "",
                location: "",
                website: "",

                description: "",
                username: "",
            });

            // display success message
            alert(`Your organization, ${textInfo.orgName}, was posted successfully!  Thank you!`);

            // refresh browser
            document.location.reload();

            // redirect to homepage
            window.location.replace("/");

        } catch (e) {
            console.error(e);
            alert(`Category is required!`)
        }
    };


    const inputChange = (event) => {
        const { name, value } = event.target;
        // console.log(name, value);
        setTextInfo({ ...textInfo, [name]: value })
        // console.log(textInfo);
    }



    return (
        <div className="post-form-container">
            <form className="post-form" onSubmit={handleFormSubmit}>
                <div>
                    <h2 className="newpost-head">Let others know what YOU care about.<br></br>Share an organization here!</h2>
                    <label htmlFor="category">Select a Category:</label>
                    <select onChange={inputChange} id="category" name="category" className='pselect' value={textInfo.category}>
                        <option value="select">Please Select a Category:</option>
                        <option value="animals">Animals</option>
                        <option value="art-culture">Arts & Culture</option>
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
                    <input onChange={inputChange} type="text" id="org-name" name="orgName" className="pinput" value={textInfo.orgName}></input>
                </div>
                <div>
                    <label htmlFor="org-web">Organization Website:</label>
                    <input onChange={inputChange} type="text" id="org-web" name="website" className="pinput" value={textInfo.website}></input>
                </div>
                <div>
                    <label htmlFor="loc" id="loc" name="loc">Location (city, state):</label>
                    <input onChange={inputChange} type="text" id="org-loc" name="location" className="pinput" value={textInfo.location}></input>
                </div>
                <div>
                    <label htmlFor="desc" id="desc" name="desc">Description:</label>
                    <textarea onChange={inputChange} type="text" id="org-desc" name="description" className="pinput" value={textInfo.description}></textarea>
                </div>
                <div className="post-btn-container">
                    <button type="submit" name="submit-button" className="post-btn">
                        SUBMIT
                    </button>
                </div>
            </form>



        </div>
    )
};

export default OrgForm;


