import { getMonth } from 'date-fns'
import { GraphQLClient } from 'graphql-request'

import { getSdk } from '../../graphql/generated/sdk'
import { SeasonName } from '../../graphql/generated/types'

import type { GetViewerProgramsQuery } from '../../graphql/generated/operations'
import type { Sdk } from '../../graphql/generated/sdk'

export const createAnnictClient = (accessToken: string): Sdk => {
  const client = new GraphQLClient('https://api.annict.com/graphql', {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  })

  return getSdk(client)
}

export type ViewerProgram = NonNullable<
  NonNullable<NonNullable<NonNullable<GetViewerProgramsQuery['viewer']>['programs']>['nodes']>[0]
>

export type WorkEpisode = NonNullable<NonNullable<NonNullable<ViewerProgram['work']['episodes']>['nodes']>[0]>

export const getCurrentSeason = (): SeasonName => {
  const month = getMonth(new Date()) + 1
  if (1 <= month && month <= 3) {
    return SeasonName.Winter
  }
  if (4 <= month && month <= 6) {
    return SeasonName.Spring
  }
  if (7 <= month && month <= 9) {
    return SeasonName.Summer
  }

  return SeasonName.Autumn
}

export type AnnictProfile = typeof exampleAnnictProfile
const exampleAnnictProfile = {
  id: 2,
  username: 'shimbaco',
  name: 'Koji Shimba',
  description: 'アニメ好きが高じてこのサービスを作りました。聖地巡礼を年に数回しています。',
  url: 'http://shimba.co',
  avatar_url:
    'https://api-assets.annict.com/paperclip/profiles/1/tombo_avatars/master/d8af7adc8122c96ba7639218fd8b5ede332d42f2.jpg?1431357292',
  background_image_url:
    'https://api-assets.annict.com/paperclip/profiles/1/tombo_background_images/master/ee15d577fb2f2d61bdaf700cfab894b286a5762d.jpg?1486753229',
  records_count: 2369,
  followings_count: 258,
  followers_count: 205,
  wanna_watch_count: 237,
  watching_count: 103,
  watched_count: 335,
  on_hold_count: 45,
  stop_watching_count: 244,
  created_at: '2014-03-02T15:38:40.000Z',
  email: 'me@shimba.co',
  notifications_count: 0,
}