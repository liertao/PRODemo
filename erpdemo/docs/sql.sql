drop table if exists account;
drop table if exists category;
/*创建数据表*/
create table account
(
	/*管理员编号，自增长*/
	id 		int not null auto_increment,
	/*管理员登录名*/
	login 	varchar(20),
	/*管理员姓名*/
	name 	varchar(20),
	/*管理员密码*/
	pass 	varchar(20),
	/*设置编码为主键*/
	primary key(id)
);
create table category
(
	/*类别编号，自增长*/
	id 			int not null auto_increment,
	/*类别名称*/
	type 		varchar(20),
	/*类别名称类别是否为热点，是才会显示在首页*/
	hot 		bool default false,
	/*外建，此类别由哪位管理员管理*/
	aid			int,
	/*设置主键*/
	primary key(id)
);
/*插入数据*/
INSERT INTO account(login,name,pass) values('admin','管理员','admin');
INSERT INTO account(login,name,pass) values('user','客服A','user');

INSERT INTO category(type,hot,aid) values('男士休闲',true,1);
INSERT INTO category(type,hot,aid) values('女士休闲',true,1);
INSERT INTO category(type,hot,aid) values('儿童休闲',true,2);

/**/
select * from account;
select * from category;