import { useMemo } from 'react'
import { graphql, useFragment } from 'react-relay'

import { useNextProgram } from './useNextProgram.ts'

import type { useSortNumber_LibraryEntry$key } from '../../__generated__/useSortNumber_LibraryEntry.graphql.ts'

export function useSortNumber(entryRef: useSortNumber_LibraryEntry$key): number {
  const entry = useFragment(
    graphql`
      fragment useSortNumber_LibraryEntry on LibraryEntry {
        work {
          seasonYear
          seasonName
        }
        ...useNextProgram_LibraryEntry
      }
    `,
    entryRef
  )
  const {
    work: { seasonYear, seasonName },
  } = entry
  const nextProgram = useNextProgram(entry)

  return useMemo(() => {
    const year = seasonYear ?? 1900

    // シーズン名が未設定の場合は最後の日にする
    if (!seasonName) {
      return - new Date(year, 1, 1).getTime() / 1000
    }

    // 放送予定がない場合はシーズンの最後の日にする
    if (!nextProgram) {
      const month = { SPRING: 3, SUMMER: 6, AUTUMN: 9, WINTER: 0 }[seasonName]

      return - new Date(year, month, 1).getTime() / 1000
    }

    return - nextProgram.startAt.getTime() / 1000
  }, [])
}
