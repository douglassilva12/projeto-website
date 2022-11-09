/*
CREATE TABLE public.tbfatura (
	id serial4 NOT NULL,
	datavencimento date NOT NULL,
	datapagamento date NOT NULL,
	valorvencimento numeric(10, 2) NOT NULL,
	valorpagamento numeric(10, 2) NOT NULL,
	status smallint default 1 not null, -- 1 = aberto e 2 = pago
	CONSTRAINT pk_tbfatura PRIMARY KEY (id)
);
*/

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-10-08','2022-10-08',150.0,150.0,1);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-11-08','2022-12-08',150.0,150.0,1);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-12-08','2022-12-08',150.0,150.0,1);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-09-08','2022-09-08',150.0,150.0,1);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-08-08','2022-08-08',150.0,150.0,1);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-10-08','2022-10-08',150.0,150.0,2);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-11-08','2022-12-08',150.0,150.0,2);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-12-08','2022-12-08',150.0,150.0,2);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-09-08','2022-09-08',150.0,150.0,2);

insert into tbfatura(datavencimento,datapagamento,valorvencimento,valorpagamento,status) values ('2022-08-08','2022-08-08',150.0,150.0,2);

-- detalhes da fatura - criar tabela com detalhes da fatura
