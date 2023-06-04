
type HeaderProps = {
  onAddNewTodo: () => void;
}

export function Header({ onAddNewTodo }: HeaderProps) {
  return (
    <header>
      <h1>My new innovate to-do list!</h1>
      <button onClick={onAddNewTodo}>Add new todo</button>
    </header>
  )
}
