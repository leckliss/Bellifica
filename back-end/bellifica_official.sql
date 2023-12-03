create database CLIENT;
use CLIENT;

create table users(
	pk_id_prof bigint(20) primary key not null auto_increment,
    nome_prof varchar (100) not null,
    sobrenome_prof varchar (255) not null,
    dt_nasc_prof datetime(6) not null,
    tele_prof varchar (20) not null,
    email_prof varchar(255)  not null,
    senha_prof varchar (255) not null,
    fk_cep_endereco int(11),
    fk_id_conta int(11),
    iniciante_prof bit(1) not null,
    profissao_prof enum('CABELELEIRO','BARBEIRO','MAQUIADOR','MANICURE','PEDICURE','DESIGNER_SOMBRANCELHAS','DEPILADOR','CONSULTOR_PRODUTOS_BELEZA','ESTETICISTA_CORPORAL','MASSOTERAPEUTA','ESTETICISTA'),
    foto_prof varchar (255),
    nome_negocio_prof varchar (255),
    foto_negocio_prof varchar (255)
);

select * from users;
select * from users_regras;

create table regras(
	id bigint(20) primary key not null auto_increment,
    nome_regra varchar(255)
);

create table users_regras(
	users_pk_id_prof bigint(20),
    regras_id bigint(20),
    PRIMARY KEY (fk_id_prof, fk_id_regra),
    FOREIGN KEY (fk_id_prof) REFERENCES users(pk_id_prof),
    FOREIGN KEY (fk_id_regra) REFERENCES regras(pk_id_regra)
);

select * from regras;

insert into regras(nome_regra) values("AGENDAMENTO_SELECT");
insert into regras(nome_regra) values("AGENDAMENTO_INSERT");
insert into regras(nome_regra) values("AGENDAMENTO_UPDATE");
insert into regras(nome_regra) values("AGENDAMENTO_DELETE");