import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ORG } from '../utils/queries';
import { useParams } from 'react-router-dom';
import React from 'react';

const SingleOrg = (props) => {
    const { id: orgId } = useParams();
    
    const { loading, data } = useQuery(QUERY_ORG, {
        variables: { id: orgId},
    });

    const post = data?.post || {};
    
    if (loading) {
        return <div>Loading...</div>
    };

    return (
        <div>
            <div className="orgCard">
                <p className="orgCard-header">
                    <span>
                        {post.orgName}
                    </span>{' '}
                </p>
                <div className='orgCard-web'>
                    <a href={`${post.website}`} target='_blank' rel='noreferrer'>{post.website}</a>
                </div>
                <div className='orgCard-loc'>
                    <p>{post.location}</p>
                </div>
                <div className='orgCard-desc'>
                    <p>{post.description}</p>
                </div>
            </div>
        </div>
    )
}


export default SingleOrg;