import { Flex } from "@chakra-ui/react";
import React from "react";

interface PopupWindowInterface {
	children?: JSX.Element[];
}

const PopupWindow = ({ children }: PopupWindowInterface) => {
	return (
		<Flex
			backgroundColor="rgba(0,0,0,0.5)"
			position="absolute"
			width="100%"
			height="100%"
			left="0"
			top="0"
			justifyContent="center"
			alignItems="center"
		>
			<Flex>{children}</Flex>
		</Flex>
	);
};

export default PopupWindow;
