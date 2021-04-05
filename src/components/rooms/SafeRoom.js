import Safe from '../Safe'
import CloseButton from '../buttons/CloseButton'

export default function SafeRoom({ password, onCloseSafe }) {
  return (
    <div className="SafeRoom">
      <Safe password={password} />
      <CloseButton onCloseSafe={onCloseSafe} />
    </div>
  )
}
