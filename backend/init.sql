drop table if exists messages;
drop table if exists users_in_conversation;
drop table if exists conversations;
drop table if exists users;
create table users (
  user_id int primary key auto_increment,
  username varchar(10) not null
);
create table conversations (
  convo_id int primary key auto_increment,
  convo_name varchar(30) not null default 'Chat',
  created_on timestamp not null default now()
);
create table users_in_conversation user_id int references users(user_id),
convo_id int references conversations(convo_id),
primary key (user_id, convo_id)
);
create table messages (
  message_id int primary key auto_increment,
  convo_id int references conversations(convo_id),
  user_id int references users(user_id),
  sent_time timestamp not null default now(),
  message varchar(140)
);