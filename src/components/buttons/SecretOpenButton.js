import key from '../../assets/key.svg'

export default function SecretOpenButton({ onOpenSafe, backupPassword }) {
  function handleSecretOpenButtonClick() {
    onOpenSafe(backupPassword)
  }
  return (
    <button className="SecretKeyButton" onClick={handleSecretOpenButtonClick}>
      <img src={key} alt="key" />
    </button>
  )
}
