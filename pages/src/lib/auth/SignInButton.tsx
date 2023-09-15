import { Button } from '@mantine/core'
import React, { useEffect, useState } from 'react'

import { useCsrfToken } from './useCsrfToken.ts'

import type { MantineButtonProps } from '../mantine/button.ts'

export type SignInButtonProps = {
  providerId: string
} & MantineButtonProps

export function SignInButton({ providerId, children, ...props }: SignInButtonProps): React.JSX.Element {
  const csrfToken = useCsrfToken()

  const [origin, setOrigin] = useState('')
  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  return (
    <form action={`/api/auth/signin/${providerId}`} method="POST">
      {/* MEMO: input の value 属性を undefined にすると uncontrolled 扱いになるので回避している */}
      <input name="csrfToken" type="hidden" value={csrfToken ?? ''} />
      <input name="callbackUrl" type="hidden" value={origin} />
      <Button type="submit" {...props}>
        {children}
      </Button>
    </form>
  )
}