import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Kanji } from "../../App.interface";

interface KanjiResultsSectionInterface {
	kanjiList: Kanji[];
}

const KanjiResultsSection = ({ kanjiList }: KanjiResultsSectionInterface) => {
	return (
		<Flex
			flex="1"
			flexDirection="column"
			alignItems="center"
			overflowY="scroll"
			px="2rem"
			color="white"
			backgroundColor="#091d3b"
		>
			<Text fontWeight="bold" m="1rem">
				Kanji Results - {kanjiList.length} items
			</Text>
			{kanjiList.map((kanji, index) => (
				<Flex
					key={`kanji-${index}`}
					p="0.5rem"
					backgroundColor="#b82a78"
					my="0.5rem"
					borderRadius="1rem"
					width="100%"
					justifyContent="space-between"
					alignItems="center"
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
			))}
		</Flex>
	);
};

export default KanjiResultsSection;
