import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { ITodoList } from '../interfaces/todo-list.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: ITodoList[] | undefined;
  todoTitle: string = '';
  todoDescription: string = '';

  constructor(private todoListService: TodoListService) {
    this.getTodoList();
  }

  ngOnInit() {
    // this.todoList = this.todoListService.getTodoList();
  }

  onKey(event: any) {
    this.todoTitle = event.target.value;
  }

  getTodoList(): void {
    this.todoListService.getTodoList().subscribe((res) => {
      this.todoList = res?.response?.data || [];
    });
  }

  addTodoList() {
    const toDoListObj = { 'title': this.todoTitle, 'description': this.todoDescription};
    this.todoListService.addTodoList(toDoListObj).subscribe((res) => {
      this.getTodoList();
      this.resetToDoInput();
    });
  }

  resetToDoInput() {
    this.todoTitle = '';
  }
}
