import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ORG } from '../utils/queries';
import { useParams } from 'react-router-dom';
import React from 'react';
import testIcon from '../images/icons/animals.png';
import { ContactsOutlined } from '@material-ui/icons';
import Icons from '../components/Icons'




const SingleOrg = (props) => {
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
        if (`${post.category}` === 'animals') {
            return Icons.animals;
        } else if (`${post.category}` === "arts") {
            return Icons.arts;
        } else if (`${post.category}` === "children") {
            return Icons.children;
        } else if (`${post.category}` === "civil-rights") {
            return Icons.civilrights;
        } else if (`${post.category}` === "education") {
            return Icons.education;
        } else if (`${post.category}` === "environmental") {
            return Icons.environmental;
        } else if (`${post.category}` === "health") {
            return Icons.health;
        } else if (`${post.category}` === "humanitarian") {
            return Icons.humanitarian;
        } else if (`${post.category}` === "international") {
            return Icons.international;
        } else {
            return Icons.military;
        }
    };
    let categoryIcon = getIcon();

    return (
        <div>
            <div className="orgCard">
                <img id="icon" className="single-org-icon" src={categoryIcon} />
                <div>
                    <p className="category-name"><strong>{post.category}</strong></p>
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
                <a href={`${post.website}`} target='_blank'>
                    <button type="submit" id="donate-btn">DONATE NOW</button>
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