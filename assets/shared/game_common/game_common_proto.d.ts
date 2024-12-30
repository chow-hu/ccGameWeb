import * as $protobuf from "protobufjs";
export = ccgame;

declare namespace ccgame {


    /** Namespace client_proto. */
    namespace client_proto {

        /** COMMON_MSG_SUB_ID enum. */
        enum COMMON_MSG_SUB_ID {
            COMM_MSG_SUB_ID_NULL = 0,
            COMM_MSG_ID_MIN = 3000,
            COMM_MSG_GET_PROP_PUSH = 3001,
            COMM_MSG_GET_RULES_REQ = 3002,
            COMM_MSG_GET_RULES_RESP = 3003,
            COMM_MSG_USER_GUIDE_PUSH = 3004,
            COMM_MSG_GUIDE_FINISH_REQ = 3005,
            COMM_MSG_GUIDE_FINISH_RESP = 3006,
            COMM_MSG_USER_NOTIFY_PUSH = 3007,
            COMM_MSG_ID_MAX = 3050
        }

        /** SERVER_INNER_MSG_TYPE enum. */
        enum SERVER_INNER_MSG_TYPE {
            SERVER_TYPE_NONE = 0,
            SERVER_TYPE_GAME_PLAYER = 1,
            SERVER_TYPE_AGENT = 2,
            SERVER_TYPE_GAMEALLOC = 3,
            SERVER_TYPE_ONLINE = 4,
            SERVER_TYPE_ROOMSERVER = 5,
            SERVER_TYPE_MASTER = 6,
            SERVER_TYPE_ASSET = 7,
            SERVER_TYPE_DB_UPDATE = 8,
            SERVER_TYPE_USERINFO = 9,
            SERVER_TYPE_PHP_AGENT = 10,
            SERVER_TYPE_ACCOUNT = 11,
            SERVER_TYPE_DISPATCH = 12,
            SERVER_TYPE_RANK = 13,
            SERVER_TYPE_SERVICE_MANAGER = 14,
            SERVER_TYPE_BRIDGE_PROXY = 16,
            SERVER_TYPE_ACTIVITY = 18,
            SERVER_TYPE_PHP = 19,
            SERVER_TYPE_GAME_MANAGE = 20,
            SERVER_TYPE_MAIL = 21,
            SERVER_TYPE_GAME_RPOXY_MANAGE = 22,
            SERVER_TYPE_USER_PROXY = 23,
            SERVER_TYPE_LABEL = 24,
            SERVER_TYPE_FACE = 25,
            SERVER_TYPE_BANNER = 26,
            SERVER_TYPE_TGAME = 28,
            SERVER_TYPE_EVENT = 29,
            SERVER_TYPE_COMPANY = 30,
            SERVER_TYPE_STATISTIC = 31,
            SERVER_TYPE_TRANSACTIONS = 32,
            SERVER_TYPE_ASSET_FOLLOW = 33,
            SERVER_TYPE_ANNOUNCEMENT = 34,
            SERVER_TYPE_GETRANK = 35,
            SERVER_TYPE_GIFT = 45,
            SERVER_TYPE_ROOMALLOC = 47,
            SERVER_TYPE_VIP_BET_REDATE = 48,
            SERVER_TYPE_AGENT_RANK = 53,
            SERVER_TYPE_AGENT_GET_RANK = 55,
            SERVER_TYPE_FLOATING = 56,
            SERVER_TYPE_REPORT_SWITCH = 59
        }

        /** PROP_ID enum. */
        enum PROP_ID {
            PROP_NULL = 0,
            PROP_AMOUNT = 1,
            PROP_COIN = 2,
            PROP_TOTALBET = 3,
            PROP_TOTALRECHARGE = 4,
            PROP_BALANCE = 5,
            PROP_WITHDRAW_LIMIT = 6,
            PROP_DIAMOND = 7,
            PROP_EXP = 8,
            PROP_PRT = 9
        }

        /** Properties of a GetPropPush. */
        interface IGetPropPush {

            /** GetPropPush reward */
            reward?: (client_proto.IPropItem[]|null);

            /** GetPropPush propfrom */
            propfrom?: (client_proto.GetPropPush.PROP_FROM|null);

            /** GetPropPush params */
            params?: (string|null);
        }

        /** Represents a GetPropPush. */
        class GetPropPush implements IGetPropPush {

            /**
             * Constructs a new GetPropPush.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.IGetPropPush);

            /** GetPropPush reward. */
            public reward: client_proto.IPropItem[];

            /** GetPropPush propfrom. */
            public propfrom: client_proto.GetPropPush.PROP_FROM;

            /** GetPropPush params. */
            public params: string;

            /**
             * Creates a new GetPropPush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetPropPush instance
             */
            public static create(properties?: client_proto.IGetPropPush): client_proto.GetPropPush;

            /**
             * Encodes the specified GetPropPush message. Does not implicitly {@link client_proto.GetPropPush.verify|verify} messages.
             * @param message GetPropPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.IGetPropPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetPropPush message, length delimited. Does not implicitly {@link client_proto.GetPropPush.verify|verify} messages.
             * @param message GetPropPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.IGetPropPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetPropPush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetPropPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.GetPropPush;

            /**
             * Decodes a GetPropPush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetPropPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.GetPropPush;

            /**
             * Verifies a GetPropPush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetPropPush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetPropPush
             */
            public static fromObject(object: { [k: string]: any }): client_proto.GetPropPush;

            /**
             * Creates a plain object from a GetPropPush message. Also converts values to other types if specified.
             * @param message GetPropPush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.GetPropPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetPropPush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GetPropPush {

            /** PROP_FROM enum. */
            enum PROP_FROM {
                FRESH = 0,
                RECHARGE = 1,
                ACCUMULATED = 2,
                EMAIL_PLATFORM = 3,
                EMAIL_PERSONAL = 4,
                SPIN_WITHDRAW = 5,
                WALLET_RECHARGE = 6,
                WALLET_WITHDRAW = 7,
                VIP_WELFARE = 8,
                COMMISSIONS = 9,
                INVITE_ATIVITE = 10,
                GIFT = 11,
                VIP_BET_REDATE = 12,
                ACTIVITE_GIFT = 13,
                ACTIVITY_REGRESS_GIFT = 14,
                ACTIVITY_REGRESS_WELFARE = 15,
                ACTIVITY_SURPRISE_GIFT = 16
            }
        }

        /** Properties of a PropItem. */
        interface IPropItem {

            /** PropItem id */
            id?: (client_proto.PROP_ID|null);

            /** PropItem num */
            num?: (number|Long|null);
        }

        /** Represents a PropItem. */
        class PropItem implements IPropItem {

            /**
             * Constructs a new PropItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.IPropItem);

            /** PropItem id. */
            public id: client_proto.PROP_ID;

            /** PropItem num. */
            public num: (number|Long);

            /**
             * Creates a new PropItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PropItem instance
             */
            public static create(properties?: client_proto.IPropItem): client_proto.PropItem;

            /**
             * Encodes the specified PropItem message. Does not implicitly {@link client_proto.PropItem.verify|verify} messages.
             * @param message PropItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.IPropItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PropItem message, length delimited. Does not implicitly {@link client_proto.PropItem.verify|verify} messages.
             * @param message PropItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.IPropItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PropItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PropItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.PropItem;

            /**
             * Decodes a PropItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PropItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.PropItem;

            /**
             * Verifies a PropItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PropItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PropItem
             */
            public static fromObject(object: { [k: string]: any }): client_proto.PropItem;

            /**
             * Creates a plain object from a PropItem message. Also converts values to other types if specified.
             * @param message PropItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.PropItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PropItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetRulesReq. */
        interface IGetRulesReq {

            /** GetRulesReq key */
            key?: (string|null);

            /** GetRulesReq lang */
            lang?: (string|null);
        }

        /** Represents a GetRulesReq. */
        class GetRulesReq implements IGetRulesReq {

            /**
             * Constructs a new GetRulesReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.IGetRulesReq);

            /** GetRulesReq key. */
            public key: string;

            /** GetRulesReq lang. */
            public lang: string;

            /**
             * Creates a new GetRulesReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetRulesReq instance
             */
            public static create(properties?: client_proto.IGetRulesReq): client_proto.GetRulesReq;

            /**
             * Encodes the specified GetRulesReq message. Does not implicitly {@link client_proto.GetRulesReq.verify|verify} messages.
             * @param message GetRulesReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.IGetRulesReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetRulesReq message, length delimited. Does not implicitly {@link client_proto.GetRulesReq.verify|verify} messages.
             * @param message GetRulesReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.IGetRulesReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetRulesReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetRulesReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.GetRulesReq;

            /**
             * Decodes a GetRulesReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetRulesReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.GetRulesReq;

            /**
             * Verifies a GetRulesReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetRulesReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetRulesReq
             */
            public static fromObject(object: { [k: string]: any }): client_proto.GetRulesReq;

            /**
             * Creates a plain object from a GetRulesReq message. Also converts values to other types if specified.
             * @param message GetRulesReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.GetRulesReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetRulesReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetRulesResp. */
        interface IGetRulesResp {

            /** GetRulesResp key */
            key?: (string|null);

            /** GetRulesResp rules */
            rules?: (string|null);
        }

        /** Represents a GetRulesResp. */
        class GetRulesResp implements IGetRulesResp {

            /**
             * Constructs a new GetRulesResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.IGetRulesResp);

            /** GetRulesResp key. */
            public key: string;

            /** GetRulesResp rules. */
            public rules: string;

            /**
             * Creates a new GetRulesResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetRulesResp instance
             */
            public static create(properties?: client_proto.IGetRulesResp): client_proto.GetRulesResp;

            /**
             * Encodes the specified GetRulesResp message. Does not implicitly {@link client_proto.GetRulesResp.verify|verify} messages.
             * @param message GetRulesResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.IGetRulesResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetRulesResp message, length delimited. Does not implicitly {@link client_proto.GetRulesResp.verify|verify} messages.
             * @param message GetRulesResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.IGetRulesResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetRulesResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetRulesResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.GetRulesResp;

            /**
             * Decodes a GetRulesResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetRulesResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.GetRulesResp;

            /**
             * Verifies a GetRulesResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetRulesResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetRulesResp
             */
            public static fromObject(object: { [k: string]: any }): client_proto.GetRulesResp;

            /**
             * Creates a plain object from a GetRulesResp message. Also converts values to other types if specified.
             * @param message GetRulesResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.GetRulesResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetRulesResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** GuideStataus enum. */
        enum GuideStataus {
            GUIDE_STATUS_NULL = 0,
            GUIDE_STATUS_READY = 1,
            GUIDE_STATUS_FINISH = 2
        }

        /** Properties of a UserGuidePush. */
        interface IUserGuidePush {

            /** UserGuidePush guide */
            guide?: (string[]|null);
        }

        /** Represents a UserGuidePush. */
        class UserGuidePush implements IUserGuidePush {

            /**
             * Constructs a new UserGuidePush.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.IUserGuidePush);

            /** UserGuidePush guide. */
            public guide: string[];

            /**
             * Creates a new UserGuidePush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserGuidePush instance
             */
            public static create(properties?: client_proto.IUserGuidePush): client_proto.UserGuidePush;

            /**
             * Encodes the specified UserGuidePush message. Does not implicitly {@link client_proto.UserGuidePush.verify|verify} messages.
             * @param message UserGuidePush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.IUserGuidePush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserGuidePush message, length delimited. Does not implicitly {@link client_proto.UserGuidePush.verify|verify} messages.
             * @param message UserGuidePush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.IUserGuidePush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserGuidePush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserGuidePush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.UserGuidePush;

            /**
             * Decodes a UserGuidePush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserGuidePush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.UserGuidePush;

            /**
             * Verifies a UserGuidePush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserGuidePush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserGuidePush
             */
            public static fromObject(object: { [k: string]: any }): client_proto.UserGuidePush;

