import * as $protobuf from "protobufjs";
export = ccgame;

declare namespace ccgame {


    /** Namespace client_proto. */
    namespace client_proto {

        /** USER_INFO_SUB_MSG_ID enum. */
        enum USER_INFO_SUB_MSG_ID {
            UISMI_NULL = 0,
            UISMI_USER_MSG_ID_MIN = 1300,
            UISMI_USER_ATTRI_CHANGE_PUSH = 1301,
            UISMI_USER_DATA_CHANGE_PUSH = 1302,
            UISMI_USERBASIC_GET_INFO_REQ = 1303,
            UISMI_USERBASIC_GET_INFO_RESP = 1304,
            UISMI_USER_SET_INFO_REQ = 1305,
            UISMI_USER_SET_INFO_RESP = 1306,
            UISMI_USER_SET_LANG_REQ = 1307,
            UISMI_USER_SET_LANG_RESP = 1308,
            UISMI_PHP_FORBIT_USER_REQ = 1309,
            UISMI_PHP_FORBIT_USER_RESP = 1310,
            UISMI_FORBIT_USER_PUSH = 1311,
            UISMI_USER_VIP_LEVEL_CHANGE = 1312,
            UISMI_USER_MSG_ID_MAX = 1350
        }

        /** Properties of a SetUserInfoReq. */
        interface ISetUserInfoReq {

            /** SetUserInfoReq user_name */
            user_name?: (string|null);

            /** SetUserInfoReq user_avatar */
            user_avatar?: (string|null);

            /** SetUserInfoReq user_gender */
            user_gender?: (string|null);

            /** SetUserInfoReq telephone */
            telephone?: (string|null);

            /** SetUserInfoReq email */
            email?: (string|null);
        }

        /** Represents a SetUserInfoReq. */
        class SetUserInfoReq implements ISetUserInfoReq {

            /**
             * Constructs a new SetUserInfoReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.ISetUserInfoReq);

            /** SetUserInfoReq user_name. */
            public user_name: string;

            /** SetUserInfoReq user_avatar. */
            public user_avatar: string;

            /** SetUserInfoReq user_gender. */
            public user_gender: string;

            /** SetUserInfoReq telephone. */
            public telephone: string;

            /** SetUserInfoReq email. */
            public email: string;

            /**
             * Creates a new SetUserInfoReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetUserInfoReq instance
             */
            public static create(properties?: client_proto.ISetUserInfoReq): client_proto.SetUserInfoReq;

            /**
             * Encodes the specified SetUserInfoReq message. Does not implicitly {@link client_proto.SetUserInfoReq.verify|verify} messages.
             * @param message SetUserInfoReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.ISetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetUserInfoReq message, length delimited. Does not implicitly {@link client_proto.SetUserInfoReq.verify|verify} messages.
             * @param message SetUserInfoReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.ISetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetUserInfoReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetUserInfoReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.SetUserInfoReq;

            /**
             * Decodes a SetUserInfoReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetUserInfoReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.SetUserInfoReq;

            /**
             * Verifies a SetUserInfoReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetUserInfoReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetUserInfoReq
             */
            public static fromObject(object: { [k: string]: any }): client_proto.SetUserInfoReq;

            /**
             * Creates a plain object from a SetUserInfoReq message. Also converts values to other types if specified.
             * @param message SetUserInfoReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.SetUserInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetUserInfoReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a userinfo. */
        interface Iuserinfo {

            /** userinfo user_name */
            user_name?: (string|null);

            /** userinfo user_avatar */
            user_avatar?: (string|null);

            /** userinfo user_gender */
            user_gender?: (string|null);

            /** userinfo telephone */
            telephone?: (string|null);

            /** userinfo email */
            email?: (string|null);
        }

        /** Represents a userinfo. */
        class userinfo implements Iuserinfo {

            /**
             * Constructs a new userinfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.Iuserinfo);

            /** userinfo user_name. */
            public user_name: string;

            /** userinfo user_avatar. */
            public user_avatar: string;

            /** userinfo user_gender. */
            public user_gender: string;

            /** userinfo telephone. */
            public telephone: string;

            /** userinfo email. */
            public email: string;

            /**
             * Creates a new userinfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns userinfo instance
             */
            public static create(properties?: client_proto.Iuserinfo): client_proto.userinfo;

            /**
             * Encodes the specified userinfo message. Does not implicitly {@link client_proto.userinfo.verify|verify} messages.
             * @param message userinfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.Iuserinfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified userinfo message, length delimited. Does not implicitly {@link client_proto.userinfo.verify|verify} messages.
             * @param message userinfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.Iuserinfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a userinfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns userinfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.userinfo;

            /**
             * Decodes a userinfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns userinfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.userinfo;

            /**
             * Verifies a userinfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a userinfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns userinfo
             */
            public static fromObject(object: { [k: string]: any }): client_proto.userinfo;

            /**
             * Creates a plain object from a userinfo message. Also converts values to other types if specified.
             * @param message userinfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.userinfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this userinfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetUserInfoResp. */
        interface ISetUserInfoResp {

            /** SetUserInfoResp result */
            result?: (number|null);

            /** SetUserInfoResp datas */
            datas?: (client_proto.Iuserinfo|null);
        }

        /** Represents a SetUserInfoResp. */
        class SetUserInfoResp implements ISetUserInfoResp {

            /**
             * Constructs a new SetUserInfoResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.ISetUserInfoResp);

            /** SetUserInfoResp result. */
            public result: number;

            /** SetUserInfoResp datas. */
            public datas?: (client_proto.Iuserinfo|null);

            /**
             * Creates a new SetUserInfoResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetUserInfoResp instance
             */
            public static create(properties?: client_proto.ISetUserInfoResp): client_proto.SetUserInfoResp;

            /**
             * Encodes the specified SetUserInfoResp message. Does not implicitly {@link client_proto.SetUserInfoResp.verify|verify} messages.
             * @param message SetUserInfoResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.ISetUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetUserInfoResp message, length delimited. Does not implicitly {@link client_proto.SetUserInfoResp.verify|verify} messages.
             * @param message SetUserInfoResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.ISetUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetUserInfoResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetUserInfoResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.SetUserInfoResp;

            /**
             * Decodes a SetUserInfoResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetUserInfoResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.SetUserInfoResp;

            /**
             * Verifies a SetUserInfoResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetUserInfoResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetUserInfoResp
             */
            public static fromObject(object: { [k: string]: any }): client_proto.SetUserInfoResp;

            /**
             * Creates a plain object from a SetUserInfoResp message. Also converts values to other types if specified.
             * @param message SetUserInfoResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.SetUserInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetUserInfoResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetUserBasicInfoReq. */
        interface IGetUserBasicInfoReq {

            /** GetUserBasicInfoReq user_id */
            user_id?: (number|null);

            /** GetUserBasicInfoReq trans */
            trans?: (Uint8Array|null);
        }

        /** Represents a GetUserBasicInfoReq. */
        class GetUserBasicInfoReq implements IGetUserBasicInfoReq {

            /**
             * Constructs a new GetUserBasicInfoReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.IGetUserBasicInfoReq);

            /** GetUserBasicInfoReq user_id. */
            public user_id: number;

            /** GetUserBasicInfoReq trans. */
            public trans: Uint8Array;

            /**
             * Creates a new GetUserBasicInfoReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetUserBasicInfoReq instance
             */
            public static create(properties?: client_proto.IGetUserBasicInfoReq): client_proto.GetUserBasicInfoReq;

            /**
             * Encodes the specified GetUserBasicInfoReq message. Does not implicitly {@link client_proto.GetUserBasicInfoReq.verify|verify} messages.
             * @param message GetUserBasicInfoReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.IGetUserBasicInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetUserBasicInfoReq message, length delimited. Does not implicitly {@link client_proto.GetUserBasicInfoReq.verify|verify} messages.
             * @param message GetUserBasicInfoReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.IGetUserBasicInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetUserBasicInfoReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetUserBasicInfoReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.GetUserBasicInfoReq;

            /**
             * Decodes a GetUserBasicInfoReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetUserBasicInfoReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.GetUserBasicInfoReq;

            /**
             * Verifies a GetUserBasicInfoReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetUserBasicInfoReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetUserBasicInfoReq
             */
            public static fromObject(object: { [k: string]: any }): client_proto.GetUserBasicInfoReq;

            /**
             * Creates a plain object from a GetUserBasicInfoReq message. Also converts values to other types if specified.
             * @param message GetUserBasicInfoReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.GetUserBasicInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetUserBasicInfoReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetUserBasicInfoResp. */
        interface IGetUserBasicInfoResp {

            /** GetUserBasicInfoResp user_name */
            user_name?: (string|null);

            /** GetUserBasicInfoResp user_avatar */
            user_avatar?: (string|null);

            /** GetUserBasicInfoResp user_gender */
            user_gender?: (string|null);

            /** GetUserBasicInfoResp telephone */
            telephone?: (string|null);

            /** GetUserBasicInfoResp email */
            email?: (string|null);

            /** GetUserBasicInfoResp lang */
            lang?: (string|null);

            /** GetUserBasicInfoResp user_id */
            user_id?: (number|null);

            /** GetUserBasicInfoResp ip */
            ip?: (string|null);

            /** GetUserBasicInfoResp reg_time */
            reg_time?: (number|null);

            /** GetUserBasicInfoResp device_id */
            device_id?: (string|null);

            /** GetUserBasicInfoResp invite_code */
            invite_code?: (string|null);

            /** GetUserBasicInfoResp channel */
            channel?: (string|null);

            /** GetUserBasicInfoResp vip_level */
            vip_level?: (number|null);

            /** GetUserBasicInfoResp trans */
            trans?: (Uint8Array|null);

            /** GetUserBasicInfoResp bank_account */
            bank_account?: (string|null);
        }

        /** Represents a GetUserBasicInfoResp. */
        class GetUserBasicInfoResp implements IGetUserBasicInfoResp {

            /**
             * Constructs a new GetUserBasicInfoResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.IGetUserBasicInfoResp);

            /** GetUserBasicInfoResp user_name. */
            public user_name: string;

            /** GetUserBasicInfoResp user_avatar. */
            public user_avatar: string;

            /** GetUserBasicInfoResp user_gender. */
            public user_gender: string;

            /** GetUserBasicInfoResp telephone. */
            public telephone: string;

            /** GetUserBasicInfoResp email. */
            public email: string;

            /** GetUserBasicInfoResp lang. */
            public lang: string;

            /** GetUserBasicInfoResp user_id. */
            public user_id: number;

            /** GetUserBasicInfoResp ip. */
            public ip: string;

            /** GetUserBasicInfoResp reg_time. */
            public reg_time: number;

            /** GetUserBasicInfoResp device_id. */
            public device_id: string;

            /** GetUserBasicInfoResp invite_code. */
            public invite_code: string;

            /** GetUserBasicInfoResp channel. */
            public channel: string;

            /** GetUserBasicInfoResp vip_level. */
            public vip_level: number;

            /** GetUserBasicInfoResp trans. */
            public trans: Uint8Array;

            /** GetUserBasicInfoResp bank_account. */
            public bank_account: string;

            /**
             * Creates a new GetUserBasicInfoResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetUserBasicInfoResp instance
             */
            public static create(properties?: client_proto.IGetUserBasicInfoResp): client_proto.GetUserBasicInfoResp;

            /**
             * Encodes the specified GetUserBasicInfoResp message. Does not implicitly {@link client_proto.GetUserBasicInfoResp.verify|verify} messages.
             * @param message GetUserBasicInfoResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.IGetUserBasicInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetUserBasicInfoResp message, length delimited. Does not implicitly {@link client_proto.GetUserBasicInfoResp.verify|verify} messages.
             * @param message GetUserBasicInfoResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.IGetUserBasicInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetUserBasicInfoResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetUserBasicInfoResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.GetUserBasicInfoResp;

            /**
             * Decodes a GetUserBasicInfoResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetUserBasicInfoResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.GetUserBasicInfoResp;

            /**
             * Verifies a GetUserBasicInfoResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetUserBasicInfoResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetUserBasicInfoResp
             */
            public static fromObject(object: { [k: string]: any }): client_proto.GetUserBasicInfoResp;

            /**
             * Creates a plain object from a GetUserBasicInfoResp message. Also converts values to other types if specified.
             * @param message GetUserBasicInfoResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.GetUserBasicInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetUserBasicInfoResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetLangCodeReq. */
        interface ISetLangCodeReq {

