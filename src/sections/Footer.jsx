import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
	return (
		<footer className="max-container">
			<div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
				<div className="flex flex-col items-start">
					<a href="/">
						<img
							src={footerLogo}
							alt="footer Logo"
							width={150}
							height={46}
						/>
					</a>
					<p className="mt-6 text-base text-center leading-7 font-montserrat sm:max-w-sm text-white-400">
						Get shoes ready for the new term at your nearest Nike
						store.Find your perfect Size in Store. Get Rewards
					</p>
					<div className="flex gap-5 mt-8 items-center">
						{socialMedia.map((icon) => (
							<div
								key={icon.src}
								className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
							>
								<img
									src={icon.src}
									alt={icon.alt}
									width={24}
									height={24}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-1 justify-between items-center flex-wrap lg:gap-10 gap-20">
					{footerLinks.map((section) => (
						<div key={section} className="">
							<h4 className="text-white font-montserrat leading-normal font-medium text-2xl mb-6">
								{section.title}
							</h4>
							<ul>
								{section.links.map((link) => (
									<li
										className="mt-3 leading-normal font-base text-white-400 font-montserrats hover:text-slate-gray cursor-pointer"
										key={link.name}
									>
										<a href={link.link}>{link.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-between max-sm:flex-col mt-24 text-white max-sm:items-center">
				<div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
					<img
						src={copyrightSign}
						alt="copyright"
						width={20}
						height={20}
						className="rounded-full m-0"
					/>
					<p>Copyright. All rights reserverd</p>
				</div>
				<div className="font-montserrat cursor-pointer">
					Terms & Conditions
				</div>
			</div>
		</footer>
	);
};

export default Footer;
