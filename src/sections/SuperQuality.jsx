import React from "react";
import { Button } from "../components";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
	// max-lg:flex-col, for devices lower than 1024px use flex-col
	// ie the maximum it can get to b4 changing is lg which is 1024px
	return (
		<section
			id="about us"
			className="flex justify-center items-center max-lg:flex-col gap-10 w-full max-container "
		>
			<div className="flex flex-1 flex-col ">
				<h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
					We Provide You
					<span className="text-coral-red"> Super </span>
					<span className="text-coral-red">Quality </span>
					Shoes
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
				<div className="mt-11">
					<Button label="View Detail" />
				</div>
			</div>
			<div className=" flex flex-1 justify-center items-center ">
				<img src={shoe8} alt="shoe8" width={570} height={522} />
			</div>
		</section>
	);
};

export default SuperQuality;