            /**
             * Creates a plain object from a UserGuidePush message. Also converts values to other types if specified.
             * @param message UserGuidePush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.UserGuidePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserGuidePush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserGuideFinishReq. */
        interface IUserGuideFinishReq {

            /** UserGuideFinishReq guide */
            guide?: (string|null);
        }

        /** Represents a UserGuideFinishReq. */
        class UserGuideFinishReq implements IUserGuideFinishReq {

            /**
             * Constructs a new UserGuideFinishReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.IUserGuideFinishReq);

            /** UserGuideFinishReq guide. */
            public guide: string;

            /**
             * Creates a new UserGuideFinishReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserGuideFinishReq instance
             */
            public static create(properties?: client_proto.IUserGuideFinishReq): client_proto.UserGuideFinishReq;

            /**
             * Encodes the specified UserGuideFinishReq message. Does not implicitly {@link client_proto.UserGuideFinishReq.verify|verify} messages.
             * @param message UserGuideFinishReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.IUserGuideFinishReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserGuideFinishReq message, length delimited. Does not implicitly {@link client_proto.UserGuideFinishReq.verify|verify} messages.
             * @param message UserGuideFinishReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.IUserGuideFinishReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserGuideFinishReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserGuideFinishReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.UserGuideFinishReq;

            /**
             * Decodes a UserGuideFinishReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserGuideFinishReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.UserGuideFinishReq;

            /**
             * Verifies a UserGuideFinishReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserGuideFinishReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserGuideFinishReq
             */
            public static fromObject(object: { [k: string]: any }): client_proto.UserGuideFinishReq;

            /**
             * Creates a plain object from a UserGuideFinishReq message. Also converts values to other types if specified.
             * @param message UserGuideFinishReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.UserGuideFinishReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserGuideFinishReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserGuideFinishResp. */
        interface IUserGuideFinishResp {

            /** UserGuideFinishResp result */
            result?: (number|null);
        }

        /** Represents a UserGuideFinishResp. */
        class UserGuideFinishResp implements IUserGuideFinishResp {

            /**
             * Constructs a new UserGuideFinishResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.IUserGuideFinishResp);

            /** UserGuideFinishResp result. */
            public result: number;

            /**
             * Creates a new UserGuideFinishResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserGuideFinishResp instance
             */
            public static create(properties?: client_proto.IUserGuideFinishResp): client_proto.UserGuideFinishResp;

            /**
             * Encodes the specified UserGuideFinishResp message. Does not implicitly {@link client_proto.UserGuideFinishResp.verify|verify} messages.
             * @param message UserGuideFinishResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.IUserGuideFinishResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserGuideFinishResp message, length delimited. Does not implicitly {@link client_proto.UserGuideFinishResp.verify|verify} messages.
             * @param message UserGuideFinishResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.IUserGuideFinishResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserGuideFinishResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserGuideFinishResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.UserGuideFinishResp;

            /**
             * Decodes a UserGuideFinishResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserGuideFinishResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.UserGuideFinishResp;

            /**
             * Verifies a UserGuideFinishResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserGuideFinishResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserGuideFinishResp
             */
            public static fromObject(object: { [k: string]: any }): client_proto.UserGuideFinishResp;

            /**
             * Creates a plain object from a UserGuideFinishResp message. Also converts values to other types if specified.
             * @param message UserGuideFinishResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.UserGuideFinishResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserGuideFinishResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** NotifyPushType enum. */
        enum NotifyPushType {
            NORMAL = 0,
            ERROR = 1,
            NOTIFY = 2,
            BROADCAST = 3
        }

        /** Properties of a NotifyPush. */
        interface INotifyPush {

            /** NotifyPush type */
            type?: (number|null);

            /** NotifyPush code */
            code?: (number|null);

            /** NotifyPush values */
            values?: (string|null);
        }

        /** Represents a NotifyPush. */
        class NotifyPush implements INotifyPush {

            /**
             * Constructs a new NotifyPush.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.INotifyPush);

            /** NotifyPush type. */
            public type: number;

            /** NotifyPush code. */
            public code: number;

            /** NotifyPush values. */
            public values: string;

            /**
             * Creates a new NotifyPush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NotifyPush instance
             */
            public static create(properties?: client_proto.INotifyPush): client_proto.NotifyPush;

            /**
             * Encodes the specified NotifyPush message. Does not implicitly {@link client_proto.NotifyPush.verify|verify} messages.
             * @param message NotifyPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.INotifyPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NotifyPush message, length delimited. Does not implicitly {@link client_proto.NotifyPush.verify|verify} messages.
             * @param message NotifyPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.INotifyPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NotifyPush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NotifyPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.NotifyPush;

            /**
             * Decodes a NotifyPush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NotifyPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.NotifyPush;

            /**
             * Verifies a NotifyPush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NotifyPush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NotifyPush
             */
            public static fromObject(object: { [k: string]: any }): client_proto.NotifyPush;

            /**
             * Creates a plain object from a NotifyPush message. Also converts values to other types if specified.
             * @param message NotifyPush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.NotifyPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NotifyPush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace roomalloc. */
    namespace roomalloc {

        /** ROOMALLOC_CMD enum. */
        enum ROOMALLOC_CMD {
            ROOMALLOC_CMD_NONE = 0,
            ROOMALLOC_CMD_ALLOC_TABLE_REQ = 4702,
            ROOMALLOC_CMD_ALLOC_TABLE_RESP = 4703,
            ROOMALLOC_CMD_LEVEL_CONFIG_REQ = 4704,
            ROOMALLOC_CMD_LEVEL_CONFIG_RESP = 4705
        }

        /** Properties of an AllocTableReq. */
        interface IAllocTableReq {

            /** AllocTableReq uid */
            uid?: (number|null);

            /** AllocTableReq game_id */
            game_id?: (number|null);

            /** AllocTableReq alloc_param */
            alloc_param?: (number|Long|null);

            /** AllocTableReq except_tid */
            except_tid?: (number|null);

            /** AllocTableReq target_tid */
            target_tid?: (number|null);

            /** AllocTableReq userinfo */
            userinfo?: (string|null);
        }

        /** Represents an AllocTableReq. */
        class AllocTableReq implements IAllocTableReq {

            /**
             * Constructs a new AllocTableReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: roomalloc.IAllocTableReq);

            /** AllocTableReq uid. */
            public uid: number;

            /** AllocTableReq game_id. */
            public game_id: number;

            /** AllocTableReq alloc_param. */
            public alloc_param: (number|Long);

            /** AllocTableReq except_tid. */
            public except_tid: number;

            /** AllocTableReq target_tid. */
            public target_tid: number;

            /** AllocTableReq userinfo. */
            public userinfo: string;

            /**
             * Creates a new AllocTableReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AllocTableReq instance
             */
            public static create(properties?: roomalloc.IAllocTableReq): roomalloc.AllocTableReq;

            /**
             * Encodes the specified AllocTableReq message. Does not implicitly {@link roomalloc.AllocTableReq.verify|verify} messages.
             * @param message AllocTableReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: roomalloc.IAllocTableReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AllocTableReq message, length delimited. Does not implicitly {@link roomalloc.AllocTableReq.verify|verify} messages.
             * @param message AllocTableReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: roomalloc.IAllocTableReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AllocTableReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AllocTableReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roomalloc.AllocTableReq;

            /**
             * Decodes an AllocTableReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AllocTableReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roomalloc.AllocTableReq;

            /**
             * Verifies an AllocTableReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AllocTableReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AllocTableReq
             */
            public static fromObject(object: { [k: string]: any }): roomalloc.AllocTableReq;

            /**
             * Creates a plain object from an AllocTableReq message. Also converts values to other types if specified.
             * @param message AllocTableReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: roomalloc.AllocTableReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AllocTableReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AllocTableResp. */
        interface IAllocTableResp {

            /** AllocTableResp result */
            result?: (number|null);
        }

        /** Represents an AllocTableResp. */
        class AllocTableResp implements IAllocTableResp {

            /**
             * Constructs a new AllocTableResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: roomalloc.IAllocTableResp);

            /** AllocTableResp result. */
            public result: number;

            /**
             * Creates a new AllocTableResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AllocTableResp instance
             */
            public static create(properties?: roomalloc.IAllocTableResp): roomalloc.AllocTableResp;

            /**
             * Encodes the specified AllocTableResp message. Does not implicitly {@link roomalloc.AllocTableResp.verify|verify} messages.
             * @param message AllocTableResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: roomalloc.IAllocTableResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AllocTableResp message, length delimited. Does not implicitly {@link roomalloc.AllocTableResp.verify|verify} messages.
             * @param message AllocTableResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: roomalloc.IAllocTableResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AllocTableResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AllocTableResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roomalloc.AllocTableResp;

            /**
             * Decodes an AllocTableResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AllocTableResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roomalloc.AllocTableResp;

            /**
             * Verifies an AllocTableResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AllocTableResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AllocTableResp
             */
            public static fromObject(object: { [k: string]: any }): roomalloc.AllocTableResp;

            /**
             * Creates a plain object from an AllocTableResp message. Also converts values to other types if specified.
             * @param message AllocTableResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: roomalloc.AllocTableResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AllocTableResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GameLevelConfigReq. */
        interface IGameLevelConfigReq {

            /** GameLevelConfigReq game_id */
            game_id?: (number|null);
        }

        /** Represents a GameLevelConfigReq. */
        class GameLevelConfigReq implements IGameLevelConfigReq {

            /**
             * Constructs a new GameLevelConfigReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: roomalloc.IGameLevelConfigReq);

            /** GameLevelConfigReq game_id. */
            public game_id: number;

            /**
             * Creates a new GameLevelConfigReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameLevelConfigReq instance
             */
            public static create(properties?: roomalloc.IGameLevelConfigReq): roomalloc.GameLevelConfigReq;

            /**
             * Encodes the specified GameLevelConfigReq message. Does not implicitly {@link roomalloc.GameLevelConfigReq.verify|verify} messages.
             * @param message GameLevelConfigReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: roomalloc.IGameLevelConfigReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameLevelConfigReq message, length delimited. Does not implicitly {@link roomalloc.GameLevelConfigReq.verify|verify} messages.
             * @param message GameLevelConfigReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: roomalloc.IGameLevelConfigReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameLevelConfigReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameLevelConfigReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roomalloc.GameLevelConfigReq;

            /**
             * Decodes a GameLevelConfigReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameLevelConfigReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roomalloc.GameLevelConfigReq;

            /**
             * Verifies a GameLevelConfigReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameLevelConfigReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameLevelConfigReq
             */
            public static fromObject(object: { [k: string]: any }): roomalloc.GameLevelConfigReq;

            /**
             * Creates a plain object from a GameLevelConfigReq message. Also converts values to other types if specified.
             * @param message GameLevelConfigReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: roomalloc.GameLevelConfigReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameLevelConfigReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GameLevelConfigResp. */
        interface IGameLevelConfigResp {

            /** GameLevelConfigResp game_id */
            game_id?: (number|null);

            /** GameLevelConfigResp auto_alloc */
            auto_alloc?: (number|null);

            /** GameLevelConfigResp level_config */
            level_config?: (roomalloc.GameLevelConfigResp.ILevelConfig[]|null);
        }

        /** Represents a GameLevelConfigResp. */
        class GameLevelConfigResp implements IGameLevelConfigResp {

            /**
             * Constructs a new GameLevelConfigResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: roomalloc.IGameLevelConfigResp);

            /** GameLevelConfigResp game_id. */
            public game_id: number;

            /** GameLevelConfigResp auto_alloc. */
            public auto_alloc: number;

            /** GameLevelConfigResp level_config. */
            public level_config: roomalloc.GameLevelConfigResp.ILevelConfig[];

            /**
             * Creates a new GameLevelConfigResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameLevelConfigResp instance
             */
            public static create(properties?: roomalloc.IGameLevelConfigResp): roomalloc.GameLevelConfigResp;

