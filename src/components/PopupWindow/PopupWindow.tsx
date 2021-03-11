import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
	closePopupWindow,
	popupWindowSelector,
	PopupWindowSliceInterface,
} from "../../redux/popupWindowSlice";
import { RootState } from "../../redux/store";

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
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const dispatch = useDispatch();
	const popupWindowState = useSelector<RootState>(
		popupWindowSelector
	) as PopupWindowSliceInterface;

	const handleOnClick = () => {
		return function () {
			dispatch(closePopupWindow());
			onCloseAction();
		};
	};

	return (
		<React.Fragment>
			{popupWindowState.isVisible && (
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
								size="24px"
								color="white"
								onClick={handleOnClick()}
								cursor={isHovered ? "pointer" : "auto"}
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
							/>
						</Flex>
						<Flex flex="1">{children}</Flex>
					</Flex>
				</Flex>
			)}
		</React.Fragment>
	);
};

export default PopupWindow;