            /** SetLangCodeReq lang */
            lang?: (string|null);
        }

        /** Represents a SetLangCodeReq. */
        class SetLangCodeReq implements ISetLangCodeReq {

            /**
             * Constructs a new SetLangCodeReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.ISetLangCodeReq);

            /** SetLangCodeReq lang. */
            public lang: string;

            /**
             * Creates a new SetLangCodeReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetLangCodeReq instance
             */
            public static create(properties?: client_proto.ISetLangCodeReq): client_proto.SetLangCodeReq;

            /**
             * Encodes the specified SetLangCodeReq message. Does not implicitly {@link client_proto.SetLangCodeReq.verify|verify} messages.
             * @param message SetLangCodeReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.ISetLangCodeReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetLangCodeReq message, length delimited. Does not implicitly {@link client_proto.SetLangCodeReq.verify|verify} messages.
             * @param message SetLangCodeReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.ISetLangCodeReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetLangCodeReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetLangCodeReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.SetLangCodeReq;

            /**
             * Decodes a SetLangCodeReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetLangCodeReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.SetLangCodeReq;

            /**
             * Verifies a SetLangCodeReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetLangCodeReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetLangCodeReq
             */
            public static fromObject(object: { [k: string]: any }): client_proto.SetLangCodeReq;

            /**
             * Creates a plain object from a SetLangCodeReq message. Also converts values to other types if specified.
             * @param message SetLangCodeReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.SetLangCodeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetLangCodeReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetLangCodeResp. */
        interface ISetLangCodeResp {

            /** SetLangCodeResp result */
            result?: (number|null);

            /** SetLangCodeResp lang */
            lang?: (string|null);
        }

        /** Represents a SetLangCodeResp. */
        class SetLangCodeResp implements ISetLangCodeResp {

            /**
             * Constructs a new SetLangCodeResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.ISetLangCodeResp);

            /** SetLangCodeResp result. */
            public result: number;

            /** SetLangCodeResp lang. */
            public lang: string;

            /**
             * Creates a new SetLangCodeResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetLangCodeResp instance
             */
            public static create(properties?: client_proto.ISetLangCodeResp): client_proto.SetLangCodeResp;

            /**
             * Encodes the specified SetLangCodeResp message. Does not implicitly {@link client_proto.SetLangCodeResp.verify|verify} messages.
             * @param message SetLangCodeResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.ISetLangCodeResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetLangCodeResp message, length delimited. Does not implicitly {@link client_proto.SetLangCodeResp.verify|verify} messages.
             * @param message SetLangCodeResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.ISetLangCodeResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetLangCodeResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetLangCodeResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.SetLangCodeResp;

            /**
             * Decodes a SetLangCodeResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetLangCodeResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.SetLangCodeResp;

            /**
             * Verifies a SetLangCodeResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetLangCodeResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetLangCodeResp
             */
            public static fromObject(object: { [k: string]: any }): client_proto.SetLangCodeResp;

            /**
             * Creates a plain object from a SetLangCodeResp message. Also converts values to other types if specified.
             * @param message SetLangCodeResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.SetLangCodeResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetLangCodeResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ForbitUserReq. */
        interface IForbitUserReq {

            /** ForbitUserReq user_id */
            user_id?: (number|null);

            /** ForbitUserReq status */
            status?: (number|null);

            /** ForbitUserReq reason */
            reason?: (client_proto.ForbitUserReq.FORBIT_TYPE|null);
        }

        /** Represents a ForbitUserReq. */
        class ForbitUserReq implements IForbitUserReq {

            /**
             * Constructs a new ForbitUserReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.IForbitUserReq);

            /** ForbitUserReq user_id. */
            public user_id: number;

            /** ForbitUserReq status. */
            public status: number;

            /** ForbitUserReq reason. */
            public reason: client_proto.ForbitUserReq.FORBIT_TYPE;

            /**
             * Creates a new ForbitUserReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ForbitUserReq instance
             */
            public static create(properties?: client_proto.IForbitUserReq): client_proto.ForbitUserReq;

            /**
             * Encodes the specified ForbitUserReq message. Does not implicitly {@link client_proto.ForbitUserReq.verify|verify} messages.
             * @param message ForbitUserReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.IForbitUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ForbitUserReq message, length delimited. Does not implicitly {@link client_proto.ForbitUserReq.verify|verify} messages.
             * @param message ForbitUserReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.IForbitUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ForbitUserReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ForbitUserReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.ForbitUserReq;

            /**
             * Decodes a ForbitUserReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ForbitUserReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.ForbitUserReq;

            /**
             * Verifies a ForbitUserReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ForbitUserReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ForbitUserReq
             */
            public static fromObject(object: { [k: string]: any }): client_proto.ForbitUserReq;

            /**
             * Creates a plain object from a ForbitUserReq message. Also converts values to other types if specified.
             * @param message ForbitUserReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.ForbitUserReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ForbitUserReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ForbitUserReq {

            /** FORBIT_TYPE enum. */
            enum FORBIT_TYPE {
                FORBIT_NULL = 0,
                FORBIT_IP = 1,
                FORBIT_BANK = 2,
                FORBIT_DEVICE = 3,
                FORBIT_MOBILE = 4
            }
        }

        /** Properties of a ForbitUserResp. */
        interface IForbitUserResp {

            /** ForbitUserResp result */
            result?: (number|null);
        }

        /** Represents a ForbitUserResp. */
        class ForbitUserResp implements IForbitUserResp {

            /**
             * Constructs a new ForbitUserResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.IForbitUserResp);

            /** ForbitUserResp result. */
            public result: number;

            /**
             * Creates a new ForbitUserResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ForbitUserResp instance
             */
            public static create(properties?: client_proto.IForbitUserResp): client_proto.ForbitUserResp;

            /**
             * Encodes the specified ForbitUserResp message. Does not implicitly {@link client_proto.ForbitUserResp.verify|verify} messages.
             * @param message ForbitUserResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.IForbitUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ForbitUserResp message, length delimited. Does not implicitly {@link client_proto.ForbitUserResp.verify|verify} messages.
             * @param message ForbitUserResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.IForbitUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ForbitUserResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ForbitUserResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.ForbitUserResp;

            /**
             * Decodes a ForbitUserResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ForbitUserResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.ForbitUserResp;

            /**
             * Verifies a ForbitUserResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ForbitUserResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ForbitUserResp
             */
            public static fromObject(object: { [k: string]: any }): client_proto.ForbitUserResp;

            /**
             * Creates a plain object from a ForbitUserResp message. Also converts values to other types if specified.
             * @param message ForbitUserResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.ForbitUserResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ForbitUserResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ForbitUserPush. */
        interface IForbitUserPush {

            /** ForbitUserPush user_id */
            user_id?: (number|null);
        }

        /** Represents a ForbitUserPush. */
        class ForbitUserPush implements IForbitUserPush {

            /**
             * Constructs a new ForbitUserPush.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.IForbitUserPush);

            /** ForbitUserPush user_id. */
            public user_id: number;

            /**
             * Creates a new ForbitUserPush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ForbitUserPush instance
             */
            public static create(properties?: client_proto.IForbitUserPush): client_proto.ForbitUserPush;

            /**
             * Encodes the specified ForbitUserPush message. Does not implicitly {@link client_proto.ForbitUserPush.verify|verify} messages.
             * @param message ForbitUserPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.IForbitUserPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ForbitUserPush message, length delimited. Does not implicitly {@link client_proto.ForbitUserPush.verify|verify} messages.
             * @param message ForbitUserPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.IForbitUserPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ForbitUserPush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ForbitUserPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.ForbitUserPush;

            /**
             * Decodes a ForbitUserPush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ForbitUserPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.ForbitUserPush;

            /**
             * Verifies a ForbitUserPush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ForbitUserPush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ForbitUserPush
             */
            public static fromObject(object: { [k: string]: any }): client_proto.ForbitUserPush;

            /**
             * Creates a plain object from a ForbitUserPush message. Also converts values to other types if specified.
             * @param message ForbitUserPush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.ForbitUserPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ForbitUserPush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserVipLevelChangeResp. */
        interface IUserVipLevelChangeResp {

            /** UserVipLevelChangeResp uid */
            uid?: (number|null);

            /** UserVipLevelChangeResp vip_level */
            vip_level?: (number|null);
        }

        /** Represents a UserVipLevelChangeResp. */
        class UserVipLevelChangeResp implements IUserVipLevelChangeResp {

            /**
             * Constructs a new UserVipLevelChangeResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: client_proto.IUserVipLevelChangeResp);

            /** UserVipLevelChangeResp uid. */
            public uid: number;

            /** UserVipLevelChangeResp vip_level. */
            public vip_level: number;

            /**
             * Creates a new UserVipLevelChangeResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserVipLevelChangeResp instance
             */
            public static create(properties?: client_proto.IUserVipLevelChangeResp): client_proto.UserVipLevelChangeResp;

            /**
             * Encodes the specified UserVipLevelChangeResp message. Does not implicitly {@link client_proto.UserVipLevelChangeResp.verify|verify} messages.
             * @param message UserVipLevelChangeResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client_proto.IUserVipLevelChangeResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserVipLevelChangeResp message, length delimited. Does not implicitly {@link client_proto.UserVipLevelChangeResp.verify|verify} messages.
             * @param message UserVipLevelChangeResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client_proto.IUserVipLevelChangeResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserVipLevelChangeResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserVipLevelChangeResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): client_proto.UserVipLevelChangeResp;

            /**
             * Decodes a UserVipLevelChangeResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserVipLevelChangeResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): client_proto.UserVipLevelChangeResp;

            /**
             * Verifies a UserVipLevelChangeResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserVipLevelChangeResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserVipLevelChangeResp
             */
            public static fromObject(object: { [k: string]: any }): client_proto.UserVipLevelChangeResp;

            /**
             * Creates a plain object from a UserVipLevelChangeResp message. Also converts values to other types if specified.
             * @param message UserVipLevelChangeResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client_proto.UserVipLevelChangeResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserVipLevelChangeResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

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
            SERVER_TYPE_REPORT_SWITCH = 59,
            SERVER_TYPE_GAMERECORD = 65
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

    /** Namespace asset. */
    namespace asset {

        /** ASSET_CMD enum. */
        enum ASSET_CMD {
            ASSET_CMD_NONE = 0,
            ASSET_CMD_GET_ASSET = 1450,
            ASSET_CMD_GET_ASSET_RESP = 1451,
            ASSET_CMD_UPDATE_ASSET = 1452,
            ASSET_CMD_UPDATE_ASSET_RESP = 1453,
            ASSET_CMD_GET_ASSET_BYFIELD = 1454,
            ASSET_CMD_GET_ASSET_BYFIELD_RESP = 1455,
            ASSET_CMD_ASSET_FLOW_PUSH = 1456,
            ASSET_CMD_ADD_ACCOUNT = 1457,
            ASSET_CMD_ADD_ACCOUNT_RESP = 1458
        }

        /** Properties of an AssetReq. */
        interface IAssetReq {

            /** AssetReq uid */
            uid?: (number|null);

            /** AssetReq trans */
            trans?: (Uint8Array|null);
        }

        /** Represents an AssetReq. */
        class AssetReq implements IAssetReq {

            /**
             * Constructs a new AssetReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: asset.IAssetReq);

            /** AssetReq uid. */
            public uid: number;

            /** AssetReq trans. */
            public trans: Uint8Array;

            /**
             * Creates a new AssetReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AssetReq instance
             */
            public static create(properties?: asset.IAssetReq): asset.AssetReq;

            /**
             * Encodes the specified AssetReq message. Does not implicitly {@link asset.AssetReq.verify|verify} messages.
             * @param message AssetReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: asset.IAssetReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AssetReq message, length delimited. Does not implicitly {@link asset.AssetReq.verify|verify} messages.
             * @param message AssetReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: asset.IAssetReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AssetReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AssetReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): asset.AssetReq;

            /**
             * Decodes an AssetReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AssetReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): asset.AssetReq;

            /**
             * Verifies an AssetReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AssetReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AssetReq
             */
            public static fromObject(object: { [k: string]: any }): asset.AssetReq;

            /**
             * Creates a plain object from an AssetReq message. Also converts values to other types if specified.
             * @param message AssetReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: asset.AssetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AssetReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AssetResp. */
        interface IAssetResp {

