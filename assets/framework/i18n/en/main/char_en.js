/*
 * @Description: 文字ID中文映射
 * @Author: zy
 * @Date: 2021-02-26 14:50:08
 * @Reference:
 */
const mapping = {
    "ACCOUNT_EXCEPTION": "The account is abnormal.",
    "SERVER_EXCEPTION": "Server exception.",

    "LOGIN_FAILED": "Login failed, please try again later.",

    "NET_INVALID_PARAM": "Parameter error",
    "NET_RECONNECT_FAILED": "Failed to establish network connection. Please try again.",
    "NET_UNSTABLE": "The network is currently unstable. Please try again later.",
    "NET_UNSTABLE_TO_CHECK": "The current network is unstable. Please check your network status.",

    "LYSETTING_4": "Copy successful.",
    "SHARE_APP_CONFIRM": "Please confirm you have installed this app.",
    "WHEEL_COPY_URL": "Share link copied.",
    "WHEEL_IMG_SAVE": "Picture saved.",

    "GAME_ERROR_1": "Fail",
    "GAME_ERROR_2": "The table is not exist!",
    "GAME_ERROR_3": "Login repeat",
    "GAME_ERROR_4": "You have been kicked out of the room!",
    "GAME_ERROR_5": "Error!",
    "GAME_ERROR_6": "Input param error",
    "GAME_ERROR_7": "The uid is error",
    "GAME_ERROR_8": "The ranking type error",
    "GAME_ERROR_9": "The status error",
    "GAME_ERROR_10": "Please do not place duplicate bets!",
    "GAME_ERROR_11": "Your balance is not enough!",
    "GAME_ERROR_12": "Your balance exceeds the maximum limit!",
    "GAME_ERROR_13": "The table is full of people!",
    "GAME_ERROR_14": "Received fail,id is error!",
    "GAME_ERROR_15": "Received fail,level not enough!",
    "GAME_ERROR_16": "The activity is not open!",
    "GAME_ERROR_17": "Cannot exit running games",
    "GAME_ERROR_18": "The share poster is not found!",
    "GAME_ERROR_19": "You have been removed from the previous room.",
    "GAME_ERROR_20": "Wrong amount",
    "GAME_ERROR_21": "You are not betting",
    "GAME_ERROR_22": "You are betting timeout",
    "GAME_ERROR_TIP": ' Please try again.',

    "NOT_IN_ROOM": "No room for the current game.",
    "DOWNLOAD_GAME_ERROR": "Failed to download the game, Please try again.",
    "TOKEN_LOSE": ['Account login anomaly detected. You have been disconnected.', 'You have been logged out of the game. Please return to the lobby to log in again.'],
    "SERVER_LOSE": ['Server maintenance, you have been disconnected .', 'Server maintenance in progress. Sorry for the inconvenience.'],
    "TIME_LOSE": ['You have not placed a bet for {0} minutes and have been removed from the room.', 'Disconnected from server. Please return to lobby and reconnect.'],
}

globalThis["char_en"] = { ...globalThis['char_en'], ...mapping }