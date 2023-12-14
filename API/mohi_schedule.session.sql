show databases;
create table periods(
period_id INT not NULL,
period_name varchar(50) not NULL,
primary key (period_id)
);
create table schedules(
schedule_id INT not NULL,
schedule_name varchar(50) not NULL,
primary key (schedule_id)
);
create table period_schedules(
period_schedule_id INT not NULL,
schedule_id INT REFERENCES schedules(schedule_id),
period_id INT REFERENCES periods(period_id),
start_time TIME not NULL,
end_time TIME not NULL,
option_id INT, 
primary key (period_schedule_id),
);
create table options(
option_id INT not NULL,
option_name varchar(50) not NULL,
option_description VARCHAR(1000),
primary key (option_id)
);
create table date_schedules(
    date_schedule_id INT not NULL,
    day DATE not NULL,
    schedule_id INT not NULL,
    primary key (date_schedule_id),
    foreign key REFERENCES schedules (schedule_id),
);

SELECT * FROM date_schedules;