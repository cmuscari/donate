import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ORG } from '../utils/queries';
import { useParams } from 'react-router-dom';

const SingleOrg = (props) => {
    const { id: orgId } = useParams();

    const { loading, data } = useQuery(QUERY_ORG, {
        variables: { id: orgId},
    });

    const org = data?.org || {};

    if (loading) {
        return <div>Loading...</div>
    };

    return (
        <div>
            <div className="orgCard">
                <p className="orgCard-header">
                    <span>
                        {org.title}
                    </span>{' '}
                </p>
                <div className='orgCard-body'>
                    <p>{org.location}
                    </p>
                </div>
            </div>
        </div>
    )
}


export default SingleOrg;