import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('./review.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    console.log(reviews);
    return (
      <div className="container mx-auto max-w-screen-xl md:my-10 my-5">
        <h2 className="font-bold text-center md:text-3xl">
          <Typewriter
            words={["Reviews", "Our Happy Customers"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:grid-4 lg:grid-cols-3 place-items-center lg:gap-6">
            {
                reviews.map(review=><ReviewCard key={review.index} review={review}></ReviewCard>)
            }
        </div>
      </div>
    );
};

export default Reviews;