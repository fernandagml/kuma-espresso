CREATE DATABASE IF NOT EXISTS db_kumaespresso;
USE db_kumaespresso;

CREATE TABLE IF NOT EXISTS tb_usuarios (
	nome_usuario VARCHAR(50) NOT NULL, 
    email_usuario VARCHAR(100) PRIMARY KEY,
    telefone_usuario VARCHAR(12),
    endereco_usuario VARCHAR(100),
    senha_usuario VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS tb_categorias_produtos (
	id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    categoria VARCHAR(50),
    imagem_categoria VARCHAR(250)
);

CREATE TABLE IF NOT EXISTS tb_produtos (
	id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR(50) NOT NULL,
    preco_produto REAL NOT NULL,
    descricao_produto VARCHAR(100),
    imagem_produto varchar(250),
    id_categoria VARCHAR(50),
    CONSTRAINT FK_produto_categoria
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias_produtos(id_categoria)
);