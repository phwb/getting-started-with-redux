const toggleTodo = (todo) => {
  return {
    ...todo,
    completed: !todo.completed
  };
};

const testToggleTodo = () => {
  const before = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const after = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(before);

  expect(
    toggleTodo(before)
  ).toEqual(after);
};

testToggleTodo();

console.info('All tests passed.');
