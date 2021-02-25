import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface PopupWindowInterface {
	children?: JSX.Element | JSX.Element[];
	onCloseAction: Function;
	width?: string;
	height?: string;
	title?: string;
}

const PopupWindow = ({
	children,
	onCloseAction,
	width = "960px",
	height = "540px",
	title = "Popup",
}: PopupWindowInterface) => {
	return (
		<Flex
			backgroundColor="rgba(0,0,0,0.8)"
			position="absolute"
			width="100%"
			height="100%"
			left="0"
			top="0"
			justifyContent="center"
			alignItems="center"
		>
			<Flex
				backgroundColor="white"
				flexDirection="column"
				width={width}
				height={height}
			>
				<Flex
					width="100%"
					height="2.5rem"
					p="1rem"
					justifyContent="space-between"
					alignItems="center"
					backgroundColor="#0f3a73"
				>
					<Text color="white">{title}</Text>
					<AiOutlineClose
						size="2rem"
						color="white"
						onClick={() => onCloseAction()}
					/>
				</Flex>
				<Flex flex="1">{children}</Flex>
			</Flex>
		</Flex>
	);
};

export default PopupWindow;