            /** AssetResp uid */
            uid?: (number|null);

            /** AssetResp result */
            result?: (number|null);

            /** AssetResp amount */
            amount?: (number|Long|null);

            /** AssetResp coin */
            coin?: (number|Long|null);

            /** AssetResp totalbet */
            totalbet?: (number|Long|null);

            /** AssetResp totalrecharge */
            totalrecharge?: (number|Long|null);

            /** AssetResp rechargecount */
            rechargecount?: (number|null);

            /** AssetResp trans */
            trans?: (Uint8Array|null);
        }

        /** Represents an AssetResp. */
        class AssetResp implements IAssetResp {

            /**
             * Constructs a new AssetResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: asset.IAssetResp);

            /** AssetResp uid. */
            public uid: number;

            /** AssetResp result. */
            public result: number;

            /** AssetResp amount. */
            public amount: (number|Long);

            /** AssetResp coin. */
            public coin: (number|Long);

            /** AssetResp totalbet. */
            public totalbet: (number|Long);

            /** AssetResp totalrecharge. */
            public totalrecharge: (number|Long);

            /** AssetResp rechargecount. */
            public rechargecount: number;

            /** AssetResp trans. */
            public trans: Uint8Array;

            /**
             * Creates a new AssetResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AssetResp instance
             */
            public static create(properties?: asset.IAssetResp): asset.AssetResp;

            /**
             * Encodes the specified AssetResp message. Does not implicitly {@link asset.AssetResp.verify|verify} messages.
             * @param message AssetResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: asset.IAssetResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AssetResp message, length delimited. Does not implicitly {@link asset.AssetResp.verify|verify} messages.
             * @param message AssetResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: asset.IAssetResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AssetResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AssetResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): asset.AssetResp;

            /**
             * Decodes an AssetResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AssetResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): asset.AssetResp;

            /**
             * Verifies an AssetResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AssetResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AssetResp
             */
            public static fromObject(object: { [k: string]: any }): asset.AssetResp;

            /**
             * Creates a plain object from an AssetResp message. Also converts values to other types if specified.
             * @param message AssetResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: asset.AssetResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AssetResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** OP_FIELD enum. */
        enum OP_FIELD {
            FIELD_NONE = 0,
            FIELD_AMOUNT = 1,
            FIELD_COIN = 2,
            FIELD_TOTALBET = 3,
            FIELD_TOTALRECHARGE = 4,
            FIELD_BALANCE = 5,
            FIELD_WITHDRAW_LIMIT = 6,
            FIELD_TOTALWITHDRAW = 7,
            FIELD_TOTALWIN = 8,
            FIELD_WITHDRAWCOUNT = 9,
            FIELD_RECHARGECOUNT = 10,
            FIELD_TOTALVALIDFLOW = 11,
            FIELD_VSTOTALVALIDFLOW = 12
        }

        /** OP_ACT enum. */
        enum OP_ACT {
            ACT_NONE = 0,
            ACT_BET = 1,
            ACT_WINLOST = 2,
            ACT_RECHARGE = 3,
            ACT_SPIN_WITHDRAW = 4,
            ACT_WITHDRAW = 5,
            ACT_REGISTER = 6,
            ACT_BACKEND = 7,
            ACT_REBATE = 8,
            ACT_CANCEL_BET = 9,
            ACT_CANCEL_WINLOST = 10,
            ACT_FREEZE = 11,
            ACT_VIP_WELFARE = 12,
            ACT_WITHDRAW_REJECT = 13,
            ACT_INVITE = 14,
            ACT_COMMISSIONS = 15,
            ACT_GAME_REWARD = 16,
            ACT_RANK = 17,
            ACT_VIP_UPGRADE = 18,
            ACT_ACTIVITYGIFT = 19,
            ACT_GIFT = 20,
            ACT_VIP_BET_REDATE = 21,
            ACT_JACKPOT_REWARD = 22,
            ACT_VALID_FLOW = 23,
            ACT_ACCUMULATECHARGE = 24,
            ACT_ACTIVITY_REGRESS_GIFT = 25,
            ACT_ACTIVITY_REGRESS_WELFARE = 26,
            ACT_AGENT_RANK = 27,
            ACT_MAIL = 28,
            ACT_ACTIVITY_SURPRISE_GIFT = 29,
            ACT_ACTIVITY_SHOOTUP_GIFT = 30
        }

        /** OP_UPDATE_TYPE enum. */
        enum OP_UPDATE_TYPE {
            UPDATE_TYPE_INC_DEC = 0,
            UPDATE_TYPE_SET = 1
        }

        /** Properties of a FieldValue. */
        interface IFieldValue {

            /** FieldValue field */
            field?: (asset.OP_FIELD|null);

            /** FieldValue val */
            val?: (number|Long|null);
        }

        /** Represents a FieldValue. */
        class FieldValue implements IFieldValue {

            /**
             * Constructs a new FieldValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: asset.IFieldValue);

            /** FieldValue field. */
            public field: asset.OP_FIELD;

            /** FieldValue val. */
            public val: (number|Long);

            /**
             * Creates a new FieldValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldValue instance
             */
            public static create(properties?: asset.IFieldValue): asset.FieldValue;

            /**
             * Encodes the specified FieldValue message. Does not implicitly {@link asset.FieldValue.verify|verify} messages.
             * @param message FieldValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: asset.IFieldValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldValue message, length delimited. Does not implicitly {@link asset.FieldValue.verify|verify} messages.
             * @param message FieldValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: asset.IFieldValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): asset.FieldValue;

            /**
             * Decodes a FieldValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): asset.FieldValue;

            /**
             * Verifies a FieldValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldValue
             */
            public static fromObject(object: { [k: string]: any }): asset.FieldValue;

            /**
             * Creates a plain object from a FieldValue message. Also converts values to other types if specified.
             * @param message FieldValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: asset.FieldValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AssetByFieldReq. */
        interface IAssetByFieldReq {

            /** AssetByFieldReq uid */
            uid?: (number|null);

            /** AssetByFieldReq fields */
            fields?: (asset.OP_FIELD[]|null);

            /** AssetByFieldReq trans */
            trans?: (Uint8Array|null);
        }

        /** Represents an AssetByFieldReq. */
        class AssetByFieldReq implements IAssetByFieldReq {

            /**
             * Constructs a new AssetByFieldReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: asset.IAssetByFieldReq);

            /** AssetByFieldReq uid. */
            public uid: number;

            /** AssetByFieldReq fields. */
            public fields: asset.OP_FIELD[];

            /** AssetByFieldReq trans. */
            public trans: Uint8Array;

            /**
             * Creates a new AssetByFieldReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AssetByFieldReq instance
             */
            public static create(properties?: asset.IAssetByFieldReq): asset.AssetByFieldReq;

            /**
             * Encodes the specified AssetByFieldReq message. Does not implicitly {@link asset.AssetByFieldReq.verify|verify} messages.
             * @param message AssetByFieldReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: asset.IAssetByFieldReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AssetByFieldReq message, length delimited. Does not implicitly {@link asset.AssetByFieldReq.verify|verify} messages.
             * @param message AssetByFieldReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: asset.IAssetByFieldReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AssetByFieldReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AssetByFieldReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): asset.AssetByFieldReq;

            /**
             * Decodes an AssetByFieldReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AssetByFieldReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): asset.AssetByFieldReq;

            /**
             * Verifies an AssetByFieldReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AssetByFieldReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AssetByFieldReq
             */
            public static fromObject(object: { [k: string]: any }): asset.AssetByFieldReq;

            /**
             * Creates a plain object from an AssetByFieldReq message. Also converts values to other types if specified.
             * @param message AssetByFieldReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: asset.AssetByFieldReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AssetByFieldReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AssetByFieldResp. */
        interface IAssetByFieldResp {

            /** AssetByFieldResp uid */
            uid?: (number|null);

            /** AssetByFieldResp result */
            result?: (number|null);

            /** AssetByFieldResp fieldval */
            fieldval?: (asset.IFieldValue[]|null);

            /** AssetByFieldResp trans */
            trans?: (Uint8Array|null);
        }

        /** Represents an AssetByFieldResp. */
        class AssetByFieldResp implements IAssetByFieldResp {

            /**
             * Constructs a new AssetByFieldResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: asset.IAssetByFieldResp);

            /** AssetByFieldResp uid. */
            public uid: number;

            /** AssetByFieldResp result. */
            public result: number;

            /** AssetByFieldResp fieldval. */
            public fieldval: asset.IFieldValue[];

            /** AssetByFieldResp trans. */
            public trans: Uint8Array;

            /**
             * Creates a new AssetByFieldResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AssetByFieldResp instance
             */
            public static create(properties?: asset.IAssetByFieldResp): asset.AssetByFieldResp;

            /**
             * Encodes the specified AssetByFieldResp message. Does not implicitly {@link asset.AssetByFieldResp.verify|verify} messages.
             * @param message AssetByFieldResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: asset.IAssetByFieldResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AssetByFieldResp message, length delimited. Does not implicitly {@link asset.AssetByFieldResp.verify|verify} messages.
             * @param message AssetByFieldResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: asset.IAssetByFieldResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AssetByFieldResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AssetByFieldResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): asset.AssetByFieldResp;

            /**
             * Decodes an AssetByFieldResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AssetByFieldResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): asset.AssetByFieldResp;

            /**
             * Verifies an AssetByFieldResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AssetByFieldResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AssetByFieldResp
             */
            public static fromObject(object: { [k: string]: any }): asset.AssetByFieldResp;

            /**
             * Creates a plain object from an AssetByFieldResp message. Also converts values to other types if specified.
             * @param message AssetByFieldResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: asset.AssetByFieldResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AssetByFieldResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Oparition. */
        interface IOparition {

            /** Oparition field */
            field?: (asset.OP_FIELD|null);

            /** Oparition act */
            act?: (asset.OP_ACT|null);

            /** Oparition delt */
            delt?: (number|Long|null);

            /** Oparition upatetype */
            upatetype?: (asset.OP_UPDATE_TYPE|null);
        }

        /** Represents an Oparition. */
        class Oparition implements IOparition {

            /**
             * Constructs a new Oparition.
             * @param [properties] Properties to set
             */
            constructor(properties?: asset.IOparition);

            /** Oparition field. */
            public field: asset.OP_FIELD;

            /** Oparition act. */
            public act: asset.OP_ACT;

            /** Oparition delt. */
            public delt: (number|Long);

            /** Oparition upatetype. */
            public upatetype: asset.OP_UPDATE_TYPE;

            /**
             * Creates a new Oparition instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Oparition instance
             */
            public static create(properties?: asset.IOparition): asset.Oparition;

            /**
             * Encodes the specified Oparition message. Does not implicitly {@link asset.Oparition.verify|verify} messages.
             * @param message Oparition message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: asset.IOparition, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Oparition message, length delimited. Does not implicitly {@link asset.Oparition.verify|verify} messages.
             * @param message Oparition message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: asset.IOparition, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Oparition message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Oparition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): asset.Oparition;

            /**
             * Decodes an Oparition message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Oparition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): asset.Oparition;

            /**
             * Verifies an Oparition message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Oparition message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Oparition
             */
            public static fromObject(object: { [k: string]: any }): asset.Oparition;

            /**
             * Creates a plain object from an Oparition message. Also converts values to other types if specified.
             * @param message Oparition
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: asset.Oparition, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Oparition to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GameInfo. */
        interface IGameInfo {

            /** GameInfo th */
            th?: (string|null);

            /** GameInfo game */
            game?: (string|null);

            /** GameInfo provider */
            provider?: (string|null);

            /** GameInfo gametype */
            gametype?: (number|null);

            /** GameInfo cycle */
            cycle?: (string|null);

            /** GameInfo orderid */
            orderid?: (string|null);

            /** GameInfo associatedorder */
            associatedorder?: (string|null);
        }

        /** Represents a GameInfo. */
        class GameInfo implements IGameInfo {

            /**
             * Constructs a new GameInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: asset.IGameInfo);

            /** GameInfo th. */
            public th: string;

            /** GameInfo game. */
            public game: string;

            /** GameInfo provider. */
            public provider: string;

            /** GameInfo gametype. */
            public gametype: number;

            /** GameInfo cycle. */
            public cycle: string;

            /** GameInfo orderid. */
            public orderid: string;

