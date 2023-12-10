type Band = {
	genres: string[];
	songs: BandSong[];
	_createdAt: string;
	influences: string[];
	_rev: string;
	_type: string;
	name: string;
	slug?: {
		current: string;
	};
	_id: string;
	_updatedAt: string;
};

type BandSong = {
	_key: string;
	_ref: string;
	_type: string;
};
