import { defineField, defineType } from 'sanity'
import genres from './genres'

export default defineType({
  name: 'song',
  title: 'Song',
  type: 'document',
  fields: [
    defineField({
      name: 'band',
      title: 'Band Name',
      type: 'reference',
      to: [{ type: 'band' }]
    }),
    defineField({
      name: 'name',
      title: 'Song Name',
      type: 'string',
    }),
    defineField({
      name: 'spotifyid',
      title: 'Spotify ID',
      type: 'string',
      validation: Rule => Rule.custom(name => {
        if (typeof name === 'undefined') {
          return true // Allow undefined values
        }

        let hasSpecialCharacters = /[^A-Za-z0-9]+/g.test(name);

        return hasSpecialCharacters
          ? 'No special characters allowed, use id portion found in embed code'
          : true
      }).warning()
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
      name: 'cover',
      title: 'Song Cover',
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
      name: 'genres',
      title: 'Song Genres',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: genres
      },
    }),
    defineField({
      name: 'lyrics',
      title: 'Lyrics',
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },

})
