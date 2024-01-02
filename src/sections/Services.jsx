import React from "react";
import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
	return (
		<div className="max-container flex flex-wrap gap-9">
			{services.map((service) => (
				<ServiceCard key={service.label} {...service} />
			))}
		</div>
	);
};

export default Services;
