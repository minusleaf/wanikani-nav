import { Kanji } from "./App.interface";

const baseEndpoint = "https://api.wanikani.com/v2/";

const requestHeaders = new Headers({
	Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
});

export const getKanjiByLevel = async (level: number = 0) => {
	const parameters = level > 0 ? `&levels=${level}` : "";
	try {
		const response = await fetch(
			baseEndpoint + "subjects/?types=kanji" + parameters,
			{
				method: "GET",
				headers: requestHeaders,
			}
		);
		const json = await response.json();
		return json.data.map((dataItem: { data: Kanji }) => dataItem.data);
	} catch (e) {
		return [];
	}
};
