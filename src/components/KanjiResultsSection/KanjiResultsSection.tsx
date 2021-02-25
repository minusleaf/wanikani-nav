import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Kanji } from "../../App.interface";
import KanjiRowItem from "./components/KanjiRowItem/KanjiRowItem";

interface KanjiResultsSectionInterface {
	kanjiList: Kanji[];
	setSelectedKanji: React.Dispatch<React.SetStateAction<Kanji | undefined>>;
}

const KanjiResultsSection = ({
	kanjiList,
	setSelectedKanji,
}: KanjiResultsSectionInterface) => {
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
				<KanjiRowItem
					key={`kanji-${index}`}
					kanji={kanji}
					setSelectedKanji={setSelectedKanji}
				/>
			))}
		</Flex>
	);
};

export default KanjiResultsSection;
