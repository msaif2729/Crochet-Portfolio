import { useState } from "react";
import ReviewContext from "./reviewContext";

const ReviewState = (props) => {
    
    const host = "https://crochet-portfolio-api.vercel.app"
    // const host = "http://localhost:5000"

    const [reviews, setReviews] = useState([]);

    const getReview = async () => {
        try {
            const review = await fetch(`${host}/api/review/getallreview`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await review.json();
            setReviews(json);
            return json;
        } catch (error) {
            console.error('Failed to fetch reviews:', error);
        }
    };

    const createReview = async (reviewData) => {
        try {
            const { first, last, email, rating, reviewtext, image } = reviewData;

            // Check if all required fields are provided
            if (!first || !last || !email || !rating || !reviewtext || !image) {
                throw new Error("All fields are required.");
            }

            const response = await fetch(`${host}/api/review/createreview`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ first, last, email, rating, reviewtext, image })
            });

            if (!response.ok) {
                const errorText = await response.text(); // Capture the error message
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }

            const json = await response.json();
            setReviews((prev) => [...prev, json]); // Append the new review
            // console.log(json);
        } catch (error) {
            console.error('Failed to create review:', error);
        }
    }

    return (
        <ReviewContext.Provider value={{ reviews, getReview, createReview }}>
            {props.children}
        </ReviewContext.Provider>
    );
}

export default ReviewState;
