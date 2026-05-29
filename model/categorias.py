from database.conexao import conectar

def recuperar_categorias():
    """Função criada para buscar as categorias no banco de dados."""

    try:
        conexao, cursor = conectar()
        cursor.execute("SELECT id_categoria, categoria, imagem_categoria FROM tb_categorias_produtos;")
        categorias = cursor.fetchall()
        conexao.close()
        return categorias
    
    except Exception as erro:
        print(erro)
        return False