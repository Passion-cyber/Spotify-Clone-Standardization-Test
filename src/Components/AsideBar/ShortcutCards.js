const ShortcutCards = ({icon, title}) => {
  return (
    <div className='shortcut-cards'>
        <h2 className='shortcut-icon'>{icon}</h2> <h2 className='shortcut-title'>{title}</h2>
    </div>
  )
}

export default ShortcutCards