import SecretOpenButton from '../buttons/SecretOpenButton'

export default function SecretRoom({ onOpenSafe }) {
  return (
    <div>
      <SecretOpenButton
        backupPassword="easter05042021"
        onOpenSafe={onOpenSafe}
      />
    </div>
  )
}
