import { useAtomValue } from 'jotai'
import { graphql, useFragment } from 'react-relay'

import { seasonFiltersState } from '../../recoil/filters.ts'

import type { useFilterBySeasons_LibraryEntry$key } from '../../../__generated__/useFilterBySeasons_LibraryEntry.graphql.ts'

export function useFilterBySeasons(entryRef: useFilterBySeasons_LibraryEntry$key): boolean {
  const { work } = useFragment(
    graphql`
      fragment useFilterBySeasons_LibraryEntry on LibraryEntry {
        work {
          seasonName
        }
      }
    `,
    entryRef
  )

  if (!work.seasonName) {
    return false
  }

  const seasonFilters = useAtomValue(seasonFiltersState)
  return seasonFilters.includes(work.seasonName)
}
