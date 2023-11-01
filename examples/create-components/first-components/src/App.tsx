import './App.css'
// Import Profile component as named import
import { Profile } from './custom-component';
import { TodoList } from './todolist';

// Create and export root component as default
export default function App() {
	return (
		<>
			<Profile />
			<TodoList />
		</>
	)
}
