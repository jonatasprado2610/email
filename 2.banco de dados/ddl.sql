create database EmailDB;

use EmailDB;


create table tb_usuario (
	id_usuario			int primary key auto_increment,
    nm_usuario			varchar(200),
    dt_nascimento		date,
    ds_telefone			varchar(200),
	ds_email            varchar(200)
);