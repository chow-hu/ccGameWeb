const mapping = {
    "ACCOUNT_EXCEPTION": "A conta está anormal.",
    "SERVER_EXCEPTION": "Exceção do servidor.",

    "LOGIN_FAILED": "Falha no login. Por favor, tente novamente mais tarde.",

    "NET_INVALID_PARAM": "Erro de parâmetro",
    "NET_RECONNECT_FAILED": "Falha ao estabelecer conexão de rede. Por favor, tente novamente.",
    "NET_UNSTABLE": "A rede está instável no momento. Por favor, tente novamente mais tarde.",
    "NET_UNSTABLE_TO_CHECK": "A rede atual está instável. Verifique seu status de conexão.",

    "LYSETTING_4": "Cópia bem-sucedida.",
    "SHARE_APP_CONFIRM": "Confirme se você instalou este aplicativo.",
    "WHEEL_COPY_URL": "Link de compartilhamento copiado.",
    "WHEEL_IMG_SAVE": "Imagem salva.",

    "GAME_ERROR_1": "Falha",
    "GAME_ERROR_2": "A mesa não existe!",
    "GAME_ERROR_3": "Login repetido",
    "GAME_ERROR_4": "Você foi expulso da sala!",
    "GAME_ERROR_5": "Erro!",
    "GAME_ERROR_6": "Erro no parâmetro de entrada",
    "GAME_ERROR_7": "O UID está incorreto",
    "GAME_ERROR_8": "Erro no tipo de classificação",
    "GAME_ERROR_9": "Erro de status",
    "GAME_ERROR_10": "Não faça apostas duplicadas!",
    "GAME_ERROR_11": "Seu saldo é insuficiente!",
    "GAME_ERROR_12": "Seu saldo excede o limite máximo!",
    "GAME_ERROR_13": "A mesa está lotada!",
    "GAME_ERROR_14": "Falha ao receber: ID incorreto!",
    "GAME_ERROR_15": "Falha ao receber: nível insuficiente!",
    "GAME_ERROR_16": "TA atividade não está aberta!",
    "GAME_ERROR_17": "Não é possível sair de jogos em andamento",
    "GAME_ERROR_18": "O pôster de compartilhamento não foi encontrado!",
    "GAME_ERROR_19": "Você foi removido da sala anterior.",
    "GAME_ERROR_20": "Valor incorreto",
    "GAME_ERROR_21": "Você não está apostando",
    "GAME_ERROR_22": "Tempo limite da aposta excedido",
    "GAME_ERROR_TIP": ' Tente novamente.',

    "NOT_IN_ROOM": "Não há salas disponíveis para o jogo atual.",
    "DOWNLOAD_GAME_ERROR": "Falha ao baixar o jogo. Tente novamente.",
    "TOKEN_LOSE": ['Anomalia detectada no login da conta. Você foi desconectado.', 'Você foi desconectado do jogo. Retorne ao lobby para fazer login novamente.'],
    "SERVER_LOSE": ['Manutenção do servidor. Você foi desconectado.', 'Manutenção do servidor em andamento. Pedimos desculpas pelo inconveniente.'],
    "TIME_LOSE": ['Você não fez uma aposta há {0} minutos e foi removido da sala.', 'Desconectado do servidor. Retorne ao lobby e reconecte-se.'],
}

globalThis["char_pt"] = { ...globalThis['char_pt'], ...mapping }