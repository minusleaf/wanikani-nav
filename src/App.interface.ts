export interface Kanji {
	characters: string;
	readings: KanjiReading[];
	amalation_subject_ids: number[];
	component_subject_ids: number[];
	level: number;
	meanings: Meaning[];
	meaning_mnemonic: string;
	reading_mnemonic: string;
}

export interface Meaning {
	meaning: string;
	primary: boolean;
	accepted_answer: boolean;
}

export interface KanjiReading {
	reading: "onyomi" | "kunyomi";
	type: string;
}

export interface Filters {
	level: number;
	networkDelay: number;
}
