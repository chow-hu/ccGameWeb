/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.client_proto = (function() {

    /**
     * Namespace client_proto.
     * @exports client_proto
     * @namespace
     */
    var client_proto = {};

    /**
     * USER_INFO_SUB_MSG_ID enum.
     * @name client_proto.USER_INFO_SUB_MSG_ID
     * @enum {number}
     * @property {number} UISMI_NULL=0 UISMI_NULL value
     * @property {number} UISMI_USER_MSG_ID_MIN=1300 UISMI_USER_MSG_ID_MIN value
     * @property {number} UISMI_USER_ATTRI_CHANGE_PUSH=1301 UISMI_USER_ATTRI_CHANGE_PUSH value
     * @property {number} UISMI_USER_DATA_CHANGE_PUSH=1302 UISMI_USER_DATA_CHANGE_PUSH value
     * @property {number} UISMI_USERBASIC_GET_INFO_REQ=1303 UISMI_USERBASIC_GET_INFO_REQ value
     * @property {number} UISMI_USERBASIC_GET_INFO_RESP=1304 UISMI_USERBASIC_GET_INFO_RESP value
     * @property {number} UISMI_USER_SET_INFO_REQ=1305 UISMI_USER_SET_INFO_REQ value
     * @property {number} UISMI_USER_SET_INFO_RESP=1306 UISMI_USER_SET_INFO_RESP value
     * @property {number} UISMI_USER_SET_LANG_REQ=1307 UISMI_USER_SET_LANG_REQ value
     * @property {number} UISMI_USER_SET_LANG_RESP=1308 UISMI_USER_SET_LANG_RESP value
     * @property {number} UISMI_PHP_FORBIT_USER_REQ=1309 UISMI_PHP_FORBIT_USER_REQ value
     * @property {number} UISMI_PHP_FORBIT_USER_RESP=1310 UISMI_PHP_FORBIT_USER_RESP value
     * @property {number} UISMI_FORBIT_USER_PUSH=1311 UISMI_FORBIT_USER_PUSH value
     * @property {number} UISMI_USER_VIP_LEVEL_CHANGE=1312 UISMI_USER_VIP_LEVEL_CHANGE value
     * @property {number} UISMI_USER_MSG_ID_MAX=1350 UISMI_USER_MSG_ID_MAX value
     */
    client_proto.USER_INFO_SUB_MSG_ID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UISMI_NULL"] = 0;
        values[valuesById[1300] = "UISMI_USER_MSG_ID_MIN"] = 1300;
        values[valuesById[1301] = "UISMI_USER_ATTRI_CHANGE_PUSH"] = 1301;
        values[valuesById[1302] = "UISMI_USER_DATA_CHANGE_PUSH"] = 1302;
        values[valuesById[1303] = "UISMI_USERBASIC_GET_INFO_REQ"] = 1303;
        values[valuesById[1304] = "UISMI_USERBASIC_GET_INFO_RESP"] = 1304;
        values[valuesById[1305] = "UISMI_USER_SET_INFO_REQ"] = 1305;
        values[valuesById[1306] = "UISMI_USER_SET_INFO_RESP"] = 1306;
        values[valuesById[1307] = "UISMI_USER_SET_LANG_REQ"] = 1307;
        values[valuesById[1308] = "UISMI_USER_SET_LANG_RESP"] = 1308;
        values[valuesById[1309] = "UISMI_PHP_FORBIT_USER_REQ"] = 1309;
        values[valuesById[1310] = "UISMI_PHP_FORBIT_USER_RESP"] = 1310;
        values[valuesById[1311] = "UISMI_FORBIT_USER_PUSH"] = 1311;
        values[valuesById[1312] = "UISMI_USER_VIP_LEVEL_CHANGE"] = 1312;
        values[valuesById[1350] = "UISMI_USER_MSG_ID_MAX"] = 1350;
        return values;
    })();

    client_proto.SetUserInfoReq = (function() {

        /**
         * Properties of a SetUserInfoReq.
         * @memberof client_proto
         * @interface ISetUserInfoReq
         * @property {string|null} [user_name] SetUserInfoReq user_name
         * @property {string|null} [user_avatar] SetUserInfoReq user_avatar
         * @property {string|null} [user_gender] SetUserInfoReq user_gender
         * @property {string|null} [telephone] SetUserInfoReq telephone
         * @property {string|null} [email] SetUserInfoReq email
         */

        /**
         * Constructs a new SetUserInfoReq.
         * @memberof client_proto
         * @classdesc Represents a SetUserInfoReq.
         * @implements ISetUserInfoReq
         * @constructor
         * @param {client_proto.ISetUserInfoReq=} [properties] Properties to set
         */
        function SetUserInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetUserInfoReq user_name.
         * @member {string} user_name
         * @memberof client_proto.SetUserInfoReq
         * @instance
         */
        SetUserInfoReq.prototype.user_name = "";

        /**
         * SetUserInfoReq user_avatar.
         * @member {string} user_avatar
         * @memberof client_proto.SetUserInfoReq
         * @instance
         */
        SetUserInfoReq.prototype.user_avatar = "";

        /**
         * SetUserInfoReq user_gender.
         * @member {string} user_gender
         * @memberof client_proto.SetUserInfoReq
         * @instance
         */
        SetUserInfoReq.prototype.user_gender = "";

        /**
         * SetUserInfoReq telephone.
         * @member {string} telephone
         * @memberof client_proto.SetUserInfoReq
         * @instance
         */
        SetUserInfoReq.prototype.telephone = "";

        /**
         * SetUserInfoReq email.
         * @member {string} email
         * @memberof client_proto.SetUserInfoReq
         * @instance
         */
        SetUserInfoReq.prototype.email = "";

        /**
         * Creates a new SetUserInfoReq instance using the specified properties.
         * @function create
         * @memberof client_proto.SetUserInfoReq
         * @static
         * @param {client_proto.ISetUserInfoReq=} [properties] Properties to set
         * @returns {client_proto.SetUserInfoReq} SetUserInfoReq instance
         */
        SetUserInfoReq.create = function create(properties) {
            return new SetUserInfoReq(properties);
        };

        /**
         * Encodes the specified SetUserInfoReq message. Does not implicitly {@link client_proto.SetUserInfoReq.verify|verify} messages.
         * @function encode
         * @memberof client_proto.SetUserInfoReq
         * @static
         * @param {client_proto.ISetUserInfoReq} message SetUserInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetUserInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_name != null && Object.hasOwnProperty.call(message, "user_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.user_name);
            if (message.user_avatar != null && Object.hasOwnProperty.call(message, "user_avatar"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.user_avatar);
            if (message.user_gender != null && Object.hasOwnProperty.call(message, "user_gender"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.user_gender);
            if (message.telephone != null && Object.hasOwnProperty.call(message, "telephone"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.telephone);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.email);
            return writer;
        };

        /**
         * Encodes the specified SetUserInfoReq message, length delimited. Does not implicitly {@link client_proto.SetUserInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.SetUserInfoReq
         * @static
         * @param {client_proto.ISetUserInfoReq} message SetUserInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetUserInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetUserInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.SetUserInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.SetUserInfoReq} SetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetUserInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.SetUserInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user_name = reader.string();
                    break;
                case 2:
                    message.user_avatar = reader.string();
                    break;
                case 3:
                    message.user_gender = reader.string();
                    break;
                case 4:
                    message.telephone = reader.string();
                    break;
                case 5:
                    message.email = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetUserInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.SetUserInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.SetUserInfoReq} SetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetUserInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetUserInfoReq message.
         * @function verify
         * @memberof client_proto.SetUserInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetUserInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_name != null && message.hasOwnProperty("user_name"))
                if (!$util.isString(message.user_name))
                    return "user_name: string expected";
            if (message.user_avatar != null && message.hasOwnProperty("user_avatar"))
                if (!$util.isString(message.user_avatar))
                    return "user_avatar: string expected";
            if (message.user_gender != null && message.hasOwnProperty("user_gender"))
                if (!$util.isString(message.user_gender))
                    return "user_gender: string expected";
            if (message.telephone != null && message.hasOwnProperty("telephone"))
                if (!$util.isString(message.telephone))
                    return "telephone: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            return null;
        };

        /**
         * Creates a SetUserInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.SetUserInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.SetUserInfoReq} SetUserInfoReq
         */
        SetUserInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.SetUserInfoReq)
                return object;
            var message = new $root.client_proto.SetUserInfoReq();
            if (object.user_name != null)
                message.user_name = String(object.user_name);
            if (object.user_avatar != null)
                message.user_avatar = String(object.user_avatar);
            if (object.user_gender != null)
                message.user_gender = String(object.user_gender);
            if (object.telephone != null)
                message.telephone = String(object.telephone);
            if (object.email != null)
                message.email = String(object.email);
            return message;
        };

        /**
         * Creates a plain object from a SetUserInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.SetUserInfoReq
         * @static
         * @param {client_proto.SetUserInfoReq} message SetUserInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetUserInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user_name = "";
                object.user_avatar = "";
                object.user_gender = "";
                object.telephone = "";
                object.email = "";
            }
            if (message.user_name != null && message.hasOwnProperty("user_name"))
                object.user_name = message.user_name;
            if (message.user_avatar != null && message.hasOwnProperty("user_avatar"))
                object.user_avatar = message.user_avatar;
            if (message.user_gender != null && message.hasOwnProperty("user_gender"))
                object.user_gender = message.user_gender;
            if (message.telephone != null && message.hasOwnProperty("telephone"))
                object.telephone = message.telephone;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            return object;
        };

        /**
         * Converts this SetUserInfoReq to JSON.
         * @function toJSON
         * @memberof client_proto.SetUserInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetUserInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetUserInfoReq;
    })();

    client_proto.userinfo = (function() {

        /**
         * Properties of a userinfo.
         * @memberof client_proto
         * @interface Iuserinfo
         * @property {string|null} [user_name] userinfo user_name
         * @property {string|null} [user_avatar] userinfo user_avatar
         * @property {string|null} [user_gender] userinfo user_gender
         * @property {string|null} [telephone] userinfo telephone
         * @property {string|null} [email] userinfo email
         */

        /**
         * Constructs a new userinfo.
         * @memberof client_proto
         * @classdesc Represents a userinfo.
         * @implements Iuserinfo
         * @constructor
         * @param {client_proto.Iuserinfo=} [properties] Properties to set
         */
        function userinfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * userinfo user_name.
         * @member {string} user_name
         * @memberof client_proto.userinfo
         * @instance
         */
        userinfo.prototype.user_name = "";

        /**
         * userinfo user_avatar.
         * @member {string} user_avatar
         * @memberof client_proto.userinfo
         * @instance
         */
        userinfo.prototype.user_avatar = "";

        /**
         * userinfo user_gender.
         * @member {string} user_gender
         * @memberof client_proto.userinfo
         * @instance
         */
        userinfo.prototype.user_gender = "";

        /**
         * userinfo telephone.
         * @member {string} telephone
         * @memberof client_proto.userinfo
         * @instance
         */
        userinfo.prototype.telephone = "";

        /**
         * userinfo email.
         * @member {string} email
         * @memberof client_proto.userinfo
         * @instance
         */
        userinfo.prototype.email = "";

        /**
         * Creates a new userinfo instance using the specified properties.
         * @function create
         * @memberof client_proto.userinfo
         * @static
         * @param {client_proto.Iuserinfo=} [properties] Properties to set
         * @returns {client_proto.userinfo} userinfo instance
         */
        userinfo.create = function create(properties) {
            return new userinfo(properties);
        };

        /**
         * Encodes the specified userinfo message. Does not implicitly {@link client_proto.userinfo.verify|verify} messages.
         * @function encode
         * @memberof client_proto.userinfo
         * @static
         * @param {client_proto.Iuserinfo} message userinfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        userinfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_name != null && Object.hasOwnProperty.call(message, "user_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.user_name);
            if (message.user_avatar != null && Object.hasOwnProperty.call(message, "user_avatar"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.user_avatar);
            if (message.user_gender != null && Object.hasOwnProperty.call(message, "user_gender"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.user_gender);
            if (message.telephone != null && Object.hasOwnProperty.call(message, "telephone"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.telephone);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.email);
            return writer;
        };

        /**
         * Encodes the specified userinfo message, length delimited. Does not implicitly {@link client_proto.userinfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.userinfo
         * @static
         * @param {client_proto.Iuserinfo} message userinfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        userinfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a userinfo message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.userinfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.userinfo} userinfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        userinfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.userinfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user_name = reader.string();
                    break;
                case 2:
                    message.user_avatar = reader.string();
                    break;
                case 3:
                    message.user_gender = reader.string();
                    break;
                case 4:
                    message.telephone = reader.string();
                    break;
                case 5:
                    message.email = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a userinfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.userinfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.userinfo} userinfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        userinfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a userinfo message.
         * @function verify
         * @memberof client_proto.userinfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        userinfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_name != null && message.hasOwnProperty("user_name"))
                if (!$util.isString(message.user_name))
                    return "user_name: string expected";
            if (message.user_avatar != null && message.hasOwnProperty("user_avatar"))
                if (!$util.isString(message.user_avatar))
                    return "user_avatar: string expected";
            if (message.user_gender != null && message.hasOwnProperty("user_gender"))
                if (!$util.isString(message.user_gender))
                    return "user_gender: string expected";
            if (message.telephone != null && message.hasOwnProperty("telephone"))
                if (!$util.isString(message.telephone))
                    return "telephone: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            return null;
        };

        /**
         * Creates a userinfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.userinfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.userinfo} userinfo
         */
        userinfo.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.userinfo)
                return object;
            var message = new $root.client_proto.userinfo();
            if (object.user_name != null)
                message.user_name = String(object.user_name);
            if (object.user_avatar != null)
                message.user_avatar = String(object.user_avatar);
            if (object.user_gender != null)
                message.user_gender = String(object.user_gender);
            if (object.telephone != null)
                message.telephone = String(object.telephone);
            if (object.email != null)
                message.email = String(object.email);
            return message;
        };

        /**
         * Creates a plain object from a userinfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.userinfo
         * @static
         * @param {client_proto.userinfo} message userinfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        userinfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user_name = "";
                object.user_avatar = "";
                object.user_gender = "";
                object.telephone = "";
                object.email = "";
            }
            if (message.user_name != null && message.hasOwnProperty("user_name"))
                object.user_name = message.user_name;
            if (message.user_avatar != null && message.hasOwnProperty("user_avatar"))
                object.user_avatar = message.user_avatar;
            if (message.user_gender != null && message.hasOwnProperty("user_gender"))
                object.user_gender = message.user_gender;
            if (message.telephone != null && message.hasOwnProperty("telephone"))
                object.telephone = message.telephone;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            return object;
        };

        /**
         * Converts this userinfo to JSON.
         * @function toJSON
         * @memberof client_proto.userinfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        userinfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return userinfo;
    })();

    client_proto.SetUserInfoResp = (function() {

        /**
         * Properties of a SetUserInfoResp.
         * @memberof client_proto
         * @interface ISetUserInfoResp
         * @property {number|null} [result] SetUserInfoResp result
         * @property {client_proto.Iuserinfo|null} [datas] SetUserInfoResp datas
         */

        /**
         * Constructs a new SetUserInfoResp.
         * @memberof client_proto
         * @classdesc Represents a SetUserInfoResp.
         * @implements ISetUserInfoResp
         * @constructor
         * @param {client_proto.ISetUserInfoResp=} [properties] Properties to set
         */
        function SetUserInfoResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetUserInfoResp result.
         * @member {number} result
         * @memberof client_proto.SetUserInfoResp
         * @instance
         */
        SetUserInfoResp.prototype.result = 0;

        /**
         * SetUserInfoResp datas.
         * @member {client_proto.Iuserinfo|null|undefined} datas
         * @memberof client_proto.SetUserInfoResp
         * @instance
         */
        SetUserInfoResp.prototype.datas = null;

        /**
         * Creates a new SetUserInfoResp instance using the specified properties.
         * @function create
         * @memberof client_proto.SetUserInfoResp
         * @static
         * @param {client_proto.ISetUserInfoResp=} [properties] Properties to set
         * @returns {client_proto.SetUserInfoResp} SetUserInfoResp instance
         */
        SetUserInfoResp.create = function create(properties) {
            return new SetUserInfoResp(properties);
        };

        /**
         * Encodes the specified SetUserInfoResp message. Does not implicitly {@link client_proto.SetUserInfoResp.verify|verify} messages.
         * @function encode
         * @memberof client_proto.SetUserInfoResp
         * @static
         * @param {client_proto.ISetUserInfoResp} message SetUserInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetUserInfoResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.datas != null && Object.hasOwnProperty.call(message, "datas"))
                $root.client_proto.userinfo.encode(message.datas, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SetUserInfoResp message, length delimited. Does not implicitly {@link client_proto.SetUserInfoResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.SetUserInfoResp
         * @static
         * @param {client_proto.ISetUserInfoResp} message SetUserInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetUserInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetUserInfoResp message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.SetUserInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.SetUserInfoResp} SetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetUserInfoResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.SetUserInfoResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.datas = $root.client_proto.userinfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetUserInfoResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.SetUserInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.SetUserInfoResp} SetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetUserInfoResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetUserInfoResp message.
         * @function verify
         * @memberof client_proto.SetUserInfoResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetUserInfoResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.datas != null && message.hasOwnProperty("datas")) {
                var error = $root.client_proto.userinfo.verify(message.datas);
                if (error)
                    return "datas." + error;
            }
            return null;
        };

        /**
         * Creates a SetUserInfoResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.SetUserInfoResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.SetUserInfoResp} SetUserInfoResp
         */
        SetUserInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.SetUserInfoResp)
                return object;
            var message = new $root.client_proto.SetUserInfoResp();
            if (object.result != null)
                message.result = object.result | 0;
            if (object.datas != null) {
                if (typeof object.datas !== "object")
                    throw TypeError(".client_proto.SetUserInfoResp.datas: object expected");
                message.datas = $root.client_proto.userinfo.fromObject(object.datas);
            }
            return message;
        };

        /**
         * Creates a plain object from a SetUserInfoResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.SetUserInfoResp
         * @static
         * @param {client_proto.SetUserInfoResp} message SetUserInfoResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetUserInfoResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = 0;
                object.datas = null;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.datas != null && message.hasOwnProperty("datas"))
                object.datas = $root.client_proto.userinfo.toObject(message.datas, options);
            return object;
        };

        /**
         * Converts this SetUserInfoResp to JSON.
         * @function toJSON
         * @memberof client_proto.SetUserInfoResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetUserInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetUserInfoResp;
    })();

    client_proto.GetUserBasicInfoReq = (function() {

        /**
         * Properties of a GetUserBasicInfoReq.
         * @memberof client_proto
         * @interface IGetUserBasicInfoReq
         * @property {number|null} [user_id] GetUserBasicInfoReq user_id
         * @property {Uint8Array|null} [trans] GetUserBasicInfoReq trans
         */

        /**
         * Constructs a new GetUserBasicInfoReq.
         * @memberof client_proto
         * @classdesc Represents a GetUserBasicInfoReq.
         * @implements IGetUserBasicInfoReq
         * @constructor
         * @param {client_proto.IGetUserBasicInfoReq=} [properties] Properties to set
         */
        function GetUserBasicInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserBasicInfoReq user_id.
         * @member {number} user_id
         * @memberof client_proto.GetUserBasicInfoReq
         * @instance
         */
        GetUserBasicInfoReq.prototype.user_id = 0;

        /**
         * GetUserBasicInfoReq trans.
         * @member {Uint8Array} trans
         * @memberof client_proto.GetUserBasicInfoReq
         * @instance
         */
        GetUserBasicInfoReq.prototype.trans = $util.newBuffer([]);

        /**
         * Creates a new GetUserBasicInfoReq instance using the specified properties.
         * @function create
         * @memberof client_proto.GetUserBasicInfoReq
         * @static
         * @param {client_proto.IGetUserBasicInfoReq=} [properties] Properties to set
         * @returns {client_proto.GetUserBasicInfoReq} GetUserBasicInfoReq instance
         */
        GetUserBasicInfoReq.create = function create(properties) {
            return new GetUserBasicInfoReq(properties);
        };

        /**
         * Encodes the specified GetUserBasicInfoReq message. Does not implicitly {@link client_proto.GetUserBasicInfoReq.verify|verify} messages.
         * @function encode
         * @memberof client_proto.GetUserBasicInfoReq
         * @static
         * @param {client_proto.IGetUserBasicInfoReq} message GetUserBasicInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserBasicInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.user_id);
            if (message.trans != null && Object.hasOwnProperty.call(message, "trans"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.trans);
            return writer;
        };

        /**
         * Encodes the specified GetUserBasicInfoReq message, length delimited. Does not implicitly {@link client_proto.GetUserBasicInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.GetUserBasicInfoReq
         * @static
         * @param {client_proto.IGetUserBasicInfoReq} message GetUserBasicInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserBasicInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserBasicInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.GetUserBasicInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.GetUserBasicInfoReq} GetUserBasicInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserBasicInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.GetUserBasicInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user_id = reader.uint32();
                    break;
                case 2:
                    message.trans = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserBasicInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.GetUserBasicInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.GetUserBasicInfoReq} GetUserBasicInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserBasicInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserBasicInfoReq message.
         * @function verify
         * @memberof client_proto.GetUserBasicInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserBasicInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id))
                    return "user_id: integer expected";
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (!(message.trans && typeof message.trans.length === "number" || $util.isString(message.trans)))
                    return "trans: buffer expected";
            return null;
        };

        /**
         * Creates a GetUserBasicInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.GetUserBasicInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.GetUserBasicInfoReq} GetUserBasicInfoReq
         */
        GetUserBasicInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.GetUserBasicInfoReq)
                return object;
            var message = new $root.client_proto.GetUserBasicInfoReq();
            if (object.user_id != null)
                message.user_id = object.user_id >>> 0;
            if (object.trans != null)
                if (typeof object.trans === "string")
                    $util.base64.decode(object.trans, message.trans = $util.newBuffer($util.base64.length(object.trans)), 0);
                else if (object.trans.length)
                    message.trans = object.trans;
            return message;
        };

        /**
         * Creates a plain object from a GetUserBasicInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.GetUserBasicInfoReq
         * @static
         * @param {client_proto.GetUserBasicInfoReq} message GetUserBasicInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserBasicInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user_id = 0;
                if (options.bytes === String)
                    object.trans = "";
                else {
                    object.trans = [];
                    if (options.bytes !== Array)
                        object.trans = $util.newBuffer(object.trans);
                }
            }
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
            if (message.trans != null && message.hasOwnProperty("trans"))
                object.trans = options.bytes === String ? $util.base64.encode(message.trans, 0, message.trans.length) : options.bytes === Array ? Array.prototype.slice.call(message.trans) : message.trans;
            return object;
        };

        /**
         * Converts this GetUserBasicInfoReq to JSON.
         * @function toJSON
         * @memberof client_proto.GetUserBasicInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserBasicInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserBasicInfoReq;
    })();

    client_proto.GetUserBasicInfoResp = (function() {

        /**
         * Properties of a GetUserBasicInfoResp.
         * @memberof client_proto
         * @interface IGetUserBasicInfoResp
         * @property {string|null} [user_name] GetUserBasicInfoResp user_name
         * @property {string|null} [user_avatar] GetUserBasicInfoResp user_avatar
         * @property {string|null} [user_gender] GetUserBasicInfoResp user_gender
         * @property {string|null} [telephone] GetUserBasicInfoResp telephone
         * @property {string|null} [email] GetUserBasicInfoResp email
         * @property {string|null} [lang] GetUserBasicInfoResp lang
         * @property {number|null} [user_id] GetUserBasicInfoResp user_id
         * @property {string|null} [ip] GetUserBasicInfoResp ip
         * @property {number|null} [reg_time] GetUserBasicInfoResp reg_time
         * @property {string|null} [device_id] GetUserBasicInfoResp device_id
         * @property {string|null} [invite_code] GetUserBasicInfoResp invite_code
         * @property {string|null} [channel] GetUserBasicInfoResp channel
         * @property {number|null} [vip_level] GetUserBasicInfoResp vip_level
         * @property {Uint8Array|null} [trans] GetUserBasicInfoResp trans
         * @property {string|null} [bank_account] GetUserBasicInfoResp bank_account
         */

        /**
         * Constructs a new GetUserBasicInfoResp.
         * @memberof client_proto
         * @classdesc Represents a GetUserBasicInfoResp.
         * @implements IGetUserBasicInfoResp
         * @constructor
         * @param {client_proto.IGetUserBasicInfoResp=} [properties] Properties to set
         */
        function GetUserBasicInfoResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserBasicInfoResp user_name.
         * @member {string} user_name
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         */
        GetUserBasicInfoResp.prototype.user_name = "";

        /**
         * GetUserBasicInfoResp user_avatar.
         * @member {string} user_avatar
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         */
        GetUserBasicInfoResp.prototype.user_avatar = "";

        /**
         * GetUserBasicInfoResp user_gender.
         * @member {string} user_gender
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         */
        GetUserBasicInfoResp.prototype.user_gender = "";

        /**
         * GetUserBasicInfoResp telephone.
         * @member {string} telephone
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         */
        GetUserBasicInfoResp.prototype.telephone = "";

        /**
         * GetUserBasicInfoResp email.
         * @member {string} email
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         */
        GetUserBasicInfoResp.prototype.email = "";

        /**
         * GetUserBasicInfoResp lang.
         * @member {string} lang
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         */
        GetUserBasicInfoResp.prototype.lang = "";

        /**
         * GetUserBasicInfoResp user_id.
         * @member {number} user_id
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         */
        GetUserBasicInfoResp.prototype.user_id = 0;

        /**
         * GetUserBasicInfoResp ip.
         * @member {string} ip
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         */
        GetUserBasicInfoResp.prototype.ip = "";

        /**
         * GetUserBasicInfoResp reg_time.
         * @member {number} reg_time
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         */
        GetUserBasicInfoResp.prototype.reg_time = 0;

        /**
         * GetUserBasicInfoResp device_id.
         * @member {string} device_id
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         */
        GetUserBasicInfoResp.prototype.device_id = "";

        /**
         * GetUserBasicInfoResp invite_code.
         * @member {string} invite_code
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         */
        GetUserBasicInfoResp.prototype.invite_code = "";

        /**
         * GetUserBasicInfoResp channel.
         * @member {string} channel
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         */
        GetUserBasicInfoResp.prototype.channel = "";

        /**
         * GetUserBasicInfoResp vip_level.
         * @member {number} vip_level
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         */
        GetUserBasicInfoResp.prototype.vip_level = 0;

        /**
         * GetUserBasicInfoResp trans.
         * @member {Uint8Array} trans
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         */
        GetUserBasicInfoResp.prototype.trans = $util.newBuffer([]);

        /**
         * GetUserBasicInfoResp bank_account.
         * @member {string} bank_account
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         */
        GetUserBasicInfoResp.prototype.bank_account = "";

        /**
         * Creates a new GetUserBasicInfoResp instance using the specified properties.
         * @function create
         * @memberof client_proto.GetUserBasicInfoResp
         * @static
         * @param {client_proto.IGetUserBasicInfoResp=} [properties] Properties to set
         * @returns {client_proto.GetUserBasicInfoResp} GetUserBasicInfoResp instance
         */
        GetUserBasicInfoResp.create = function create(properties) {
            return new GetUserBasicInfoResp(properties);
        };

        /**
         * Encodes the specified GetUserBasicInfoResp message. Does not implicitly {@link client_proto.GetUserBasicInfoResp.verify|verify} messages.
         * @function encode
         * @memberof client_proto.GetUserBasicInfoResp
         * @static
         * @param {client_proto.IGetUserBasicInfoResp} message GetUserBasicInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserBasicInfoResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_name != null && Object.hasOwnProperty.call(message, "user_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.user_name);
            if (message.user_avatar != null && Object.hasOwnProperty.call(message, "user_avatar"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.user_avatar);
            if (message.user_gender != null && Object.hasOwnProperty.call(message, "user_gender"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.user_gender);
            if (message.telephone != null && Object.hasOwnProperty.call(message, "telephone"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.telephone);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.email);
            if (message.lang != null && Object.hasOwnProperty.call(message, "lang"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.lang);
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.user_id);
            if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.ip);
            if (message.reg_time != null && Object.hasOwnProperty.call(message, "reg_time"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.reg_time);
            if (message.device_id != null && Object.hasOwnProperty.call(message, "device_id"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.device_id);
            if (message.invite_code != null && Object.hasOwnProperty.call(message, "invite_code"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.invite_code);
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.channel);
            if (message.vip_level != null && Object.hasOwnProperty.call(message, "vip_level"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.vip_level);
            if (message.trans != null && Object.hasOwnProperty.call(message, "trans"))
                writer.uint32(/* id 15, wireType 2 =*/122).bytes(message.trans);
            if (message.bank_account != null && Object.hasOwnProperty.call(message, "bank_account"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.bank_account);
            return writer;
        };

        /**
         * Encodes the specified GetUserBasicInfoResp message, length delimited. Does not implicitly {@link client_proto.GetUserBasicInfoResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.GetUserBasicInfoResp
         * @static
         * @param {client_proto.IGetUserBasicInfoResp} message GetUserBasicInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserBasicInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserBasicInfoResp message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.GetUserBasicInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.GetUserBasicInfoResp} GetUserBasicInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserBasicInfoResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.GetUserBasicInfoResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user_name = reader.string();
                    break;
                case 2:
                    message.user_avatar = reader.string();
                    break;
                case 3:
                    message.user_gender = reader.string();
                    break;
                case 4:
                    message.telephone = reader.string();
                    break;
                case 5:
                    message.email = reader.string();
                    break;
                case 6:
                    message.lang = reader.string();
                    break;
                case 7:
                    message.user_id = reader.uint32();
                    break;
                case 8:
                    message.ip = reader.string();
                    break;
                case 9:
                    message.reg_time = reader.int32();
                    break;
                case 10:
                    message.device_id = reader.string();
                    break;
                case 12:
                    message.invite_code = reader.string();
                    break;
                case 13:
                    message.channel = reader.string();
                    break;
                case 14:
                    message.vip_level = reader.int32();
                    break;
                case 15:
                    message.trans = reader.bytes();
                    break;
                case 16:
                    message.bank_account = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserBasicInfoResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.GetUserBasicInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.GetUserBasicInfoResp} GetUserBasicInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserBasicInfoResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserBasicInfoResp message.
         * @function verify
         * @memberof client_proto.GetUserBasicInfoResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserBasicInfoResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_name != null && message.hasOwnProperty("user_name"))
                if (!$util.isString(message.user_name))
                    return "user_name: string expected";
            if (message.user_avatar != null && message.hasOwnProperty("user_avatar"))
                if (!$util.isString(message.user_avatar))
                    return "user_avatar: string expected";
            if (message.user_gender != null && message.hasOwnProperty("user_gender"))
                if (!$util.isString(message.user_gender))
                    return "user_gender: string expected";
            if (message.telephone != null && message.hasOwnProperty("telephone"))
                if (!$util.isString(message.telephone))
                    return "telephone: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.lang != null && message.hasOwnProperty("lang"))
                if (!$util.isString(message.lang))
                    return "lang: string expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id))
                    return "user_id: integer expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.reg_time != null && message.hasOwnProperty("reg_time"))
                if (!$util.isInteger(message.reg_time))
                    return "reg_time: integer expected";
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (!$util.isString(message.device_id))
                    return "device_id: string expected";
            if (message.invite_code != null && message.hasOwnProperty("invite_code"))
                if (!$util.isString(message.invite_code))
                    return "invite_code: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isString(message.channel))
                    return "channel: string expected";
            if (message.vip_level != null && message.hasOwnProperty("vip_level"))
                if (!$util.isInteger(message.vip_level))
                    return "vip_level: integer expected";
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (!(message.trans && typeof message.trans.length === "number" || $util.isString(message.trans)))
                    return "trans: buffer expected";
            if (message.bank_account != null && message.hasOwnProperty("bank_account"))
                if (!$util.isString(message.bank_account))
                    return "bank_account: string expected";
            return null;
        };

        /**
         * Creates a GetUserBasicInfoResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.GetUserBasicInfoResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.GetUserBasicInfoResp} GetUserBasicInfoResp
         */
        GetUserBasicInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.GetUserBasicInfoResp)
                return object;
            var message = new $root.client_proto.GetUserBasicInfoResp();
            if (object.user_name != null)
                message.user_name = String(object.user_name);
            if (object.user_avatar != null)
                message.user_avatar = String(object.user_avatar);
            if (object.user_gender != null)
                message.user_gender = String(object.user_gender);
            if (object.telephone != null)
                message.telephone = String(object.telephone);
            if (object.email != null)
                message.email = String(object.email);
            if (object.lang != null)
                message.lang = String(object.lang);
            if (object.user_id != null)
                message.user_id = object.user_id >>> 0;
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.reg_time != null)
                message.reg_time = object.reg_time | 0;
            if (object.device_id != null)
                message.device_id = String(object.device_id);
            if (object.invite_code != null)
                message.invite_code = String(object.invite_code);
            if (object.channel != null)
                message.channel = String(object.channel);
            if (object.vip_level != null)
                message.vip_level = object.vip_level | 0;
            if (object.trans != null)
                if (typeof object.trans === "string")
                    $util.base64.decode(object.trans, message.trans = $util.newBuffer($util.base64.length(object.trans)), 0);
                else if (object.trans.length)
                    message.trans = object.trans;
            if (object.bank_account != null)
                message.bank_account = String(object.bank_account);
            return message;
        };

        /**
         * Creates a plain object from a GetUserBasicInfoResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.GetUserBasicInfoResp
         * @static
         * @param {client_proto.GetUserBasicInfoResp} message GetUserBasicInfoResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserBasicInfoResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user_name = "";
                object.user_avatar = "";
                object.user_gender = "";
                object.telephone = "";
                object.email = "";
                object.lang = "";
                object.user_id = 0;
                object.ip = "";
                object.reg_time = 0;
                object.device_id = "";
                object.invite_code = "";
                object.channel = "";
                object.vip_level = 0;
                if (options.bytes === String)
                    object.trans = "";
                else {
                    object.trans = [];
                    if (options.bytes !== Array)
                        object.trans = $util.newBuffer(object.trans);
                }
                object.bank_account = "";
            }
            if (message.user_name != null && message.hasOwnProperty("user_name"))
                object.user_name = message.user_name;
            if (message.user_avatar != null && message.hasOwnProperty("user_avatar"))
                object.user_avatar = message.user_avatar;
            if (message.user_gender != null && message.hasOwnProperty("user_gender"))
                object.user_gender = message.user_gender;
            if (message.telephone != null && message.hasOwnProperty("telephone"))
                object.telephone = message.telephone;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.lang != null && message.hasOwnProperty("lang"))
                object.lang = message.lang;
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.reg_time != null && message.hasOwnProperty("reg_time"))
                object.reg_time = message.reg_time;
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                object.device_id = message.device_id;
            if (message.invite_code != null && message.hasOwnProperty("invite_code"))
                object.invite_code = message.invite_code;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.vip_level != null && message.hasOwnProperty("vip_level"))
                object.vip_level = message.vip_level;
            if (message.trans != null && message.hasOwnProperty("trans"))
                object.trans = options.bytes === String ? $util.base64.encode(message.trans, 0, message.trans.length) : options.bytes === Array ? Array.prototype.slice.call(message.trans) : message.trans;
            if (message.bank_account != null && message.hasOwnProperty("bank_account"))
                object.bank_account = message.bank_account;
            return object;
        };

        /**
         * Converts this GetUserBasicInfoResp to JSON.
         * @function toJSON
         * @memberof client_proto.GetUserBasicInfoResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserBasicInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserBasicInfoResp;
    })();

    client_proto.SetLangCodeReq = (function() {

        /**
         * Properties of a SetLangCodeReq.
         * @memberof client_proto
         * @interface ISetLangCodeReq
         * @property {string|null} [lang] SetLangCodeReq lang
         */

        /**
         * Constructs a new SetLangCodeReq.
         * @memberof client_proto
         * @classdesc Represents a SetLangCodeReq.
         * @implements ISetLangCodeReq
         * @constructor
         * @param {client_proto.ISetLangCodeReq=} [properties] Properties to set
         */
        function SetLangCodeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetLangCodeReq lang.
         * @member {string} lang
         * @memberof client_proto.SetLangCodeReq
         * @instance
         */
        SetLangCodeReq.prototype.lang = "";

        /**
         * Creates a new SetLangCodeReq instance using the specified properties.
         * @function create
         * @memberof client_proto.SetLangCodeReq
         * @static
         * @param {client_proto.ISetLangCodeReq=} [properties] Properties to set
         * @returns {client_proto.SetLangCodeReq} SetLangCodeReq instance
         */
        SetLangCodeReq.create = function create(properties) {
            return new SetLangCodeReq(properties);
        };

        /**
         * Encodes the specified SetLangCodeReq message. Does not implicitly {@link client_proto.SetLangCodeReq.verify|verify} messages.
         * @function encode
         * @memberof client_proto.SetLangCodeReq
         * @static
         * @param {client_proto.ISetLangCodeReq} message SetLangCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetLangCodeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lang != null && Object.hasOwnProperty.call(message, "lang"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.lang);
            return writer;
        };

        /**
         * Encodes the specified SetLangCodeReq message, length delimited. Does not implicitly {@link client_proto.SetLangCodeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.SetLangCodeReq
         * @static
         * @param {client_proto.ISetLangCodeReq} message SetLangCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetLangCodeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetLangCodeReq message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.SetLangCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.SetLangCodeReq} SetLangCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetLangCodeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.SetLangCodeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.lang = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetLangCodeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.SetLangCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.SetLangCodeReq} SetLangCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetLangCodeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetLangCodeReq message.
         * @function verify
         * @memberof client_proto.SetLangCodeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetLangCodeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lang != null && message.hasOwnProperty("lang"))
                if (!$util.isString(message.lang))
                    return "lang: string expected";
            return null;
        };

        /**
         * Creates a SetLangCodeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.SetLangCodeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.SetLangCodeReq} SetLangCodeReq
         */
        SetLangCodeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.SetLangCodeReq)
                return object;
            var message = new $root.client_proto.SetLangCodeReq();
            if (object.lang != null)
                message.lang = String(object.lang);
            return message;
        };

        /**
         * Creates a plain object from a SetLangCodeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.SetLangCodeReq
         * @static
         * @param {client_proto.SetLangCodeReq} message SetLangCodeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetLangCodeReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.lang = "";
            if (message.lang != null && message.hasOwnProperty("lang"))
                object.lang = message.lang;
            return object;
        };

        /**
         * Converts this SetLangCodeReq to JSON.
         * @function toJSON
         * @memberof client_proto.SetLangCodeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetLangCodeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetLangCodeReq;
    })();

    client_proto.SetLangCodeResp = (function() {

        /**
         * Properties of a SetLangCodeResp.
         * @memberof client_proto
         * @interface ISetLangCodeResp
         * @property {number|null} [result] SetLangCodeResp result
         * @property {string|null} [lang] SetLangCodeResp lang
         */

        /**
         * Constructs a new SetLangCodeResp.
         * @memberof client_proto
         * @classdesc Represents a SetLangCodeResp.
         * @implements ISetLangCodeResp
         * @constructor
         * @param {client_proto.ISetLangCodeResp=} [properties] Properties to set
         */
        function SetLangCodeResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetLangCodeResp result.
         * @member {number} result
         * @memberof client_proto.SetLangCodeResp
         * @instance
         */
        SetLangCodeResp.prototype.result = 0;

        /**
         * SetLangCodeResp lang.
         * @member {string} lang
         * @memberof client_proto.SetLangCodeResp
         * @instance
         */
        SetLangCodeResp.prototype.lang = "";

        /**
         * Creates a new SetLangCodeResp instance using the specified properties.
         * @function create
         * @memberof client_proto.SetLangCodeResp
         * @static
         * @param {client_proto.ISetLangCodeResp=} [properties] Properties to set
         * @returns {client_proto.SetLangCodeResp} SetLangCodeResp instance
         */
        SetLangCodeResp.create = function create(properties) {
            return new SetLangCodeResp(properties);
        };

        /**
         * Encodes the specified SetLangCodeResp message. Does not implicitly {@link client_proto.SetLangCodeResp.verify|verify} messages.
         * @function encode
         * @memberof client_proto.SetLangCodeResp
         * @static
         * @param {client_proto.ISetLangCodeResp} message SetLangCodeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetLangCodeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.lang != null && Object.hasOwnProperty.call(message, "lang"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lang);
            return writer;
        };

        /**
         * Encodes the specified SetLangCodeResp message, length delimited. Does not implicitly {@link client_proto.SetLangCodeResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.SetLangCodeResp
         * @static
         * @param {client_proto.ISetLangCodeResp} message SetLangCodeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetLangCodeResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetLangCodeResp message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.SetLangCodeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.SetLangCodeResp} SetLangCodeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetLangCodeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.SetLangCodeResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.lang = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetLangCodeResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.SetLangCodeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.SetLangCodeResp} SetLangCodeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetLangCodeResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetLangCodeResp message.
         * @function verify
         * @memberof client_proto.SetLangCodeResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetLangCodeResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.lang != null && message.hasOwnProperty("lang"))
                if (!$util.isString(message.lang))
                    return "lang: string expected";
            return null;
        };

        /**
         * Creates a SetLangCodeResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.SetLangCodeResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.SetLangCodeResp} SetLangCodeResp
         */
        SetLangCodeResp.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.SetLangCodeResp)
                return object;
            var message = new $root.client_proto.SetLangCodeResp();
            if (object.result != null)
                message.result = object.result | 0;
            if (object.lang != null)
                message.lang = String(object.lang);
            return message;
        };

        /**
         * Creates a plain object from a SetLangCodeResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.SetLangCodeResp
         * @static
         * @param {client_proto.SetLangCodeResp} message SetLangCodeResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetLangCodeResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = 0;
                object.lang = "";
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.lang != null && message.hasOwnProperty("lang"))
                object.lang = message.lang;
            return object;
        };

        /**
         * Converts this SetLangCodeResp to JSON.
         * @function toJSON
         * @memberof client_proto.SetLangCodeResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetLangCodeResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetLangCodeResp;
    })();

    client_proto.ForbitUserReq = (function() {

        /**
         * Properties of a ForbitUserReq.
         * @memberof client_proto
         * @interface IForbitUserReq
         * @property {number|null} [user_id] ForbitUserReq user_id
         * @property {number|null} [status] ForbitUserReq status
         * @property {client_proto.ForbitUserReq.FORBIT_TYPE|null} [reason] ForbitUserReq reason
         */

        /**
         * Constructs a new ForbitUserReq.
         * @memberof client_proto
         * @classdesc Represents a ForbitUserReq.
         * @implements IForbitUserReq
         * @constructor
         * @param {client_proto.IForbitUserReq=} [properties] Properties to set
         */
        function ForbitUserReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ForbitUserReq user_id.
         * @member {number} user_id
         * @memberof client_proto.ForbitUserReq
         * @instance
         */
        ForbitUserReq.prototype.user_id = 0;

        /**
         * ForbitUserReq status.
         * @member {number} status
         * @memberof client_proto.ForbitUserReq
         * @instance
         */
        ForbitUserReq.prototype.status = 0;

        /**
         * ForbitUserReq reason.
         * @member {client_proto.ForbitUserReq.FORBIT_TYPE} reason
         * @memberof client_proto.ForbitUserReq
         * @instance
         */
        ForbitUserReq.prototype.reason = 0;

        /**
         * Creates a new ForbitUserReq instance using the specified properties.
         * @function create
         * @memberof client_proto.ForbitUserReq
         * @static
         * @param {client_proto.IForbitUserReq=} [properties] Properties to set
         * @returns {client_proto.ForbitUserReq} ForbitUserReq instance
         */
        ForbitUserReq.create = function create(properties) {
            return new ForbitUserReq(properties);
        };

        /**
         * Encodes the specified ForbitUserReq message. Does not implicitly {@link client_proto.ForbitUserReq.verify|verify} messages.
         * @function encode
         * @memberof client_proto.ForbitUserReq
         * @static
         * @param {client_proto.IForbitUserReq} message ForbitUserReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForbitUserReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.user_id);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.reason);
            return writer;
        };

        /**
         * Encodes the specified ForbitUserReq message, length delimited. Does not implicitly {@link client_proto.ForbitUserReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.ForbitUserReq
         * @static
         * @param {client_proto.IForbitUserReq} message ForbitUserReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForbitUserReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ForbitUserReq message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.ForbitUserReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.ForbitUserReq} ForbitUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForbitUserReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.ForbitUserReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user_id = reader.uint32();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.reason = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ForbitUserReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.ForbitUserReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.ForbitUserReq} ForbitUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForbitUserReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ForbitUserReq message.
         * @function verify
         * @memberof client_proto.ForbitUserReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ForbitUserReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id))
                    return "user_id: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                switch (message.reason) {
                default:
                    return "reason: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a ForbitUserReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.ForbitUserReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.ForbitUserReq} ForbitUserReq
         */
        ForbitUserReq.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.ForbitUserReq)
                return object;
            var message = new $root.client_proto.ForbitUserReq();
            if (object.user_id != null)
                message.user_id = object.user_id >>> 0;
            if (object.status != null)
                message.status = object.status | 0;
            switch (object.reason) {
            case "FORBIT_NULL":
            case 0:
                message.reason = 0;
                break;
            case "FORBIT_IP":
            case 1:
                message.reason = 1;
                break;
            case "FORBIT_BANK":
            case 2:
                message.reason = 2;
                break;
            case "FORBIT_DEVICE":
            case 3:
                message.reason = 3;
                break;
            case "FORBIT_MOBILE":
            case 4:
                message.reason = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ForbitUserReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.ForbitUserReq
         * @static
         * @param {client_proto.ForbitUserReq} message ForbitUserReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ForbitUserReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user_id = 0;
                object.status = 0;
                object.reason = options.enums === String ? "FORBIT_NULL" : 0;
            }
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = options.enums === String ? $root.client_proto.ForbitUserReq.FORBIT_TYPE[message.reason] : message.reason;
            return object;
        };

        /**
         * Converts this ForbitUserReq to JSON.
         * @function toJSON
         * @memberof client_proto.ForbitUserReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ForbitUserReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * FORBIT_TYPE enum.
         * @name client_proto.ForbitUserReq.FORBIT_TYPE
         * @enum {number}
         * @property {number} FORBIT_NULL=0 FORBIT_NULL value
         * @property {number} FORBIT_IP=1 FORBIT_IP value
         * @property {number} FORBIT_BANK=2 FORBIT_BANK value
         * @property {number} FORBIT_DEVICE=3 FORBIT_DEVICE value
         * @property {number} FORBIT_MOBILE=4 FORBIT_MOBILE value
         */
        ForbitUserReq.FORBIT_TYPE = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FORBIT_NULL"] = 0;
            values[valuesById[1] = "FORBIT_IP"] = 1;
            values[valuesById[2] = "FORBIT_BANK"] = 2;
            values[valuesById[3] = "FORBIT_DEVICE"] = 3;
            values[valuesById[4] = "FORBIT_MOBILE"] = 4;
            return values;
        })();

        return ForbitUserReq;
    })();

    client_proto.ForbitUserResp = (function() {

        /**
         * Properties of a ForbitUserResp.
         * @memberof client_proto
         * @interface IForbitUserResp
         * @property {number|null} [result] ForbitUserResp result
         */

        /**
         * Constructs a new ForbitUserResp.
         * @memberof client_proto
         * @classdesc Represents a ForbitUserResp.
         * @implements IForbitUserResp
         * @constructor
         * @param {client_proto.IForbitUserResp=} [properties] Properties to set
         */
        function ForbitUserResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ForbitUserResp result.
         * @member {number} result
         * @memberof client_proto.ForbitUserResp
         * @instance
         */
        ForbitUserResp.prototype.result = 0;

        /**
         * Creates a new ForbitUserResp instance using the specified properties.
         * @function create
         * @memberof client_proto.ForbitUserResp
         * @static
         * @param {client_proto.IForbitUserResp=} [properties] Properties to set
         * @returns {client_proto.ForbitUserResp} ForbitUserResp instance
         */
        ForbitUserResp.create = function create(properties) {
            return new ForbitUserResp(properties);
        };

        /**
         * Encodes the specified ForbitUserResp message. Does not implicitly {@link client_proto.ForbitUserResp.verify|verify} messages.
         * @function encode
         * @memberof client_proto.ForbitUserResp
         * @static
         * @param {client_proto.IForbitUserResp} message ForbitUserResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForbitUserResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified ForbitUserResp message, length delimited. Does not implicitly {@link client_proto.ForbitUserResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.ForbitUserResp
         * @static
         * @param {client_proto.IForbitUserResp} message ForbitUserResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForbitUserResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ForbitUserResp message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.ForbitUserResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.ForbitUserResp} ForbitUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForbitUserResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.ForbitUserResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ForbitUserResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.ForbitUserResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.ForbitUserResp} ForbitUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForbitUserResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ForbitUserResp message.
         * @function verify
         * @memberof client_proto.ForbitUserResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ForbitUserResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            return null;
        };

        /**
         * Creates a ForbitUserResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.ForbitUserResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.ForbitUserResp} ForbitUserResp
         */
        ForbitUserResp.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.ForbitUserResp)
                return object;
            var message = new $root.client_proto.ForbitUserResp();
            if (object.result != null)
                message.result = object.result | 0;
            return message;
        };

        /**
         * Creates a plain object from a ForbitUserResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.ForbitUserResp
         * @static
         * @param {client_proto.ForbitUserResp} message ForbitUserResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ForbitUserResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            return object;
        };

        /**
         * Converts this ForbitUserResp to JSON.
         * @function toJSON
         * @memberof client_proto.ForbitUserResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ForbitUserResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ForbitUserResp;
    })();

    client_proto.ForbitUserPush = (function() {

        /**
         * Properties of a ForbitUserPush.
         * @memberof client_proto
         * @interface IForbitUserPush
         * @property {number|null} [user_id] ForbitUserPush user_id
         */

        /**
         * Constructs a new ForbitUserPush.
         * @memberof client_proto
         * @classdesc Represents a ForbitUserPush.
         * @implements IForbitUserPush
         * @constructor
         * @param {client_proto.IForbitUserPush=} [properties] Properties to set
         */
        function ForbitUserPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ForbitUserPush user_id.
         * @member {number} user_id
         * @memberof client_proto.ForbitUserPush
         * @instance
         */
        ForbitUserPush.prototype.user_id = 0;

        /**
         * Creates a new ForbitUserPush instance using the specified properties.
         * @function create
         * @memberof client_proto.ForbitUserPush
         * @static
         * @param {client_proto.IForbitUserPush=} [properties] Properties to set
         * @returns {client_proto.ForbitUserPush} ForbitUserPush instance
         */
        ForbitUserPush.create = function create(properties) {
            return new ForbitUserPush(properties);
        };

        /**
         * Encodes the specified ForbitUserPush message. Does not implicitly {@link client_proto.ForbitUserPush.verify|verify} messages.
         * @function encode
         * @memberof client_proto.ForbitUserPush
         * @static
         * @param {client_proto.IForbitUserPush} message ForbitUserPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForbitUserPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.user_id);
            return writer;
        };

        /**
         * Encodes the specified ForbitUserPush message, length delimited. Does not implicitly {@link client_proto.ForbitUserPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.ForbitUserPush
         * @static
         * @param {client_proto.IForbitUserPush} message ForbitUserPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForbitUserPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ForbitUserPush message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.ForbitUserPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.ForbitUserPush} ForbitUserPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForbitUserPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.ForbitUserPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ForbitUserPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.ForbitUserPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.ForbitUserPush} ForbitUserPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForbitUserPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ForbitUserPush message.
         * @function verify
         * @memberof client_proto.ForbitUserPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ForbitUserPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id))
                    return "user_id: integer expected";
            return null;
        };

        /**
         * Creates a ForbitUserPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.ForbitUserPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.ForbitUserPush} ForbitUserPush
         */
        ForbitUserPush.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.ForbitUserPush)
                return object;
            var message = new $root.client_proto.ForbitUserPush();
            if (object.user_id != null)
                message.user_id = object.user_id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ForbitUserPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.ForbitUserPush
         * @static
         * @param {client_proto.ForbitUserPush} message ForbitUserPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ForbitUserPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user_id = 0;
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                object.user_id = message.user_id;
            return object;
        };

        /**
         * Converts this ForbitUserPush to JSON.
         * @function toJSON
         * @memberof client_proto.ForbitUserPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ForbitUserPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ForbitUserPush;
    })();

    client_proto.UserVipLevelChangeResp = (function() {

        /**
         * Properties of a UserVipLevelChangeResp.
         * @memberof client_proto
         * @interface IUserVipLevelChangeResp
         * @property {number|null} [uid] UserVipLevelChangeResp uid
         * @property {number|null} [vip_level] UserVipLevelChangeResp vip_level
         */

        /**
         * Constructs a new UserVipLevelChangeResp.
         * @memberof client_proto
         * @classdesc Represents a UserVipLevelChangeResp.
         * @implements IUserVipLevelChangeResp
         * @constructor
         * @param {client_proto.IUserVipLevelChangeResp=} [properties] Properties to set
         */
        function UserVipLevelChangeResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserVipLevelChangeResp uid.
         * @member {number} uid
         * @memberof client_proto.UserVipLevelChangeResp
         * @instance
         */
        UserVipLevelChangeResp.prototype.uid = 0;

        /**
         * UserVipLevelChangeResp vip_level.
         * @member {number} vip_level
         * @memberof client_proto.UserVipLevelChangeResp
         * @instance
         */
        UserVipLevelChangeResp.prototype.vip_level = 0;

        /**
         * Creates a new UserVipLevelChangeResp instance using the specified properties.
         * @function create
         * @memberof client_proto.UserVipLevelChangeResp
         * @static
         * @param {client_proto.IUserVipLevelChangeResp=} [properties] Properties to set
         * @returns {client_proto.UserVipLevelChangeResp} UserVipLevelChangeResp instance
         */
        UserVipLevelChangeResp.create = function create(properties) {
            return new UserVipLevelChangeResp(properties);
        };

        /**
         * Encodes the specified UserVipLevelChangeResp message. Does not implicitly {@link client_proto.UserVipLevelChangeResp.verify|verify} messages.
         * @function encode
         * @memberof client_proto.UserVipLevelChangeResp
         * @static
         * @param {client_proto.IUserVipLevelChangeResp} message UserVipLevelChangeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserVipLevelChangeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.vip_level != null && Object.hasOwnProperty.call(message, "vip_level"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.vip_level);
            return writer;
        };

        /**
         * Encodes the specified UserVipLevelChangeResp message, length delimited. Does not implicitly {@link client_proto.UserVipLevelChangeResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.UserVipLevelChangeResp
         * @static
         * @param {client_proto.IUserVipLevelChangeResp} message UserVipLevelChangeResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserVipLevelChangeResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserVipLevelChangeResp message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.UserVipLevelChangeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.UserVipLevelChangeResp} UserVipLevelChangeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserVipLevelChangeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.UserVipLevelChangeResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.vip_level = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserVipLevelChangeResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.UserVipLevelChangeResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.UserVipLevelChangeResp} UserVipLevelChangeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserVipLevelChangeResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserVipLevelChangeResp message.
         * @function verify
         * @memberof client_proto.UserVipLevelChangeResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserVipLevelChangeResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.vip_level != null && message.hasOwnProperty("vip_level"))
                if (!$util.isInteger(message.vip_level))
                    return "vip_level: integer expected";
            return null;
        };

        /**
         * Creates a UserVipLevelChangeResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.UserVipLevelChangeResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.UserVipLevelChangeResp} UserVipLevelChangeResp
         */
        UserVipLevelChangeResp.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.UserVipLevelChangeResp)
                return object;
            var message = new $root.client_proto.UserVipLevelChangeResp();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.vip_level != null)
                message.vip_level = object.vip_level | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserVipLevelChangeResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.UserVipLevelChangeResp
         * @static
         * @param {client_proto.UserVipLevelChangeResp} message UserVipLevelChangeResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserVipLevelChangeResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.vip_level = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.vip_level != null && message.hasOwnProperty("vip_level"))
                object.vip_level = message.vip_level;
            return object;
        };

        /**
         * Converts this UserVipLevelChangeResp to JSON.
         * @function toJSON
         * @memberof client_proto.UserVipLevelChangeResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserVipLevelChangeResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserVipLevelChangeResp;
    })();

    /**
     * COMMON_MSG_SUB_ID enum.
     * @name client_proto.COMMON_MSG_SUB_ID
     * @enum {number}
     * @property {number} COMM_MSG_SUB_ID_NULL=0 COMM_MSG_SUB_ID_NULL value
     * @property {number} COMM_MSG_ID_MIN=3000 COMM_MSG_ID_MIN value
     * @property {number} COMM_MSG_GET_PROP_PUSH=3001 COMM_MSG_GET_PROP_PUSH value
     * @property {number} COMM_MSG_GET_RULES_REQ=3002 COMM_MSG_GET_RULES_REQ value
     * @property {number} COMM_MSG_GET_RULES_RESP=3003 COMM_MSG_GET_RULES_RESP value
     * @property {number} COMM_MSG_USER_GUIDE_PUSH=3004 COMM_MSG_USER_GUIDE_PUSH value
     * @property {number} COMM_MSG_GUIDE_FINISH_REQ=3005 COMM_MSG_GUIDE_FINISH_REQ value
     * @property {number} COMM_MSG_GUIDE_FINISH_RESP=3006 COMM_MSG_GUIDE_FINISH_RESP value
     * @property {number} COMM_MSG_USER_NOTIFY_PUSH=3007 COMM_MSG_USER_NOTIFY_PUSH value
     * @property {number} COMM_MSG_ID_MAX=3050 COMM_MSG_ID_MAX value
     */
    client_proto.COMMON_MSG_SUB_ID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "COMM_MSG_SUB_ID_NULL"] = 0;
        values[valuesById[3000] = "COMM_MSG_ID_MIN"] = 3000;
        values[valuesById[3001] = "COMM_MSG_GET_PROP_PUSH"] = 3001;
        values[valuesById[3002] = "COMM_MSG_GET_RULES_REQ"] = 3002;
        values[valuesById[3003] = "COMM_MSG_GET_RULES_RESP"] = 3003;
        values[valuesById[3004] = "COMM_MSG_USER_GUIDE_PUSH"] = 3004;
        values[valuesById[3005] = "COMM_MSG_GUIDE_FINISH_REQ"] = 3005;
        values[valuesById[3006] = "COMM_MSG_GUIDE_FINISH_RESP"] = 3006;
        values[valuesById[3007] = "COMM_MSG_USER_NOTIFY_PUSH"] = 3007;
        values[valuesById[3050] = "COMM_MSG_ID_MAX"] = 3050;
        return values;
    })();

    /**
     * SERVER_INNER_MSG_TYPE enum.
     * @name client_proto.SERVER_INNER_MSG_TYPE
     * @enum {number}
     * @property {number} SERVER_TYPE_NONE=0 SERVER_TYPE_NONE value
     * @property {number} SERVER_TYPE_GAME_PLAYER=1 SERVER_TYPE_GAME_PLAYER value
     * @property {number} SERVER_TYPE_AGENT=2 SERVER_TYPE_AGENT value
     * @property {number} SERVER_TYPE_GAMEALLOC=3 SERVER_TYPE_GAMEALLOC value
     * @property {number} SERVER_TYPE_ONLINE=4 SERVER_TYPE_ONLINE value
     * @property {number} SERVER_TYPE_ROOMSERVER=5 SERVER_TYPE_ROOMSERVER value
     * @property {number} SERVER_TYPE_MASTER=6 SERVER_TYPE_MASTER value
     * @property {number} SERVER_TYPE_ASSET=7 SERVER_TYPE_ASSET value
     * @property {number} SERVER_TYPE_DB_UPDATE=8 SERVER_TYPE_DB_UPDATE value
     * @property {number} SERVER_TYPE_USERINFO=9 SERVER_TYPE_USERINFO value
     * @property {number} SERVER_TYPE_PHP_AGENT=10 SERVER_TYPE_PHP_AGENT value
     * @property {number} SERVER_TYPE_ACCOUNT=11 SERVER_TYPE_ACCOUNT value
     * @property {number} SERVER_TYPE_DISPATCH=12 SERVER_TYPE_DISPATCH value
     * @property {number} SERVER_TYPE_RANK=13 SERVER_TYPE_RANK value
     * @property {number} SERVER_TYPE_SERVICE_MANAGER=14 SERVER_TYPE_SERVICE_MANAGER value
     * @property {number} SERVER_TYPE_BRIDGE_PROXY=16 SERVER_TYPE_BRIDGE_PROXY value
     * @property {number} SERVER_TYPE_ACTIVITY=18 SERVER_TYPE_ACTIVITY value
     * @property {number} SERVER_TYPE_PHP=19 SERVER_TYPE_PHP value
     * @property {number} SERVER_TYPE_GAME_MANAGE=20 SERVER_TYPE_GAME_MANAGE value
     * @property {number} SERVER_TYPE_MAIL=21 SERVER_TYPE_MAIL value
     * @property {number} SERVER_TYPE_GAME_RPOXY_MANAGE=22 SERVER_TYPE_GAME_RPOXY_MANAGE value
     * @property {number} SERVER_TYPE_USER_PROXY=23 SERVER_TYPE_USER_PROXY value
     * @property {number} SERVER_TYPE_LABEL=24 SERVER_TYPE_LABEL value
     * @property {number} SERVER_TYPE_FACE=25 SERVER_TYPE_FACE value
     * @property {number} SERVER_TYPE_BANNER=26 SERVER_TYPE_BANNER value
     * @property {number} SERVER_TYPE_TGAME=28 SERVER_TYPE_TGAME value
     * @property {number} SERVER_TYPE_EVENT=29 SERVER_TYPE_EVENT value
     * @property {number} SERVER_TYPE_COMPANY=30 SERVER_TYPE_COMPANY value
     * @property {number} SERVER_TYPE_STATISTIC=31 SERVER_TYPE_STATISTIC value
     * @property {number} SERVER_TYPE_TRANSACTIONS=32 SERVER_TYPE_TRANSACTIONS value
     * @property {number} SERVER_TYPE_ASSET_FOLLOW=33 SERVER_TYPE_ASSET_FOLLOW value
     * @property {number} SERVER_TYPE_ANNOUNCEMENT=34 SERVER_TYPE_ANNOUNCEMENT value
     * @property {number} SERVER_TYPE_GETRANK=35 SERVER_TYPE_GETRANK value
     * @property {number} SERVER_TYPE_GIFT=45 SERVER_TYPE_GIFT value
     * @property {number} SERVER_TYPE_ROOMALLOC=47 SERVER_TYPE_ROOMALLOC value
     * @property {number} SERVER_TYPE_VIP_BET_REDATE=48 SERVER_TYPE_VIP_BET_REDATE value
     * @property {number} SERVER_TYPE_AGENT_RANK=53 SERVER_TYPE_AGENT_RANK value
     * @property {number} SERVER_TYPE_AGENT_GET_RANK=55 SERVER_TYPE_AGENT_GET_RANK value
     * @property {number} SERVER_TYPE_FLOATING=56 SERVER_TYPE_FLOATING value
     * @property {number} SERVER_TYPE_REPORT_SWITCH=59 SERVER_TYPE_REPORT_SWITCH value
     * @property {number} SERVER_TYPE_GAMERECORD=65 SERVER_TYPE_GAMERECORD value
     */
    client_proto.SERVER_INNER_MSG_TYPE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SERVER_TYPE_NONE"] = 0;
        values[valuesById[1] = "SERVER_TYPE_GAME_PLAYER"] = 1;
        values[valuesById[2] = "SERVER_TYPE_AGENT"] = 2;
        values[valuesById[3] = "SERVER_TYPE_GAMEALLOC"] = 3;
        values[valuesById[4] = "SERVER_TYPE_ONLINE"] = 4;
        values[valuesById[5] = "SERVER_TYPE_ROOMSERVER"] = 5;
        values[valuesById[6] = "SERVER_TYPE_MASTER"] = 6;
        values[valuesById[7] = "SERVER_TYPE_ASSET"] = 7;
        values[valuesById[8] = "SERVER_TYPE_DB_UPDATE"] = 8;
        values[valuesById[9] = "SERVER_TYPE_USERINFO"] = 9;
        values[valuesById[10] = "SERVER_TYPE_PHP_AGENT"] = 10;
        values[valuesById[11] = "SERVER_TYPE_ACCOUNT"] = 11;
        values[valuesById[12] = "SERVER_TYPE_DISPATCH"] = 12;
        values[valuesById[13] = "SERVER_TYPE_RANK"] = 13;
        values[valuesById[14] = "SERVER_TYPE_SERVICE_MANAGER"] = 14;
        values[valuesById[16] = "SERVER_TYPE_BRIDGE_PROXY"] = 16;
        values[valuesById[18] = "SERVER_TYPE_ACTIVITY"] = 18;
        values[valuesById[19] = "SERVER_TYPE_PHP"] = 19;
        values[valuesById[20] = "SERVER_TYPE_GAME_MANAGE"] = 20;
        values[valuesById[21] = "SERVER_TYPE_MAIL"] = 21;
        values[valuesById[22] = "SERVER_TYPE_GAME_RPOXY_MANAGE"] = 22;
        values[valuesById[23] = "SERVER_TYPE_USER_PROXY"] = 23;
        values[valuesById[24] = "SERVER_TYPE_LABEL"] = 24;
        values[valuesById[25] = "SERVER_TYPE_FACE"] = 25;
        values[valuesById[26] = "SERVER_TYPE_BANNER"] = 26;
        values[valuesById[28] = "SERVER_TYPE_TGAME"] = 28;
        values[valuesById[29] = "SERVER_TYPE_EVENT"] = 29;
        values[valuesById[30] = "SERVER_TYPE_COMPANY"] = 30;
        values[valuesById[31] = "SERVER_TYPE_STATISTIC"] = 31;
        values[valuesById[32] = "SERVER_TYPE_TRANSACTIONS"] = 32;
        values[valuesById[33] = "SERVER_TYPE_ASSET_FOLLOW"] = 33;
        values[valuesById[34] = "SERVER_TYPE_ANNOUNCEMENT"] = 34;
        values[valuesById[35] = "SERVER_TYPE_GETRANK"] = 35;
        values[valuesById[45] = "SERVER_TYPE_GIFT"] = 45;
        values[valuesById[47] = "SERVER_TYPE_ROOMALLOC"] = 47;
        values[valuesById[48] = "SERVER_TYPE_VIP_BET_REDATE"] = 48;
        values[valuesById[53] = "SERVER_TYPE_AGENT_RANK"] = 53;
        values[valuesById[55] = "SERVER_TYPE_AGENT_GET_RANK"] = 55;
        values[valuesById[56] = "SERVER_TYPE_FLOATING"] = 56;
        values[valuesById[59] = "SERVER_TYPE_REPORT_SWITCH"] = 59;
        values[valuesById[65] = "SERVER_TYPE_GAMERECORD"] = 65;
        return values;
    })();

    /**
     * PROP_ID enum.
     * @name client_proto.PROP_ID
     * @enum {number}
     * @property {number} PROP_NULL=0 PROP_NULL value
     * @property {number} PROP_AMOUNT=1 PROP_AMOUNT value
     * @property {number} PROP_COIN=2 PROP_COIN value
     * @property {number} PROP_TOTALBET=3 PROP_TOTALBET value
     * @property {number} PROP_TOTALRECHARGE=4 PROP_TOTALRECHARGE value
     * @property {number} PROP_BALANCE=5 PROP_BALANCE value
     * @property {number} PROP_WITHDRAW_LIMIT=6 PROP_WITHDRAW_LIMIT value
     * @property {number} PROP_DIAMOND=7 PROP_DIAMOND value
     * @property {number} PROP_EXP=8 PROP_EXP value
     * @property {number} PROP_PRT=9 PROP_PRT value
     */
    client_proto.PROP_ID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PROP_NULL"] = 0;
        values[valuesById[1] = "PROP_AMOUNT"] = 1;
        values[valuesById[2] = "PROP_COIN"] = 2;
        values[valuesById[3] = "PROP_TOTALBET"] = 3;
        values[valuesById[4] = "PROP_TOTALRECHARGE"] = 4;
        values[valuesById[5] = "PROP_BALANCE"] = 5;
        values[valuesById[6] = "PROP_WITHDRAW_LIMIT"] = 6;
        values[valuesById[7] = "PROP_DIAMOND"] = 7;
        values[valuesById[8] = "PROP_EXP"] = 8;
        values[valuesById[9] = "PROP_PRT"] = 9;
        return values;
    })();

    client_proto.GetPropPush = (function() {

        /**
         * Properties of a GetPropPush.
         * @memberof client_proto
         * @interface IGetPropPush
         * @property {Array.<client_proto.IPropItem>|null} [reward] GetPropPush reward
         * @property {client_proto.GetPropPush.PROP_FROM|null} [propfrom] GetPropPush propfrom
         * @property {string|null} [params] GetPropPush params
         */

        /**
         * Constructs a new GetPropPush.
         * @memberof client_proto
         * @classdesc Represents a GetPropPush.
         * @implements IGetPropPush
         * @constructor
         * @param {client_proto.IGetPropPush=} [properties] Properties to set
         */
        function GetPropPush(properties) {
            this.reward = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPropPush reward.
         * @member {Array.<client_proto.IPropItem>} reward
         * @memberof client_proto.GetPropPush
         * @instance
         */
        GetPropPush.prototype.reward = $util.emptyArray;

        /**
         * GetPropPush propfrom.
         * @member {client_proto.GetPropPush.PROP_FROM} propfrom
         * @memberof client_proto.GetPropPush
         * @instance
         */
        GetPropPush.prototype.propfrom = 0;

        /**
         * GetPropPush params.
         * @member {string} params
         * @memberof client_proto.GetPropPush
         * @instance
         */
        GetPropPush.prototype.params = "";

        /**
         * Creates a new GetPropPush instance using the specified properties.
         * @function create
         * @memberof client_proto.GetPropPush
         * @static
         * @param {client_proto.IGetPropPush=} [properties] Properties to set
         * @returns {client_proto.GetPropPush} GetPropPush instance
         */
        GetPropPush.create = function create(properties) {
            return new GetPropPush(properties);
        };

        /**
         * Encodes the specified GetPropPush message. Does not implicitly {@link client_proto.GetPropPush.verify|verify} messages.
         * @function encode
         * @memberof client_proto.GetPropPush
         * @static
         * @param {client_proto.IGetPropPush} message GetPropPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPropPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reward != null && message.reward.length)
                for (var i = 0; i < message.reward.length; ++i)
                    $root.client_proto.PropItem.encode(message.reward[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.propfrom != null && Object.hasOwnProperty.call(message, "propfrom"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.propfrom);
            if (message.params != null && Object.hasOwnProperty.call(message, "params"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.params);
            return writer;
        };

        /**
         * Encodes the specified GetPropPush message, length delimited. Does not implicitly {@link client_proto.GetPropPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.GetPropPush
         * @static
         * @param {client_proto.IGetPropPush} message GetPropPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPropPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPropPush message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.GetPropPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.GetPropPush} GetPropPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPropPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.GetPropPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.reward && message.reward.length))
                        message.reward = [];
                    message.reward.push($root.client_proto.PropItem.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.propfrom = reader.int32();
                    break;
                case 3:
                    message.params = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPropPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.GetPropPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.GetPropPush} GetPropPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPropPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPropPush message.
         * @function verify
         * @memberof client_proto.GetPropPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPropPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                if (!Array.isArray(message.reward))
                    return "reward: array expected";
                for (var i = 0; i < message.reward.length; ++i) {
                    var error = $root.client_proto.PropItem.verify(message.reward[i]);
                    if (error)
                        return "reward." + error;
                }
            }
            if (message.propfrom != null && message.hasOwnProperty("propfrom"))
                switch (message.propfrom) {
                default:
                    return "propfrom: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                    break;
                }
            if (message.params != null && message.hasOwnProperty("params"))
                if (!$util.isString(message.params))
                    return "params: string expected";
            return null;
        };

        /**
         * Creates a GetPropPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.GetPropPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.GetPropPush} GetPropPush
         */
        GetPropPush.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.GetPropPush)
                return object;
            var message = new $root.client_proto.GetPropPush();
            if (object.reward) {
                if (!Array.isArray(object.reward))
                    throw TypeError(".client_proto.GetPropPush.reward: array expected");
                message.reward = [];
                for (var i = 0; i < object.reward.length; ++i) {
                    if (typeof object.reward[i] !== "object")
                        throw TypeError(".client_proto.GetPropPush.reward: object expected");
                    message.reward[i] = $root.client_proto.PropItem.fromObject(object.reward[i]);
                }
            }
            switch (object.propfrom) {
            case "FRESH":
            case 0:
                message.propfrom = 0;
                break;
            case "RECHARGE":
            case 1:
                message.propfrom = 1;
                break;
            case "ACCUMULATED":
            case 2:
                message.propfrom = 2;
                break;
            case "EMAIL_PLATFORM":
            case 3:
                message.propfrom = 3;
                break;
            case "EMAIL_PERSONAL":
            case 4:
                message.propfrom = 4;
                break;
            case "SPIN_WITHDRAW":
            case 5:
                message.propfrom = 5;
                break;
            case "WALLET_RECHARGE":
            case 6:
                message.propfrom = 6;
                break;
            case "WALLET_WITHDRAW":
            case 7:
                message.propfrom = 7;
                break;
            case "VIP_WELFARE":
            case 8:
                message.propfrom = 8;
                break;
            case "COMMISSIONS":
            case 9:
                message.propfrom = 9;
                break;
            case "INVITE_ATIVITE":
            case 10:
                message.propfrom = 10;
                break;
            case "GIFT":
            case 11:
                message.propfrom = 11;
                break;
            case "VIP_BET_REDATE":
            case 12:
                message.propfrom = 12;
                break;
            case "ACTIVITE_GIFT":
            case 13:
                message.propfrom = 13;
                break;
            case "ACTIVITY_REGRESS_GIFT":
            case 14:
                message.propfrom = 14;
                break;
            case "ACTIVITY_REGRESS_WELFARE":
            case 15:
                message.propfrom = 15;
                break;
            case "ACTIVITY_SURPRISE_GIFT":
            case 16:
                message.propfrom = 16;
                break;
            }
            if (object.params != null)
                message.params = String(object.params);
            return message;
        };

        /**
         * Creates a plain object from a GetPropPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.GetPropPush
         * @static
         * @param {client_proto.GetPropPush} message GetPropPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPropPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.reward = [];
            if (options.defaults) {
                object.propfrom = options.enums === String ? "FRESH" : 0;
                object.params = "";
            }
            if (message.reward && message.reward.length) {
                object.reward = [];
                for (var j = 0; j < message.reward.length; ++j)
                    object.reward[j] = $root.client_proto.PropItem.toObject(message.reward[j], options);
            }
            if (message.propfrom != null && message.hasOwnProperty("propfrom"))
                object.propfrom = options.enums === String ? $root.client_proto.GetPropPush.PROP_FROM[message.propfrom] : message.propfrom;
            if (message.params != null && message.hasOwnProperty("params"))
                object.params = message.params;
            return object;
        };

        /**
         * Converts this GetPropPush to JSON.
         * @function toJSON
         * @memberof client_proto.GetPropPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPropPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * PROP_FROM enum.
         * @name client_proto.GetPropPush.PROP_FROM
         * @enum {number}
         * @property {number} FRESH=0 FRESH value
         * @property {number} RECHARGE=1 RECHARGE value
         * @property {number} ACCUMULATED=2 ACCUMULATED value
         * @property {number} EMAIL_PLATFORM=3 EMAIL_PLATFORM value
         * @property {number} EMAIL_PERSONAL=4 EMAIL_PERSONAL value
         * @property {number} SPIN_WITHDRAW=5 SPIN_WITHDRAW value
         * @property {number} WALLET_RECHARGE=6 WALLET_RECHARGE value
         * @property {number} WALLET_WITHDRAW=7 WALLET_WITHDRAW value
         * @property {number} VIP_WELFARE=8 VIP_WELFARE value
         * @property {number} COMMISSIONS=9 COMMISSIONS value
         * @property {number} INVITE_ATIVITE=10 INVITE_ATIVITE value
         * @property {number} GIFT=11 GIFT value
         * @property {number} VIP_BET_REDATE=12 VIP_BET_REDATE value
         * @property {number} ACTIVITE_GIFT=13 ACTIVITE_GIFT value
         * @property {number} ACTIVITY_REGRESS_GIFT=14 ACTIVITY_REGRESS_GIFT value
         * @property {number} ACTIVITY_REGRESS_WELFARE=15 ACTIVITY_REGRESS_WELFARE value
         * @property {number} ACTIVITY_SURPRISE_GIFT=16 ACTIVITY_SURPRISE_GIFT value
         */
        GetPropPush.PROP_FROM = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FRESH"] = 0;
            values[valuesById[1] = "RECHARGE"] = 1;
            values[valuesById[2] = "ACCUMULATED"] = 2;
            values[valuesById[3] = "EMAIL_PLATFORM"] = 3;
            values[valuesById[4] = "EMAIL_PERSONAL"] = 4;
            values[valuesById[5] = "SPIN_WITHDRAW"] = 5;
            values[valuesById[6] = "WALLET_RECHARGE"] = 6;
            values[valuesById[7] = "WALLET_WITHDRAW"] = 7;
            values[valuesById[8] = "VIP_WELFARE"] = 8;
            values[valuesById[9] = "COMMISSIONS"] = 9;
            values[valuesById[10] = "INVITE_ATIVITE"] = 10;
            values[valuesById[11] = "GIFT"] = 11;
            values[valuesById[12] = "VIP_BET_REDATE"] = 12;
            values[valuesById[13] = "ACTIVITE_GIFT"] = 13;
            values[valuesById[14] = "ACTIVITY_REGRESS_GIFT"] = 14;
            values[valuesById[15] = "ACTIVITY_REGRESS_WELFARE"] = 15;
            values[valuesById[16] = "ACTIVITY_SURPRISE_GIFT"] = 16;
            return values;
        })();

        return GetPropPush;
    })();

    client_proto.PropItem = (function() {

        /**
         * Properties of a PropItem.
         * @memberof client_proto
         * @interface IPropItem
         * @property {client_proto.PROP_ID|null} [id] PropItem id
         * @property {number|Long|null} [num] PropItem num
         */

        /**
         * Constructs a new PropItem.
         * @memberof client_proto
         * @classdesc Represents a PropItem.
         * @implements IPropItem
         * @constructor
         * @param {client_proto.IPropItem=} [properties] Properties to set
         */
        function PropItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PropItem id.
         * @member {client_proto.PROP_ID} id
         * @memberof client_proto.PropItem
         * @instance
         */
        PropItem.prototype.id = 0;

        /**
         * PropItem num.
         * @member {number|Long} num
         * @memberof client_proto.PropItem
         * @instance
         */
        PropItem.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PropItem instance using the specified properties.
         * @function create
         * @memberof client_proto.PropItem
         * @static
         * @param {client_proto.IPropItem=} [properties] Properties to set
         * @returns {client_proto.PropItem} PropItem instance
         */
        PropItem.create = function create(properties) {
            return new PropItem(properties);
        };

        /**
         * Encodes the specified PropItem message. Does not implicitly {@link client_proto.PropItem.verify|verify} messages.
         * @function encode
         * @memberof client_proto.PropItem
         * @static
         * @param {client_proto.IPropItem} message PropItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PropItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.num != null && Object.hasOwnProperty.call(message, "num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.num);
            return writer;
        };

        /**
         * Encodes the specified PropItem message, length delimited. Does not implicitly {@link client_proto.PropItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.PropItem
         * @static
         * @param {client_proto.IPropItem} message PropItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PropItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PropItem message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.PropItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.PropItem} PropItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PropItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.PropItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.num = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PropItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.PropItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.PropItem} PropItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PropItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PropItem message.
         * @function verify
         * @memberof client_proto.PropItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PropItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                switch (message.id) {
                default:
                    return "id: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num) && !(message.num && $util.isInteger(message.num.low) && $util.isInteger(message.num.high)))
                    return "num: integer|Long expected";
            return null;
        };

        /**
         * Creates a PropItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.PropItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.PropItem} PropItem
         */
        PropItem.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.PropItem)
                return object;
            var message = new $root.client_proto.PropItem();
            switch (object.id) {
            case "PROP_NULL":
            case 0:
                message.id = 0;
                break;
            case "PROP_AMOUNT":
            case 1:
                message.id = 1;
                break;
            case "PROP_COIN":
            case 2:
                message.id = 2;
                break;
            case "PROP_TOTALBET":
            case 3:
                message.id = 3;
                break;
            case "PROP_TOTALRECHARGE":
            case 4:
                message.id = 4;
                break;
            case "PROP_BALANCE":
            case 5:
                message.id = 5;
                break;
            case "PROP_WITHDRAW_LIMIT":
            case 6:
                message.id = 6;
                break;
            case "PROP_DIAMOND":
            case 7:
                message.id = 7;
                break;
            case "PROP_EXP":
            case 8:
                message.id = 8;
                break;
            case "PROP_PRT":
            case 9:
                message.id = 9;
                break;
            }
            if (object.num != null)
                if ($util.Long)
                    (message.num = $util.Long.fromValue(object.num)).unsigned = false;
                else if (typeof object.num === "string")
                    message.num = parseInt(object.num, 10);
                else if (typeof object.num === "number")
                    message.num = object.num;
                else if (typeof object.num === "object")
                    message.num = new $util.LongBits(object.num.low >>> 0, object.num.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PropItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.PropItem
         * @static
         * @param {client_proto.PropItem} message PropItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PropItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = options.enums === String ? "PROP_NULL" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.num = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.num = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.enums === String ? $root.client_proto.PROP_ID[message.id] : message.id;
            if (message.num != null && message.hasOwnProperty("num"))
                if (typeof message.num === "number")
                    object.num = options.longs === String ? String(message.num) : message.num;
                else
                    object.num = options.longs === String ? $util.Long.prototype.toString.call(message.num) : options.longs === Number ? new $util.LongBits(message.num.low >>> 0, message.num.high >>> 0).toNumber() : message.num;
            return object;
        };

        /**
         * Converts this PropItem to JSON.
         * @function toJSON
         * @memberof client_proto.PropItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PropItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PropItem;
    })();

    client_proto.GetRulesReq = (function() {

        /**
         * Properties of a GetRulesReq.
         * @memberof client_proto
         * @interface IGetRulesReq
         * @property {string|null} [key] GetRulesReq key
         * @property {string|null} [lang] GetRulesReq lang
         */

        /**
         * Constructs a new GetRulesReq.
         * @memberof client_proto
         * @classdesc Represents a GetRulesReq.
         * @implements IGetRulesReq
         * @constructor
         * @param {client_proto.IGetRulesReq=} [properties] Properties to set
         */
        function GetRulesReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRulesReq key.
         * @member {string} key
         * @memberof client_proto.GetRulesReq
         * @instance
         */
        GetRulesReq.prototype.key = "";

        /**
         * GetRulesReq lang.
         * @member {string} lang
         * @memberof client_proto.GetRulesReq
         * @instance
         */
        GetRulesReq.prototype.lang = "";

        /**
         * Creates a new GetRulesReq instance using the specified properties.
         * @function create
         * @memberof client_proto.GetRulesReq
         * @static
         * @param {client_proto.IGetRulesReq=} [properties] Properties to set
         * @returns {client_proto.GetRulesReq} GetRulesReq instance
         */
        GetRulesReq.create = function create(properties) {
            return new GetRulesReq(properties);
        };

        /**
         * Encodes the specified GetRulesReq message. Does not implicitly {@link client_proto.GetRulesReq.verify|verify} messages.
         * @function encode
         * @memberof client_proto.GetRulesReq
         * @static
         * @param {client_proto.IGetRulesReq} message GetRulesReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRulesReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.lang != null && Object.hasOwnProperty.call(message, "lang"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lang);
            return writer;
        };

        /**
         * Encodes the specified GetRulesReq message, length delimited. Does not implicitly {@link client_proto.GetRulesReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.GetRulesReq
         * @static
         * @param {client_proto.IGetRulesReq} message GetRulesReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRulesReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRulesReq message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.GetRulesReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.GetRulesReq} GetRulesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRulesReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.GetRulesReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.lang = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRulesReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.GetRulesReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.GetRulesReq} GetRulesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRulesReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRulesReq message.
         * @function verify
         * @memberof client_proto.GetRulesReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRulesReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.lang != null && message.hasOwnProperty("lang"))
                if (!$util.isString(message.lang))
                    return "lang: string expected";
            return null;
        };

        /**
         * Creates a GetRulesReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.GetRulesReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.GetRulesReq} GetRulesReq
         */
        GetRulesReq.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.GetRulesReq)
                return object;
            var message = new $root.client_proto.GetRulesReq();
            if (object.key != null)
                message.key = String(object.key);
            if (object.lang != null)
                message.lang = String(object.lang);
            return message;
        };

        /**
         * Creates a plain object from a GetRulesReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.GetRulesReq
         * @static
         * @param {client_proto.GetRulesReq} message GetRulesReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRulesReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.lang = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.lang != null && message.hasOwnProperty("lang"))
                object.lang = message.lang;
            return object;
        };

        /**
         * Converts this GetRulesReq to JSON.
         * @function toJSON
         * @memberof client_proto.GetRulesReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRulesReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRulesReq;
    })();

    client_proto.GetRulesResp = (function() {

        /**
         * Properties of a GetRulesResp.
         * @memberof client_proto
         * @interface IGetRulesResp
         * @property {string|null} [key] GetRulesResp key
         * @property {string|null} [rules] GetRulesResp rules
         */

        /**
         * Constructs a new GetRulesResp.
         * @memberof client_proto
         * @classdesc Represents a GetRulesResp.
         * @implements IGetRulesResp
         * @constructor
         * @param {client_proto.IGetRulesResp=} [properties] Properties to set
         */
        function GetRulesResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRulesResp key.
         * @member {string} key
         * @memberof client_proto.GetRulesResp
         * @instance
         */
        GetRulesResp.prototype.key = "";

        /**
         * GetRulesResp rules.
         * @member {string} rules
         * @memberof client_proto.GetRulesResp
         * @instance
         */
        GetRulesResp.prototype.rules = "";

        /**
         * Creates a new GetRulesResp instance using the specified properties.
         * @function create
         * @memberof client_proto.GetRulesResp
         * @static
         * @param {client_proto.IGetRulesResp=} [properties] Properties to set
         * @returns {client_proto.GetRulesResp} GetRulesResp instance
         */
        GetRulesResp.create = function create(properties) {
            return new GetRulesResp(properties);
        };

        /**
         * Encodes the specified GetRulesResp message. Does not implicitly {@link client_proto.GetRulesResp.verify|verify} messages.
         * @function encode
         * @memberof client_proto.GetRulesResp
         * @static
         * @param {client_proto.IGetRulesResp} message GetRulesResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRulesResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.rules != null && Object.hasOwnProperty.call(message, "rules"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.rules);
            return writer;
        };

        /**
         * Encodes the specified GetRulesResp message, length delimited. Does not implicitly {@link client_proto.GetRulesResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.GetRulesResp
         * @static
         * @param {client_proto.IGetRulesResp} message GetRulesResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRulesResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRulesResp message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.GetRulesResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.GetRulesResp} GetRulesResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRulesResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.GetRulesResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.rules = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRulesResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.GetRulesResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.GetRulesResp} GetRulesResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRulesResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRulesResp message.
         * @function verify
         * @memberof client_proto.GetRulesResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRulesResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.rules != null && message.hasOwnProperty("rules"))
                if (!$util.isString(message.rules))
                    return "rules: string expected";
            return null;
        };

        /**
         * Creates a GetRulesResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.GetRulesResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.GetRulesResp} GetRulesResp
         */
        GetRulesResp.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.GetRulesResp)
                return object;
            var message = new $root.client_proto.GetRulesResp();
            if (object.key != null)
                message.key = String(object.key);
            if (object.rules != null)
                message.rules = String(object.rules);
            return message;
        };

        /**
         * Creates a plain object from a GetRulesResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.GetRulesResp
         * @static
         * @param {client_proto.GetRulesResp} message GetRulesResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRulesResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.rules = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.rules != null && message.hasOwnProperty("rules"))
                object.rules = message.rules;
            return object;
        };

        /**
         * Converts this GetRulesResp to JSON.
         * @function toJSON
         * @memberof client_proto.GetRulesResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRulesResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRulesResp;
    })();

    /**
     * GuideStataus enum.
     * @name client_proto.GuideStataus
     * @enum {number}
     * @property {number} GUIDE_STATUS_NULL=0 GUIDE_STATUS_NULL value
     * @property {number} GUIDE_STATUS_READY=1 GUIDE_STATUS_READY value
     * @property {number} GUIDE_STATUS_FINISH=2 GUIDE_STATUS_FINISH value
     */
    client_proto.GuideStataus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GUIDE_STATUS_NULL"] = 0;
        values[valuesById[1] = "GUIDE_STATUS_READY"] = 1;
        values[valuesById[2] = "GUIDE_STATUS_FINISH"] = 2;
        return values;
    })();

    client_proto.UserGuidePush = (function() {

        /**
         * Properties of a UserGuidePush.
         * @memberof client_proto
         * @interface IUserGuidePush
         * @property {Array.<string>|null} [guide] UserGuidePush guide
         */

        /**
         * Constructs a new UserGuidePush.
         * @memberof client_proto
         * @classdesc Represents a UserGuidePush.
         * @implements IUserGuidePush
         * @constructor
         * @param {client_proto.IUserGuidePush=} [properties] Properties to set
         */
        function UserGuidePush(properties) {
            this.guide = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserGuidePush guide.
         * @member {Array.<string>} guide
         * @memberof client_proto.UserGuidePush
         * @instance
         */
        UserGuidePush.prototype.guide = $util.emptyArray;

        /**
         * Creates a new UserGuidePush instance using the specified properties.
         * @function create
         * @memberof client_proto.UserGuidePush
         * @static
         * @param {client_proto.IUserGuidePush=} [properties] Properties to set
         * @returns {client_proto.UserGuidePush} UserGuidePush instance
         */
        UserGuidePush.create = function create(properties) {
            return new UserGuidePush(properties);
        };

        /**
         * Encodes the specified UserGuidePush message. Does not implicitly {@link client_proto.UserGuidePush.verify|verify} messages.
         * @function encode
         * @memberof client_proto.UserGuidePush
         * @static
         * @param {client_proto.IUserGuidePush} message UserGuidePush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGuidePush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guide != null && message.guide.length)
                for (var i = 0; i < message.guide.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.guide[i]);
            return writer;
        };

        /**
         * Encodes the specified UserGuidePush message, length delimited. Does not implicitly {@link client_proto.UserGuidePush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.UserGuidePush
         * @static
         * @param {client_proto.IUserGuidePush} message UserGuidePush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGuidePush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserGuidePush message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.UserGuidePush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.UserGuidePush} UserGuidePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGuidePush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.UserGuidePush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.guide && message.guide.length))
                        message.guide = [];
                    message.guide.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserGuidePush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.UserGuidePush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.UserGuidePush} UserGuidePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGuidePush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserGuidePush message.
         * @function verify
         * @memberof client_proto.UserGuidePush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserGuidePush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guide != null && message.hasOwnProperty("guide")) {
                if (!Array.isArray(message.guide))
                    return "guide: array expected";
                for (var i = 0; i < message.guide.length; ++i)
                    if (!$util.isString(message.guide[i]))
                        return "guide: string[] expected";
            }
            return null;
        };

        /**
         * Creates a UserGuidePush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.UserGuidePush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.UserGuidePush} UserGuidePush
         */
        UserGuidePush.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.UserGuidePush)
                return object;
            var message = new $root.client_proto.UserGuidePush();
            if (object.guide) {
                if (!Array.isArray(object.guide))
                    throw TypeError(".client_proto.UserGuidePush.guide: array expected");
                message.guide = [];
                for (var i = 0; i < object.guide.length; ++i)
                    message.guide[i] = String(object.guide[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserGuidePush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.UserGuidePush
         * @static
         * @param {client_proto.UserGuidePush} message UserGuidePush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserGuidePush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.guide = [];
            if (message.guide && message.guide.length) {
                object.guide = [];
                for (var j = 0; j < message.guide.length; ++j)
                    object.guide[j] = message.guide[j];
            }
            return object;
        };

        /**
         * Converts this UserGuidePush to JSON.
         * @function toJSON
         * @memberof client_proto.UserGuidePush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserGuidePush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserGuidePush;
    })();

    client_proto.UserGuideFinishReq = (function() {

        /**
         * Properties of a UserGuideFinishReq.
         * @memberof client_proto
         * @interface IUserGuideFinishReq
         * @property {string|null} [guide] UserGuideFinishReq guide
         */

        /**
         * Constructs a new UserGuideFinishReq.
         * @memberof client_proto
         * @classdesc Represents a UserGuideFinishReq.
         * @implements IUserGuideFinishReq
         * @constructor
         * @param {client_proto.IUserGuideFinishReq=} [properties] Properties to set
         */
        function UserGuideFinishReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserGuideFinishReq guide.
         * @member {string} guide
         * @memberof client_proto.UserGuideFinishReq
         * @instance
         */
        UserGuideFinishReq.prototype.guide = "";

        /**
         * Creates a new UserGuideFinishReq instance using the specified properties.
         * @function create
         * @memberof client_proto.UserGuideFinishReq
         * @static
         * @param {client_proto.IUserGuideFinishReq=} [properties] Properties to set
         * @returns {client_proto.UserGuideFinishReq} UserGuideFinishReq instance
         */
        UserGuideFinishReq.create = function create(properties) {
            return new UserGuideFinishReq(properties);
        };

        /**
         * Encodes the specified UserGuideFinishReq message. Does not implicitly {@link client_proto.UserGuideFinishReq.verify|verify} messages.
         * @function encode
         * @memberof client_proto.UserGuideFinishReq
         * @static
         * @param {client_proto.IUserGuideFinishReq} message UserGuideFinishReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGuideFinishReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guide != null && Object.hasOwnProperty.call(message, "guide"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.guide);
            return writer;
        };

        /**
         * Encodes the specified UserGuideFinishReq message, length delimited. Does not implicitly {@link client_proto.UserGuideFinishReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.UserGuideFinishReq
         * @static
         * @param {client_proto.IUserGuideFinishReq} message UserGuideFinishReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGuideFinishReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserGuideFinishReq message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.UserGuideFinishReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.UserGuideFinishReq} UserGuideFinishReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGuideFinishReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.UserGuideFinishReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guide = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserGuideFinishReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.UserGuideFinishReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.UserGuideFinishReq} UserGuideFinishReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGuideFinishReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserGuideFinishReq message.
         * @function verify
         * @memberof client_proto.UserGuideFinishReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserGuideFinishReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guide != null && message.hasOwnProperty("guide"))
                if (!$util.isString(message.guide))
                    return "guide: string expected";
            return null;
        };

        /**
         * Creates a UserGuideFinishReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.UserGuideFinishReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.UserGuideFinishReq} UserGuideFinishReq
         */
        UserGuideFinishReq.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.UserGuideFinishReq)
                return object;
            var message = new $root.client_proto.UserGuideFinishReq();
            if (object.guide != null)
                message.guide = String(object.guide);
            return message;
        };

        /**
         * Creates a plain object from a UserGuideFinishReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.UserGuideFinishReq
         * @static
         * @param {client_proto.UserGuideFinishReq} message UserGuideFinishReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserGuideFinishReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.guide = "";
            if (message.guide != null && message.hasOwnProperty("guide"))
                object.guide = message.guide;
            return object;
        };

        /**
         * Converts this UserGuideFinishReq to JSON.
         * @function toJSON
         * @memberof client_proto.UserGuideFinishReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserGuideFinishReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserGuideFinishReq;
    })();

    client_proto.UserGuideFinishResp = (function() {

        /**
         * Properties of a UserGuideFinishResp.
         * @memberof client_proto
         * @interface IUserGuideFinishResp
         * @property {number|null} [result] UserGuideFinishResp result
         */

        /**
         * Constructs a new UserGuideFinishResp.
         * @memberof client_proto
         * @classdesc Represents a UserGuideFinishResp.
         * @implements IUserGuideFinishResp
         * @constructor
         * @param {client_proto.IUserGuideFinishResp=} [properties] Properties to set
         */
        function UserGuideFinishResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserGuideFinishResp result.
         * @member {number} result
         * @memberof client_proto.UserGuideFinishResp
         * @instance
         */
        UserGuideFinishResp.prototype.result = 0;

        /**
         * Creates a new UserGuideFinishResp instance using the specified properties.
         * @function create
         * @memberof client_proto.UserGuideFinishResp
         * @static
         * @param {client_proto.IUserGuideFinishResp=} [properties] Properties to set
         * @returns {client_proto.UserGuideFinishResp} UserGuideFinishResp instance
         */
        UserGuideFinishResp.create = function create(properties) {
            return new UserGuideFinishResp(properties);
        };

        /**
         * Encodes the specified UserGuideFinishResp message. Does not implicitly {@link client_proto.UserGuideFinishResp.verify|verify} messages.
         * @function encode
         * @memberof client_proto.UserGuideFinishResp
         * @static
         * @param {client_proto.IUserGuideFinishResp} message UserGuideFinishResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGuideFinishResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified UserGuideFinishResp message, length delimited. Does not implicitly {@link client_proto.UserGuideFinishResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.UserGuideFinishResp
         * @static
         * @param {client_proto.IUserGuideFinishResp} message UserGuideFinishResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGuideFinishResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserGuideFinishResp message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.UserGuideFinishResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.UserGuideFinishResp} UserGuideFinishResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGuideFinishResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.UserGuideFinishResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserGuideFinishResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.UserGuideFinishResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.UserGuideFinishResp} UserGuideFinishResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGuideFinishResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserGuideFinishResp message.
         * @function verify
         * @memberof client_proto.UserGuideFinishResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserGuideFinishResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            return null;
        };

        /**
         * Creates a UserGuideFinishResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.UserGuideFinishResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.UserGuideFinishResp} UserGuideFinishResp
         */
        UserGuideFinishResp.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.UserGuideFinishResp)
                return object;
            var message = new $root.client_proto.UserGuideFinishResp();
            if (object.result != null)
                message.result = object.result | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserGuideFinishResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.UserGuideFinishResp
         * @static
         * @param {client_proto.UserGuideFinishResp} message UserGuideFinishResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserGuideFinishResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.result = 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            return object;
        };

        /**
         * Converts this UserGuideFinishResp to JSON.
         * @function toJSON
         * @memberof client_proto.UserGuideFinishResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserGuideFinishResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserGuideFinishResp;
    })();

    /**
     * NotifyPushType enum.
     * @name client_proto.NotifyPushType
     * @enum {number}
     * @property {number} NORMAL=0 NORMAL value
     * @property {number} ERROR=1 ERROR value
     * @property {number} NOTIFY=2 NOTIFY value
     * @property {number} BROADCAST=3 BROADCAST value
     */
    client_proto.NotifyPushType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NORMAL"] = 0;
        values[valuesById[1] = "ERROR"] = 1;
        values[valuesById[2] = "NOTIFY"] = 2;
        values[valuesById[3] = "BROADCAST"] = 3;
        return values;
    })();

    client_proto.NotifyPush = (function() {

        /**
         * Properties of a NotifyPush.
         * @memberof client_proto
         * @interface INotifyPush
         * @property {number|null} [type] NotifyPush type
         * @property {number|null} [code] NotifyPush code
         * @property {string|null} [values] NotifyPush values
         */

        /**
         * Constructs a new NotifyPush.
         * @memberof client_proto
         * @classdesc Represents a NotifyPush.
         * @implements INotifyPush
         * @constructor
         * @param {client_proto.INotifyPush=} [properties] Properties to set
         */
        function NotifyPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyPush type.
         * @member {number} type
         * @memberof client_proto.NotifyPush
         * @instance
         */
        NotifyPush.prototype.type = 0;

        /**
         * NotifyPush code.
         * @member {number} code
         * @memberof client_proto.NotifyPush
         * @instance
         */
        NotifyPush.prototype.code = 0;

        /**
         * NotifyPush values.
         * @member {string} values
         * @memberof client_proto.NotifyPush
         * @instance
         */
        NotifyPush.prototype.values = "";

        /**
         * Creates a new NotifyPush instance using the specified properties.
         * @function create
         * @memberof client_proto.NotifyPush
         * @static
         * @param {client_proto.INotifyPush=} [properties] Properties to set
         * @returns {client_proto.NotifyPush} NotifyPush instance
         */
        NotifyPush.create = function create(properties) {
            return new NotifyPush(properties);
        };

        /**
         * Encodes the specified NotifyPush message. Does not implicitly {@link client_proto.NotifyPush.verify|verify} messages.
         * @function encode
         * @memberof client_proto.NotifyPush
         * @static
         * @param {client_proto.INotifyPush} message NotifyPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
            if (message.values != null && Object.hasOwnProperty.call(message, "values"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.values);
            return writer;
        };

        /**
         * Encodes the specified NotifyPush message, length delimited. Does not implicitly {@link client_proto.NotifyPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_proto.NotifyPush
         * @static
         * @param {client_proto.INotifyPush} message NotifyPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyPush message from the specified reader or buffer.
         * @function decode
         * @memberof client_proto.NotifyPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_proto.NotifyPush} NotifyPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_proto.NotifyPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.code = reader.int32();
                    break;
                case 3:
                    message.values = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotifyPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_proto.NotifyPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_proto.NotifyPush} NotifyPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyPush message.
         * @function verify
         * @memberof client_proto.NotifyPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.values != null && message.hasOwnProperty("values"))
                if (!$util.isString(message.values))
                    return "values: string expected";
            return null;
        };

        /**
         * Creates a NotifyPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof client_proto.NotifyPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {client_proto.NotifyPush} NotifyPush
         */
        NotifyPush.fromObject = function fromObject(object) {
            if (object instanceof $root.client_proto.NotifyPush)
                return object;
            var message = new $root.client_proto.NotifyPush();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.code != null)
                message.code = object.code | 0;
            if (object.values != null)
                message.values = String(object.values);
            return message;
        };

        /**
         * Creates a plain object from a NotifyPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof client_proto.NotifyPush
         * @static
         * @param {client_proto.NotifyPush} message NotifyPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.code = 0;
                object.values = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.values != null && message.hasOwnProperty("values"))
                object.values = message.values;
            return object;
        };

        /**
         * Converts this NotifyPush to JSON.
         * @function toJSON
         * @memberof client_proto.NotifyPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotifyPush;
    })();

    return client_proto;
})();

$root.asset = (function() {

    /**
     * Namespace asset.
     * @exports asset
     * @namespace
     */
    var asset = {};

    /**
     * ASSET_CMD enum.
     * @name asset.ASSET_CMD
     * @enum {number}
     * @property {number} ASSET_CMD_NONE=0 ASSET_CMD_NONE value
     * @property {number} ASSET_CMD_GET_ASSET=1450 ASSET_CMD_GET_ASSET value
     * @property {number} ASSET_CMD_GET_ASSET_RESP=1451 ASSET_CMD_GET_ASSET_RESP value
     * @property {number} ASSET_CMD_UPDATE_ASSET=1452 ASSET_CMD_UPDATE_ASSET value
     * @property {number} ASSET_CMD_UPDATE_ASSET_RESP=1453 ASSET_CMD_UPDATE_ASSET_RESP value
     * @property {number} ASSET_CMD_GET_ASSET_BYFIELD=1454 ASSET_CMD_GET_ASSET_BYFIELD value
     * @property {number} ASSET_CMD_GET_ASSET_BYFIELD_RESP=1455 ASSET_CMD_GET_ASSET_BYFIELD_RESP value
     * @property {number} ASSET_CMD_ASSET_FLOW_PUSH=1456 ASSET_CMD_ASSET_FLOW_PUSH value
     * @property {number} ASSET_CMD_ADD_ACCOUNT=1457 ASSET_CMD_ADD_ACCOUNT value
     * @property {number} ASSET_CMD_ADD_ACCOUNT_RESP=1458 ASSET_CMD_ADD_ACCOUNT_RESP value
     */
    asset.ASSET_CMD = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ASSET_CMD_NONE"] = 0;
        values[valuesById[1450] = "ASSET_CMD_GET_ASSET"] = 1450;
        values[valuesById[1451] = "ASSET_CMD_GET_ASSET_RESP"] = 1451;
        values[valuesById[1452] = "ASSET_CMD_UPDATE_ASSET"] = 1452;
        values[valuesById[1453] = "ASSET_CMD_UPDATE_ASSET_RESP"] = 1453;
        values[valuesById[1454] = "ASSET_CMD_GET_ASSET_BYFIELD"] = 1454;
        values[valuesById[1455] = "ASSET_CMD_GET_ASSET_BYFIELD_RESP"] = 1455;
        values[valuesById[1456] = "ASSET_CMD_ASSET_FLOW_PUSH"] = 1456;
        values[valuesById[1457] = "ASSET_CMD_ADD_ACCOUNT"] = 1457;
        values[valuesById[1458] = "ASSET_CMD_ADD_ACCOUNT_RESP"] = 1458;
        return values;
    })();

    asset.AssetReq = (function() {

        /**
         * Properties of an AssetReq.
         * @memberof asset
         * @interface IAssetReq
         * @property {number|null} [uid] AssetReq uid
         * @property {Uint8Array|null} [trans] AssetReq trans
         */

        /**
         * Constructs a new AssetReq.
         * @memberof asset
         * @classdesc Represents an AssetReq.
         * @implements IAssetReq
         * @constructor
         * @param {asset.IAssetReq=} [properties] Properties to set
         */
        function AssetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetReq uid.
         * @member {number} uid
         * @memberof asset.AssetReq
         * @instance
         */
        AssetReq.prototype.uid = 0;

        /**
         * AssetReq trans.
         * @member {Uint8Array} trans
         * @memberof asset.AssetReq
         * @instance
         */
        AssetReq.prototype.trans = $util.newBuffer([]);

        /**
         * Creates a new AssetReq instance using the specified properties.
         * @function create
         * @memberof asset.AssetReq
         * @static
         * @param {asset.IAssetReq=} [properties] Properties to set
         * @returns {asset.AssetReq} AssetReq instance
         */
        AssetReq.create = function create(properties) {
            return new AssetReq(properties);
        };

        /**
         * Encodes the specified AssetReq message. Does not implicitly {@link asset.AssetReq.verify|verify} messages.
         * @function encode
         * @memberof asset.AssetReq
         * @static
         * @param {asset.IAssetReq} message AssetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.trans != null && Object.hasOwnProperty.call(message, "trans"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.trans);
            return writer;
        };

        /**
         * Encodes the specified AssetReq message, length delimited. Does not implicitly {@link asset.AssetReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof asset.AssetReq
         * @static
         * @param {asset.IAssetReq} message AssetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetReq message from the specified reader or buffer.
         * @function decode
         * @memberof asset.AssetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {asset.AssetReq} AssetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.asset.AssetReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.trans = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof asset.AssetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {asset.AssetReq} AssetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetReq message.
         * @function verify
         * @memberof asset.AssetReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (!(message.trans && typeof message.trans.length === "number" || $util.isString(message.trans)))
                    return "trans: buffer expected";
            return null;
        };

        /**
         * Creates an AssetReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof asset.AssetReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {asset.AssetReq} AssetReq
         */
        AssetReq.fromObject = function fromObject(object) {
            if (object instanceof $root.asset.AssetReq)
                return object;
            var message = new $root.asset.AssetReq();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.trans != null)
                if (typeof object.trans === "string")
                    $util.base64.decode(object.trans, message.trans = $util.newBuffer($util.base64.length(object.trans)), 0);
                else if (object.trans.length)
                    message.trans = object.trans;
            return message;
        };

        /**
         * Creates a plain object from an AssetReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof asset.AssetReq
         * @static
         * @param {asset.AssetReq} message AssetReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                if (options.bytes === String)
                    object.trans = "";
                else {
                    object.trans = [];
                    if (options.bytes !== Array)
                        object.trans = $util.newBuffer(object.trans);
                }
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.trans != null && message.hasOwnProperty("trans"))
                object.trans = options.bytes === String ? $util.base64.encode(message.trans, 0, message.trans.length) : options.bytes === Array ? Array.prototype.slice.call(message.trans) : message.trans;
            return object;
        };

        /**
         * Converts this AssetReq to JSON.
         * @function toJSON
         * @memberof asset.AssetReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetReq;
    })();

    asset.AssetResp = (function() {

        /**
         * Properties of an AssetResp.
         * @memberof asset
         * @interface IAssetResp
         * @property {number|null} [uid] AssetResp uid
         * @property {number|null} [result] AssetResp result
         * @property {number|Long|null} [amount] AssetResp amount
         * @property {number|Long|null} [coin] AssetResp coin
         * @property {number|Long|null} [totalbet] AssetResp totalbet
         * @property {number|Long|null} [totalrecharge] AssetResp totalrecharge
         * @property {number|null} [rechargecount] AssetResp rechargecount
         * @property {Uint8Array|null} [trans] AssetResp trans
         */

        /**
         * Constructs a new AssetResp.
         * @memberof asset
         * @classdesc Represents an AssetResp.
         * @implements IAssetResp
         * @constructor
         * @param {asset.IAssetResp=} [properties] Properties to set
         */
        function AssetResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetResp uid.
         * @member {number} uid
         * @memberof asset.AssetResp
         * @instance
         */
        AssetResp.prototype.uid = 0;

        /**
         * AssetResp result.
         * @member {number} result
         * @memberof asset.AssetResp
         * @instance
         */
        AssetResp.prototype.result = 0;

        /**
         * AssetResp amount.
         * @member {number|Long} amount
         * @memberof asset.AssetResp
         * @instance
         */
        AssetResp.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AssetResp coin.
         * @member {number|Long} coin
         * @memberof asset.AssetResp
         * @instance
         */
        AssetResp.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AssetResp totalbet.
         * @member {number|Long} totalbet
         * @memberof asset.AssetResp
         * @instance
         */
        AssetResp.prototype.totalbet = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * AssetResp totalrecharge.
         * @member {number|Long} totalrecharge
         * @memberof asset.AssetResp
         * @instance
         */
        AssetResp.prototype.totalrecharge = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * AssetResp rechargecount.
         * @member {number} rechargecount
         * @memberof asset.AssetResp
         * @instance
         */
        AssetResp.prototype.rechargecount = 0;

        /**
         * AssetResp trans.
         * @member {Uint8Array} trans
         * @memberof asset.AssetResp
         * @instance
         */
        AssetResp.prototype.trans = $util.newBuffer([]);

        /**
         * Creates a new AssetResp instance using the specified properties.
         * @function create
         * @memberof asset.AssetResp
         * @static
         * @param {asset.IAssetResp=} [properties] Properties to set
         * @returns {asset.AssetResp} AssetResp instance
         */
        AssetResp.create = function create(properties) {
            return new AssetResp(properties);
        };

        /**
         * Encodes the specified AssetResp message. Does not implicitly {@link asset.AssetResp.verify|verify} messages.
         * @function encode
         * @memberof asset.AssetResp
         * @static
         * @param {asset.IAssetResp} message AssetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.amount);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.coin);
            if (message.totalbet != null && Object.hasOwnProperty.call(message, "totalbet"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.totalbet);
            if (message.totalrecharge != null && Object.hasOwnProperty.call(message, "totalrecharge"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.totalrecharge);
            if (message.rechargecount != null && Object.hasOwnProperty.call(message, "rechargecount"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.rechargecount);
            if (message.trans != null && Object.hasOwnProperty.call(message, "trans"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.trans);
            return writer;
        };

        /**
         * Encodes the specified AssetResp message, length delimited. Does not implicitly {@link asset.AssetResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof asset.AssetResp
         * @static
         * @param {asset.IAssetResp} message AssetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetResp message from the specified reader or buffer.
         * @function decode
         * @memberof asset.AssetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {asset.AssetResp} AssetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.asset.AssetResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.amount = reader.int64();
                    break;
                case 4:
                    message.coin = reader.int64();
                    break;
                case 5:
                    message.totalbet = reader.uint64();
                    break;
                case 6:
                    message.totalrecharge = reader.uint64();
                    break;
                case 7:
                    message.rechargecount = reader.uint32();
                    break;
                case 8:
                    message.trans = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof asset.AssetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {asset.AssetResp} AssetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetResp message.
         * @function verify
         * @memberof asset.AssetResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (!$util.isInteger(message.coin) && !(message.coin && $util.isInteger(message.coin.low) && $util.isInteger(message.coin.high)))
                    return "coin: integer|Long expected";
            if (message.totalbet != null && message.hasOwnProperty("totalbet"))
                if (!$util.isInteger(message.totalbet) && !(message.totalbet && $util.isInteger(message.totalbet.low) && $util.isInteger(message.totalbet.high)))
                    return "totalbet: integer|Long expected";
            if (message.totalrecharge != null && message.hasOwnProperty("totalrecharge"))
                if (!$util.isInteger(message.totalrecharge) && !(message.totalrecharge && $util.isInteger(message.totalrecharge.low) && $util.isInteger(message.totalrecharge.high)))
                    return "totalrecharge: integer|Long expected";
            if (message.rechargecount != null && message.hasOwnProperty("rechargecount"))
                if (!$util.isInteger(message.rechargecount))
                    return "rechargecount: integer expected";
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (!(message.trans && typeof message.trans.length === "number" || $util.isString(message.trans)))
                    return "trans: buffer expected";
            return null;
        };

        /**
         * Creates an AssetResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof asset.AssetResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {asset.AssetResp} AssetResp
         */
        AssetResp.fromObject = function fromObject(object) {
            if (object instanceof $root.asset.AssetResp)
                return object;
            var message = new $root.asset.AssetResp();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.result != null)
                message.result = object.result | 0;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.coin != null)
                if ($util.Long)
                    (message.coin = $util.Long.fromValue(object.coin)).unsigned = false;
                else if (typeof object.coin === "string")
                    message.coin = parseInt(object.coin, 10);
                else if (typeof object.coin === "number")
                    message.coin = object.coin;
                else if (typeof object.coin === "object")
                    message.coin = new $util.LongBits(object.coin.low >>> 0, object.coin.high >>> 0).toNumber();
            if (object.totalbet != null)
                if ($util.Long)
                    (message.totalbet = $util.Long.fromValue(object.totalbet)).unsigned = true;
                else if (typeof object.totalbet === "string")
                    message.totalbet = parseInt(object.totalbet, 10);
                else if (typeof object.totalbet === "number")
                    message.totalbet = object.totalbet;
                else if (typeof object.totalbet === "object")
                    message.totalbet = new $util.LongBits(object.totalbet.low >>> 0, object.totalbet.high >>> 0).toNumber(true);
            if (object.totalrecharge != null)
                if ($util.Long)
                    (message.totalrecharge = $util.Long.fromValue(object.totalrecharge)).unsigned = true;
                else if (typeof object.totalrecharge === "string")
                    message.totalrecharge = parseInt(object.totalrecharge, 10);
                else if (typeof object.totalrecharge === "number")
                    message.totalrecharge = object.totalrecharge;
                else if (typeof object.totalrecharge === "object")
                    message.totalrecharge = new $util.LongBits(object.totalrecharge.low >>> 0, object.totalrecharge.high >>> 0).toNumber(true);
            if (object.rechargecount != null)
                message.rechargecount = object.rechargecount >>> 0;
            if (object.trans != null)
                if (typeof object.trans === "string")
                    $util.base64.decode(object.trans, message.trans = $util.newBuffer($util.base64.length(object.trans)), 0);
                else if (object.trans.length)
                    message.trans = object.trans;
            return message;
        };

        /**
         * Creates a plain object from an AssetResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof asset.AssetResp
         * @static
         * @param {asset.AssetResp} message AssetResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.result = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.coin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.coin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.totalbet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalbet = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.totalrecharge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalrecharge = options.longs === String ? "0" : 0;
                object.rechargecount = 0;
                if (options.bytes === String)
                    object.trans = "";
                else {
                    object.trans = [];
                    if (options.bytes !== Array)
                        object.trans = $util.newBuffer(object.trans);
                }
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (typeof message.coin === "number")
                    object.coin = options.longs === String ? String(message.coin) : message.coin;
                else
                    object.coin = options.longs === String ? $util.Long.prototype.toString.call(message.coin) : options.longs === Number ? new $util.LongBits(message.coin.low >>> 0, message.coin.high >>> 0).toNumber() : message.coin;
            if (message.totalbet != null && message.hasOwnProperty("totalbet"))
                if (typeof message.totalbet === "number")
                    object.totalbet = options.longs === String ? String(message.totalbet) : message.totalbet;
                else
                    object.totalbet = options.longs === String ? $util.Long.prototype.toString.call(message.totalbet) : options.longs === Number ? new $util.LongBits(message.totalbet.low >>> 0, message.totalbet.high >>> 0).toNumber(true) : message.totalbet;
            if (message.totalrecharge != null && message.hasOwnProperty("totalrecharge"))
                if (typeof message.totalrecharge === "number")
                    object.totalrecharge = options.longs === String ? String(message.totalrecharge) : message.totalrecharge;
                else
                    object.totalrecharge = options.longs === String ? $util.Long.prototype.toString.call(message.totalrecharge) : options.longs === Number ? new $util.LongBits(message.totalrecharge.low >>> 0, message.totalrecharge.high >>> 0).toNumber(true) : message.totalrecharge;
            if (message.rechargecount != null && message.hasOwnProperty("rechargecount"))
                object.rechargecount = message.rechargecount;
            if (message.trans != null && message.hasOwnProperty("trans"))
                object.trans = options.bytes === String ? $util.base64.encode(message.trans, 0, message.trans.length) : options.bytes === Array ? Array.prototype.slice.call(message.trans) : message.trans;
            return object;
        };

        /**
         * Converts this AssetResp to JSON.
         * @function toJSON
         * @memberof asset.AssetResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetResp;
    })();

    /**
     * OP_FIELD enum.
     * @name asset.OP_FIELD
     * @enum {number}
     * @property {number} FIELD_NONE=0 FIELD_NONE value
     * @property {number} FIELD_AMOUNT=1 FIELD_AMOUNT value
     * @property {number} FIELD_COIN=2 FIELD_COIN value
     * @property {number} FIELD_TOTALBET=3 FIELD_TOTALBET value
     * @property {number} FIELD_TOTALRECHARGE=4 FIELD_TOTALRECHARGE value
     * @property {number} FIELD_BALANCE=5 FIELD_BALANCE value
     * @property {number} FIELD_WITHDRAW_LIMIT=6 FIELD_WITHDRAW_LIMIT value
     * @property {number} FIELD_TOTALWITHDRAW=7 FIELD_TOTALWITHDRAW value
     * @property {number} FIELD_TOTALWIN=8 FIELD_TOTALWIN value
     * @property {number} FIELD_WITHDRAWCOUNT=9 FIELD_WITHDRAWCOUNT value
     * @property {number} FIELD_RECHARGECOUNT=10 FIELD_RECHARGECOUNT value
     * @property {number} FIELD_TOTALVALIDFLOW=11 FIELD_TOTALVALIDFLOW value
     * @property {number} FIELD_VSTOTALVALIDFLOW=12 FIELD_VSTOTALVALIDFLOW value
     */
    asset.OP_FIELD = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FIELD_NONE"] = 0;
        values[valuesById[1] = "FIELD_AMOUNT"] = 1;
        values[valuesById[2] = "FIELD_COIN"] = 2;
        values[valuesById[3] = "FIELD_TOTALBET"] = 3;
        values[valuesById[4] = "FIELD_TOTALRECHARGE"] = 4;
        values[valuesById[5] = "FIELD_BALANCE"] = 5;
        values[valuesById[6] = "FIELD_WITHDRAW_LIMIT"] = 6;
        values[valuesById[7] = "FIELD_TOTALWITHDRAW"] = 7;
        values[valuesById[8] = "FIELD_TOTALWIN"] = 8;
        values[valuesById[9] = "FIELD_WITHDRAWCOUNT"] = 9;
        values[valuesById[10] = "FIELD_RECHARGECOUNT"] = 10;
        values[valuesById[11] = "FIELD_TOTALVALIDFLOW"] = 11;
        values[valuesById[12] = "FIELD_VSTOTALVALIDFLOW"] = 12;
        return values;
    })();

    /**
     * OP_ACT enum.
     * @name asset.OP_ACT
     * @enum {number}
     * @property {number} ACT_NONE=0 ACT_NONE value
     * @property {number} ACT_BET=1 ACT_BET value
     * @property {number} ACT_WINLOST=2 ACT_WINLOST value
     * @property {number} ACT_RECHARGE=3 ACT_RECHARGE value
     * @property {number} ACT_SPIN_WITHDRAW=4 ACT_SPIN_WITHDRAW value
     * @property {number} ACT_WITHDRAW=5 ACT_WITHDRAW value
     * @property {number} ACT_REGISTER=6 ACT_REGISTER value
     * @property {number} ACT_BACKEND=7 ACT_BACKEND value
     * @property {number} ACT_REBATE=8 ACT_REBATE value
     * @property {number} ACT_CANCEL_BET=9 ACT_CANCEL_BET value
     * @property {number} ACT_CANCEL_WINLOST=10 ACT_CANCEL_WINLOST value
     * @property {number} ACT_FREEZE=11 ACT_FREEZE value
     * @property {number} ACT_VIP_WELFARE=12 ACT_VIP_WELFARE value
     * @property {number} ACT_WITHDRAW_REJECT=13 ACT_WITHDRAW_REJECT value
     * @property {number} ACT_INVITE=14 ACT_INVITE value
     * @property {number} ACT_COMMISSIONS=15 ACT_COMMISSIONS value
     * @property {number} ACT_GAME_REWARD=16 ACT_GAME_REWARD value
     * @property {number} ACT_RANK=17 ACT_RANK value
     * @property {number} ACT_VIP_UPGRADE=18 ACT_VIP_UPGRADE value
     * @property {number} ACT_ACTIVITYGIFT=19 ACT_ACTIVITYGIFT value
     * @property {number} ACT_GIFT=20 ACT_GIFT value
     * @property {number} ACT_VIP_BET_REDATE=21 ACT_VIP_BET_REDATE value
     * @property {number} ACT_JACKPOT_REWARD=22 ACT_JACKPOT_REWARD value
     * @property {number} ACT_VALID_FLOW=23 ACT_VALID_FLOW value
     * @property {number} ACT_ACCUMULATECHARGE=24 ACT_ACCUMULATECHARGE value
     * @property {number} ACT_ACTIVITY_REGRESS_GIFT=25 ACT_ACTIVITY_REGRESS_GIFT value
     * @property {number} ACT_ACTIVITY_REGRESS_WELFARE=26 ACT_ACTIVITY_REGRESS_WELFARE value
     * @property {number} ACT_AGENT_RANK=27 ACT_AGENT_RANK value
     * @property {number} ACT_MAIL=28 ACT_MAIL value
     * @property {number} ACT_ACTIVITY_SURPRISE_GIFT=29 ACT_ACTIVITY_SURPRISE_GIFT value
     * @property {number} ACT_ACTIVITY_SHOOTUP_GIFT=30 ACT_ACTIVITY_SHOOTUP_GIFT value
     */
    asset.OP_ACT = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ACT_NONE"] = 0;
        values[valuesById[1] = "ACT_BET"] = 1;
        values[valuesById[2] = "ACT_WINLOST"] = 2;
        values[valuesById[3] = "ACT_RECHARGE"] = 3;
        values[valuesById[4] = "ACT_SPIN_WITHDRAW"] = 4;
        values[valuesById[5] = "ACT_WITHDRAW"] = 5;
        values[valuesById[6] = "ACT_REGISTER"] = 6;
        values[valuesById[7] = "ACT_BACKEND"] = 7;
        values[valuesById[8] = "ACT_REBATE"] = 8;
        values[valuesById[9] = "ACT_CANCEL_BET"] = 9;
        values[valuesById[10] = "ACT_CANCEL_WINLOST"] = 10;
        values[valuesById[11] = "ACT_FREEZE"] = 11;
        values[valuesById[12] = "ACT_VIP_WELFARE"] = 12;
        values[valuesById[13] = "ACT_WITHDRAW_REJECT"] = 13;
        values[valuesById[14] = "ACT_INVITE"] = 14;
        values[valuesById[15] = "ACT_COMMISSIONS"] = 15;
        values[valuesById[16] = "ACT_GAME_REWARD"] = 16;
        values[valuesById[17] = "ACT_RANK"] = 17;
        values[valuesById[18] = "ACT_VIP_UPGRADE"] = 18;
        values[valuesById[19] = "ACT_ACTIVITYGIFT"] = 19;
        values[valuesById[20] = "ACT_GIFT"] = 20;
        values[valuesById[21] = "ACT_VIP_BET_REDATE"] = 21;
        values[valuesById[22] = "ACT_JACKPOT_REWARD"] = 22;
        values[valuesById[23] = "ACT_VALID_FLOW"] = 23;
        values[valuesById[24] = "ACT_ACCUMULATECHARGE"] = 24;
        values[valuesById[25] = "ACT_ACTIVITY_REGRESS_GIFT"] = 25;
        values[valuesById[26] = "ACT_ACTIVITY_REGRESS_WELFARE"] = 26;
        values[valuesById[27] = "ACT_AGENT_RANK"] = 27;
        values[valuesById[28] = "ACT_MAIL"] = 28;
        values[valuesById[29] = "ACT_ACTIVITY_SURPRISE_GIFT"] = 29;
        values[valuesById[30] = "ACT_ACTIVITY_SHOOTUP_GIFT"] = 30;
        return values;
    })();

    /**
     * OP_UPDATE_TYPE enum.
     * @name asset.OP_UPDATE_TYPE
     * @enum {number}
     * @property {number} UPDATE_TYPE_INC_DEC=0 UPDATE_TYPE_INC_DEC value
     * @property {number} UPDATE_TYPE_SET=1 UPDATE_TYPE_SET value
     */
    asset.OP_UPDATE_TYPE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UPDATE_TYPE_INC_DEC"] = 0;
        values[valuesById[1] = "UPDATE_TYPE_SET"] = 1;
        return values;
    })();

    asset.FieldValue = (function() {

        /**
         * Properties of a FieldValue.
         * @memberof asset
         * @interface IFieldValue
         * @property {asset.OP_FIELD|null} [field] FieldValue field
         * @property {number|Long|null} [val] FieldValue val
         */

        /**
         * Constructs a new FieldValue.
         * @memberof asset
         * @classdesc Represents a FieldValue.
         * @implements IFieldValue
         * @constructor
         * @param {asset.IFieldValue=} [properties] Properties to set
         */
        function FieldValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FieldValue field.
         * @member {asset.OP_FIELD} field
         * @memberof asset.FieldValue
         * @instance
         */
        FieldValue.prototype.field = 0;

        /**
         * FieldValue val.
         * @member {number|Long} val
         * @memberof asset.FieldValue
         * @instance
         */
        FieldValue.prototype.val = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FieldValue instance using the specified properties.
         * @function create
         * @memberof asset.FieldValue
         * @static
         * @param {asset.IFieldValue=} [properties] Properties to set
         * @returns {asset.FieldValue} FieldValue instance
         */
        FieldValue.create = function create(properties) {
            return new FieldValue(properties);
        };

        /**
         * Encodes the specified FieldValue message. Does not implicitly {@link asset.FieldValue.verify|verify} messages.
         * @function encode
         * @memberof asset.FieldValue
         * @static
         * @param {asset.IFieldValue} message FieldValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FieldValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.field != null && Object.hasOwnProperty.call(message, "field"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.field);
            if (message.val != null && Object.hasOwnProperty.call(message, "val"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.val);
            return writer;
        };

        /**
         * Encodes the specified FieldValue message, length delimited. Does not implicitly {@link asset.FieldValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof asset.FieldValue
         * @static
         * @param {asset.IFieldValue} message FieldValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FieldValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FieldValue message from the specified reader or buffer.
         * @function decode
         * @memberof asset.FieldValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {asset.FieldValue} FieldValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FieldValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.asset.FieldValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.field = reader.int32();
                    break;
                case 2:
                    message.val = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FieldValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof asset.FieldValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {asset.FieldValue} FieldValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FieldValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FieldValue message.
         * @function verify
         * @memberof asset.FieldValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FieldValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.field != null && message.hasOwnProperty("field"))
                switch (message.field) {
                default:
                    return "field: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    break;
                }
            if (message.val != null && message.hasOwnProperty("val"))
                if (!$util.isInteger(message.val) && !(message.val && $util.isInteger(message.val.low) && $util.isInteger(message.val.high)))
                    return "val: integer|Long expected";
            return null;
        };

        /**
         * Creates a FieldValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof asset.FieldValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {asset.FieldValue} FieldValue
         */
        FieldValue.fromObject = function fromObject(object) {
            if (object instanceof $root.asset.FieldValue)
                return object;
            var message = new $root.asset.FieldValue();
            switch (object.field) {
            case "FIELD_NONE":
            case 0:
                message.field = 0;
                break;
            case "FIELD_AMOUNT":
            case 1:
                message.field = 1;
                break;
            case "FIELD_COIN":
            case 2:
                message.field = 2;
                break;
            case "FIELD_TOTALBET":
            case 3:
                message.field = 3;
                break;
            case "FIELD_TOTALRECHARGE":
            case 4:
                message.field = 4;
                break;
            case "FIELD_BALANCE":
            case 5:
                message.field = 5;
                break;
            case "FIELD_WITHDRAW_LIMIT":
            case 6:
                message.field = 6;
                break;
            case "FIELD_TOTALWITHDRAW":
            case 7:
                message.field = 7;
                break;
            case "FIELD_TOTALWIN":
            case 8:
                message.field = 8;
                break;
            case "FIELD_WITHDRAWCOUNT":
            case 9:
                message.field = 9;
                break;
            case "FIELD_RECHARGECOUNT":
            case 10:
                message.field = 10;
                break;
            case "FIELD_TOTALVALIDFLOW":
            case 11:
                message.field = 11;
                break;
            case "FIELD_VSTOTALVALIDFLOW":
            case 12:
                message.field = 12;
                break;
            }
            if (object.val != null)
                if ($util.Long)
                    (message.val = $util.Long.fromValue(object.val)).unsigned = false;
                else if (typeof object.val === "string")
                    message.val = parseInt(object.val, 10);
                else if (typeof object.val === "number")
                    message.val = object.val;
                else if (typeof object.val === "object")
                    message.val = new $util.LongBits(object.val.low >>> 0, object.val.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FieldValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof asset.FieldValue
         * @static
         * @param {asset.FieldValue} message FieldValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FieldValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.field = options.enums === String ? "FIELD_NONE" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.val = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.val = options.longs === String ? "0" : 0;
            }
            if (message.field != null && message.hasOwnProperty("field"))
                object.field = options.enums === String ? $root.asset.OP_FIELD[message.field] : message.field;
            if (message.val != null && message.hasOwnProperty("val"))
                if (typeof message.val === "number")
                    object.val = options.longs === String ? String(message.val) : message.val;
                else
                    object.val = options.longs === String ? $util.Long.prototype.toString.call(message.val) : options.longs === Number ? new $util.LongBits(message.val.low >>> 0, message.val.high >>> 0).toNumber() : message.val;
            return object;
        };

        /**
         * Converts this FieldValue to JSON.
         * @function toJSON
         * @memberof asset.FieldValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FieldValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FieldValue;
    })();

    asset.AssetByFieldReq = (function() {

        /**
         * Properties of an AssetByFieldReq.
         * @memberof asset
         * @interface IAssetByFieldReq
         * @property {number|null} [uid] AssetByFieldReq uid
         * @property {Array.<asset.OP_FIELD>|null} [fields] AssetByFieldReq fields
         * @property {Uint8Array|null} [trans] AssetByFieldReq trans
         */

        /**
         * Constructs a new AssetByFieldReq.
         * @memberof asset
         * @classdesc Represents an AssetByFieldReq.
         * @implements IAssetByFieldReq
         * @constructor
         * @param {asset.IAssetByFieldReq=} [properties] Properties to set
         */
        function AssetByFieldReq(properties) {
            this.fields = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetByFieldReq uid.
         * @member {number} uid
         * @memberof asset.AssetByFieldReq
         * @instance
         */
        AssetByFieldReq.prototype.uid = 0;

        /**
         * AssetByFieldReq fields.
         * @member {Array.<asset.OP_FIELD>} fields
         * @memberof asset.AssetByFieldReq
         * @instance
         */
        AssetByFieldReq.prototype.fields = $util.emptyArray;

        /**
         * AssetByFieldReq trans.
         * @member {Uint8Array} trans
         * @memberof asset.AssetByFieldReq
         * @instance
         */
        AssetByFieldReq.prototype.trans = $util.newBuffer([]);

        /**
         * Creates a new AssetByFieldReq instance using the specified properties.
         * @function create
         * @memberof asset.AssetByFieldReq
         * @static
         * @param {asset.IAssetByFieldReq=} [properties] Properties to set
         * @returns {asset.AssetByFieldReq} AssetByFieldReq instance
         */
        AssetByFieldReq.create = function create(properties) {
            return new AssetByFieldReq(properties);
        };

        /**
         * Encodes the specified AssetByFieldReq message. Does not implicitly {@link asset.AssetByFieldReq.verify|verify} messages.
         * @function encode
         * @memberof asset.AssetByFieldReq
         * @static
         * @param {asset.IAssetByFieldReq} message AssetByFieldReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetByFieldReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.fields != null && message.fields.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.fields.length; ++i)
                    writer.int32(message.fields[i]);
                writer.ldelim();
            }
            if (message.trans != null && Object.hasOwnProperty.call(message, "trans"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.trans);
            return writer;
        };

        /**
         * Encodes the specified AssetByFieldReq message, length delimited. Does not implicitly {@link asset.AssetByFieldReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof asset.AssetByFieldReq
         * @static
         * @param {asset.IAssetByFieldReq} message AssetByFieldReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetByFieldReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetByFieldReq message from the specified reader or buffer.
         * @function decode
         * @memberof asset.AssetByFieldReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {asset.AssetByFieldReq} AssetByFieldReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetByFieldReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.asset.AssetByFieldReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    if (!(message.fields && message.fields.length))
                        message.fields = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.fields.push(reader.int32());
                    } else
                        message.fields.push(reader.int32());
                    break;
                case 3:
                    message.trans = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetByFieldReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof asset.AssetByFieldReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {asset.AssetByFieldReq} AssetByFieldReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetByFieldReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetByFieldReq message.
         * @function verify
         * @memberof asset.AssetByFieldReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetByFieldReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.fields != null && message.hasOwnProperty("fields")) {
                if (!Array.isArray(message.fields))
                    return "fields: array expected";
                for (var i = 0; i < message.fields.length; ++i)
                    switch (message.fields[i]) {
                    default:
                        return "fields: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        break;
                    }
            }
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (!(message.trans && typeof message.trans.length === "number" || $util.isString(message.trans)))
                    return "trans: buffer expected";
            return null;
        };

        /**
         * Creates an AssetByFieldReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof asset.AssetByFieldReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {asset.AssetByFieldReq} AssetByFieldReq
         */
        AssetByFieldReq.fromObject = function fromObject(object) {
            if (object instanceof $root.asset.AssetByFieldReq)
                return object;
            var message = new $root.asset.AssetByFieldReq();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.fields) {
                if (!Array.isArray(object.fields))
                    throw TypeError(".asset.AssetByFieldReq.fields: array expected");
                message.fields = [];
                for (var i = 0; i < object.fields.length; ++i)
                    switch (object.fields[i]) {
                    default:
                    case "FIELD_NONE":
                    case 0:
                        message.fields[i] = 0;
                        break;
                    case "FIELD_AMOUNT":
                    case 1:
                        message.fields[i] = 1;
                        break;
                    case "FIELD_COIN":
                    case 2:
                        message.fields[i] = 2;
                        break;
                    case "FIELD_TOTALBET":
                    case 3:
                        message.fields[i] = 3;
                        break;
                    case "FIELD_TOTALRECHARGE":
                    case 4:
                        message.fields[i] = 4;
                        break;
                    case "FIELD_BALANCE":
                    case 5:
                        message.fields[i] = 5;
                        break;
                    case "FIELD_WITHDRAW_LIMIT":
                    case 6:
                        message.fields[i] = 6;
                        break;
                    case "FIELD_TOTALWITHDRAW":
                    case 7:
                        message.fields[i] = 7;
                        break;
                    case "FIELD_TOTALWIN":
                    case 8:
                        message.fields[i] = 8;
                        break;
                    case "FIELD_WITHDRAWCOUNT":
                    case 9:
                        message.fields[i] = 9;
                        break;
                    case "FIELD_RECHARGECOUNT":
                    case 10:
                        message.fields[i] = 10;
                        break;
                    case "FIELD_TOTALVALIDFLOW":
                    case 11:
                        message.fields[i] = 11;
                        break;
                    case "FIELD_VSTOTALVALIDFLOW":
                    case 12:
                        message.fields[i] = 12;
                        break;
                    }
            }
            if (object.trans != null)
                if (typeof object.trans === "string")
                    $util.base64.decode(object.trans, message.trans = $util.newBuffer($util.base64.length(object.trans)), 0);
                else if (object.trans.length)
                    message.trans = object.trans;
            return message;
        };

        /**
         * Creates a plain object from an AssetByFieldReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof asset.AssetByFieldReq
         * @static
         * @param {asset.AssetByFieldReq} message AssetByFieldReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetByFieldReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.fields = [];
            if (options.defaults) {
                object.uid = 0;
                if (options.bytes === String)
                    object.trans = "";
                else {
                    object.trans = [];
                    if (options.bytes !== Array)
                        object.trans = $util.newBuffer(object.trans);
                }
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.fields && message.fields.length) {
                object.fields = [];
                for (var j = 0; j < message.fields.length; ++j)
                    object.fields[j] = options.enums === String ? $root.asset.OP_FIELD[message.fields[j]] : message.fields[j];
            }
            if (message.trans != null && message.hasOwnProperty("trans"))
                object.trans = options.bytes === String ? $util.base64.encode(message.trans, 0, message.trans.length) : options.bytes === Array ? Array.prototype.slice.call(message.trans) : message.trans;
            return object;
        };

        /**
         * Converts this AssetByFieldReq to JSON.
         * @function toJSON
         * @memberof asset.AssetByFieldReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetByFieldReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetByFieldReq;
    })();

    asset.AssetByFieldResp = (function() {

        /**
         * Properties of an AssetByFieldResp.
         * @memberof asset
         * @interface IAssetByFieldResp
         * @property {number|null} [uid] AssetByFieldResp uid
         * @property {number|null} [result] AssetByFieldResp result
         * @property {Array.<asset.IFieldValue>|null} [fieldval] AssetByFieldResp fieldval
         * @property {Uint8Array|null} [trans] AssetByFieldResp trans
         */

        /**
         * Constructs a new AssetByFieldResp.
         * @memberof asset
         * @classdesc Represents an AssetByFieldResp.
         * @implements IAssetByFieldResp
         * @constructor
         * @param {asset.IAssetByFieldResp=} [properties] Properties to set
         */
        function AssetByFieldResp(properties) {
            this.fieldval = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetByFieldResp uid.
         * @member {number} uid
         * @memberof asset.AssetByFieldResp
         * @instance
         */
        AssetByFieldResp.prototype.uid = 0;

        /**
         * AssetByFieldResp result.
         * @member {number} result
         * @memberof asset.AssetByFieldResp
         * @instance
         */
        AssetByFieldResp.prototype.result = 0;

        /**
         * AssetByFieldResp fieldval.
         * @member {Array.<asset.IFieldValue>} fieldval
         * @memberof asset.AssetByFieldResp
         * @instance
         */
        AssetByFieldResp.prototype.fieldval = $util.emptyArray;

        /**
         * AssetByFieldResp trans.
         * @member {Uint8Array} trans
         * @memberof asset.AssetByFieldResp
         * @instance
         */
        AssetByFieldResp.prototype.trans = $util.newBuffer([]);

        /**
         * Creates a new AssetByFieldResp instance using the specified properties.
         * @function create
         * @memberof asset.AssetByFieldResp
         * @static
         * @param {asset.IAssetByFieldResp=} [properties] Properties to set
         * @returns {asset.AssetByFieldResp} AssetByFieldResp instance
         */
        AssetByFieldResp.create = function create(properties) {
            return new AssetByFieldResp(properties);
        };

        /**
         * Encodes the specified AssetByFieldResp message. Does not implicitly {@link asset.AssetByFieldResp.verify|verify} messages.
         * @function encode
         * @memberof asset.AssetByFieldResp
         * @static
         * @param {asset.IAssetByFieldResp} message AssetByFieldResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetByFieldResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            if (message.fieldval != null && message.fieldval.length)
                for (var i = 0; i < message.fieldval.length; ++i)
                    $root.asset.FieldValue.encode(message.fieldval[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.trans != null && Object.hasOwnProperty.call(message, "trans"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.trans);
            return writer;
        };

        /**
         * Encodes the specified AssetByFieldResp message, length delimited. Does not implicitly {@link asset.AssetByFieldResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof asset.AssetByFieldResp
         * @static
         * @param {asset.IAssetByFieldResp} message AssetByFieldResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetByFieldResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetByFieldResp message from the specified reader or buffer.
         * @function decode
         * @memberof asset.AssetByFieldResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {asset.AssetByFieldResp} AssetByFieldResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetByFieldResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.asset.AssetByFieldResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    if (!(message.fieldval && message.fieldval.length))
                        message.fieldval = [];
                    message.fieldval.push($root.asset.FieldValue.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.trans = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetByFieldResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof asset.AssetByFieldResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {asset.AssetByFieldResp} AssetByFieldResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetByFieldResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetByFieldResp message.
         * @function verify
         * @memberof asset.AssetByFieldResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetByFieldResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.fieldval != null && message.hasOwnProperty("fieldval")) {
                if (!Array.isArray(message.fieldval))
                    return "fieldval: array expected";
                for (var i = 0; i < message.fieldval.length; ++i) {
                    var error = $root.asset.FieldValue.verify(message.fieldval[i]);
                    if (error)
                        return "fieldval." + error;
                }
            }
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (!(message.trans && typeof message.trans.length === "number" || $util.isString(message.trans)))
                    return "trans: buffer expected";
            return null;
        };

        /**
         * Creates an AssetByFieldResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof asset.AssetByFieldResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {asset.AssetByFieldResp} AssetByFieldResp
         */
        AssetByFieldResp.fromObject = function fromObject(object) {
            if (object instanceof $root.asset.AssetByFieldResp)
                return object;
            var message = new $root.asset.AssetByFieldResp();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.result != null)
                message.result = object.result | 0;
            if (object.fieldval) {
                if (!Array.isArray(object.fieldval))
                    throw TypeError(".asset.AssetByFieldResp.fieldval: array expected");
                message.fieldval = [];
                for (var i = 0; i < object.fieldval.length; ++i) {
                    if (typeof object.fieldval[i] !== "object")
                        throw TypeError(".asset.AssetByFieldResp.fieldval: object expected");
                    message.fieldval[i] = $root.asset.FieldValue.fromObject(object.fieldval[i]);
                }
            }
            if (object.trans != null)
                if (typeof object.trans === "string")
                    $util.base64.decode(object.trans, message.trans = $util.newBuffer($util.base64.length(object.trans)), 0);
                else if (object.trans.length)
                    message.trans = object.trans;
            return message;
        };

        /**
         * Creates a plain object from an AssetByFieldResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof asset.AssetByFieldResp
         * @static
         * @param {asset.AssetByFieldResp} message AssetByFieldResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetByFieldResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.fieldval = [];
            if (options.defaults) {
                object.uid = 0;
                object.result = 0;
                if (options.bytes === String)
                    object.trans = "";
                else {
                    object.trans = [];
                    if (options.bytes !== Array)
                        object.trans = $util.newBuffer(object.trans);
                }
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.fieldval && message.fieldval.length) {
                object.fieldval = [];
                for (var j = 0; j < message.fieldval.length; ++j)
                    object.fieldval[j] = $root.asset.FieldValue.toObject(message.fieldval[j], options);
            }
            if (message.trans != null && message.hasOwnProperty("trans"))
                object.trans = options.bytes === String ? $util.base64.encode(message.trans, 0, message.trans.length) : options.bytes === Array ? Array.prototype.slice.call(message.trans) : message.trans;
            return object;
        };

        /**
         * Converts this AssetByFieldResp to JSON.
         * @function toJSON
         * @memberof asset.AssetByFieldResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetByFieldResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetByFieldResp;
    })();

    asset.Oparition = (function() {

        /**
         * Properties of an Oparition.
         * @memberof asset
         * @interface IOparition
         * @property {asset.OP_FIELD|null} [field] Oparition field
         * @property {asset.OP_ACT|null} [act] Oparition act
         * @property {number|Long|null} [delt] Oparition delt
         * @property {asset.OP_UPDATE_TYPE|null} [upatetype] Oparition upatetype
         */

        /**
         * Constructs a new Oparition.
         * @memberof asset
         * @classdesc Represents an Oparition.
         * @implements IOparition
         * @constructor
         * @param {asset.IOparition=} [properties] Properties to set
         */
        function Oparition(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Oparition field.
         * @member {asset.OP_FIELD} field
         * @memberof asset.Oparition
         * @instance
         */
        Oparition.prototype.field = 0;

        /**
         * Oparition act.
         * @member {asset.OP_ACT} act
         * @memberof asset.Oparition
         * @instance
         */
        Oparition.prototype.act = 0;

        /**
         * Oparition delt.
         * @member {number|Long} delt
         * @memberof asset.Oparition
         * @instance
         */
        Oparition.prototype.delt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Oparition upatetype.
         * @member {asset.OP_UPDATE_TYPE} upatetype
         * @memberof asset.Oparition
         * @instance
         */
        Oparition.prototype.upatetype = 0;

        /**
         * Creates a new Oparition instance using the specified properties.
         * @function create
         * @memberof asset.Oparition
         * @static
         * @param {asset.IOparition=} [properties] Properties to set
         * @returns {asset.Oparition} Oparition instance
         */
        Oparition.create = function create(properties) {
            return new Oparition(properties);
        };

        /**
         * Encodes the specified Oparition message. Does not implicitly {@link asset.Oparition.verify|verify} messages.
         * @function encode
         * @memberof asset.Oparition
         * @static
         * @param {asset.IOparition} message Oparition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Oparition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.field != null && Object.hasOwnProperty.call(message, "field"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.field);
            if (message.act != null && Object.hasOwnProperty.call(message, "act"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.act);
            if (message.delt != null && Object.hasOwnProperty.call(message, "delt"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint64(message.delt);
            if (message.upatetype != null && Object.hasOwnProperty.call(message, "upatetype"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.upatetype);
            return writer;
        };

        /**
         * Encodes the specified Oparition message, length delimited. Does not implicitly {@link asset.Oparition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof asset.Oparition
         * @static
         * @param {asset.IOparition} message Oparition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Oparition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Oparition message from the specified reader or buffer.
         * @function decode
         * @memberof asset.Oparition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {asset.Oparition} Oparition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Oparition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.asset.Oparition();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.field = reader.int32();
                    break;
                case 2:
                    message.act = reader.int32();
                    break;
                case 3:
                    message.delt = reader.sint64();
                    break;
                case 4:
                    message.upatetype = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Oparition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof asset.Oparition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {asset.Oparition} Oparition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Oparition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Oparition message.
         * @function verify
         * @memberof asset.Oparition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Oparition.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.field != null && message.hasOwnProperty("field"))
                switch (message.field) {
                default:
                    return "field: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    break;
                }
            if (message.act != null && message.hasOwnProperty("act"))
                switch (message.act) {
                default:
                    return "act: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                    break;
                }
            if (message.delt != null && message.hasOwnProperty("delt"))
                if (!$util.isInteger(message.delt) && !(message.delt && $util.isInteger(message.delt.low) && $util.isInteger(message.delt.high)))
                    return "delt: integer|Long expected";
            if (message.upatetype != null && message.hasOwnProperty("upatetype"))
                switch (message.upatetype) {
                default:
                    return "upatetype: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates an Oparition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof asset.Oparition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {asset.Oparition} Oparition
         */
        Oparition.fromObject = function fromObject(object) {
            if (object instanceof $root.asset.Oparition)
                return object;
            var message = new $root.asset.Oparition();
            switch (object.field) {
            case "FIELD_NONE":
            case 0:
                message.field = 0;
                break;
            case "FIELD_AMOUNT":
            case 1:
                message.field = 1;
                break;
            case "FIELD_COIN":
            case 2:
                message.field = 2;
                break;
            case "FIELD_TOTALBET":
            case 3:
                message.field = 3;
                break;
            case "FIELD_TOTALRECHARGE":
            case 4:
                message.field = 4;
                break;
            case "FIELD_BALANCE":
            case 5:
                message.field = 5;
                break;
            case "FIELD_WITHDRAW_LIMIT":
            case 6:
                message.field = 6;
                break;
            case "FIELD_TOTALWITHDRAW":
            case 7:
                message.field = 7;
                break;
            case "FIELD_TOTALWIN":
            case 8:
                message.field = 8;
                break;
            case "FIELD_WITHDRAWCOUNT":
            case 9:
                message.field = 9;
                break;
            case "FIELD_RECHARGECOUNT":
            case 10:
                message.field = 10;
                break;
            case "FIELD_TOTALVALIDFLOW":
            case 11:
                message.field = 11;
                break;
            case "FIELD_VSTOTALVALIDFLOW":
            case 12:
                message.field = 12;
                break;
            }
            switch (object.act) {
            case "ACT_NONE":
            case 0:
                message.act = 0;
                break;
            case "ACT_BET":
            case 1:
                message.act = 1;
                break;
            case "ACT_WINLOST":
            case 2:
                message.act = 2;
                break;
            case "ACT_RECHARGE":
            case 3:
                message.act = 3;
                break;
            case "ACT_SPIN_WITHDRAW":
            case 4:
                message.act = 4;
                break;
            case "ACT_WITHDRAW":
            case 5:
                message.act = 5;
                break;
            case "ACT_REGISTER":
            case 6:
                message.act = 6;
                break;
            case "ACT_BACKEND":
            case 7:
                message.act = 7;
                break;
            case "ACT_REBATE":
            case 8:
                message.act = 8;
                break;
            case "ACT_CANCEL_BET":
            case 9:
                message.act = 9;
                break;
            case "ACT_CANCEL_WINLOST":
            case 10:
                message.act = 10;
                break;
            case "ACT_FREEZE":
            case 11:
                message.act = 11;
                break;
            case "ACT_VIP_WELFARE":
            case 12:
                message.act = 12;
                break;
            case "ACT_WITHDRAW_REJECT":
            case 13:
                message.act = 13;
                break;
            case "ACT_INVITE":
            case 14:
                message.act = 14;
                break;
            case "ACT_COMMISSIONS":
            case 15:
                message.act = 15;
                break;
            case "ACT_GAME_REWARD":
            case 16:
                message.act = 16;
                break;
            case "ACT_RANK":
            case 17:
                message.act = 17;
                break;
            case "ACT_VIP_UPGRADE":
            case 18:
                message.act = 18;
                break;
            case "ACT_ACTIVITYGIFT":
            case 19:
                message.act = 19;
                break;
            case "ACT_GIFT":
            case 20:
                message.act = 20;
                break;
            case "ACT_VIP_BET_REDATE":
            case 21:
                message.act = 21;
                break;
            case "ACT_JACKPOT_REWARD":
            case 22:
                message.act = 22;
                break;
            case "ACT_VALID_FLOW":
            case 23:
                message.act = 23;
                break;
            case "ACT_ACCUMULATECHARGE":
            case 24:
                message.act = 24;
                break;
            case "ACT_ACTIVITY_REGRESS_GIFT":
            case 25:
                message.act = 25;
                break;
            case "ACT_ACTIVITY_REGRESS_WELFARE":
            case 26:
                message.act = 26;
                break;
            case "ACT_AGENT_RANK":
            case 27:
                message.act = 27;
                break;
            case "ACT_MAIL":
            case 28:
                message.act = 28;
                break;
            case "ACT_ACTIVITY_SURPRISE_GIFT":
            case 29:
                message.act = 29;
                break;
            case "ACT_ACTIVITY_SHOOTUP_GIFT":
            case 30:
                message.act = 30;
                break;
            }
            if (object.delt != null)
                if ($util.Long)
                    (message.delt = $util.Long.fromValue(object.delt)).unsigned = false;
                else if (typeof object.delt === "string")
                    message.delt = parseInt(object.delt, 10);
                else if (typeof object.delt === "number")
                    message.delt = object.delt;
                else if (typeof object.delt === "object")
                    message.delt = new $util.LongBits(object.delt.low >>> 0, object.delt.high >>> 0).toNumber();
            switch (object.upatetype) {
            case "UPDATE_TYPE_INC_DEC":
            case 0:
                message.upatetype = 0;
                break;
            case "UPDATE_TYPE_SET":
            case 1:
                message.upatetype = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an Oparition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof asset.Oparition
         * @static
         * @param {asset.Oparition} message Oparition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Oparition.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.field = options.enums === String ? "FIELD_NONE" : 0;
                object.act = options.enums === String ? "ACT_NONE" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.delt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.delt = options.longs === String ? "0" : 0;
                object.upatetype = options.enums === String ? "UPDATE_TYPE_INC_DEC" : 0;
            }
            if (message.field != null && message.hasOwnProperty("field"))
                object.field = options.enums === String ? $root.asset.OP_FIELD[message.field] : message.field;
            if (message.act != null && message.hasOwnProperty("act"))
                object.act = options.enums === String ? $root.asset.OP_ACT[message.act] : message.act;
            if (message.delt != null && message.hasOwnProperty("delt"))
                if (typeof message.delt === "number")
                    object.delt = options.longs === String ? String(message.delt) : message.delt;
                else
                    object.delt = options.longs === String ? $util.Long.prototype.toString.call(message.delt) : options.longs === Number ? new $util.LongBits(message.delt.low >>> 0, message.delt.high >>> 0).toNumber() : message.delt;
            if (message.upatetype != null && message.hasOwnProperty("upatetype"))
                object.upatetype = options.enums === String ? $root.asset.OP_UPDATE_TYPE[message.upatetype] : message.upatetype;
            return object;
        };

        /**
         * Converts this Oparition to JSON.
         * @function toJSON
         * @memberof asset.Oparition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Oparition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Oparition;
    })();

    asset.GameInfo = (function() {

        /**
         * Properties of a GameInfo.
         * @memberof asset
         * @interface IGameInfo
         * @property {string|null} [th] GameInfo th
         * @property {string|null} [game] GameInfo game
         * @property {string|null} [provider] GameInfo provider
         * @property {number|null} [gametype] GameInfo gametype
         * @property {string|null} [cycle] GameInfo cycle
         * @property {string|null} [orderid] GameInfo orderid
         * @property {string|null} [associatedorder] GameInfo associatedorder
         */

        /**
         * Constructs a new GameInfo.
         * @memberof asset
         * @classdesc Represents a GameInfo.
         * @implements IGameInfo
         * @constructor
         * @param {asset.IGameInfo=} [properties] Properties to set
         */
        function GameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameInfo th.
         * @member {string} th
         * @memberof asset.GameInfo
         * @instance
         */
        GameInfo.prototype.th = "";

        /**
         * GameInfo game.
         * @member {string} game
         * @memberof asset.GameInfo
         * @instance
         */
        GameInfo.prototype.game = "";

        /**
         * GameInfo provider.
         * @member {string} provider
         * @memberof asset.GameInfo
         * @instance
         */
        GameInfo.prototype.provider = "";

        /**
         * GameInfo gametype.
         * @member {number} gametype
         * @memberof asset.GameInfo
         * @instance
         */
        GameInfo.prototype.gametype = 0;

        /**
         * GameInfo cycle.
         * @member {string} cycle
         * @memberof asset.GameInfo
         * @instance
         */
        GameInfo.prototype.cycle = "";

        /**
         * GameInfo orderid.
         * @member {string} orderid
         * @memberof asset.GameInfo
         * @instance
         */
        GameInfo.prototype.orderid = "";

        /**
         * GameInfo associatedorder.
         * @member {string} associatedorder
         * @memberof asset.GameInfo
         * @instance
         */
        GameInfo.prototype.associatedorder = "";

        /**
         * Creates a new GameInfo instance using the specified properties.
         * @function create
         * @memberof asset.GameInfo
         * @static
         * @param {asset.IGameInfo=} [properties] Properties to set
         * @returns {asset.GameInfo} GameInfo instance
         */
        GameInfo.create = function create(properties) {
            return new GameInfo(properties);
        };

        /**
         * Encodes the specified GameInfo message. Does not implicitly {@link asset.GameInfo.verify|verify} messages.
         * @function encode
         * @memberof asset.GameInfo
         * @static
         * @param {asset.IGameInfo} message GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.th != null && Object.hasOwnProperty.call(message, "th"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.th);
            if (message.game != null && Object.hasOwnProperty.call(message, "game"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.game);
            if (message.provider != null && Object.hasOwnProperty.call(message, "provider"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.provider);
            if (message.gametype != null && Object.hasOwnProperty.call(message, "gametype"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.gametype);
            if (message.cycle != null && Object.hasOwnProperty.call(message, "cycle"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.cycle);
            if (message.orderid != null && Object.hasOwnProperty.call(message, "orderid"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.orderid);
            if (message.associatedorder != null && Object.hasOwnProperty.call(message, "associatedorder"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.associatedorder);
            return writer;
        };

        /**
         * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link asset.GameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof asset.GameInfo
         * @static
         * @param {asset.IGameInfo} message GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof asset.GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {asset.GameInfo} GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.asset.GameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.th = reader.string();
                    break;
                case 2:
                    message.game = reader.string();
                    break;
                case 3:
                    message.provider = reader.string();
                    break;
                case 4:
                    message.gametype = reader.uint32();
                    break;
                case 5:
                    message.cycle = reader.string();
                    break;
                case 6:
                    message.orderid = reader.string();
                    break;
                case 7:
                    message.associatedorder = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof asset.GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {asset.GameInfo} GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameInfo message.
         * @function verify
         * @memberof asset.GameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.th != null && message.hasOwnProperty("th"))
                if (!$util.isString(message.th))
                    return "th: string expected";
            if (message.game != null && message.hasOwnProperty("game"))
                if (!$util.isString(message.game))
                    return "game: string expected";
            if (message.provider != null && message.hasOwnProperty("provider"))
                if (!$util.isString(message.provider))
                    return "provider: string expected";
            if (message.gametype != null && message.hasOwnProperty("gametype"))
                if (!$util.isInteger(message.gametype))
                    return "gametype: integer expected";
            if (message.cycle != null && message.hasOwnProperty("cycle"))
                if (!$util.isString(message.cycle))
                    return "cycle: string expected";
            if (message.orderid != null && message.hasOwnProperty("orderid"))
                if (!$util.isString(message.orderid))
                    return "orderid: string expected";
            if (message.associatedorder != null && message.hasOwnProperty("associatedorder"))
                if (!$util.isString(message.associatedorder))
                    return "associatedorder: string expected";
            return null;
        };

        /**
         * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof asset.GameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {asset.GameInfo} GameInfo
         */
        GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.asset.GameInfo)
                return object;
            var message = new $root.asset.GameInfo();
            if (object.th != null)
                message.th = String(object.th);
            if (object.game != null)
                message.game = String(object.game);
            if (object.provider != null)
                message.provider = String(object.provider);
            if (object.gametype != null)
                message.gametype = object.gametype >>> 0;
            if (object.cycle != null)
                message.cycle = String(object.cycle);
            if (object.orderid != null)
                message.orderid = String(object.orderid);
            if (object.associatedorder != null)
                message.associatedorder = String(object.associatedorder);
            return message;
        };

        /**
         * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof asset.GameInfo
         * @static
         * @param {asset.GameInfo} message GameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.th = "";
                object.game = "";
                object.provider = "";
                object.gametype = 0;
                object.cycle = "";
                object.orderid = "";
                object.associatedorder = "";
            }
            if (message.th != null && message.hasOwnProperty("th"))
                object.th = message.th;
            if (message.game != null && message.hasOwnProperty("game"))
                object.game = message.game;
            if (message.provider != null && message.hasOwnProperty("provider"))
                object.provider = message.provider;
            if (message.gametype != null && message.hasOwnProperty("gametype"))
                object.gametype = message.gametype;
            if (message.cycle != null && message.hasOwnProperty("cycle"))
                object.cycle = message.cycle;
            if (message.orderid != null && message.hasOwnProperty("orderid"))
                object.orderid = message.orderid;
            if (message.associatedorder != null && message.hasOwnProperty("associatedorder"))
                object.associatedorder = message.associatedorder;
            return object;
        };

        /**
         * Converts this GameInfo to JSON.
         * @function toJSON
         * @memberof asset.GameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameInfo;
    })();

    asset.UpdateAssetReq = (function() {

        /**
         * Properties of an UpdateAssetReq.
         * @memberof asset
         * @interface IUpdateAssetReq
         * @property {number|null} [uid] UpdateAssetReq uid
         * @property {Array.<asset.IOparition>|null} [op] UpdateAssetReq op
         * @property {asset.IGameInfo|null} [gameinfo] UpdateAssetReq gameinfo
         * @property {string|null} [ext] UpdateAssetReq ext
         * @property {number|Long|null} [optime] UpdateAssetReq optime
         * @property {Uint8Array|null} [trans] UpdateAssetReq trans
         */

        /**
         * Constructs a new UpdateAssetReq.
         * @memberof asset
         * @classdesc Represents an UpdateAssetReq.
         * @implements IUpdateAssetReq
         * @constructor
         * @param {asset.IUpdateAssetReq=} [properties] Properties to set
         */
        function UpdateAssetReq(properties) {
            this.op = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateAssetReq uid.
         * @member {number} uid
         * @memberof asset.UpdateAssetReq
         * @instance
         */
        UpdateAssetReq.prototype.uid = 0;

        /**
         * UpdateAssetReq op.
         * @member {Array.<asset.IOparition>} op
         * @memberof asset.UpdateAssetReq
         * @instance
         */
        UpdateAssetReq.prototype.op = $util.emptyArray;

        /**
         * UpdateAssetReq gameinfo.
         * @member {asset.IGameInfo|null|undefined} gameinfo
         * @memberof asset.UpdateAssetReq
         * @instance
         */
        UpdateAssetReq.prototype.gameinfo = null;

        /**
         * UpdateAssetReq ext.
         * @member {string} ext
         * @memberof asset.UpdateAssetReq
         * @instance
         */
        UpdateAssetReq.prototype.ext = "";

        /**
         * UpdateAssetReq optime.
         * @member {number|Long} optime
         * @memberof asset.UpdateAssetReq
         * @instance
         */
        UpdateAssetReq.prototype.optime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * UpdateAssetReq trans.
         * @member {Uint8Array} trans
         * @memberof asset.UpdateAssetReq
         * @instance
         */
        UpdateAssetReq.prototype.trans = $util.newBuffer([]);

        /**
         * Creates a new UpdateAssetReq instance using the specified properties.
         * @function create
         * @memberof asset.UpdateAssetReq
         * @static
         * @param {asset.IUpdateAssetReq=} [properties] Properties to set
         * @returns {asset.UpdateAssetReq} UpdateAssetReq instance
         */
        UpdateAssetReq.create = function create(properties) {
            return new UpdateAssetReq(properties);
        };

        /**
         * Encodes the specified UpdateAssetReq message. Does not implicitly {@link asset.UpdateAssetReq.verify|verify} messages.
         * @function encode
         * @memberof asset.UpdateAssetReq
         * @static
         * @param {asset.IUpdateAssetReq} message UpdateAssetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAssetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.op != null && message.op.length)
                for (var i = 0; i < message.op.length; ++i)
                    $root.asset.Oparition.encode(message.op[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.gameinfo != null && Object.hasOwnProperty.call(message, "gameinfo"))
                $root.asset.GameInfo.encode(message.gameinfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.ext != null && Object.hasOwnProperty.call(message, "ext"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ext);
            if (message.optime != null && Object.hasOwnProperty.call(message, "optime"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.optime);
            if (message.trans != null && Object.hasOwnProperty.call(message, "trans"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.trans);
            return writer;
        };

        /**
         * Encodes the specified UpdateAssetReq message, length delimited. Does not implicitly {@link asset.UpdateAssetReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof asset.UpdateAssetReq
         * @static
         * @param {asset.IUpdateAssetReq} message UpdateAssetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAssetReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateAssetReq message from the specified reader or buffer.
         * @function decode
         * @memberof asset.UpdateAssetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {asset.UpdateAssetReq} UpdateAssetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAssetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.asset.UpdateAssetReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    if (!(message.op && message.op.length))
                        message.op = [];
                    message.op.push($root.asset.Oparition.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.gameinfo = $root.asset.GameInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ext = reader.string();
                    break;
                case 5:
                    message.optime = reader.uint64();
                    break;
                case 6:
                    message.trans = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateAssetReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof asset.UpdateAssetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {asset.UpdateAssetReq} UpdateAssetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAssetReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateAssetReq message.
         * @function verify
         * @memberof asset.UpdateAssetReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateAssetReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.op != null && message.hasOwnProperty("op")) {
                if (!Array.isArray(message.op))
                    return "op: array expected";
                for (var i = 0; i < message.op.length; ++i) {
                    var error = $root.asset.Oparition.verify(message.op[i]);
                    if (error)
                        return "op." + error;
                }
            }
            if (message.gameinfo != null && message.hasOwnProperty("gameinfo")) {
                var error = $root.asset.GameInfo.verify(message.gameinfo);
                if (error)
                    return "gameinfo." + error;
            }
            if (message.ext != null && message.hasOwnProperty("ext"))
                if (!$util.isString(message.ext))
                    return "ext: string expected";
            if (message.optime != null && message.hasOwnProperty("optime"))
                if (!$util.isInteger(message.optime) && !(message.optime && $util.isInteger(message.optime.low) && $util.isInteger(message.optime.high)))
                    return "optime: integer|Long expected";
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (!(message.trans && typeof message.trans.length === "number" || $util.isString(message.trans)))
                    return "trans: buffer expected";
            return null;
        };

        /**
         * Creates an UpdateAssetReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof asset.UpdateAssetReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {asset.UpdateAssetReq} UpdateAssetReq
         */
        UpdateAssetReq.fromObject = function fromObject(object) {
            if (object instanceof $root.asset.UpdateAssetReq)
                return object;
            var message = new $root.asset.UpdateAssetReq();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.op) {
                if (!Array.isArray(object.op))
                    throw TypeError(".asset.UpdateAssetReq.op: array expected");
                message.op = [];
                for (var i = 0; i < object.op.length; ++i) {
                    if (typeof object.op[i] !== "object")
                        throw TypeError(".asset.UpdateAssetReq.op: object expected");
                    message.op[i] = $root.asset.Oparition.fromObject(object.op[i]);
                }
            }
            if (object.gameinfo != null) {
                if (typeof object.gameinfo !== "object")
                    throw TypeError(".asset.UpdateAssetReq.gameinfo: object expected");
                message.gameinfo = $root.asset.GameInfo.fromObject(object.gameinfo);
            }
            if (object.ext != null)
                message.ext = String(object.ext);
            if (object.optime != null)
                if ($util.Long)
                    (message.optime = $util.Long.fromValue(object.optime)).unsigned = true;
                else if (typeof object.optime === "string")
                    message.optime = parseInt(object.optime, 10);
                else if (typeof object.optime === "number")
                    message.optime = object.optime;
                else if (typeof object.optime === "object")
                    message.optime = new $util.LongBits(object.optime.low >>> 0, object.optime.high >>> 0).toNumber(true);
            if (object.trans != null)
                if (typeof object.trans === "string")
                    $util.base64.decode(object.trans, message.trans = $util.newBuffer($util.base64.length(object.trans)), 0);
                else if (object.trans.length)
                    message.trans = object.trans;
            return message;
        };

        /**
         * Creates a plain object from an UpdateAssetReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof asset.UpdateAssetReq
         * @static
         * @param {asset.UpdateAssetReq} message UpdateAssetReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateAssetReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.op = [];
            if (options.defaults) {
                object.uid = 0;
                object.gameinfo = null;
                object.ext = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.optime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.optime = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.trans = "";
                else {
                    object.trans = [];
                    if (options.bytes !== Array)
                        object.trans = $util.newBuffer(object.trans);
                }
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.op && message.op.length) {
                object.op = [];
                for (var j = 0; j < message.op.length; ++j)
                    object.op[j] = $root.asset.Oparition.toObject(message.op[j], options);
            }
            if (message.gameinfo != null && message.hasOwnProperty("gameinfo"))
                object.gameinfo = $root.asset.GameInfo.toObject(message.gameinfo, options);
            if (message.ext != null && message.hasOwnProperty("ext"))
                object.ext = message.ext;
            if (message.optime != null && message.hasOwnProperty("optime"))
                if (typeof message.optime === "number")
                    object.optime = options.longs === String ? String(message.optime) : message.optime;
                else
                    object.optime = options.longs === String ? $util.Long.prototype.toString.call(message.optime) : options.longs === Number ? new $util.LongBits(message.optime.low >>> 0, message.optime.high >>> 0).toNumber(true) : message.optime;
            if (message.trans != null && message.hasOwnProperty("trans"))
                object.trans = options.bytes === String ? $util.base64.encode(message.trans, 0, message.trans.length) : options.bytes === Array ? Array.prototype.slice.call(message.trans) : message.trans;
            return object;
        };

        /**
         * Converts this UpdateAssetReq to JSON.
         * @function toJSON
         * @memberof asset.UpdateAssetReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateAssetReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateAssetReq;
    })();

    asset.UpdateAssetResp = (function() {

        /**
         * Properties of an UpdateAssetResp.
         * @memberof asset
         * @interface IUpdateAssetResp
         * @property {number|null} [uid] UpdateAssetResp uid
         * @property {number|null} [result] UpdateAssetResp result
         * @property {Array.<asset.IFieldValue>|null} [fieldval] UpdateAssetResp fieldval
         * @property {Uint8Array|null} [trans] UpdateAssetResp trans
         */

        /**
         * Constructs a new UpdateAssetResp.
         * @memberof asset
         * @classdesc Represents an UpdateAssetResp.
         * @implements IUpdateAssetResp
         * @constructor
         * @param {asset.IUpdateAssetResp=} [properties] Properties to set
         */
        function UpdateAssetResp(properties) {
            this.fieldval = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateAssetResp uid.
         * @member {number} uid
         * @memberof asset.UpdateAssetResp
         * @instance
         */
        UpdateAssetResp.prototype.uid = 0;

        /**
         * UpdateAssetResp result.
         * @member {number} result
         * @memberof asset.UpdateAssetResp
         * @instance
         */
        UpdateAssetResp.prototype.result = 0;

        /**
         * UpdateAssetResp fieldval.
         * @member {Array.<asset.IFieldValue>} fieldval
         * @memberof asset.UpdateAssetResp
         * @instance
         */
        UpdateAssetResp.prototype.fieldval = $util.emptyArray;

        /**
         * UpdateAssetResp trans.
         * @member {Uint8Array} trans
         * @memberof asset.UpdateAssetResp
         * @instance
         */
        UpdateAssetResp.prototype.trans = $util.newBuffer([]);

        /**
         * Creates a new UpdateAssetResp instance using the specified properties.
         * @function create
         * @memberof asset.UpdateAssetResp
         * @static
         * @param {asset.IUpdateAssetResp=} [properties] Properties to set
         * @returns {asset.UpdateAssetResp} UpdateAssetResp instance
         */
        UpdateAssetResp.create = function create(properties) {
            return new UpdateAssetResp(properties);
        };

        /**
         * Encodes the specified UpdateAssetResp message. Does not implicitly {@link asset.UpdateAssetResp.verify|verify} messages.
         * @function encode
         * @memberof asset.UpdateAssetResp
         * @static
         * @param {asset.IUpdateAssetResp} message UpdateAssetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAssetResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            if (message.fieldval != null && message.fieldval.length)
                for (var i = 0; i < message.fieldval.length; ++i)
                    $root.asset.FieldValue.encode(message.fieldval[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.trans != null && Object.hasOwnProperty.call(message, "trans"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.trans);
            return writer;
        };

        /**
         * Encodes the specified UpdateAssetResp message, length delimited. Does not implicitly {@link asset.UpdateAssetResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof asset.UpdateAssetResp
         * @static
         * @param {asset.IUpdateAssetResp} message UpdateAssetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAssetResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateAssetResp message from the specified reader or buffer.
         * @function decode
         * @memberof asset.UpdateAssetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {asset.UpdateAssetResp} UpdateAssetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAssetResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.asset.UpdateAssetResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    if (!(message.fieldval && message.fieldval.length))
                        message.fieldval = [];
                    message.fieldval.push($root.asset.FieldValue.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.trans = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateAssetResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof asset.UpdateAssetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {asset.UpdateAssetResp} UpdateAssetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAssetResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateAssetResp message.
         * @function verify
         * @memberof asset.UpdateAssetResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateAssetResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.fieldval != null && message.hasOwnProperty("fieldval")) {
                if (!Array.isArray(message.fieldval))
                    return "fieldval: array expected";
                for (var i = 0; i < message.fieldval.length; ++i) {
                    var error = $root.asset.FieldValue.verify(message.fieldval[i]);
                    if (error)
                        return "fieldval." + error;
                }
            }
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (!(message.trans && typeof message.trans.length === "number" || $util.isString(message.trans)))
                    return "trans: buffer expected";
            return null;
        };

        /**
         * Creates an UpdateAssetResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof asset.UpdateAssetResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {asset.UpdateAssetResp} UpdateAssetResp
         */
        UpdateAssetResp.fromObject = function fromObject(object) {
            if (object instanceof $root.asset.UpdateAssetResp)
                return object;
            var message = new $root.asset.UpdateAssetResp();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.result != null)
                message.result = object.result | 0;
            if (object.fieldval) {
                if (!Array.isArray(object.fieldval))
                    throw TypeError(".asset.UpdateAssetResp.fieldval: array expected");
                message.fieldval = [];
                for (var i = 0; i < object.fieldval.length; ++i) {
                    if (typeof object.fieldval[i] !== "object")
                        throw TypeError(".asset.UpdateAssetResp.fieldval: object expected");
                    message.fieldval[i] = $root.asset.FieldValue.fromObject(object.fieldval[i]);
                }
            }
            if (object.trans != null)
                if (typeof object.trans === "string")
                    $util.base64.decode(object.trans, message.trans = $util.newBuffer($util.base64.length(object.trans)), 0);
                else if (object.trans.length)
                    message.trans = object.trans;
            return message;
        };

        /**
         * Creates a plain object from an UpdateAssetResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof asset.UpdateAssetResp
         * @static
         * @param {asset.UpdateAssetResp} message UpdateAssetResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateAssetResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.fieldval = [];
            if (options.defaults) {
                object.uid = 0;
                object.result = 0;
                if (options.bytes === String)
                    object.trans = "";
                else {
                    object.trans = [];
                    if (options.bytes !== Array)
                        object.trans = $util.newBuffer(object.trans);
                }
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.fieldval && message.fieldval.length) {
                object.fieldval = [];
                for (var j = 0; j < message.fieldval.length; ++j)
                    object.fieldval[j] = $root.asset.FieldValue.toObject(message.fieldval[j], options);
            }
            if (message.trans != null && message.hasOwnProperty("trans"))
                object.trans = options.bytes === String ? $util.base64.encode(message.trans, 0, message.trans.length) : options.bytes === Array ? Array.prototype.slice.call(message.trans) : message.trans;
            return object;
        };

        /**
         * Converts this UpdateAssetResp to JSON.
         * @function toJSON
         * @memberof asset.UpdateAssetResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateAssetResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateAssetResp;
    })();

    asset.AssetFlow = (function() {

        /**
         * Properties of an AssetFlow.
         * @memberof asset
         * @interface IAssetFlow
         * @property {number|null} [uid] AssetFlow uid
         * @property {asset.IOparition|null} [op] AssetFlow op
         * @property {asset.IGameInfo|null} [gameinfo] AssetFlow gameinfo
         * @property {string|null} [ext] AssetFlow ext
         * @property {number|Long|null} [optime] AssetFlow optime
         * @property {number|null} [result] AssetFlow result
         * @property {Array.<asset.IFieldValue>|null} [fieldval] AssetFlow fieldval
         */

        /**
         * Constructs a new AssetFlow.
         * @memberof asset
         * @classdesc Represents an AssetFlow.
         * @implements IAssetFlow
         * @constructor
         * @param {asset.IAssetFlow=} [properties] Properties to set
         */
        function AssetFlow(properties) {
            this.fieldval = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetFlow uid.
         * @member {number} uid
         * @memberof asset.AssetFlow
         * @instance
         */
        AssetFlow.prototype.uid = 0;

        /**
         * AssetFlow op.
         * @member {asset.IOparition|null|undefined} op
         * @memberof asset.AssetFlow
         * @instance
         */
        AssetFlow.prototype.op = null;

        /**
         * AssetFlow gameinfo.
         * @member {asset.IGameInfo|null|undefined} gameinfo
         * @memberof asset.AssetFlow
         * @instance
         */
        AssetFlow.prototype.gameinfo = null;

        /**
         * AssetFlow ext.
         * @member {string} ext
         * @memberof asset.AssetFlow
         * @instance
         */
        AssetFlow.prototype.ext = "";

        /**
         * AssetFlow optime.
         * @member {number|Long} optime
         * @memberof asset.AssetFlow
         * @instance
         */
        AssetFlow.prototype.optime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * AssetFlow result.
         * @member {number} result
         * @memberof asset.AssetFlow
         * @instance
         */
        AssetFlow.prototype.result = 0;

        /**
         * AssetFlow fieldval.
         * @member {Array.<asset.IFieldValue>} fieldval
         * @memberof asset.AssetFlow
         * @instance
         */
        AssetFlow.prototype.fieldval = $util.emptyArray;

        /**
         * Creates a new AssetFlow instance using the specified properties.
         * @function create
         * @memberof asset.AssetFlow
         * @static
         * @param {asset.IAssetFlow=} [properties] Properties to set
         * @returns {asset.AssetFlow} AssetFlow instance
         */
        AssetFlow.create = function create(properties) {
            return new AssetFlow(properties);
        };

        /**
         * Encodes the specified AssetFlow message. Does not implicitly {@link asset.AssetFlow.verify|verify} messages.
         * @function encode
         * @memberof asset.AssetFlow
         * @static
         * @param {asset.IAssetFlow} message AssetFlow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetFlow.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.op != null && Object.hasOwnProperty.call(message, "op"))
                $root.asset.Oparition.encode(message.op, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.gameinfo != null && Object.hasOwnProperty.call(message, "gameinfo"))
                $root.asset.GameInfo.encode(message.gameinfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.ext != null && Object.hasOwnProperty.call(message, "ext"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ext);
            if (message.optime != null && Object.hasOwnProperty.call(message, "optime"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.optime);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.result);
            if (message.fieldval != null && message.fieldval.length)
                for (var i = 0; i < message.fieldval.length; ++i)
                    $root.asset.FieldValue.encode(message.fieldval[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AssetFlow message, length delimited. Does not implicitly {@link asset.AssetFlow.verify|verify} messages.
         * @function encodeDelimited
         * @memberof asset.AssetFlow
         * @static
         * @param {asset.IAssetFlow} message AssetFlow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetFlow.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetFlow message from the specified reader or buffer.
         * @function decode
         * @memberof asset.AssetFlow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {asset.AssetFlow} AssetFlow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetFlow.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.asset.AssetFlow();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.op = $root.asset.Oparition.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gameinfo = $root.asset.GameInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ext = reader.string();
                    break;
                case 5:
                    message.optime = reader.uint64();
                    break;
                case 6:
                    message.result = reader.int32();
                    break;
                case 7:
                    if (!(message.fieldval && message.fieldval.length))
                        message.fieldval = [];
                    message.fieldval.push($root.asset.FieldValue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetFlow message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof asset.AssetFlow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {asset.AssetFlow} AssetFlow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetFlow.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetFlow message.
         * @function verify
         * @memberof asset.AssetFlow
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetFlow.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.op != null && message.hasOwnProperty("op")) {
                var error = $root.asset.Oparition.verify(message.op);
                if (error)
                    return "op." + error;
            }
            if (message.gameinfo != null && message.hasOwnProperty("gameinfo")) {
                var error = $root.asset.GameInfo.verify(message.gameinfo);
                if (error)
                    return "gameinfo." + error;
            }
            if (message.ext != null && message.hasOwnProperty("ext"))
                if (!$util.isString(message.ext))
                    return "ext: string expected";
            if (message.optime != null && message.hasOwnProperty("optime"))
                if (!$util.isInteger(message.optime) && !(message.optime && $util.isInteger(message.optime.low) && $util.isInteger(message.optime.high)))
                    return "optime: integer|Long expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.fieldval != null && message.hasOwnProperty("fieldval")) {
                if (!Array.isArray(message.fieldval))
                    return "fieldval: array expected";
                for (var i = 0; i < message.fieldval.length; ++i) {
                    var error = $root.asset.FieldValue.verify(message.fieldval[i]);
                    if (error)
                        return "fieldval." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AssetFlow message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof asset.AssetFlow
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {asset.AssetFlow} AssetFlow
         */
        AssetFlow.fromObject = function fromObject(object) {
            if (object instanceof $root.asset.AssetFlow)
                return object;
            var message = new $root.asset.AssetFlow();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.op != null) {
                if (typeof object.op !== "object")
                    throw TypeError(".asset.AssetFlow.op: object expected");
                message.op = $root.asset.Oparition.fromObject(object.op);
            }
            if (object.gameinfo != null) {
                if (typeof object.gameinfo !== "object")
                    throw TypeError(".asset.AssetFlow.gameinfo: object expected");
                message.gameinfo = $root.asset.GameInfo.fromObject(object.gameinfo);
            }
            if (object.ext != null)
                message.ext = String(object.ext);
            if (object.optime != null)
                if ($util.Long)
                    (message.optime = $util.Long.fromValue(object.optime)).unsigned = true;
                else if (typeof object.optime === "string")
                    message.optime = parseInt(object.optime, 10);
                else if (typeof object.optime === "number")
                    message.optime = object.optime;
                else if (typeof object.optime === "object")
                    message.optime = new $util.LongBits(object.optime.low >>> 0, object.optime.high >>> 0).toNumber(true);
            if (object.result != null)
                message.result = object.result | 0;
            if (object.fieldval) {
                if (!Array.isArray(object.fieldval))
                    throw TypeError(".asset.AssetFlow.fieldval: array expected");
                message.fieldval = [];
                for (var i = 0; i < object.fieldval.length; ++i) {
                    if (typeof object.fieldval[i] !== "object")
                        throw TypeError(".asset.AssetFlow.fieldval: object expected");
                    message.fieldval[i] = $root.asset.FieldValue.fromObject(object.fieldval[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AssetFlow message. Also converts values to other types if specified.
         * @function toObject
         * @memberof asset.AssetFlow
         * @static
         * @param {asset.AssetFlow} message AssetFlow
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetFlow.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.fieldval = [];
            if (options.defaults) {
                object.uid = 0;
                object.op = null;
                object.gameinfo = null;
                object.ext = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.optime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.optime = options.longs === String ? "0" : 0;
                object.result = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.op != null && message.hasOwnProperty("op"))
                object.op = $root.asset.Oparition.toObject(message.op, options);
            if (message.gameinfo != null && message.hasOwnProperty("gameinfo"))
                object.gameinfo = $root.asset.GameInfo.toObject(message.gameinfo, options);
            if (message.ext != null && message.hasOwnProperty("ext"))
                object.ext = message.ext;
            if (message.optime != null && message.hasOwnProperty("optime"))
                if (typeof message.optime === "number")
                    object.optime = options.longs === String ? String(message.optime) : message.optime;
                else
                    object.optime = options.longs === String ? $util.Long.prototype.toString.call(message.optime) : options.longs === Number ? new $util.LongBits(message.optime.low >>> 0, message.optime.high >>> 0).toNumber(true) : message.optime;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.fieldval && message.fieldval.length) {
                object.fieldval = [];
                for (var j = 0; j < message.fieldval.length; ++j)
                    object.fieldval[j] = $root.asset.FieldValue.toObject(message.fieldval[j], options);
            }
            return object;
        };

        /**
         * Converts this AssetFlow to JSON.
         * @function toJSON
         * @memberof asset.AssetFlow
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetFlow.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetFlow;
    })();

    asset.AssetFlowPush = (function() {

        /**
         * Properties of an AssetFlowPush.
         * @memberof asset
         * @interface IAssetFlowPush
         * @property {Array.<asset.IAssetFlow>|null} [flow] AssetFlowPush flow
         */

        /**
         * Constructs a new AssetFlowPush.
         * @memberof asset
         * @classdesc Represents an AssetFlowPush.
         * @implements IAssetFlowPush
         * @constructor
         * @param {asset.IAssetFlowPush=} [properties] Properties to set
         */
        function AssetFlowPush(properties) {
            this.flow = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetFlowPush flow.
         * @member {Array.<asset.IAssetFlow>} flow
         * @memberof asset.AssetFlowPush
         * @instance
         */
        AssetFlowPush.prototype.flow = $util.emptyArray;

        /**
         * Creates a new AssetFlowPush instance using the specified properties.
         * @function create
         * @memberof asset.AssetFlowPush
         * @static
         * @param {asset.IAssetFlowPush=} [properties] Properties to set
         * @returns {asset.AssetFlowPush} AssetFlowPush instance
         */
        AssetFlowPush.create = function create(properties) {
            return new AssetFlowPush(properties);
        };

        /**
         * Encodes the specified AssetFlowPush message. Does not implicitly {@link asset.AssetFlowPush.verify|verify} messages.
         * @function encode
         * @memberof asset.AssetFlowPush
         * @static
         * @param {asset.IAssetFlowPush} message AssetFlowPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetFlowPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.flow != null && message.flow.length)
                for (var i = 0; i < message.flow.length; ++i)
                    $root.asset.AssetFlow.encode(message.flow[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AssetFlowPush message, length delimited. Does not implicitly {@link asset.AssetFlowPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof asset.AssetFlowPush
         * @static
         * @param {asset.IAssetFlowPush} message AssetFlowPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetFlowPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetFlowPush message from the specified reader or buffer.
         * @function decode
         * @memberof asset.AssetFlowPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {asset.AssetFlowPush} AssetFlowPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetFlowPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.asset.AssetFlowPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.flow && message.flow.length))
                        message.flow = [];
                    message.flow.push($root.asset.AssetFlow.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetFlowPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof asset.AssetFlowPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {asset.AssetFlowPush} AssetFlowPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetFlowPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetFlowPush message.
         * @function verify
         * @memberof asset.AssetFlowPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetFlowPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.flow != null && message.hasOwnProperty("flow")) {
                if (!Array.isArray(message.flow))
                    return "flow: array expected";
                for (var i = 0; i < message.flow.length; ++i) {
                    var error = $root.asset.AssetFlow.verify(message.flow[i]);
                    if (error)
                        return "flow." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AssetFlowPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof asset.AssetFlowPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {asset.AssetFlowPush} AssetFlowPush
         */
        AssetFlowPush.fromObject = function fromObject(object) {
            if (object instanceof $root.asset.AssetFlowPush)
                return object;
            var message = new $root.asset.AssetFlowPush();
            if (object.flow) {
                if (!Array.isArray(object.flow))
                    throw TypeError(".asset.AssetFlowPush.flow: array expected");
                message.flow = [];
                for (var i = 0; i < object.flow.length; ++i) {
                    if (typeof object.flow[i] !== "object")
                        throw TypeError(".asset.AssetFlowPush.flow: object expected");
                    message.flow[i] = $root.asset.AssetFlow.fromObject(object.flow[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AssetFlowPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof asset.AssetFlowPush
         * @static
         * @param {asset.AssetFlowPush} message AssetFlowPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetFlowPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.flow = [];
            if (message.flow && message.flow.length) {
                object.flow = [];
                for (var j = 0; j < message.flow.length; ++j)
                    object.flow[j] = $root.asset.AssetFlow.toObject(message.flow[j], options);
            }
            return object;
        };

        /**
         * Converts this AssetFlowPush to JSON.
         * @function toJSON
         * @memberof asset.AssetFlowPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetFlowPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetFlowPush;
    })();

    asset.AssetAddAccountReq = (function() {

        /**
         * Properties of an AssetAddAccountReq.
         * @memberof asset
         * @interface IAssetAddAccountReq
         * @property {number|null} [uid] AssetAddAccountReq uid
         * @property {Array.<asset.IOparition>|null} [op] AssetAddAccountReq op
         * @property {Uint8Array|null} [trans] AssetAddAccountReq trans
         */

        /**
         * Constructs a new AssetAddAccountReq.
         * @memberof asset
         * @classdesc Represents an AssetAddAccountReq.
         * @implements IAssetAddAccountReq
         * @constructor
         * @param {asset.IAssetAddAccountReq=} [properties] Properties to set
         */
        function AssetAddAccountReq(properties) {
            this.op = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetAddAccountReq uid.
         * @member {number} uid
         * @memberof asset.AssetAddAccountReq
         * @instance
         */
        AssetAddAccountReq.prototype.uid = 0;

        /**
         * AssetAddAccountReq op.
         * @member {Array.<asset.IOparition>} op
         * @memberof asset.AssetAddAccountReq
         * @instance
         */
        AssetAddAccountReq.prototype.op = $util.emptyArray;

        /**
         * AssetAddAccountReq trans.
         * @member {Uint8Array} trans
         * @memberof asset.AssetAddAccountReq
         * @instance
         */
        AssetAddAccountReq.prototype.trans = $util.newBuffer([]);

        /**
         * Creates a new AssetAddAccountReq instance using the specified properties.
         * @function create
         * @memberof asset.AssetAddAccountReq
         * @static
         * @param {asset.IAssetAddAccountReq=} [properties] Properties to set
         * @returns {asset.AssetAddAccountReq} AssetAddAccountReq instance
         */
        AssetAddAccountReq.create = function create(properties) {
            return new AssetAddAccountReq(properties);
        };

        /**
         * Encodes the specified AssetAddAccountReq message. Does not implicitly {@link asset.AssetAddAccountReq.verify|verify} messages.
         * @function encode
         * @memberof asset.AssetAddAccountReq
         * @static
         * @param {asset.IAssetAddAccountReq} message AssetAddAccountReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetAddAccountReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.op != null && message.op.length)
                for (var i = 0; i < message.op.length; ++i)
                    $root.asset.Oparition.encode(message.op[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.trans != null && Object.hasOwnProperty.call(message, "trans"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.trans);
            return writer;
        };

        /**
         * Encodes the specified AssetAddAccountReq message, length delimited. Does not implicitly {@link asset.AssetAddAccountReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof asset.AssetAddAccountReq
         * @static
         * @param {asset.IAssetAddAccountReq} message AssetAddAccountReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetAddAccountReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetAddAccountReq message from the specified reader or buffer.
         * @function decode
         * @memberof asset.AssetAddAccountReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {asset.AssetAddAccountReq} AssetAddAccountReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetAddAccountReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.asset.AssetAddAccountReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    if (!(message.op && message.op.length))
                        message.op = [];
                    message.op.push($root.asset.Oparition.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.trans = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetAddAccountReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof asset.AssetAddAccountReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {asset.AssetAddAccountReq} AssetAddAccountReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetAddAccountReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetAddAccountReq message.
         * @function verify
         * @memberof asset.AssetAddAccountReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetAddAccountReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.op != null && message.hasOwnProperty("op")) {
                if (!Array.isArray(message.op))
                    return "op: array expected";
                for (var i = 0; i < message.op.length; ++i) {
                    var error = $root.asset.Oparition.verify(message.op[i]);
                    if (error)
                        return "op." + error;
                }
            }
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (!(message.trans && typeof message.trans.length === "number" || $util.isString(message.trans)))
                    return "trans: buffer expected";
            return null;
        };

        /**
         * Creates an AssetAddAccountReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof asset.AssetAddAccountReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {asset.AssetAddAccountReq} AssetAddAccountReq
         */
        AssetAddAccountReq.fromObject = function fromObject(object) {
            if (object instanceof $root.asset.AssetAddAccountReq)
                return object;
            var message = new $root.asset.AssetAddAccountReq();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.op) {
                if (!Array.isArray(object.op))
                    throw TypeError(".asset.AssetAddAccountReq.op: array expected");
                message.op = [];
                for (var i = 0; i < object.op.length; ++i) {
                    if (typeof object.op[i] !== "object")
                        throw TypeError(".asset.AssetAddAccountReq.op: object expected");
                    message.op[i] = $root.asset.Oparition.fromObject(object.op[i]);
                }
            }
            if (object.trans != null)
                if (typeof object.trans === "string")
                    $util.base64.decode(object.trans, message.trans = $util.newBuffer($util.base64.length(object.trans)), 0);
                else if (object.trans.length)
                    message.trans = object.trans;
            return message;
        };

        /**
         * Creates a plain object from an AssetAddAccountReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof asset.AssetAddAccountReq
         * @static
         * @param {asset.AssetAddAccountReq} message AssetAddAccountReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetAddAccountReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.op = [];
            if (options.defaults) {
                object.uid = 0;
                if (options.bytes === String)
                    object.trans = "";
                else {
                    object.trans = [];
                    if (options.bytes !== Array)
                        object.trans = $util.newBuffer(object.trans);
                }
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.op && message.op.length) {
                object.op = [];
                for (var j = 0; j < message.op.length; ++j)
                    object.op[j] = $root.asset.Oparition.toObject(message.op[j], options);
            }
            if (message.trans != null && message.hasOwnProperty("trans"))
                object.trans = options.bytes === String ? $util.base64.encode(message.trans, 0, message.trans.length) : options.bytes === Array ? Array.prototype.slice.call(message.trans) : message.trans;
            return object;
        };

        /**
         * Converts this AssetAddAccountReq to JSON.
         * @function toJSON
         * @memberof asset.AssetAddAccountReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetAddAccountReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetAddAccountReq;
    })();

    asset.AssetAddAccountResp = (function() {

        /**
         * Properties of an AssetAddAccountResp.
         * @memberof asset
         * @interface IAssetAddAccountResp
         * @property {number|null} [uid] AssetAddAccountResp uid
         * @property {number|null} [result] AssetAddAccountResp result
         * @property {Array.<asset.IFieldValue>|null} [fieldval] AssetAddAccountResp fieldval
         * @property {Uint8Array|null} [trans] AssetAddAccountResp trans
         */

        /**
         * Constructs a new AssetAddAccountResp.
         * @memberof asset
         * @classdesc Represents an AssetAddAccountResp.
         * @implements IAssetAddAccountResp
         * @constructor
         * @param {asset.IAssetAddAccountResp=} [properties] Properties to set
         */
        function AssetAddAccountResp(properties) {
            this.fieldval = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetAddAccountResp uid.
         * @member {number} uid
         * @memberof asset.AssetAddAccountResp
         * @instance
         */
        AssetAddAccountResp.prototype.uid = 0;

        /**
         * AssetAddAccountResp result.
         * @member {number} result
         * @memberof asset.AssetAddAccountResp
         * @instance
         */
        AssetAddAccountResp.prototype.result = 0;

        /**
         * AssetAddAccountResp fieldval.
         * @member {Array.<asset.IFieldValue>} fieldval
         * @memberof asset.AssetAddAccountResp
         * @instance
         */
        AssetAddAccountResp.prototype.fieldval = $util.emptyArray;

        /**
         * AssetAddAccountResp trans.
         * @member {Uint8Array} trans
         * @memberof asset.AssetAddAccountResp
         * @instance
         */
        AssetAddAccountResp.prototype.trans = $util.newBuffer([]);

        /**
         * Creates a new AssetAddAccountResp instance using the specified properties.
         * @function create
         * @memberof asset.AssetAddAccountResp
         * @static
         * @param {asset.IAssetAddAccountResp=} [properties] Properties to set
         * @returns {asset.AssetAddAccountResp} AssetAddAccountResp instance
         */
        AssetAddAccountResp.create = function create(properties) {
            return new AssetAddAccountResp(properties);
        };

        /**
         * Encodes the specified AssetAddAccountResp message. Does not implicitly {@link asset.AssetAddAccountResp.verify|verify} messages.
         * @function encode
         * @memberof asset.AssetAddAccountResp
         * @static
         * @param {asset.IAssetAddAccountResp} message AssetAddAccountResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetAddAccountResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            if (message.fieldval != null && message.fieldval.length)
                for (var i = 0; i < message.fieldval.length; ++i)
                    $root.asset.FieldValue.encode(message.fieldval[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.trans != null && Object.hasOwnProperty.call(message, "trans"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.trans);
            return writer;
        };

        /**
         * Encodes the specified AssetAddAccountResp message, length delimited. Does not implicitly {@link asset.AssetAddAccountResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof asset.AssetAddAccountResp
         * @static
         * @param {asset.IAssetAddAccountResp} message AssetAddAccountResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetAddAccountResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetAddAccountResp message from the specified reader or buffer.
         * @function decode
         * @memberof asset.AssetAddAccountResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {asset.AssetAddAccountResp} AssetAddAccountResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetAddAccountResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.asset.AssetAddAccountResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    if (!(message.fieldval && message.fieldval.length))
                        message.fieldval = [];
                    message.fieldval.push($root.asset.FieldValue.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.trans = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetAddAccountResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof asset.AssetAddAccountResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {asset.AssetAddAccountResp} AssetAddAccountResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetAddAccountResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetAddAccountResp message.
         * @function verify
         * @memberof asset.AssetAddAccountResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetAddAccountResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.fieldval != null && message.hasOwnProperty("fieldval")) {
                if (!Array.isArray(message.fieldval))
                    return "fieldval: array expected";
                for (var i = 0; i < message.fieldval.length; ++i) {
                    var error = $root.asset.FieldValue.verify(message.fieldval[i]);
                    if (error)
                        return "fieldval." + error;
                }
            }
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (!(message.trans && typeof message.trans.length === "number" || $util.isString(message.trans)))
                    return "trans: buffer expected";
            return null;
        };

        /**
         * Creates an AssetAddAccountResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof asset.AssetAddAccountResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {asset.AssetAddAccountResp} AssetAddAccountResp
         */
        AssetAddAccountResp.fromObject = function fromObject(object) {
            if (object instanceof $root.asset.AssetAddAccountResp)
                return object;
            var message = new $root.asset.AssetAddAccountResp();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.result != null)
                message.result = object.result | 0;
            if (object.fieldval) {
                if (!Array.isArray(object.fieldval))
                    throw TypeError(".asset.AssetAddAccountResp.fieldval: array expected");
                message.fieldval = [];
                for (var i = 0; i < object.fieldval.length; ++i) {
                    if (typeof object.fieldval[i] !== "object")
                        throw TypeError(".asset.AssetAddAccountResp.fieldval: object expected");
                    message.fieldval[i] = $root.asset.FieldValue.fromObject(object.fieldval[i]);
                }
            }
            if (object.trans != null)
                if (typeof object.trans === "string")
                    $util.base64.decode(object.trans, message.trans = $util.newBuffer($util.base64.length(object.trans)), 0);
                else if (object.trans.length)
                    message.trans = object.trans;
            return message;
        };

        /**
         * Creates a plain object from an AssetAddAccountResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof asset.AssetAddAccountResp
         * @static
         * @param {asset.AssetAddAccountResp} message AssetAddAccountResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetAddAccountResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.fieldval = [];
            if (options.defaults) {
                object.uid = 0;
                object.result = 0;
                if (options.bytes === String)
                    object.trans = "";
                else {
                    object.trans = [];
                    if (options.bytes !== Array)
                        object.trans = $util.newBuffer(object.trans);
                }
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.fieldval && message.fieldval.length) {
                object.fieldval = [];
                for (var j = 0; j < message.fieldval.length; ++j)
                    object.fieldval[j] = $root.asset.FieldValue.toObject(message.fieldval[j], options);
            }
            if (message.trans != null && message.hasOwnProperty("trans"))
                object.trans = options.bytes === String ? $util.base64.encode(message.trans, 0, message.trans.length) : options.bytes === Array ? Array.prototype.slice.call(message.trans) : message.trans;
            return object;
        };

        /**
         * Converts this AssetAddAccountResp to JSON.
         * @function toJSON
         * @memberof asset.AssetAddAccountResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetAddAccountResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetAddAccountResp;
    })();

    return asset;
})();

$root.agent = (function() {

    /**
     * Namespace agent.
     * @exports agent
     * @namespace
     */
    var agent = {};

    /**
     * AGENT_CMD enum.
     * @name agent.AGENT_CMD
     * @enum {number}
     * @property {number} AGENT_CMD_NONE=0 AGENT_CMD_NONE value
     * @property {number} AGENT_CMD_HEART_BEAT=1600 AGENT_CMD_HEART_BEAT value
     * @property {number} AGENT_CMD_KICK=1601 AGENT_CMD_KICK value
     */
    agent.AGENT_CMD = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AGENT_CMD_NONE"] = 0;
        values[valuesById[1600] = "AGENT_CMD_HEART_BEAT"] = 1600;
        values[valuesById[1601] = "AGENT_CMD_KICK"] = 1601;
        return values;
    })();

    agent.KickPush = (function() {

        /**
         * Properties of a KickPush.
         * @memberof agent
         * @interface IKickPush
         * @property {number|null} [uid] KickPush uid
         * @property {number|null} [result] KickPush result
         */

        /**
         * Constructs a new KickPush.
         * @memberof agent
         * @classdesc Represents a KickPush.
         * @implements IKickPush
         * @constructor
         * @param {agent.IKickPush=} [properties] Properties to set
         */
        function KickPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickPush uid.
         * @member {number} uid
         * @memberof agent.KickPush
         * @instance
         */
        KickPush.prototype.uid = 0;

        /**
         * KickPush result.
         * @member {number} result
         * @memberof agent.KickPush
         * @instance
         */
        KickPush.prototype.result = 0;

        /**
         * Creates a new KickPush instance using the specified properties.
         * @function create
         * @memberof agent.KickPush
         * @static
         * @param {agent.IKickPush=} [properties] Properties to set
         * @returns {agent.KickPush} KickPush instance
         */
        KickPush.create = function create(properties) {
            return new KickPush(properties);
        };

        /**
         * Encodes the specified KickPush message. Does not implicitly {@link agent.KickPush.verify|verify} messages.
         * @function encode
         * @memberof agent.KickPush
         * @static
         * @param {agent.IKickPush} message KickPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified KickPush message, length delimited. Does not implicitly {@link agent.KickPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof agent.KickPush
         * @static
         * @param {agent.IKickPush} message KickPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickPush message from the specified reader or buffer.
         * @function decode
         * @memberof agent.KickPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {agent.KickPush} KickPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agent.KickPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KickPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof agent.KickPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {agent.KickPush} KickPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickPush message.
         * @function verify
         * @memberof agent.KickPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            return null;
        };

        /**
         * Creates a KickPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof agent.KickPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {agent.KickPush} KickPush
         */
        KickPush.fromObject = function fromObject(object) {
            if (object instanceof $root.agent.KickPush)
                return object;
            var message = new $root.agent.KickPush();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.result != null)
                message.result = object.result | 0;
            return message;
        };

        /**
         * Creates a plain object from a KickPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof agent.KickPush
         * @static
         * @param {agent.KickPush} message KickPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.result = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            return object;
        };

        /**
         * Converts this KickPush to JSON.
         * @function toJSON
         * @memberof agent.KickPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KickPush;
    })();

    agent.HeartBeat = (function() {

        /**
         * Properties of a HeartBeat.
         * @memberof agent
         * @interface IHeartBeat
         * @property {number|Long|null} [trans] HeartBeat trans
         * @property {number|Long|null} [srvt] HeartBeat srvt
         */

        /**
         * Constructs a new HeartBeat.
         * @memberof agent
         * @classdesc Represents a HeartBeat.
         * @implements IHeartBeat
         * @constructor
         * @param {agent.IHeartBeat=} [properties] Properties to set
         */
        function HeartBeat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartBeat trans.
         * @member {number|Long} trans
         * @memberof agent.HeartBeat
         * @instance
         */
        HeartBeat.prototype.trans = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * HeartBeat srvt.
         * @member {number|Long} srvt
         * @memberof agent.HeartBeat
         * @instance
         */
        HeartBeat.prototype.srvt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new HeartBeat instance using the specified properties.
         * @function create
         * @memberof agent.HeartBeat
         * @static
         * @param {agent.IHeartBeat=} [properties] Properties to set
         * @returns {agent.HeartBeat} HeartBeat instance
         */
        HeartBeat.create = function create(properties) {
            return new HeartBeat(properties);
        };

        /**
         * Encodes the specified HeartBeat message. Does not implicitly {@link agent.HeartBeat.verify|verify} messages.
         * @function encode
         * @memberof agent.HeartBeat
         * @static
         * @param {agent.IHeartBeat} message HeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.trans != null && Object.hasOwnProperty.call(message, "trans"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.trans);
            if (message.srvt != null && Object.hasOwnProperty.call(message, "srvt"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.srvt);
            return writer;
        };

        /**
         * Encodes the specified HeartBeat message, length delimited. Does not implicitly {@link agent.HeartBeat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof agent.HeartBeat
         * @static
         * @param {agent.IHeartBeat} message HeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeat message from the specified reader or buffer.
         * @function decode
         * @memberof agent.HeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {agent.HeartBeat} HeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agent.HeartBeat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.trans = reader.uint64();
                    break;
                case 2:
                    message.srvt = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartBeat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof agent.HeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {agent.HeartBeat} HeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeat message.
         * @function verify
         * @memberof agent.HeartBeat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (!$util.isInteger(message.trans) && !(message.trans && $util.isInteger(message.trans.low) && $util.isInteger(message.trans.high)))
                    return "trans: integer|Long expected";
            if (message.srvt != null && message.hasOwnProperty("srvt"))
                if (!$util.isInteger(message.srvt) && !(message.srvt && $util.isInteger(message.srvt.low) && $util.isInteger(message.srvt.high)))
                    return "srvt: integer|Long expected";
            return null;
        };

        /**
         * Creates a HeartBeat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof agent.HeartBeat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {agent.HeartBeat} HeartBeat
         */
        HeartBeat.fromObject = function fromObject(object) {
            if (object instanceof $root.agent.HeartBeat)
                return object;
            var message = new $root.agent.HeartBeat();
            if (object.trans != null)
                if ($util.Long)
                    (message.trans = $util.Long.fromValue(object.trans)).unsigned = true;
                else if (typeof object.trans === "string")
                    message.trans = parseInt(object.trans, 10);
                else if (typeof object.trans === "number")
                    message.trans = object.trans;
                else if (typeof object.trans === "object")
                    message.trans = new $util.LongBits(object.trans.low >>> 0, object.trans.high >>> 0).toNumber(true);
            if (object.srvt != null)
                if ($util.Long)
                    (message.srvt = $util.Long.fromValue(object.srvt)).unsigned = true;
                else if (typeof object.srvt === "string")
                    message.srvt = parseInt(object.srvt, 10);
                else if (typeof object.srvt === "number")
                    message.srvt = object.srvt;
                else if (typeof object.srvt === "object")
                    message.srvt = new $util.LongBits(object.srvt.low >>> 0, object.srvt.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a HeartBeat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof agent.HeartBeat
         * @static
         * @param {agent.HeartBeat} message HeartBeat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartBeat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.trans = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.trans = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.srvt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.srvt = options.longs === String ? "0" : 0;
            }
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (typeof message.trans === "number")
                    object.trans = options.longs === String ? String(message.trans) : message.trans;
                else
                    object.trans = options.longs === String ? $util.Long.prototype.toString.call(message.trans) : options.longs === Number ? new $util.LongBits(message.trans.low >>> 0, message.trans.high >>> 0).toNumber(true) : message.trans;
            if (message.srvt != null && message.hasOwnProperty("srvt"))
                if (typeof message.srvt === "number")
                    object.srvt = options.longs === String ? String(message.srvt) : message.srvt;
                else
                    object.srvt = options.longs === String ? $util.Long.prototype.toString.call(message.srvt) : options.longs === Number ? new $util.LongBits(message.srvt.low >>> 0, message.srvt.high >>> 0).toNumber(true) : message.srvt;
            return object;
        };

        /**
         * Converts this HeartBeat to JSON.
         * @function toJSON
         * @memberof agent.HeartBeat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartBeat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartBeat;
    })();

    return agent;
})();

$root.AgentBackEnd = (function() {

    /**
     * Namespace AgentBackEnd.
     * @exports AgentBackEnd
     * @namespace
     */
    var AgentBackEnd = {};

    /**
     * AGENT_BACKEND_INFO_SUB_MSG_ID enum.
     * @name AgentBackEnd.AGENT_BACKEND_INFO_SUB_MSG_ID
     * @enum {number}
     * @property {number} AGENT_BACKEND_MSG_ID_NULL=0 AGENT_BACKEND_MSG_ID_NULL value
     * @property {number} AGENT_BACKEND_MSG_ID_MIN=1650 AGENT_BACKEND_MSG_ID_MIN value
     * @property {number} AGENT_BACKEND_MSG_ID_REFRESH_CONFIG=1651 AGENT_BACKEND_MSG_ID_REFRESH_CONFIG value
     * @property {number} AGENT_BACKEND_MSG_ID_REPORT_DATA=1652 AGENT_BACKEND_MSG_ID_REPORT_DATA value
     * @property {number} AGENT_BACKEND_MSG_ID_SERVER_RETIRE=1653 AGENT_BACKEND_MSG_ID_SERVER_RETIRE value
     * @property {number} AGENT_BACKEND_MSG_ID_REPORT_KOL=1654 AGENT_BACKEND_MSG_ID_REPORT_KOL value
     * @property {number} RANK_MSG_ID_MAX=1700 RANK_MSG_ID_MAX value
     */
    AgentBackEnd.AGENT_BACKEND_INFO_SUB_MSG_ID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AGENT_BACKEND_MSG_ID_NULL"] = 0;
        values[valuesById[1650] = "AGENT_BACKEND_MSG_ID_MIN"] = 1650;
        values[valuesById[1651] = "AGENT_BACKEND_MSG_ID_REFRESH_CONFIG"] = 1651;
        values[valuesById[1652] = "AGENT_BACKEND_MSG_ID_REPORT_DATA"] = 1652;
        values[valuesById[1653] = "AGENT_BACKEND_MSG_ID_SERVER_RETIRE"] = 1653;
        values[valuesById[1654] = "AGENT_BACKEND_MSG_ID_REPORT_KOL"] = 1654;
        values[valuesById[1700] = "RANK_MSG_ID_MAX"] = 1700;
        return values;
    })();

    /**
     * SERVER_TYPE enum.
     * @name AgentBackEnd.SERVER_TYPE
     * @enum {number}
     * @property {number} SERVER_TYPE_NONE=0 SERVER_TYPE_NONE value
     * @property {number} SERVER_TYPE_GAME_PLAYER=1 SERVER_TYPE_GAME_PLAYER value
     * @property {number} SERVER_TYPE_AGENT=2 SERVER_TYPE_AGENT value
     * @property {number} SERVER_TYPE_ALLOCSERVER=3 SERVER_TYPE_ALLOCSERVER value
     * @property {number} SERVER_TYPE_ONLINE=4 SERVER_TYPE_ONLINE value
     * @property {number} SERVER_TYPE_ROOMSERVER=5 SERVER_TYPE_ROOMSERVER value
     * @property {number} SERVER_TYPE_MASTER=6 SERVER_TYPE_MASTER value
     * @property {number} SERVER_TYPE_ASSET=7 SERVER_TYPE_ASSET value
     * @property {number} SERVER_TYPE_DB_UPDATE=8 SERVER_TYPE_DB_UPDATE value
     * @property {number} SERVER_TYPE_USERINFO_CACHE=9 SERVER_TYPE_USERINFO_CACHE value
     * @property {number} SERVER_TYPE_PHP_AGENT=10 SERVER_TYPE_PHP_AGENT value
     * @property {number} SERVER_TYPE_ACCOUNT=11 SERVER_TYPE_ACCOUNT value
     * @property {number} SERVER_TYPE_DISPATCH=12 SERVER_TYPE_DISPATCH value
     * @property {number} SERVER_TYPE_RANK=13 SERVER_TYPE_RANK value
     * @property {number} SERVER_TYPE_SERVICE_MANAGER=14 SERVER_TYPE_SERVICE_MANAGER value
     * @property {number} SERVER_TYPE_BRIDGE_PROXY=16 SERVER_TYPE_BRIDGE_PROXY value
     * @property {number} SERVER_TYPE_ACTIVITY=18 SERVER_TYPE_ACTIVITY value
     * @property {number} SERVER_TYPE_PHP=19 SERVER_TYPE_PHP value
     */
    AgentBackEnd.SERVER_TYPE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SERVER_TYPE_NONE"] = 0;
        values[valuesById[1] = "SERVER_TYPE_GAME_PLAYER"] = 1;
        values[valuesById[2] = "SERVER_TYPE_AGENT"] = 2;
        values[valuesById[3] = "SERVER_TYPE_ALLOCSERVER"] = 3;
        values[valuesById[4] = "SERVER_TYPE_ONLINE"] = 4;
        values[valuesById[5] = "SERVER_TYPE_ROOMSERVER"] = 5;
        values[valuesById[6] = "SERVER_TYPE_MASTER"] = 6;
        values[valuesById[7] = "SERVER_TYPE_ASSET"] = 7;
        values[valuesById[8] = "SERVER_TYPE_DB_UPDATE"] = 8;
        values[valuesById[9] = "SERVER_TYPE_USERINFO_CACHE"] = 9;
        values[valuesById[10] = "SERVER_TYPE_PHP_AGENT"] = 10;
        values[valuesById[11] = "SERVER_TYPE_ACCOUNT"] = 11;
        values[valuesById[12] = "SERVER_TYPE_DISPATCH"] = 12;
        values[valuesById[13] = "SERVER_TYPE_RANK"] = 13;
        values[valuesById[14] = "SERVER_TYPE_SERVICE_MANAGER"] = 14;
        values[valuesById[16] = "SERVER_TYPE_BRIDGE_PROXY"] = 16;
        values[valuesById[18] = "SERVER_TYPE_ACTIVITY"] = 18;
        values[valuesById[19] = "SERVER_TYPE_PHP"] = 19;
        return values;
    })();

    /**
     * OP enum.
     * @name AgentBackEnd.OP
     * @enum {number}
     * @property {number} OP_NONE=0 OP_NONE value
     * @property {number} OP_UPDATE=1 OP_UPDATE value
     * @property {number} OP_ADD=2 OP_ADD value
     * @property {number} OP_DEL=3 OP_DEL value
     */
    AgentBackEnd.OP = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OP_NONE"] = 0;
        values[valuesById[1] = "OP_UPDATE"] = 1;
        values[valuesById[2] = "OP_ADD"] = 2;
        values[valuesById[3] = "OP_DEL"] = 3;
        return values;
    })();

    AgentBackEnd.ConfigItem = (function() {

        /**
         * Properties of a ConfigItem.
         * @memberof AgentBackEnd
         * @interface IConfigItem
         * @property {string|null} [configname] ConfigItem configname
         * @property {AgentBackEnd.OP|null} [operation] ConfigItem operation
         * @property {string|null} [config] ConfigItem config
         * @property {string|null} [sqlpath] ConfigItem sqlpath
         * @property {string|null} [redispath] ConfigItem redispath
         */

        /**
         * Constructs a new ConfigItem.
         * @memberof AgentBackEnd
         * @classdesc Represents a ConfigItem.
         * @implements IConfigItem
         * @constructor
         * @param {AgentBackEnd.IConfigItem=} [properties] Properties to set
         */
        function ConfigItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConfigItem configname.
         * @member {string} configname
         * @memberof AgentBackEnd.ConfigItem
         * @instance
         */
        ConfigItem.prototype.configname = "";

        /**
         * ConfigItem operation.
         * @member {AgentBackEnd.OP} operation
         * @memberof AgentBackEnd.ConfigItem
         * @instance
         */
        ConfigItem.prototype.operation = 0;

        /**
         * ConfigItem config.
         * @member {string} config
         * @memberof AgentBackEnd.ConfigItem
         * @instance
         */
        ConfigItem.prototype.config = "";

        /**
         * ConfigItem sqlpath.
         * @member {string} sqlpath
         * @memberof AgentBackEnd.ConfigItem
         * @instance
         */
        ConfigItem.prototype.sqlpath = "";

        /**
         * ConfigItem redispath.
         * @member {string} redispath
         * @memberof AgentBackEnd.ConfigItem
         * @instance
         */
        ConfigItem.prototype.redispath = "";

        /**
         * Creates a new ConfigItem instance using the specified properties.
         * @function create
         * @memberof AgentBackEnd.ConfigItem
         * @static
         * @param {AgentBackEnd.IConfigItem=} [properties] Properties to set
         * @returns {AgentBackEnd.ConfigItem} ConfigItem instance
         */
        ConfigItem.create = function create(properties) {
            return new ConfigItem(properties);
        };

        /**
         * Encodes the specified ConfigItem message. Does not implicitly {@link AgentBackEnd.ConfigItem.verify|verify} messages.
         * @function encode
         * @memberof AgentBackEnd.ConfigItem
         * @static
         * @param {AgentBackEnd.IConfigItem} message ConfigItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConfigItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.configname != null && Object.hasOwnProperty.call(message, "configname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.configname);
            if (message.operation != null && Object.hasOwnProperty.call(message, "operation"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.operation);
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.config);
            if (message.sqlpath != null && Object.hasOwnProperty.call(message, "sqlpath"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sqlpath);
            if (message.redispath != null && Object.hasOwnProperty.call(message, "redispath"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.redispath);
            return writer;
        };

        /**
         * Encodes the specified ConfigItem message, length delimited. Does not implicitly {@link AgentBackEnd.ConfigItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AgentBackEnd.ConfigItem
         * @static
         * @param {AgentBackEnd.IConfigItem} message ConfigItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConfigItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConfigItem message from the specified reader or buffer.
         * @function decode
         * @memberof AgentBackEnd.ConfigItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AgentBackEnd.ConfigItem} ConfigItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConfigItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AgentBackEnd.ConfigItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.configname = reader.string();
                    break;
                case 2:
                    message.operation = reader.int32();
                    break;
                case 3:
                    message.config = reader.string();
                    break;
                case 4:
                    message.sqlpath = reader.string();
                    break;
                case 5:
                    message.redispath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConfigItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AgentBackEnd.ConfigItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AgentBackEnd.ConfigItem} ConfigItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConfigItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConfigItem message.
         * @function verify
         * @memberof AgentBackEnd.ConfigItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConfigItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.configname != null && message.hasOwnProperty("configname"))
                if (!$util.isString(message.configname))
                    return "configname: string expected";
            if (message.operation != null && message.hasOwnProperty("operation"))
                switch (message.operation) {
                default:
                    return "operation: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.config != null && message.hasOwnProperty("config"))
                if (!$util.isString(message.config))
                    return "config: string expected";
            if (message.sqlpath != null && message.hasOwnProperty("sqlpath"))
                if (!$util.isString(message.sqlpath))
                    return "sqlpath: string expected";
            if (message.redispath != null && message.hasOwnProperty("redispath"))
                if (!$util.isString(message.redispath))
                    return "redispath: string expected";
            return null;
        };

        /**
         * Creates a ConfigItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AgentBackEnd.ConfigItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AgentBackEnd.ConfigItem} ConfigItem
         */
        ConfigItem.fromObject = function fromObject(object) {
            if (object instanceof $root.AgentBackEnd.ConfigItem)
                return object;
            var message = new $root.AgentBackEnd.ConfigItem();
            if (object.configname != null)
                message.configname = String(object.configname);
            switch (object.operation) {
            case "OP_NONE":
            case 0:
                message.operation = 0;
                break;
            case "OP_UPDATE":
            case 1:
                message.operation = 1;
                break;
            case "OP_ADD":
            case 2:
                message.operation = 2;
                break;
            case "OP_DEL":
            case 3:
                message.operation = 3;
                break;
            }
            if (object.config != null)
                message.config = String(object.config);
            if (object.sqlpath != null)
                message.sqlpath = String(object.sqlpath);
            if (object.redispath != null)
                message.redispath = String(object.redispath);
            return message;
        };

        /**
         * Creates a plain object from a ConfigItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AgentBackEnd.ConfigItem
         * @static
         * @param {AgentBackEnd.ConfigItem} message ConfigItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConfigItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.configname = "";
                object.operation = options.enums === String ? "OP_NONE" : 0;
                object.config = "";
                object.sqlpath = "";
                object.redispath = "";
            }
            if (message.configname != null && message.hasOwnProperty("configname"))
                object.configname = message.configname;
            if (message.operation != null && message.hasOwnProperty("operation"))
                object.operation = options.enums === String ? $root.AgentBackEnd.OP[message.operation] : message.operation;
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = message.config;
            if (message.sqlpath != null && message.hasOwnProperty("sqlpath"))
                object.sqlpath = message.sqlpath;
            if (message.redispath != null && message.hasOwnProperty("redispath"))
                object.redispath = message.redispath;
            return object;
        };

        /**
         * Converts this ConfigItem to JSON.
         * @function toJSON
         * @memberof AgentBackEnd.ConfigItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConfigItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConfigItem;
    })();

    AgentBackEnd.RefreshConfigNotify = (function() {

        /**
         * Properties of a RefreshConfigNotify.
         * @memberof AgentBackEnd
         * @interface IRefreshConfigNotify
         * @property {Array.<AgentBackEnd.IConfigItem>|null} [config] RefreshConfigNotify config
         */

        /**
         * Constructs a new RefreshConfigNotify.
         * @memberof AgentBackEnd
         * @classdesc Represents a RefreshConfigNotify.
         * @implements IRefreshConfigNotify
         * @constructor
         * @param {AgentBackEnd.IRefreshConfigNotify=} [properties] Properties to set
         */
        function RefreshConfigNotify(properties) {
            this.config = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RefreshConfigNotify config.
         * @member {Array.<AgentBackEnd.IConfigItem>} config
         * @memberof AgentBackEnd.RefreshConfigNotify
         * @instance
         */
        RefreshConfigNotify.prototype.config = $util.emptyArray;

        /**
         * Creates a new RefreshConfigNotify instance using the specified properties.
         * @function create
         * @memberof AgentBackEnd.RefreshConfigNotify
         * @static
         * @param {AgentBackEnd.IRefreshConfigNotify=} [properties] Properties to set
         * @returns {AgentBackEnd.RefreshConfigNotify} RefreshConfigNotify instance
         */
        RefreshConfigNotify.create = function create(properties) {
            return new RefreshConfigNotify(properties);
        };

        /**
         * Encodes the specified RefreshConfigNotify message. Does not implicitly {@link AgentBackEnd.RefreshConfigNotify.verify|verify} messages.
         * @function encode
         * @memberof AgentBackEnd.RefreshConfigNotify
         * @static
         * @param {AgentBackEnd.IRefreshConfigNotify} message RefreshConfigNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshConfigNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.config != null && message.config.length)
                for (var i = 0; i < message.config.length; ++i)
                    $root.AgentBackEnd.ConfigItem.encode(message.config[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RefreshConfigNotify message, length delimited. Does not implicitly {@link AgentBackEnd.RefreshConfigNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AgentBackEnd.RefreshConfigNotify
         * @static
         * @param {AgentBackEnd.IRefreshConfigNotify} message RefreshConfigNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RefreshConfigNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RefreshConfigNotify message from the specified reader or buffer.
         * @function decode
         * @memberof AgentBackEnd.RefreshConfigNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AgentBackEnd.RefreshConfigNotify} RefreshConfigNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshConfigNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AgentBackEnd.RefreshConfigNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.config && message.config.length))
                        message.config = [];
                    message.config.push($root.AgentBackEnd.ConfigItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RefreshConfigNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AgentBackEnd.RefreshConfigNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AgentBackEnd.RefreshConfigNotify} RefreshConfigNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RefreshConfigNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RefreshConfigNotify message.
         * @function verify
         * @memberof AgentBackEnd.RefreshConfigNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RefreshConfigNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.config != null && message.hasOwnProperty("config")) {
                if (!Array.isArray(message.config))
                    return "config: array expected";
                for (var i = 0; i < message.config.length; ++i) {
                    var error = $root.AgentBackEnd.ConfigItem.verify(message.config[i]);
                    if (error)
                        return "config." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RefreshConfigNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AgentBackEnd.RefreshConfigNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AgentBackEnd.RefreshConfigNotify} RefreshConfigNotify
         */
        RefreshConfigNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.AgentBackEnd.RefreshConfigNotify)
                return object;
            var message = new $root.AgentBackEnd.RefreshConfigNotify();
            if (object.config) {
                if (!Array.isArray(object.config))
                    throw TypeError(".AgentBackEnd.RefreshConfigNotify.config: array expected");
                message.config = [];
                for (var i = 0; i < object.config.length; ++i) {
                    if (typeof object.config[i] !== "object")
                        throw TypeError(".AgentBackEnd.RefreshConfigNotify.config: object expected");
                    message.config[i] = $root.AgentBackEnd.ConfigItem.fromObject(object.config[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RefreshConfigNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AgentBackEnd.RefreshConfigNotify
         * @static
         * @param {AgentBackEnd.RefreshConfigNotify} message RefreshConfigNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RefreshConfigNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.config = [];
            if (message.config && message.config.length) {
                object.config = [];
                for (var j = 0; j < message.config.length; ++j)
                    object.config[j] = $root.AgentBackEnd.ConfigItem.toObject(message.config[j], options);
            }
            return object;
        };

        /**
         * Converts this RefreshConfigNotify to JSON.
         * @function toJSON
         * @memberof AgentBackEnd.RefreshConfigNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RefreshConfigNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RefreshConfigNotify;
    })();

    AgentBackEnd.PhpReportUploadReq = (function() {

        /**
         * Properties of a PhpReportUploadReq.
         * @memberof AgentBackEnd
         * @interface IPhpReportUploadReq
         * @property {string|null} [eventType] PhpReportUploadReq eventType
         * @property {string|null} [fbid] PhpReportUploadReq fbid
         * @property {string|null} [mobile] PhpReportUploadReq mobile
         * @property {string|null} [ip] PhpReportUploadReq ip
         * @property {string|null} [fbc] PhpReportUploadReq fbc
         * @property {string|null} [fbp] PhpReportUploadReq fbp
         * @property {string|null} [ua] PhpReportUploadReq ua
         * @property {string|null} [amount] PhpReportUploadReq amount
         * @property {string|null} [order_id] PhpReportUploadReq order_id
         * @property {string|null} [device_id] PhpReportUploadReq device_id
         * @property {string|null} [pkg] PhpReportUploadReq pkg
         * @property {string|null} [uid] PhpReportUploadReq uid
         * @property {string|null} [afid] PhpReportUploadReq afid
         * @property {string|null} [renew] PhpReportUploadReq renew
         */

        /**
         * Constructs a new PhpReportUploadReq.
         * @memberof AgentBackEnd
         * @classdesc Represents a PhpReportUploadReq.
         * @implements IPhpReportUploadReq
         * @constructor
         * @param {AgentBackEnd.IPhpReportUploadReq=} [properties] Properties to set
         */
        function PhpReportUploadReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PhpReportUploadReq eventType.
         * @member {string} eventType
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @instance
         */
        PhpReportUploadReq.prototype.eventType = "";

        /**
         * PhpReportUploadReq fbid.
         * @member {string} fbid
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @instance
         */
        PhpReportUploadReq.prototype.fbid = "";

        /**
         * PhpReportUploadReq mobile.
         * @member {string} mobile
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @instance
         */
        PhpReportUploadReq.prototype.mobile = "";

        /**
         * PhpReportUploadReq ip.
         * @member {string} ip
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @instance
         */
        PhpReportUploadReq.prototype.ip = "";

        /**
         * PhpReportUploadReq fbc.
         * @member {string} fbc
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @instance
         */
        PhpReportUploadReq.prototype.fbc = "";

        /**
         * PhpReportUploadReq fbp.
         * @member {string} fbp
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @instance
         */
        PhpReportUploadReq.prototype.fbp = "";

        /**
         * PhpReportUploadReq ua.
         * @member {string} ua
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @instance
         */
        PhpReportUploadReq.prototype.ua = "";

        /**
         * PhpReportUploadReq amount.
         * @member {string} amount
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @instance
         */
        PhpReportUploadReq.prototype.amount = "";

        /**
         * PhpReportUploadReq order_id.
         * @member {string} order_id
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @instance
         */
        PhpReportUploadReq.prototype.order_id = "";

        /**
         * PhpReportUploadReq device_id.
         * @member {string} device_id
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @instance
         */
        PhpReportUploadReq.prototype.device_id = "";

        /**
         * PhpReportUploadReq pkg.
         * @member {string} pkg
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @instance
         */
        PhpReportUploadReq.prototype.pkg = "";

        /**
         * PhpReportUploadReq uid.
         * @member {string} uid
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @instance
         */
        PhpReportUploadReq.prototype.uid = "";

        /**
         * PhpReportUploadReq afid.
         * @member {string} afid
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @instance
         */
        PhpReportUploadReq.prototype.afid = "";

        /**
         * PhpReportUploadReq renew.
         * @member {string} renew
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @instance
         */
        PhpReportUploadReq.prototype.renew = "";

        /**
         * Creates a new PhpReportUploadReq instance using the specified properties.
         * @function create
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @static
         * @param {AgentBackEnd.IPhpReportUploadReq=} [properties] Properties to set
         * @returns {AgentBackEnd.PhpReportUploadReq} PhpReportUploadReq instance
         */
        PhpReportUploadReq.create = function create(properties) {
            return new PhpReportUploadReq(properties);
        };

        /**
         * Encodes the specified PhpReportUploadReq message. Does not implicitly {@link AgentBackEnd.PhpReportUploadReq.verify|verify} messages.
         * @function encode
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @static
         * @param {AgentBackEnd.IPhpReportUploadReq} message PhpReportUploadReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhpReportUploadReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventType);
            if (message.fbid != null && Object.hasOwnProperty.call(message, "fbid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.fbid);
            if (message.mobile != null && Object.hasOwnProperty.call(message, "mobile"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.mobile);
            if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ip);
            if (message.fbc != null && Object.hasOwnProperty.call(message, "fbc"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.fbc);
            if (message.fbp != null && Object.hasOwnProperty.call(message, "fbp"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.fbp);
            if (message.ua != null && Object.hasOwnProperty.call(message, "ua"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.ua);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.amount);
            if (message.order_id != null && Object.hasOwnProperty.call(message, "order_id"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.order_id);
            if (message.device_id != null && Object.hasOwnProperty.call(message, "device_id"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.device_id);
            if (message.pkg != null && Object.hasOwnProperty.call(message, "pkg"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.pkg);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.uid);
            if (message.afid != null && Object.hasOwnProperty.call(message, "afid"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.afid);
            if (message.renew != null && Object.hasOwnProperty.call(message, "renew"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.renew);
            return writer;
        };

        /**
         * Encodes the specified PhpReportUploadReq message, length delimited. Does not implicitly {@link AgentBackEnd.PhpReportUploadReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @static
         * @param {AgentBackEnd.IPhpReportUploadReq} message PhpReportUploadReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhpReportUploadReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PhpReportUploadReq message from the specified reader or buffer.
         * @function decode
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AgentBackEnd.PhpReportUploadReq} PhpReportUploadReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhpReportUploadReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AgentBackEnd.PhpReportUploadReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventType = reader.string();
                    break;
                case 2:
                    message.fbid = reader.string();
                    break;
                case 3:
                    message.mobile = reader.string();
                    break;
                case 4:
                    message.ip = reader.string();
                    break;
                case 5:
                    message.fbc = reader.string();
                    break;
                case 6:
                    message.fbp = reader.string();
                    break;
                case 7:
                    message.ua = reader.string();
                    break;
                case 8:
                    message.amount = reader.string();
                    break;
                case 9:
                    message.order_id = reader.string();
                    break;
                case 10:
                    message.device_id = reader.string();
                    break;
                case 11:
                    message.pkg = reader.string();
                    break;
                case 12:
                    message.uid = reader.string();
                    break;
                case 13:
                    message.afid = reader.string();
                    break;
                case 14:
                    message.renew = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PhpReportUploadReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AgentBackEnd.PhpReportUploadReq} PhpReportUploadReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhpReportUploadReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PhpReportUploadReq message.
         * @function verify
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PhpReportUploadReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                if (!$util.isString(message.eventType))
                    return "eventType: string expected";
            if (message.fbid != null && message.hasOwnProperty("fbid"))
                if (!$util.isString(message.fbid))
                    return "fbid: string expected";
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                if (!$util.isString(message.mobile))
                    return "mobile: string expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.fbc != null && message.hasOwnProperty("fbc"))
                if (!$util.isString(message.fbc))
                    return "fbc: string expected";
            if (message.fbp != null && message.hasOwnProperty("fbp"))
                if (!$util.isString(message.fbp))
                    return "fbp: string expected";
            if (message.ua != null && message.hasOwnProperty("ua"))
                if (!$util.isString(message.ua))
                    return "ua: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isString(message.amount))
                    return "amount: string expected";
            if (message.order_id != null && message.hasOwnProperty("order_id"))
                if (!$util.isString(message.order_id))
                    return "order_id: string expected";
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (!$util.isString(message.device_id))
                    return "device_id: string expected";
            if (message.pkg != null && message.hasOwnProperty("pkg"))
                if (!$util.isString(message.pkg))
                    return "pkg: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.afid != null && message.hasOwnProperty("afid"))
                if (!$util.isString(message.afid))
                    return "afid: string expected";
            if (message.renew != null && message.hasOwnProperty("renew"))
                if (!$util.isString(message.renew))
                    return "renew: string expected";
            return null;
        };

        /**
         * Creates a PhpReportUploadReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AgentBackEnd.PhpReportUploadReq} PhpReportUploadReq
         */
        PhpReportUploadReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AgentBackEnd.PhpReportUploadReq)
                return object;
            var message = new $root.AgentBackEnd.PhpReportUploadReq();
            if (object.eventType != null)
                message.eventType = String(object.eventType);
            if (object.fbid != null)
                message.fbid = String(object.fbid);
            if (object.mobile != null)
                message.mobile = String(object.mobile);
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.fbc != null)
                message.fbc = String(object.fbc);
            if (object.fbp != null)
                message.fbp = String(object.fbp);
            if (object.ua != null)
                message.ua = String(object.ua);
            if (object.amount != null)
                message.amount = String(object.amount);
            if (object.order_id != null)
                message.order_id = String(object.order_id);
            if (object.device_id != null)
                message.device_id = String(object.device_id);
            if (object.pkg != null)
                message.pkg = String(object.pkg);
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.afid != null)
                message.afid = String(object.afid);
            if (object.renew != null)
                message.renew = String(object.renew);
            return message;
        };

        /**
         * Creates a plain object from a PhpReportUploadReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @static
         * @param {AgentBackEnd.PhpReportUploadReq} message PhpReportUploadReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PhpReportUploadReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventType = "";
                object.fbid = "";
                object.mobile = "";
                object.ip = "";
                object.fbc = "";
                object.fbp = "";
                object.ua = "";
                object.amount = "";
                object.order_id = "";
                object.device_id = "";
                object.pkg = "";
                object.uid = "";
                object.afid = "";
                object.renew = "";
            }
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                object.eventType = message.eventType;
            if (message.fbid != null && message.hasOwnProperty("fbid"))
                object.fbid = message.fbid;
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                object.mobile = message.mobile;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.fbc != null && message.hasOwnProperty("fbc"))
                object.fbc = message.fbc;
            if (message.fbp != null && message.hasOwnProperty("fbp"))
                object.fbp = message.fbp;
            if (message.ua != null && message.hasOwnProperty("ua"))
                object.ua = message.ua;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            if (message.order_id != null && message.hasOwnProperty("order_id"))
                object.order_id = message.order_id;
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                object.device_id = message.device_id;
            if (message.pkg != null && message.hasOwnProperty("pkg"))
                object.pkg = message.pkg;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.afid != null && message.hasOwnProperty("afid"))
                object.afid = message.afid;
            if (message.renew != null && message.hasOwnProperty("renew"))
                object.renew = message.renew;
            return object;
        };

        /**
         * Converts this PhpReportUploadReq to JSON.
         * @function toJSON
         * @memberof AgentBackEnd.PhpReportUploadReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PhpReportUploadReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PhpReportUploadReq;
    })();

    AgentBackEnd.ServerRetireNotify = (function() {

        /**
         * Properties of a ServerRetireNotify.
         * @memberof AgentBackEnd
         * @interface IServerRetireNotify
         * @property {number|null} [status] ServerRetireNotify status
         * @property {number|null} [isforce] ServerRetireNotify isforce
         */

        /**
         * Constructs a new ServerRetireNotify.
         * @memberof AgentBackEnd
         * @classdesc Represents a ServerRetireNotify.
         * @implements IServerRetireNotify
         * @constructor
         * @param {AgentBackEnd.IServerRetireNotify=} [properties] Properties to set
         */
        function ServerRetireNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerRetireNotify status.
         * @member {number} status
         * @memberof AgentBackEnd.ServerRetireNotify
         * @instance
         */
        ServerRetireNotify.prototype.status = 0;

        /**
         * ServerRetireNotify isforce.
         * @member {number} isforce
         * @memberof AgentBackEnd.ServerRetireNotify
         * @instance
         */
        ServerRetireNotify.prototype.isforce = 0;

        /**
         * Creates a new ServerRetireNotify instance using the specified properties.
         * @function create
         * @memberof AgentBackEnd.ServerRetireNotify
         * @static
         * @param {AgentBackEnd.IServerRetireNotify=} [properties] Properties to set
         * @returns {AgentBackEnd.ServerRetireNotify} ServerRetireNotify instance
         */
        ServerRetireNotify.create = function create(properties) {
            return new ServerRetireNotify(properties);
        };

        /**
         * Encodes the specified ServerRetireNotify message. Does not implicitly {@link AgentBackEnd.ServerRetireNotify.verify|verify} messages.
         * @function encode
         * @memberof AgentBackEnd.ServerRetireNotify
         * @static
         * @param {AgentBackEnd.IServerRetireNotify} message ServerRetireNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerRetireNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.isforce != null && Object.hasOwnProperty.call(message, "isforce"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.isforce);
            return writer;
        };

        /**
         * Encodes the specified ServerRetireNotify message, length delimited. Does not implicitly {@link AgentBackEnd.ServerRetireNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AgentBackEnd.ServerRetireNotify
         * @static
         * @param {AgentBackEnd.IServerRetireNotify} message ServerRetireNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerRetireNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerRetireNotify message from the specified reader or buffer.
         * @function decode
         * @memberof AgentBackEnd.ServerRetireNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AgentBackEnd.ServerRetireNotify} ServerRetireNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerRetireNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AgentBackEnd.ServerRetireNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.isforce = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerRetireNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AgentBackEnd.ServerRetireNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AgentBackEnd.ServerRetireNotify} ServerRetireNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerRetireNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerRetireNotify message.
         * @function verify
         * @memberof AgentBackEnd.ServerRetireNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerRetireNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.isforce != null && message.hasOwnProperty("isforce"))
                if (!$util.isInteger(message.isforce))
                    return "isforce: integer expected";
            return null;
        };

        /**
         * Creates a ServerRetireNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AgentBackEnd.ServerRetireNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AgentBackEnd.ServerRetireNotify} ServerRetireNotify
         */
        ServerRetireNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.AgentBackEnd.ServerRetireNotify)
                return object;
            var message = new $root.AgentBackEnd.ServerRetireNotify();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.isforce != null)
                message.isforce = object.isforce | 0;
            return message;
        };

        /**
         * Creates a plain object from a ServerRetireNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AgentBackEnd.ServerRetireNotify
         * @static
         * @param {AgentBackEnd.ServerRetireNotify} message ServerRetireNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerRetireNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = 0;
                object.isforce = 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.isforce != null && message.hasOwnProperty("isforce"))
                object.isforce = message.isforce;
            return object;
        };

        /**
         * Converts this ServerRetireNotify to JSON.
         * @function toJSON
         * @memberof AgentBackEnd.ServerRetireNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerRetireNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerRetireNotify;
    })();

    AgentBackEnd.PhpReportKolReq = (function() {

        /**
         * Properties of a PhpReportKolReq.
         * @memberof AgentBackEnd
         * @interface IPhpReportKolReq
         * @property {string|null} [eventType] PhpReportKolReq eventType
         * @property {string|null} [pkg] PhpReportKolReq pkg
         * @property {string|null} [channel] PhpReportKolReq channel
         * @property {string|null} [aid] PhpReportKolReq aid
         * @property {string|null} [idfa] PhpReportKolReq idfa
         * @property {string|null} [gaid] PhpReportKolReq gaid
         * @property {string|null} [uid] PhpReportKolReq uid
         * @property {string|null} [device_id] PhpReportKolReq device_id
         * @property {string|null} [amount] PhpReportKolReq amount
         * @property {string|null} [total_amount] PhpReportKolReq total_amount
         * @property {string|null} [order_id] PhpReportKolReq order_id
         */

        /**
         * Constructs a new PhpReportKolReq.
         * @memberof AgentBackEnd
         * @classdesc Represents a PhpReportKolReq.
         * @implements IPhpReportKolReq
         * @constructor
         * @param {AgentBackEnd.IPhpReportKolReq=} [properties] Properties to set
         */
        function PhpReportKolReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PhpReportKolReq eventType.
         * @member {string} eventType
         * @memberof AgentBackEnd.PhpReportKolReq
         * @instance
         */
        PhpReportKolReq.prototype.eventType = "";

        /**
         * PhpReportKolReq pkg.
         * @member {string} pkg
         * @memberof AgentBackEnd.PhpReportKolReq
         * @instance
         */
        PhpReportKolReq.prototype.pkg = "";

        /**
         * PhpReportKolReq channel.
         * @member {string} channel
         * @memberof AgentBackEnd.PhpReportKolReq
         * @instance
         */
        PhpReportKolReq.prototype.channel = "";

        /**
         * PhpReportKolReq aid.
         * @member {string} aid
         * @memberof AgentBackEnd.PhpReportKolReq
         * @instance
         */
        PhpReportKolReq.prototype.aid = "";

        /**
         * PhpReportKolReq idfa.
         * @member {string} idfa
         * @memberof AgentBackEnd.PhpReportKolReq
         * @instance
         */
        PhpReportKolReq.prototype.idfa = "";

        /**
         * PhpReportKolReq gaid.
         * @member {string} gaid
         * @memberof AgentBackEnd.PhpReportKolReq
         * @instance
         */
        PhpReportKolReq.prototype.gaid = "";

        /**
         * PhpReportKolReq uid.
         * @member {string} uid
         * @memberof AgentBackEnd.PhpReportKolReq
         * @instance
         */
        PhpReportKolReq.prototype.uid = "";

        /**
         * PhpReportKolReq device_id.
         * @member {string} device_id
         * @memberof AgentBackEnd.PhpReportKolReq
         * @instance
         */
        PhpReportKolReq.prototype.device_id = "";

        /**
         * PhpReportKolReq amount.
         * @member {string} amount
         * @memberof AgentBackEnd.PhpReportKolReq
         * @instance
         */
        PhpReportKolReq.prototype.amount = "";

        /**
         * PhpReportKolReq total_amount.
         * @member {string} total_amount
         * @memberof AgentBackEnd.PhpReportKolReq
         * @instance
         */
        PhpReportKolReq.prototype.total_amount = "";

        /**
         * PhpReportKolReq order_id.
         * @member {string} order_id
         * @memberof AgentBackEnd.PhpReportKolReq
         * @instance
         */
        PhpReportKolReq.prototype.order_id = "";

        /**
         * Creates a new PhpReportKolReq instance using the specified properties.
         * @function create
         * @memberof AgentBackEnd.PhpReportKolReq
         * @static
         * @param {AgentBackEnd.IPhpReportKolReq=} [properties] Properties to set
         * @returns {AgentBackEnd.PhpReportKolReq} PhpReportKolReq instance
         */
        PhpReportKolReq.create = function create(properties) {
            return new PhpReportKolReq(properties);
        };

        /**
         * Encodes the specified PhpReportKolReq message. Does not implicitly {@link AgentBackEnd.PhpReportKolReq.verify|verify} messages.
         * @function encode
         * @memberof AgentBackEnd.PhpReportKolReq
         * @static
         * @param {AgentBackEnd.IPhpReportKolReq} message PhpReportKolReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhpReportKolReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventType);
            if (message.pkg != null && Object.hasOwnProperty.call(message, "pkg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pkg);
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.channel);
            if (message.aid != null && Object.hasOwnProperty.call(message, "aid"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.aid);
            if (message.idfa != null && Object.hasOwnProperty.call(message, "idfa"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.idfa);
            if (message.gaid != null && Object.hasOwnProperty.call(message, "gaid"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.gaid);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.uid);
            if (message.device_id != null && Object.hasOwnProperty.call(message, "device_id"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.device_id);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.amount);
            if (message.total_amount != null && Object.hasOwnProperty.call(message, "total_amount"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.total_amount);
            if (message.order_id != null && Object.hasOwnProperty.call(message, "order_id"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.order_id);
            return writer;
        };

        /**
         * Encodes the specified PhpReportKolReq message, length delimited. Does not implicitly {@link AgentBackEnd.PhpReportKolReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AgentBackEnd.PhpReportKolReq
         * @static
         * @param {AgentBackEnd.IPhpReportKolReq} message PhpReportKolReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhpReportKolReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PhpReportKolReq message from the specified reader or buffer.
         * @function decode
         * @memberof AgentBackEnd.PhpReportKolReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AgentBackEnd.PhpReportKolReq} PhpReportKolReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhpReportKolReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AgentBackEnd.PhpReportKolReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventType = reader.string();
                    break;
                case 2:
                    message.pkg = reader.string();
                    break;
                case 3:
                    message.channel = reader.string();
                    break;
                case 4:
                    message.aid = reader.string();
                    break;
                case 5:
                    message.idfa = reader.string();
                    break;
                case 6:
                    message.gaid = reader.string();
                    break;
                case 7:
                    message.uid = reader.string();
                    break;
                case 8:
                    message.device_id = reader.string();
                    break;
                case 9:
                    message.amount = reader.string();
                    break;
                case 10:
                    message.total_amount = reader.string();
                    break;
                case 11:
                    message.order_id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PhpReportKolReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AgentBackEnd.PhpReportKolReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AgentBackEnd.PhpReportKolReq} PhpReportKolReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhpReportKolReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PhpReportKolReq message.
         * @function verify
         * @memberof AgentBackEnd.PhpReportKolReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PhpReportKolReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                if (!$util.isString(message.eventType))
                    return "eventType: string expected";
            if (message.pkg != null && message.hasOwnProperty("pkg"))
                if (!$util.isString(message.pkg))
                    return "pkg: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isString(message.channel))
                    return "channel: string expected";
            if (message.aid != null && message.hasOwnProperty("aid"))
                if (!$util.isString(message.aid))
                    return "aid: string expected";
            if (message.idfa != null && message.hasOwnProperty("idfa"))
                if (!$util.isString(message.idfa))
                    return "idfa: string expected";
            if (message.gaid != null && message.hasOwnProperty("gaid"))
                if (!$util.isString(message.gaid))
                    return "gaid: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (!$util.isString(message.device_id))
                    return "device_id: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isString(message.amount))
                    return "amount: string expected";
            if (message.total_amount != null && message.hasOwnProperty("total_amount"))
                if (!$util.isString(message.total_amount))
                    return "total_amount: string expected";
            if (message.order_id != null && message.hasOwnProperty("order_id"))
                if (!$util.isString(message.order_id))
                    return "order_id: string expected";
            return null;
        };

        /**
         * Creates a PhpReportKolReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AgentBackEnd.PhpReportKolReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AgentBackEnd.PhpReportKolReq} PhpReportKolReq
         */
        PhpReportKolReq.fromObject = function fromObject(object) {
            if (object instanceof $root.AgentBackEnd.PhpReportKolReq)
                return object;
            var message = new $root.AgentBackEnd.PhpReportKolReq();
            if (object.eventType != null)
                message.eventType = String(object.eventType);
            if (object.pkg != null)
                message.pkg = String(object.pkg);
            if (object.channel != null)
                message.channel = String(object.channel);
            if (object.aid != null)
                message.aid = String(object.aid);
            if (object.idfa != null)
                message.idfa = String(object.idfa);
            if (object.gaid != null)
                message.gaid = String(object.gaid);
            if (object.uid != null)
                message.uid = String(object.uid);
            if (object.device_id != null)
                message.device_id = String(object.device_id);
            if (object.amount != null)
                message.amount = String(object.amount);
            if (object.total_amount != null)
                message.total_amount = String(object.total_amount);
            if (object.order_id != null)
                message.order_id = String(object.order_id);
            return message;
        };

        /**
         * Creates a plain object from a PhpReportKolReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AgentBackEnd.PhpReportKolReq
         * @static
         * @param {AgentBackEnd.PhpReportKolReq} message PhpReportKolReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PhpReportKolReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventType = "";
                object.pkg = "";
                object.channel = "";
                object.aid = "";
                object.idfa = "";
                object.gaid = "";
                object.uid = "";
                object.device_id = "";
                object.amount = "";
                object.total_amount = "";
                object.order_id = "";
            }
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                object.eventType = message.eventType;
            if (message.pkg != null && message.hasOwnProperty("pkg"))
                object.pkg = message.pkg;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.aid != null && message.hasOwnProperty("aid"))
                object.aid = message.aid;
            if (message.idfa != null && message.hasOwnProperty("idfa"))
                object.idfa = message.idfa;
            if (message.gaid != null && message.hasOwnProperty("gaid"))
                object.gaid = message.gaid;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                object.device_id = message.device_id;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            if (message.total_amount != null && message.hasOwnProperty("total_amount"))
                object.total_amount = message.total_amount;
            if (message.order_id != null && message.hasOwnProperty("order_id"))
                object.order_id = message.order_id;
            return object;
        };

        /**
         * Converts this PhpReportKolReq to JSON.
         * @function toJSON
         * @memberof AgentBackEnd.PhpReportKolReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PhpReportKolReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PhpReportKolReq;
    })();

    return AgentBackEnd;
})();

$root.account_proto = (function() {

    /**
     * Namespace account_proto.
     * @exports account_proto
     * @namespace
     */
    var account_proto = {};

    /**
     * LOGIN_SUB_MSG_ID enum.
     * @name account_proto.LOGIN_SUB_MSG_ID
     * @enum {number}
     * @property {number} ACCOUNT_CMD_LOGIN_NONE=0 ACCOUNT_CMD_LOGIN_NONE value
     * @property {number} ACCOUNT_CMD_VERIFY_LOGIN_TOKEN_REQ=1712 ACCOUNT_CMD_VERIFY_LOGIN_TOKEN_REQ value
     * @property {number} ACCOUNT_CMD_VERIFY_LOGIN_TOKEN_RESP=1713 ACCOUNT_CMD_VERIFY_LOGIN_TOKEN_RESP value
     */
    account_proto.LOGIN_SUB_MSG_ID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ACCOUNT_CMD_LOGIN_NONE"] = 0;
        values[valuesById[1712] = "ACCOUNT_CMD_VERIFY_LOGIN_TOKEN_REQ"] = 1712;
        values[valuesById[1713] = "ACCOUNT_CMD_VERIFY_LOGIN_TOKEN_RESP"] = 1713;
        return values;
    })();

    account_proto.VerifyLoginTokenReq = (function() {

        /**
         * Properties of a VerifyLoginTokenReq.
         * @memberof account_proto
         * @interface IVerifyLoginTokenReq
         * @property {string|null} [token] VerifyLoginTokenReq token
         * @property {Uint8Array|null} [trans] VerifyLoginTokenReq trans
         */

        /**
         * Constructs a new VerifyLoginTokenReq.
         * @memberof account_proto
         * @classdesc Represents a VerifyLoginTokenReq.
         * @implements IVerifyLoginTokenReq
         * @constructor
         * @param {account_proto.IVerifyLoginTokenReq=} [properties] Properties to set
         */
        function VerifyLoginTokenReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VerifyLoginTokenReq token.
         * @member {string} token
         * @memberof account_proto.VerifyLoginTokenReq
         * @instance
         */
        VerifyLoginTokenReq.prototype.token = "";

        /**
         * VerifyLoginTokenReq trans.
         * @member {Uint8Array} trans
         * @memberof account_proto.VerifyLoginTokenReq
         * @instance
         */
        VerifyLoginTokenReq.prototype.trans = $util.newBuffer([]);

        /**
         * Creates a new VerifyLoginTokenReq instance using the specified properties.
         * @function create
         * @memberof account_proto.VerifyLoginTokenReq
         * @static
         * @param {account_proto.IVerifyLoginTokenReq=} [properties] Properties to set
         * @returns {account_proto.VerifyLoginTokenReq} VerifyLoginTokenReq instance
         */
        VerifyLoginTokenReq.create = function create(properties) {
            return new VerifyLoginTokenReq(properties);
        };

        /**
         * Encodes the specified VerifyLoginTokenReq message. Does not implicitly {@link account_proto.VerifyLoginTokenReq.verify|verify} messages.
         * @function encode
         * @memberof account_proto.VerifyLoginTokenReq
         * @static
         * @param {account_proto.IVerifyLoginTokenReq} message VerifyLoginTokenReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyLoginTokenReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.trans != null && Object.hasOwnProperty.call(message, "trans"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.trans);
            return writer;
        };

        /**
         * Encodes the specified VerifyLoginTokenReq message, length delimited. Does not implicitly {@link account_proto.VerifyLoginTokenReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account_proto.VerifyLoginTokenReq
         * @static
         * @param {account_proto.IVerifyLoginTokenReq} message VerifyLoginTokenReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyLoginTokenReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VerifyLoginTokenReq message from the specified reader or buffer.
         * @function decode
         * @memberof account_proto.VerifyLoginTokenReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account_proto.VerifyLoginTokenReq} VerifyLoginTokenReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyLoginTokenReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.account_proto.VerifyLoginTokenReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.trans = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VerifyLoginTokenReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account_proto.VerifyLoginTokenReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account_proto.VerifyLoginTokenReq} VerifyLoginTokenReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyLoginTokenReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VerifyLoginTokenReq message.
         * @function verify
         * @memberof account_proto.VerifyLoginTokenReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VerifyLoginTokenReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (!(message.trans && typeof message.trans.length === "number" || $util.isString(message.trans)))
                    return "trans: buffer expected";
            return null;
        };

        /**
         * Creates a VerifyLoginTokenReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account_proto.VerifyLoginTokenReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account_proto.VerifyLoginTokenReq} VerifyLoginTokenReq
         */
        VerifyLoginTokenReq.fromObject = function fromObject(object) {
            if (object instanceof $root.account_proto.VerifyLoginTokenReq)
                return object;
            var message = new $root.account_proto.VerifyLoginTokenReq();
            if (object.token != null)
                message.token = String(object.token);
            if (object.trans != null)
                if (typeof object.trans === "string")
                    $util.base64.decode(object.trans, message.trans = $util.newBuffer($util.base64.length(object.trans)), 0);
                else if (object.trans.length)
                    message.trans = object.trans;
            return message;
        };

        /**
         * Creates a plain object from a VerifyLoginTokenReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account_proto.VerifyLoginTokenReq
         * @static
         * @param {account_proto.VerifyLoginTokenReq} message VerifyLoginTokenReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VerifyLoginTokenReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.token = "";
                if (options.bytes === String)
                    object.trans = "";
                else {
                    object.trans = [];
                    if (options.bytes !== Array)
                        object.trans = $util.newBuffer(object.trans);
                }
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.trans != null && message.hasOwnProperty("trans"))
                object.trans = options.bytes === String ? $util.base64.encode(message.trans, 0, message.trans.length) : options.bytes === Array ? Array.prototype.slice.call(message.trans) : message.trans;
            return object;
        };

        /**
         * Converts this VerifyLoginTokenReq to JSON.
         * @function toJSON
         * @memberof account_proto.VerifyLoginTokenReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VerifyLoginTokenReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VerifyLoginTokenReq;
    })();

    account_proto.InGameInfo = (function() {

        /**
         * Properties of an InGameInfo.
         * @memberof account_proto
         * @interface IInGameInfo
         * @property {number|null} [game_id] InGameInfo game_id
         * @property {number|null} [game_srvtype] InGameInfo game_srvtype
         * @property {number|null} [game_svid] InGameInfo game_svid
         * @property {number|null} [game_tid] InGameInfo game_tid
         */

        /**
         * Constructs a new InGameInfo.
         * @memberof account_proto
         * @classdesc Represents an InGameInfo.
         * @implements IInGameInfo
         * @constructor
         * @param {account_proto.IInGameInfo=} [properties] Properties to set
         */
        function InGameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InGameInfo game_id.
         * @member {number} game_id
         * @memberof account_proto.InGameInfo
         * @instance
         */
        InGameInfo.prototype.game_id = 0;

        /**
         * InGameInfo game_srvtype.
         * @member {number} game_srvtype
         * @memberof account_proto.InGameInfo
         * @instance
         */
        InGameInfo.prototype.game_srvtype = 0;

        /**
         * InGameInfo game_svid.
         * @member {number} game_svid
         * @memberof account_proto.InGameInfo
         * @instance
         */
        InGameInfo.prototype.game_svid = 0;

        /**
         * InGameInfo game_tid.
         * @member {number} game_tid
         * @memberof account_proto.InGameInfo
         * @instance
         */
        InGameInfo.prototype.game_tid = 0;

        /**
         * Creates a new InGameInfo instance using the specified properties.
         * @function create
         * @memberof account_proto.InGameInfo
         * @static
         * @param {account_proto.IInGameInfo=} [properties] Properties to set
         * @returns {account_proto.InGameInfo} InGameInfo instance
         */
        InGameInfo.create = function create(properties) {
            return new InGameInfo(properties);
        };

        /**
         * Encodes the specified InGameInfo message. Does not implicitly {@link account_proto.InGameInfo.verify|verify} messages.
         * @function encode
         * @memberof account_proto.InGameInfo
         * @static
         * @param {account_proto.IInGameInfo} message InGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InGameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.game_id != null && Object.hasOwnProperty.call(message, "game_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.game_id);
            if (message.game_srvtype != null && Object.hasOwnProperty.call(message, "game_srvtype"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.game_srvtype);
            if (message.game_svid != null && Object.hasOwnProperty.call(message, "game_svid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.game_svid);
            if (message.game_tid != null && Object.hasOwnProperty.call(message, "game_tid"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.game_tid);
            return writer;
        };

        /**
         * Encodes the specified InGameInfo message, length delimited. Does not implicitly {@link account_proto.InGameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account_proto.InGameInfo
         * @static
         * @param {account_proto.IInGameInfo} message InGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InGameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InGameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof account_proto.InGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account_proto.InGameInfo} InGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InGameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.account_proto.InGameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.game_id = reader.uint32();
                    break;
                case 2:
                    message.game_srvtype = reader.uint32();
                    break;
                case 3:
                    message.game_svid = reader.uint32();
                    break;
                case 4:
                    message.game_tid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InGameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account_proto.InGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account_proto.InGameInfo} InGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InGameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InGameInfo message.
         * @function verify
         * @memberof account_proto.InGameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InGameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                if (!$util.isInteger(message.game_id))
                    return "game_id: integer expected";
            if (message.game_srvtype != null && message.hasOwnProperty("game_srvtype"))
                if (!$util.isInteger(message.game_srvtype))
                    return "game_srvtype: integer expected";
            if (message.game_svid != null && message.hasOwnProperty("game_svid"))
                if (!$util.isInteger(message.game_svid))
                    return "game_svid: integer expected";
            if (message.game_tid != null && message.hasOwnProperty("game_tid"))
                if (!$util.isInteger(message.game_tid))
                    return "game_tid: integer expected";
            return null;
        };

        /**
         * Creates an InGameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account_proto.InGameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account_proto.InGameInfo} InGameInfo
         */
        InGameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.account_proto.InGameInfo)
                return object;
            var message = new $root.account_proto.InGameInfo();
            if (object.game_id != null)
                message.game_id = object.game_id >>> 0;
            if (object.game_srvtype != null)
                message.game_srvtype = object.game_srvtype >>> 0;
            if (object.game_svid != null)
                message.game_svid = object.game_svid >>> 0;
            if (object.game_tid != null)
                message.game_tid = object.game_tid >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an InGameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account_proto.InGameInfo
         * @static
         * @param {account_proto.InGameInfo} message InGameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InGameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.game_id = 0;
                object.game_srvtype = 0;
                object.game_svid = 0;
                object.game_tid = 0;
            }
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                object.game_id = message.game_id;
            if (message.game_srvtype != null && message.hasOwnProperty("game_srvtype"))
                object.game_srvtype = message.game_srvtype;
            if (message.game_svid != null && message.hasOwnProperty("game_svid"))
                object.game_svid = message.game_svid;
            if (message.game_tid != null && message.hasOwnProperty("game_tid"))
                object.game_tid = message.game_tid;
            return object;
        };

        /**
         * Converts this InGameInfo to JSON.
         * @function toJSON
         * @memberof account_proto.InGameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InGameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InGameInfo;
    })();

    account_proto.VerifyLoginTokenResp = (function() {

        /**
         * Properties of a VerifyLoginTokenResp.
         * @memberof account_proto
         * @interface IVerifyLoginTokenResp
         * @property {number|null} [result] VerifyLoginTokenResp result
         * @property {number|null} [uid] VerifyLoginTokenResp uid
         * @property {string|null} [agency] VerifyLoginTokenResp agency
         * @property {number|null} [agency_id] VerifyLoginTokenResp agency_id
         * @property {string|null} [username] VerifyLoginTokenResp username
         * @property {string|null} [token] VerifyLoginTokenResp token
         * @property {number|Long|null} [balance] VerifyLoginTokenResp balance
         * @property {number|null} [game] VerifyLoginTokenResp game
         * @property {string|null} [hall_url] VerifyLoginTokenResp hall_url
         * @property {string|null} [platform] VerifyLoginTokenResp platform
         * @property {string|null} [gameinfo] VerifyLoginTokenResp gameinfo
         * @property {string|null} [currency] VerifyLoginTokenResp currency
         * @property {number|null} [temp_uin] VerifyLoginTokenResp temp_uin
         * @property {account_proto.IInGameInfo|null} [ingame_info] VerifyLoginTokenResp ingame_info
         * @property {Uint8Array|null} [trans] VerifyLoginTokenResp trans
         * @property {number|Long|null} [currency_unit_multi] VerifyLoginTokenResp currency_unit_multi
         * @property {string|null} [currency_label] VerifyLoginTokenResp currency_label
         */

        /**
         * Constructs a new VerifyLoginTokenResp.
         * @memberof account_proto
         * @classdesc Represents a VerifyLoginTokenResp.
         * @implements IVerifyLoginTokenResp
         * @constructor
         * @param {account_proto.IVerifyLoginTokenResp=} [properties] Properties to set
         */
        function VerifyLoginTokenResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VerifyLoginTokenResp result.
         * @member {number} result
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.result = 0;

        /**
         * VerifyLoginTokenResp uid.
         * @member {number} uid
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.uid = 0;

        /**
         * VerifyLoginTokenResp agency.
         * @member {string} agency
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.agency = "";

        /**
         * VerifyLoginTokenResp agency_id.
         * @member {number} agency_id
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.agency_id = 0;

        /**
         * VerifyLoginTokenResp username.
         * @member {string} username
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.username = "";

        /**
         * VerifyLoginTokenResp token.
         * @member {string} token
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.token = "";

        /**
         * VerifyLoginTokenResp balance.
         * @member {number|Long} balance
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * VerifyLoginTokenResp game.
         * @member {number} game
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.game = 0;

        /**
         * VerifyLoginTokenResp hall_url.
         * @member {string} hall_url
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.hall_url = "";

        /**
         * VerifyLoginTokenResp platform.
         * @member {string} platform
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.platform = "";

        /**
         * VerifyLoginTokenResp gameinfo.
         * @member {string} gameinfo
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.gameinfo = "";

        /**
         * VerifyLoginTokenResp currency.
         * @member {string} currency
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.currency = "";

        /**
         * VerifyLoginTokenResp temp_uin.
         * @member {number} temp_uin
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.temp_uin = 0;

        /**
         * VerifyLoginTokenResp ingame_info.
         * @member {account_proto.IInGameInfo|null|undefined} ingame_info
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.ingame_info = null;

        /**
         * VerifyLoginTokenResp trans.
         * @member {Uint8Array} trans
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.trans = $util.newBuffer([]);

        /**
         * VerifyLoginTokenResp currency_unit_multi.
         * @member {number|Long} currency_unit_multi
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.currency_unit_multi = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * VerifyLoginTokenResp currency_label.
         * @member {string} currency_label
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         */
        VerifyLoginTokenResp.prototype.currency_label = "";

        /**
         * Creates a new VerifyLoginTokenResp instance using the specified properties.
         * @function create
         * @memberof account_proto.VerifyLoginTokenResp
         * @static
         * @param {account_proto.IVerifyLoginTokenResp=} [properties] Properties to set
         * @returns {account_proto.VerifyLoginTokenResp} VerifyLoginTokenResp instance
         */
        VerifyLoginTokenResp.create = function create(properties) {
            return new VerifyLoginTokenResp(properties);
        };

        /**
         * Encodes the specified VerifyLoginTokenResp message. Does not implicitly {@link account_proto.VerifyLoginTokenResp.verify|verify} messages.
         * @function encode
         * @memberof account_proto.VerifyLoginTokenResp
         * @static
         * @param {account_proto.IVerifyLoginTokenResp} message VerifyLoginTokenResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyLoginTokenResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.uid);
            if (message.agency != null && Object.hasOwnProperty.call(message, "agency"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.agency);
            if (message.agency_id != null && Object.hasOwnProperty.call(message, "agency_id"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.agency_id);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.username);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.token);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.balance);
            if (message.game != null && Object.hasOwnProperty.call(message, "game"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.game);
            if (message.hall_url != null && Object.hasOwnProperty.call(message, "hall_url"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.hall_url);
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.platform);
            if (message.gameinfo != null && Object.hasOwnProperty.call(message, "gameinfo"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.gameinfo);
            if (message.currency != null && Object.hasOwnProperty.call(message, "currency"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.currency);
            if (message.temp_uin != null && Object.hasOwnProperty.call(message, "temp_uin"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.temp_uin);
            if (message.ingame_info != null && Object.hasOwnProperty.call(message, "ingame_info"))
                $root.account_proto.InGameInfo.encode(message.ingame_info, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.trans != null && Object.hasOwnProperty.call(message, "trans"))
                writer.uint32(/* id 15, wireType 2 =*/122).bytes(message.trans);
            if (message.currency_unit_multi != null && Object.hasOwnProperty.call(message, "currency_unit_multi"))
                writer.uint32(/* id 16, wireType 0 =*/128).int64(message.currency_unit_multi);
            if (message.currency_label != null && Object.hasOwnProperty.call(message, "currency_label"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.currency_label);
            return writer;
        };

        /**
         * Encodes the specified VerifyLoginTokenResp message, length delimited. Does not implicitly {@link account_proto.VerifyLoginTokenResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account_proto.VerifyLoginTokenResp
         * @static
         * @param {account_proto.IVerifyLoginTokenResp} message VerifyLoginTokenResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyLoginTokenResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VerifyLoginTokenResp message from the specified reader or buffer.
         * @function decode
         * @memberof account_proto.VerifyLoginTokenResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account_proto.VerifyLoginTokenResp} VerifyLoginTokenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyLoginTokenResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.account_proto.VerifyLoginTokenResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.uid = reader.uint32();
                    break;
                case 3:
                    message.agency = reader.string();
                    break;
                case 4:
                    message.agency_id = reader.uint32();
                    break;
                case 5:
                    message.username = reader.string();
                    break;
                case 6:
                    message.token = reader.string();
                    break;
                case 7:
                    message.balance = reader.int64();
                    break;
                case 8:
                    message.game = reader.uint32();
                    break;
                case 9:
                    message.hall_url = reader.string();
                    break;
                case 10:
                    message.platform = reader.string();
                    break;
                case 11:
                    message.gameinfo = reader.string();
                    break;
                case 12:
                    message.currency = reader.string();
                    break;
                case 13:
                    message.temp_uin = reader.uint32();
                    break;
                case 14:
                    message.ingame_info = $root.account_proto.InGameInfo.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.trans = reader.bytes();
                    break;
                case 16:
                    message.currency_unit_multi = reader.int64();
                    break;
                case 17:
                    message.currency_label = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VerifyLoginTokenResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account_proto.VerifyLoginTokenResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account_proto.VerifyLoginTokenResp} VerifyLoginTokenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyLoginTokenResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VerifyLoginTokenResp message.
         * @function verify
         * @memberof account_proto.VerifyLoginTokenResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VerifyLoginTokenResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.agency != null && message.hasOwnProperty("agency"))
                if (!$util.isString(message.agency))
                    return "agency: string expected";
            if (message.agency_id != null && message.hasOwnProperty("agency_id"))
                if (!$util.isInteger(message.agency_id))
                    return "agency_id: integer expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                    return "balance: integer|Long expected";
            if (message.game != null && message.hasOwnProperty("game"))
                if (!$util.isInteger(message.game))
                    return "game: integer expected";
            if (message.hall_url != null && message.hasOwnProperty("hall_url"))
                if (!$util.isString(message.hall_url))
                    return "hall_url: string expected";
            if (message.platform != null && message.hasOwnProperty("platform"))
                if (!$util.isString(message.platform))
                    return "platform: string expected";
            if (message.gameinfo != null && message.hasOwnProperty("gameinfo"))
                if (!$util.isString(message.gameinfo))
                    return "gameinfo: string expected";
            if (message.currency != null && message.hasOwnProperty("currency"))
                if (!$util.isString(message.currency))
                    return "currency: string expected";
            if (message.temp_uin != null && message.hasOwnProperty("temp_uin"))
                if (!$util.isInteger(message.temp_uin))
                    return "temp_uin: integer expected";
            if (message.ingame_info != null && message.hasOwnProperty("ingame_info")) {
                var error = $root.account_proto.InGameInfo.verify(message.ingame_info);
                if (error)
                    return "ingame_info." + error;
            }
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (!(message.trans && typeof message.trans.length === "number" || $util.isString(message.trans)))
                    return "trans: buffer expected";
            if (message.currency_unit_multi != null && message.hasOwnProperty("currency_unit_multi"))
                if (!$util.isInteger(message.currency_unit_multi) && !(message.currency_unit_multi && $util.isInteger(message.currency_unit_multi.low) && $util.isInteger(message.currency_unit_multi.high)))
                    return "currency_unit_multi: integer|Long expected";
            if (message.currency_label != null && message.hasOwnProperty("currency_label"))
                if (!$util.isString(message.currency_label))
                    return "currency_label: string expected";
            return null;
        };

        /**
         * Creates a VerifyLoginTokenResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account_proto.VerifyLoginTokenResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account_proto.VerifyLoginTokenResp} VerifyLoginTokenResp
         */
        VerifyLoginTokenResp.fromObject = function fromObject(object) {
            if (object instanceof $root.account_proto.VerifyLoginTokenResp)
                return object;
            var message = new $root.account_proto.VerifyLoginTokenResp();
            if (object.result != null)
                message.result = object.result | 0;
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.agency != null)
                message.agency = String(object.agency);
            if (object.agency_id != null)
                message.agency_id = object.agency_id >>> 0;
            if (object.username != null)
                message.username = String(object.username);
            if (object.token != null)
                message.token = String(object.token);
            if (object.balance != null)
                if ($util.Long)
                    (message.balance = $util.Long.fromValue(object.balance)).unsigned = false;
                else if (typeof object.balance === "string")
                    message.balance = parseInt(object.balance, 10);
                else if (typeof object.balance === "number")
                    message.balance = object.balance;
                else if (typeof object.balance === "object")
                    message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber();
            if (object.game != null)
                message.game = object.game >>> 0;
            if (object.hall_url != null)
                message.hall_url = String(object.hall_url);
            if (object.platform != null)
                message.platform = String(object.platform);
            if (object.gameinfo != null)
                message.gameinfo = String(object.gameinfo);
            if (object.currency != null)
                message.currency = String(object.currency);
            if (object.temp_uin != null)
                message.temp_uin = object.temp_uin >>> 0;
            if (object.ingame_info != null) {
                if (typeof object.ingame_info !== "object")
                    throw TypeError(".account_proto.VerifyLoginTokenResp.ingame_info: object expected");
                message.ingame_info = $root.account_proto.InGameInfo.fromObject(object.ingame_info);
            }
            if (object.trans != null)
                if (typeof object.trans === "string")
                    $util.base64.decode(object.trans, message.trans = $util.newBuffer($util.base64.length(object.trans)), 0);
                else if (object.trans.length)
                    message.trans = object.trans;
            if (object.currency_unit_multi != null)
                if ($util.Long)
                    (message.currency_unit_multi = $util.Long.fromValue(object.currency_unit_multi)).unsigned = false;
                else if (typeof object.currency_unit_multi === "string")
                    message.currency_unit_multi = parseInt(object.currency_unit_multi, 10);
                else if (typeof object.currency_unit_multi === "number")
                    message.currency_unit_multi = object.currency_unit_multi;
                else if (typeof object.currency_unit_multi === "object")
                    message.currency_unit_multi = new $util.LongBits(object.currency_unit_multi.low >>> 0, object.currency_unit_multi.high >>> 0).toNumber();
            if (object.currency_label != null)
                message.currency_label = String(object.currency_label);
            return message;
        };

        /**
         * Creates a plain object from a VerifyLoginTokenResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account_proto.VerifyLoginTokenResp
         * @static
         * @param {account_proto.VerifyLoginTokenResp} message VerifyLoginTokenResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VerifyLoginTokenResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = 0;
                object.uid = 0;
                object.agency = "";
                object.agency_id = 0;
                object.username = "";
                object.token = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.balance = options.longs === String ? "0" : 0;
                object.game = 0;
                object.hall_url = "";
                object.platform = "";
                object.gameinfo = "";
                object.currency = "";
                object.temp_uin = 0;
                object.ingame_info = null;
                if (options.bytes === String)
                    object.trans = "";
                else {
                    object.trans = [];
                    if (options.bytes !== Array)
                        object.trans = $util.newBuffer(object.trans);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.currency_unit_multi = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.currency_unit_multi = options.longs === String ? "0" : 0;
                object.currency_label = "";
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.agency != null && message.hasOwnProperty("agency"))
                object.agency = message.agency;
            if (message.agency_id != null && message.hasOwnProperty("agency_id"))
                object.agency_id = message.agency_id;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance === "number")
                    object.balance = options.longs === String ? String(message.balance) : message.balance;
                else
                    object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber() : message.balance;
            if (message.game != null && message.hasOwnProperty("game"))
                object.game = message.game;
            if (message.hall_url != null && message.hasOwnProperty("hall_url"))
                object.hall_url = message.hall_url;
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = message.platform;
            if (message.gameinfo != null && message.hasOwnProperty("gameinfo"))
                object.gameinfo = message.gameinfo;
            if (message.currency != null && message.hasOwnProperty("currency"))
                object.currency = message.currency;
            if (message.temp_uin != null && message.hasOwnProperty("temp_uin"))
                object.temp_uin = message.temp_uin;
            if (message.ingame_info != null && message.hasOwnProperty("ingame_info"))
                object.ingame_info = $root.account_proto.InGameInfo.toObject(message.ingame_info, options);
            if (message.trans != null && message.hasOwnProperty("trans"))
                object.trans = options.bytes === String ? $util.base64.encode(message.trans, 0, message.trans.length) : options.bytes === Array ? Array.prototype.slice.call(message.trans) : message.trans;
            if (message.currency_unit_multi != null && message.hasOwnProperty("currency_unit_multi"))
                if (typeof message.currency_unit_multi === "number")
                    object.currency_unit_multi = options.longs === String ? String(message.currency_unit_multi) : message.currency_unit_multi;
                else
                    object.currency_unit_multi = options.longs === String ? $util.Long.prototype.toString.call(message.currency_unit_multi) : options.longs === Number ? new $util.LongBits(message.currency_unit_multi.low >>> 0, message.currency_unit_multi.high >>> 0).toNumber() : message.currency_unit_multi;
            if (message.currency_label != null && message.hasOwnProperty("currency_label"))
                object.currency_label = message.currency_label;
            return object;
        };

        /**
         * Converts this VerifyLoginTokenResp to JSON.
         * @function toJSON
         * @memberof account_proto.VerifyLoginTokenResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VerifyLoginTokenResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VerifyLoginTokenResp;
    })();

    return account_proto;
})();

$root.gamerecord = (function() {

    /**
     * Namespace gamerecord.
     * @exports gamerecord
     * @namespace
     */
    var gamerecord = {};

    /**
     * ASSET_CMD enum.
     * @name gamerecord.ASSET_CMD
     * @enum {number}
     * @property {number} GAMERECORD_CMD_NONE=0 GAMERECORD_CMD_NONE value
     * @property {number} GAMERECORD_CMD_GET_RECORD_REQ=2850 GAMERECORD_CMD_GET_RECORD_REQ value
     * @property {number} GAMERECORD_CMD_GET_RECORD_RESP=2851 GAMERECORD_CMD_GET_RECORD_RESP value
     * @property {number} GAMERECORD_CMD_RECORD_PUSH=2852 GAMERECORD_CMD_RECORD_PUSH value
     * @property {number} GAMERECORD_CMD_RECORD_CACHE_PUSH=2853 GAMERECORD_CMD_RECORD_CACHE_PUSH value
     * @property {number} GAMERECORD_CMD_GET_DETAIL_REQ=2854 GAMERECORD_CMD_GET_DETAIL_REQ value
     * @property {number} GAMERECORD_CMD_GET_DETAIL_RESP=2855 GAMERECORD_CMD_GET_DETAIL_RESP value
     */
    gamerecord.ASSET_CMD = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GAMERECORD_CMD_NONE"] = 0;
        values[valuesById[2850] = "GAMERECORD_CMD_GET_RECORD_REQ"] = 2850;
        values[valuesById[2851] = "GAMERECORD_CMD_GET_RECORD_RESP"] = 2851;
        values[valuesById[2852] = "GAMERECORD_CMD_RECORD_PUSH"] = 2852;
        values[valuesById[2853] = "GAMERECORD_CMD_RECORD_CACHE_PUSH"] = 2853;
        values[valuesById[2854] = "GAMERECORD_CMD_GET_DETAIL_REQ"] = 2854;
        values[valuesById[2855] = "GAMERECORD_CMD_GET_DETAIL_RESP"] = 2855;
        return values;
    })();

    /**
     * BET_ACT enum.
     * @name gamerecord.BET_ACT
     * @enum {number}
     * @property {number} BET_ACT_NONE=0 BET_ACT_NONE value
     * @property {number} BET_ACT_NORMAL_BET=1 BET_ACT_NORMAL_BET value
     */
    gamerecord.BET_ACT = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BET_ACT_NONE"] = 0;
        values[valuesById[1] = "BET_ACT_NORMAL_BET"] = 1;
        return values;
    })();

    /**
     * WIN_ACT enum.
     * @name gamerecord.WIN_ACT
     * @enum {number}
     * @property {number} WIN_ACT_NONE=0 WIN_ACT_NONE value
     * @property {number} WIN_ACT_NORMAL_WIN=1 WIN_ACT_NORMAL_WIN value
     * @property {number} WIN_ACT_JACKPOT=2 WIN_ACT_JACKPOT value
     * @property {number} WIN_ACT_DEALER=3 WIN_ACT_DEALER value
     */
    gamerecord.WIN_ACT = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WIN_ACT_NONE"] = 0;
        values[valuesById[1] = "WIN_ACT_NORMAL_WIN"] = 1;
        values[valuesById[2] = "WIN_ACT_JACKPOT"] = 2;
        values[valuesById[3] = "WIN_ACT_DEALER"] = 3;
        return values;
    })();

    gamerecord.GameRecordReq = (function() {

        /**
         * Properties of a GameRecordReq.
         * @memberof gamerecord
         * @interface IGameRecordReq
         * @property {number|null} [uid] GameRecordReq uid
         * @property {number|null} [game] GameRecordReq game
         * @property {number|Long|null} [pos] GameRecordReq pos
         * @property {number|null} [size] GameRecordReq size
         * @property {Uint8Array|null} [trans] GameRecordReq trans
         */

        /**
         * Constructs a new GameRecordReq.
         * @memberof gamerecord
         * @classdesc Represents a GameRecordReq.
         * @implements IGameRecordReq
         * @constructor
         * @param {gamerecord.IGameRecordReq=} [properties] Properties to set
         */
        function GameRecordReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameRecordReq uid.
         * @member {number} uid
         * @memberof gamerecord.GameRecordReq
         * @instance
         */
        GameRecordReq.prototype.uid = 0;

        /**
         * GameRecordReq game.
         * @member {number} game
         * @memberof gamerecord.GameRecordReq
         * @instance
         */
        GameRecordReq.prototype.game = 0;

        /**
         * GameRecordReq pos.
         * @member {number|Long} pos
         * @memberof gamerecord.GameRecordReq
         * @instance
         */
        GameRecordReq.prototype.pos = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GameRecordReq size.
         * @member {number} size
         * @memberof gamerecord.GameRecordReq
         * @instance
         */
        GameRecordReq.prototype.size = 0;

        /**
         * GameRecordReq trans.
         * @member {Uint8Array} trans
         * @memberof gamerecord.GameRecordReq
         * @instance
         */
        GameRecordReq.prototype.trans = $util.newBuffer([]);

        /**
         * Creates a new GameRecordReq instance using the specified properties.
         * @function create
         * @memberof gamerecord.GameRecordReq
         * @static
         * @param {gamerecord.IGameRecordReq=} [properties] Properties to set
         * @returns {gamerecord.GameRecordReq} GameRecordReq instance
         */
        GameRecordReq.create = function create(properties) {
            return new GameRecordReq(properties);
        };

        /**
         * Encodes the specified GameRecordReq message. Does not implicitly {@link gamerecord.GameRecordReq.verify|verify} messages.
         * @function encode
         * @memberof gamerecord.GameRecordReq
         * @static
         * @param {gamerecord.IGameRecordReq} message GameRecordReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecordReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.game != null && Object.hasOwnProperty.call(message, "game"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.game);
            if (message.pos != null && Object.hasOwnProperty.call(message, "pos"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.pos);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.size);
            if (message.trans != null && Object.hasOwnProperty.call(message, "trans"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.trans);
            return writer;
        };

        /**
         * Encodes the specified GameRecordReq message, length delimited. Does not implicitly {@link gamerecord.GameRecordReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamerecord.GameRecordReq
         * @static
         * @param {gamerecord.IGameRecordReq} message GameRecordReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecordReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameRecordReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamerecord.GameRecordReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamerecord.GameRecordReq} GameRecordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecordReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamerecord.GameRecordReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.game = reader.uint32();
                    break;
                case 3:
                    message.pos = reader.uint64();
                    break;
                case 4:
                    message.size = reader.uint32();
                    break;
                case 5:
                    message.trans = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameRecordReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamerecord.GameRecordReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamerecord.GameRecordReq} GameRecordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecordReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameRecordReq message.
         * @function verify
         * @memberof gamerecord.GameRecordReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameRecordReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.game != null && message.hasOwnProperty("game"))
                if (!$util.isInteger(message.game))
                    return "game: integer expected";
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isInteger(message.pos) && !(message.pos && $util.isInteger(message.pos.low) && $util.isInteger(message.pos.high)))
                    return "pos: integer|Long expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (!(message.trans && typeof message.trans.length === "number" || $util.isString(message.trans)))
                    return "trans: buffer expected";
            return null;
        };

        /**
         * Creates a GameRecordReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamerecord.GameRecordReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamerecord.GameRecordReq} GameRecordReq
         */
        GameRecordReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamerecord.GameRecordReq)
                return object;
            var message = new $root.gamerecord.GameRecordReq();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.game != null)
                message.game = object.game >>> 0;
            if (object.pos != null)
                if ($util.Long)
                    (message.pos = $util.Long.fromValue(object.pos)).unsigned = true;
                else if (typeof object.pos === "string")
                    message.pos = parseInt(object.pos, 10);
                else if (typeof object.pos === "number")
                    message.pos = object.pos;
                else if (typeof object.pos === "object")
                    message.pos = new $util.LongBits(object.pos.low >>> 0, object.pos.high >>> 0).toNumber(true);
            if (object.size != null)
                message.size = object.size >>> 0;
            if (object.trans != null)
                if (typeof object.trans === "string")
                    $util.base64.decode(object.trans, message.trans = $util.newBuffer($util.base64.length(object.trans)), 0);
                else if (object.trans.length)
                    message.trans = object.trans;
            return message;
        };

        /**
         * Creates a plain object from a GameRecordReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamerecord.GameRecordReq
         * @static
         * @param {gamerecord.GameRecordReq} message GameRecordReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameRecordReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.game = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.pos = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pos = options.longs === String ? "0" : 0;
                object.size = 0;
                if (options.bytes === String)
                    object.trans = "";
                else {
                    object.trans = [];
                    if (options.bytes !== Array)
                        object.trans = $util.newBuffer(object.trans);
                }
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.game != null && message.hasOwnProperty("game"))
                object.game = message.game;
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (typeof message.pos === "number")
                    object.pos = options.longs === String ? String(message.pos) : message.pos;
                else
                    object.pos = options.longs === String ? $util.Long.prototype.toString.call(message.pos) : options.longs === Number ? new $util.LongBits(message.pos.low >>> 0, message.pos.high >>> 0).toNumber(true) : message.pos;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            if (message.trans != null && message.hasOwnProperty("trans"))
                object.trans = options.bytes === String ? $util.base64.encode(message.trans, 0, message.trans.length) : options.bytes === Array ? Array.prototype.slice.call(message.trans) : message.trans;
            return object;
        };

        /**
         * Converts this GameRecordReq to JSON.
         * @function toJSON
         * @memberof gamerecord.GameRecordReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameRecordReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameRecordReq;
    })();

    gamerecord.GameRecordResp = (function() {

        /**
         * Properties of a GameRecordResp.
         * @memberof gamerecord
         * @interface IGameRecordResp
         * @property {number|null} [uid] GameRecordResp uid
         * @property {number|null} [game] GameRecordResp game
         * @property {number|null} [result] GameRecordResp result
         * @property {number|null} [timezoneinmin] GameRecordResp timezoneinmin
         * @property {number|null} [endflag] GameRecordResp endflag
         * @property {Array.<gamerecord.GameRecordResp.IGameRecordItem>|null} [list] GameRecordResp list
         * @property {Array.<gamerecord.GameRecordResp.IDayAmountItem>|null} [daylist] GameRecordResp daylist
         * @property {number|null} [totalsize] GameRecordResp totalsize
         * @property {Uint8Array|null} [trans] GameRecordResp trans
         */

        /**
         * Constructs a new GameRecordResp.
         * @memberof gamerecord
         * @classdesc Represents a GameRecordResp.
         * @implements IGameRecordResp
         * @constructor
         * @param {gamerecord.IGameRecordResp=} [properties] Properties to set
         */
        function GameRecordResp(properties) {
            this.list = [];
            this.daylist = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameRecordResp uid.
         * @member {number} uid
         * @memberof gamerecord.GameRecordResp
         * @instance
         */
        GameRecordResp.prototype.uid = 0;

        /**
         * GameRecordResp game.
         * @member {number} game
         * @memberof gamerecord.GameRecordResp
         * @instance
         */
        GameRecordResp.prototype.game = 0;

        /**
         * GameRecordResp result.
         * @member {number} result
         * @memberof gamerecord.GameRecordResp
         * @instance
         */
        GameRecordResp.prototype.result = 0;

        /**
         * GameRecordResp timezoneinmin.
         * @member {number} timezoneinmin
         * @memberof gamerecord.GameRecordResp
         * @instance
         */
        GameRecordResp.prototype.timezoneinmin = 0;

        /**
         * GameRecordResp endflag.
         * @member {number} endflag
         * @memberof gamerecord.GameRecordResp
         * @instance
         */
        GameRecordResp.prototype.endflag = 0;

        /**
         * GameRecordResp list.
         * @member {Array.<gamerecord.GameRecordResp.IGameRecordItem>} list
         * @memberof gamerecord.GameRecordResp
         * @instance
         */
        GameRecordResp.prototype.list = $util.emptyArray;

        /**
         * GameRecordResp daylist.
         * @member {Array.<gamerecord.GameRecordResp.IDayAmountItem>} daylist
         * @memberof gamerecord.GameRecordResp
         * @instance
         */
        GameRecordResp.prototype.daylist = $util.emptyArray;

        /**
         * GameRecordResp totalsize.
         * @member {number} totalsize
         * @memberof gamerecord.GameRecordResp
         * @instance
         */
        GameRecordResp.prototype.totalsize = 0;

        /**
         * GameRecordResp trans.
         * @member {Uint8Array} trans
         * @memberof gamerecord.GameRecordResp
         * @instance
         */
        GameRecordResp.prototype.trans = $util.newBuffer([]);

        /**
         * Creates a new GameRecordResp instance using the specified properties.
         * @function create
         * @memberof gamerecord.GameRecordResp
         * @static
         * @param {gamerecord.IGameRecordResp=} [properties] Properties to set
         * @returns {gamerecord.GameRecordResp} GameRecordResp instance
         */
        GameRecordResp.create = function create(properties) {
            return new GameRecordResp(properties);
        };

        /**
         * Encodes the specified GameRecordResp message. Does not implicitly {@link gamerecord.GameRecordResp.verify|verify} messages.
         * @function encode
         * @memberof gamerecord.GameRecordResp
         * @static
         * @param {gamerecord.IGameRecordResp} message GameRecordResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecordResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.game != null && Object.hasOwnProperty.call(message, "game"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.game);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.result);
            if (message.timezoneinmin != null && Object.hasOwnProperty.call(message, "timezoneinmin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.timezoneinmin);
            if (message.endflag != null && Object.hasOwnProperty.call(message, "endflag"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.endflag);
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.gamerecord.GameRecordResp.GameRecordItem.encode(message.list[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.daylist != null && message.daylist.length)
                for (var i = 0; i < message.daylist.length; ++i)
                    $root.gamerecord.GameRecordResp.DayAmountItem.encode(message.daylist[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.totalsize != null && Object.hasOwnProperty.call(message, "totalsize"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.totalsize);
            if (message.trans != null && Object.hasOwnProperty.call(message, "trans"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.trans);
            return writer;
        };

        /**
         * Encodes the specified GameRecordResp message, length delimited. Does not implicitly {@link gamerecord.GameRecordResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamerecord.GameRecordResp
         * @static
         * @param {gamerecord.IGameRecordResp} message GameRecordResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecordResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameRecordResp message from the specified reader or buffer.
         * @function decode
         * @memberof gamerecord.GameRecordResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamerecord.GameRecordResp} GameRecordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecordResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamerecord.GameRecordResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.game = reader.uint32();
                    break;
                case 3:
                    message.result = reader.int32();
                    break;
                case 4:
                    message.timezoneinmin = reader.int32();
                    break;
                case 5:
                    message.endflag = reader.int32();
                    break;
                case 6:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.gamerecord.GameRecordResp.GameRecordItem.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.daylist && message.daylist.length))
                        message.daylist = [];
                    message.daylist.push($root.gamerecord.GameRecordResp.DayAmountItem.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.totalsize = reader.uint32();
                    break;
                case 9:
                    message.trans = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameRecordResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamerecord.GameRecordResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamerecord.GameRecordResp} GameRecordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecordResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameRecordResp message.
         * @function verify
         * @memberof gamerecord.GameRecordResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameRecordResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.game != null && message.hasOwnProperty("game"))
                if (!$util.isInteger(message.game))
                    return "game: integer expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.timezoneinmin != null && message.hasOwnProperty("timezoneinmin"))
                if (!$util.isInteger(message.timezoneinmin))
                    return "timezoneinmin: integer expected";
            if (message.endflag != null && message.hasOwnProperty("endflag"))
                if (!$util.isInteger(message.endflag))
                    return "endflag: integer expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.gamerecord.GameRecordResp.GameRecordItem.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.daylist != null && message.hasOwnProperty("daylist")) {
                if (!Array.isArray(message.daylist))
                    return "daylist: array expected";
                for (var i = 0; i < message.daylist.length; ++i) {
                    var error = $root.gamerecord.GameRecordResp.DayAmountItem.verify(message.daylist[i]);
                    if (error)
                        return "daylist." + error;
                }
            }
            if (message.totalsize != null && message.hasOwnProperty("totalsize"))
                if (!$util.isInteger(message.totalsize))
                    return "totalsize: integer expected";
            if (message.trans != null && message.hasOwnProperty("trans"))
                if (!(message.trans && typeof message.trans.length === "number" || $util.isString(message.trans)))
                    return "trans: buffer expected";
            return null;
        };

        /**
         * Creates a GameRecordResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamerecord.GameRecordResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamerecord.GameRecordResp} GameRecordResp
         */
        GameRecordResp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamerecord.GameRecordResp)
                return object;
            var message = new $root.gamerecord.GameRecordResp();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.game != null)
                message.game = object.game >>> 0;
            if (object.result != null)
                message.result = object.result | 0;
            if (object.timezoneinmin != null)
                message.timezoneinmin = object.timezoneinmin | 0;
            if (object.endflag != null)
                message.endflag = object.endflag | 0;
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".gamerecord.GameRecordResp.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".gamerecord.GameRecordResp.list: object expected");
                    message.list[i] = $root.gamerecord.GameRecordResp.GameRecordItem.fromObject(object.list[i]);
                }
            }
            if (object.daylist) {
                if (!Array.isArray(object.daylist))
                    throw TypeError(".gamerecord.GameRecordResp.daylist: array expected");
                message.daylist = [];
                for (var i = 0; i < object.daylist.length; ++i) {
                    if (typeof object.daylist[i] !== "object")
                        throw TypeError(".gamerecord.GameRecordResp.daylist: object expected");
                    message.daylist[i] = $root.gamerecord.GameRecordResp.DayAmountItem.fromObject(object.daylist[i]);
                }
            }
            if (object.totalsize != null)
                message.totalsize = object.totalsize >>> 0;
            if (object.trans != null)
                if (typeof object.trans === "string")
                    $util.base64.decode(object.trans, message.trans = $util.newBuffer($util.base64.length(object.trans)), 0);
                else if (object.trans.length)
                    message.trans = object.trans;
            return message;
        };

        /**
         * Creates a plain object from a GameRecordResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamerecord.GameRecordResp
         * @static
         * @param {gamerecord.GameRecordResp} message GameRecordResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameRecordResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.list = [];
                object.daylist = [];
            }
            if (options.defaults) {
                object.uid = 0;
                object.game = 0;
                object.result = 0;
                object.timezoneinmin = 0;
                object.endflag = 0;
                object.totalsize = 0;
                if (options.bytes === String)
                    object.trans = "";
                else {
                    object.trans = [];
                    if (options.bytes !== Array)
                        object.trans = $util.newBuffer(object.trans);
                }
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.game != null && message.hasOwnProperty("game"))
                object.game = message.game;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.timezoneinmin != null && message.hasOwnProperty("timezoneinmin"))
                object.timezoneinmin = message.timezoneinmin;
            if (message.endflag != null && message.hasOwnProperty("endflag"))
                object.endflag = message.endflag;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.gamerecord.GameRecordResp.GameRecordItem.toObject(message.list[j], options);
            }
            if (message.daylist && message.daylist.length) {
                object.daylist = [];
                for (var j = 0; j < message.daylist.length; ++j)
                    object.daylist[j] = $root.gamerecord.GameRecordResp.DayAmountItem.toObject(message.daylist[j], options);
            }
            if (message.totalsize != null && message.hasOwnProperty("totalsize"))
                object.totalsize = message.totalsize;
            if (message.trans != null && message.hasOwnProperty("trans"))
                object.trans = options.bytes === String ? $util.base64.encode(message.trans, 0, message.trans.length) : options.bytes === Array ? Array.prototype.slice.call(message.trans) : message.trans;
            return object;
        };

        /**
         * Converts this GameRecordResp to JSON.
         * @function toJSON
         * @memberof gamerecord.GameRecordResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameRecordResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        GameRecordResp.GameRecordItem = (function() {

            /**
             * Properties of a GameRecordItem.
             * @memberof gamerecord.GameRecordResp
             * @interface IGameRecordItem
             * @property {string|null} [roundid] GameRecordItem roundid
             * @property {number|Long|null} [bet] GameRecordItem bet
             * @property {gamerecord.BET_ACT|null} [betact] GameRecordItem betact
             * @property {number|Long|null} [win] GameRecordItem win
             * @property {gamerecord.WIN_ACT|null} [winact] GameRecordItem winact
             * @property {number|Long|null} [timestamp] GameRecordItem timestamp
             * @property {number|null} [firstofdayflag] GameRecordItem firstofdayflag
             * @property {Uint8Array|null} [detail] GameRecordItem detail
             * @property {number|Long|null} [id] GameRecordItem id
             */

            /**
             * Constructs a new GameRecordItem.
             * @memberof gamerecord.GameRecordResp
             * @classdesc Represents a GameRecordItem.
             * @implements IGameRecordItem
             * @constructor
             * @param {gamerecord.GameRecordResp.IGameRecordItem=} [properties] Properties to set
             */
            function GameRecordItem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameRecordItem roundid.
             * @member {string} roundid
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @instance
             */
            GameRecordItem.prototype.roundid = "";

            /**
             * GameRecordItem bet.
             * @member {number|Long} bet
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @instance
             */
            GameRecordItem.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameRecordItem betact.
             * @member {gamerecord.BET_ACT} betact
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @instance
             */
            GameRecordItem.prototype.betact = 0;

            /**
             * GameRecordItem win.
             * @member {number|Long} win
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @instance
             */
            GameRecordItem.prototype.win = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GameRecordItem winact.
             * @member {gamerecord.WIN_ACT} winact
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @instance
             */
            GameRecordItem.prototype.winact = 0;

            /**
             * GameRecordItem timestamp.
             * @member {number|Long} timestamp
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @instance
             */
            GameRecordItem.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * GameRecordItem firstofdayflag.
             * @member {number} firstofdayflag
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @instance
             */
            GameRecordItem.prototype.firstofdayflag = 0;

            /**
             * GameRecordItem detail.
             * @member {Uint8Array} detail
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @instance
             */
            GameRecordItem.prototype.detail = $util.newBuffer([]);

            /**
             * GameRecordItem id.
             * @member {number|Long} id
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @instance
             */
            GameRecordItem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new GameRecordItem instance using the specified properties.
             * @function create
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @static
             * @param {gamerecord.GameRecordResp.IGameRecordItem=} [properties] Properties to set
             * @returns {gamerecord.GameRecordResp.GameRecordItem} GameRecordItem instance
             */
            GameRecordItem.create = function create(properties) {
                return new GameRecordItem(properties);
            };

            /**
             * Encodes the specified GameRecordItem message. Does not implicitly {@link gamerecord.GameRecordResp.GameRecordItem.verify|verify} messages.
             * @function encode
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @static
             * @param {gamerecord.GameRecordResp.IGameRecordItem} message GameRecordItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameRecordItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.roundid != null && Object.hasOwnProperty.call(message, "roundid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.roundid);
                if (message.bet != null && Object.hasOwnProperty.call(message, "bet"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.bet);
                if (message.betact != null && Object.hasOwnProperty.call(message, "betact"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.betact);
                if (message.win != null && Object.hasOwnProperty.call(message, "win"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.win);
                if (message.winact != null && Object.hasOwnProperty.call(message, "winact"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.winact);
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.timestamp);
                if (message.firstofdayflag != null && Object.hasOwnProperty.call(message, "firstofdayflag"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.firstofdayflag);
                if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.detail);
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.id);
                return writer;
            };

            /**
             * Encodes the specified GameRecordItem message, length delimited. Does not implicitly {@link gamerecord.GameRecordResp.GameRecordItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @static
             * @param {gamerecord.GameRecordResp.IGameRecordItem} message GameRecordItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameRecordItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameRecordItem message from the specified reader or buffer.
             * @function decode
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gamerecord.GameRecordResp.GameRecordItem} GameRecordItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameRecordItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamerecord.GameRecordResp.GameRecordItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roundid = reader.string();
                        break;
                    case 2:
                        message.bet = reader.int64();
                        break;
                    case 3:
                        message.betact = reader.int32();
                        break;
                    case 4:
                        message.win = reader.int64();
                        break;
                    case 5:
                        message.winact = reader.int32();
                        break;
                    case 6:
                        message.timestamp = reader.uint64();
                        break;
                    case 7:
                        message.firstofdayflag = reader.int32();
                        break;
                    case 8:
                        message.detail = reader.bytes();
                        break;
                    case 9:
                        message.id = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GameRecordItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gamerecord.GameRecordResp.GameRecordItem} GameRecordItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameRecordItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameRecordItem message.
             * @function verify
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameRecordItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.roundid != null && message.hasOwnProperty("roundid"))
                    if (!$util.isString(message.roundid))
                        return "roundid: string expected";
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (!$util.isInteger(message.bet) && !(message.bet && $util.isInteger(message.bet.low) && $util.isInteger(message.bet.high)))
                        return "bet: integer|Long expected";
                if (message.betact != null && message.hasOwnProperty("betact"))
                    switch (message.betact) {
                    default:
                        return "betact: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.win != null && message.hasOwnProperty("win"))
                    if (!$util.isInteger(message.win) && !(message.win && $util.isInteger(message.win.low) && $util.isInteger(message.win.high)))
                        return "win: integer|Long expected";
                if (message.winact != null && message.hasOwnProperty("winact"))
                    switch (message.winact) {
                    default:
                        return "winact: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                if (message.firstofdayflag != null && message.hasOwnProperty("firstofdayflag"))
                    if (!$util.isInteger(message.firstofdayflag))
                        return "firstofdayflag: integer expected";
                if (message.detail != null && message.hasOwnProperty("detail"))
                    if (!(message.detail && typeof message.detail.length === "number" || $util.isString(message.detail)))
                        return "detail: buffer expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                return null;
            };

            /**
             * Creates a GameRecordItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gamerecord.GameRecordResp.GameRecordItem} GameRecordItem
             */
            GameRecordItem.fromObject = function fromObject(object) {
                if (object instanceof $root.gamerecord.GameRecordResp.GameRecordItem)
                    return object;
                var message = new $root.gamerecord.GameRecordResp.GameRecordItem();
                if (object.roundid != null)
                    message.roundid = String(object.roundid);
                if (object.bet != null)
                    if ($util.Long)
                        (message.bet = $util.Long.fromValue(object.bet)).unsigned = false;
                    else if (typeof object.bet === "string")
                        message.bet = parseInt(object.bet, 10);
                    else if (typeof object.bet === "number")
                        message.bet = object.bet;
                    else if (typeof object.bet === "object")
                        message.bet = new $util.LongBits(object.bet.low >>> 0, object.bet.high >>> 0).toNumber();
                switch (object.betact) {
                case "BET_ACT_NONE":
                case 0:
                    message.betact = 0;
                    break;
                case "BET_ACT_NORMAL_BET":
                case 1:
                    message.betact = 1;
                    break;
                }
                if (object.win != null)
                    if ($util.Long)
                        (message.win = $util.Long.fromValue(object.win)).unsigned = false;
                    else if (typeof object.win === "string")
                        message.win = parseInt(object.win, 10);
                    else if (typeof object.win === "number")
                        message.win = object.win;
                    else if (typeof object.win === "object")
                        message.win = new $util.LongBits(object.win.low >>> 0, object.win.high >>> 0).toNumber();
                switch (object.winact) {
                case "WIN_ACT_NONE":
                case 0:
                    message.winact = 0;
                    break;
                case "WIN_ACT_NORMAL_WIN":
                case 1:
                    message.winact = 1;
                    break;
                case "WIN_ACT_JACKPOT":
                case 2:
                    message.winact = 2;
                    break;
                case "WIN_ACT_DEALER":
                case 3:
                    message.winact = 3;
                    break;
                }
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                if (object.firstofdayflag != null)
                    message.firstofdayflag = object.firstofdayflag | 0;
                if (object.detail != null)
                    if (typeof object.detail === "string")
                        $util.base64.decode(object.detail, message.detail = $util.newBuffer($util.base64.length(object.detail)), 0);
                    else if (object.detail.length)
                        message.detail = object.detail;
                if (object.id != null)
                    if ($util.Long)
                        (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                    else if (typeof object.id === "string")
                        message.id = parseInt(object.id, 10);
                    else if (typeof object.id === "number")
                        message.id = object.id;
                    else if (typeof object.id === "object")
                        message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a GameRecordItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @static
             * @param {gamerecord.GameRecordResp.GameRecordItem} message GameRecordItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameRecordItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.roundid = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bet = options.longs === String ? "0" : 0;
                    object.betact = options.enums === String ? "BET_ACT_NONE" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.win = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.win = options.longs === String ? "0" : 0;
                    object.winact = options.enums === String ? "WIN_ACT_NONE" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                    object.firstofdayflag = 0;
                    if (options.bytes === String)
                        object.detail = "";
                    else {
                        object.detail = [];
                        if (options.bytes !== Array)
                            object.detail = $util.newBuffer(object.detail);
                    }
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.id = options.longs === String ? "0" : 0;
                }
                if (message.roundid != null && message.hasOwnProperty("roundid"))
                    object.roundid = message.roundid;
                if (message.bet != null && message.hasOwnProperty("bet"))
                    if (typeof message.bet === "number")
                        object.bet = options.longs === String ? String(message.bet) : message.bet;
                    else
                        object.bet = options.longs === String ? $util.Long.prototype.toString.call(message.bet) : options.longs === Number ? new $util.LongBits(message.bet.low >>> 0, message.bet.high >>> 0).toNumber() : message.bet;
                if (message.betact != null && message.hasOwnProperty("betact"))
                    object.betact = options.enums === String ? $root.gamerecord.BET_ACT[message.betact] : message.betact;
                if (message.win != null && message.hasOwnProperty("win"))
                    if (typeof message.win === "number")
                        object.win = options.longs === String ? String(message.win) : message.win;
                    else
                        object.win = options.longs === String ? $util.Long.prototype.toString.call(message.win) : options.longs === Number ? new $util.LongBits(message.win.low >>> 0, message.win.high >>> 0).toNumber() : message.win;
                if (message.winact != null && message.hasOwnProperty("winact"))
                    object.winact = options.enums === String ? $root.gamerecord.WIN_ACT[message.winact] : message.winact;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                if (message.firstofdayflag != null && message.hasOwnProperty("firstofdayflag"))
                    object.firstofdayflag = message.firstofdayflag;
                if (message.detail != null && message.hasOwnProperty("detail"))
                    object.detail = options.bytes === String ? $util.base64.encode(message.detail, 0, message.detail.length) : options.bytes === Array ? Array.prototype.slice.call(message.detail) : message.detail;
                if (message.id != null && message.hasOwnProperty("id"))
                    if (typeof message.id === "number")
                        object.id = options.longs === String ? String(message.id) : message.id;
                    else
                        object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                return object;
            };

            /**
             * Converts this GameRecordItem to JSON.
             * @function toJSON
             * @memberof gamerecord.GameRecordResp.GameRecordItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameRecordItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GameRecordItem;
        })();

        GameRecordResp.DayAmountItem = (function() {

            /**
             * Properties of a DayAmountItem.
             * @memberof gamerecord.GameRecordResp
             * @interface IDayAmountItem
             * @property {number|null} [year] DayAmountItem year
             * @property {number|null} [month] DayAmountItem month
             * @property {number|null} [day] DayAmountItem day
             * @property {number|Long|null} [betamount] DayAmountItem betamount
             * @property {number|Long|null} [winamount] DayAmountItem winamount
             */

            /**
             * Constructs a new DayAmountItem.
             * @memberof gamerecord.GameRecordResp
             * @classdesc Represents a DayAmountItem.
             * @implements IDayAmountItem
             * @constructor
             * @param {gamerecord.GameRecordResp.IDayAmountItem=} [properties] Properties to set
             */
            function DayAmountItem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DayAmountItem year.
             * @member {number} year
             * @memberof gamerecord.GameRecordResp.DayAmountItem
             * @instance
             */
            DayAmountItem.prototype.year = 0;

            /**
             * DayAmountItem month.
             * @member {number} month
             * @memberof gamerecord.GameRecordResp.DayAmountItem
             * @instance
             */
            DayAmountItem.prototype.month = 0;

            /**
             * DayAmountItem day.
             * @member {number} day
             * @memberof gamerecord.GameRecordResp.DayAmountItem
             * @instance
             */
            DayAmountItem.prototype.day = 0;

            /**
             * DayAmountItem betamount.
             * @member {number|Long} betamount
             * @memberof gamerecord.GameRecordResp.DayAmountItem
             * @instance
             */
            DayAmountItem.prototype.betamount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * DayAmountItem winamount.
             * @member {number|Long} winamount
             * @memberof gamerecord.GameRecordResp.DayAmountItem
             * @instance
             */
            DayAmountItem.prototype.winamount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new DayAmountItem instance using the specified properties.
             * @function create
             * @memberof gamerecord.GameRecordResp.DayAmountItem
             * @static
             * @param {gamerecord.GameRecordResp.IDayAmountItem=} [properties] Properties to set
             * @returns {gamerecord.GameRecordResp.DayAmountItem} DayAmountItem instance
             */
            DayAmountItem.create = function create(properties) {
                return new DayAmountItem(properties);
            };

            /**
             * Encodes the specified DayAmountItem message. Does not implicitly {@link gamerecord.GameRecordResp.DayAmountItem.verify|verify} messages.
             * @function encode
             * @memberof gamerecord.GameRecordResp.DayAmountItem
             * @static
             * @param {gamerecord.GameRecordResp.IDayAmountItem} message DayAmountItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DayAmountItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.year != null && Object.hasOwnProperty.call(message, "year"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.year);
                if (message.month != null && Object.hasOwnProperty.call(message, "month"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.month);
                if (message.day != null && Object.hasOwnProperty.call(message, "day"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.day);
                if (message.betamount != null && Object.hasOwnProperty.call(message, "betamount"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.betamount);
                if (message.winamount != null && Object.hasOwnProperty.call(message, "winamount"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.winamount);
                return writer;
            };

            /**
             * Encodes the specified DayAmountItem message, length delimited. Does not implicitly {@link gamerecord.GameRecordResp.DayAmountItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gamerecord.GameRecordResp.DayAmountItem
             * @static
             * @param {gamerecord.GameRecordResp.IDayAmountItem} message DayAmountItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DayAmountItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DayAmountItem message from the specified reader or buffer.
             * @function decode
             * @memberof gamerecord.GameRecordResp.DayAmountItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gamerecord.GameRecordResp.DayAmountItem} DayAmountItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DayAmountItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamerecord.GameRecordResp.DayAmountItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.year = reader.uint32();
                        break;
                    case 2:
                        message.month = reader.uint32();
                        break;
                    case 3:
                        message.day = reader.uint32();
                        break;
                    case 4:
                        message.betamount = reader.int64();
                        break;
                    case 5:
                        message.winamount = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DayAmountItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gamerecord.GameRecordResp.DayAmountItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gamerecord.GameRecordResp.DayAmountItem} DayAmountItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DayAmountItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DayAmountItem message.
             * @function verify
             * @memberof gamerecord.GameRecordResp.DayAmountItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DayAmountItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.year != null && message.hasOwnProperty("year"))
                    if (!$util.isInteger(message.year))
                        return "year: integer expected";
                if (message.month != null && message.hasOwnProperty("month"))
                    if (!$util.isInteger(message.month))
                        return "month: integer expected";
                if (message.day != null && message.hasOwnProperty("day"))
                    if (!$util.isInteger(message.day))
                        return "day: integer expected";
                if (message.betamount != null && message.hasOwnProperty("betamount"))
                    if (!$util.isInteger(message.betamount) && !(message.betamount && $util.isInteger(message.betamount.low) && $util.isInteger(message.betamount.high)))
                        return "betamount: integer|Long expected";
                if (message.winamount != null && message.hasOwnProperty("winamount"))
                    if (!$util.isInteger(message.winamount) && !(message.winamount && $util.isInteger(message.winamount.low) && $util.isInteger(message.winamount.high)))
                        return "winamount: integer|Long expected";
                return null;
            };

            /**
             * Creates a DayAmountItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gamerecord.GameRecordResp.DayAmountItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gamerecord.GameRecordResp.DayAmountItem} DayAmountItem
             */
            DayAmountItem.fromObject = function fromObject(object) {
                if (object instanceof $root.gamerecord.GameRecordResp.DayAmountItem)
                    return object;
                var message = new $root.gamerecord.GameRecordResp.DayAmountItem();
                if (object.year != null)
                    message.year = object.year >>> 0;
                if (object.month != null)
                    message.month = object.month >>> 0;
                if (object.day != null)
                    message.day = object.day >>> 0;
                if (object.betamount != null)
                    if ($util.Long)
                        (message.betamount = $util.Long.fromValue(object.betamount)).unsigned = false;
                    else if (typeof object.betamount === "string")
                        message.betamount = parseInt(object.betamount, 10);
                    else if (typeof object.betamount === "number")
                        message.betamount = object.betamount;
                    else if (typeof object.betamount === "object")
                        message.betamount = new $util.LongBits(object.betamount.low >>> 0, object.betamount.high >>> 0).toNumber();
                if (object.winamount != null)
                    if ($util.Long)
                        (message.winamount = $util.Long.fromValue(object.winamount)).unsigned = false;
                    else if (typeof object.winamount === "string")
                        message.winamount = parseInt(object.winamount, 10);
                    else if (typeof object.winamount === "number")
                        message.winamount = object.winamount;
                    else if (typeof object.winamount === "object")
                        message.winamount = new $util.LongBits(object.winamount.low >>> 0, object.winamount.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a DayAmountItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gamerecord.GameRecordResp.DayAmountItem
             * @static
             * @param {gamerecord.GameRecordResp.DayAmountItem} message DayAmountItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DayAmountItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.year = 0;
                    object.month = 0;
                    object.day = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.betamount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.betamount = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.winamount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.winamount = options.longs === String ? "0" : 0;
                }
                if (message.year != null && message.hasOwnProperty("year"))
                    object.year = message.year;
                if (message.month != null && message.hasOwnProperty("month"))
                    object.month = message.month;
                if (message.day != null && message.hasOwnProperty("day"))
                    object.day = message.day;
                if (message.betamount != null && message.hasOwnProperty("betamount"))
                    if (typeof message.betamount === "number")
                        object.betamount = options.longs === String ? String(message.betamount) : message.betamount;
                    else
                        object.betamount = options.longs === String ? $util.Long.prototype.toString.call(message.betamount) : options.longs === Number ? new $util.LongBits(message.betamount.low >>> 0, message.betamount.high >>> 0).toNumber() : message.betamount;
                if (message.winamount != null && message.hasOwnProperty("winamount"))
                    if (typeof message.winamount === "number")
                        object.winamount = options.longs === String ? String(message.winamount) : message.winamount;
                    else
                        object.winamount = options.longs === String ? $util.Long.prototype.toString.call(message.winamount) : options.longs === Number ? new $util.LongBits(message.winamount.low >>> 0, message.winamount.high >>> 0).toNumber() : message.winamount;
                return object;
            };

            /**
             * Converts this DayAmountItem to JSON.
             * @function toJSON
             * @memberof gamerecord.GameRecordResp.DayAmountItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DayAmountItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DayAmountItem;
        })();

        return GameRecordResp;
    })();

    gamerecord.GameRecordDetailReq = (function() {

        /**
         * Properties of a GameRecordDetailReq.
         * @memberof gamerecord
         * @interface IGameRecordDetailReq
         * @property {number|null} [uid] GameRecordDetailReq uid
         * @property {number|null} [game] GameRecordDetailReq game
         * @property {number|Long|null} [id] GameRecordDetailReq id
         */

        /**
         * Constructs a new GameRecordDetailReq.
         * @memberof gamerecord
         * @classdesc Represents a GameRecordDetailReq.
         * @implements IGameRecordDetailReq
         * @constructor
         * @param {gamerecord.IGameRecordDetailReq=} [properties] Properties to set
         */
        function GameRecordDetailReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameRecordDetailReq uid.
         * @member {number} uid
         * @memberof gamerecord.GameRecordDetailReq
         * @instance
         */
        GameRecordDetailReq.prototype.uid = 0;

        /**
         * GameRecordDetailReq game.
         * @member {number} game
         * @memberof gamerecord.GameRecordDetailReq
         * @instance
         */
        GameRecordDetailReq.prototype.game = 0;

        /**
         * GameRecordDetailReq id.
         * @member {number|Long} id
         * @memberof gamerecord.GameRecordDetailReq
         * @instance
         */
        GameRecordDetailReq.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new GameRecordDetailReq instance using the specified properties.
         * @function create
         * @memberof gamerecord.GameRecordDetailReq
         * @static
         * @param {gamerecord.IGameRecordDetailReq=} [properties] Properties to set
         * @returns {gamerecord.GameRecordDetailReq} GameRecordDetailReq instance
         */
        GameRecordDetailReq.create = function create(properties) {
            return new GameRecordDetailReq(properties);
        };

        /**
         * Encodes the specified GameRecordDetailReq message. Does not implicitly {@link gamerecord.GameRecordDetailReq.verify|verify} messages.
         * @function encode
         * @memberof gamerecord.GameRecordDetailReq
         * @static
         * @param {gamerecord.IGameRecordDetailReq} message GameRecordDetailReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecordDetailReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.game != null && Object.hasOwnProperty.call(message, "game"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.game);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.id);
            return writer;
        };

        /**
         * Encodes the specified GameRecordDetailReq message, length delimited. Does not implicitly {@link gamerecord.GameRecordDetailReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamerecord.GameRecordDetailReq
         * @static
         * @param {gamerecord.IGameRecordDetailReq} message GameRecordDetailReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecordDetailReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameRecordDetailReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamerecord.GameRecordDetailReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamerecord.GameRecordDetailReq} GameRecordDetailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecordDetailReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamerecord.GameRecordDetailReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.game = reader.uint32();
                    break;
                case 3:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameRecordDetailReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamerecord.GameRecordDetailReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamerecord.GameRecordDetailReq} GameRecordDetailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecordDetailReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameRecordDetailReq message.
         * @function verify
         * @memberof gamerecord.GameRecordDetailReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameRecordDetailReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.game != null && message.hasOwnProperty("game"))
                if (!$util.isInteger(message.game))
                    return "game: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            return null;
        };

        /**
         * Creates a GameRecordDetailReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamerecord.GameRecordDetailReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamerecord.GameRecordDetailReq} GameRecordDetailReq
         */
        GameRecordDetailReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamerecord.GameRecordDetailReq)
                return object;
            var message = new $root.gamerecord.GameRecordDetailReq();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.game != null)
                message.game = object.game >>> 0;
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a GameRecordDetailReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamerecord.GameRecordDetailReq
         * @static
         * @param {gamerecord.GameRecordDetailReq} message GameRecordDetailReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameRecordDetailReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.game = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.game != null && message.hasOwnProperty("game"))
                object.game = message.game;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            return object;
        };

        /**
         * Converts this GameRecordDetailReq to JSON.
         * @function toJSON
         * @memberof gamerecord.GameRecordDetailReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameRecordDetailReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameRecordDetailReq;
    })();

    gamerecord.GameRecordDetailResp = (function() {

        /**
         * Properties of a GameRecordDetailResp.
         * @memberof gamerecord
         * @interface IGameRecordDetailResp
         * @property {number|null} [uid] GameRecordDetailResp uid
         * @property {number|null} [game] GameRecordDetailResp game
         * @property {number|Long|null} [id] GameRecordDetailResp id
         * @property {number|null} [result] GameRecordDetailResp result
         * @property {Uint8Array|null} [detail] GameRecordDetailResp detail
         */

        /**
         * Constructs a new GameRecordDetailResp.
         * @memberof gamerecord
         * @classdesc Represents a GameRecordDetailResp.
         * @implements IGameRecordDetailResp
         * @constructor
         * @param {gamerecord.IGameRecordDetailResp=} [properties] Properties to set
         */
        function GameRecordDetailResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameRecordDetailResp uid.
         * @member {number} uid
         * @memberof gamerecord.GameRecordDetailResp
         * @instance
         */
        GameRecordDetailResp.prototype.uid = 0;

        /**
         * GameRecordDetailResp game.
         * @member {number} game
         * @memberof gamerecord.GameRecordDetailResp
         * @instance
         */
        GameRecordDetailResp.prototype.game = 0;

        /**
         * GameRecordDetailResp id.
         * @member {number|Long} id
         * @memberof gamerecord.GameRecordDetailResp
         * @instance
         */
        GameRecordDetailResp.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GameRecordDetailResp result.
         * @member {number} result
         * @memberof gamerecord.GameRecordDetailResp
         * @instance
         */
        GameRecordDetailResp.prototype.result = 0;

        /**
         * GameRecordDetailResp detail.
         * @member {Uint8Array} detail
         * @memberof gamerecord.GameRecordDetailResp
         * @instance
         */
        GameRecordDetailResp.prototype.detail = $util.newBuffer([]);

        /**
         * Creates a new GameRecordDetailResp instance using the specified properties.
         * @function create
         * @memberof gamerecord.GameRecordDetailResp
         * @static
         * @param {gamerecord.IGameRecordDetailResp=} [properties] Properties to set
         * @returns {gamerecord.GameRecordDetailResp} GameRecordDetailResp instance
         */
        GameRecordDetailResp.create = function create(properties) {
            return new GameRecordDetailResp(properties);
        };

        /**
         * Encodes the specified GameRecordDetailResp message. Does not implicitly {@link gamerecord.GameRecordDetailResp.verify|verify} messages.
         * @function encode
         * @memberof gamerecord.GameRecordDetailResp
         * @static
         * @param {gamerecord.IGameRecordDetailResp} message GameRecordDetailResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecordDetailResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.game != null && Object.hasOwnProperty.call(message, "game"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.game);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.id);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.result);
            if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.detail);
            return writer;
        };

        /**
         * Encodes the specified GameRecordDetailResp message, length delimited. Does not implicitly {@link gamerecord.GameRecordDetailResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamerecord.GameRecordDetailResp
         * @static
         * @param {gamerecord.IGameRecordDetailResp} message GameRecordDetailResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecordDetailResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameRecordDetailResp message from the specified reader or buffer.
         * @function decode
         * @memberof gamerecord.GameRecordDetailResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamerecord.GameRecordDetailResp} GameRecordDetailResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecordDetailResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamerecord.GameRecordDetailResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.game = reader.uint32();
                    break;
                case 3:
                    message.id = reader.uint64();
                    break;
                case 4:
                    message.result = reader.int32();
                    break;
                case 5:
                    message.detail = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameRecordDetailResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamerecord.GameRecordDetailResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamerecord.GameRecordDetailResp} GameRecordDetailResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecordDetailResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameRecordDetailResp message.
         * @function verify
         * @memberof gamerecord.GameRecordDetailResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameRecordDetailResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.game != null && message.hasOwnProperty("game"))
                if (!$util.isInteger(message.game))
                    return "game: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.detail != null && message.hasOwnProperty("detail"))
                if (!(message.detail && typeof message.detail.length === "number" || $util.isString(message.detail)))
                    return "detail: buffer expected";
            return null;
        };

        /**
         * Creates a GameRecordDetailResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamerecord.GameRecordDetailResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamerecord.GameRecordDetailResp} GameRecordDetailResp
         */
        GameRecordDetailResp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamerecord.GameRecordDetailResp)
                return object;
            var message = new $root.gamerecord.GameRecordDetailResp();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.game != null)
                message.game = object.game >>> 0;
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.result != null)
                message.result = object.result | 0;
            if (object.detail != null)
                if (typeof object.detail === "string")
                    $util.base64.decode(object.detail, message.detail = $util.newBuffer($util.base64.length(object.detail)), 0);
                else if (object.detail.length)
                    message.detail = object.detail;
            return message;
        };

        /**
         * Creates a plain object from a GameRecordDetailResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamerecord.GameRecordDetailResp
         * @static
         * @param {gamerecord.GameRecordDetailResp} message GameRecordDetailResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameRecordDetailResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.game = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.result = 0;
                if (options.bytes === String)
                    object.detail = "";
                else {
                    object.detail = [];
                    if (options.bytes !== Array)
                        object.detail = $util.newBuffer(object.detail);
                }
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.game != null && message.hasOwnProperty("game"))
                object.game = message.game;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.detail != null && message.hasOwnProperty("detail"))
                object.detail = options.bytes === String ? $util.base64.encode(message.detail, 0, message.detail.length) : options.bytes === Array ? Array.prototype.slice.call(message.detail) : message.detail;
            return object;
        };

        /**
         * Converts this GameRecordDetailResp to JSON.
         * @function toJSON
         * @memberof gamerecord.GameRecordDetailResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameRecordDetailResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameRecordDetailResp;
    })();

    gamerecord.GameRecordData = (function() {

        /**
         * Properties of a GameRecordData.
         * @memberof gamerecord
         * @interface IGameRecordData
         * @property {number|null} [uid] GameRecordData uid
         * @property {number|null} [game] GameRecordData game
         * @property {string|null} [roundid] GameRecordData roundid
         * @property {number|Long|null} [bet] GameRecordData bet
         * @property {gamerecord.BET_ACT|null} [betact] GameRecordData betact
         * @property {number|Long|null} [win] GameRecordData win
         * @property {gamerecord.WIN_ACT|null} [winact] GameRecordData winact
         * @property {number|Long|null} [timestamp] GameRecordData timestamp
         * @property {Uint8Array|null} [detail] GameRecordData detail
         * @property {number|null} [agencyid] GameRecordData agencyid
         */

        /**
         * Constructs a new GameRecordData.
         * @memberof gamerecord
         * @classdesc Represents a GameRecordData.
         * @implements IGameRecordData
         * @constructor
         * @param {gamerecord.IGameRecordData=} [properties] Properties to set
         */
        function GameRecordData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameRecordData uid.
         * @member {number} uid
         * @memberof gamerecord.GameRecordData
         * @instance
         */
        GameRecordData.prototype.uid = 0;

        /**
         * GameRecordData game.
         * @member {number} game
         * @memberof gamerecord.GameRecordData
         * @instance
         */
        GameRecordData.prototype.game = 0;

        /**
         * GameRecordData roundid.
         * @member {string} roundid
         * @memberof gamerecord.GameRecordData
         * @instance
         */
        GameRecordData.prototype.roundid = "";

        /**
         * GameRecordData bet.
         * @member {number|Long} bet
         * @memberof gamerecord.GameRecordData
         * @instance
         */
        GameRecordData.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameRecordData betact.
         * @member {gamerecord.BET_ACT} betact
         * @memberof gamerecord.GameRecordData
         * @instance
         */
        GameRecordData.prototype.betact = 0;

        /**
         * GameRecordData win.
         * @member {number|Long} win
         * @memberof gamerecord.GameRecordData
         * @instance
         */
        GameRecordData.prototype.win = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameRecordData winact.
         * @member {gamerecord.WIN_ACT} winact
         * @memberof gamerecord.GameRecordData
         * @instance
         */
        GameRecordData.prototype.winact = 0;

        /**
         * GameRecordData timestamp.
         * @member {number|Long} timestamp
         * @memberof gamerecord.GameRecordData
         * @instance
         */
        GameRecordData.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GameRecordData detail.
         * @member {Uint8Array} detail
         * @memberof gamerecord.GameRecordData
         * @instance
         */
        GameRecordData.prototype.detail = $util.newBuffer([]);

        /**
         * GameRecordData agencyid.
         * @member {number} agencyid
         * @memberof gamerecord.GameRecordData
         * @instance
         */
        GameRecordData.prototype.agencyid = 0;

        /**
         * Creates a new GameRecordData instance using the specified properties.
         * @function create
         * @memberof gamerecord.GameRecordData
         * @static
         * @param {gamerecord.IGameRecordData=} [properties] Properties to set
         * @returns {gamerecord.GameRecordData} GameRecordData instance
         */
        GameRecordData.create = function create(properties) {
            return new GameRecordData(properties);
        };

        /**
         * Encodes the specified GameRecordData message. Does not implicitly {@link gamerecord.GameRecordData.verify|verify} messages.
         * @function encode
         * @memberof gamerecord.GameRecordData
         * @static
         * @param {gamerecord.IGameRecordData} message GameRecordData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecordData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.game != null && Object.hasOwnProperty.call(message, "game"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.game);
            if (message.roundid != null && Object.hasOwnProperty.call(message, "roundid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roundid);
            if (message.bet != null && Object.hasOwnProperty.call(message, "bet"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.bet);
            if (message.betact != null && Object.hasOwnProperty.call(message, "betact"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.betact);
            if (message.win != null && Object.hasOwnProperty.call(message, "win"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.win);
            if (message.winact != null && Object.hasOwnProperty.call(message, "winact"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.winact);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.timestamp);
            if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.detail);
            if (message.agencyid != null && Object.hasOwnProperty.call(message, "agencyid"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.agencyid);
            return writer;
        };

        /**
         * Encodes the specified GameRecordData message, length delimited. Does not implicitly {@link gamerecord.GameRecordData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamerecord.GameRecordData
         * @static
         * @param {gamerecord.IGameRecordData} message GameRecordData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecordData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameRecordData message from the specified reader or buffer.
         * @function decode
         * @memberof gamerecord.GameRecordData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamerecord.GameRecordData} GameRecordData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecordData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamerecord.GameRecordData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.game = reader.uint32();
                    break;
                case 3:
                    message.roundid = reader.string();
                    break;
                case 4:
                    message.bet = reader.int64();
                    break;
                case 5:
                    message.betact = reader.int32();
                    break;
                case 6:
                    message.win = reader.int64();
                    break;
                case 7:
                    message.winact = reader.int32();
                    break;
                case 8:
                    message.timestamp = reader.uint64();
                    break;
                case 9:
                    message.detail = reader.bytes();
                    break;
                case 10:
                    message.agencyid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameRecordData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamerecord.GameRecordData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamerecord.GameRecordData} GameRecordData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecordData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameRecordData message.
         * @function verify
         * @memberof gamerecord.GameRecordData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameRecordData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.game != null && message.hasOwnProperty("game"))
                if (!$util.isInteger(message.game))
                    return "game: integer expected";
            if (message.roundid != null && message.hasOwnProperty("roundid"))
                if (!$util.isString(message.roundid))
                    return "roundid: string expected";
            if (message.bet != null && message.hasOwnProperty("bet"))
                if (!$util.isInteger(message.bet) && !(message.bet && $util.isInteger(message.bet.low) && $util.isInteger(message.bet.high)))
                    return "bet: integer|Long expected";
            if (message.betact != null && message.hasOwnProperty("betact"))
                switch (message.betact) {
                default:
                    return "betact: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.win != null && message.hasOwnProperty("win"))
                if (!$util.isInteger(message.win) && !(message.win && $util.isInteger(message.win.low) && $util.isInteger(message.win.high)))
                    return "win: integer|Long expected";
            if (message.winact != null && message.hasOwnProperty("winact"))
                switch (message.winact) {
                default:
                    return "winact: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.detail != null && message.hasOwnProperty("detail"))
                if (!(message.detail && typeof message.detail.length === "number" || $util.isString(message.detail)))
                    return "detail: buffer expected";
            if (message.agencyid != null && message.hasOwnProperty("agencyid"))
                if (!$util.isInteger(message.agencyid))
                    return "agencyid: integer expected";
            return null;
        };

        /**
         * Creates a GameRecordData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamerecord.GameRecordData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamerecord.GameRecordData} GameRecordData
         */
        GameRecordData.fromObject = function fromObject(object) {
            if (object instanceof $root.gamerecord.GameRecordData)
                return object;
            var message = new $root.gamerecord.GameRecordData();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.game != null)
                message.game = object.game >>> 0;
            if (object.roundid != null)
                message.roundid = String(object.roundid);
            if (object.bet != null)
                if ($util.Long)
                    (message.bet = $util.Long.fromValue(object.bet)).unsigned = false;
                else if (typeof object.bet === "string")
                    message.bet = parseInt(object.bet, 10);
                else if (typeof object.bet === "number")
                    message.bet = object.bet;
                else if (typeof object.bet === "object")
                    message.bet = new $util.LongBits(object.bet.low >>> 0, object.bet.high >>> 0).toNumber();
            switch (object.betact) {
            case "BET_ACT_NONE":
            case 0:
                message.betact = 0;
                break;
            case "BET_ACT_NORMAL_BET":
            case 1:
                message.betact = 1;
                break;
            }
            if (object.win != null)
                if ($util.Long)
                    (message.win = $util.Long.fromValue(object.win)).unsigned = false;
                else if (typeof object.win === "string")
                    message.win = parseInt(object.win, 10);
                else if (typeof object.win === "number")
                    message.win = object.win;
                else if (typeof object.win === "object")
                    message.win = new $util.LongBits(object.win.low >>> 0, object.win.high >>> 0).toNumber();
            switch (object.winact) {
            case "WIN_ACT_NONE":
            case 0:
                message.winact = 0;
                break;
            case "WIN_ACT_NORMAL_WIN":
            case 1:
                message.winact = 1;
                break;
            case "WIN_ACT_JACKPOT":
            case 2:
                message.winact = 2;
                break;
            case "WIN_ACT_DEALER":
            case 3:
                message.winact = 3;
                break;
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            if (object.detail != null)
                if (typeof object.detail === "string")
                    $util.base64.decode(object.detail, message.detail = $util.newBuffer($util.base64.length(object.detail)), 0);
                else if (object.detail.length)
                    message.detail = object.detail;
            if (object.agencyid != null)
                message.agencyid = object.agencyid >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameRecordData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamerecord.GameRecordData
         * @static
         * @param {gamerecord.GameRecordData} message GameRecordData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameRecordData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.game = 0;
                object.roundid = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bet = options.longs === String ? "0" : 0;
                object.betact = options.enums === String ? "BET_ACT_NONE" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.win = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.win = options.longs === String ? "0" : 0;
                object.winact = options.enums === String ? "WIN_ACT_NONE" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.detail = "";
                else {
                    object.detail = [];
                    if (options.bytes !== Array)
                        object.detail = $util.newBuffer(object.detail);
                }
                object.agencyid = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.game != null && message.hasOwnProperty("game"))
                object.game = message.game;
            if (message.roundid != null && message.hasOwnProperty("roundid"))
                object.roundid = message.roundid;
            if (message.bet != null && message.hasOwnProperty("bet"))
                if (typeof message.bet === "number")
                    object.bet = options.longs === String ? String(message.bet) : message.bet;
                else
                    object.bet = options.longs === String ? $util.Long.prototype.toString.call(message.bet) : options.longs === Number ? new $util.LongBits(message.bet.low >>> 0, message.bet.high >>> 0).toNumber() : message.bet;
            if (message.betact != null && message.hasOwnProperty("betact"))
                object.betact = options.enums === String ? $root.gamerecord.BET_ACT[message.betact] : message.betact;
            if (message.win != null && message.hasOwnProperty("win"))
                if (typeof message.win === "number")
                    object.win = options.longs === String ? String(message.win) : message.win;
                else
                    object.win = options.longs === String ? $util.Long.prototype.toString.call(message.win) : options.longs === Number ? new $util.LongBits(message.win.low >>> 0, message.win.high >>> 0).toNumber() : message.win;
            if (message.winact != null && message.hasOwnProperty("winact"))
                object.winact = options.enums === String ? $root.gamerecord.WIN_ACT[message.winact] : message.winact;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            if (message.detail != null && message.hasOwnProperty("detail"))
                object.detail = options.bytes === String ? $util.base64.encode(message.detail, 0, message.detail.length) : options.bytes === Array ? Array.prototype.slice.call(message.detail) : message.detail;
            if (message.agencyid != null && message.hasOwnProperty("agencyid"))
                object.agencyid = message.agencyid;
            return object;
        };

        /**
         * Converts this GameRecordData to JSON.
         * @function toJSON
         * @memberof gamerecord.GameRecordData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameRecordData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameRecordData;
    })();

    gamerecord.GameRecordPush = (function() {

        /**
         * Properties of a GameRecordPush.
         * @memberof gamerecord
         * @interface IGameRecordPush
         * @property {Array.<gamerecord.IGameRecordData>|null} [list] GameRecordPush list
         */

        /**
         * Constructs a new GameRecordPush.
         * @memberof gamerecord
         * @classdesc Represents a GameRecordPush.
         * @implements IGameRecordPush
         * @constructor
         * @param {gamerecord.IGameRecordPush=} [properties] Properties to set
         */
        function GameRecordPush(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameRecordPush list.
         * @member {Array.<gamerecord.IGameRecordData>} list
         * @memberof gamerecord.GameRecordPush
         * @instance
         */
        GameRecordPush.prototype.list = $util.emptyArray;

        /**
         * Creates a new GameRecordPush instance using the specified properties.
         * @function create
         * @memberof gamerecord.GameRecordPush
         * @static
         * @param {gamerecord.IGameRecordPush=} [properties] Properties to set
         * @returns {gamerecord.GameRecordPush} GameRecordPush instance
         */
        GameRecordPush.create = function create(properties) {
            return new GameRecordPush(properties);
        };

        /**
         * Encodes the specified GameRecordPush message. Does not implicitly {@link gamerecord.GameRecordPush.verify|verify} messages.
         * @function encode
         * @memberof gamerecord.GameRecordPush
         * @static
         * @param {gamerecord.IGameRecordPush} message GameRecordPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecordPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.gamerecord.GameRecordData.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameRecordPush message, length delimited. Does not implicitly {@link gamerecord.GameRecordPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamerecord.GameRecordPush
         * @static
         * @param {gamerecord.IGameRecordPush} message GameRecordPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecordPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameRecordPush message from the specified reader or buffer.
         * @function decode
         * @memberof gamerecord.GameRecordPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamerecord.GameRecordPush} GameRecordPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecordPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamerecord.GameRecordPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.gamerecord.GameRecordData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameRecordPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamerecord.GameRecordPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamerecord.GameRecordPush} GameRecordPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecordPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameRecordPush message.
         * @function verify
         * @memberof gamerecord.GameRecordPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameRecordPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.gamerecord.GameRecordData.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameRecordPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamerecord.GameRecordPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamerecord.GameRecordPush} GameRecordPush
         */
        GameRecordPush.fromObject = function fromObject(object) {
            if (object instanceof $root.gamerecord.GameRecordPush)
                return object;
            var message = new $root.gamerecord.GameRecordPush();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".gamerecord.GameRecordPush.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".gamerecord.GameRecordPush.list: object expected");
                    message.list[i] = $root.gamerecord.GameRecordData.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameRecordPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamerecord.GameRecordPush
         * @static
         * @param {gamerecord.GameRecordPush} message GameRecordPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameRecordPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.gamerecord.GameRecordData.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this GameRecordPush to JSON.
         * @function toJSON
         * @memberof gamerecord.GameRecordPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameRecordPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameRecordPush;
    })();

    gamerecord.GameRecordDataCache = (function() {

        /**
         * Properties of a GameRecordDataCache.
         * @memberof gamerecord
         * @interface IGameRecordDataCache
         * @property {number|null} [uid] GameRecordDataCache uid
         * @property {number|null} [game] GameRecordDataCache game
         * @property {string|null} [roundid] GameRecordDataCache roundid
         * @property {number|Long|null} [bet] GameRecordDataCache bet
         * @property {gamerecord.BET_ACT|null} [betact] GameRecordDataCache betact
         * @property {number|Long|null} [win] GameRecordDataCache win
         * @property {gamerecord.WIN_ACT|null} [winact] GameRecordDataCache winact
         * @property {number|Long|null} [timestamp] GameRecordDataCache timestamp
         * @property {Uint8Array|null} [detail] GameRecordDataCache detail
         * @property {number|Long|null} [daybetamount] GameRecordDataCache daybetamount
         * @property {number|Long|null} [daywinamount] GameRecordDataCache daywinamount
         * @property {number|null} [timezoneinmin] GameRecordDataCache timezoneinmin
         * @property {number|null} [firstofdayflag] GameRecordDataCache firstofdayflag
         * @property {number|null} [recordcount] GameRecordDataCache recordcount
         * @property {number|Long|null} [cacheindex] GameRecordDataCache cacheindex
         */

        /**
         * Constructs a new GameRecordDataCache.
         * @memberof gamerecord
         * @classdesc Represents a GameRecordDataCache.
         * @implements IGameRecordDataCache
         * @constructor
         * @param {gamerecord.IGameRecordDataCache=} [properties] Properties to set
         */
        function GameRecordDataCache(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameRecordDataCache uid.
         * @member {number} uid
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         */
        GameRecordDataCache.prototype.uid = 0;

        /**
         * GameRecordDataCache game.
         * @member {number} game
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         */
        GameRecordDataCache.prototype.game = 0;

        /**
         * GameRecordDataCache roundid.
         * @member {string} roundid
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         */
        GameRecordDataCache.prototype.roundid = "";

        /**
         * GameRecordDataCache bet.
         * @member {number|Long} bet
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         */
        GameRecordDataCache.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameRecordDataCache betact.
         * @member {gamerecord.BET_ACT} betact
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         */
        GameRecordDataCache.prototype.betact = 0;

        /**
         * GameRecordDataCache win.
         * @member {number|Long} win
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         */
        GameRecordDataCache.prototype.win = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameRecordDataCache winact.
         * @member {gamerecord.WIN_ACT} winact
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         */
        GameRecordDataCache.prototype.winact = 0;

        /**
         * GameRecordDataCache timestamp.
         * @member {number|Long} timestamp
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         */
        GameRecordDataCache.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GameRecordDataCache detail.
         * @member {Uint8Array} detail
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         */
        GameRecordDataCache.prototype.detail = $util.newBuffer([]);

        /**
         * GameRecordDataCache daybetamount.
         * @member {number|Long} daybetamount
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         */
        GameRecordDataCache.prototype.daybetamount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameRecordDataCache daywinamount.
         * @member {number|Long} daywinamount
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         */
        GameRecordDataCache.prototype.daywinamount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameRecordDataCache timezoneinmin.
         * @member {number} timezoneinmin
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         */
        GameRecordDataCache.prototype.timezoneinmin = 0;

        /**
         * GameRecordDataCache firstofdayflag.
         * @member {number} firstofdayflag
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         */
        GameRecordDataCache.prototype.firstofdayflag = 0;

        /**
         * GameRecordDataCache recordcount.
         * @member {number} recordcount
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         */
        GameRecordDataCache.prototype.recordcount = 0;

        /**
         * GameRecordDataCache cacheindex.
         * @member {number|Long} cacheindex
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         */
        GameRecordDataCache.prototype.cacheindex = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new GameRecordDataCache instance using the specified properties.
         * @function create
         * @memberof gamerecord.GameRecordDataCache
         * @static
         * @param {gamerecord.IGameRecordDataCache=} [properties] Properties to set
         * @returns {gamerecord.GameRecordDataCache} GameRecordDataCache instance
         */
        GameRecordDataCache.create = function create(properties) {
            return new GameRecordDataCache(properties);
        };

        /**
         * Encodes the specified GameRecordDataCache message. Does not implicitly {@link gamerecord.GameRecordDataCache.verify|verify} messages.
         * @function encode
         * @memberof gamerecord.GameRecordDataCache
         * @static
         * @param {gamerecord.IGameRecordDataCache} message GameRecordDataCache message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecordDataCache.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.game != null && Object.hasOwnProperty.call(message, "game"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.game);
            if (message.roundid != null && Object.hasOwnProperty.call(message, "roundid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roundid);
            if (message.bet != null && Object.hasOwnProperty.call(message, "bet"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.bet);
            if (message.betact != null && Object.hasOwnProperty.call(message, "betact"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.betact);
            if (message.win != null && Object.hasOwnProperty.call(message, "win"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.win);
            if (message.winact != null && Object.hasOwnProperty.call(message, "winact"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.winact);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.timestamp);
            if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.detail);
            if (message.daybetamount != null && Object.hasOwnProperty.call(message, "daybetamount"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.daybetamount);
            if (message.daywinamount != null && Object.hasOwnProperty.call(message, "daywinamount"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.daywinamount);
            if (message.timezoneinmin != null && Object.hasOwnProperty.call(message, "timezoneinmin"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.timezoneinmin);
            if (message.firstofdayflag != null && Object.hasOwnProperty.call(message, "firstofdayflag"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.firstofdayflag);
            if (message.recordcount != null && Object.hasOwnProperty.call(message, "recordcount"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.recordcount);
            if (message.cacheindex != null && Object.hasOwnProperty.call(message, "cacheindex"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint64(message.cacheindex);
            return writer;
        };

        /**
         * Encodes the specified GameRecordDataCache message, length delimited. Does not implicitly {@link gamerecord.GameRecordDataCache.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamerecord.GameRecordDataCache
         * @static
         * @param {gamerecord.IGameRecordDataCache} message GameRecordDataCache message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRecordDataCache.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameRecordDataCache message from the specified reader or buffer.
         * @function decode
         * @memberof gamerecord.GameRecordDataCache
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamerecord.GameRecordDataCache} GameRecordDataCache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecordDataCache.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamerecord.GameRecordDataCache();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.game = reader.uint32();
                    break;
                case 3:
                    message.roundid = reader.string();
                    break;
                case 4:
                    message.bet = reader.int64();
                    break;
                case 5:
                    message.betact = reader.int32();
                    break;
                case 6:
                    message.win = reader.int64();
                    break;
                case 7:
                    message.winact = reader.int32();
                    break;
                case 8:
                    message.timestamp = reader.uint64();
                    break;
                case 9:
                    message.detail = reader.bytes();
                    break;
                case 10:
                    message.daybetamount = reader.int64();
                    break;
                case 11:
                    message.daywinamount = reader.int64();
                    break;
                case 12:
                    message.timezoneinmin = reader.int32();
                    break;
                case 13:
                    message.firstofdayflag = reader.int32();
                    break;
                case 14:
                    message.recordcount = reader.uint32();
                    break;
                case 15:
                    message.cacheindex = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameRecordDataCache message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamerecord.GameRecordDataCache
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamerecord.GameRecordDataCache} GameRecordDataCache
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRecordDataCache.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameRecordDataCache message.
         * @function verify
         * @memberof gamerecord.GameRecordDataCache
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameRecordDataCache.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.game != null && message.hasOwnProperty("game"))
                if (!$util.isInteger(message.game))
                    return "game: integer expected";
            if (message.roundid != null && message.hasOwnProperty("roundid"))
                if (!$util.isString(message.roundid))
                    return "roundid: string expected";
            if (message.bet != null && message.hasOwnProperty("bet"))
                if (!$util.isInteger(message.bet) && !(message.bet && $util.isInteger(message.bet.low) && $util.isInteger(message.bet.high)))
                    return "bet: integer|Long expected";
            if (message.betact != null && message.hasOwnProperty("betact"))
                switch (message.betact) {
                default:
                    return "betact: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.win != null && message.hasOwnProperty("win"))
                if (!$util.isInteger(message.win) && !(message.win && $util.isInteger(message.win.low) && $util.isInteger(message.win.high)))
                    return "win: integer|Long expected";
            if (message.winact != null && message.hasOwnProperty("winact"))
                switch (message.winact) {
                default:
                    return "winact: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.detail != null && message.hasOwnProperty("detail"))
                if (!(message.detail && typeof message.detail.length === "number" || $util.isString(message.detail)))
                    return "detail: buffer expected";
            if (message.daybetamount != null && message.hasOwnProperty("daybetamount"))
                if (!$util.isInteger(message.daybetamount) && !(message.daybetamount && $util.isInteger(message.daybetamount.low) && $util.isInteger(message.daybetamount.high)))
                    return "daybetamount: integer|Long expected";
            if (message.daywinamount != null && message.hasOwnProperty("daywinamount"))
                if (!$util.isInteger(message.daywinamount) && !(message.daywinamount && $util.isInteger(message.daywinamount.low) && $util.isInteger(message.daywinamount.high)))
                    return "daywinamount: integer|Long expected";
            if (message.timezoneinmin != null && message.hasOwnProperty("timezoneinmin"))
                if (!$util.isInteger(message.timezoneinmin))
                    return "timezoneinmin: integer expected";
            if (message.firstofdayflag != null && message.hasOwnProperty("firstofdayflag"))
                if (!$util.isInteger(message.firstofdayflag))
                    return "firstofdayflag: integer expected";
            if (message.recordcount != null && message.hasOwnProperty("recordcount"))
                if (!$util.isInteger(message.recordcount))
                    return "recordcount: integer expected";
            if (message.cacheindex != null && message.hasOwnProperty("cacheindex"))
                if (!$util.isInteger(message.cacheindex) && !(message.cacheindex && $util.isInteger(message.cacheindex.low) && $util.isInteger(message.cacheindex.high)))
                    return "cacheindex: integer|Long expected";
            return null;
        };

        /**
         * Creates a GameRecordDataCache message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamerecord.GameRecordDataCache
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamerecord.GameRecordDataCache} GameRecordDataCache
         */
        GameRecordDataCache.fromObject = function fromObject(object) {
            if (object instanceof $root.gamerecord.GameRecordDataCache)
                return object;
            var message = new $root.gamerecord.GameRecordDataCache();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.game != null)
                message.game = object.game >>> 0;
            if (object.roundid != null)
                message.roundid = String(object.roundid);
            if (object.bet != null)
                if ($util.Long)
                    (message.bet = $util.Long.fromValue(object.bet)).unsigned = false;
                else if (typeof object.bet === "string")
                    message.bet = parseInt(object.bet, 10);
                else if (typeof object.bet === "number")
                    message.bet = object.bet;
                else if (typeof object.bet === "object")
                    message.bet = new $util.LongBits(object.bet.low >>> 0, object.bet.high >>> 0).toNumber();
            switch (object.betact) {
            case "BET_ACT_NONE":
            case 0:
                message.betact = 0;
                break;
            case "BET_ACT_NORMAL_BET":
            case 1:
                message.betact = 1;
                break;
            }
            if (object.win != null)
                if ($util.Long)
                    (message.win = $util.Long.fromValue(object.win)).unsigned = false;
                else if (typeof object.win === "string")
                    message.win = parseInt(object.win, 10);
                else if (typeof object.win === "number")
                    message.win = object.win;
                else if (typeof object.win === "object")
                    message.win = new $util.LongBits(object.win.low >>> 0, object.win.high >>> 0).toNumber();
            switch (object.winact) {
            case "WIN_ACT_NONE":
            case 0:
                message.winact = 0;
                break;
            case "WIN_ACT_NORMAL_WIN":
            case 1:
                message.winact = 1;
                break;
            case "WIN_ACT_JACKPOT":
            case 2:
                message.winact = 2;
                break;
            case "WIN_ACT_DEALER":
            case 3:
                message.winact = 3;
                break;
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            if (object.detail != null)
                if (typeof object.detail === "string")
                    $util.base64.decode(object.detail, message.detail = $util.newBuffer($util.base64.length(object.detail)), 0);
                else if (object.detail.length)
                    message.detail = object.detail;
            if (object.daybetamount != null)
                if ($util.Long)
                    (message.daybetamount = $util.Long.fromValue(object.daybetamount)).unsigned = false;
                else if (typeof object.daybetamount === "string")
                    message.daybetamount = parseInt(object.daybetamount, 10);
                else if (typeof object.daybetamount === "number")
                    message.daybetamount = object.daybetamount;
                else if (typeof object.daybetamount === "object")
                    message.daybetamount = new $util.LongBits(object.daybetamount.low >>> 0, object.daybetamount.high >>> 0).toNumber();
            if (object.daywinamount != null)
                if ($util.Long)
                    (message.daywinamount = $util.Long.fromValue(object.daywinamount)).unsigned = false;
                else if (typeof object.daywinamount === "string")
                    message.daywinamount = parseInt(object.daywinamount, 10);
                else if (typeof object.daywinamount === "number")
                    message.daywinamount = object.daywinamount;
                else if (typeof object.daywinamount === "object")
                    message.daywinamount = new $util.LongBits(object.daywinamount.low >>> 0, object.daywinamount.high >>> 0).toNumber();
            if (object.timezoneinmin != null)
                message.timezoneinmin = object.timezoneinmin | 0;
            if (object.firstofdayflag != null)
                message.firstofdayflag = object.firstofdayflag | 0;
            if (object.recordcount != null)
                message.recordcount = object.recordcount >>> 0;
            if (object.cacheindex != null)
                if ($util.Long)
                    (message.cacheindex = $util.Long.fromValue(object.cacheindex)).unsigned = true;
                else if (typeof object.cacheindex === "string")
                    message.cacheindex = parseInt(object.cacheindex, 10);
                else if (typeof object.cacheindex === "number")
                    message.cacheindex = object.cacheindex;
                else if (typeof object.cacheindex === "object")
                    message.cacheindex = new $util.LongBits(object.cacheindex.low >>> 0, object.cacheindex.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a GameRecordDataCache message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamerecord.GameRecordDataCache
         * @static
         * @param {gamerecord.GameRecordDataCache} message GameRecordDataCache
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameRecordDataCache.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.game = 0;
                object.roundid = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bet = options.longs === String ? "0" : 0;
                object.betact = options.enums === String ? "BET_ACT_NONE" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.win = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.win = options.longs === String ? "0" : 0;
                object.winact = options.enums === String ? "WIN_ACT_NONE" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.detail = "";
                else {
                    object.detail = [];
                    if (options.bytes !== Array)
                        object.detail = $util.newBuffer(object.detail);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.daybetamount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.daybetamount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.daywinamount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.daywinamount = options.longs === String ? "0" : 0;
                object.timezoneinmin = 0;
                object.firstofdayflag = 0;
                object.recordcount = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cacheindex = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cacheindex = options.longs === String ? "0" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.game != null && message.hasOwnProperty("game"))
                object.game = message.game;
            if (message.roundid != null && message.hasOwnProperty("roundid"))
                object.roundid = message.roundid;
            if (message.bet != null && message.hasOwnProperty("bet"))
                if (typeof message.bet === "number")
                    object.bet = options.longs === String ? String(message.bet) : message.bet;
                else
                    object.bet = options.longs === String ? $util.Long.prototype.toString.call(message.bet) : options.longs === Number ? new $util.LongBits(message.bet.low >>> 0, message.bet.high >>> 0).toNumber() : message.bet;
            if (message.betact != null && message.hasOwnProperty("betact"))
                object.betact = options.enums === String ? $root.gamerecord.BET_ACT[message.betact] : message.betact;
            if (message.win != null && message.hasOwnProperty("win"))
                if (typeof message.win === "number")
                    object.win = options.longs === String ? String(message.win) : message.win;
                else
                    object.win = options.longs === String ? $util.Long.prototype.toString.call(message.win) : options.longs === Number ? new $util.LongBits(message.win.low >>> 0, message.win.high >>> 0).toNumber() : message.win;
            if (message.winact != null && message.hasOwnProperty("winact"))
                object.winact = options.enums === String ? $root.gamerecord.WIN_ACT[message.winact] : message.winact;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            if (message.detail != null && message.hasOwnProperty("detail"))
                object.detail = options.bytes === String ? $util.base64.encode(message.detail, 0, message.detail.length) : options.bytes === Array ? Array.prototype.slice.call(message.detail) : message.detail;
            if (message.daybetamount != null && message.hasOwnProperty("daybetamount"))
                if (typeof message.daybetamount === "number")
                    object.daybetamount = options.longs === String ? String(message.daybetamount) : message.daybetamount;
                else
                    object.daybetamount = options.longs === String ? $util.Long.prototype.toString.call(message.daybetamount) : options.longs === Number ? new $util.LongBits(message.daybetamount.low >>> 0, message.daybetamount.high >>> 0).toNumber() : message.daybetamount;
            if (message.daywinamount != null && message.hasOwnProperty("daywinamount"))
                if (typeof message.daywinamount === "number")
                    object.daywinamount = options.longs === String ? String(message.daywinamount) : message.daywinamount;
                else
                    object.daywinamount = options.longs === String ? $util.Long.prototype.toString.call(message.daywinamount) : options.longs === Number ? new $util.LongBits(message.daywinamount.low >>> 0, message.daywinamount.high >>> 0).toNumber() : message.daywinamount;
            if (message.timezoneinmin != null && message.hasOwnProperty("timezoneinmin"))
                object.timezoneinmin = message.timezoneinmin;
            if (message.firstofdayflag != null && message.hasOwnProperty("firstofdayflag"))
                object.firstofdayflag = message.firstofdayflag;
            if (message.recordcount != null && message.hasOwnProperty("recordcount"))
                object.recordcount = message.recordcount;
            if (message.cacheindex != null && message.hasOwnProperty("cacheindex"))
                if (typeof message.cacheindex === "number")
                    object.cacheindex = options.longs === String ? String(message.cacheindex) : message.cacheindex;
                else
                    object.cacheindex = options.longs === String ? $util.Long.prototype.toString.call(message.cacheindex) : options.longs === Number ? new $util.LongBits(message.cacheindex.low >>> 0, message.cacheindex.high >>> 0).toNumber(true) : message.cacheindex;
            return object;
        };

        /**
         * Converts this GameRecordDataCache to JSON.
         * @function toJSON
         * @memberof gamerecord.GameRecordDataCache
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameRecordDataCache.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameRecordDataCache;
    })();

    return gamerecord;
})();

module.exports = $root;
