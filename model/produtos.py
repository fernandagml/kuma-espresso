from database.conexao import conectar

def recuperar_produtos():
    """Função criada para buscar os produtos no banco de dados."""

    try:
        conexao, cursor = conectar()
        cursor.execute("SELECT id_produto, nome_produto, preco_produto, descricao_produto, imagem_produto, id_categoria FROM tb_produtos;")
        produtos = cursor.fetchall()
        conexao.close()
        return produtos
    
    except Exception as erro:
        print(erro)
        return False