            /** GameInfo associatedorder. */
            public associatedorder: string;

            /**
             * Creates a new GameInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameInfo instance
             */
            public static create(properties?: asset.IGameInfo): asset.GameInfo;

            /**
             * Encodes the specified GameInfo message. Does not implicitly {@link asset.GameInfo.verify|verify} messages.
             * @param message GameInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: asset.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link asset.GameInfo.verify|verify} messages.
             * @param message GameInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: asset.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): asset.GameInfo;

            /**
             * Decodes a GameInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): asset.GameInfo;

            /**
             * Verifies a GameInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameInfo
             */
            public static fromObject(object: { [k: string]: any }): asset.GameInfo;

            /**
             * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
             * @param message GameInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: asset.GameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdateAssetReq. */
        interface IUpdateAssetReq {

            /** UpdateAssetReq uid */
            uid?: (number|null);

            /** UpdateAssetReq op */
            op?: (asset.IOparition[]|null);

            /** UpdateAssetReq gameinfo */
            gameinfo?: (asset.IGameInfo|null);

            /** UpdateAssetReq ext */
            ext?: (string|null);

            /** UpdateAssetReq optime */
            optime?: (number|Long|null);

            /** UpdateAssetReq trans */
            trans?: (Uint8Array|null);
        }

        /** Represents an UpdateAssetReq. */
        class UpdateAssetReq implements IUpdateAssetReq {

            /**
             * Constructs a new UpdateAssetReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: asset.IUpdateAssetReq);

            /** UpdateAssetReq uid. */
            public uid: number;

            /** UpdateAssetReq op. */
            public op: asset.IOparition[];

            /** UpdateAssetReq gameinfo. */
            public gameinfo?: (asset.IGameInfo|null);

            /** UpdateAssetReq ext. */
            public ext: string;

            /** UpdateAssetReq optime. */
            public optime: (number|Long);

            /** UpdateAssetReq trans. */
            public trans: Uint8Array;

            /**
             * Creates a new UpdateAssetReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateAssetReq instance
             */
            public static create(properties?: asset.IUpdateAssetReq): asset.UpdateAssetReq;

            /**
             * Encodes the specified UpdateAssetReq message. Does not implicitly {@link asset.UpdateAssetReq.verify|verify} messages.
             * @param message UpdateAssetReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: asset.IUpdateAssetReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateAssetReq message, length delimited. Does not implicitly {@link asset.UpdateAssetReq.verify|verify} messages.
             * @param message UpdateAssetReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: asset.IUpdateAssetReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateAssetReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateAssetReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): asset.UpdateAssetReq;

            /**
             * Decodes an UpdateAssetReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateAssetReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): asset.UpdateAssetReq;

            /**
             * Verifies an UpdateAssetReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateAssetReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateAssetReq
             */
            public static fromObject(object: { [k: string]: any }): asset.UpdateAssetReq;

            /**
             * Creates a plain object from an UpdateAssetReq message. Also converts values to other types if specified.
             * @param message UpdateAssetReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: asset.UpdateAssetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateAssetReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdateAssetResp. */
        interface IUpdateAssetResp {

            /** UpdateAssetResp uid */
            uid?: (number|null);

            /** UpdateAssetResp result */
            result?: (number|null);

            /** UpdateAssetResp fieldval */
            fieldval?: (asset.IFieldValue[]|null);

            /** UpdateAssetResp trans */
            trans?: (Uint8Array|null);
        }

        /** Represents an UpdateAssetResp. */
        class UpdateAssetResp implements IUpdateAssetResp {

            /**
             * Constructs a new UpdateAssetResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: asset.IUpdateAssetResp);

            /** UpdateAssetResp uid. */
            public uid: number;

            /** UpdateAssetResp result. */
            public result: number;

            /** UpdateAssetResp fieldval. */
            public fieldval: asset.IFieldValue[];

            /** UpdateAssetResp trans. */
            public trans: Uint8Array;

            /**
             * Creates a new UpdateAssetResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateAssetResp instance
             */
            public static create(properties?: asset.IUpdateAssetResp): asset.UpdateAssetResp;

            /**
             * Encodes the specified UpdateAssetResp message. Does not implicitly {@link asset.UpdateAssetResp.verify|verify} messages.
             * @param message UpdateAssetResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: asset.IUpdateAssetResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateAssetResp message, length delimited. Does not implicitly {@link asset.UpdateAssetResp.verify|verify} messages.
             * @param message UpdateAssetResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: asset.IUpdateAssetResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateAssetResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateAssetResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): asset.UpdateAssetResp;

            /**
             * Decodes an UpdateAssetResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateAssetResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): asset.UpdateAssetResp;

            /**
             * Verifies an UpdateAssetResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateAssetResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateAssetResp
             */
            public static fromObject(object: { [k: string]: any }): asset.UpdateAssetResp;

            /**
             * Creates a plain object from an UpdateAssetResp message. Also converts values to other types if specified.
             * @param message UpdateAssetResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: asset.UpdateAssetResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateAssetResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AssetFlow. */
        interface IAssetFlow {

            /** AssetFlow uid */
            uid?: (number|null);

            /** AssetFlow op */
            op?: (asset.IOparition|null);

            /** AssetFlow gameinfo */
            gameinfo?: (asset.IGameInfo|null);

            /** AssetFlow ext */
            ext?: (string|null);

            /** AssetFlow optime */
            optime?: (number|Long|null);

            /** AssetFlow result */
            result?: (number|null);

            /** AssetFlow fieldval */
            fieldval?: (asset.IFieldValue[]|null);
        }

        /** Represents an AssetFlow. */
        class AssetFlow implements IAssetFlow {

            /**
             * Constructs a new AssetFlow.
             * @param [properties] Properties to set
             */
            constructor(properties?: asset.IAssetFlow);

            /** AssetFlow uid. */
            public uid: number;

            /** AssetFlow op. */
            public op?: (asset.IOparition|null);

            /** AssetFlow gameinfo. */
            public gameinfo?: (asset.IGameInfo|null);

            /** AssetFlow ext. */
            public ext: string;

            /** AssetFlow optime. */
            public optime: (number|Long);

            /** AssetFlow result. */
            public result: number;

            /** AssetFlow fieldval. */
            public fieldval: asset.IFieldValue[];

            /**
             * Creates a new AssetFlow instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AssetFlow instance
             */
            public static create(properties?: asset.IAssetFlow): asset.AssetFlow;

            /**
             * Encodes the specified AssetFlow message. Does not implicitly {@link asset.AssetFlow.verify|verify} messages.
             * @param message AssetFlow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: asset.IAssetFlow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AssetFlow message, length delimited. Does not implicitly {@link asset.AssetFlow.verify|verify} messages.
             * @param message AssetFlow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: asset.IAssetFlow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AssetFlow message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AssetFlow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): asset.AssetFlow;

            /**
             * Decodes an AssetFlow message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AssetFlow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): asset.AssetFlow;

            /**
             * Verifies an AssetFlow message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AssetFlow message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AssetFlow
             */
            public static fromObject(object: { [k: string]: any }): asset.AssetFlow;

            /**
             * Creates a plain object from an AssetFlow message. Also converts values to other types if specified.
             * @param message AssetFlow
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: asset.AssetFlow, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AssetFlow to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AssetFlowPush. */
        interface IAssetFlowPush {

            /** AssetFlowPush flow */
            flow?: (asset.IAssetFlow[]|null);
        }

        /** Represents an AssetFlowPush. */
        class AssetFlowPush implements IAssetFlowPush {

            /**
             * Constructs a new AssetFlowPush.
             * @param [properties] Properties to set
             */
            constructor(properties?: asset.IAssetFlowPush);

            /** AssetFlowPush flow. */
            public flow: asset.IAssetFlow[];

            /**
             * Creates a new AssetFlowPush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AssetFlowPush instance
             */
            public static create(properties?: asset.IAssetFlowPush): asset.AssetFlowPush;

            /**
             * Encodes the specified AssetFlowPush message. Does not implicitly {@link asset.AssetFlowPush.verify|verify} messages.
             * @param message AssetFlowPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: asset.IAssetFlowPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AssetFlowPush message, length delimited. Does not implicitly {@link asset.AssetFlowPush.verify|verify} messages.
             * @param message AssetFlowPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: asset.IAssetFlowPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AssetFlowPush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AssetFlowPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): asset.AssetFlowPush;

            /**
             * Decodes an AssetFlowPush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AssetFlowPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): asset.AssetFlowPush;

            /**
             * Verifies an AssetFlowPush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AssetFlowPush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AssetFlowPush
             */
            public static fromObject(object: { [k: string]: any }): asset.AssetFlowPush;

            /**
             * Creates a plain object from an AssetFlowPush message. Also converts values to other types if specified.
             * @param message AssetFlowPush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: asset.AssetFlowPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AssetFlowPush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AssetAddAccountReq. */
        interface IAssetAddAccountReq {

            /** AssetAddAccountReq uid */
            uid?: (number|null);

            /** AssetAddAccountReq op */
            op?: (asset.IOparition[]|null);

            /** AssetAddAccountReq trans */
            trans?: (Uint8Array|null);
        }

        /** Represents an AssetAddAccountReq. */
        class AssetAddAccountReq implements IAssetAddAccountReq {

            /**
             * Constructs a new AssetAddAccountReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: asset.IAssetAddAccountReq);

            /** AssetAddAccountReq uid. */
            public uid: number;

            /** AssetAddAccountReq op. */
            public op: asset.IOparition[];

            /** AssetAddAccountReq trans. */
            public trans: Uint8Array;

            /**
             * Creates a new AssetAddAccountReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AssetAddAccountReq instance
             */
            public static create(properties?: asset.IAssetAddAccountReq): asset.AssetAddAccountReq;

            /**
             * Encodes the specified AssetAddAccountReq message. Does not implicitly {@link asset.AssetAddAccountReq.verify|verify} messages.
             * @param message AssetAddAccountReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: asset.IAssetAddAccountReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AssetAddAccountReq message, length delimited. Does not implicitly {@link asset.AssetAddAccountReq.verify|verify} messages.
             * @param message AssetAddAccountReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: asset.IAssetAddAccountReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AssetAddAccountReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AssetAddAccountReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): asset.AssetAddAccountReq;

            /**
             * Decodes an AssetAddAccountReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AssetAddAccountReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): asset.AssetAddAccountReq;

            /**
             * Verifies an AssetAddAccountReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AssetAddAccountReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AssetAddAccountReq
             */
            public static fromObject(object: { [k: string]: any }): asset.AssetAddAccountReq;

            /**
             * Creates a plain object from an AssetAddAccountReq message. Also converts values to other types if specified.
             * @param message AssetAddAccountReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: asset.AssetAddAccountReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AssetAddAccountReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AssetAddAccountResp. */
        interface IAssetAddAccountResp {

            /** AssetAddAccountResp uid */
            uid?: (number|null);

            /** AssetAddAccountResp result */
            result?: (number|null);

            /** AssetAddAccountResp fieldval */
            fieldval?: (asset.IFieldValue[]|null);

            /** AssetAddAccountResp trans */
            trans?: (Uint8Array|null);
        }

        /** Represents an AssetAddAccountResp. */
        class AssetAddAccountResp implements IAssetAddAccountResp {

            /**
             * Constructs a new AssetAddAccountResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: asset.IAssetAddAccountResp);

            /** AssetAddAccountResp uid. */
            public uid: number;

            /** AssetAddAccountResp result. */
            public result: number;

            /** AssetAddAccountResp fieldval. */
            public fieldval: asset.IFieldValue[];

            /** AssetAddAccountResp trans. */
            public trans: Uint8Array;

            /**
             * Creates a new AssetAddAccountResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AssetAddAccountResp instance
             */
            public static create(properties?: asset.IAssetAddAccountResp): asset.AssetAddAccountResp;

            /**
             * Encodes the specified AssetAddAccountResp message. Does not implicitly {@link asset.AssetAddAccountResp.verify|verify} messages.
             * @param message AssetAddAccountResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: asset.IAssetAddAccountResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AssetAddAccountResp message, length delimited. Does not implicitly {@link asset.AssetAddAccountResp.verify|verify} messages.
             * @param message AssetAddAccountResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: asset.IAssetAddAccountResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AssetAddAccountResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AssetAddAccountResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): asset.AssetAddAccountResp;

            /**
             * Decodes an AssetAddAccountResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AssetAddAccountResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): asset.AssetAddAccountResp;

            /**
             * Verifies an AssetAddAccountResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AssetAddAccountResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AssetAddAccountResp
             */
            public static fromObject(object: { [k: string]: any }): asset.AssetAddAccountResp;