            /**
             * Encodes the specified GameLevelConfigResp message. Does not implicitly {@link roomalloc.GameLevelConfigResp.verify|verify} messages.
             * @param message GameLevelConfigResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: roomalloc.IGameLevelConfigResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameLevelConfigResp message, length delimited. Does not implicitly {@link roomalloc.GameLevelConfigResp.verify|verify} messages.
             * @param message GameLevelConfigResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: roomalloc.IGameLevelConfigResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameLevelConfigResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameLevelConfigResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roomalloc.GameLevelConfigResp;

            /**
             * Decodes a GameLevelConfigResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameLevelConfigResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roomalloc.GameLevelConfigResp;

            /**
             * Verifies a GameLevelConfigResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameLevelConfigResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameLevelConfigResp
             */
            public static fromObject(object: { [k: string]: any }): roomalloc.GameLevelConfigResp;

            /**
             * Creates a plain object from a GameLevelConfigResp message. Also converts values to other types if specified.
             * @param message GameLevelConfigResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: roomalloc.GameLevelConfigResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameLevelConfigResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GameLevelConfigResp {

            /** Properties of a LevelConfig. */
            interface ILevelConfig {

                /** LevelConfig level */
                level?: (number|null);

                /** LevelConfig base_ante */
                base_ante?: (number|Long|null);

                /** LevelConfig entry_min */
                entry_min?: (number|Long|null);

                /** LevelConfig entry_max */
                entry_max?: (number|Long|null);

                /** LevelConfig title */
                title?: (string|null);

                /** LevelConfig recommend_min */
                recommend_min?: (number|Long|null);

                /** LevelConfig recommend_max */
                recommend_max?: (number|Long|null);

                /** LevelConfig bet_min */
                bet_min?: (number|Long|null);

                /** LevelConfig bet_max */
                bet_max?: (number|Long|null);

                /** LevelConfig pay_max */
                pay_max?: (number|Long|null);

                /** LevelConfig quick_ante */
                quick_ante?: ((number|Long)[]|null);

                /** LevelConfig is_open_jackpot */
                is_open_jackpot?: (boolean|null);

                /** LevelConfig room_tab */
                room_tab?: (number|null);
            }

            /** Represents a LevelConfig. */
            class LevelConfig implements ILevelConfig {

                /**
                 * Constructs a new LevelConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: roomalloc.GameLevelConfigResp.ILevelConfig);

                /** LevelConfig level. */
                public level: number;

                /** LevelConfig base_ante. */
                public base_ante: (number|Long);

                /** LevelConfig entry_min. */
                public entry_min: (number|Long);

                /** LevelConfig entry_max. */
                public entry_max: (number|Long);

                /** LevelConfig title. */
                public title: string;

                /** LevelConfig recommend_min. */
                public recommend_min: (number|Long);

                /** LevelConfig recommend_max. */
                public recommend_max: (number|Long);

                /** LevelConfig bet_min. */
                public bet_min: (number|Long);

                /** LevelConfig bet_max. */
                public bet_max: (number|Long);

                /** LevelConfig pay_max. */
                public pay_max: (number|Long);

                /** LevelConfig quick_ante. */
                public quick_ante: (number|Long)[];

                /** LevelConfig is_open_jackpot. */
                public is_open_jackpot: boolean;

                /** LevelConfig room_tab. */
                public room_tab: number;

                /**
                 * Creates a new LevelConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LevelConfig instance
                 */
                public static create(properties?: roomalloc.GameLevelConfigResp.ILevelConfig): roomalloc.GameLevelConfigResp.LevelConfig;

                /**
                 * Encodes the specified LevelConfig message. Does not implicitly {@link roomalloc.GameLevelConfigResp.LevelConfig.verify|verify} messages.
                 * @param message LevelConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: roomalloc.GameLevelConfigResp.ILevelConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LevelConfig message, length delimited. Does not implicitly {@link roomalloc.GameLevelConfigResp.LevelConfig.verify|verify} messages.
                 * @param message LevelConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: roomalloc.GameLevelConfigResp.ILevelConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LevelConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LevelConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roomalloc.GameLevelConfigResp.LevelConfig;

                /**
                 * Decodes a LevelConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LevelConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roomalloc.GameLevelConfigResp.LevelConfig;

                /**
                 * Verifies a LevelConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LevelConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LevelConfig
                 */
                public static fromObject(object: { [k: string]: any }): roomalloc.GameLevelConfigResp.LevelConfig;

                /**
                 * Creates a plain object from a LevelConfig message. Also converts values to other types if specified.
                 * @param message LevelConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: roomalloc.GameLevelConfigResp.LevelConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LevelConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace gamebase. */
    namespace gamebase {

        /** SERVER_INNER_MSG_TYPE enum. */
        enum SERVER_INNER_MSG_TYPE {
            SERVER_TYPE_NONE = 0,
            SERVER_TYPE_GAME_PLAYER = 1,
            SERVER_TYPE_ROOMSERVER = 5,
            SERVER_TYPE_GAME_MANAGE = 20,
            SERVER_TYPE_ROOMALLOC = 47
        }

        /** CCGAME_ID enum. */
        enum CCGAME_ID {
            CCGAME_ID_NULL = 0,
            CCGAME_AVIATOR = 101,
            CCGAME_ANDAR = 102,
            CCGAME_AVIATOR2 = 103,
            CCGAME_SEVENUP = 104
        }

        /** CCGAME_ERR_CODE enum. */
        enum CCGAME_ERR_CODE {
            RET_SUCCESS = 0,
            RET_FAIL = 1,
            RET_TABLE_NOT_EXIST = 2,
            RET_LOGIN_REPEAT = 3,
            RET_SERVER_KICKOUT = 4,
            RET_ABNORMAL = 5,
            RET_INPUT_PARAM = 6,
            RET_UID_NOT_FOUND = 7,
            RET_RANK_TYPE = 8,
            RET_STATUS_ERROR = 9,
            RET_BET_REPEAT = 10,
            RET_LESS_MONEY = 11,
            RET_MORE_MONEY = 12,
            RET_TABLE_FULL = 13,
            RET_JACKPOT_REWARDID_ERR = 14,
            RET_JACKPOT_WINNUM_NOT_ENOUGHT = 15,
            RET_JACKPOT_NOT_OPEN = 16,
            RET_PLAYING_LOGOUT_ERR = 17,
            RET_SHARE_POSTER_NOT_FOUND_ERR = 18,
            RET_USER_IS_NULL = 19,
            RET_ERROR_AMOUNT = 20,
            RET_ERROR_NOT_BET = 21,
            RET_ERROR_BET_TIMEOUT = 22,
            RET_ERROR_BET_NOT_RESP = 23
        }

        /** CCGAME_MSGID enum. */
        enum CCGAME_MSGID {
            CC_GAME_MSGID_NULL = 0,
            CC_GAME_ALLOC_TABLE_PUSH = 10010,
            CC_GAME_LEAVE_REQ = 10011,
            CC_GAME_LEAVE_RESP = 10012,
            CC_GAME_JOIN_TABLE_REQ = 10013,
            CC_GAME_JOIN_TABLE_RESP = 10014,
            CC_GAME_STAND_UP_PUSH = 10015,
            CC_GAME_KICKOUT_PUSH = 10016,
            CC_GAME_SITDOWN_REQ = 10017,
            CC_GAME_SITDOWN_RESP = 10018,
            CC_GAME_SITDOWN_PUSH = 10019,
            CC_GAME_OFFLINE_REQ = 10020,
            CC_GAME_OFFLINE_RESP = 10021,
            CC_GAME_GET_RULE_REQ = 10022,
            CC_GAME_GET_RULE_RESP = 10023,
            CC_GAME_JACKPOT_USER_DATA_CHANGE_PUSH = 10024,
            CC_GAME_JACKPOT_GET_REWARD_REQ = 10025,
            CC_GAME_JACKPOT_GET_REWARD_RESP = 10026,
            CC_GAME_JACKPOT_GET_REWARD_PUSH = 10027,
            CC_GAME_JACKPOT_GET_REWARD_RECORD_REQ = 10028,
            CC_GAME_JACKPOT_GET_REWARD_RECORD_RESP = 10029,
            CC_GAME_JACKPOT_GET_USER_RECORD_REQ = 10030,
            CC_GAME_JACKPOT_GET_USER_RECORD_RESP = 10031,
            CC_GAME_JACKPOT_GET_REWARD_DETAIL_REQ = 10032,
            CC_GAME_JACKPOT_GET_REWARD_DETAIL_RESP = 10033,
            CC_GAME_SHARE_POSTER_REQ = 10034,
            CC_GAME_SHARE_POSTER_RESP = 10035,
            CC_GAME_JACKPOT_POOL_CHANGE_PUSH = 10036,
            CC_GAME_NOTIFICATION_PUSH = 10037,
            CC_GAME_RESET_BALANCE_REQ = 10038,
            CC_GAME_RESET_BALANCE_RESP = 10039
        }

        /** Properties of a Card. */
        interface ICard {

            /** Card card */
            card?: (number|null);
        }

        /** Represents a Card. */
        class Card implements ICard {

            /**
             * Constructs a new Card.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.ICard);

            /** Card card. */
            public card: number;

            /**
             * Creates a new Card instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Card instance
             */
            public static create(properties?: gamebase.ICard): gamebase.Card;

            /**
             * Encodes the specified Card message. Does not implicitly {@link gamebase.Card.verify|verify} messages.
             * @param message Card message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Card message, length delimited. Does not implicitly {@link gamebase.Card.verify|verify} messages.
             * @param message Card message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Card message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Card
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.Card;

            /**
             * Decodes a Card message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Card
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.Card;

            /**
             * Verifies a Card message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Card message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Card
             */
            public static fromObject(object: { [k: string]: any }): gamebase.Card;

            /**
             * Creates a plain object from a Card message. Also converts values to other types if specified.
             * @param message Card
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.Card, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Card to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LeaveRoomReq. */
        interface ILeaveRoomReq {
        }

        /** Represents a LeaveRoomReq. */
        class LeaveRoomReq implements ILeaveRoomReq {

            /**
             * Constructs a new LeaveRoomReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.ILeaveRoomReq);

            /**
             * Creates a new LeaveRoomReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LeaveRoomReq instance
             */
            public static create(properties?: gamebase.ILeaveRoomReq): gamebase.LeaveRoomReq;

            /**
             * Encodes the specified LeaveRoomReq message. Does not implicitly {@link gamebase.LeaveRoomReq.verify|verify} messages.
             * @param message LeaveRoomReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.ILeaveRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LeaveRoomReq message, length delimited. Does not implicitly {@link gamebase.LeaveRoomReq.verify|verify} messages.
             * @param message LeaveRoomReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.ILeaveRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LeaveRoomReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LeaveRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.LeaveRoomReq;

            /**
             * Decodes a LeaveRoomReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LeaveRoomReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.LeaveRoomReq;

            /**
             * Verifies a LeaveRoomReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LeaveRoomReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LeaveRoomReq
             */
            public static fromObject(object: { [k: string]: any }): gamebase.LeaveRoomReq;

            /**
             * Creates a plain object from a LeaveRoomReq message. Also converts values to other types if specified.
             * @param message LeaveRoomReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.LeaveRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LeaveRoomReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LeaveRoomResp. */
        interface ILeaveRoomResp {

            /** LeaveRoomResp result */
            result?: (number|null);

            /** LeaveRoomResp balance */
            balance?: (number|Long|null);
        }

        /** Represents a LeaveRoomResp. */
        class LeaveRoomResp implements ILeaveRoomResp {

            /**
             * Constructs a new LeaveRoomResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.ILeaveRoomResp);

            /** LeaveRoomResp result. */
            public result: number;

            /** LeaveRoomResp balance. */
            public balance: (number|Long);

