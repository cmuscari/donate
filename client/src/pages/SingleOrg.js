import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ORG } from '../utils/queries';
import { useParams } from 'react-router-dom';
import React from 'react';
// import childrenIcon from '../images/icons/children.png';
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
      
      var categoryList = Object.keys(Icons).filter((key) =>
        post.category.includes(key)
      );
      if (categoryList.length === 0) {
        return "";
      }
      return Icons[categoryList[0]];
    };

    let categoryIcon = getIcon();

    return (
        <div>
            <div className="orgCard">
                <img id="icon" className="single-org-icon" src={categoryIcon} alt="" />
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
                <a href={`${post.website}`} target='_blank'>
                    <button type="submit" id="donate-btn">DONATE NOW</button>
                </a>
            </div>
        </div>
    )
}


export default SingleOrg;