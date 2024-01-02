import React from "react";
import { reviews } from "../constants";
import { ReviewCard } from "../components";

const CustomerReviews = () => {
	return (
		<section className="max-container">
			<h3 className=" font-palanquin text-4xl font-bold text-center ">
				What Our
				<span className="text-coral-red"> Customers </span>
				Say?
			</h3>
			<p className="mt-4 info-text m-auto max-w-lg text-center font-montserrat text-xl">
				Authentic stories from our satisfied Customers
			</p>
			<div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
				{reviews.map((review) => (
					<ReviewCard key={review.customerName} {...review} />
				))}
			</div>
		</section>
	);
};

export default CustomerReviews;
