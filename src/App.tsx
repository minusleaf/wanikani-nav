import React, { useState, useEffect, useRef } from "react";
import { Flex } from "@chakra-ui/react";
import FilterTab from "./components/FilterTab/FilterTab";
import { Filters, Kanji } from "./App.interface";
import KanjiResultsSection from "./components/KanjiResultsSection/KanjiResultsSection";
import PopupWindow from "./components/PopupWindow/PopupWindow";
import KanjiDetails from "./components/KanjiDetails/KanjiDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchKanji, KanjiListSliceInterface } from "./redux/kanjiListSlice";
import { RootState } from "./redux/store";

function App() {
	const filters = useRef<Filters>({
		level: 0,
		networkDelay: 0,
	});
	const [selectedKanji, setSelectedKanji] = useState<Kanji>();
	const kanjiListState = useSelector<RootState>(
		(state) => state.kanjiList
	) as KanjiListSliceInterface;
	const dispatch = useDispatch();

	useEffect(() => {
		const getKanjiEffect = async () => {
			return await dispatch(fetchKanji(filters.current.level));
		};

		getKanjiEffect();
	}, [dispatch]);

	const updateFilters = async (newFilters: Filters) => {
		filters.current = newFilters;
		if (filters.current.networkDelay === 0)
			await dispatch(fetchKanji(filters.current.level));
		else
			setTimeout(
				async () => await dispatch(fetchKanji(filters.current.level)),
				filters.current.networkDelay
			);
	};

	return (
		<Flex className="App" width="100vw" height="100vh">
			<FilterTab updateFilters={updateFilters} />
			<KanjiResultsSection
				kanjiList={kanjiListState.kanjiList}
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
