import styled from 'styled-components';
import { useForm } from '../hooks/useForm';

// eslint-disable-next-line react/prop-types
export const TodoAdd = ({ handleNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<Input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='dobavit'
			/>

			<Button className='btn-add' type='submit'>
				add
			</Button>
		</form>
	);
};

const Input = styled.input`
  width: 350px;
  height: 40px;
  padding-left: 10px;
  outline: none;
  border: none;
  /* border-radius: 10px; */

  &::placeholder{
    font-size: 20px;
  }
`

const Button=styled.button`
  width: 100px;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  background-color: blue;
  border: none;
  color: white;
`