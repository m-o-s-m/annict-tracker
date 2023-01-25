import { Anchor, Button, Card, Stack, Text, Title } from '@mantine/core'
import { IconCheck, IconPhotoOff, IconSearch } from '@tabler/icons'
import React from 'react'
import { useRecoilValue } from 'recoil'

import { AnnictCreateRecordButton } from './AnnictCreateRecordButton'
import { EverythingSearchButton } from './EverythingSearchButton'
import { WorkImage } from './WorkImage'
import { WorkNextProgramInfo } from './WorkNextProgramInfo'
import { enableEverythingIntegrationState } from '../../lib/atoms'
import { useLibraryEntry } from '../../lib/useLibraryEntry'

import type { CardProps } from '@mantine/core'

export const WorkCard: React.FC<Omit<CardProps, 'children'>> = (props) => {
  const { entry } = useLibraryEntry()
  const enableEverythingIntegration = useRecoilValue(enableEverythingIntegrationState)

  return (
    <Card {...props}>
      <Card.Section>
        <WorkImage height={200} withPlaceholder placeholder={<IconPhotoOff />} title={entry.work.title} />
      </Card.Section>

      <Stack>
        <Title
          order={4}
          style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
          mt="sm"
          title={entry.work.title}
          color="blue.4"
        >
          <Anchor href={entry.workUrl} target="_blank" color="blue.4">
            {entry.work.title}
          </Anchor>
        </Title>

        <Text
          weight={500}
          style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
          title={entry.nextEpisodeLabel ?? undefined}
        >
          {entry.nextEpisodeLabel}
        </Text>

        <WorkNextProgramInfo />

        <Button.Group>
          <AnnictCreateRecordButton
            leftIcon={<IconCheck />}
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
          />
          {enableEverythingIntegration && (
            <EverythingSearchButton
              leftIcon={<IconSearch />}
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
            />
          )}
        </Button.Group>
      </Stack>
    </Card>
  )
}
