exports.seed = function(knex) {
    return knex('resources').insert([
      {
        id: 1, 
        resource_name: 'Resource 1',
        resource_desc: 'resource 1'
      },
      {
        id: 2, 
        resource_name: 'Resouce 2 ',
        resource_desc: 'resource 2',
      },
      {
        id: 3, 
        resource_name: 'Resource 3',
        resource_desc: 'resource 3'
      },
    ]);
  };