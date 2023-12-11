import { defineField, defineType } from 'sanity'
import genres from './genres'

export default defineType({
  name: 'band',
  title: 'Band',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Band Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'songs',
      title: 'Songs',
      type: 'array',
      validation: Rule => Rule.unique(),
      of: [
        {
          type: 'reference',
          to: {
            type: 'song',
          },
          options: {
            filter: ({ document }) => {
              return {
                filter: 'band._ref == $bandID',
                params: {
                  bandID: document._id.includes('drafts.') ? document._id.slice(7) : document._id,
                  bandSongs: document.songs
                },
              }
            },
          },
        }
      ]
    }),
    defineField({
      name: 'featuredsong',
      title: 'Featured Song',
      type: 'array',
      validation: Rule => [
        Rule.required().max(1),
        Rule.unique()
      ],
      of: [
        {
          type: 'reference',
          to: {
            type: 'song',
          },
          options: {
            filter: ({ document }) => {
              return {
                filter: 'band._ref == $bandID',
                params: {
                  bandID: document._id.includes('drafts.') ? document._id.slice(7) : document._id,
                  bandSongs: document.songs
                },
              }
            },
          },
        }
      ]
    }),

    defineField({
      name: 'bandimage',
      title: 'Band Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'genres', // can this be defined separately and imported in both band and song schemas
      title: 'Band Genres',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: genres
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'influences',
      title: 'influences',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        sortable: true,
        layout: 'tags',
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },

})
