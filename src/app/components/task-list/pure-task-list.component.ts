
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-pure-task-list',
  templateUrl: 'pure-task-list.component.html'
})

 export default class PureTaskListComponent {
    /**
     * @ignore
     * Component property to define ordering of tasks
    */
    tasksInOrder: Task[] = [];

    @Input() loading = false;

    // tslint:disable-next-line: no-output-on-prefix
    @Output() onPinTask: EventEmitter<any> = new EventEmitter();

    // tslint:disable-next-line: no-output-on-prefix
    @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

    @Input()
    set tasks(arr: Task[]) {
      const initialTasks = [
        ...arr.filter((task) => task.state === 'TASK_PINNED'),
        ...arr.filter((task) => task.state !== 'TASK_PINNED'),
      ];
      const filteredTasks = initialTasks.filter(
        (task) => task.state === 'TASK_INBOX' || task.state === 'TASK_PINNED'
      );
      this.tasksInOrder = filteredTasks.filter(
        (task) => task.state === 'TASK_INBOX' || task.state === 'TASK_PINNED'
      );
    }
 }
