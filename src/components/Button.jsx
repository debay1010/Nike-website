import React from "react";

const Button = ({
	label,
	iconURL,
	borderColor,
	backgroundColor,
	textColor,
	fullWidth,
}) => {
	return (
		<button
			className={`flex justify-center rounded-full items-center px-7 py-4 border font-montserrat text-lg leading-none
			
			${
				backgroundColor
					? `${backgroundColor} ${textColor} ${borderColor} `
					: "bg-coral-red text-white border-coral-red"
			} rounded-full ${fullWidth & "w-full"}     
			 
			`}
		>
			{label}

			{iconURL && (
				<img
					src={iconURL}
					alt="arrow right icon"
					className="ml-2 rounded-full h-5 w-5"
				/>
			)}
		</button>
	);
};

export default Button;
