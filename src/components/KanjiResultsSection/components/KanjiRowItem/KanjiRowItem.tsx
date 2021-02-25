import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Kanji } from "../../../../App.interface";

interface KanjiRowItemInterface {
	kanji: Kanji;
	setSelectedKanji: React.Dispatch<React.SetStateAction<Kanji | undefined>>;
}

const KanjiRowItem = ({ kanji, setSelectedKanji }: KanjiRowItemInterface) => {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	return (
		<Flex
			p="0.5rem"
			backgroundColor={isHovered ? "#c75d97" : "#b82a78"}
			my="0.5rem"
			borderRadius="1rem"
			width="100%"
			justifyContent="space-between"
			alignItems="center"
			onClick={() => setSelectedKanji(kanji)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			cursor={isHovered ? "pointer" : "auto"}
		>
			<Text fontSize="1.5rem">{kanji.characters}</Text>
			<Text width="30%">
				{kanji.meanings.map((meaning, index) =>
					index === 0 ? meaning.meaning : ", ".concat(meaning.meaning)
				)}
			</Text>
			<Text width="30%">
				{kanji.readings.map((reading, index) =>
					index === 0 ? reading.reading : ", ".concat(reading.reading)
				)}
			</Text>
		</Flex>
	);
};

export default KanjiRowItem;
