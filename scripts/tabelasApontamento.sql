create table tim_ap_apont_usur(
	
    cod_empresa char(15),
    cod_usuario int     ,
    data_ap     date    ,
    apinicio    datetime,
    apintervalo    datetime,
    apRetono    datetime,
    apfim    datetime,
    primary key(cod_empresa, cod_usuario)
	
);