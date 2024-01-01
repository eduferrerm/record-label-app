type DataRef = {
	_ref: string;
	_type: string
}

type Slug = {
	current: string;
	_type: string
}

type Cover = {
	asset: {
		_ref: string;
		_type: string;
	}
}

type CoverDetailed = {
	asset: {
		url: string
	}
}

type Band = {
	_ref: string;
	_type: string
	name: string;
	genres: string[];
	songs: Song[] | SongDetailed[];
	_createdAt: string;
	influences: string[];
	slug: Slug,
	_id: string;
	_updatedAt: string;
	featuredsong: Song | SongDetailed
};

type Song = {
	_key: string;
	_ref: string;
	_type: string
};

type SongDetailed = {
	_type: string;
	band: DataRef;
	_updatedAt: string;
	slug: Slug;
	soundcloudurl: string;
	genres: string[];
	_id: string;
	_createdAt: string;
	name: string;
	cover: CoverDetailed
}

type BandAndFeaturedSong = {
	name: string;
	featuredsong: SongDetailed;
};
