import React, { useRef, useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import FilterTab from "./components/FilterTab/FilterTab";
import { Filters, Kanji } from "./App.interface";
import { getKanjiByLevel } from "./services";
import KanjiResultsSection from "./components/KanjiResultsSection/KanjiResultsSection";
import PopupWindow from "./components/PopupWindow/PopupWindow";
import KanjiDetails from "./components/KanjiDetails/KanjiDetails";

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
		filters.current = newFilters;
		if (filters.current.networkDelay === 0)
			setKanjiList(await getKanjiByLevel(filters.current.level));
		else
			setTimeout(
				async () => setKanjiList(await getKanjiByLevel(filters.current.level)),
				filters.current.networkDelay
			);
	};

	return (
		<Flex className="App" width="100vw" height="100vh">
			<FilterTab updateFilters={updateFilters} />
			<KanjiResultsSection
				kanjiList={kanjiList}
				setSelectedKanji={setSelectedKanji}
			/>
			{selectedKanji && (
				<PopupWindow title="Kanji Viewer" onCloseAction={setSelectedKanji}>
					<KanjiDetails kanji={selectedKanji} />
				</PopupWindow>
			)}
		</Flex>
	);
}

export default App;
