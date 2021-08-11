import React from "react";
import { MapToggleButtonProps } from "./props";
import Flex from "../../composers/flex";
import IconButton from "../icon-button";

const MapToggleButton = ({ height = "50px", width = "46px", onClick, className, ...rest }: MapToggleButtonProps) => {
	return (
		<Flex type="row">
			<IconButton
				height={height}
				width={width}
				icon="earth"
				className="rounded-r-none border-[1px] border-r-[.5px] border-[#E9EBF2]"
			/>
			<IconButton
				height={height}
				width={width}
				icon="list"
				className="rounded-l-none border-[1px] border-l-[.5px] border-[#E9EBF2]"
			/>
		</Flex>
	);
};

export default MapToggleButton;
