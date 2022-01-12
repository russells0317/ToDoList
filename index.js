function App() {
    const [todos, setTodos] = React.useState([
        {
            text: 'Wake up!',
            isCompleted: false,
        },
        {
            text: 'Spend time with the cat',
            isCompleted: false,
        },
        {
            text: '3D print all night',
            isCompleted: false,
        },
        {
            text: 'code like crazy',
            isCompleted: false,
        }
    ]);
    const [value, setValue] = React.useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        const newTodos = [...todos, {text:value, isCompleted: false}];
        setTodos(newTodos);
        setValue('');
    }
    const removeTodo = e => {
        const index = Number(e.target.id);
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }
    return (<>
        {todos.map((todo,i) => 
            <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>)}
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add Todo..."
                onChange={e => setValue(e.target.value)}
                />
        </form>
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)