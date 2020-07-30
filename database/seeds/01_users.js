
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          created_at : '2020-07-27 15:34:20',
          id : 1,
          role_id : 1,
          active : 0,
          passwordNeedReset : 0,
          token : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3VzZXJcL2xvZ2luIiwiaWF0IjoxNTk1ODgxNzIwLCJleHAiOjE1OTU4ODUzMjAsIm5iZiI6MTU5NTg4MTcyMCwianRpIjoiZG5WcnFNdWY3Z3ZWRXZhbSIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.LvlDjmPSxwT6nSnHO67a-EdbAOr-RtNcRnlOLX6v_-M',
          updated_at : '2020-07-27 16:28:40',
          username : 'superAdmin',
        },

      ]);
    });
};
