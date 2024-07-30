import React from 'react'
import CustomLink from './Link'
import { LiaBlogSolid } from 'react-icons/lia'

export default function Logo() {
  return (
    <CustomLink href='/'><LiaBlogSolid size={40} className={`text-[var(--bg-color)]`} /></CustomLink>
  )
}
