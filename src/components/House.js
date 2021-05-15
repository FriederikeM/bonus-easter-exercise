import SafeRoom from './rooms/SafeRoom'
import FireWall from './Firewall'
import { useState } from 'react'

export default function House() {
  const [password, setPassword] = useState('')

  return (
    <div>
      <SafeRoom password={password} onCloseSafe={openAndCloseSafe} />
      <FireWall onOpenSafe={openAndCloseSafe} />
    </div>
  )
  function openAndCloseSafe(backupPassword) {
    setPassword(backupPassword)
  }
}
