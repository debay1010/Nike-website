import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
	return (
		<header className="padding-x py-8 absolute w-full z-10">
			<nav className="flex justify-between items-center max-container ">
				<a href="/">
					<img src={headerLogo} alt="Logo" width={130} height={29} />
				</a>
				{/* on all device works as normal nut starting fron device lg and below it is hidden */}
				<ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="montserrat leading-normal text-lg text-slate-gray"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				{/* shows for resolution that is 1024 and lower and hidden for others */}
				<div className="hidden max-lg:block">
					<img
						src={hamburger}
						alt="hambuger"
						width={25}
						height={25}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