            /**
             * Creates a new LeaveRoomResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LeaveRoomResp instance
             */
            public static create(properties?: gamebase.ILeaveRoomResp): gamebase.LeaveRoomResp;

            /**
             * Encodes the specified LeaveRoomResp message. Does not implicitly {@link gamebase.LeaveRoomResp.verify|verify} messages.
             * @param message LeaveRoomResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.ILeaveRoomResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LeaveRoomResp message, length delimited. Does not implicitly {@link gamebase.LeaveRoomResp.verify|verify} messages.
             * @param message LeaveRoomResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.ILeaveRoomResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LeaveRoomResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LeaveRoomResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.LeaveRoomResp;

            /**
             * Decodes a LeaveRoomResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LeaveRoomResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.LeaveRoomResp;

            /**
             * Verifies a LeaveRoomResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LeaveRoomResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LeaveRoomResp
             */
            public static fromObject(object: { [k: string]: any }): gamebase.LeaveRoomResp;

            /**
             * Creates a plain object from a LeaveRoomResp message. Also converts values to other types if specified.
             * @param message LeaveRoomResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.LeaveRoomResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LeaveRoomResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserSitDownReq. */
        interface IUserSitDownReq {

            /** UserSitDownReq seat_id */
            seat_id?: (number|null);
        }

        /** Represents a UserSitDownReq. */
        class UserSitDownReq implements IUserSitDownReq {

            /**
             * Constructs a new UserSitDownReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IUserSitDownReq);

            /** UserSitDownReq seat_id. */
            public seat_id: number;

            /**
             * Creates a new UserSitDownReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserSitDownReq instance
             */
            public static create(properties?: gamebase.IUserSitDownReq): gamebase.UserSitDownReq;

            /**
             * Encodes the specified UserSitDownReq message. Does not implicitly {@link gamebase.UserSitDownReq.verify|verify} messages.
             * @param message UserSitDownReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IUserSitDownReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserSitDownReq message, length delimited. Does not implicitly {@link gamebase.UserSitDownReq.verify|verify} messages.
             * @param message UserSitDownReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IUserSitDownReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserSitDownReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserSitDownReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.UserSitDownReq;

            /**
             * Decodes a UserSitDownReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserSitDownReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.UserSitDownReq;

            /**
             * Verifies a UserSitDownReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserSitDownReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserSitDownReq
             */
            public static fromObject(object: { [k: string]: any }): gamebase.UserSitDownReq;

            /**
             * Creates a plain object from a UserSitDownReq message. Also converts values to other types if specified.
             * @param message UserSitDownReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.UserSitDownReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserSitDownReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserSitDownResp. */
        interface IUserSitDownResp {

            /** UserSitDownResp result */
            result?: (number|null);
        }

        /** Represents a UserSitDownResp. */
        class UserSitDownResp implements IUserSitDownResp {

            /**
             * Constructs a new UserSitDownResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IUserSitDownResp);

            /** UserSitDownResp result. */
            public result: number;

            /**
             * Creates a new UserSitDownResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserSitDownResp instance
             */
            public static create(properties?: gamebase.IUserSitDownResp): gamebase.UserSitDownResp;

            /**
             * Encodes the specified UserSitDownResp message. Does not implicitly {@link gamebase.UserSitDownResp.verify|verify} messages.
             * @param message UserSitDownResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IUserSitDownResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserSitDownResp message, length delimited. Does not implicitly {@link gamebase.UserSitDownResp.verify|verify} messages.
             * @param message UserSitDownResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IUserSitDownResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserSitDownResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserSitDownResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.UserSitDownResp;

            /**
             * Decodes a UserSitDownResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserSitDownResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.UserSitDownResp;

            /**
             * Verifies a UserSitDownResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserSitDownResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserSitDownResp
             */
            public static fromObject(object: { [k: string]: any }): gamebase.UserSitDownResp;

            /**
             * Creates a plain object from a UserSitDownResp message. Also converts values to other types if specified.
             * @param message UserSitDownResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.UserSitDownResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserSitDownResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserSitDownPush. */
        interface IUserSitDownPush {

            /** UserSitDownPush uid */
            uid?: (number|null);

            /** UserSitDownPush seat_id */
            seat_id?: (number|null);

            /** UserSitDownPush userinfo */
            userinfo?: (string|null);

            /** UserSitDownPush balance */
            balance?: (number|Long|null);

            /** UserSitDownPush userCount */
            userCount?: (number|null);
        }

        /** Represents a UserSitDownPush. */
        class UserSitDownPush implements IUserSitDownPush {

            /**
             * Constructs a new UserSitDownPush.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IUserSitDownPush);

            /** UserSitDownPush uid. */
            public uid: number;

            /** UserSitDownPush seat_id. */
            public seat_id: number;

            /** UserSitDownPush userinfo. */
            public userinfo: string;

            /** UserSitDownPush balance. */
            public balance: (number|Long);

            /** UserSitDownPush userCount. */
            public userCount: number;

            /**
             * Creates a new UserSitDownPush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserSitDownPush instance
             */
            public static create(properties?: gamebase.IUserSitDownPush): gamebase.UserSitDownPush;

            /**
             * Encodes the specified UserSitDownPush message. Does not implicitly {@link gamebase.UserSitDownPush.verify|verify} messages.
             * @param message UserSitDownPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IUserSitDownPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserSitDownPush message, length delimited. Does not implicitly {@link gamebase.UserSitDownPush.verify|verify} messages.
             * @param message UserSitDownPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IUserSitDownPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserSitDownPush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserSitDownPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.UserSitDownPush;

            /**
             * Decodes a UserSitDownPush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserSitDownPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.UserSitDownPush;

            /**
             * Verifies a UserSitDownPush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserSitDownPush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserSitDownPush
             */
            public static fromObject(object: { [k: string]: any }): gamebase.UserSitDownPush;

            /**
             * Creates a plain object from a UserSitDownPush message. Also converts values to other types if specified.
             * @param message UserSitDownPush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.UserSitDownPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserSitDownPush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserJoinTableReq. */
        interface IUserJoinTableReq {

            /** UserJoinTableReq table_id */
            table_id?: (number|null);
        }

        /** Represents a UserJoinTableReq. */
        class UserJoinTableReq implements IUserJoinTableReq {

            /**
             * Constructs a new UserJoinTableReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IUserJoinTableReq);

            /** UserJoinTableReq table_id. */
            public table_id: number;

            /**
             * Creates a new UserJoinTableReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserJoinTableReq instance
             */
            public static create(properties?: gamebase.IUserJoinTableReq): gamebase.UserJoinTableReq;

            /**
             * Encodes the specified UserJoinTableReq message. Does not implicitly {@link gamebase.UserJoinTableReq.verify|verify} messages.
             * @param message UserJoinTableReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IUserJoinTableReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserJoinTableReq message, length delimited. Does not implicitly {@link gamebase.UserJoinTableReq.verify|verify} messages.
             * @param message UserJoinTableReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IUserJoinTableReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserJoinTableReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserJoinTableReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.UserJoinTableReq;

            /**
             * Decodes a UserJoinTableReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserJoinTableReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.UserJoinTableReq;

            /**
             * Verifies a UserJoinTableReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserJoinTableReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserJoinTableReq
             */
            public static fromObject(object: { [k: string]: any }): gamebase.UserJoinTableReq;

            /**
             * Creates a plain object from a UserJoinTableReq message. Also converts values to other types if specified.
             * @param message UserJoinTableReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.UserJoinTableReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserJoinTableReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserJoinTableResp. */
        interface IUserJoinTableResp {

            /** UserJoinTableResp result */
            result?: (number|null);

            /** UserJoinTableResp msgname */
            msgname?: (string|null);

            /** UserJoinTableResp tableinfo */
            tableinfo?: (Uint8Array|null);

            /** UserJoinTableResp balance */
            balance?: (number|Long|null);

            /** UserJoinTableResp userinfo */
            userinfo?: (string|null);

            /** UserJoinTableResp jackpotinfo */
            jackpotinfo?: (gamebase.IJackpotUserData|null);

            /** UserJoinTableResp room_level */
            room_level?: (number|null);
        }

        /** Represents a UserJoinTableResp. */
        class UserJoinTableResp implements IUserJoinTableResp {

            /**
             * Constructs a new UserJoinTableResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IUserJoinTableResp);

            /** UserJoinTableResp result. */
            public result: number;

            /** UserJoinTableResp msgname. */
            public msgname: string;

            /** UserJoinTableResp tableinfo. */
            public tableinfo: Uint8Array;

            /** UserJoinTableResp balance. */
            public balance: (number|Long);

            /** UserJoinTableResp userinfo. */
            public userinfo: string;

            /** UserJoinTableResp jackpotinfo. */
            public jackpotinfo?: (gamebase.IJackpotUserData|null);

            /** UserJoinTableResp room_level. */
            public room_level: number;

            /**
             * Creates a new UserJoinTableResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserJoinTableResp instance
             */
            public static create(properties?: gamebase.IUserJoinTableResp): gamebase.UserJoinTableResp;

            /**
             * Encodes the specified UserJoinTableResp message. Does not implicitly {@link gamebase.UserJoinTableResp.verify|verify} messages.
             * @param message UserJoinTableResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IUserJoinTableResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserJoinTableResp message, length delimited. Does not implicitly {@link gamebase.UserJoinTableResp.verify|verify} messages.
             * @param message UserJoinTableResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IUserJoinTableResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserJoinTableResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserJoinTableResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.UserJoinTableResp;

            /**
             * Decodes a UserJoinTableResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserJoinTableResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.UserJoinTableResp;

            /**
             * Verifies a UserJoinTableResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserJoinTableResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserJoinTableResp
             */
            public static fromObject(object: { [k: string]: any }): gamebase.UserJoinTableResp;

            /**
             * Creates a plain object from a UserJoinTableResp message. Also converts values to other types if specified.
             * @param message UserJoinTableResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.UserJoinTableResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserJoinTableResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AllocTablePush. */
        interface IAllocTablePush {

            /** AllocTablePush table_id */
            table_id?: (number|null);

            /** AllocTablePush game_id */
            game_id?: (number|null);

            /** AllocTablePush svid */
            svid?: (number|null);
        }

        /** Represents an AllocTablePush. */
        class AllocTablePush implements IAllocTablePush {

            /**
             * Constructs a new AllocTablePush.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IAllocTablePush);

            /** AllocTablePush table_id. */
            public table_id: number;

            /** AllocTablePush game_id. */
            public game_id: number;

            /** AllocTablePush svid. */
            public svid: number;

            /**
             * Creates a new AllocTablePush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AllocTablePush instance
             */
            public static create(properties?: gamebase.IAllocTablePush): gamebase.AllocTablePush;

            /**
             * Encodes the specified AllocTablePush message. Does not implicitly {@link gamebase.AllocTablePush.verify|verify} messages.
             * @param message AllocTablePush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IAllocTablePush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AllocTablePush message, length delimited. Does not implicitly {@link gamebase.AllocTablePush.verify|verify} messages.
             * @param message AllocTablePush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IAllocTablePush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AllocTablePush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AllocTablePush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.AllocTablePush;

            /**
             * Decodes an AllocTablePush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AllocTablePush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.AllocTablePush;

            /**
             * Verifies an AllocTablePush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AllocTablePush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AllocTablePush
             */
            public static fromObject(object: { [k: string]: any }): gamebase.AllocTablePush;

            /**
             * Creates a plain object from an AllocTablePush message. Also converts values to other types if specified.
             * @param message AllocTablePush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.AllocTablePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AllocTablePush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetGameRuleReq. */
        interface IGetGameRuleReq {

            /** GetGameRuleReq key */
            key?: (string|null);

            /** GetGameRuleReq lang */
            lang?: (string|null);
        }

        /** Represents a GetGameRuleReq. */
        class GetGameRuleReq implements IGetGameRuleReq {

            /**
             * Constructs a new GetGameRuleReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IGetGameRuleReq);

            /** GetGameRuleReq key. */
            public key: string;

