import React, { useRef, useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import FilterTab from "./components/FilterTab/FilterTab";
import { Filters, Kanji } from "./App.interface";
import { getKanjiByLevel } from "./services";
import KanjiResultsSection from "./components/KanjiResultsSection/KanjiResultsSection";

function App() {
	const filters = useRef<Filters>({
		level: 0,
		networkDelay: 0,
	});
	const [kanjiList, setKanjiList] = useState<Kanji[]>([]);
	const [selectedKanji, setSelectedKanji] = useState<Kanji>();

	useEffect(() => {
		const getKanjiEffect = async () => {
			return setKanjiList(await getKanjiByLevel(filters.current.level));
		};
		getKanjiEffect();
	}, []);

	const updateFilters = async (newFilters: Filters) => {
		console.log(newFilters);
		filters.current = newFilters;
		setKanjiList(await getKanjiByLevel(filters.current.level));
	};

	return (
		<Flex className="App" width="100vw" height="100vh">
			<FilterTab updateFilters={updateFilters} />
			<KanjiResultsSection kanjiList={kanjiList} />
		</Flex>
	);
}

export default App;
