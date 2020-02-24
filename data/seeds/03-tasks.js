exports.seed = function(knex) {
    return knex('tasks').insert([
      {
        id: 1, 
        task_desc: 'Task 1',
        task_notes: 'First Task',
        task_completed: false,
        project_id: 2
      },
      {
        id: 2, 
        task_desc: 'task 2',
        task_notes: '',
        task_completed: false,
        project_id: 1
      },
      {
        id: 3, 
        task_desc: 'task 3',
        task_notes: '',
        task_completed: false,
        project_id: 2
      },
      {
        id: 4, 
        task_desc: 'task 4',
        task_notes: '',
        task_completed: false,
        project_id: 3
      },
      {
        id: 5, 
        task_desc: 'task 5',
        task_notes: '',
        task_completed: false,
        project_id: 3
      },
      {
        id: 6, 
        task_desc: 'task 6',
        task_notes: '',
        task_completed: false,
        project_id: 1
      }
    ]);
  };