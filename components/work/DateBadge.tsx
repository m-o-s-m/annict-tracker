import { Badge } from '@mantine/core'
import React from 'react'

import { useLibraryEntry } from '../../lib/useLibraryEntry'

import type { BadgeProps } from '@mantine/core'
import type { ReactNode } from 'react'

export const DateBadge: React.FC<Omit<BadgeProps, 'color'>> = (props) => {
  const { entry } = useLibraryEntry()

  const badges = [] as ReactNode[]
  switch (entry.timeTag) {
    case 'yesterday':
      badges.push(
        <Badge {...props} color="green">
          昨日
        </Badge>
      )
      break
    case 'today':
      badges.push(
        <Badge {...props} color="red">
          今日
        </Badge>
      )
      break
    case 'tomorrow':
      badges.push(
        <Badge {...props} color="blue">
          明日
        </Badge>
      )
      break
    case 'finished':
      badges.push(
        <Badge {...props} color="green">
          終了
        </Badge>
      )
      break
    default:
      break
  }

  if (entry.nextProgram?.rebroadcast === true) {
    badges.push(
      <Badge {...props} color="yellow" variant="outline">
        再放送
      </Badge>
    )
  }

  return <>{badges}</>
}