            /**
             * Creates a plain object from an AssetAddAccountResp message. Also converts values to other types if specified.
             * @param message AssetAddAccountResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: asset.AssetAddAccountResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AssetAddAccountResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace agent. */
    namespace agent {

        /** AGENT_CMD enum. */
        enum AGENT_CMD {
            AGENT_CMD_NONE = 0,
            AGENT_CMD_HEART_BEAT = 1600,
            AGENT_CMD_KICK = 1601
        }

        /** Properties of a KickPush. */
        interface IKickPush {

            /** KickPush uid */
            uid?: (number|null);

            /** KickPush result */
            result?: (number|null);
        }

        /** Represents a KickPush. */
        class KickPush implements IKickPush {

            /**
             * Constructs a new KickPush.
             * @param [properties] Properties to set
             */
            constructor(properties?: agent.IKickPush);

            /** KickPush uid. */
            public uid: number;

            /** KickPush result. */
            public result: number;

            /**
             * Creates a new KickPush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KickPush instance
             */
            public static create(properties?: agent.IKickPush): agent.KickPush;

            /**
             * Encodes the specified KickPush message. Does not implicitly {@link agent.KickPush.verify|verify} messages.
             * @param message KickPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: agent.IKickPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KickPush message, length delimited. Does not implicitly {@link agent.KickPush.verify|verify} messages.
             * @param message KickPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: agent.IKickPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KickPush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KickPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): agent.KickPush;

            /**
             * Decodes a KickPush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KickPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): agent.KickPush;

            /**
             * Verifies a KickPush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KickPush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KickPush
             */
            public static fromObject(object: { [k: string]: any }): agent.KickPush;

            /**
             * Creates a plain object from a KickPush message. Also converts values to other types if specified.
             * @param message KickPush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: agent.KickPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KickPush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HeartBeat. */
        interface IHeartBeat {

            /** HeartBeat trans */
            trans?: (number|Long|null);

            /** HeartBeat srvt */
            srvt?: (number|Long|null);
        }

        /** Represents a HeartBeat. */
        class HeartBeat implements IHeartBeat {

            /**
             * Constructs a new HeartBeat.
             * @param [properties] Properties to set
             */
            constructor(properties?: agent.IHeartBeat);

            /** HeartBeat trans. */
            public trans: (number|Long);

            /** HeartBeat srvt. */
            public srvt: (number|Long);

            /**
             * Creates a new HeartBeat instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HeartBeat instance
             */
            public static create(properties?: agent.IHeartBeat): agent.HeartBeat;

            /**
             * Encodes the specified HeartBeat message. Does not implicitly {@link agent.HeartBeat.verify|verify} messages.
             * @param message HeartBeat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: agent.IHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HeartBeat message, length delimited. Does not implicitly {@link agent.HeartBeat.verify|verify} messages.
             * @param message HeartBeat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: agent.IHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HeartBeat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HeartBeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): agent.HeartBeat;

            /**
             * Decodes a HeartBeat message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HeartBeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): agent.HeartBeat;

            /**
             * Verifies a HeartBeat message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HeartBeat message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HeartBeat
             */
            public static fromObject(object: { [k: string]: any }): agent.HeartBeat;

            /**
             * Creates a plain object from a HeartBeat message. Also converts values to other types if specified.
             * @param message HeartBeat
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: agent.HeartBeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HeartBeat to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace AgentBackEnd. */
    namespace AgentBackEnd {

        /** AGENT_BACKEND_INFO_SUB_MSG_ID enum. */
        enum AGENT_BACKEND_INFO_SUB_MSG_ID {
            AGENT_BACKEND_MSG_ID_NULL = 0,
            AGENT_BACKEND_MSG_ID_MIN = 1650,
            AGENT_BACKEND_MSG_ID_REFRESH_CONFIG = 1651,
            AGENT_BACKEND_MSG_ID_REPORT_DATA = 1652,
            AGENT_BACKEND_MSG_ID_SERVER_RETIRE = 1653,
            AGENT_BACKEND_MSG_ID_REPORT_KOL = 1654,
            RANK_MSG_ID_MAX = 1700
        }

        /** SERVER_TYPE enum. */
        enum SERVER_TYPE {
            SERVER_TYPE_NONE = 0,
            SERVER_TYPE_GAME_PLAYER = 1,
            SERVER_TYPE_AGENT = 2,
            SERVER_TYPE_ALLOCSERVER = 3,
            SERVER_TYPE_ONLINE = 4,
            SERVER_TYPE_ROOMSERVER = 5,
            SERVER_TYPE_MASTER = 6,
            SERVER_TYPE_ASSET = 7,
            SERVER_TYPE_DB_UPDATE = 8,
            SERVER_TYPE_USERINFO_CACHE = 9,
            SERVER_TYPE_PHP_AGENT = 10,
            SERVER_TYPE_ACCOUNT = 11,
            SERVER_TYPE_DISPATCH = 12,
            SERVER_TYPE_RANK = 13,
            SERVER_TYPE_SERVICE_MANAGER = 14,
            SERVER_TYPE_BRIDGE_PROXY = 16,
            SERVER_TYPE_ACTIVITY = 18,
            SERVER_TYPE_PHP = 19
        }

        /** OP enum. */
        enum OP {
            OP_NONE = 0,
            OP_UPDATE = 1,
            OP_ADD = 2,
            OP_DEL = 3
        }

        /** Properties of a ConfigItem. */
        interface IConfigItem {

            /** ConfigItem configname */
            configname?: (string|null);

            /** ConfigItem operation */
            operation?: (AgentBackEnd.OP|null);

            /** ConfigItem config */
            config?: (string|null);

            /** ConfigItem sqlpath */
            sqlpath?: (string|null);

            /** ConfigItem redispath */
            redispath?: (string|null);
        }

        /** Represents a ConfigItem. */
        class ConfigItem implements IConfigItem {

            /**
             * Constructs a new ConfigItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: AgentBackEnd.IConfigItem);

            /** ConfigItem configname. */
            public configname: string;

            /** ConfigItem operation. */
            public operation: AgentBackEnd.OP;

            /** ConfigItem config. */
            public config: string;

            /** ConfigItem sqlpath. */
            public sqlpath: string;

            /** ConfigItem redispath. */
            public redispath: string;

            /**
             * Creates a new ConfigItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConfigItem instance
             */
            public static create(properties?: AgentBackEnd.IConfigItem): AgentBackEnd.ConfigItem;

            /**
             * Encodes the specified ConfigItem message. Does not implicitly {@link AgentBackEnd.ConfigItem.verify|verify} messages.
             * @param message ConfigItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AgentBackEnd.IConfigItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConfigItem message, length delimited. Does not implicitly {@link AgentBackEnd.ConfigItem.verify|verify} messages.
             * @param message ConfigItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AgentBackEnd.IConfigItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConfigItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConfigItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AgentBackEnd.ConfigItem;

            /**
             * Decodes a ConfigItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConfigItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AgentBackEnd.ConfigItem;

            /**
             * Verifies a ConfigItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConfigItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConfigItem
             */
            public static fromObject(object: { [k: string]: any }): AgentBackEnd.ConfigItem;

            /**
             * Creates a plain object from a ConfigItem message. Also converts values to other types if specified.
             * @param message ConfigItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AgentBackEnd.ConfigItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConfigItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RefreshConfigNotify. */
        interface IRefreshConfigNotify {

            /** RefreshConfigNotify config */
            config?: (AgentBackEnd.IConfigItem[]|null);
        }

        /** Represents a RefreshConfigNotify. */
        class RefreshConfigNotify implements IRefreshConfigNotify {

            /**
             * Constructs a new RefreshConfigNotify.
             * @param [properties] Properties to set
             */
            constructor(properties?: AgentBackEnd.IRefreshConfigNotify);

            /** RefreshConfigNotify config. */
            public config: AgentBackEnd.IConfigItem[];

            /**
             * Creates a new RefreshConfigNotify instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RefreshConfigNotify instance
             */
            public static create(properties?: AgentBackEnd.IRefreshConfigNotify): AgentBackEnd.RefreshConfigNotify;

            /**
             * Encodes the specified RefreshConfigNotify message. Does not implicitly {@link AgentBackEnd.RefreshConfigNotify.verify|verify} messages.
             * @param message RefreshConfigNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AgentBackEnd.IRefreshConfigNotify, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RefreshConfigNotify message, length delimited. Does not implicitly {@link AgentBackEnd.RefreshConfigNotify.verify|verify} messages.
             * @param message RefreshConfigNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AgentBackEnd.IRefreshConfigNotify, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RefreshConfigNotify message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RefreshConfigNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AgentBackEnd.RefreshConfigNotify;

            /**
             * Decodes a RefreshConfigNotify message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RefreshConfigNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AgentBackEnd.RefreshConfigNotify;

            /**
             * Verifies a RefreshConfigNotify message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RefreshConfigNotify message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RefreshConfigNotify
             */
            public static fromObject(object: { [k: string]: any }): AgentBackEnd.RefreshConfigNotify;

            /**
             * Creates a plain object from a RefreshConfigNotify message. Also converts values to other types if specified.
             * @param message RefreshConfigNotify
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AgentBackEnd.RefreshConfigNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RefreshConfigNotify to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PhpReportUploadReq. */
        interface IPhpReportUploadReq {

            /** PhpReportUploadReq eventType */
            eventType?: (string|null);

            /** PhpReportUploadReq fbid */
            fbid?: (string|null);

            /** PhpReportUploadReq mobile */
            mobile?: (string|null);

            /** PhpReportUploadReq ip */
            ip?: (string|null);

            /** PhpReportUploadReq fbc */
            fbc?: (string|null);

            /** PhpReportUploadReq fbp */
            fbp?: (string|null);

            /** PhpReportUploadReq ua */
            ua?: (string|null);

            /** PhpReportUploadReq amount */
            amount?: (string|null);

            /** PhpReportUploadReq order_id */
            order_id?: (string|null);

            /** PhpReportUploadReq device_id */
            device_id?: (string|null);

            /** PhpReportUploadReq pkg */
            pkg?: (string|null);

            /** PhpReportUploadReq uid */
            uid?: (string|null);

            /** PhpReportUploadReq afid */
            afid?: (string|null);

            /** PhpReportUploadReq renew */
            renew?: (string|null);
        }

        /** Represents a PhpReportUploadReq. */
        class PhpReportUploadReq implements IPhpReportUploadReq {

            /**
             * Constructs a new PhpReportUploadReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: AgentBackEnd.IPhpReportUploadReq);

            /** PhpReportUploadReq eventType. */
            public eventType: string;

            /** PhpReportUploadReq fbid. */
            public fbid: string;

            /** PhpReportUploadReq mobile. */
            public mobile: string;

            /** PhpReportUploadReq ip. */
            public ip: string;

            /** PhpReportUploadReq fbc. */
            public fbc: string;

            /** PhpReportUploadReq fbp. */
            public fbp: string;

            /** PhpReportUploadReq ua. */
            public ua: string;

            /** PhpReportUploadReq amount. */
            public amount: string;

            /** PhpReportUploadReq order_id. */
            public order_id: string;

            /** PhpReportUploadReq device_id. */
            public device_id: string;

            /** PhpReportUploadReq pkg. */
            public pkg: string;

            /** PhpReportUploadReq uid. */
            public uid: string;

            /** PhpReportUploadReq afid. */
            public afid: string;

            /** PhpReportUploadReq renew. */
            public renew: string;

            /**
             * Creates a new PhpReportUploadReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhpReportUploadReq instance
             */
            public static create(properties?: AgentBackEnd.IPhpReportUploadReq): AgentBackEnd.PhpReportUploadReq;

            /**
             * Encodes the specified PhpReportUploadReq message. Does not implicitly {@link AgentBackEnd.PhpReportUploadReq.verify|verify} messages.
             * @param message PhpReportUploadReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AgentBackEnd.IPhpReportUploadReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhpReportUploadReq message, length delimited. Does not implicitly {@link AgentBackEnd.PhpReportUploadReq.verify|verify} messages.
             * @param message PhpReportUploadReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AgentBackEnd.IPhpReportUploadReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhpReportUploadReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhpReportUploadReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AgentBackEnd.PhpReportUploadReq;

            /**
             * Decodes a PhpReportUploadReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhpReportUploadReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AgentBackEnd.PhpReportUploadReq;

            /**
             * Verifies a PhpReportUploadReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhpReportUploadReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhpReportUploadReq
             */
            public static fromObject(object: { [k: string]: any }): AgentBackEnd.PhpReportUploadReq;

