import React, { Component } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import todos from "./service/todos";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCompletedCheck = this.handleCompletedCheck.bind(this);
  }

  state = {
    todos: [],
    newTodo: {
      title: "",
      completed: false,
    },
  };

  async componentDidMount() {
    try {
      let request = await todos.get();
      this.setState({
        todos: request,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleTitle(e) {
    this.setState((prevState) => ({
      newTodo: { ...prevState.newTodo, title: e.target.value },
    }));
  }

  handleCompleted(e) {
    this.setState((prevState) => ({
      newTodo: { ...prevState.newTodo, completed: e.target.checked },
    }))
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      // Отправляем данные и получаем ответ
      const response = await todos.post(this.state.newTodo);

      // Добавляем новую задачу к списку задач в состоянии
      this.setState(prevState => ({
        todos: [...prevState.todos, response],
        // Сбрасываем состояние newTodo после отправки
        newTodo: {
          title: "",
          completed: false,
        }
      }));

    } catch (error) {
      console.log(error);
    }
  }

  async handleDelete(id) {
    try {
      // применяем наш метод делит с папки сервис тодос
      //удаляем с базы mockapi
      await todos.delete(id);

      //адаляем из стейта через фильтр
      this.setState(prevState => ({
        todos: prevState.todos.filter(item => item.id !== id)
      }))

    } catch (error) {
      console.log(error);
    }

  }

  async handleCompletedCheck(item) {
    try {

      item.completed = !item.completed;
      let response = await todos.put(item.id, item);


      this.setState((prevState) => ({
        todos: prevState.todos.map(item => {
          if (item.id === response) item = response;
          return item
        })
      }), () => { console.log(); })


    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { todos, newTodo } = this.state;
    return (
      <div className="wrap">
        <Form newTodo={newTodo} handleTitle={this.handleTitle} handleCompleted={this.handleCompleted} handleSubmit={this.handleSubmit} />
        <List todos={todos} handleDelete={this.handleDelete} handleCompletedCheck={this.handleCompletedCheck} />
      </div>
    );
  }
}
