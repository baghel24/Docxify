import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Document = () => {
  return (
    <div>
        <Header>
          <div className='flex w-fir items-center justify-center gap-2'>
            <p className='text-white'>Test</p>
            </div>
            <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Header>
      <Editor/>
    </div>
  )
}

export default Document
