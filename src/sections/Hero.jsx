import React, { useState } from "react";
import { Button, ShoeCard } from "../components";
import { arrowRight } from "../assets/icons";
import { services, shoes, statistics } from "../constants/";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
	return (
		<section
			id="home"
			// it will be flex-row if the width is more that 1280px and flex-col if 1290px or less
			className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2 border-red-500 p-2  "
		>
			<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
				<p className="text-xl  font-montserrat text-coral-red">
					Our New Year Collections
				</p>
				<h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
					<span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
						The New Arrivals
					</span>
					<br />
					<span className="text-coral-red inline-block mt-3 font-bold">
						Nike
					</span>{" "}
					shoes
				</h1>
				<p className=" font-montserrat text-slate-gray leading-8 text-lg mt-6 mb-14 sm:max-w-sm ">
					Discover the new way of life with our Nike products. It is a
					step to higher level.
				</p>
				<Button label="Shop now" iconURL={arrowRight} />

				<div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
					{statistics.map((stat) => (
						<div key={stat.label}>
							<p className=" font-palanquin text-4xl tont-bold ">
								{stat.value}
							</p>
							<p className=" font-montserrat leading-7 text-slate-gray ">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
				<img
					src={bigShoeImg}
					alt="shoe collections"
					width={610}
					height={500}
					className="object-contain relative z-10"
				/>
				<div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:gap-6">
					{shoes.map((shoe) => (
						<div key={shoe.bigShoe} className="">
							<ShoeCard
								imgURL={shoe}
								changeBigShoeImage={(shoe) => {
									setBigShoeImg(shoe);
								}}
								bigShoeImg={bigShoeImg}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