            /**
             * Creates a plain object from a PhpReportUploadReq message. Also converts values to other types if specified.
             * @param message PhpReportUploadReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AgentBackEnd.PhpReportUploadReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhpReportUploadReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServerRetireNotify. */
        interface IServerRetireNotify {

            /** ServerRetireNotify status */
            status?: (number|null);

            /** ServerRetireNotify isforce */
            isforce?: (number|null);
        }

        /** Represents a ServerRetireNotify. */
        class ServerRetireNotify implements IServerRetireNotify {

            /**
             * Constructs a new ServerRetireNotify.
             * @param [properties] Properties to set
             */
            constructor(properties?: AgentBackEnd.IServerRetireNotify);

            /** ServerRetireNotify status. */
            public status: number;

            /** ServerRetireNotify isforce. */
            public isforce: number;

            /**
             * Creates a new ServerRetireNotify instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServerRetireNotify instance
             */
            public static create(properties?: AgentBackEnd.IServerRetireNotify): AgentBackEnd.ServerRetireNotify;

            /**
             * Encodes the specified ServerRetireNotify message. Does not implicitly {@link AgentBackEnd.ServerRetireNotify.verify|verify} messages.
             * @param message ServerRetireNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AgentBackEnd.IServerRetireNotify, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServerRetireNotify message, length delimited. Does not implicitly {@link AgentBackEnd.ServerRetireNotify.verify|verify} messages.
             * @param message ServerRetireNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AgentBackEnd.IServerRetireNotify, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServerRetireNotify message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServerRetireNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AgentBackEnd.ServerRetireNotify;

            /**
             * Decodes a ServerRetireNotify message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServerRetireNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AgentBackEnd.ServerRetireNotify;

            /**
             * Verifies a ServerRetireNotify message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServerRetireNotify message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServerRetireNotify
             */
            public static fromObject(object: { [k: string]: any }): AgentBackEnd.ServerRetireNotify;

            /**
             * Creates a plain object from a ServerRetireNotify message. Also converts values to other types if specified.
             * @param message ServerRetireNotify
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AgentBackEnd.ServerRetireNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServerRetireNotify to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PhpReportKolReq. */
        interface IPhpReportKolReq {

            /** PhpReportKolReq eventType */
            eventType?: (string|null);

            /** PhpReportKolReq pkg */
            pkg?: (string|null);

            /** PhpReportKolReq channel */
            channel?: (string|null);

            /** PhpReportKolReq aid */
            aid?: (string|null);

            /** PhpReportKolReq idfa */
            idfa?: (string|null);

            /** PhpReportKolReq gaid */
            gaid?: (string|null);

            /** PhpReportKolReq uid */
            uid?: (string|null);

            /** PhpReportKolReq device_id */
            device_id?: (string|null);

            /** PhpReportKolReq amount */
            amount?: (string|null);

            /** PhpReportKolReq total_amount */
            total_amount?: (string|null);

            /** PhpReportKolReq order_id */
            order_id?: (string|null);
        }

        /** Represents a PhpReportKolReq. */
        class PhpReportKolReq implements IPhpReportKolReq {

            /**
             * Constructs a new PhpReportKolReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: AgentBackEnd.IPhpReportKolReq);

            /** PhpReportKolReq eventType. */
            public eventType: string;

            /** PhpReportKolReq pkg. */
            public pkg: string;

            /** PhpReportKolReq channel. */
            public channel: string;

            /** PhpReportKolReq aid. */
            public aid: string;

            /** PhpReportKolReq idfa. */
            public idfa: string;

            /** PhpReportKolReq gaid. */
            public gaid: string;

            /** PhpReportKolReq uid. */
            public uid: string;

            /** PhpReportKolReq device_id. */
            public device_id: string;

            /** PhpReportKolReq amount. */
            public amount: string;

            /** PhpReportKolReq total_amount. */
            public total_amount: string;

            /** PhpReportKolReq order_id. */
            public order_id: string;

            /**
             * Creates a new PhpReportKolReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhpReportKolReq instance
             */
            public static create(properties?: AgentBackEnd.IPhpReportKolReq): AgentBackEnd.PhpReportKolReq;

            /**
             * Encodes the specified PhpReportKolReq message. Does not implicitly {@link AgentBackEnd.PhpReportKolReq.verify|verify} messages.
             * @param message PhpReportKolReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AgentBackEnd.IPhpReportKolReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhpReportKolReq message, length delimited. Does not implicitly {@link AgentBackEnd.PhpReportKolReq.verify|verify} messages.
             * @param message PhpReportKolReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AgentBackEnd.IPhpReportKolReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhpReportKolReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhpReportKolReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AgentBackEnd.PhpReportKolReq;

            /**
             * Decodes a PhpReportKolReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhpReportKolReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AgentBackEnd.PhpReportKolReq;

            /**
             * Verifies a PhpReportKolReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhpReportKolReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhpReportKolReq
             */
            public static fromObject(object: { [k: string]: any }): AgentBackEnd.PhpReportKolReq;

            /**
             * Creates a plain object from a PhpReportKolReq message. Also converts values to other types if specified.
             * @param message PhpReportKolReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AgentBackEnd.PhpReportKolReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhpReportKolReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace account_proto. */
    namespace account_proto {

        /** LOGIN_SUB_MSG_ID enum. */
        enum LOGIN_SUB_MSG_ID {
            ACCOUNT_CMD_LOGIN_NONE = 0,
            ACCOUNT_CMD_VERIFY_LOGIN_TOKEN_REQ = 1712,
            ACCOUNT_CMD_VERIFY_LOGIN_TOKEN_RESP = 1713
        }

        /** Properties of a VerifyLoginTokenReq. */
        interface IVerifyLoginTokenReq {

            /** VerifyLoginTokenReq token */
            token?: (string|null);

            /** VerifyLoginTokenReq trans */
            trans?: (Uint8Array|null);
        }

        /** Represents a VerifyLoginTokenReq. */
        class VerifyLoginTokenReq implements IVerifyLoginTokenReq {

            /**
             * Constructs a new VerifyLoginTokenReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: account_proto.IVerifyLoginTokenReq);

            /** VerifyLoginTokenReq token. */
            public token: string;

            /** VerifyLoginTokenReq trans. */
            public trans: Uint8Array;

            /**
             * Creates a new VerifyLoginTokenReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VerifyLoginTokenReq instance
             */
            public static create(properties?: account_proto.IVerifyLoginTokenReq): account_proto.VerifyLoginTokenReq;

            /**
             * Encodes the specified VerifyLoginTokenReq message. Does not implicitly {@link account_proto.VerifyLoginTokenReq.verify|verify} messages.
             * @param message VerifyLoginTokenReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: account_proto.IVerifyLoginTokenReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VerifyLoginTokenReq message, length delimited. Does not implicitly {@link account_proto.VerifyLoginTokenReq.verify|verify} messages.
             * @param message VerifyLoginTokenReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: account_proto.IVerifyLoginTokenReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VerifyLoginTokenReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VerifyLoginTokenReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account_proto.VerifyLoginTokenReq;

            /**
             * Decodes a VerifyLoginTokenReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VerifyLoginTokenReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account_proto.VerifyLoginTokenReq;

            /**
             * Verifies a VerifyLoginTokenReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VerifyLoginTokenReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VerifyLoginTokenReq
             */
            public static fromObject(object: { [k: string]: any }): account_proto.VerifyLoginTokenReq;

            /**
             * Creates a plain object from a VerifyLoginTokenReq message. Also converts values to other types if specified.
             * @param message VerifyLoginTokenReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: account_proto.VerifyLoginTokenReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VerifyLoginTokenReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an InGameInfo. */
        interface IInGameInfo {

            /** InGameInfo game_id */
            game_id?: (number|null);

            /** InGameInfo game_srvtype */
            game_srvtype?: (number|null);

            /** InGameInfo game_svid */
            game_svid?: (number|null);

            /** InGameInfo game_tid */
            game_tid?: (number|null);
        }

        /** Represents an InGameInfo. */
        class InGameInfo implements IInGameInfo {

            /**
             * Constructs a new InGameInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: account_proto.IInGameInfo);

            /** InGameInfo game_id. */
            public game_id: number;

            /** InGameInfo game_srvtype. */
            public game_srvtype: number;

            /** InGameInfo game_svid. */
            public game_svid: number;

            /** InGameInfo game_tid. */
            public game_tid: number;

            /**
             * Creates a new InGameInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InGameInfo instance
             */
            public static create(properties?: account_proto.IInGameInfo): account_proto.InGameInfo;

            /**
             * Encodes the specified InGameInfo message. Does not implicitly {@link account_proto.InGameInfo.verify|verify} messages.
             * @param message InGameInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: account_proto.IInGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InGameInfo message, length delimited. Does not implicitly {@link account_proto.InGameInfo.verify|verify} messages.
             * @param message InGameInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: account_proto.IInGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InGameInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InGameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account_proto.InGameInfo;

            /**
             * Decodes an InGameInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InGameInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account_proto.InGameInfo;

            /**
             * Verifies an InGameInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InGameInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InGameInfo
             */
            public static fromObject(object: { [k: string]: any }): account_proto.InGameInfo;

            /**
             * Creates a plain object from an InGameInfo message. Also converts values to other types if specified.
             * @param message InGameInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: account_proto.InGameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InGameInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a VerifyLoginTokenResp. */
        interface IVerifyLoginTokenResp {

            /** VerifyLoginTokenResp result */
            result?: (number|null);

            /** VerifyLoginTokenResp uid */
            uid?: (number|null);

            /** VerifyLoginTokenResp agency */
            agency?: (string|null);

            /** VerifyLoginTokenResp agency_id */
            agency_id?: (number|null);

            /** VerifyLoginTokenResp username */
            username?: (string|null);

            /** VerifyLoginTokenResp token */
            token?: (string|null);

            /** VerifyLoginTokenResp balance */
            balance?: (number|Long|null);

            /** VerifyLoginTokenResp game */
            game?: (number|null);

            /** VerifyLoginTokenResp hall_url */
            hall_url?: (string|null);

            /** VerifyLoginTokenResp platform */
            platform?: (string|null);

            /** VerifyLoginTokenResp gameinfo */
            gameinfo?: (string|null);

            /** VerifyLoginTokenResp currency */
            currency?: (string|null);

            /** VerifyLoginTokenResp temp_uin */
            temp_uin?: (number|null);

            /** VerifyLoginTokenResp ingame_info */
            ingame_info?: (account_proto.IInGameInfo|null);

            /** VerifyLoginTokenResp trans */
            trans?: (Uint8Array|null);

            /** VerifyLoginTokenResp currency_unit_multi */
            currency_unit_multi?: (number|Long|null);

            /** VerifyLoginTokenResp currency_label */
            currency_label?: (string|null);
        }

        /** Represents a VerifyLoginTokenResp. */
        class VerifyLoginTokenResp implements IVerifyLoginTokenResp {

            /**
             * Constructs a new VerifyLoginTokenResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: account_proto.IVerifyLoginTokenResp);

            /** VerifyLoginTokenResp result. */
            public result: number;

            /** VerifyLoginTokenResp uid. */
            public uid: number;

            /** VerifyLoginTokenResp agency. */
            public agency: string;

            /** VerifyLoginTokenResp agency_id. */
            public agency_id: number;

            /** VerifyLoginTokenResp username. */
            public username: string;

            /** VerifyLoginTokenResp token. */
            public token: string;

            /** VerifyLoginTokenResp balance. */
            public balance: (number|Long);

            /** VerifyLoginTokenResp game. */
            public game: number;

            /** VerifyLoginTokenResp hall_url. */
            public hall_url: string;

            /** VerifyLoginTokenResp platform. */
            public platform: string;

            /** VerifyLoginTokenResp gameinfo. */
            public gameinfo: string;

            /** VerifyLoginTokenResp currency. */
            public currency: string;

            /** VerifyLoginTokenResp temp_uin. */
            public temp_uin: number;

