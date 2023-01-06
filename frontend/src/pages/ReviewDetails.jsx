import { useParams } from 'react-router-dom';
//import useFetch from '../hooks/useFetch';
import { useQuery, gql } from '@apollo/client';

const REVIEW = gql`
 query GetReview($id: ID!) {
	  review(id: $id) {
	    data {
	      id
	      attributes{
	    	title,
	        rating,
	        body
	      }
	    }
	  }
	}
`;

const ReviewDetails = () => {
  const { id } = useParams();
  //const { loading, error, data } = useFetch('http://localhost:1337/api/reviews/' + id);
  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id: id }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  //console.log(data);
  return (
    <>
      <div>Review - {id}</div>
      <div className="review-card">
        <div className="rating">{data.review.data.attributes.rating}</div>
        {/*<h2>{data.data.attributes.title}</h2> //fue useFetch */}
        <h2>{data.review.data.attributes.title}</h2>

        <small>console list</small>

        <p>{data.review.data.attributes.body}</p>
      </div>
    </>
  );
};

export default ReviewDetails;