            /** GetGameRuleReq lang. */
            public lang: string;

            /**
             * Creates a new GetGameRuleReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetGameRuleReq instance
             */
            public static create(properties?: gamebase.IGetGameRuleReq): gamebase.GetGameRuleReq;

            /**
             * Encodes the specified GetGameRuleReq message. Does not implicitly {@link gamebase.GetGameRuleReq.verify|verify} messages.
             * @param message GetGameRuleReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IGetGameRuleReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetGameRuleReq message, length delimited. Does not implicitly {@link gamebase.GetGameRuleReq.verify|verify} messages.
             * @param message GetGameRuleReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IGetGameRuleReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetGameRuleReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetGameRuleReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.GetGameRuleReq;

            /**
             * Decodes a GetGameRuleReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetGameRuleReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.GetGameRuleReq;

            /**
             * Verifies a GetGameRuleReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetGameRuleReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetGameRuleReq
             */
            public static fromObject(object: { [k: string]: any }): gamebase.GetGameRuleReq;

            /**
             * Creates a plain object from a GetGameRuleReq message. Also converts values to other types if specified.
             * @param message GetGameRuleReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.GetGameRuleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetGameRuleReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetGameRuleResp. */
        interface IGetGameRuleResp {

            /** GetGameRuleResp key */
            key?: (string|null);

            /** GetGameRuleResp rules */
            rules?: (string|null);
        }

        /** Represents a GetGameRuleResp. */
        class GetGameRuleResp implements IGetGameRuleResp {

            /**
             * Constructs a new GetGameRuleResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IGetGameRuleResp);

            /** GetGameRuleResp key. */
            public key: string;

            /** GetGameRuleResp rules. */
            public rules: string;

            /**
             * Creates a new GetGameRuleResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetGameRuleResp instance
             */
            public static create(properties?: gamebase.IGetGameRuleResp): gamebase.GetGameRuleResp;

            /**
             * Encodes the specified GetGameRuleResp message. Does not implicitly {@link gamebase.GetGameRuleResp.verify|verify} messages.
             * @param message GetGameRuleResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IGetGameRuleResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetGameRuleResp message, length delimited. Does not implicitly {@link gamebase.GetGameRuleResp.verify|verify} messages.
             * @param message GetGameRuleResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IGetGameRuleResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetGameRuleResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetGameRuleResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.GetGameRuleResp;

            /**
             * Decodes a GetGameRuleResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetGameRuleResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.GetGameRuleResp;

            /**
             * Verifies a GetGameRuleResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetGameRuleResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetGameRuleResp
             */
            public static fromObject(object: { [k: string]: any }): gamebase.GetGameRuleResp;

            /**
             * Creates a plain object from a GetGameRuleResp message. Also converts values to other types if specified.
             * @param message GetGameRuleResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.GetGameRuleResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetGameRuleResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserStandUpPush. */
        interface IUserStandUpPush {

            /** UserStandUpPush uid */
            uid?: (number|null);

            /** UserStandUpPush userCount */
            userCount?: (number|null);
        }

        /** Represents a UserStandUpPush. */
        class UserStandUpPush implements IUserStandUpPush {

            /**
             * Constructs a new UserStandUpPush.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IUserStandUpPush);

            /** UserStandUpPush uid. */
            public uid: number;

            /** UserStandUpPush userCount. */
            public userCount: number;

            /**
             * Creates a new UserStandUpPush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserStandUpPush instance
             */
            public static create(properties?: gamebase.IUserStandUpPush): gamebase.UserStandUpPush;

            /**
             * Encodes the specified UserStandUpPush message. Does not implicitly {@link gamebase.UserStandUpPush.verify|verify} messages.
             * @param message UserStandUpPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IUserStandUpPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserStandUpPush message, length delimited. Does not implicitly {@link gamebase.UserStandUpPush.verify|verify} messages.
             * @param message UserStandUpPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IUserStandUpPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserStandUpPush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserStandUpPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.UserStandUpPush;

            /**
             * Decodes a UserStandUpPush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserStandUpPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.UserStandUpPush;

            /**
             * Verifies a UserStandUpPush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserStandUpPush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserStandUpPush
             */
            public static fromObject(object: { [k: string]: any }): gamebase.UserStandUpPush;

            /**
             * Creates a plain object from a UserStandUpPush message. Also converts values to other types if specified.
             * @param message UserStandUpPush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.UserStandUpPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserStandUpPush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JackpotUserData. */
        interface IJackpotUserData {

            /** JackpotUserData win_count */
            win_count?: (number|null);

            /** JackpotUserData total_count */
            total_count?: (number|null);

            /** JackpotUserData reward_pool */
            reward_pool?: (number|Long|null);

            /** JackpotUserData continue_time */
            continue_time?: (number|null);

            /** JackpotUserData rewardIdList */
            rewardIdList?: (number[]|null);

            /** JackpotUserData isReward */
            isReward?: (boolean|null);
        }

        /** Represents a JackpotUserData. */
        class JackpotUserData implements IJackpotUserData {

            /**
             * Constructs a new JackpotUserData.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IJackpotUserData);

            /** JackpotUserData win_count. */
            public win_count: number;

            /** JackpotUserData total_count. */
            public total_count: number;

            /** JackpotUserData reward_pool. */
            public reward_pool: (number|Long);

            /** JackpotUserData continue_time. */
            public continue_time: number;

            /** JackpotUserData rewardIdList. */
            public rewardIdList: number[];

            /** JackpotUserData isReward. */
            public isReward: boolean;

            /**
             * Creates a new JackpotUserData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JackpotUserData instance
             */
            public static create(properties?: gamebase.IJackpotUserData): gamebase.JackpotUserData;

            /**
             * Encodes the specified JackpotUserData message. Does not implicitly {@link gamebase.JackpotUserData.verify|verify} messages.
             * @param message JackpotUserData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IJackpotUserData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JackpotUserData message, length delimited. Does not implicitly {@link gamebase.JackpotUserData.verify|verify} messages.
             * @param message JackpotUserData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IJackpotUserData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JackpotUserData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JackpotUserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.JackpotUserData;

            /**
             * Decodes a JackpotUserData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JackpotUserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.JackpotUserData;

            /**
             * Verifies a JackpotUserData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JackpotUserData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JackpotUserData
             */
            public static fromObject(object: { [k: string]: any }): gamebase.JackpotUserData;

            /**
             * Creates a plain object from a JackpotUserData message. Also converts values to other types if specified.
             * @param message JackpotUserData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.JackpotUserData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JackpotUserData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JackpotGetRewardReq. */
        interface IJackpotGetRewardReq {

            /** JackpotGetRewardReq rewardId */
            rewardId?: (number|null);
        }

        /** Represents a JackpotGetRewardReq. */
        class JackpotGetRewardReq implements IJackpotGetRewardReq {

            /**
             * Constructs a new JackpotGetRewardReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IJackpotGetRewardReq);

            /** JackpotGetRewardReq rewardId. */
            public rewardId: number;

            /**
             * Creates a new JackpotGetRewardReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JackpotGetRewardReq instance
             */
            public static create(properties?: gamebase.IJackpotGetRewardReq): gamebase.JackpotGetRewardReq;

            /**
             * Encodes the specified JackpotGetRewardReq message. Does not implicitly {@link gamebase.JackpotGetRewardReq.verify|verify} messages.
             * @param message JackpotGetRewardReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IJackpotGetRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JackpotGetRewardReq message, length delimited. Does not implicitly {@link gamebase.JackpotGetRewardReq.verify|verify} messages.
             * @param message JackpotGetRewardReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IJackpotGetRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JackpotGetRewardReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JackpotGetRewardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.JackpotGetRewardReq;

            /**
             * Decodes a JackpotGetRewardReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JackpotGetRewardReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.JackpotGetRewardReq;

            /**
             * Verifies a JackpotGetRewardReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JackpotGetRewardReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JackpotGetRewardReq
             */
            public static fromObject(object: { [k: string]: any }): gamebase.JackpotGetRewardReq;

            /**
             * Creates a plain object from a JackpotGetRewardReq message. Also converts values to other types if specified.
             * @param message JackpotGetRewardReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.JackpotGetRewardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JackpotGetRewardReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JackpotGetRewardResp. */
        interface IJackpotGetRewardResp {

            /** JackpotGetRewardResp result */
            result?: (number|null);

            /** JackpotGetRewardResp reward */
            reward?: (number|Long|null);

            /** JackpotGetRewardResp totalReward */
            totalReward?: (number|Long|null);

            /** JackpotGetRewardResp maxReward */
            maxReward?: (number|Long|null);

            /** JackpotGetRewardResp jackpotinfo */
            jackpotinfo?: (gamebase.IJackpotUserData|null);

            /** JackpotGetRewardResp balance */
            balance?: (number|Long|null);
        }

        /** Represents a JackpotGetRewardResp. */
        class JackpotGetRewardResp implements IJackpotGetRewardResp {

            /**
             * Constructs a new JackpotGetRewardResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IJackpotGetRewardResp);

            /** JackpotGetRewardResp result. */
            public result: number;

            /** JackpotGetRewardResp reward. */
            public reward: (number|Long);

            /** JackpotGetRewardResp totalReward. */
            public totalReward: (number|Long);

            /** JackpotGetRewardResp maxReward. */
            public maxReward: (number|Long);

            /** JackpotGetRewardResp jackpotinfo. */
            public jackpotinfo?: (gamebase.IJackpotUserData|null);

            /** JackpotGetRewardResp balance. */
            public balance: (number|Long);

            /**
             * Creates a new JackpotGetRewardResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JackpotGetRewardResp instance
             */
            public static create(properties?: gamebase.IJackpotGetRewardResp): gamebase.JackpotGetRewardResp;

            /**
             * Encodes the specified JackpotGetRewardResp message. Does not implicitly {@link gamebase.JackpotGetRewardResp.verify|verify} messages.
             * @param message JackpotGetRewardResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IJackpotGetRewardResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JackpotGetRewardResp message, length delimited. Does not implicitly {@link gamebase.JackpotGetRewardResp.verify|verify} messages.
             * @param message JackpotGetRewardResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IJackpotGetRewardResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JackpotGetRewardResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JackpotGetRewardResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.JackpotGetRewardResp;

            /**
             * Decodes a JackpotGetRewardResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JackpotGetRewardResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.JackpotGetRewardResp;

            /**
             * Verifies a JackpotGetRewardResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JackpotGetRewardResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JackpotGetRewardResp
             */
            public static fromObject(object: { [k: string]: any }): gamebase.JackpotGetRewardResp;

            /**
             * Creates a plain object from a JackpotGetRewardResp message. Also converts values to other types if specified.
             * @param message JackpotGetRewardResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.JackpotGetRewardResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JackpotGetRewardResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JackpotGetRewardPush. */
        interface IJackpotGetRewardPush {

            /** JackpotGetRewardPush uid */
            uid?: (number|null);

            /** JackpotGetRewardPush nickname */
            nickname?: (string|null);

            /** JackpotGetRewardPush strHeader */
            strHeader?: (string|null);

            /** JackpotGetRewardPush reward */
            reward?: (number|Long|null);

            /** JackpotGetRewardPush reward_pool */
            reward_pool?: (number|Long|null);
        }

        /** Represents a JackpotGetRewardPush. */
        class JackpotGetRewardPush implements IJackpotGetRewardPush {

            /**
             * Constructs a new JackpotGetRewardPush.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IJackpotGetRewardPush);

            /** JackpotGetRewardPush uid. */
            public uid: number;

            /** JackpotGetRewardPush nickname. */
            public nickname: string;

            /** JackpotGetRewardPush strHeader. */
            public strHeader: string;

            /** JackpotGetRewardPush reward. */
            public reward: (number|Long);

            /** JackpotGetRewardPush reward_pool. */
            public reward_pool: (number|Long);

