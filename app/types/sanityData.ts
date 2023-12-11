type DataRef = {
	_ref: string;
	_type: string
}

type Slug = {
	current: string;
	_type: string
}

type Band = {
	_ref: string;
	_type: string
	name: string;
	genres: string[];
	songs: BandSong[] | BandSongDetailed[];
	_createdAt: string;
	influences: string[];
	slug: Slug,
	_id: string;
	_updatedAt: string;
	featuredsong: BandSong | BandSongDetailed
};

type BandSong = {
	_key: string;
	_ref: string;
	_type: string
};

type BandSongDetailed = {
	_type: string;
	band: DataRef;
	_updatedAt: string;
	slug: Slug;
	soundcloudurl: string;
	genres: string[];
	_id: string;
	_createdAt: string;
	name: string;
}

type BandAndFeaturedSong = {
	name: string;
	featuredsong: BandSongDetailed;
};