            /** VerifyLoginTokenResp ingame_info. */
            public ingame_info?: (account_proto.IInGameInfo|null);

            /** VerifyLoginTokenResp trans. */
            public trans: Uint8Array;

            /** VerifyLoginTokenResp currency_unit_multi. */
            public currency_unit_multi: (number|Long);

            /** VerifyLoginTokenResp currency_label. */
            public currency_label: string;

            /**
             * Creates a new VerifyLoginTokenResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VerifyLoginTokenResp instance
             */
            public static create(properties?: account_proto.IVerifyLoginTokenResp): account_proto.VerifyLoginTokenResp;

            /**
             * Encodes the specified VerifyLoginTokenResp message. Does not implicitly {@link account_proto.VerifyLoginTokenResp.verify|verify} messages.
             * @param message VerifyLoginTokenResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: account_proto.IVerifyLoginTokenResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VerifyLoginTokenResp message, length delimited. Does not implicitly {@link account_proto.VerifyLoginTokenResp.verify|verify} messages.
             * @param message VerifyLoginTokenResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: account_proto.IVerifyLoginTokenResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VerifyLoginTokenResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VerifyLoginTokenResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account_proto.VerifyLoginTokenResp;

            /**
             * Decodes a VerifyLoginTokenResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VerifyLoginTokenResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account_proto.VerifyLoginTokenResp;

            /**
             * Verifies a VerifyLoginTokenResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VerifyLoginTokenResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VerifyLoginTokenResp
             */
            public static fromObject(object: { [k: string]: any }): account_proto.VerifyLoginTokenResp;

            /**
             * Creates a plain object from a VerifyLoginTokenResp message. Also converts values to other types if specified.
             * @param message VerifyLoginTokenResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: account_proto.VerifyLoginTokenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VerifyLoginTokenResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace gamerecord. */
    namespace gamerecord {

        /** ASSET_CMD enum. */
        enum ASSET_CMD {
            GAMERECORD_CMD_NONE = 0,
            GAMERECORD_CMD_GET_RECORD_REQ = 2850,
            GAMERECORD_CMD_GET_RECORD_RESP = 2851,
            GAMERECORD_CMD_RECORD_PUSH = 2852,
            GAMERECORD_CMD_RECORD_CACHE_PUSH = 2853,
            GAMERECORD_CMD_GET_DETAIL_REQ = 2854,
            GAMERECORD_CMD_GET_DETAIL_RESP = 2855
        }

        /** BET_ACT enum. */
        enum BET_ACT {
            BET_ACT_NONE = 0,
            BET_ACT_NORMAL_BET = 1
        }

        /** WIN_ACT enum. */
        enum WIN_ACT {
            WIN_ACT_NONE = 0,
            WIN_ACT_NORMAL_WIN = 1,
            WIN_ACT_JACKPOT = 2,
            WIN_ACT_DEALER = 3
        }

        /** Properties of a GameRecordReq. */
        interface IGameRecordReq {

            /** GameRecordReq uid */
            uid?: (number|null);

            /** GameRecordReq game */
            game?: (number|null);

            /** GameRecordReq pos */
            pos?: (number|Long|null);

            /** GameRecordReq size */
            size?: (number|null);

            /** GameRecordReq trans */
            trans?: (Uint8Array|null);
        }

        /** Represents a GameRecordReq. */
        class GameRecordReq implements IGameRecordReq {

            /**
             * Constructs a new GameRecordReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamerecord.IGameRecordReq);

            /** GameRecordReq uid. */
            public uid: number;

            /** GameRecordReq game. */
            public game: number;

            /** GameRecordReq pos. */
            public pos: (number|Long);

            /** GameRecordReq size. */
            public size: number;

            /** GameRecordReq trans. */
            public trans: Uint8Array;

            /**
             * Creates a new GameRecordReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameRecordReq instance
             */
            public static create(properties?: gamerecord.IGameRecordReq): gamerecord.GameRecordReq;

            /**
             * Encodes the specified GameRecordReq message. Does not implicitly {@link gamerecord.GameRecordReq.verify|verify} messages.
             * @param message GameRecordReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamerecord.IGameRecordReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameRecordReq message, length delimited. Does not implicitly {@link gamerecord.GameRecordReq.verify|verify} messages.
             * @param message GameRecordReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamerecord.IGameRecordReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameRecordReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameRecordReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamerecord.GameRecordReq;

            /**
             * Decodes a GameRecordReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameRecordReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamerecord.GameRecordReq;

            /**
             * Verifies a GameRecordReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameRecordReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameRecordReq
             */
            public static fromObject(object: { [k: string]: any }): gamerecord.GameRecordReq;

            /**
             * Creates a plain object from a GameRecordReq message. Also converts values to other types if specified.
             * @param message GameRecordReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamerecord.GameRecordReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameRecordReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GameRecordResp. */
        interface IGameRecordResp {

            /** GameRecordResp uid */
            uid?: (number|null);

            /** GameRecordResp game */
            game?: (number|null);

            /** GameRecordResp result */
            result?: (number|null);

            /** GameRecordResp timezoneinmin */
            timezoneinmin?: (number|null);

            /** GameRecordResp endflag */
            endflag?: (number|null);

            /** GameRecordResp list */
            list?: (gamerecord.GameRecordResp.IGameRecordItem[]|null);

            /** GameRecordResp daylist */
            daylist?: (gamerecord.GameRecordResp.IDayAmountItem[]|null);

            /** GameRecordResp totalsize */
            totalsize?: (number|null);

            /** GameRecordResp trans */
            trans?: (Uint8Array|null);
        }

        /** Represents a GameRecordResp. */
        class GameRecordResp implements IGameRecordResp {

            /**
             * Constructs a new GameRecordResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamerecord.IGameRecordResp);

            /** GameRecordResp uid. */
            public uid: number;

            /** GameRecordResp game. */
            public game: number;

            /** GameRecordResp result. */
            public result: number;

            /** GameRecordResp timezoneinmin. */
            public timezoneinmin: number;

            /** GameRecordResp endflag. */
            public endflag: number;

            /** GameRecordResp list. */
            public list: gamerecord.GameRecordResp.IGameRecordItem[];

            /** GameRecordResp daylist. */
            public daylist: gamerecord.GameRecordResp.IDayAmountItem[];

            /** GameRecordResp totalsize. */
            public totalsize: number;

            /** GameRecordResp trans. */
            public trans: Uint8Array;

            /**
             * Creates a new GameRecordResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameRecordResp instance
             */
            public static create(properties?: gamerecord.IGameRecordResp): gamerecord.GameRecordResp;

            /**
             * Encodes the specified GameRecordResp message. Does not implicitly {@link gamerecord.GameRecordResp.verify|verify} messages.
             * @param message GameRecordResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamerecord.IGameRecordResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameRecordResp message, length delimited. Does not implicitly {@link gamerecord.GameRecordResp.verify|verify} messages.
             * @param message GameRecordResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamerecord.IGameRecordResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameRecordResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameRecordResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamerecord.GameRecordResp;

            /**
             * Decodes a GameRecordResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameRecordResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamerecord.GameRecordResp;

            /**
             * Verifies a GameRecordResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameRecordResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameRecordResp
             */
            public static fromObject(object: { [k: string]: any }): gamerecord.GameRecordResp;

            /**
             * Creates a plain object from a GameRecordResp message. Also converts values to other types if specified.
             * @param message GameRecordResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamerecord.GameRecordResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameRecordResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GameRecordResp {

            /** Properties of a GameRecordItem. */
            interface IGameRecordItem {

                /** GameRecordItem roundid */
                roundid?: (string|null);

                /** GameRecordItem bet */
                bet?: (number|Long|null);

                /** GameRecordItem betact */
                betact?: (gamerecord.BET_ACT|null);

                /** GameRecordItem win */
                win?: (number|Long|null);

                /** GameRecordItem winact */
                winact?: (gamerecord.WIN_ACT|null);

                /** GameRecordItem timestamp */
                timestamp?: (number|Long|null);

                /** GameRecordItem firstofdayflag */
                firstofdayflag?: (number|null);

                /** GameRecordItem detail */
                detail?: (Uint8Array|null);

                /** GameRecordItem id */
                id?: (number|Long|null);
            }

            /** Represents a GameRecordItem. */
            class GameRecordItem implements IGameRecordItem {

                /**
                 * Constructs a new GameRecordItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: gamerecord.GameRecordResp.IGameRecordItem);

                /** GameRecordItem roundid. */
                public roundid: string;

                /** GameRecordItem bet. */
                public bet: (number|Long);

                /** GameRecordItem betact. */
                public betact: gamerecord.BET_ACT;

                /** GameRecordItem win. */
                public win: (number|Long);

                /** GameRecordItem winact. */
                public winact: gamerecord.WIN_ACT;

                /** GameRecordItem timestamp. */
                public timestamp: (number|Long);

                /** GameRecordItem firstofdayflag. */
                public firstofdayflag: number;

                /** GameRecordItem detail. */
                public detail: Uint8Array;

                /** GameRecordItem id. */
                public id: (number|Long);

                /**
                 * Creates a new GameRecordItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GameRecordItem instance
                 */
                public static create(properties?: gamerecord.GameRecordResp.IGameRecordItem): gamerecord.GameRecordResp.GameRecordItem;

                /**
                 * Encodes the specified GameRecordItem message. Does not implicitly {@link gamerecord.GameRecordResp.GameRecordItem.verify|verify} messages.
                 * @param message GameRecordItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: gamerecord.GameRecordResp.IGameRecordItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GameRecordItem message, length delimited. Does not implicitly {@link gamerecord.GameRecordResp.GameRecordItem.verify|verify} messages.
                 * @param message GameRecordItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: gamerecord.GameRecordResp.IGameRecordItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GameRecordItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GameRecordItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamerecord.GameRecordResp.GameRecordItem;

                /**
                 * Decodes a GameRecordItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GameRecordItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamerecord.GameRecordResp.GameRecordItem;

                /**
                 * Verifies a GameRecordItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GameRecordItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GameRecordItem
                 */
                public static fromObject(object: { [k: string]: any }): gamerecord.GameRecordResp.GameRecordItem;

                /**
                 * Creates a plain object from a GameRecordItem message. Also converts values to other types if specified.
                 * @param message GameRecordItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: gamerecord.GameRecordResp.GameRecordItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GameRecordItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DayAmountItem. */
            interface IDayAmountItem {

                /** DayAmountItem year */
                year?: (number|null);

                /** DayAmountItem month */
                month?: (number|null);

                /** DayAmountItem day */
                day?: (number|null);

                /** DayAmountItem betamount */
                betamount?: (number|Long|null);

                /** DayAmountItem winamount */
                winamount?: (number|Long|null);
            }

            /** Represents a DayAmountItem. */
            class DayAmountItem implements IDayAmountItem {

                /**
                 * Constructs a new DayAmountItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: gamerecord.GameRecordResp.IDayAmountItem);

                /** DayAmountItem year. */
                public year: number;

                /** DayAmountItem month. */
                public month: number;

                /** DayAmountItem day. */
                public day: number;

                /** DayAmountItem betamount. */
                public betamount: (number|Long);

                /** DayAmountItem winamount. */
                public winamount: (number|Long);

                /**
                 * Creates a new DayAmountItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DayAmountItem instance
                 */
                public static create(properties?: gamerecord.GameRecordResp.IDayAmountItem): gamerecord.GameRecordResp.DayAmountItem;

                /**
                 * Encodes the specified DayAmountItem message. Does not implicitly {@link gamerecord.GameRecordResp.DayAmountItem.verify|verify} messages.
                 * @param message DayAmountItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: gamerecord.GameRecordResp.IDayAmountItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DayAmountItem message, length delimited. Does not implicitly {@link gamerecord.GameRecordResp.DayAmountItem.verify|verify} messages.
                 * @param message DayAmountItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: gamerecord.GameRecordResp.IDayAmountItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DayAmountItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DayAmountItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamerecord.GameRecordResp.DayAmountItem;

                /**
                 * Decodes a DayAmountItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DayAmountItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamerecord.GameRecordResp.DayAmountItem;

                /**
                 * Verifies a DayAmountItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DayAmountItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DayAmountItem
                 */
                public static fromObject(object: { [k: string]: any }): gamerecord.GameRecordResp.DayAmountItem;