            /**
             * Creates a new JackpotGetRewardPush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JackpotGetRewardPush instance
             */
            public static create(properties?: gamebase.IJackpotGetRewardPush): gamebase.JackpotGetRewardPush;

            /**
             * Encodes the specified JackpotGetRewardPush message. Does not implicitly {@link gamebase.JackpotGetRewardPush.verify|verify} messages.
             * @param message JackpotGetRewardPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IJackpotGetRewardPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JackpotGetRewardPush message, length delimited. Does not implicitly {@link gamebase.JackpotGetRewardPush.verify|verify} messages.
             * @param message JackpotGetRewardPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IJackpotGetRewardPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JackpotGetRewardPush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JackpotGetRewardPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.JackpotGetRewardPush;

            /**
             * Decodes a JackpotGetRewardPush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JackpotGetRewardPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.JackpotGetRewardPush;

            /**
             * Verifies a JackpotGetRewardPush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JackpotGetRewardPush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JackpotGetRewardPush
             */
            public static fromObject(object: { [k: string]: any }): gamebase.JackpotGetRewardPush;

            /**
             * Creates a plain object from a JackpotGetRewardPush message. Also converts values to other types if specified.
             * @param message JackpotGetRewardPush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.JackpotGetRewardPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JackpotGetRewardPush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JackpotRewardRecordReq. */
        interface IJackpotRewardRecordReq {
        }

        /** Represents a JackpotRewardRecordReq. */
        class JackpotRewardRecordReq implements IJackpotRewardRecordReq {

            /**
             * Constructs a new JackpotRewardRecordReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IJackpotRewardRecordReq);

            /**
             * Creates a new JackpotRewardRecordReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JackpotRewardRecordReq instance
             */
            public static create(properties?: gamebase.IJackpotRewardRecordReq): gamebase.JackpotRewardRecordReq;

            /**
             * Encodes the specified JackpotRewardRecordReq message. Does not implicitly {@link gamebase.JackpotRewardRecordReq.verify|verify} messages.
             * @param message JackpotRewardRecordReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IJackpotRewardRecordReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JackpotRewardRecordReq message, length delimited. Does not implicitly {@link gamebase.JackpotRewardRecordReq.verify|verify} messages.
             * @param message JackpotRewardRecordReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IJackpotRewardRecordReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JackpotRewardRecordReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JackpotRewardRecordReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.JackpotRewardRecordReq;

            /**
             * Decodes a JackpotRewardRecordReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JackpotRewardRecordReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.JackpotRewardRecordReq;

            /**
             * Verifies a JackpotRewardRecordReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JackpotRewardRecordReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JackpotRewardRecordReq
             */
            public static fromObject(object: { [k: string]: any }): gamebase.JackpotRewardRecordReq;

            /**
             * Creates a plain object from a JackpotRewardRecordReq message. Also converts values to other types if specified.
             * @param message JackpotRewardRecordReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.JackpotRewardRecordReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JackpotRewardRecordReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RewardRecord. */
        interface IRewardRecord {

            /** RewardRecord uid */
            uid?: (number|null);

            /** RewardRecord nickname */
            nickname?: (string|null);

            /** RewardRecord strHeader */
            strHeader?: (string|null);

            /** RewardRecord timeStamp */
            timeStamp?: (number|null);

            /** RewardRecord reward */
            reward?: (number|Long|null);
        }

        /** Represents a RewardRecord. */
        class RewardRecord implements IRewardRecord {

            /**
             * Constructs a new RewardRecord.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IRewardRecord);

            /** RewardRecord uid. */
            public uid: number;

            /** RewardRecord nickname. */
            public nickname: string;

            /** RewardRecord strHeader. */
            public strHeader: string;

            /** RewardRecord timeStamp. */
            public timeStamp: number;

            /** RewardRecord reward. */
            public reward: (number|Long);

            /**
             * Creates a new RewardRecord instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RewardRecord instance
             */
            public static create(properties?: gamebase.IRewardRecord): gamebase.RewardRecord;

            /**
             * Encodes the specified RewardRecord message. Does not implicitly {@link gamebase.RewardRecord.verify|verify} messages.
             * @param message RewardRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IRewardRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RewardRecord message, length delimited. Does not implicitly {@link gamebase.RewardRecord.verify|verify} messages.
             * @param message RewardRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IRewardRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RewardRecord message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RewardRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.RewardRecord;

            /**
             * Decodes a RewardRecord message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RewardRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.RewardRecord;

            /**
             * Verifies a RewardRecord message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RewardRecord message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RewardRecord
             */
            public static fromObject(object: { [k: string]: any }): gamebase.RewardRecord;

            /**
             * Creates a plain object from a RewardRecord message. Also converts values to other types if specified.
             * @param message RewardRecord
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.RewardRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RewardRecord to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JackpotRewardRecordResp. */
        interface IJackpotRewardRecordResp {

            /** JackpotRewardRecordResp itemList */
            itemList?: (gamebase.IRewardRecord[]|null);
        }

        /** Represents a JackpotRewardRecordResp. */
        class JackpotRewardRecordResp implements IJackpotRewardRecordResp {

            /**
             * Constructs a new JackpotRewardRecordResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IJackpotRewardRecordResp);

            /** JackpotRewardRecordResp itemList. */
            public itemList: gamebase.IRewardRecord[];

            /**
             * Creates a new JackpotRewardRecordResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JackpotRewardRecordResp instance
             */
            public static create(properties?: gamebase.IJackpotRewardRecordResp): gamebase.JackpotRewardRecordResp;

            /**
             * Encodes the specified JackpotRewardRecordResp message. Does not implicitly {@link gamebase.JackpotRewardRecordResp.verify|verify} messages.
             * @param message JackpotRewardRecordResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IJackpotRewardRecordResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JackpotRewardRecordResp message, length delimited. Does not implicitly {@link gamebase.JackpotRewardRecordResp.verify|verify} messages.
             * @param message JackpotRewardRecordResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IJackpotRewardRecordResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JackpotRewardRecordResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JackpotRewardRecordResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.JackpotRewardRecordResp;

            /**
             * Decodes a JackpotRewardRecordResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JackpotRewardRecordResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.JackpotRewardRecordResp;

            /**
             * Verifies a JackpotRewardRecordResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JackpotRewardRecordResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JackpotRewardRecordResp
             */
            public static fromObject(object: { [k: string]: any }): gamebase.JackpotRewardRecordResp;

            /**
             * Creates a plain object from a JackpotRewardRecordResp message. Also converts values to other types if specified.
             * @param message JackpotRewardRecordResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.JackpotRewardRecordResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JackpotRewardRecordResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JackpotGetUserRecordReq. */
        interface IJackpotGetUserRecordReq {
        }

        /** Represents a JackpotGetUserRecordReq. */
        class JackpotGetUserRecordReq implements IJackpotGetUserRecordReq {

            /**
             * Constructs a new JackpotGetUserRecordReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IJackpotGetUserRecordReq);

            /**
             * Creates a new JackpotGetUserRecordReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JackpotGetUserRecordReq instance
             */
            public static create(properties?: gamebase.IJackpotGetUserRecordReq): gamebase.JackpotGetUserRecordReq;

            /**
             * Encodes the specified JackpotGetUserRecordReq message. Does not implicitly {@link gamebase.JackpotGetUserRecordReq.verify|verify} messages.
             * @param message JackpotGetUserRecordReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IJackpotGetUserRecordReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JackpotGetUserRecordReq message, length delimited. Does not implicitly {@link gamebase.JackpotGetUserRecordReq.verify|verify} messages.
             * @param message JackpotGetUserRecordReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IJackpotGetUserRecordReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JackpotGetUserRecordReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JackpotGetUserRecordReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.JackpotGetUserRecordReq;

            /**
             * Decodes a JackpotGetUserRecordReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JackpotGetUserRecordReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.JackpotGetUserRecordReq;

            /**
             * Verifies a JackpotGetUserRecordReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JackpotGetUserRecordReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JackpotGetUserRecordReq
             */
            public static fromObject(object: { [k: string]: any }): gamebase.JackpotGetUserRecordReq;

            /**
             * Creates a plain object from a JackpotGetUserRecordReq message. Also converts values to other types if specified.
             * @param message JackpotGetUserRecordReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.JackpotGetUserRecordReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JackpotGetUserRecordReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserJackReward. */
        interface IUserJackReward {

            /** UserJackReward isGet */
            isGet?: (boolean|null);

            /** UserJackReward rewardBalance */
            rewardBalance?: (number|Long|null);

            /** UserJackReward timeStamp */
            timeStamp?: (number|null);
        }

        /** Represents a UserJackReward. */
        class UserJackReward implements IUserJackReward {

            /**
             * Constructs a new UserJackReward.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IUserJackReward);

            /** UserJackReward isGet. */
            public isGet: boolean;

            /** UserJackReward rewardBalance. */
            public rewardBalance: (number|Long);

            /** UserJackReward timeStamp. */
            public timeStamp: number;

            /**
             * Creates a new UserJackReward instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserJackReward instance
             */
            public static create(properties?: gamebase.IUserJackReward): gamebase.UserJackReward;

            /**
             * Encodes the specified UserJackReward message. Does not implicitly {@link gamebase.UserJackReward.verify|verify} messages.
             * @param message UserJackReward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IUserJackReward, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserJackReward message, length delimited. Does not implicitly {@link gamebase.UserJackReward.verify|verify} messages.
             * @param message UserJackReward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IUserJackReward, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserJackReward message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserJackReward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.UserJackReward;

            /**
             * Decodes a UserJackReward message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserJackReward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.UserJackReward;

            /**
             * Verifies a UserJackReward message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserJackReward message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserJackReward
             */
            public static fromObject(object: { [k: string]: any }): gamebase.UserJackReward;

            /**
             * Creates a plain object from a UserJackReward message. Also converts values to other types if specified.
             * @param message UserJackReward
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.UserJackReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserJackReward to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JackpotGetUserRecordResp. */
        interface IJackpotGetUserRecordResp {

            /** JackpotGetUserRecordResp totalReward */
            totalReward?: (number|Long|null);

            /** JackpotGetUserRecordResp maxReward */
            maxReward?: (number|Long|null);

            /** JackpotGetUserRecordResp itemList */
            itemList?: (gamebase.IUserJackReward[]|null);
        }

        /** Represents a JackpotGetUserRecordResp. */
        class JackpotGetUserRecordResp implements IJackpotGetUserRecordResp {

            /**
             * Constructs a new JackpotGetUserRecordResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IJackpotGetUserRecordResp);

            /** JackpotGetUserRecordResp totalReward. */
            public totalReward: (number|Long);

            /** JackpotGetUserRecordResp maxReward. */
            public maxReward: (number|Long);

            /** JackpotGetUserRecordResp itemList. */
            public itemList: gamebase.IUserJackReward[];

            /**
             * Creates a new JackpotGetUserRecordResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JackpotGetUserRecordResp instance
             */
            public static create(properties?: gamebase.IJackpotGetUserRecordResp): gamebase.JackpotGetUserRecordResp;

            /**
             * Encodes the specified JackpotGetUserRecordResp message. Does not implicitly {@link gamebase.JackpotGetUserRecordResp.verify|verify} messages.
             * @param message JackpotGetUserRecordResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IJackpotGetUserRecordResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JackpotGetUserRecordResp message, length delimited. Does not implicitly {@link gamebase.JackpotGetUserRecordResp.verify|verify} messages.
             * @param message JackpotGetUserRecordResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IJackpotGetUserRecordResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JackpotGetUserRecordResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JackpotGetUserRecordResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.JackpotGetUserRecordResp;

            /**
             * Decodes a JackpotGetUserRecordResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JackpotGetUserRecordResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.JackpotGetUserRecordResp;

            /**
             * Verifies a JackpotGetUserRecordResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JackpotGetUserRecordResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JackpotGetUserRecordResp
             */
            public static fromObject(object: { [k: string]: any }): gamebase.JackpotGetUserRecordResp;

