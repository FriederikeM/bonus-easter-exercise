import lock from '../../assets/lock.svg'

export default function CloseButton({ onCloseSafe }) {
  function handleCloseButton() {
    onCloseSafe('Christmas')
  }
  return (
    <button onClick={handleCloseButton}>
      <img src={lock} alt="lock" />
    </button>
  )
}
