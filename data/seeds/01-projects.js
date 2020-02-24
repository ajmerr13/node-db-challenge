exports.seed = function(knex) {
    return knex('projects').insert([
      {
        id: 1, 
        project_name: 'Project 1',
        project_desc: 'project 1',
        project_completed: false
      },
      {
        id: 2, 
        project_name: 'Project 2',
        project_desc: 'project 2',
        project_completed: false
      },
      {
        id: 3, 
        project_name: 'Project 3',
        project_desc: 'project 3',
        project_completed: false
      }
    ]);
  };