            /**
             * Creates a plain object from a JackpotGetUserRecordResp message. Also converts values to other types if specified.
             * @param message JackpotGetUserRecordResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.JackpotGetUserRecordResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JackpotGetUserRecordResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JackpotGetRewardDetailReq. */
        interface IJackpotGetRewardDetailReq {
        }

        /** Represents a JackpotGetRewardDetailReq. */
        class JackpotGetRewardDetailReq implements IJackpotGetRewardDetailReq {

            /**
             * Constructs a new JackpotGetRewardDetailReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IJackpotGetRewardDetailReq);

            /**
             * Creates a new JackpotGetRewardDetailReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JackpotGetRewardDetailReq instance
             */
            public static create(properties?: gamebase.IJackpotGetRewardDetailReq): gamebase.JackpotGetRewardDetailReq;

            /**
             * Encodes the specified JackpotGetRewardDetailReq message. Does not implicitly {@link gamebase.JackpotGetRewardDetailReq.verify|verify} messages.
             * @param message JackpotGetRewardDetailReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IJackpotGetRewardDetailReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JackpotGetRewardDetailReq message, length delimited. Does not implicitly {@link gamebase.JackpotGetRewardDetailReq.verify|verify} messages.
             * @param message JackpotGetRewardDetailReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IJackpotGetRewardDetailReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JackpotGetRewardDetailReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JackpotGetRewardDetailReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.JackpotGetRewardDetailReq;

            /**
             * Decodes a JackpotGetRewardDetailReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JackpotGetRewardDetailReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.JackpotGetRewardDetailReq;

            /**
             * Verifies a JackpotGetRewardDetailReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JackpotGetRewardDetailReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JackpotGetRewardDetailReq
             */
            public static fromObject(object: { [k: string]: any }): gamebase.JackpotGetRewardDetailReq;

            /**
             * Creates a plain object from a JackpotGetRewardDetailReq message. Also converts values to other types if specified.
             * @param message JackpotGetRewardDetailReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.JackpotGetRewardDetailReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JackpotGetRewardDetailReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** CC_REWARD_TYPE enum. */
        enum CC_REWARD_TYPE {
            CC_REWARD_TYPE_NULL = 0,
            CC_REWARD_TYPE_FIXED = 1,
            CC_REWARD_TYPE_RATIO = 2
        }

        /** Properties of a JackRward. */
        interface IJackRward {

            /** JackRward value_min */
            value_min?: (number|Long|null);

            /** JackRward value_max */
            value_max?: (number|Long|null);

            /** JackRward reward_type */
            reward_type?: (number|null);

            /** JackRward reward_value */
            reward_value?: (number|Long|null);
        }

        /** Represents a JackRward. */
        class JackRward implements IJackRward {

            /**
             * Constructs a new JackRward.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IJackRward);

            /** JackRward value_min. */
            public value_min: (number|Long);

            /** JackRward value_max. */
            public value_max: (number|Long);

            /** JackRward reward_type. */
            public reward_type: number;

            /** JackRward reward_value. */
            public reward_value: (number|Long);

            /**
             * Creates a new JackRward instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JackRward instance
             */
            public static create(properties?: gamebase.IJackRward): gamebase.JackRward;

            /**
             * Encodes the specified JackRward message. Does not implicitly {@link gamebase.JackRward.verify|verify} messages.
             * @param message JackRward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IJackRward, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JackRward message, length delimited. Does not implicitly {@link gamebase.JackRward.verify|verify} messages.
             * @param message JackRward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IJackRward, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JackRward message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JackRward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.JackRward;

            /**
             * Decodes a JackRward message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JackRward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.JackRward;

            /**
             * Verifies a JackRward message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JackRward message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JackRward
             */
            public static fromObject(object: { [k: string]: any }): gamebase.JackRward;

            /**
             * Creates a plain object from a JackRward message. Also converts values to other types if specified.
             * @param message JackRward
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.JackRward, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JackRward to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JackpotGetRewardDetailResp. */
        interface IJackpotGetRewardDetailResp {

            /** JackpotGetRewardDetailResp win_count */
            win_count?: (number|null);

            /** JackpotGetRewardDetailResp total_count */
            total_count?: (number|null);

            /** JackpotGetRewardDetailResp continue_time */
            continue_time?: (number|null);

            /** JackpotGetRewardDetailResp winList */
            winList?: ((number|Long)[]|null);

            /** JackpotGetRewardDetailResp rewardList */
            rewardList?: (gamebase.IJackRward[]|null);
        }

        /** Represents a JackpotGetRewardDetailResp. */
        class JackpotGetRewardDetailResp implements IJackpotGetRewardDetailResp {

            /**
             * Constructs a new JackpotGetRewardDetailResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IJackpotGetRewardDetailResp);

            /** JackpotGetRewardDetailResp win_count. */
            public win_count: number;

            /** JackpotGetRewardDetailResp total_count. */
            public total_count: number;

            /** JackpotGetRewardDetailResp continue_time. */
            public continue_time: number;

            /** JackpotGetRewardDetailResp winList. */
            public winList: (number|Long)[];

            /** JackpotGetRewardDetailResp rewardList. */
            public rewardList: gamebase.IJackRward[];

            /**
             * Creates a new JackpotGetRewardDetailResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JackpotGetRewardDetailResp instance
             */
            public static create(properties?: gamebase.IJackpotGetRewardDetailResp): gamebase.JackpotGetRewardDetailResp;

            /**
             * Encodes the specified JackpotGetRewardDetailResp message. Does not implicitly {@link gamebase.JackpotGetRewardDetailResp.verify|verify} messages.
             * @param message JackpotGetRewardDetailResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IJackpotGetRewardDetailResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JackpotGetRewardDetailResp message, length delimited. Does not implicitly {@link gamebase.JackpotGetRewardDetailResp.verify|verify} messages.
             * @param message JackpotGetRewardDetailResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IJackpotGetRewardDetailResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JackpotGetRewardDetailResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JackpotGetRewardDetailResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.JackpotGetRewardDetailResp;

            /**
             * Decodes a JackpotGetRewardDetailResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JackpotGetRewardDetailResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.JackpotGetRewardDetailResp;

            /**
             * Verifies a JackpotGetRewardDetailResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JackpotGetRewardDetailResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JackpotGetRewardDetailResp
             */
            public static fromObject(object: { [k: string]: any }): gamebase.JackpotGetRewardDetailResp;

            /**
             * Creates a plain object from a JackpotGetRewardDetailResp message. Also converts values to other types if specified.
             * @param message JackpotGetRewardDetailResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.JackpotGetRewardDetailResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JackpotGetRewardDetailResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JackpotUserDataDB. */
        interface IJackpotUserDataDB {

            /** JackpotUserDataDB uid */
            uid?: (number|null);

            /** JackpotUserDataDB win_count */
            win_count?: (number|null);

            /** JackpotUserDataDB curBalance */
            curBalance?: (number|Long|null);

            /** JackpotUserDataDB endTimeStamp */
            endTimeStamp?: (number|null);

            /** JackpotUserDataDB totalReward */
            totalReward?: (number|Long|null);

            /** JackpotUserDataDB maxReward */
            maxReward?: (number|Long|null);

            /** JackpotUserDataDB userRewardList */
            userRewardList?: (gamebase.IUserJackReward[]|null);

            /** JackpotUserDataDB winList */
            winList?: ((number|Long)[]|null);

            /** JackpotUserDataDB betAmount */
            betAmount?: (number|Long|null);

            /** JackpotUserDataDB last_win_count */
            last_win_count?: (number|null);
        }

        /** Represents a JackpotUserDataDB. */
        class JackpotUserDataDB implements IJackpotUserDataDB {

            /**
             * Constructs a new JackpotUserDataDB.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IJackpotUserDataDB);

            /** JackpotUserDataDB uid. */
            public uid: number;

            /** JackpotUserDataDB win_count. */
            public win_count: number;

            /** JackpotUserDataDB curBalance. */
            public curBalance: (number|Long);

            /** JackpotUserDataDB endTimeStamp. */
            public endTimeStamp: number;

            /** JackpotUserDataDB totalReward. */
            public totalReward: (number|Long);

            /** JackpotUserDataDB maxReward. */
            public maxReward: (number|Long);

            /** JackpotUserDataDB userRewardList. */
            public userRewardList: gamebase.IUserJackReward[];

            /** JackpotUserDataDB winList. */
            public winList: (number|Long)[];

            /** JackpotUserDataDB betAmount. */
            public betAmount: (number|Long);

            /** JackpotUserDataDB last_win_count. */
            public last_win_count: number;

            /**
             * Creates a new JackpotUserDataDB instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JackpotUserDataDB instance
             */
            public static create(properties?: gamebase.IJackpotUserDataDB): gamebase.JackpotUserDataDB;

            /**
             * Encodes the specified JackpotUserDataDB message. Does not implicitly {@link gamebase.JackpotUserDataDB.verify|verify} messages.
             * @param message JackpotUserDataDB message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IJackpotUserDataDB, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JackpotUserDataDB message, length delimited. Does not implicitly {@link gamebase.JackpotUserDataDB.verify|verify} messages.
             * @param message JackpotUserDataDB message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IJackpotUserDataDB, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JackpotUserDataDB message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JackpotUserDataDB
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.JackpotUserDataDB;

            /**
             * Decodes a JackpotUserDataDB message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JackpotUserDataDB
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.JackpotUserDataDB;

            /**
             * Verifies a JackpotUserDataDB message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JackpotUserDataDB message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JackpotUserDataDB
             */
            public static fromObject(object: { [k: string]: any }): gamebase.JackpotUserDataDB;

            /**
             * Creates a plain object from a JackpotUserDataDB message. Also converts values to other types if specified.
             * @param message JackpotUserDataDB
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.JackpotUserDataDB, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JackpotUserDataDB to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JackpotDataDB. */
        interface IJackpotDataDB {

            /** JackpotDataDB rewarRecordList */
            rewarRecordList?: (gamebase.IRewardRecord[]|null);
        }

        /** Represents a JackpotDataDB. */
        class JackpotDataDB implements IJackpotDataDB {

            /**
             * Constructs a new JackpotDataDB.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IJackpotDataDB);

            /** JackpotDataDB rewarRecordList. */
            public rewarRecordList: gamebase.IRewardRecord[];

            /**
             * Creates a new JackpotDataDB instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JackpotDataDB instance
             */
            public static create(properties?: gamebase.IJackpotDataDB): gamebase.JackpotDataDB;

            /**
             * Encodes the specified JackpotDataDB message. Does not implicitly {@link gamebase.JackpotDataDB.verify|verify} messages.
             * @param message JackpotDataDB message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IJackpotDataDB, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JackpotDataDB message, length delimited. Does not implicitly {@link gamebase.JackpotDataDB.verify|verify} messages.
             * @param message JackpotDataDB message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IJackpotDataDB, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JackpotDataDB message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JackpotDataDB
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.JackpotDataDB;

            /**
             * Decodes a JackpotDataDB message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JackpotDataDB
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.JackpotDataDB;

            /**
             * Verifies a JackpotDataDB message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JackpotDataDB message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JackpotDataDB
             */
            public static fromObject(object: { [k: string]: any }): gamebase.JackpotDataDB;

            /**
             * Creates a plain object from a JackpotDataDB message. Also converts values to other types if specified.
             * @param message JackpotDataDB
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.JackpotDataDB, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JackpotDataDB to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** CC_SHARE_TYPE enum. */
        enum CC_SHARE_TYPE {
            CC_SHARE_TYPE_NULL = 0,
            CC_SHARE_TYPE_JACKPOT = 1
        }

        /** Properties of a SharePosterReq. */
        interface ISharePosterReq {

            /** SharePosterReq share_type */
            share_type?: (number|null);
        }

        /** Represents a SharePosterReq. */
        class SharePosterReq implements ISharePosterReq {

