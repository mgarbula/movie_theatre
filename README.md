# Movie Theatre Project
Project to reserve seats, add movies and add movies to schedule in the cinema.
# Required database tables
To run project you need to have three tables:
## Movies
Table with movies and following fields: title, id, director, length, description.
## Schedule
Table with schedule and following fields: id, time, movieId (foreign key), hall_id (foreign key), seats (varchar).
## Halls
Table with halls and following fields: id, name, rows_number, columns_number.
There is also a trigger needed. Trigger adds seats to schedule, based on number of `rows_number` and `columns_number`. It works when a movie is added to schedule and simply multplies those two values and creates varchar with '1'. For example for `rows_number = 3` and `columns_number = 4` it creates `seats = '111111111111'`.