                /**
                 * Creates a plain object from a DayAmountItem message. Also converts values to other types if specified.
                 * @param message DayAmountItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: gamerecord.GameRecordResp.DayAmountItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DayAmountItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GameRecordDetailReq. */
        interface IGameRecordDetailReq {

            /** GameRecordDetailReq uid */
            uid?: (number|null);

            /** GameRecordDetailReq game */
            game?: (number|null);

            /** GameRecordDetailReq id */
            id?: (number|Long|null);
        }

        /** Represents a GameRecordDetailReq. */
        class GameRecordDetailReq implements IGameRecordDetailReq {

            /**
             * Constructs a new GameRecordDetailReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamerecord.IGameRecordDetailReq);

            /** GameRecordDetailReq uid. */
            public uid: number;

            /** GameRecordDetailReq game. */
            public game: number;

            /** GameRecordDetailReq id. */
            public id: (number|Long);

            /**
             * Creates a new GameRecordDetailReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameRecordDetailReq instance
             */
            public static create(properties?: gamerecord.IGameRecordDetailReq): gamerecord.GameRecordDetailReq;

            /**
             * Encodes the specified GameRecordDetailReq message. Does not implicitly {@link gamerecord.GameRecordDetailReq.verify|verify} messages.
             * @param message GameRecordDetailReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamerecord.IGameRecordDetailReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameRecordDetailReq message, length delimited. Does not implicitly {@link gamerecord.GameRecordDetailReq.verify|verify} messages.
             * @param message GameRecordDetailReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamerecord.IGameRecordDetailReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameRecordDetailReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameRecordDetailReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamerecord.GameRecordDetailReq;

            /**
             * Decodes a GameRecordDetailReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameRecordDetailReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamerecord.GameRecordDetailReq;

            /**
             * Verifies a GameRecordDetailReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameRecordDetailReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameRecordDetailReq
             */
            public static fromObject(object: { [k: string]: any }): gamerecord.GameRecordDetailReq;

            /**
             * Creates a plain object from a GameRecordDetailReq message. Also converts values to other types if specified.
             * @param message GameRecordDetailReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamerecord.GameRecordDetailReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameRecordDetailReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GameRecordDetailResp. */
        interface IGameRecordDetailResp {

            /** GameRecordDetailResp uid */
            uid?: (number|null);

            /** GameRecordDetailResp game */
            game?: (number|null);

            /** GameRecordDetailResp id */
            id?: (number|Long|null);

            /** GameRecordDetailResp result */
            result?: (number|null);

            /** GameRecordDetailResp detail */
            detail?: (Uint8Array|null);
        }

        /** Represents a GameRecordDetailResp. */
        class GameRecordDetailResp implements IGameRecordDetailResp {

            /**
             * Constructs a new GameRecordDetailResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamerecord.IGameRecordDetailResp);

            /** GameRecordDetailResp uid. */
            public uid: number;

            /** GameRecordDetailResp game. */
            public game: number;

            /** GameRecordDetailResp id. */
            public id: (number|Long);

            /** GameRecordDetailResp result. */
            public result: number;

            /** GameRecordDetailResp detail. */
            public detail: Uint8Array;

            /**
             * Creates a new GameRecordDetailResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameRecordDetailResp instance
             */
            public static create(properties?: gamerecord.IGameRecordDetailResp): gamerecord.GameRecordDetailResp;

            /**
             * Encodes the specified GameRecordDetailResp message. Does not implicitly {@link gamerecord.GameRecordDetailResp.verify|verify} messages.
             * @param message GameRecordDetailResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamerecord.IGameRecordDetailResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameRecordDetailResp message, length delimited. Does not implicitly {@link gamerecord.GameRecordDetailResp.verify|verify} messages.
             * @param message GameRecordDetailResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamerecord.IGameRecordDetailResp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameRecordDetailResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameRecordDetailResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamerecord.GameRecordDetailResp;

            /**
             * Decodes a GameRecordDetailResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameRecordDetailResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamerecord.GameRecordDetailResp;

            /**
             * Verifies a GameRecordDetailResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameRecordDetailResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameRecordDetailResp
             */
            public static fromObject(object: { [k: string]: any }): gamerecord.GameRecordDetailResp;

            /**
             * Creates a plain object from a GameRecordDetailResp message. Also converts values to other types if specified.
             * @param message GameRecordDetailResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamerecord.GameRecordDetailResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameRecordDetailResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GameRecordData. */
        interface IGameRecordData {

            /** GameRecordData uid */
            uid?: (number|null);

            /** GameRecordData game */
            game?: (number|null);

            /** GameRecordData roundid */
            roundid?: (string|null);

            /** GameRecordData bet */
            bet?: (number|Long|null);

            /** GameRecordData betact */
            betact?: (gamerecord.BET_ACT|null);

            /** GameRecordData win */
            win?: (number|Long|null);

            /** GameRecordData winact */
            winact?: (gamerecord.WIN_ACT|null);

            /** GameRecordData timestamp */
            timestamp?: (number|Long|null);

            /** GameRecordData detail */
            detail?: (Uint8Array|null);

            /** GameRecordData agencyid */
            agencyid?: (number|null);
        }

        /** Represents a GameRecordData. */
        class GameRecordData implements IGameRecordData {

            /**
             * Constructs a new GameRecordData.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamerecord.IGameRecordData);

            /** GameRecordData uid. */
            public uid: number;

            /** GameRecordData game. */
            public game: number;

            /** GameRecordData roundid. */
            public roundid: string;

            /** GameRecordData bet. */
            public bet: (number|Long);

            /** GameRecordData betact. */
            public betact: gamerecord.BET_ACT;

            /** GameRecordData win. */
            public win: (number|Long);

            /** GameRecordData winact. */
            public winact: gamerecord.WIN_ACT;

            /** GameRecordData timestamp. */
            public timestamp: (number|Long);

            /** GameRecordData detail. */
            public detail: Uint8Array;

            /** GameRecordData agencyid. */
            public agencyid: number;

            /**
             * Creates a new GameRecordData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameRecordData instance
             */
            public static create(properties?: gamerecord.IGameRecordData): gamerecord.GameRecordData;

            /**
             * Encodes the specified GameRecordData message. Does not implicitly {@link gamerecord.GameRecordData.verify|verify} messages.
             * @param message GameRecordData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamerecord.IGameRecordData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameRecordData message, length delimited. Does not implicitly {@link gamerecord.GameRecordData.verify|verify} messages.
             * @param message GameRecordData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamerecord.IGameRecordData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameRecordData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameRecordData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamerecord.GameRecordData;

            /**
             * Decodes a GameRecordData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameRecordData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamerecord.GameRecordData;

            /**
             * Verifies a GameRecordData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameRecordData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameRecordData
             */
            public static fromObject(object: { [k: string]: any }): gamerecord.GameRecordData;

            /**
             * Creates a plain object from a GameRecordData message. Also converts values to other types if specified.
             * @param message GameRecordData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamerecord.GameRecordData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameRecordData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GameRecordPush. */
        interface IGameRecordPush {

            /** GameRecordPush list */
            list?: (gamerecord.IGameRecordData[]|null);
        }

        /** Represents a GameRecordPush. */
        class GameRecordPush implements IGameRecordPush {

            /**
             * Constructs a new GameRecordPush.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamerecord.IGameRecordPush);

            /** GameRecordPush list. */
            public list: gamerecord.IGameRecordData[];

            /**
             * Creates a new GameRecordPush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameRecordPush instance
             */
            public static create(properties?: gamerecord.IGameRecordPush): gamerecord.GameRecordPush;

            /**
             * Encodes the specified GameRecordPush message. Does not implicitly {@link gamerecord.GameRecordPush.verify|verify} messages.
             * @param message GameRecordPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamerecord.IGameRecordPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameRecordPush message, length delimited. Does not implicitly {@link gamerecord.GameRecordPush.verify|verify} messages.
             * @param message GameRecordPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamerecord.IGameRecordPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameRecordPush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameRecordPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamerecord.GameRecordPush;

            /**
             * Decodes a GameRecordPush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameRecordPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamerecord.GameRecordPush;

            /**
             * Verifies a GameRecordPush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameRecordPush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameRecordPush
             */
            public static fromObject(object: { [k: string]: any }): gamerecord.GameRecordPush;

            /**
             * Creates a plain object from a GameRecordPush message. Also converts values to other types if specified.
             * @param message GameRecordPush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamerecord.GameRecordPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameRecordPush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GameRecordDataCache. */
        interface IGameRecordDataCache {

            /** GameRecordDataCache uid */
            uid?: (number|null);

            /** GameRecordDataCache game */
            game?: (number|null);

            /** GameRecordDataCache roundid */
            roundid?: (string|null);

            /** GameRecordDataCache bet */
            bet?: (number|Long|null);

            /** GameRecordDataCache betact */
            betact?: (gamerecord.BET_ACT|null);

            /** GameRecordDataCache win */
            win?: (number|Long|null);

            /** GameRecordDataCache winact */
            winact?: (gamerecord.WIN_ACT|null);

            /** GameRecordDataCache timestamp */
            timestamp?: (number|Long|null);

            /** GameRecordDataCache detail */
            detail?: (Uint8Array|null);

            /** GameRecordDataCache daybetamount */
            daybetamount?: (number|Long|null);

            /** GameRecordDataCache daywinamount */
            daywinamount?: (number|Long|null);

            /** GameRecordDataCache timezoneinmin */
            timezoneinmin?: (number|null);

            /** GameRecordDataCache firstofdayflag */
            firstofdayflag?: (number|null);

            /** GameRecordDataCache recordcount */
            recordcount?: (number|null);

            /** GameRecordDataCache cacheindex */
            cacheindex?: (number|Long|null);
        }

        /** Represents a GameRecordDataCache. */
        class GameRecordDataCache implements IGameRecordDataCache {

            /**
             * Constructs a new GameRecordDataCache.
             * @param [properties] Properties to set
             */
            constructor(properties?: gamerecord.IGameRecordDataCache);

            /** GameRecordDataCache uid. */
            public uid: number;

            /** GameRecordDataCache game. */
            public game: number;

            /** GameRecordDataCache roundid. */
            public roundid: string;

            /** GameRecordDataCache bet. */
            public bet: (number|Long);

            /** GameRecordDataCache betact. */
            public betact: gamerecord.BET_ACT;

            /** GameRecordDataCache win. */
            public win: (number|Long);

            /** GameRecordDataCache winact. */
            public winact: gamerecord.WIN_ACT;

            /** GameRecordDataCache timestamp. */
            public timestamp: (number|Long);

            /** GameRecordDataCache detail. */
            public detail: Uint8Array;

            /** GameRecordDataCache daybetamount. */
            public daybetamount: (number|Long);

            /** GameRecordDataCache daywinamount. */
            public daywinamount: (number|Long);

            /** GameRecordDataCache timezoneinmin. */
            public timezoneinmin: number;

            /** GameRecordDataCache firstofdayflag. */
            public firstofdayflag: number;

            /** GameRecordDataCache recordcount. */
            public recordcount: number;

            /** GameRecordDataCache cacheindex. */
            public cacheindex: (number|Long);

            /**
             * Creates a new GameRecordDataCache instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameRecordDataCache instance
             */
            public static create(properties?: gamerecord.IGameRecordDataCache): gamerecord.GameRecordDataCache;

            /**
             * Encodes the specified GameRecordDataCache message. Does not implicitly {@link gamerecord.GameRecordDataCache.verify|verify} messages.
             * @param message GameRecordDataCache message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gamerecord.IGameRecordDataCache, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameRecordDataCache message, length delimited. Does not implicitly {@link gamerecord.GameRecordDataCache.verify|verify} messages.
             * @param message GameRecordDataCache message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gamerecord.IGameRecordDataCache, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameRecordDataCache message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameRecordDataCache
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamerecord.GameRecordDataCache;

            /**
             * Decodes a GameRecordDataCache message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameRecordDataCache
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamerecord.GameRecordDataCache;

            /**
             * Verifies a GameRecordDataCache message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameRecordDataCache message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameRecordDataCache
             */
            public static fromObject(object: { [k: string]: any }): gamerecord.GameRecordDataCache;

            /**
             * Creates a plain object from a GameRecordDataCache message. Also converts values to other types if specified.
             * @param message GameRecordDataCache
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gamerecord.GameRecordDataCache, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameRecordDataCache to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