            /**
             * Constructs a new SharePosterReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.ISharePosterReq);

            /** SharePosterReq share_type. */
            public share_type: number;

            /**
             * Creates a new SharePosterReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SharePosterReq instance
             */
            public static create(properties?: gamebase.ISharePosterReq): gamebase.SharePosterReq;

            /**
             * Encodes the specified SharePosterReq message. Does not implicitly {@link gamebase.SharePosterReq.verify|verify} messages.
             * @param message SharePosterReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.ISharePosterReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SharePosterReq message, length delimited. Does not implicitly {@link gamebase.SharePosterReq.verify|verify} messages.
             * @param message SharePosterReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.ISharePosterReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SharePosterReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SharePosterReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.SharePosterReq;

            /**
             * Decodes a SharePosterReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SharePosterReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.SharePosterReq;

            /**
             * Verifies a SharePosterReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SharePosterReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SharePosterReq
             */
            public static fromObject(object: { [k: string]: any }): gamebase.SharePosterReq;

            /**
             * Creates a plain object from a SharePosterReq message. Also converts values to other types if specified.
             * @param message SharePosterReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.SharePosterReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SharePosterReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SharePosterResp. */
        interface ISharePosterResp {

            /** SharePosterResp result */
            result?: (number|null);

            /** SharePosterResp list */
            list?: (gamebase.SharePosterResp.IPoster[]|null);

            /** SharePosterResp share_url */
            share_url?: (string|null);

            /** SharePosterResp telegram */
            telegram?: (string|null);

            /** SharePosterResp whatsapp */
            whatsapp?: (string|null);

            /** SharePosterResp share_type */
            share_type?: (number|null);

            /** SharePosterResp title */
            title?: (string|null);
        }

        /** Represents a SharePosterResp. */
        class SharePosterResp implements ISharePosterResp {

            /**
             * Constructs a new SharePosterResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.ISharePosterResp);

            /** SharePosterResp result. */
            public result: number;

            /** SharePosterResp list. */
            public list: gamebase.SharePosterResp.IPoster[];

            /** SharePosterResp share_url. */
            public share_url: string;

            /** SharePosterResp telegram. */
            public telegram: string;

            /** SharePosterResp whatsapp. */
            public whatsapp: string;

            /** SharePosterResp share_type. */
            public share_type: number;

            /** SharePosterResp title. */
            public title: string;

            /**
             * Creates a new SharePosterResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SharePosterResp instance
             */
            public static create(properties?: gamebase.ISharePosterResp): gamebase.SharePosterResp;

            /**
             * Encodes the specified SharePosterResp message. Does not implicitly {@link gamebase.SharePosterResp.verify|verify} messages.
             * @param message SharePosterResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.ISharePosterResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SharePosterResp message, length delimited. Does not implicitly {@link gamebase.SharePosterResp.verify|verify} messages.
             * @param message SharePosterResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.ISharePosterResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SharePosterResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SharePosterResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.SharePosterResp;

            /**
             * Decodes a SharePosterResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SharePosterResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.SharePosterResp;

            /**
             * Verifies a SharePosterResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SharePosterResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SharePosterResp
             */
            public static fromObject(object: { [k: string]: any }): gamebase.SharePosterResp;

            /**
             * Creates a plain object from a SharePosterResp message. Also converts values to other types if specified.
             * @param message SharePosterResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.SharePosterResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SharePosterResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SharePosterResp {

            /** Properties of a Poster. */
            interface IPoster {

                /** Poster id */
                id?: (number|null);

                /** Poster url */
                url?: (string|null);
            }

            /** Represents a Poster. */
            class Poster implements IPoster {

                /**
                 * Constructs a new Poster.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: gamebase.SharePosterResp.IPoster);

                /** Poster id. */
                public id: number;

                /** Poster url. */
                public url: string;

                /**
                 * Creates a new Poster instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Poster instance
                 */
                public static create(properties?: gamebase.SharePosterResp.IPoster): gamebase.SharePosterResp.Poster;

                /**
                 * Encodes the specified Poster message. Does not implicitly {@link gamebase.SharePosterResp.Poster.verify|verify} messages.
                 * @param message Poster message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: gamebase.SharePosterResp.IPoster, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Poster message, length delimited. Does not implicitly {@link gamebase.SharePosterResp.Poster.verify|verify} messages.
                 * @param message Poster message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: gamebase.SharePosterResp.IPoster, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Poster message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Poster
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.SharePosterResp.Poster;

                /**
                 * Decodes a Poster message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Poster
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.SharePosterResp.Poster;

                /**
                 * Verifies a Poster message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Poster message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Poster
                 */
                public static fromObject(object: { [k: string]: any }): gamebase.SharePosterResp.Poster;

                /**
                 * Creates a plain object from a Poster message. Also converts values to other types if specified.
                 * @param message Poster
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: gamebase.SharePosterResp.Poster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Poster to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a JackpotPoolChangePush. */
        interface IJackpotPoolChangePush {

            /** JackpotPoolChangePush reward_pool */
            reward_pool?: (number|Long|null);
        }

        /** Represents a JackpotPoolChangePush. */
        class JackpotPoolChangePush implements IJackpotPoolChangePush {

            /**
             * Constructs a new JackpotPoolChangePush.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IJackpotPoolChangePush);

            /** JackpotPoolChangePush reward_pool. */
            public reward_pool: (number|Long);

            /**
             * Creates a new JackpotPoolChangePush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JackpotPoolChangePush instance
             */
            public static create(properties?: gamebase.IJackpotPoolChangePush): gamebase.JackpotPoolChangePush;

            /**
             * Encodes the specified JackpotPoolChangePush message. Does not implicitly {@link gamebase.JackpotPoolChangePush.verify|verify} messages.
             * @param message JackpotPoolChangePush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IJackpotPoolChangePush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JackpotPoolChangePush message, length delimited. Does not implicitly {@link gamebase.JackpotPoolChangePush.verify|verify} messages.
             * @param message JackpotPoolChangePush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IJackpotPoolChangePush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JackpotPoolChangePush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JackpotPoolChangePush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.JackpotPoolChangePush;

            /**
             * Decodes a JackpotPoolChangePush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JackpotPoolChangePush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.JackpotPoolChangePush;

            /**
             * Verifies a JackpotPoolChangePush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JackpotPoolChangePush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JackpotPoolChangePush
             */
            public static fromObject(object: { [k: string]: any }): gamebase.JackpotPoolChangePush;

            /**
             * Creates a plain object from a JackpotPoolChangePush message. Also converts values to other types if specified.
             * @param message JackpotPoolChangePush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.JackpotPoolChangePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JackpotPoolChangePush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GameNotificationPush. */
        interface IGameNotificationPush {

            /** GameNotificationPush action */
            action?: (gamebase.GameNotificationPush.ActionType|null);

            /** GameNotificationPush param */
            param?: (number|null);

            /** GameNotificationPush param2 */
            param2?: (number|null);
        }

        /** Represents a GameNotificationPush. */
        class GameNotificationPush implements IGameNotificationPush {

            /**
             * Constructs a new GameNotificationPush.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IGameNotificationPush);

            /** GameNotificationPush action. */
            public action: gamebase.GameNotificationPush.ActionType;

            /** GameNotificationPush param. */
            public param: number;

            /** GameNotificationPush param2. */
            public param2: number;

            /**
             * Creates a new GameNotificationPush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameNotificationPush instance
             */
            public static create(properties?: gamebase.IGameNotificationPush): gamebase.GameNotificationPush;

            /**
             * Encodes the specified GameNotificationPush message. Does not implicitly {@link gamebase.GameNotificationPush.verify|verify} messages.
             * @param message GameNotificationPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IGameNotificationPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameNotificationPush message, length delimited. Does not implicitly {@link gamebase.GameNotificationPush.verify|verify} messages.
             * @param message GameNotificationPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IGameNotificationPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameNotificationPush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameNotificationPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.GameNotificationPush;

            /**
             * Decodes a GameNotificationPush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameNotificationPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.GameNotificationPush;

            /**
             * Verifies a GameNotificationPush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameNotificationPush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameNotificationPush
             */
            public static fromObject(object: { [k: string]: any }): gamebase.GameNotificationPush;

            /**
             * Creates a plain object from a GameNotificationPush message. Also converts values to other types if specified.
             * @param message GameNotificationPush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.GameNotificationPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameNotificationPush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GameNotificationPush {

            /** ActionType enum. */
            enum ActionType {
                ACTION_TIMEOUT_TIPS = 0,
                ACTION_TIMEOUT_KICK = 1,
                ACTION_RETIRE_ALLOC = 2,
                ACTION_RETIRE_KICK = 3
            }
        }

        /** Properties of a ResetUserBalanceReq. */
        interface IResetUserBalanceReq {
        }

        /** Represents a ResetUserBalanceReq. */
        class ResetUserBalanceReq implements IResetUserBalanceReq {

            /**
             * Constructs a new ResetUserBalanceReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IResetUserBalanceReq);

            /**
             * Creates a new ResetUserBalanceReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResetUserBalanceReq instance
             */
            public static create(properties?: gamebase.IResetUserBalanceReq): gamebase.ResetUserBalanceReq;

            /**
             * Encodes the specified ResetUserBalanceReq message. Does not implicitly {@link gamebase.ResetUserBalanceReq.verify|verify} messages.
             * @param message ResetUserBalanceReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IResetUserBalanceReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResetUserBalanceReq message, length delimited. Does not implicitly {@link gamebase.ResetUserBalanceReq.verify|verify} messages.
             * @param message ResetUserBalanceReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IResetUserBalanceReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResetUserBalanceReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResetUserBalanceReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.ResetUserBalanceReq;

            /**
             * Decodes a ResetUserBalanceReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResetUserBalanceReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.ResetUserBalanceReq;

            /**
             * Verifies a ResetUserBalanceReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResetUserBalanceReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResetUserBalanceReq
             */
            public static fromObject(object: { [k: string]: any }): gamebase.ResetUserBalanceReq;

            /**
             * Creates a plain object from a ResetUserBalanceReq message. Also converts values to other types if specified.
             * @param message ResetUserBalanceReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.ResetUserBalanceReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResetUserBalanceReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResetUserBalanceResp. */
        interface IResetUserBalanceResp {

            /** ResetUserBalanceResp balance */
            balance?: (number|Long|null);
        }

        /** Represents a ResetUserBalanceResp. */
        class ResetUserBalanceResp implements IResetUserBalanceResp {

            /**
             * Constructs a new ResetUserBalanceResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamebase.IResetUserBalanceResp);

            /** ResetUserBalanceResp balance. */
            public balance: (number|Long);

            /**
             * Creates a new ResetUserBalanceResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResetUserBalanceResp instance
             */
            public static create(properties?: gamebase.IResetUserBalanceResp): gamebase.ResetUserBalanceResp;

            /**
             * Encodes the specified ResetUserBalanceResp message. Does not implicitly {@link gamebase.ResetUserBalanceResp.verify|verify} messages.
             * @param message ResetUserBalanceResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamebase.IResetUserBalanceResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResetUserBalanceResp message, length delimited. Does not implicitly {@link gamebase.ResetUserBalanceResp.verify|verify} messages.
             * @param message ResetUserBalanceResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamebase.IResetUserBalanceResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResetUserBalanceResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResetUserBalanceResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamebase.ResetUserBalanceResp;

            /**
             * Decodes a ResetUserBalanceResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResetUserBalanceResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamebase.ResetUserBalanceResp;

            /**
             * Verifies a ResetUserBalanceResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResetUserBalanceResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResetUserBalanceResp
             */
            public static fromObject(object: { [k: string]: any }): gamebase.ResetUserBalanceResp;

            /**
             * Creates a plain object from a ResetUserBalanceResp message. Also converts values to other types if specified.
             * @param message ResetUserBalanceResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamebase.ResetUserBalanceResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResetUserBalanceResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
