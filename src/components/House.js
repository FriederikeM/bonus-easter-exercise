import SafeRoom from './rooms/SafeRoom'
import FireWall from './Firewall'
import { useState } from 'react'

export default function House() {
  const [password, setPassword] = useState('')
  function openSafe(backupPassword) {
    setPassword(backupPassword)
  }

  function closeSafe(wrongPassword) {
    setPassword(wrongPassword)
  }

  return (
    <div>
      <SafeRoom password={password} onCloseSafe={closeSafe} />
      <FireWall onOpenSafe={openSafe} />
    </div>
  )
}
