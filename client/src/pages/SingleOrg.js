import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ORG } from '../utils/queries';
import { useParams } from 'react-router-dom';
import React from 'react';
import { ContactsOutlined } from '@material-ui/icons';
import { useState } from 'react';
import Icons from '../components/Icons'




const SingleOrg = (props) => {
    const [showItem, setShowItem] = useState(false)

    const { id: orgId } = useParams();

    const { loading, data } = useQuery(QUERY_ORG, {
        variables: { id: orgId },
    });

    const post = data?.post || {};

    if (loading) {
        return <div>Loading...</div>
    };


    // render category icon based on selected category name
    const getIcon = () => {
      
      var categoryList = Object.keys(Icons).filter((key) =>
        post.category.includes(key)
      );
      if (categoryList.length === 0) {
        return "";
      }
      return Icons[categoryList[0]];
    };

    let categoryIcon = getIcon();


     // render category name based on selected category
     const getCatName = () => {
        if (`${post.category}` === 'animals') {
            return 'ANIMALS';
        } else if (`${post.category}` === "art-culture") {
            return 'ARTS & CULTURE';
        } else if (`${post.category}` === "children") {
            return 'CHILDREN';
        } else if (`${post.category}` === "human-civil") {
            return 'HUMAN & CIVIL RIGHTS';
        } else if (`${post.category}` === "education") {
            return 'EDUCATION';
        } else if (`${post.category}` === "environmental") {
            return 'ENVIRONMENTAL';
        } else if (`${post.category}` === "health") {
            return 'HEALTH';
        } else if (`${post.category}` === "human-community") {
            return 'HUMANITARIAN & COMMUNITY';
        } else if (`${post.category}` === "international") {
            return 'INTERNATIONAL';
        } else {
            return 'PUBLIC SERVICE & MILITARY';
        }
    };
    let catName = getCatName();


    return (
        <div>
            <div className="orgCard">
                <img id="icon" className="single-org-icon" src={categoryIcon} alt="" />
                <div>
                    <p className="category-name"><strong>{catName}</strong></p>
                </div>
                <div className="single-org-item-container">
                    <p className='single-org-title'><strong>Organization Name:</strong></p>
                    <p className='single-org-item'>{post.orgName}</p>
                </div>
                <div className="single-org-item-container">
                    <p className='single-org-title'><strong>Website:</strong></p>
                    <a className='single-org-item website-link' href={`${post.website}`} target='_blank' rel='noreferrer'>{post.website}</a>
                </div>
                <div className="single-org-item-container">
                    <p className='single-org-title'><strong>Location:</strong></p>
                    <p className='single-org-item'>{post.location}</p>
                </div>
                <div className="single-org-item-container">
                    <p className='single-org-title'><strong>Description:</strong></p>
                    <p className='single-org-item'>{post.description}</p>
                </div>
                <div className="single-org-item-container">
                    <p className='single-org-title'><strong>Shared by:</strong></p>
                    <p className='single-org-item'>{post.username}</p>
                </div>
                <a href={'/donate'} target='_blank'>
                    <button type="submit" id="donate-btn"><span className="heart-text">♡</span><br></br>DONATE NOW</button>
                </a>
            </div>
            <div className="comments-section">
                <div className="comments-content">
                    <label htmlFor="comments-title" id="comments-title" name="comments-title" className="comments-title"><strong>Comments:</strong></label>
                    <textarea type="text" id="comments-text" name="comments-text" className="pinput"></textarea>
                </div>
                <button type="submit" id="comments-btn">SUBMIT</button>
            </div>
        </div>
    )
}


export default SingleOrg;