import React from "react";
import { offer } from "../assets/images";
import { Button } from "../components";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
	return (
		<section className="flex justify-centeritem-center flex-wrap max-xl:flex-col-reverse gap-10 max-container ">
			<div className="flex-1">
				<img
					src={offer}
					alt="offer"
					width={773}
					height={687}
					className="object-contain w-full"
				/>
			</div>
			<div className="flex flex-1 flex-col ">
				<h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
					Special
					<span className="text-coral-red"> Offer </span>
					<br />
				</h2>
				<p className="  mt-4 lg:max-w-lg info-text ">
					Quality at its best, in design and usage. We make sure we
					have you in mind while designing our products to ensure your
					maximum comfort, ease and durabilty.
				</p>
				<p className="mt-6 lg:max-w-lg text-info">
					Our committment and dedication is to give you the best every
					time and always.
				</p>
				<div className="mt-11 flex flex-wrap gap-4">
					<Button label="Shop now" iconURL={arrowRight} />
					<Button
						label="Learn more"
						backgroundColor="bg-white"
						borderColor="border-slate-gray"
						text-color="text-slate-gray"
					/>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffer;
