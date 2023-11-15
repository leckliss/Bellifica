create database db_Bellifica;
use db_Bellifica;

drop database db_bellifica;

create table tbl_profissional(
	pk_id_prof int primary key not null auto_increment,
    nome_prof varchar (100) not null,
    dt_nasc_prof date not null,
    tele_prof varchar (20) not null,
    email_prof varchar(100)  not null,
    senha_prof varchar (10) not null,
    fk_cep_endereco int,
    fk_id_conta int,
    iniciante_prof boolean not null,
    profissao_prof enum ('Cabeleireiro','Barbeiro', 'Maquiador','Manicure','Pedicure','Designer de Sobrancelhas','Depilador','Consultor de Produtos de Beleza','Esteticista Corporal','Massoterapeuta','Esteticista'),
    foto_prof varchar (255) /*Url com foto*/,
    nome_negocio_prof varchar (100),
    foto_negocio_prof varchar (255) /*Url com foto*/
);
drop table tbl_profissional;

create table tbl_agendamento(
	pk_id_agendamento int primary key not null auto_increment,
    fk_id_cliente int,
    obs_cliente varchar (255),
    fk_id_prof int,
    fk_id_servico int,
    fk_cep_endereco int,
    dt_registro date,
    dt_agendamento date
);

drop table tbl_agendamento;


create table tbl_servico(
	pk_id_servico int primary key not null auto_increment,
    nome_servico varchar (20),
    fk_id_categoria int,
    valor_servico float (4.2),
    descricao_servico varchar (50),
    foto_servico varchar (255) /*Url com foto*/,
    fk_id_prof int
);

drop table tbl_servico;

create table tbl_categoria(
	pk_id_categoria int primary key not null auto_increment,
    nome_servico varchar (20)

);


create table tbl_endereco(
	pk_cep_endereco int primary key not null auto_increment,
    rua_endereco varchar (200),
    num_endereco varchar (5),
    complemento_endereco varchar (100),
    cidade_endereco varchar (100),
    estado_endereco enum ('Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'),
    inativo_endereco boolean
);

drop table tbl_endereco;

create table tbl_horario(
	pk_id_horario int primary key not null auto_increment,
    fk_id_prof int,
    dia_horario date,
    hora_marcada time,
    fk_id_agendamento int
);

create table tbl_contato(
	pk_id_contato int not null primary key auto_increment,
    fk_id_prof int,
	insta_prof varchar (100),
    link_insta_prof varchar (255),
    tiktok_prof varchar (100),
    link_tiktok_prof varchar (255),
    email_comer_prof varchar (100),
    whatsapp_prof varchar (20)
);
drop table tbl_contato;

create table tbl_conta_bancaria(
	pk_id_conta int primary key not null auto_increment,
	fk_id_prof int,
    banco_prof varchar (50),
    titular_conta varchar (20),
    cpf_prof varchar (20),
    agencia_banco_prof varchar (20),
    conta_prof varchar (20)
);

create table tbl_cliente (
	pk_id_cliente int primary key not null auto_increment,
    nome_cliente varchar (50),
    numero_cliente int,
    email_cliente varchar (20)
);

create table tbl_conteudo(
	pk_id_consteudo int primary key not null auto_increment,
    url_conteudo varchar (255),
    tipo_conteudo int,
    fk_id_categoria int,
    fk_id_curso int
);

drop table tbl_conteudo;

create table tbl_curso(
	pk_id_curso int primary key not null auto_increment,
    url_curso varchar (255),
    tipo_curso varchar (100),
    fk_id_categoria int
);


alter table tbl_profissional add constraint fk_cep_endereco foreign key (fk_cep_endereco) references tbl_endereco (pk_cep_endereco);
alter table tbl_profissional add constraint fk_id_conta foreign key (fk_id_conta) references tbl_conta_bancaria (pk_id_conta);
alter table tbl_agendamento add constraint fk_id_cliente foreign key (fk_id_cliente) references tbl_cliente (pk_id_cliente);
alter table tbl_agendamento add constraint fk_id_prof_agen foreign key (fk_id_prof) references tbl_profissional (pk_id_prof);
alter table tbl_agendamento add constraint fk_id_servico foreign key (fk_id_servico) references tbl_servico (pk_id_servico);
alter table tbl_agendamento add constraint fk_cep_endereco_agen foreign key (fk_cep_endereco) references tbl_endereco (pk_cep_endereco);
alter table tbl_servico add constraint fk_id_categoria foreign key (fk_id_categoria) references tbl_categoria (pk_id_categoria);
alter table tbl_servico add constraint fk_id_prof foreign key (fk_id_prof) references tbl_profissional (pk_id_prof);
alter table tbl_horario add constraint fk_id_prof_horario foreign key (fk_id_prof) references tbl_profissional (pk_id_prof);
alter table tbl_horario add constraint fk_id_agendamento foreign key (fk_id_agendamento) references tbl_agendamento (pk_id_agendamento);
alter table tbl_contato add constraint fk_id_prof_cont foreign key (fk_id_prof) references tbl_profissional (pk_id_prof);
alter table tbl_conta_bancaria add constraint fk_id_prof_banc foreign key (fk_id_prof) references tbl_profissional  (pk_id_prof);
alter table tbl_conteudo add constraint fk_id_categoria_conteudo foreign key (fk_id_categoria) references tbl_categoria (pk_id_categoria);
alter table tbl_conteudo add constraint fk_id_curso foreign key (fk_id_curso) references tbl_curso (pk_id_curso);
alter table tbl_curso add constraint fk_id_categoria_curso foreign key (fk_id_categoria) references tbl_categoria (pk_Id_categoria);

