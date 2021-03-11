import { Flex, Text } from "@chakra-ui/react";
import { Kanji } from "../../App.interface";

interface KanjiDetailsInterface {
	kanji: Kanji;
}

const KanjiDetails = ({ kanji }: KanjiDetailsInterface) => {
	return (
		<Flex
			p="1rem"
			width="100%"
			height="100%"
			color="white"
			flexDirection="column"
			backgroundColor="#091d3b"
		>
			<Flex>
				<Flex
					backgroundColor="#b82a78"
					width="160px"
					height="160px"
					justifyContent="center"
					alignItems="center"
					borderRadius="25px"
				>
					<Text fontSize="4rem">{kanji.characters}</Text>
				</Flex>
				<Flex flexDirection="column" ml="2rem">
					<Text fontSize="2rem">
						{kanji.meanings.map((meaning, index) =>
							index === 0 ? meaning.meaning : ", ".concat(meaning.meaning)
						)}
					</Text>
					<Flex flexDirection="column" mt="2rem">
						<Text>
							On'yomi:{" "}
							{kanji.readings
								.filter((reading) => reading.type === "onyomi")
								.map((reading, index) =>
									index === 0 ? reading.reading : ", ".concat(reading.reading)
								)}
						</Text>
						<Text>
							Kun'yomi:{" "}
							{kanji.readings
								.filter((reading) => reading.type === "kunyomi")
								.map((reading, index) =>
									index === 0 ? reading.reading : ", ".concat(reading.reading)
								)}
						</Text>
					</Flex>
				</Flex>
			</Flex>
			<Text mt="1.5rem" mb="0.5rem" fontSize="1.25rem">
				Meaning Nmemonic
			</Text>
			<Text backgroundColor="#030f21" p="0.5rem" borderRadius="0.5rem">
				{kanji.meaning_mnemonic}
			</Text>
			<Text mt="1.5rem" mb="0.5rem" fontSize="1.25rem">
				Reading Nmemonic
			</Text>
			<Text backgroundColor="#030f21" p="0.5rem" borderRadius="0.5rem">
				{kanji.reading_mnemonic}
			</Text>
		</Flex>
	);
};

export default KanjiDetails;
