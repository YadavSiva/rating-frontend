import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img from './../assets/bussiness.jpg';
import './services.component.css';
import { Star, Share, PersonCircle, PencilSquare, Trash3, Flag } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

export function ServicesComponent() {

    const [rating, setRating] = useState(0); 
    const [review, setReview] = useState('');
    const [submittedReviews, setSubmittedReviews] = useState([]);
    const [username, setUsername] = useState('');
    const [editReviewId, setEditReviewId] = useState(null); 
    const [filterOption, setFilterOption] = useState('all'); 
    const [searchTerm, setSearchTerm] = useState('');
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId'); 
    const [averageRating, setAverageRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const [isWritingReview, setIsWritingReview] = useState(false);
    const location = useLocation(); 

    const queryParams = new URLSearchParams(location.search);
    const servicename = queryParams.get('servicename'); 

    useEffect(() => {
        fetchReviews();
        fetchAverageRating();
        localStorage.removeItem('rating');
    }, []);
    const fetchReviews = async () => {
        try {
            const response = await axios.get(`http://localhost:7000/get-ratings-reviews?servicename=${servicename}`);
            const reviewsWithIds = response.data.map(review => ({ ...review, id: review._id, userId: review.userId })); // Assign MongoDB _id as 'id'
            setSubmittedReviews(reviewsWithIds);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        localStorage.setItem('rating', newRating.toString());
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleSubmitReview = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            };

            if (editReviewId) {
                await axios.put(`http://localhost:7000/update-rating-review/${editReviewId}`, { rating, review }, config);
                alert('Your review has been updated');
                setEditReviewId(null); 
            } else {
                
                await axios.post('http://localhost:7000/submit-rating-review', { rating, review, servicename }, config);
                alert('Your review has been submitted');
            }

            fetchReviews();
            setReview('');
            setRating(0);
            fetchAverageRating();
        } catch (error) {
            console.error('Error submitting review:', error);
            alert(error.response?.data.error || 'Failed to submit review');
        }
    };

    const handleEditReview = (reviewId, existingRating, existingReview) => {
        setEditReviewId(reviewId);
        setRating(existingRating);
        setReview(existingReview);
    };

    const handleDeleteReview = async (reviewId) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            };
            await axios.delete(`http://localhost:7000/delete-rating-review/${reviewId}`, config);
            alert('The review has been deleted successfully');
            fetchReviews(); // Fetch updated reviews after deletion
            fetchAverageRating();
        } catch (error) {
            console.error('Error deleting review:', error);
            alert(error.response?.data.error || 'Failed to delete review');
        }
    };

    const handleFilterChange = (event) => {
        setFilterOption(event.target.value);
    };

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredReviews = submittedReviews.filter((review) => {
        const matchesSearchTerm = review.review.toLowerCase().includes(searchTerm.toLowerCase());
        switch (filterOption) {
            case 'positive':
                return review.rating >= 3 && matchesSearchTerm;
            case 'negative':
                return review.rating < 3 && matchesSearchTerm;
            case 'latest':
                const reviewDate = new Date(review.date);
                const currentDate = new Date();
                const daysDifference = Math.floor((currentDate - reviewDate) / (1000 * 60 * 60 * 24));
                return daysDifference >= 0 && daysDifference <= 5 && matchesSearchTerm;
            default:
                return matchesSearchTerm;
        }
    }).sort((a, b) => {
        if (filterOption === 'highToLow') {
            return b.rating - a.rating;
        } else if (filterOption === 'lowToHigh') {
            return a.rating - b.rating;
        } else {
            return 0;
        }
    });

    const fetchAverageRating = async () => {
        try {
            const response = await axios.get(`http://localhost:7000/get-average-rating?servicename=${servicename}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            const { averageRating, totalReviews } = response.data;
            setAverageRating(averageRating);
            setTotalReviews(totalReviews);
        } catch (error) {
            console.error('Error fetching average rating:', error);
        }
    };

    const handleReport = async (id) => {
        try {
          const reason = prompt('Enter reason for reporting:');
          if (reason) {
            await axios.post(`http://localhost:7000/report-review/${id}`, { reason });
            
            setSubmittedReviews(submittedReviews.filter((review) => review._id !== id));
            alert('Review reported successfully');
          }
        } catch (error) {
          console.error('Error reporting review:', error);
          alert('Failed to report the review');
        }
      };

    const toggleWriteReview = () => {
        setIsWritingReview(!isWritingReview);
    };

    return (
        <div>
            <br />
            <div className='marginstart'>
                <br></br>
                <div>
                    <div>
                        <h2 style={{ fontVariant: 'small-caps', fontSize: '25px' }}> Reviews & Rating <span style={{color:'green'}}> ({servicename})</span></h2>
                        <div style={{ marginTop: '20px' }}>
                            {averageRating !== null && (
                                <span style={{ marginLeft: 'auto' }}>
                                    <span style={{ fontSize: '20px', color: "white", backgroundColor: 'green', padding: '9px', borderRadius: '7px', marginLeft: 'auto' }}>
                                        {averageRating.toFixed(1)}
                                    </span>
                                    <span className='shiva'> &nbsp;
                                        <span style={{ position: 'absolute', top: 90, fontSize: '16px', color: 'black' }}><strong>{totalReviews} Ratings</strong>   </span>
                                        <span style={{ position: 'absolute', top: 110, fontVariant: 'common-ligatures' }}>We give rating</span>
                                    </span>
                                </span>
                            )}
                        </div>
                    </div>
                    <br></br>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            style={{
                                color: star <= rating ? 'gold' : 'gray',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleRatingChange(star)}
                        >
                            <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '40px' }}></Star></span>  &nbsp;&nbsp; &nbsp;&nbsp;
                        </span>
                    ))}
                    <br></br> <br></br>
                    {isWritingReview ? (
                        <div>
                            <label>Write a review</label>
                            <br></br>
                            <textarea
                                value={review}
                                onChange={handleReviewChange}
                                rows={2.5}
                                cols={38}
                                placeholder="Write your review here..."
                            />
                            <br />
                            <button className='popular'  onClick={handleSubmitReview}>{editReviewId ? 'Update' : 'Submit'}</button>
                        </div>
                    ) : (
                        <div >
                            <button className='color' onClick={toggleWriteReview}>Write a Review</button> &nbsp;&nbsp;&nbsp;
                            <button className='color' ><Share size={10} style={{ marginRight: '5px' }} />Share</button>
                        </div>
                    )}
                    <br />
                    <hr />
                    <br></br>

                    {submittedReviews.length > 0 && (
                        <div>
                            <span>
                                <div>
                                <h3 style={{fontVariant:'small-caps'}}> Reviews And Rating</h3>
                                <div>
                                    <select value={filterOption} onChange={handleFilterChange}>
                                        <option value="all">All</option>
                                        <option value="positive">Positive</option>
                                        <option value="negative">Negative</option>
                                        <option value="highToLow">High to Low</option>
                                        <option value="lowToHigh">Low to High</option>
                                    </select>
                                </div>
                               
                                </div>
                            </span>
                            {filteredReviews.map((reviewData, index) => (
                                <div key={index}>
                                    {/* Display the username */}
                                    <p style={{ fontWeight: 'bold', color: 'black', fontVariant:'small-caps' }}><PersonCircle></PersonCircle> {reviewData.userName}</p>                              
                                    {reviewData.rating > 0 && (
                                        <p>
                                            Rating: {' '}
                                            {[...Array(reviewData.rating)].map((_, i) => (
                                                <span key={i} style={{ color: 'gold' }}>★</span>
                                            ))}
                                        </p>
                                    )}
                                    {reviewData.review && <p>Review: {reviewData.review}</p>}                                   
                                   <PencilSquare onClick={() => handleEditReview(reviewData._id, reviewData.rating, reviewData.review)} className='edit'></PencilSquare> &nbsp; &nbsp;
                                    <Trash3 onClick={()=>handleDeleteReview(reviewData._id)} className='delete'></Trash3>&nbsp; &nbsp;
                                    <Flag onClick={() => handleReport(reviewData._id)} className='report'></Flag>
                                    <hr style={{ border: '1px solid #eee', margin: '5px 0' }} />
                                    {index !== submittedReviews.length - 1 && <hr />}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
            </div>
        </div>
    );
}
