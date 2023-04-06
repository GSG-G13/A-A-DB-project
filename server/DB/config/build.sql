begin;  -- Start of build.sql
drop table if exists azkar cascade;  -- Drop table if exists

create table azkar (
    id serial primary key,
    zkir varchar(255) not null,
    description varchar(255),
    created_at timestamp not null default now(),
    updated_at timestamp not null default now()
);

insert into azkar (zkir, description) values ('Post 1', 'Description 1');

commit; -- End of build.sql