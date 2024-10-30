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

    return client_proto;
})();

$root.roomalloc = (function() {

    /**
     * Namespace roomalloc.
     * @exports roomalloc
     * @namespace
     */
    var roomalloc = {};

    /**
     * ROOMALLOC_CMD enum.
     * @name roomalloc.ROOMALLOC_CMD
     * @enum {number}
     * @property {number} ROOMALLOC_CMD_NONE=0 ROOMALLOC_CMD_NONE value
     * @property {number} ROOMALLOC_CMD_ALLOC_TABLE_REQ=4702 ROOMALLOC_CMD_ALLOC_TABLE_REQ value
     * @property {number} ROOMALLOC_CMD_ALLOC_TABLE_RESP=4703 ROOMALLOC_CMD_ALLOC_TABLE_RESP value
     * @property {number} ROOMALLOC_CMD_LEVEL_CONFIG_REQ=4704 ROOMALLOC_CMD_LEVEL_CONFIG_REQ value
     * @property {number} ROOMALLOC_CMD_LEVEL_CONFIG_RESP=4705 ROOMALLOC_CMD_LEVEL_CONFIG_RESP value
     */
    roomalloc.ROOMALLOC_CMD = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ROOMALLOC_CMD_NONE"] = 0;
        values[valuesById[4702] = "ROOMALLOC_CMD_ALLOC_TABLE_REQ"] = 4702;
        values[valuesById[4703] = "ROOMALLOC_CMD_ALLOC_TABLE_RESP"] = 4703;
        values[valuesById[4704] = "ROOMALLOC_CMD_LEVEL_CONFIG_REQ"] = 4704;
        values[valuesById[4705] = "ROOMALLOC_CMD_LEVEL_CONFIG_RESP"] = 4705;
        return values;
    })();

    roomalloc.AllocTableReq = (function() {

        /**
         * Properties of an AllocTableReq.
         * @memberof roomalloc
         * @interface IAllocTableReq
         * @property {number|null} [uid] AllocTableReq uid
         * @property {number|null} [game_id] AllocTableReq game_id
         * @property {number|Long|null} [alloc_param] AllocTableReq alloc_param
         * @property {number|null} [except_tid] AllocTableReq except_tid
         * @property {number|null} [target_tid] AllocTableReq target_tid
         * @property {string|null} [userinfo] AllocTableReq userinfo
         */

        /**
         * Constructs a new AllocTableReq.
         * @memberof roomalloc
         * @classdesc Represents an AllocTableReq.
         * @implements IAllocTableReq
         * @constructor
         * @param {roomalloc.IAllocTableReq=} [properties] Properties to set
         */
        function AllocTableReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AllocTableReq uid.
         * @member {number} uid
         * @memberof roomalloc.AllocTableReq
         * @instance
         */
        AllocTableReq.prototype.uid = 0;

        /**
         * AllocTableReq game_id.
         * @member {number} game_id
         * @memberof roomalloc.AllocTableReq
         * @instance
         */
        AllocTableReq.prototype.game_id = 0;

        /**
         * AllocTableReq alloc_param.
         * @member {number|Long} alloc_param
         * @memberof roomalloc.AllocTableReq
         * @instance
         */
        AllocTableReq.prototype.alloc_param = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AllocTableReq except_tid.
         * @member {number} except_tid
         * @memberof roomalloc.AllocTableReq
         * @instance
         */
        AllocTableReq.prototype.except_tid = 0;

        /**
         * AllocTableReq target_tid.
         * @member {number} target_tid
         * @memberof roomalloc.AllocTableReq
         * @instance
         */
        AllocTableReq.prototype.target_tid = 0;

        /**
         * AllocTableReq userinfo.
         * @member {string} userinfo
         * @memberof roomalloc.AllocTableReq
         * @instance
         */
        AllocTableReq.prototype.userinfo = "";

        /**
         * Creates a new AllocTableReq instance using the specified properties.
         * @function create
         * @memberof roomalloc.AllocTableReq
         * @static
         * @param {roomalloc.IAllocTableReq=} [properties] Properties to set
         * @returns {roomalloc.AllocTableReq} AllocTableReq instance
         */
        AllocTableReq.create = function create(properties) {
            return new AllocTableReq(properties);
        };

        /**
         * Encodes the specified AllocTableReq message. Does not implicitly {@link roomalloc.AllocTableReq.verify|verify} messages.
         * @function encode
         * @memberof roomalloc.AllocTableReq
         * @static
         * @param {roomalloc.IAllocTableReq} message AllocTableReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllocTableReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.game_id != null && Object.hasOwnProperty.call(message, "game_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.game_id);
            if (message.alloc_param != null && Object.hasOwnProperty.call(message, "alloc_param"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.alloc_param);
            if (message.except_tid != null && Object.hasOwnProperty.call(message, "except_tid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.except_tid);
            if (message.target_tid != null && Object.hasOwnProperty.call(message, "target_tid"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.target_tid);
            if (message.userinfo != null && Object.hasOwnProperty.call(message, "userinfo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.userinfo);
            return writer;
        };

        /**
         * Encodes the specified AllocTableReq message, length delimited. Does not implicitly {@link roomalloc.AllocTableReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roomalloc.AllocTableReq
         * @static
         * @param {roomalloc.IAllocTableReq} message AllocTableReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllocTableReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllocTableReq message from the specified reader or buffer.
         * @function decode
         * @memberof roomalloc.AllocTableReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roomalloc.AllocTableReq} AllocTableReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllocTableReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roomalloc.AllocTableReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.game_id = reader.int32();
                    break;
                case 3:
                    message.alloc_param = reader.int64();
                    break;
                case 4:
                    message.except_tid = reader.int32();
                    break;
                case 5:
                    message.target_tid = reader.int32();
                    break;
                case 6:
                    message.userinfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AllocTableReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roomalloc.AllocTableReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roomalloc.AllocTableReq} AllocTableReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllocTableReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AllocTableReq message.
         * @function verify
         * @memberof roomalloc.AllocTableReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AllocTableReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                if (!$util.isInteger(message.game_id))
                    return "game_id: integer expected";
            if (message.alloc_param != null && message.hasOwnProperty("alloc_param"))
                if (!$util.isInteger(message.alloc_param) && !(message.alloc_param && $util.isInteger(message.alloc_param.low) && $util.isInteger(message.alloc_param.high)))
                    return "alloc_param: integer|Long expected";
            if (message.except_tid != null && message.hasOwnProperty("except_tid"))
                if (!$util.isInteger(message.except_tid))
                    return "except_tid: integer expected";
            if (message.target_tid != null && message.hasOwnProperty("target_tid"))
                if (!$util.isInteger(message.target_tid))
                    return "target_tid: integer expected";
            if (message.userinfo != null && message.hasOwnProperty("userinfo"))
                if (!$util.isString(message.userinfo))
                    return "userinfo: string expected";
            return null;
        };

        /**
         * Creates an AllocTableReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roomalloc.AllocTableReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roomalloc.AllocTableReq} AllocTableReq
         */
        AllocTableReq.fromObject = function fromObject(object) {
            if (object instanceof $root.roomalloc.AllocTableReq)
                return object;
            var message = new $root.roomalloc.AllocTableReq();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.game_id != null)
                message.game_id = object.game_id | 0;
            if (object.alloc_param != null)
                if ($util.Long)
                    (message.alloc_param = $util.Long.fromValue(object.alloc_param)).unsigned = false;
                else if (typeof object.alloc_param === "string")
                    message.alloc_param = parseInt(object.alloc_param, 10);
                else if (typeof object.alloc_param === "number")
                    message.alloc_param = object.alloc_param;
                else if (typeof object.alloc_param === "object")
                    message.alloc_param = new $util.LongBits(object.alloc_param.low >>> 0, object.alloc_param.high >>> 0).toNumber();
            if (object.except_tid != null)
                message.except_tid = object.except_tid | 0;
            if (object.target_tid != null)
                message.target_tid = object.target_tid | 0;
            if (object.userinfo != null)
                message.userinfo = String(object.userinfo);
            return message;
        };

        /**
         * Creates a plain object from an AllocTableReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roomalloc.AllocTableReq
         * @static
         * @param {roomalloc.AllocTableReq} message AllocTableReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AllocTableReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.game_id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.alloc_param = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.alloc_param = options.longs === String ? "0" : 0;
                object.except_tid = 0;
                object.target_tid = 0;
                object.userinfo = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                object.game_id = message.game_id;
            if (message.alloc_param != null && message.hasOwnProperty("alloc_param"))
                if (typeof message.alloc_param === "number")
                    object.alloc_param = options.longs === String ? String(message.alloc_param) : message.alloc_param;
                else
                    object.alloc_param = options.longs === String ? $util.Long.prototype.toString.call(message.alloc_param) : options.longs === Number ? new $util.LongBits(message.alloc_param.low >>> 0, message.alloc_param.high >>> 0).toNumber() : message.alloc_param;
            if (message.except_tid != null && message.hasOwnProperty("except_tid"))
                object.except_tid = message.except_tid;
            if (message.target_tid != null && message.hasOwnProperty("target_tid"))
                object.target_tid = message.target_tid;
            if (message.userinfo != null && message.hasOwnProperty("userinfo"))
                object.userinfo = message.userinfo;
            return object;
        };

        /**
         * Converts this AllocTableReq to JSON.
         * @function toJSON
         * @memberof roomalloc.AllocTableReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AllocTableReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AllocTableReq;
    })();

    roomalloc.AllocTableResp = (function() {

        /**
         * Properties of an AllocTableResp.
         * @memberof roomalloc
         * @interface IAllocTableResp
         * @property {number|null} [result] AllocTableResp result
         */

        /**
         * Constructs a new AllocTableResp.
         * @memberof roomalloc
         * @classdesc Represents an AllocTableResp.
         * @implements IAllocTableResp
         * @constructor
         * @param {roomalloc.IAllocTableResp=} [properties] Properties to set
         */
        function AllocTableResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AllocTableResp result.
         * @member {number} result
         * @memberof roomalloc.AllocTableResp
         * @instance
         */
        AllocTableResp.prototype.result = 0;

        /**
         * Creates a new AllocTableResp instance using the specified properties.
         * @function create
         * @memberof roomalloc.AllocTableResp
         * @static
         * @param {roomalloc.IAllocTableResp=} [properties] Properties to set
         * @returns {roomalloc.AllocTableResp} AllocTableResp instance
         */
        AllocTableResp.create = function create(properties) {
            return new AllocTableResp(properties);
        };

        /**
         * Encodes the specified AllocTableResp message. Does not implicitly {@link roomalloc.AllocTableResp.verify|verify} messages.
         * @function encode
         * @memberof roomalloc.AllocTableResp
         * @static
         * @param {roomalloc.IAllocTableResp} message AllocTableResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllocTableResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified AllocTableResp message, length delimited. Does not implicitly {@link roomalloc.AllocTableResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roomalloc.AllocTableResp
         * @static
         * @param {roomalloc.IAllocTableResp} message AllocTableResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllocTableResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllocTableResp message from the specified reader or buffer.
         * @function decode
         * @memberof roomalloc.AllocTableResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roomalloc.AllocTableResp} AllocTableResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllocTableResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roomalloc.AllocTableResp();
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
         * Decodes an AllocTableResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roomalloc.AllocTableResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roomalloc.AllocTableResp} AllocTableResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllocTableResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AllocTableResp message.
         * @function verify
         * @memberof roomalloc.AllocTableResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AllocTableResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            return null;
        };

        /**
         * Creates an AllocTableResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roomalloc.AllocTableResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roomalloc.AllocTableResp} AllocTableResp
         */
        AllocTableResp.fromObject = function fromObject(object) {
            if (object instanceof $root.roomalloc.AllocTableResp)
                return object;
            var message = new $root.roomalloc.AllocTableResp();
            if (object.result != null)
                message.result = object.result | 0;
            return message;
        };

        /**
         * Creates a plain object from an AllocTableResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roomalloc.AllocTableResp
         * @static
         * @param {roomalloc.AllocTableResp} message AllocTableResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AllocTableResp.toObject = function toObject(message, options) {
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
         * Converts this AllocTableResp to JSON.
         * @function toJSON
         * @memberof roomalloc.AllocTableResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AllocTableResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AllocTableResp;
    })();

    roomalloc.GameLevelConfigReq = (function() {

        /**
         * Properties of a GameLevelConfigReq.
         * @memberof roomalloc
         * @interface IGameLevelConfigReq
         * @property {number|null} [game_id] GameLevelConfigReq game_id
         */

        /**
         * Constructs a new GameLevelConfigReq.
         * @memberof roomalloc
         * @classdesc Represents a GameLevelConfigReq.
         * @implements IGameLevelConfigReq
         * @constructor
         * @param {roomalloc.IGameLevelConfigReq=} [properties] Properties to set
         */
        function GameLevelConfigReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameLevelConfigReq game_id.
         * @member {number} game_id
         * @memberof roomalloc.GameLevelConfigReq
         * @instance
         */
        GameLevelConfigReq.prototype.game_id = 0;

        /**
         * Creates a new GameLevelConfigReq instance using the specified properties.
         * @function create
         * @memberof roomalloc.GameLevelConfigReq
         * @static
         * @param {roomalloc.IGameLevelConfigReq=} [properties] Properties to set
         * @returns {roomalloc.GameLevelConfigReq} GameLevelConfigReq instance
         */
        GameLevelConfigReq.create = function create(properties) {
            return new GameLevelConfigReq(properties);
        };

        /**
         * Encodes the specified GameLevelConfigReq message. Does not implicitly {@link roomalloc.GameLevelConfigReq.verify|verify} messages.
         * @function encode
         * @memberof roomalloc.GameLevelConfigReq
         * @static
         * @param {roomalloc.IGameLevelConfigReq} message GameLevelConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLevelConfigReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.game_id != null && Object.hasOwnProperty.call(message, "game_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.game_id);
            return writer;
        };

        /**
         * Encodes the specified GameLevelConfigReq message, length delimited. Does not implicitly {@link roomalloc.GameLevelConfigReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roomalloc.GameLevelConfigReq
         * @static
         * @param {roomalloc.IGameLevelConfigReq} message GameLevelConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLevelConfigReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameLevelConfigReq message from the specified reader or buffer.
         * @function decode
         * @memberof roomalloc.GameLevelConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roomalloc.GameLevelConfigReq} GameLevelConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLevelConfigReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roomalloc.GameLevelConfigReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.game_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameLevelConfigReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roomalloc.GameLevelConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roomalloc.GameLevelConfigReq} GameLevelConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLevelConfigReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameLevelConfigReq message.
         * @function verify
         * @memberof roomalloc.GameLevelConfigReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameLevelConfigReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                if (!$util.isInteger(message.game_id))
                    return "game_id: integer expected";
            return null;
        };

        /**
         * Creates a GameLevelConfigReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roomalloc.GameLevelConfigReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roomalloc.GameLevelConfigReq} GameLevelConfigReq
         */
        GameLevelConfigReq.fromObject = function fromObject(object) {
            if (object instanceof $root.roomalloc.GameLevelConfigReq)
                return object;
            var message = new $root.roomalloc.GameLevelConfigReq();
            if (object.game_id != null)
                message.game_id = object.game_id | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameLevelConfigReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roomalloc.GameLevelConfigReq
         * @static
         * @param {roomalloc.GameLevelConfigReq} message GameLevelConfigReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameLevelConfigReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.game_id = 0;
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                object.game_id = message.game_id;
            return object;
        };

        /**
         * Converts this GameLevelConfigReq to JSON.
         * @function toJSON
         * @memberof roomalloc.GameLevelConfigReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameLevelConfigReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLevelConfigReq;
    })();

    roomalloc.GameLevelConfigResp = (function() {

        /**
         * Properties of a GameLevelConfigResp.
         * @memberof roomalloc
         * @interface IGameLevelConfigResp
         * @property {number|null} [game_id] GameLevelConfigResp game_id
         * @property {number|null} [auto_alloc] GameLevelConfigResp auto_alloc
         * @property {Array.<roomalloc.GameLevelConfigResp.ILevelConfig>|null} [level_config] GameLevelConfigResp level_config
         */

        /**
         * Constructs a new GameLevelConfigResp.
         * @memberof roomalloc
         * @classdesc Represents a GameLevelConfigResp.
         * @implements IGameLevelConfigResp
         * @constructor
         * @param {roomalloc.IGameLevelConfigResp=} [properties] Properties to set
         */
        function GameLevelConfigResp(properties) {
            this.level_config = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameLevelConfigResp game_id.
         * @member {number} game_id
         * @memberof roomalloc.GameLevelConfigResp
         * @instance
         */
        GameLevelConfigResp.prototype.game_id = 0;

        /**
         * GameLevelConfigResp auto_alloc.
         * @member {number} auto_alloc
         * @memberof roomalloc.GameLevelConfigResp
         * @instance
         */
        GameLevelConfigResp.prototype.auto_alloc = 0;

        /**
         * GameLevelConfigResp level_config.
         * @member {Array.<roomalloc.GameLevelConfigResp.ILevelConfig>} level_config
         * @memberof roomalloc.GameLevelConfigResp
         * @instance
         */
        GameLevelConfigResp.prototype.level_config = $util.emptyArray;

        /**
         * Creates a new GameLevelConfigResp instance using the specified properties.
         * @function create
         * @memberof roomalloc.GameLevelConfigResp
         * @static
         * @param {roomalloc.IGameLevelConfigResp=} [properties] Properties to set
         * @returns {roomalloc.GameLevelConfigResp} GameLevelConfigResp instance
         */
        GameLevelConfigResp.create = function create(properties) {
            return new GameLevelConfigResp(properties);
        };

        /**
         * Encodes the specified GameLevelConfigResp message. Does not implicitly {@link roomalloc.GameLevelConfigResp.verify|verify} messages.
         * @function encode
         * @memberof roomalloc.GameLevelConfigResp
         * @static
         * @param {roomalloc.IGameLevelConfigResp} message GameLevelConfigResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLevelConfigResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.game_id != null && Object.hasOwnProperty.call(message, "game_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.game_id);
            if (message.auto_alloc != null && Object.hasOwnProperty.call(message, "auto_alloc"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.auto_alloc);
            if (message.level_config != null && message.level_config.length)
                for (var i = 0; i < message.level_config.length; ++i)
                    $root.roomalloc.GameLevelConfigResp.LevelConfig.encode(message.level_config[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameLevelConfigResp message, length delimited. Does not implicitly {@link roomalloc.GameLevelConfigResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roomalloc.GameLevelConfigResp
         * @static
         * @param {roomalloc.IGameLevelConfigResp} message GameLevelConfigResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLevelConfigResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameLevelConfigResp message from the specified reader or buffer.
         * @function decode
         * @memberof roomalloc.GameLevelConfigResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roomalloc.GameLevelConfigResp} GameLevelConfigResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLevelConfigResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roomalloc.GameLevelConfigResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.game_id = reader.int32();
                    break;
                case 2:
                    message.auto_alloc = reader.int32();
                    break;
                case 3:
                    if (!(message.level_config && message.level_config.length))
                        message.level_config = [];
                    message.level_config.push($root.roomalloc.GameLevelConfigResp.LevelConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameLevelConfigResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roomalloc.GameLevelConfigResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roomalloc.GameLevelConfigResp} GameLevelConfigResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLevelConfigResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameLevelConfigResp message.
         * @function verify
         * @memberof roomalloc.GameLevelConfigResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameLevelConfigResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                if (!$util.isInteger(message.game_id))
                    return "game_id: integer expected";
            if (message.auto_alloc != null && message.hasOwnProperty("auto_alloc"))
                if (!$util.isInteger(message.auto_alloc))
                    return "auto_alloc: integer expected";
            if (message.level_config != null && message.hasOwnProperty("level_config")) {
                if (!Array.isArray(message.level_config))
                    return "level_config: array expected";
                for (var i = 0; i < message.level_config.length; ++i) {
                    var error = $root.roomalloc.GameLevelConfigResp.LevelConfig.verify(message.level_config[i]);
                    if (error)
                        return "level_config." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameLevelConfigResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roomalloc.GameLevelConfigResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roomalloc.GameLevelConfigResp} GameLevelConfigResp
         */
        GameLevelConfigResp.fromObject = function fromObject(object) {
            if (object instanceof $root.roomalloc.GameLevelConfigResp)
                return object;
            var message = new $root.roomalloc.GameLevelConfigResp();
            if (object.game_id != null)
                message.game_id = object.game_id | 0;
            if (object.auto_alloc != null)
                message.auto_alloc = object.auto_alloc | 0;
            if (object.level_config) {
                if (!Array.isArray(object.level_config))
                    throw TypeError(".roomalloc.GameLevelConfigResp.level_config: array expected");
                message.level_config = [];
                for (var i = 0; i < object.level_config.length; ++i) {
                    if (typeof object.level_config[i] !== "object")
                        throw TypeError(".roomalloc.GameLevelConfigResp.level_config: object expected");
                    message.level_config[i] = $root.roomalloc.GameLevelConfigResp.LevelConfig.fromObject(object.level_config[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameLevelConfigResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roomalloc.GameLevelConfigResp
         * @static
         * @param {roomalloc.GameLevelConfigResp} message GameLevelConfigResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameLevelConfigResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.level_config = [];
            if (options.defaults) {
                object.game_id = 0;
                object.auto_alloc = 0;
            }
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                object.game_id = message.game_id;
            if (message.auto_alloc != null && message.hasOwnProperty("auto_alloc"))
                object.auto_alloc = message.auto_alloc;
            if (message.level_config && message.level_config.length) {
                object.level_config = [];
                for (var j = 0; j < message.level_config.length; ++j)
                    object.level_config[j] = $root.roomalloc.GameLevelConfigResp.LevelConfig.toObject(message.level_config[j], options);
            }
            return object;
        };

        /**
         * Converts this GameLevelConfigResp to JSON.
         * @function toJSON
         * @memberof roomalloc.GameLevelConfigResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameLevelConfigResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        GameLevelConfigResp.LevelConfig = (function() {

            /**
             * Properties of a LevelConfig.
             * @memberof roomalloc.GameLevelConfigResp
             * @interface ILevelConfig
             * @property {number|null} [level] LevelConfig level
             * @property {number|Long|null} [base_ante] LevelConfig base_ante
             * @property {number|Long|null} [entry_min] LevelConfig entry_min
             * @property {number|Long|null} [entry_max] LevelConfig entry_max
             * @property {string|null} [title] LevelConfig title
             * @property {number|Long|null} [recommend_min] LevelConfig recommend_min
             * @property {number|Long|null} [recommend_max] LevelConfig recommend_max
             * @property {number|Long|null} [bet_min] LevelConfig bet_min
             * @property {number|Long|null} [bet_max] LevelConfig bet_max
             * @property {number|Long|null} [pay_max] LevelConfig pay_max
             * @property {Array.<number|Long>|null} [quick_ante] LevelConfig quick_ante
             * @property {boolean|null} [is_open_jackpot] LevelConfig is_open_jackpot
             * @property {number|null} [room_tab] LevelConfig room_tab
             */

            /**
             * Constructs a new LevelConfig.
             * @memberof roomalloc.GameLevelConfigResp
             * @classdesc Represents a LevelConfig.
             * @implements ILevelConfig
             * @constructor
             * @param {roomalloc.GameLevelConfigResp.ILevelConfig=} [properties] Properties to set
             */
            function LevelConfig(properties) {
                this.quick_ante = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LevelConfig level.
             * @member {number} level
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @instance
             */
            LevelConfig.prototype.level = 0;

            /**
             * LevelConfig base_ante.
             * @member {number|Long} base_ante
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @instance
             */
            LevelConfig.prototype.base_ante = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LevelConfig entry_min.
             * @member {number|Long} entry_min
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @instance
             */
            LevelConfig.prototype.entry_min = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LevelConfig entry_max.
             * @member {number|Long} entry_max
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @instance
             */
            LevelConfig.prototype.entry_max = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LevelConfig title.
             * @member {string} title
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @instance
             */
            LevelConfig.prototype.title = "";

            /**
             * LevelConfig recommend_min.
             * @member {number|Long} recommend_min
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @instance
             */
            LevelConfig.prototype.recommend_min = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LevelConfig recommend_max.
             * @member {number|Long} recommend_max
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @instance
             */
            LevelConfig.prototype.recommend_max = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LevelConfig bet_min.
             * @member {number|Long} bet_min
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @instance
             */
            LevelConfig.prototype.bet_min = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LevelConfig bet_max.
             * @member {number|Long} bet_max
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @instance
             */
            LevelConfig.prototype.bet_max = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LevelConfig pay_max.
             * @member {number|Long} pay_max
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @instance
             */
            LevelConfig.prototype.pay_max = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LevelConfig quick_ante.
             * @member {Array.<number|Long>} quick_ante
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @instance
             */
            LevelConfig.prototype.quick_ante = $util.emptyArray;

            /**
             * LevelConfig is_open_jackpot.
             * @member {boolean} is_open_jackpot
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @instance
             */
            LevelConfig.prototype.is_open_jackpot = false;

            /**
             * LevelConfig room_tab.
             * @member {number} room_tab
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @instance
             */
            LevelConfig.prototype.room_tab = 0;

            /**
             * Creates a new LevelConfig instance using the specified properties.
             * @function create
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @static
             * @param {roomalloc.GameLevelConfigResp.ILevelConfig=} [properties] Properties to set
             * @returns {roomalloc.GameLevelConfigResp.LevelConfig} LevelConfig instance
             */
            LevelConfig.create = function create(properties) {
                return new LevelConfig(properties);
            };

            /**
             * Encodes the specified LevelConfig message. Does not implicitly {@link roomalloc.GameLevelConfigResp.LevelConfig.verify|verify} messages.
             * @function encode
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @static
             * @param {roomalloc.GameLevelConfigResp.ILevelConfig} message LevelConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LevelConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.level);
                if (message.base_ante != null && Object.hasOwnProperty.call(message, "base_ante"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.base_ante);
                if (message.entry_min != null && Object.hasOwnProperty.call(message, "entry_min"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.entry_min);
                if (message.entry_max != null && Object.hasOwnProperty.call(message, "entry_max"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.entry_max);
                if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.title);
                if (message.recommend_min != null && Object.hasOwnProperty.call(message, "recommend_min"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.recommend_min);
                if (message.recommend_max != null && Object.hasOwnProperty.call(message, "recommend_max"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int64(message.recommend_max);
                if (message.bet_min != null && Object.hasOwnProperty.call(message, "bet_min"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int64(message.bet_min);
                if (message.bet_max != null && Object.hasOwnProperty.call(message, "bet_max"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int64(message.bet_max);
                if (message.pay_max != null && Object.hasOwnProperty.call(message, "pay_max"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int64(message.pay_max);
                if (message.quick_ante != null && message.quick_ante.length) {
                    writer.uint32(/* id 11, wireType 2 =*/90).fork();
                    for (var i = 0; i < message.quick_ante.length; ++i)
                        writer.int64(message.quick_ante[i]);
                    writer.ldelim();
                }
                if (message.is_open_jackpot != null && Object.hasOwnProperty.call(message, "is_open_jackpot"))
                    writer.uint32(/* id 12, wireType 0 =*/96).bool(message.is_open_jackpot);
                if (message.room_tab != null && Object.hasOwnProperty.call(message, "room_tab"))
                    writer.uint32(/* id 13, wireType 0 =*/104).int32(message.room_tab);
                return writer;
            };

            /**
             * Encodes the specified LevelConfig message, length delimited. Does not implicitly {@link roomalloc.GameLevelConfigResp.LevelConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @static
             * @param {roomalloc.GameLevelConfigResp.ILevelConfig} message LevelConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LevelConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LevelConfig message from the specified reader or buffer.
             * @function decode
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {roomalloc.GameLevelConfigResp.LevelConfig} LevelConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LevelConfig.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roomalloc.GameLevelConfigResp.LevelConfig();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.level = reader.int32();
                        break;
                    case 2:
                        message.base_ante = reader.int64();
                        break;
                    case 3:
                        message.entry_min = reader.int64();
                        break;
                    case 4:
                        message.entry_max = reader.int64();
                        break;
                    case 5:
                        message.title = reader.string();
                        break;
                    case 6:
                        message.recommend_min = reader.int64();
                        break;
                    case 7:
                        message.recommend_max = reader.int64();
                        break;
                    case 8:
                        message.bet_min = reader.int64();
                        break;
                    case 9:
                        message.bet_max = reader.int64();
                        break;
                    case 10:
                        message.pay_max = reader.int64();
                        break;
                    case 11:
                        if (!(message.quick_ante && message.quick_ante.length))
                            message.quick_ante = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.quick_ante.push(reader.int64());
                        } else
                            message.quick_ante.push(reader.int64());
                        break;
                    case 12:
                        message.is_open_jackpot = reader.bool();
                        break;
                    case 13:
                        message.room_tab = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LevelConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {roomalloc.GameLevelConfigResp.LevelConfig} LevelConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LevelConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LevelConfig message.
             * @function verify
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LevelConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.base_ante != null && message.hasOwnProperty("base_ante"))
                    if (!$util.isInteger(message.base_ante) && !(message.base_ante && $util.isInteger(message.base_ante.low) && $util.isInteger(message.base_ante.high)))
                        return "base_ante: integer|Long expected";
                if (message.entry_min != null && message.hasOwnProperty("entry_min"))
                    if (!$util.isInteger(message.entry_min) && !(message.entry_min && $util.isInteger(message.entry_min.low) && $util.isInteger(message.entry_min.high)))
                        return "entry_min: integer|Long expected";
                if (message.entry_max != null && message.hasOwnProperty("entry_max"))
                    if (!$util.isInteger(message.entry_max) && !(message.entry_max && $util.isInteger(message.entry_max.low) && $util.isInteger(message.entry_max.high)))
                        return "entry_max: integer|Long expected";
                if (message.title != null && message.hasOwnProperty("title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.recommend_min != null && message.hasOwnProperty("recommend_min"))
                    if (!$util.isInteger(message.recommend_min) && !(message.recommend_min && $util.isInteger(message.recommend_min.low) && $util.isInteger(message.recommend_min.high)))
                        return "recommend_min: integer|Long expected";
                if (message.recommend_max != null && message.hasOwnProperty("recommend_max"))
                    if (!$util.isInteger(message.recommend_max) && !(message.recommend_max && $util.isInteger(message.recommend_max.low) && $util.isInteger(message.recommend_max.high)))
                        return "recommend_max: integer|Long expected";
                if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                    if (!$util.isInteger(message.bet_min) && !(message.bet_min && $util.isInteger(message.bet_min.low) && $util.isInteger(message.bet_min.high)))
                        return "bet_min: integer|Long expected";
                if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                    if (!$util.isInteger(message.bet_max) && !(message.bet_max && $util.isInteger(message.bet_max.low) && $util.isInteger(message.bet_max.high)))
                        return "bet_max: integer|Long expected";
                if (message.pay_max != null && message.hasOwnProperty("pay_max"))
                    if (!$util.isInteger(message.pay_max) && !(message.pay_max && $util.isInteger(message.pay_max.low) && $util.isInteger(message.pay_max.high)))
                        return "pay_max: integer|Long expected";
                if (message.quick_ante != null && message.hasOwnProperty("quick_ante")) {
                    if (!Array.isArray(message.quick_ante))
                        return "quick_ante: array expected";
                    for (var i = 0; i < message.quick_ante.length; ++i)
                        if (!$util.isInteger(message.quick_ante[i]) && !(message.quick_ante[i] && $util.isInteger(message.quick_ante[i].low) && $util.isInteger(message.quick_ante[i].high)))
                            return "quick_ante: integer|Long[] expected";
                }
                if (message.is_open_jackpot != null && message.hasOwnProperty("is_open_jackpot"))
                    if (typeof message.is_open_jackpot !== "boolean")
                        return "is_open_jackpot: boolean expected";
                if (message.room_tab != null && message.hasOwnProperty("room_tab"))
                    if (!$util.isInteger(message.room_tab))
                        return "room_tab: integer expected";
                return null;
            };

            /**
             * Creates a LevelConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {roomalloc.GameLevelConfigResp.LevelConfig} LevelConfig
             */
            LevelConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.roomalloc.GameLevelConfigResp.LevelConfig)
                    return object;
                var message = new $root.roomalloc.GameLevelConfigResp.LevelConfig();
                if (object.level != null)
                    message.level = object.level | 0;
                if (object.base_ante != null)
                    if ($util.Long)
                        (message.base_ante = $util.Long.fromValue(object.base_ante)).unsigned = false;
                    else if (typeof object.base_ante === "string")
                        message.base_ante = parseInt(object.base_ante, 10);
                    else if (typeof object.base_ante === "number")
                        message.base_ante = object.base_ante;
                    else if (typeof object.base_ante === "object")
                        message.base_ante = new $util.LongBits(object.base_ante.low >>> 0, object.base_ante.high >>> 0).toNumber();
                if (object.entry_min != null)
                    if ($util.Long)
                        (message.entry_min = $util.Long.fromValue(object.entry_min)).unsigned = false;
                    else if (typeof object.entry_min === "string")
                        message.entry_min = parseInt(object.entry_min, 10);
                    else if (typeof object.entry_min === "number")
                        message.entry_min = object.entry_min;
                    else if (typeof object.entry_min === "object")
                        message.entry_min = new $util.LongBits(object.entry_min.low >>> 0, object.entry_min.high >>> 0).toNumber();
                if (object.entry_max != null)
                    if ($util.Long)
                        (message.entry_max = $util.Long.fromValue(object.entry_max)).unsigned = false;
                    else if (typeof object.entry_max === "string")
                        message.entry_max = parseInt(object.entry_max, 10);
                    else if (typeof object.entry_max === "number")
                        message.entry_max = object.entry_max;
                    else if (typeof object.entry_max === "object")
                        message.entry_max = new $util.LongBits(object.entry_max.low >>> 0, object.entry_max.high >>> 0).toNumber();
                if (object.title != null)
                    message.title = String(object.title);
                if (object.recommend_min != null)
                    if ($util.Long)
                        (message.recommend_min = $util.Long.fromValue(object.recommend_min)).unsigned = false;
                    else if (typeof object.recommend_min === "string")
                        message.recommend_min = parseInt(object.recommend_min, 10);
                    else if (typeof object.recommend_min === "number")
                        message.recommend_min = object.recommend_min;
                    else if (typeof object.recommend_min === "object")
                        message.recommend_min = new $util.LongBits(object.recommend_min.low >>> 0, object.recommend_min.high >>> 0).toNumber();
                if (object.recommend_max != null)
                    if ($util.Long)
                        (message.recommend_max = $util.Long.fromValue(object.recommend_max)).unsigned = false;
                    else if (typeof object.recommend_max === "string")
                        message.recommend_max = parseInt(object.recommend_max, 10);
                    else if (typeof object.recommend_max === "number")
                        message.recommend_max = object.recommend_max;
                    else if (typeof object.recommend_max === "object")
                        message.recommend_max = new $util.LongBits(object.recommend_max.low >>> 0, object.recommend_max.high >>> 0).toNumber();
                if (object.bet_min != null)
                    if ($util.Long)
                        (message.bet_min = $util.Long.fromValue(object.bet_min)).unsigned = false;
                    else if (typeof object.bet_min === "string")
                        message.bet_min = parseInt(object.bet_min, 10);
                    else if (typeof object.bet_min === "number")
                        message.bet_min = object.bet_min;
                    else if (typeof object.bet_min === "object")
                        message.bet_min = new $util.LongBits(object.bet_min.low >>> 0, object.bet_min.high >>> 0).toNumber();
                if (object.bet_max != null)
                    if ($util.Long)
                        (message.bet_max = $util.Long.fromValue(object.bet_max)).unsigned = false;
                    else if (typeof object.bet_max === "string")
                        message.bet_max = parseInt(object.bet_max, 10);
                    else if (typeof object.bet_max === "number")
                        message.bet_max = object.bet_max;
                    else if (typeof object.bet_max === "object")
                        message.bet_max = new $util.LongBits(object.bet_max.low >>> 0, object.bet_max.high >>> 0).toNumber();
                if (object.pay_max != null)
                    if ($util.Long)
                        (message.pay_max = $util.Long.fromValue(object.pay_max)).unsigned = false;
                    else if (typeof object.pay_max === "string")
                        message.pay_max = parseInt(object.pay_max, 10);
                    else if (typeof object.pay_max === "number")
                        message.pay_max = object.pay_max;
                    else if (typeof object.pay_max === "object")
                        message.pay_max = new $util.LongBits(object.pay_max.low >>> 0, object.pay_max.high >>> 0).toNumber();
                if (object.quick_ante) {
                    if (!Array.isArray(object.quick_ante))
                        throw TypeError(".roomalloc.GameLevelConfigResp.LevelConfig.quick_ante: array expected");
                    message.quick_ante = [];
                    for (var i = 0; i < object.quick_ante.length; ++i)
                        if ($util.Long)
                            (message.quick_ante[i] = $util.Long.fromValue(object.quick_ante[i])).unsigned = false;
                        else if (typeof object.quick_ante[i] === "string")
                            message.quick_ante[i] = parseInt(object.quick_ante[i], 10);
                        else if (typeof object.quick_ante[i] === "number")
                            message.quick_ante[i] = object.quick_ante[i];
                        else if (typeof object.quick_ante[i] === "object")
                            message.quick_ante[i] = new $util.LongBits(object.quick_ante[i].low >>> 0, object.quick_ante[i].high >>> 0).toNumber();
                }
                if (object.is_open_jackpot != null)
                    message.is_open_jackpot = Boolean(object.is_open_jackpot);
                if (object.room_tab != null)
                    message.room_tab = object.room_tab | 0;
                return message;
            };

            /**
             * Creates a plain object from a LevelConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @static
             * @param {roomalloc.GameLevelConfigResp.LevelConfig} message LevelConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LevelConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.quick_ante = [];
                if (options.defaults) {
                    object.level = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.base_ante = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.base_ante = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.entry_min = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.entry_min = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.entry_max = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.entry_max = options.longs === String ? "0" : 0;
                    object.title = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.recommend_min = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.recommend_min = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.recommend_max = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.recommend_max = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bet_min = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bet_min = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.bet_max = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bet_max = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.pay_max = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.pay_max = options.longs === String ? "0" : 0;
                    object.is_open_jackpot = false;
                    object.room_tab = 0;
                }
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.base_ante != null && message.hasOwnProperty("base_ante"))
                    if (typeof message.base_ante === "number")
                        object.base_ante = options.longs === String ? String(message.base_ante) : message.base_ante;
                    else
                        object.base_ante = options.longs === String ? $util.Long.prototype.toString.call(message.base_ante) : options.longs === Number ? new $util.LongBits(message.base_ante.low >>> 0, message.base_ante.high >>> 0).toNumber() : message.base_ante;
                if (message.entry_min != null && message.hasOwnProperty("entry_min"))
                    if (typeof message.entry_min === "number")
                        object.entry_min = options.longs === String ? String(message.entry_min) : message.entry_min;
                    else
                        object.entry_min = options.longs === String ? $util.Long.prototype.toString.call(message.entry_min) : options.longs === Number ? new $util.LongBits(message.entry_min.low >>> 0, message.entry_min.high >>> 0).toNumber() : message.entry_min;
                if (message.entry_max != null && message.hasOwnProperty("entry_max"))
                    if (typeof message.entry_max === "number")
                        object.entry_max = options.longs === String ? String(message.entry_max) : message.entry_max;
                    else
                        object.entry_max = options.longs === String ? $util.Long.prototype.toString.call(message.entry_max) : options.longs === Number ? new $util.LongBits(message.entry_max.low >>> 0, message.entry_max.high >>> 0).toNumber() : message.entry_max;
                if (message.title != null && message.hasOwnProperty("title"))
                    object.title = message.title;
                if (message.recommend_min != null && message.hasOwnProperty("recommend_min"))
                    if (typeof message.recommend_min === "number")
                        object.recommend_min = options.longs === String ? String(message.recommend_min) : message.recommend_min;
                    else
                        object.recommend_min = options.longs === String ? $util.Long.prototype.toString.call(message.recommend_min) : options.longs === Number ? new $util.LongBits(message.recommend_min.low >>> 0, message.recommend_min.high >>> 0).toNumber() : message.recommend_min;
                if (message.recommend_max != null && message.hasOwnProperty("recommend_max"))
                    if (typeof message.recommend_max === "number")
                        object.recommend_max = options.longs === String ? String(message.recommend_max) : message.recommend_max;
                    else
                        object.recommend_max = options.longs === String ? $util.Long.prototype.toString.call(message.recommend_max) : options.longs === Number ? new $util.LongBits(message.recommend_max.low >>> 0, message.recommend_max.high >>> 0).toNumber() : message.recommend_max;
                if (message.bet_min != null && message.hasOwnProperty("bet_min"))
                    if (typeof message.bet_min === "number")
                        object.bet_min = options.longs === String ? String(message.bet_min) : message.bet_min;
                    else
                        object.bet_min = options.longs === String ? $util.Long.prototype.toString.call(message.bet_min) : options.longs === Number ? new $util.LongBits(message.bet_min.low >>> 0, message.bet_min.high >>> 0).toNumber() : message.bet_min;
                if (message.bet_max != null && message.hasOwnProperty("bet_max"))
                    if (typeof message.bet_max === "number")
                        object.bet_max = options.longs === String ? String(message.bet_max) : message.bet_max;
                    else
                        object.bet_max = options.longs === String ? $util.Long.prototype.toString.call(message.bet_max) : options.longs === Number ? new $util.LongBits(message.bet_max.low >>> 0, message.bet_max.high >>> 0).toNumber() : message.bet_max;
                if (message.pay_max != null && message.hasOwnProperty("pay_max"))
                    if (typeof message.pay_max === "number")
                        object.pay_max = options.longs === String ? String(message.pay_max) : message.pay_max;
                    else
                        object.pay_max = options.longs === String ? $util.Long.prototype.toString.call(message.pay_max) : options.longs === Number ? new $util.LongBits(message.pay_max.low >>> 0, message.pay_max.high >>> 0).toNumber() : message.pay_max;
                if (message.quick_ante && message.quick_ante.length) {
                    object.quick_ante = [];
                    for (var j = 0; j < message.quick_ante.length; ++j)
                        if (typeof message.quick_ante[j] === "number")
                            object.quick_ante[j] = options.longs === String ? String(message.quick_ante[j]) : message.quick_ante[j];
                        else
                            object.quick_ante[j] = options.longs === String ? $util.Long.prototype.toString.call(message.quick_ante[j]) : options.longs === Number ? new $util.LongBits(message.quick_ante[j].low >>> 0, message.quick_ante[j].high >>> 0).toNumber() : message.quick_ante[j];
                }
                if (message.is_open_jackpot != null && message.hasOwnProperty("is_open_jackpot"))
                    object.is_open_jackpot = message.is_open_jackpot;
                if (message.room_tab != null && message.hasOwnProperty("room_tab"))
                    object.room_tab = message.room_tab;
                return object;
            };

            /**
             * Converts this LevelConfig to JSON.
             * @function toJSON
             * @memberof roomalloc.GameLevelConfigResp.LevelConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LevelConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LevelConfig;
        })();

        return GameLevelConfigResp;
    })();

    return roomalloc;
})();

$root.gamebase = (function() {

    /**
     * Namespace gamebase.
     * @exports gamebase
     * @namespace
     */
    var gamebase = {};

    /**
     * SERVER_INNER_MSG_TYPE enum.
     * @name gamebase.SERVER_INNER_MSG_TYPE
     * @enum {number}
     * @property {number} SERVER_TYPE_NONE=0 SERVER_TYPE_NONE value
     * @property {number} SERVER_TYPE_GAME_PLAYER=1 SERVER_TYPE_GAME_PLAYER value
     * @property {number} SERVER_TYPE_ROOMSERVER=5 SERVER_TYPE_ROOMSERVER value
     * @property {number} SERVER_TYPE_GAME_MANAGE=20 SERVER_TYPE_GAME_MANAGE value
     * @property {number} SERVER_TYPE_ROOMALLOC=47 SERVER_TYPE_ROOMALLOC value
     */
    gamebase.SERVER_INNER_MSG_TYPE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SERVER_TYPE_NONE"] = 0;
        values[valuesById[1] = "SERVER_TYPE_GAME_PLAYER"] = 1;
        values[valuesById[5] = "SERVER_TYPE_ROOMSERVER"] = 5;
        values[valuesById[20] = "SERVER_TYPE_GAME_MANAGE"] = 20;
        values[valuesById[47] = "SERVER_TYPE_ROOMALLOC"] = 47;
        return values;
    })();

    /**
     * CCGAME_ID enum.
     * @name gamebase.CCGAME_ID
     * @enum {number}
     * @property {number} CCGAME_ID_NULL=0 CCGAME_ID_NULL value
     * @property {number} CCGAME_AVIATOR=101 CCGAME_AVIATOR value
     * @property {number} CCGAME_ANDAR=102 CCGAME_ANDAR value
     * @property {number} CCGAME_AVIATOR2=103 CCGAME_AVIATOR2 value
     */
    gamebase.CCGAME_ID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CCGAME_ID_NULL"] = 0;
        values[valuesById[101] = "CCGAME_AVIATOR"] = 101;
        values[valuesById[102] = "CCGAME_ANDAR"] = 102;
        values[valuesById[103] = "CCGAME_AVIATOR2"] = 103;
        return values;
    })();

    /**
     * CCGAME_ERR_CODE enum.
     * @name gamebase.CCGAME_ERR_CODE
     * @enum {number}
     * @property {number} RET_SUCCESS=0 RET_SUCCESS value
     * @property {number} RET_FAIL=1 RET_FAIL value
     * @property {number} RET_TABLE_NOT_EXIST=2 RET_TABLE_NOT_EXIST value
     * @property {number} RET_LOGIN_REPEAT=3 RET_LOGIN_REPEAT value
     * @property {number} RET_SERVER_KICKOUT=4 RET_SERVER_KICKOUT value
     * @property {number} RET_ABNORMAL=5 RET_ABNORMAL value
     * @property {number} RET_INPUT_PARAM=6 RET_INPUT_PARAM value
     * @property {number} RET_UID_NOT_FOUND=7 RET_UID_NOT_FOUND value
     * @property {number} RET_RANK_TYPE=8 RET_RANK_TYPE value
     * @property {number} RET_STATUS_ERROR=9 RET_STATUS_ERROR value
     * @property {number} RET_BET_REPEAT=10 RET_BET_REPEAT value
     * @property {number} RET_LESS_MONEY=11 RET_LESS_MONEY value
     * @property {number} RET_MORE_MONEY=12 RET_MORE_MONEY value
     * @property {number} RET_TABLE_FULL=13 RET_TABLE_FULL value
     * @property {number} RET_JACKPOT_REWARDID_ERR=14 RET_JACKPOT_REWARDID_ERR value
     * @property {number} RET_JACKPOT_WINNUM_NOT_ENOUGHT=15 RET_JACKPOT_WINNUM_NOT_ENOUGHT value
     * @property {number} RET_JACKPOT_NOT_OPEN=16 RET_JACKPOT_NOT_OPEN value
     * @property {number} RET_PLAYING_LOGOUT_ERR=17 RET_PLAYING_LOGOUT_ERR value
     * @property {number} RET_SHARE_POSTER_NOT_FOUND_ERR=18 RET_SHARE_POSTER_NOT_FOUND_ERR value
     * @property {number} RET_USER_IS_NULL=19 RET_USER_IS_NULL value
     * @property {number} RET_ERROR_AMOUNT=20 RET_ERROR_AMOUNT value
     * @property {number} RET_ERROR_NOT_BET=21 RET_ERROR_NOT_BET value
     * @property {number} RET_ERROR_BET_TIMEOUT=22 RET_ERROR_BET_TIMEOUT value
     */
    gamebase.CCGAME_ERR_CODE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RET_SUCCESS"] = 0;
        values[valuesById[1] = "RET_FAIL"] = 1;
        values[valuesById[2] = "RET_TABLE_NOT_EXIST"] = 2;
        values[valuesById[3] = "RET_LOGIN_REPEAT"] = 3;
        values[valuesById[4] = "RET_SERVER_KICKOUT"] = 4;
        values[valuesById[5] = "RET_ABNORMAL"] = 5;
        values[valuesById[6] = "RET_INPUT_PARAM"] = 6;
        values[valuesById[7] = "RET_UID_NOT_FOUND"] = 7;
        values[valuesById[8] = "RET_RANK_TYPE"] = 8;
        values[valuesById[9] = "RET_STATUS_ERROR"] = 9;
        values[valuesById[10] = "RET_BET_REPEAT"] = 10;
        values[valuesById[11] = "RET_LESS_MONEY"] = 11;
        values[valuesById[12] = "RET_MORE_MONEY"] = 12;
        values[valuesById[13] = "RET_TABLE_FULL"] = 13;
        values[valuesById[14] = "RET_JACKPOT_REWARDID_ERR"] = 14;
        values[valuesById[15] = "RET_JACKPOT_WINNUM_NOT_ENOUGHT"] = 15;
        values[valuesById[16] = "RET_JACKPOT_NOT_OPEN"] = 16;
        values[valuesById[17] = "RET_PLAYING_LOGOUT_ERR"] = 17;
        values[valuesById[18] = "RET_SHARE_POSTER_NOT_FOUND_ERR"] = 18;
        values[valuesById[19] = "RET_USER_IS_NULL"] = 19;
        values[valuesById[20] = "RET_ERROR_AMOUNT"] = 20;
        values[valuesById[21] = "RET_ERROR_NOT_BET"] = 21;
        values[valuesById[22] = "RET_ERROR_BET_TIMEOUT"] = 22;
        return values;
    })();

    /**
     * CCGAME_MSGID enum.
     * @name gamebase.CCGAME_MSGID
     * @enum {number}
     * @property {number} CC_GAME_MSGID_NULL=0 CC_GAME_MSGID_NULL value
     * @property {number} CC_GAME_ALLOC_TABLE_PUSH=10010 CC_GAME_ALLOC_TABLE_PUSH value
     * @property {number} CC_GAME_LEAVE_REQ=10011 CC_GAME_LEAVE_REQ value
     * @property {number} CC_GAME_LEAVE_RESP=10012 CC_GAME_LEAVE_RESP value
     * @property {number} CC_GAME_JOIN_TABLE_REQ=10013 CC_GAME_JOIN_TABLE_REQ value
     * @property {number} CC_GAME_JOIN_TABLE_RESP=10014 CC_GAME_JOIN_TABLE_RESP value
     * @property {number} CC_GAME_STAND_UP_PUSH=10015 CC_GAME_STAND_UP_PUSH value
     * @property {number} CC_GAME_KICKOUT_PUSH=10016 CC_GAME_KICKOUT_PUSH value
     * @property {number} CC_GAME_SITDOWN_REQ=10017 CC_GAME_SITDOWN_REQ value
     * @property {number} CC_GAME_SITDOWN_RESP=10018 CC_GAME_SITDOWN_RESP value
     * @property {number} CC_GAME_SITDOWN_PUSH=10019 CC_GAME_SITDOWN_PUSH value
     * @property {number} CC_GAME_OFFLINE_REQ=10020 CC_GAME_OFFLINE_REQ value
     * @property {number} CC_GAME_OFFLINE_RESP=10021 CC_GAME_OFFLINE_RESP value
     * @property {number} CC_GAME_GET_RULE_REQ=10022 CC_GAME_GET_RULE_REQ value
     * @property {number} CC_GAME_GET_RULE_RESP=10023 CC_GAME_GET_RULE_RESP value
     * @property {number} CC_GAME_JACKPOT_USER_DATA_CHANGE_PUSH=10024 CC_GAME_JACKPOT_USER_DATA_CHANGE_PUSH value
     * @property {number} CC_GAME_JACKPOT_GET_REWARD_REQ=10025 CC_GAME_JACKPOT_GET_REWARD_REQ value
     * @property {number} CC_GAME_JACKPOT_GET_REWARD_RESP=10026 CC_GAME_JACKPOT_GET_REWARD_RESP value
     * @property {number} CC_GAME_JACKPOT_GET_REWARD_PUSH=10027 CC_GAME_JACKPOT_GET_REWARD_PUSH value
     * @property {number} CC_GAME_JACKPOT_GET_REWARD_RECORD_REQ=10028 CC_GAME_JACKPOT_GET_REWARD_RECORD_REQ value
     * @property {number} CC_GAME_JACKPOT_GET_REWARD_RECORD_RESP=10029 CC_GAME_JACKPOT_GET_REWARD_RECORD_RESP value
     * @property {number} CC_GAME_JACKPOT_GET_USER_RECORD_REQ=10030 CC_GAME_JACKPOT_GET_USER_RECORD_REQ value
     * @property {number} CC_GAME_JACKPOT_GET_USER_RECORD_RESP=10031 CC_GAME_JACKPOT_GET_USER_RECORD_RESP value
     * @property {number} CC_GAME_JACKPOT_GET_REWARD_DETAIL_REQ=10032 CC_GAME_JACKPOT_GET_REWARD_DETAIL_REQ value
     * @property {number} CC_GAME_JACKPOT_GET_REWARD_DETAIL_RESP=10033 CC_GAME_JACKPOT_GET_REWARD_DETAIL_RESP value
     * @property {number} CC_GAME_SHARE_POSTER_REQ=10034 CC_GAME_SHARE_POSTER_REQ value
     * @property {number} CC_GAME_SHARE_POSTER_RESP=10035 CC_GAME_SHARE_POSTER_RESP value
     * @property {number} CC_GAME_JACKPOT_POOL_CHANGE_PUSH=10036 CC_GAME_JACKPOT_POOL_CHANGE_PUSH value
     * @property {number} CC_GAME_NOTIFICATION_PUSH=10037 CC_GAME_NOTIFICATION_PUSH value
     */
    gamebase.CCGAME_MSGID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CC_GAME_MSGID_NULL"] = 0;
        values[valuesById[10010] = "CC_GAME_ALLOC_TABLE_PUSH"] = 10010;
        values[valuesById[10011] = "CC_GAME_LEAVE_REQ"] = 10011;
        values[valuesById[10012] = "CC_GAME_LEAVE_RESP"] = 10012;
        values[valuesById[10013] = "CC_GAME_JOIN_TABLE_REQ"] = 10013;
        values[valuesById[10014] = "CC_GAME_JOIN_TABLE_RESP"] = 10014;
        values[valuesById[10015] = "CC_GAME_STAND_UP_PUSH"] = 10015;
        values[valuesById[10016] = "CC_GAME_KICKOUT_PUSH"] = 10016;
        values[valuesById[10017] = "CC_GAME_SITDOWN_REQ"] = 10017;
        values[valuesById[10018] = "CC_GAME_SITDOWN_RESP"] = 10018;
        values[valuesById[10019] = "CC_GAME_SITDOWN_PUSH"] = 10019;
        values[valuesById[10020] = "CC_GAME_OFFLINE_REQ"] = 10020;
        values[valuesById[10021] = "CC_GAME_OFFLINE_RESP"] = 10021;
        values[valuesById[10022] = "CC_GAME_GET_RULE_REQ"] = 10022;
        values[valuesById[10023] = "CC_GAME_GET_RULE_RESP"] = 10023;
        values[valuesById[10024] = "CC_GAME_JACKPOT_USER_DATA_CHANGE_PUSH"] = 10024;
        values[valuesById[10025] = "CC_GAME_JACKPOT_GET_REWARD_REQ"] = 10025;
        values[valuesById[10026] = "CC_GAME_JACKPOT_GET_REWARD_RESP"] = 10026;
        values[valuesById[10027] = "CC_GAME_JACKPOT_GET_REWARD_PUSH"] = 10027;
        values[valuesById[10028] = "CC_GAME_JACKPOT_GET_REWARD_RECORD_REQ"] = 10028;
        values[valuesById[10029] = "CC_GAME_JACKPOT_GET_REWARD_RECORD_RESP"] = 10029;
        values[valuesById[10030] = "CC_GAME_JACKPOT_GET_USER_RECORD_REQ"] = 10030;
        values[valuesById[10031] = "CC_GAME_JACKPOT_GET_USER_RECORD_RESP"] = 10031;
        values[valuesById[10032] = "CC_GAME_JACKPOT_GET_REWARD_DETAIL_REQ"] = 10032;
        values[valuesById[10033] = "CC_GAME_JACKPOT_GET_REWARD_DETAIL_RESP"] = 10033;
        values[valuesById[10034] = "CC_GAME_SHARE_POSTER_REQ"] = 10034;
        values[valuesById[10035] = "CC_GAME_SHARE_POSTER_RESP"] = 10035;
        values[valuesById[10036] = "CC_GAME_JACKPOT_POOL_CHANGE_PUSH"] = 10036;
        values[valuesById[10037] = "CC_GAME_NOTIFICATION_PUSH"] = 10037;
        return values;
    })();

    gamebase.Card = (function() {

        /**
         * Properties of a Card.
         * @memberof gamebase
         * @interface ICard
         * @property {number|null} [card] Card card
         */

        /**
         * Constructs a new Card.
         * @memberof gamebase
         * @classdesc Represents a Card.
         * @implements ICard
         * @constructor
         * @param {gamebase.ICard=} [properties] Properties to set
         */
        function Card(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Card card.
         * @member {number} card
         * @memberof gamebase.Card
         * @instance
         */
        Card.prototype.card = 0;

        /**
         * Creates a new Card instance using the specified properties.
         * @function create
         * @memberof gamebase.Card
         * @static
         * @param {gamebase.ICard=} [properties] Properties to set
         * @returns {gamebase.Card} Card instance
         */
        Card.create = function create(properties) {
            return new Card(properties);
        };

        /**
         * Encodes the specified Card message. Does not implicitly {@link gamebase.Card.verify|verify} messages.
         * @function encode
         * @memberof gamebase.Card
         * @static
         * @param {gamebase.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.card);
            return writer;
        };

        /**
         * Encodes the specified Card message, length delimited. Does not implicitly {@link gamebase.Card.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.Card
         * @static
         * @param {gamebase.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.Card();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.card = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Card message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Card message.
         * @function verify
         * @memberof gamebase.Card
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Card.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.card != null && message.hasOwnProperty("card"))
                if (!$util.isInteger(message.card))
                    return "card: integer expected";
            return null;
        };

        /**
         * Creates a Card message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.Card
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.Card} Card
         */
        Card.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.Card)
                return object;
            var message = new $root.gamebase.Card();
            if (object.card != null)
                message.card = object.card | 0;
            return message;
        };

        /**
         * Creates a plain object from a Card message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.Card
         * @static
         * @param {gamebase.Card} message Card
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Card.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.card = 0;
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = message.card;
            return object;
        };

        /**
         * Converts this Card to JSON.
         * @function toJSON
         * @memberof gamebase.Card
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Card.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Card;
    })();

    gamebase.LeaveRoomReq = (function() {

        /**
         * Properties of a LeaveRoomReq.
         * @memberof gamebase
         * @interface ILeaveRoomReq
         */

        /**
         * Constructs a new LeaveRoomReq.
         * @memberof gamebase
         * @classdesc Represents a LeaveRoomReq.
         * @implements ILeaveRoomReq
         * @constructor
         * @param {gamebase.ILeaveRoomReq=} [properties] Properties to set
         */
        function LeaveRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LeaveRoomReq instance using the specified properties.
         * @function create
         * @memberof gamebase.LeaveRoomReq
         * @static
         * @param {gamebase.ILeaveRoomReq=} [properties] Properties to set
         * @returns {gamebase.LeaveRoomReq} LeaveRoomReq instance
         */
        LeaveRoomReq.create = function create(properties) {
            return new LeaveRoomReq(properties);
        };

        /**
         * Encodes the specified LeaveRoomReq message. Does not implicitly {@link gamebase.LeaveRoomReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.LeaveRoomReq
         * @static
         * @param {gamebase.ILeaveRoomReq} message LeaveRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LeaveRoomReq message, length delimited. Does not implicitly {@link gamebase.LeaveRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.LeaveRoomReq
         * @static
         * @param {gamebase.ILeaveRoomReq} message LeaveRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.LeaveRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.LeaveRoomReq} LeaveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.LeaveRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LeaveRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.LeaveRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.LeaveRoomReq} LeaveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveRoomReq message.
         * @function verify
         * @memberof gamebase.LeaveRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a LeaveRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.LeaveRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.LeaveRoomReq} LeaveRoomReq
         */
        LeaveRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.LeaveRoomReq)
                return object;
            return new $root.gamebase.LeaveRoomReq();
        };

        /**
         * Creates a plain object from a LeaveRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.LeaveRoomReq
         * @static
         * @param {gamebase.LeaveRoomReq} message LeaveRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeaveRoomReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this LeaveRoomReq to JSON.
         * @function toJSON
         * @memberof gamebase.LeaveRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaveRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LeaveRoomReq;
    })();

    gamebase.LeaveRoomResp = (function() {

        /**
         * Properties of a LeaveRoomResp.
         * @memberof gamebase
         * @interface ILeaveRoomResp
         * @property {number|null} [result] LeaveRoomResp result
         * @property {number|Long|null} [balance] LeaveRoomResp balance
         */

        /**
         * Constructs a new LeaveRoomResp.
         * @memberof gamebase
         * @classdesc Represents a LeaveRoomResp.
         * @implements ILeaveRoomResp
         * @constructor
         * @param {gamebase.ILeaveRoomResp=} [properties] Properties to set
         */
        function LeaveRoomResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaveRoomResp result.
         * @member {number} result
         * @memberof gamebase.LeaveRoomResp
         * @instance
         */
        LeaveRoomResp.prototype.result = 0;

        /**
         * LeaveRoomResp balance.
         * @member {number|Long} balance
         * @memberof gamebase.LeaveRoomResp
         * @instance
         */
        LeaveRoomResp.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LeaveRoomResp instance using the specified properties.
         * @function create
         * @memberof gamebase.LeaveRoomResp
         * @static
         * @param {gamebase.ILeaveRoomResp=} [properties] Properties to set
         * @returns {gamebase.LeaveRoomResp} LeaveRoomResp instance
         */
        LeaveRoomResp.create = function create(properties) {
            return new LeaveRoomResp(properties);
        };

        /**
         * Encodes the specified LeaveRoomResp message. Does not implicitly {@link gamebase.LeaveRoomResp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.LeaveRoomResp
         * @static
         * @param {gamebase.ILeaveRoomResp} message LeaveRoomResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.balance);
            return writer;
        };

        /**
         * Encodes the specified LeaveRoomResp message, length delimited. Does not implicitly {@link gamebase.LeaveRoomResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.LeaveRoomResp
         * @static
         * @param {gamebase.ILeaveRoomResp} message LeaveRoomResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveRoomResp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.LeaveRoomResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.LeaveRoomResp} LeaveRoomResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.LeaveRoomResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.balance = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LeaveRoomResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.LeaveRoomResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.LeaveRoomResp} LeaveRoomResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveRoomResp message.
         * @function verify
         * @memberof gamebase.LeaveRoomResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveRoomResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                    return "balance: integer|Long expected";
            return null;
        };

        /**
         * Creates a LeaveRoomResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.LeaveRoomResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.LeaveRoomResp} LeaveRoomResp
         */
        LeaveRoomResp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.LeaveRoomResp)
                return object;
            var message = new $root.gamebase.LeaveRoomResp();
            if (object.result != null)
                message.result = object.result | 0;
            if (object.balance != null)
                if ($util.Long)
                    (message.balance = $util.Long.fromValue(object.balance)).unsigned = false;
                else if (typeof object.balance === "string")
                    message.balance = parseInt(object.balance, 10);
                else if (typeof object.balance === "number")
                    message.balance = object.balance;
                else if (typeof object.balance === "object")
                    message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LeaveRoomResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.LeaveRoomResp
         * @static
         * @param {gamebase.LeaveRoomResp} message LeaveRoomResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeaveRoomResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.balance = options.longs === String ? "0" : 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance === "number")
                    object.balance = options.longs === String ? String(message.balance) : message.balance;
                else
                    object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber() : message.balance;
            return object;
        };

        /**
         * Converts this LeaveRoomResp to JSON.
         * @function toJSON
         * @memberof gamebase.LeaveRoomResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaveRoomResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LeaveRoomResp;
    })();

    gamebase.KickoutRoomPush = (function() {

        /**
         * Properties of a KickoutRoomPush.
         * @memberof gamebase
         * @interface IKickoutRoomPush
         * @property {number|null} [result] KickoutRoomPush result
         * @property {number|null} [value] KickoutRoomPush value
         */

        /**
         * Constructs a new KickoutRoomPush.
         * @memberof gamebase
         * @classdesc Represents a KickoutRoomPush.
         * @implements IKickoutRoomPush
         * @constructor
         * @param {gamebase.IKickoutRoomPush=} [properties] Properties to set
         */
        function KickoutRoomPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KickoutRoomPush result.
         * @member {number} result
         * @memberof gamebase.KickoutRoomPush
         * @instance
         */
        KickoutRoomPush.prototype.result = 0;

        /**
         * KickoutRoomPush value.
         * @member {number} value
         * @memberof gamebase.KickoutRoomPush
         * @instance
         */
        KickoutRoomPush.prototype.value = 0;

        /**
         * Creates a new KickoutRoomPush instance using the specified properties.
         * @function create
         * @memberof gamebase.KickoutRoomPush
         * @static
         * @param {gamebase.IKickoutRoomPush=} [properties] Properties to set
         * @returns {gamebase.KickoutRoomPush} KickoutRoomPush instance
         */
        KickoutRoomPush.create = function create(properties) {
            return new KickoutRoomPush(properties);
        };

        /**
         * Encodes the specified KickoutRoomPush message. Does not implicitly {@link gamebase.KickoutRoomPush.verify|verify} messages.
         * @function encode
         * @memberof gamebase.KickoutRoomPush
         * @static
         * @param {gamebase.IKickoutRoomPush} message KickoutRoomPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickoutRoomPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
            return writer;
        };

        /**
         * Encodes the specified KickoutRoomPush message, length delimited. Does not implicitly {@link gamebase.KickoutRoomPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.KickoutRoomPush
         * @static
         * @param {gamebase.IKickoutRoomPush} message KickoutRoomPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KickoutRoomPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KickoutRoomPush message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.KickoutRoomPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.KickoutRoomPush} KickoutRoomPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickoutRoomPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.KickoutRoomPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KickoutRoomPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.KickoutRoomPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.KickoutRoomPush} KickoutRoomPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KickoutRoomPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KickoutRoomPush message.
         * @function verify
         * @memberof gamebase.KickoutRoomPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KickoutRoomPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        /**
         * Creates a KickoutRoomPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.KickoutRoomPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.KickoutRoomPush} KickoutRoomPush
         */
        KickoutRoomPush.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.KickoutRoomPush)
                return object;
            var message = new $root.gamebase.KickoutRoomPush();
            if (object.result != null)
                message.result = object.result | 0;
            if (object.value != null)
                message.value = object.value | 0;
            return message;
        };

        /**
         * Creates a plain object from a KickoutRoomPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.KickoutRoomPush
         * @static
         * @param {gamebase.KickoutRoomPush} message KickoutRoomPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KickoutRoomPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = 0;
                object.value = 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this KickoutRoomPush to JSON.
         * @function toJSON
         * @memberof gamebase.KickoutRoomPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KickoutRoomPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KickoutRoomPush;
    })();

    gamebase.UserSitDownReq = (function() {

        /**
         * Properties of a UserSitDownReq.
         * @memberof gamebase
         * @interface IUserSitDownReq
         * @property {number|null} [seat_id] UserSitDownReq seat_id
         */

        /**
         * Constructs a new UserSitDownReq.
         * @memberof gamebase
         * @classdesc Represents a UserSitDownReq.
         * @implements IUserSitDownReq
         * @constructor
         * @param {gamebase.IUserSitDownReq=} [properties] Properties to set
         */
        function UserSitDownReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserSitDownReq seat_id.
         * @member {number} seat_id
         * @memberof gamebase.UserSitDownReq
         * @instance
         */
        UserSitDownReq.prototype.seat_id = 0;

        /**
         * Creates a new UserSitDownReq instance using the specified properties.
         * @function create
         * @memberof gamebase.UserSitDownReq
         * @static
         * @param {gamebase.IUserSitDownReq=} [properties] Properties to set
         * @returns {gamebase.UserSitDownReq} UserSitDownReq instance
         */
        UserSitDownReq.create = function create(properties) {
            return new UserSitDownReq(properties);
        };

        /**
         * Encodes the specified UserSitDownReq message. Does not implicitly {@link gamebase.UserSitDownReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.UserSitDownReq
         * @static
         * @param {gamebase.IUserSitDownReq} message UserSitDownReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSitDownReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seat_id != null && Object.hasOwnProperty.call(message, "seat_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seat_id);
            return writer;
        };

        /**
         * Encodes the specified UserSitDownReq message, length delimited. Does not implicitly {@link gamebase.UserSitDownReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.UserSitDownReq
         * @static
         * @param {gamebase.IUserSitDownReq} message UserSitDownReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSitDownReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserSitDownReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.UserSitDownReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.UserSitDownReq} UserSitDownReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSitDownReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.UserSitDownReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seat_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserSitDownReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.UserSitDownReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.UserSitDownReq} UserSitDownReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSitDownReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserSitDownReq message.
         * @function verify
         * @memberof gamebase.UserSitDownReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserSitDownReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seat_id != null && message.hasOwnProperty("seat_id"))
                if (!$util.isInteger(message.seat_id))
                    return "seat_id: integer expected";
            return null;
        };

        /**
         * Creates a UserSitDownReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.UserSitDownReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.UserSitDownReq} UserSitDownReq
         */
        UserSitDownReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.UserSitDownReq)
                return object;
            var message = new $root.gamebase.UserSitDownReq();
            if (object.seat_id != null)
                message.seat_id = object.seat_id | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserSitDownReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.UserSitDownReq
         * @static
         * @param {gamebase.UserSitDownReq} message UserSitDownReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserSitDownReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.seat_id = 0;
            if (message.seat_id != null && message.hasOwnProperty("seat_id"))
                object.seat_id = message.seat_id;
            return object;
        };

        /**
         * Converts this UserSitDownReq to JSON.
         * @function toJSON
         * @memberof gamebase.UserSitDownReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserSitDownReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserSitDownReq;
    })();

    gamebase.UserSitDownResp = (function() {

        /**
         * Properties of a UserSitDownResp.
         * @memberof gamebase
         * @interface IUserSitDownResp
         * @property {number|null} [result] UserSitDownResp result
         */

        /**
         * Constructs a new UserSitDownResp.
         * @memberof gamebase
         * @classdesc Represents a UserSitDownResp.
         * @implements IUserSitDownResp
         * @constructor
         * @param {gamebase.IUserSitDownResp=} [properties] Properties to set
         */
        function UserSitDownResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserSitDownResp result.
         * @member {number} result
         * @memberof gamebase.UserSitDownResp
         * @instance
         */
        UserSitDownResp.prototype.result = 0;

        /**
         * Creates a new UserSitDownResp instance using the specified properties.
         * @function create
         * @memberof gamebase.UserSitDownResp
         * @static
         * @param {gamebase.IUserSitDownResp=} [properties] Properties to set
         * @returns {gamebase.UserSitDownResp} UserSitDownResp instance
         */
        UserSitDownResp.create = function create(properties) {
            return new UserSitDownResp(properties);
        };

        /**
         * Encodes the specified UserSitDownResp message. Does not implicitly {@link gamebase.UserSitDownResp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.UserSitDownResp
         * @static
         * @param {gamebase.IUserSitDownResp} message UserSitDownResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSitDownResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified UserSitDownResp message, length delimited. Does not implicitly {@link gamebase.UserSitDownResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.UserSitDownResp
         * @static
         * @param {gamebase.IUserSitDownResp} message UserSitDownResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSitDownResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserSitDownResp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.UserSitDownResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.UserSitDownResp} UserSitDownResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSitDownResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.UserSitDownResp();
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
         * Decodes a UserSitDownResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.UserSitDownResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.UserSitDownResp} UserSitDownResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSitDownResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserSitDownResp message.
         * @function verify
         * @memberof gamebase.UserSitDownResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserSitDownResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            return null;
        };

        /**
         * Creates a UserSitDownResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.UserSitDownResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.UserSitDownResp} UserSitDownResp
         */
        UserSitDownResp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.UserSitDownResp)
                return object;
            var message = new $root.gamebase.UserSitDownResp();
            if (object.result != null)
                message.result = object.result | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserSitDownResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.UserSitDownResp
         * @static
         * @param {gamebase.UserSitDownResp} message UserSitDownResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserSitDownResp.toObject = function toObject(message, options) {
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
         * Converts this UserSitDownResp to JSON.
         * @function toJSON
         * @memberof gamebase.UserSitDownResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserSitDownResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserSitDownResp;
    })();

    gamebase.UserSitDownPush = (function() {

        /**
         * Properties of a UserSitDownPush.
         * @memberof gamebase
         * @interface IUserSitDownPush
         * @property {number|null} [uid] UserSitDownPush uid
         * @property {number|null} [seat_id] UserSitDownPush seat_id
         * @property {string|null} [userinfo] UserSitDownPush userinfo
         * @property {number|Long|null} [balance] UserSitDownPush balance
         * @property {number|null} [userCount] UserSitDownPush userCount
         */

        /**
         * Constructs a new UserSitDownPush.
         * @memberof gamebase
         * @classdesc Represents a UserSitDownPush.
         * @implements IUserSitDownPush
         * @constructor
         * @param {gamebase.IUserSitDownPush=} [properties] Properties to set
         */
        function UserSitDownPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserSitDownPush uid.
         * @member {number} uid
         * @memberof gamebase.UserSitDownPush
         * @instance
         */
        UserSitDownPush.prototype.uid = 0;

        /**
         * UserSitDownPush seat_id.
         * @member {number} seat_id
         * @memberof gamebase.UserSitDownPush
         * @instance
         */
        UserSitDownPush.prototype.seat_id = 0;

        /**
         * UserSitDownPush userinfo.
         * @member {string} userinfo
         * @memberof gamebase.UserSitDownPush
         * @instance
         */
        UserSitDownPush.prototype.userinfo = "";

        /**
         * UserSitDownPush balance.
         * @member {number|Long} balance
         * @memberof gamebase.UserSitDownPush
         * @instance
         */
        UserSitDownPush.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserSitDownPush userCount.
         * @member {number} userCount
         * @memberof gamebase.UserSitDownPush
         * @instance
         */
        UserSitDownPush.prototype.userCount = 0;

        /**
         * Creates a new UserSitDownPush instance using the specified properties.
         * @function create
         * @memberof gamebase.UserSitDownPush
         * @static
         * @param {gamebase.IUserSitDownPush=} [properties] Properties to set
         * @returns {gamebase.UserSitDownPush} UserSitDownPush instance
         */
        UserSitDownPush.create = function create(properties) {
            return new UserSitDownPush(properties);
        };

        /**
         * Encodes the specified UserSitDownPush message. Does not implicitly {@link gamebase.UserSitDownPush.verify|verify} messages.
         * @function encode
         * @memberof gamebase.UserSitDownPush
         * @static
         * @param {gamebase.IUserSitDownPush} message UserSitDownPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSitDownPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.seat_id != null && Object.hasOwnProperty.call(message, "seat_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.seat_id);
            if (message.userinfo != null && Object.hasOwnProperty.call(message, "userinfo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userinfo);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.balance);
            if (message.userCount != null && Object.hasOwnProperty.call(message, "userCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.userCount);
            return writer;
        };

        /**
         * Encodes the specified UserSitDownPush message, length delimited. Does not implicitly {@link gamebase.UserSitDownPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.UserSitDownPush
         * @static
         * @param {gamebase.IUserSitDownPush} message UserSitDownPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSitDownPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserSitDownPush message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.UserSitDownPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.UserSitDownPush} UserSitDownPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSitDownPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.UserSitDownPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.seat_id = reader.int32();
                    break;
                case 3:
                    message.userinfo = reader.string();
                    break;
                case 4:
                    message.balance = reader.int64();
                    break;
                case 5:
                    message.userCount = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserSitDownPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.UserSitDownPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.UserSitDownPush} UserSitDownPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSitDownPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserSitDownPush message.
         * @function verify
         * @memberof gamebase.UserSitDownPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserSitDownPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.seat_id != null && message.hasOwnProperty("seat_id"))
                if (!$util.isInteger(message.seat_id))
                    return "seat_id: integer expected";
            if (message.userinfo != null && message.hasOwnProperty("userinfo"))
                if (!$util.isString(message.userinfo))
                    return "userinfo: string expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                    return "balance: integer|Long expected";
            if (message.userCount != null && message.hasOwnProperty("userCount"))
                if (!$util.isInteger(message.userCount))
                    return "userCount: integer expected";
            return null;
        };

        /**
         * Creates a UserSitDownPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.UserSitDownPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.UserSitDownPush} UserSitDownPush
         */
        UserSitDownPush.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.UserSitDownPush)
                return object;
            var message = new $root.gamebase.UserSitDownPush();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.seat_id != null)
                message.seat_id = object.seat_id | 0;
            if (object.userinfo != null)
                message.userinfo = String(object.userinfo);
            if (object.balance != null)
                if ($util.Long)
                    (message.balance = $util.Long.fromValue(object.balance)).unsigned = false;
                else if (typeof object.balance === "string")
                    message.balance = parseInt(object.balance, 10);
                else if (typeof object.balance === "number")
                    message.balance = object.balance;
                else if (typeof object.balance === "object")
                    message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber();
            if (object.userCount != null)
                message.userCount = object.userCount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a UserSitDownPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.UserSitDownPush
         * @static
         * @param {gamebase.UserSitDownPush} message UserSitDownPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserSitDownPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.seat_id = 0;
                object.userinfo = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.balance = options.longs === String ? "0" : 0;
                object.userCount = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.seat_id != null && message.hasOwnProperty("seat_id"))
                object.seat_id = message.seat_id;
            if (message.userinfo != null && message.hasOwnProperty("userinfo"))
                object.userinfo = message.userinfo;
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance === "number")
                    object.balance = options.longs === String ? String(message.balance) : message.balance;
                else
                    object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber() : message.balance;
            if (message.userCount != null && message.hasOwnProperty("userCount"))
                object.userCount = message.userCount;
            return object;
        };

        /**
         * Converts this UserSitDownPush to JSON.
         * @function toJSON
         * @memberof gamebase.UserSitDownPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserSitDownPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserSitDownPush;
    })();

    gamebase.UserJoinTableReq = (function() {

        /**
         * Properties of a UserJoinTableReq.
         * @memberof gamebase
         * @interface IUserJoinTableReq
         * @property {number|null} [table_id] UserJoinTableReq table_id
         */

        /**
         * Constructs a new UserJoinTableReq.
         * @memberof gamebase
         * @classdesc Represents a UserJoinTableReq.
         * @implements IUserJoinTableReq
         * @constructor
         * @param {gamebase.IUserJoinTableReq=} [properties] Properties to set
         */
        function UserJoinTableReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserJoinTableReq table_id.
         * @member {number} table_id
         * @memberof gamebase.UserJoinTableReq
         * @instance
         */
        UserJoinTableReq.prototype.table_id = 0;

        /**
         * Creates a new UserJoinTableReq instance using the specified properties.
         * @function create
         * @memberof gamebase.UserJoinTableReq
         * @static
         * @param {gamebase.IUserJoinTableReq=} [properties] Properties to set
         * @returns {gamebase.UserJoinTableReq} UserJoinTableReq instance
         */
        UserJoinTableReq.create = function create(properties) {
            return new UserJoinTableReq(properties);
        };

        /**
         * Encodes the specified UserJoinTableReq message. Does not implicitly {@link gamebase.UserJoinTableReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.UserJoinTableReq
         * @static
         * @param {gamebase.IUserJoinTableReq} message UserJoinTableReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJoinTableReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.table_id != null && Object.hasOwnProperty.call(message, "table_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.table_id);
            return writer;
        };

        /**
         * Encodes the specified UserJoinTableReq message, length delimited. Does not implicitly {@link gamebase.UserJoinTableReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.UserJoinTableReq
         * @static
         * @param {gamebase.IUserJoinTableReq} message UserJoinTableReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJoinTableReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserJoinTableReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.UserJoinTableReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.UserJoinTableReq} UserJoinTableReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJoinTableReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.UserJoinTableReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.table_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserJoinTableReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.UserJoinTableReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.UserJoinTableReq} UserJoinTableReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJoinTableReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserJoinTableReq message.
         * @function verify
         * @memberof gamebase.UserJoinTableReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserJoinTableReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.table_id != null && message.hasOwnProperty("table_id"))
                if (!$util.isInteger(message.table_id))
                    return "table_id: integer expected";
            return null;
        };

        /**
         * Creates a UserJoinTableReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.UserJoinTableReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.UserJoinTableReq} UserJoinTableReq
         */
        UserJoinTableReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.UserJoinTableReq)
                return object;
            var message = new $root.gamebase.UserJoinTableReq();
            if (object.table_id != null)
                message.table_id = object.table_id | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserJoinTableReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.UserJoinTableReq
         * @static
         * @param {gamebase.UserJoinTableReq} message UserJoinTableReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserJoinTableReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.table_id = 0;
            if (message.table_id != null && message.hasOwnProperty("table_id"))
                object.table_id = message.table_id;
            return object;
        };

        /**
         * Converts this UserJoinTableReq to JSON.
         * @function toJSON
         * @memberof gamebase.UserJoinTableReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserJoinTableReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserJoinTableReq;
    })();

    gamebase.UserJoinTableResp = (function() {

        /**
         * Properties of a UserJoinTableResp.
         * @memberof gamebase
         * @interface IUserJoinTableResp
         * @property {number|null} [result] UserJoinTableResp result
         * @property {string|null} [msgname] UserJoinTableResp msgname
         * @property {Uint8Array|null} [tableinfo] UserJoinTableResp tableinfo
         * @property {number|Long|null} [balance] UserJoinTableResp balance
         * @property {string|null} [userinfo] UserJoinTableResp userinfo
         * @property {gamebase.IJackpotUserData|null} [jackpotinfo] UserJoinTableResp jackpotinfo
         * @property {number|null} [room_level] UserJoinTableResp room_level
         */

        /**
         * Constructs a new UserJoinTableResp.
         * @memberof gamebase
         * @classdesc Represents a UserJoinTableResp.
         * @implements IUserJoinTableResp
         * @constructor
         * @param {gamebase.IUserJoinTableResp=} [properties] Properties to set
         */
        function UserJoinTableResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserJoinTableResp result.
         * @member {number} result
         * @memberof gamebase.UserJoinTableResp
         * @instance
         */
        UserJoinTableResp.prototype.result = 0;

        /**
         * UserJoinTableResp msgname.
         * @member {string} msgname
         * @memberof gamebase.UserJoinTableResp
         * @instance
         */
        UserJoinTableResp.prototype.msgname = "";

        /**
         * UserJoinTableResp tableinfo.
         * @member {Uint8Array} tableinfo
         * @memberof gamebase.UserJoinTableResp
         * @instance
         */
        UserJoinTableResp.prototype.tableinfo = $util.newBuffer([]);

        /**
         * UserJoinTableResp balance.
         * @member {number|Long} balance
         * @memberof gamebase.UserJoinTableResp
         * @instance
         */
        UserJoinTableResp.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserJoinTableResp userinfo.
         * @member {string} userinfo
         * @memberof gamebase.UserJoinTableResp
         * @instance
         */
        UserJoinTableResp.prototype.userinfo = "";

        /**
         * UserJoinTableResp jackpotinfo.
         * @member {gamebase.IJackpotUserData|null|undefined} jackpotinfo
         * @memberof gamebase.UserJoinTableResp
         * @instance
         */
        UserJoinTableResp.prototype.jackpotinfo = null;

        /**
         * UserJoinTableResp room_level.
         * @member {number} room_level
         * @memberof gamebase.UserJoinTableResp
         * @instance
         */
        UserJoinTableResp.prototype.room_level = 0;

        /**
         * Creates a new UserJoinTableResp instance using the specified properties.
         * @function create
         * @memberof gamebase.UserJoinTableResp
         * @static
         * @param {gamebase.IUserJoinTableResp=} [properties] Properties to set
         * @returns {gamebase.UserJoinTableResp} UserJoinTableResp instance
         */
        UserJoinTableResp.create = function create(properties) {
            return new UserJoinTableResp(properties);
        };

        /**
         * Encodes the specified UserJoinTableResp message. Does not implicitly {@link gamebase.UserJoinTableResp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.UserJoinTableResp
         * @static
         * @param {gamebase.IUserJoinTableResp} message UserJoinTableResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJoinTableResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.msgname != null && Object.hasOwnProperty.call(message, "msgname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msgname);
            if (message.tableinfo != null && Object.hasOwnProperty.call(message, "tableinfo"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.tableinfo);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.balance);
            if (message.userinfo != null && Object.hasOwnProperty.call(message, "userinfo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.userinfo);
            if (message.jackpotinfo != null && Object.hasOwnProperty.call(message, "jackpotinfo"))
                $root.gamebase.JackpotUserData.encode(message.jackpotinfo, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.room_level != null && Object.hasOwnProperty.call(message, "room_level"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.room_level);
            return writer;
        };

        /**
         * Encodes the specified UserJoinTableResp message, length delimited. Does not implicitly {@link gamebase.UserJoinTableResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.UserJoinTableResp
         * @static
         * @param {gamebase.IUserJoinTableResp} message UserJoinTableResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJoinTableResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserJoinTableResp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.UserJoinTableResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.UserJoinTableResp} UserJoinTableResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJoinTableResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.UserJoinTableResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.msgname = reader.string();
                    break;
                case 3:
                    message.tableinfo = reader.bytes();
                    break;
                case 4:
                    message.balance = reader.int64();
                    break;
                case 5:
                    message.userinfo = reader.string();
                    break;
                case 6:
                    message.jackpotinfo = $root.gamebase.JackpotUserData.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.room_level = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserJoinTableResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.UserJoinTableResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.UserJoinTableResp} UserJoinTableResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJoinTableResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserJoinTableResp message.
         * @function verify
         * @memberof gamebase.UserJoinTableResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserJoinTableResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.msgname != null && message.hasOwnProperty("msgname"))
                if (!$util.isString(message.msgname))
                    return "msgname: string expected";
            if (message.tableinfo != null && message.hasOwnProperty("tableinfo"))
                if (!(message.tableinfo && typeof message.tableinfo.length === "number" || $util.isString(message.tableinfo)))
                    return "tableinfo: buffer expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                    return "balance: integer|Long expected";
            if (message.userinfo != null && message.hasOwnProperty("userinfo"))
                if (!$util.isString(message.userinfo))
                    return "userinfo: string expected";
            if (message.jackpotinfo != null && message.hasOwnProperty("jackpotinfo")) {
                var error = $root.gamebase.JackpotUserData.verify(message.jackpotinfo);
                if (error)
                    return "jackpotinfo." + error;
            }
            if (message.room_level != null && message.hasOwnProperty("room_level"))
                if (!$util.isInteger(message.room_level))
                    return "room_level: integer expected";
            return null;
        };

        /**
         * Creates a UserJoinTableResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.UserJoinTableResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.UserJoinTableResp} UserJoinTableResp
         */
        UserJoinTableResp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.UserJoinTableResp)
                return object;
            var message = new $root.gamebase.UserJoinTableResp();
            if (object.result != null)
                message.result = object.result | 0;
            if (object.msgname != null)
                message.msgname = String(object.msgname);
            if (object.tableinfo != null)
                if (typeof object.tableinfo === "string")
                    $util.base64.decode(object.tableinfo, message.tableinfo = $util.newBuffer($util.base64.length(object.tableinfo)), 0);
                else if (object.tableinfo.length)
                    message.tableinfo = object.tableinfo;
            if (object.balance != null)
                if ($util.Long)
                    (message.balance = $util.Long.fromValue(object.balance)).unsigned = false;
                else if (typeof object.balance === "string")
                    message.balance = parseInt(object.balance, 10);
                else if (typeof object.balance === "number")
                    message.balance = object.balance;
                else if (typeof object.balance === "object")
                    message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber();
            if (object.userinfo != null)
                message.userinfo = String(object.userinfo);
            if (object.jackpotinfo != null) {
                if (typeof object.jackpotinfo !== "object")
                    throw TypeError(".gamebase.UserJoinTableResp.jackpotinfo: object expected");
                message.jackpotinfo = $root.gamebase.JackpotUserData.fromObject(object.jackpotinfo);
            }
            if (object.room_level != null)
                message.room_level = object.room_level | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserJoinTableResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.UserJoinTableResp
         * @static
         * @param {gamebase.UserJoinTableResp} message UserJoinTableResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserJoinTableResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = 0;
                object.msgname = "";
                if (options.bytes === String)
                    object.tableinfo = "";
                else {
                    object.tableinfo = [];
                    if (options.bytes !== Array)
                        object.tableinfo = $util.newBuffer(object.tableinfo);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.balance = options.longs === String ? "0" : 0;
                object.userinfo = "";
                object.jackpotinfo = null;
                object.room_level = 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.msgname != null && message.hasOwnProperty("msgname"))
                object.msgname = message.msgname;
            if (message.tableinfo != null && message.hasOwnProperty("tableinfo"))
                object.tableinfo = options.bytes === String ? $util.base64.encode(message.tableinfo, 0, message.tableinfo.length) : options.bytes === Array ? Array.prototype.slice.call(message.tableinfo) : message.tableinfo;
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance === "number")
                    object.balance = options.longs === String ? String(message.balance) : message.balance;
                else
                    object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber() : message.balance;
            if (message.userinfo != null && message.hasOwnProperty("userinfo"))
                object.userinfo = message.userinfo;
            if (message.jackpotinfo != null && message.hasOwnProperty("jackpotinfo"))
                object.jackpotinfo = $root.gamebase.JackpotUserData.toObject(message.jackpotinfo, options);
            if (message.room_level != null && message.hasOwnProperty("room_level"))
                object.room_level = message.room_level;
            return object;
        };

        /**
         * Converts this UserJoinTableResp to JSON.
         * @function toJSON
         * @memberof gamebase.UserJoinTableResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserJoinTableResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserJoinTableResp;
    })();

    gamebase.AllocTablePush = (function() {

        /**
         * Properties of an AllocTablePush.
         * @memberof gamebase
         * @interface IAllocTablePush
         * @property {number|null} [table_id] AllocTablePush table_id
         * @property {number|null} [game_id] AllocTablePush game_id
         * @property {number|null} [svid] AllocTablePush svid
         */

        /**
         * Constructs a new AllocTablePush.
         * @memberof gamebase
         * @classdesc Represents an AllocTablePush.
         * @implements IAllocTablePush
         * @constructor
         * @param {gamebase.IAllocTablePush=} [properties] Properties to set
         */
        function AllocTablePush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AllocTablePush table_id.
         * @member {number} table_id
         * @memberof gamebase.AllocTablePush
         * @instance
         */
        AllocTablePush.prototype.table_id = 0;

        /**
         * AllocTablePush game_id.
         * @member {number} game_id
         * @memberof gamebase.AllocTablePush
         * @instance
         */
        AllocTablePush.prototype.game_id = 0;

        /**
         * AllocTablePush svid.
         * @member {number} svid
         * @memberof gamebase.AllocTablePush
         * @instance
         */
        AllocTablePush.prototype.svid = 0;

        /**
         * Creates a new AllocTablePush instance using the specified properties.
         * @function create
         * @memberof gamebase.AllocTablePush
         * @static
         * @param {gamebase.IAllocTablePush=} [properties] Properties to set
         * @returns {gamebase.AllocTablePush} AllocTablePush instance
         */
        AllocTablePush.create = function create(properties) {
            return new AllocTablePush(properties);
        };

        /**
         * Encodes the specified AllocTablePush message. Does not implicitly {@link gamebase.AllocTablePush.verify|verify} messages.
         * @function encode
         * @memberof gamebase.AllocTablePush
         * @static
         * @param {gamebase.IAllocTablePush} message AllocTablePush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllocTablePush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.table_id != null && Object.hasOwnProperty.call(message, "table_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.table_id);
            if (message.game_id != null && Object.hasOwnProperty.call(message, "game_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.game_id);
            if (message.svid != null && Object.hasOwnProperty.call(message, "svid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.svid);
            return writer;
        };

        /**
         * Encodes the specified AllocTablePush message, length delimited. Does not implicitly {@link gamebase.AllocTablePush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.AllocTablePush
         * @static
         * @param {gamebase.IAllocTablePush} message AllocTablePush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllocTablePush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllocTablePush message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.AllocTablePush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.AllocTablePush} AllocTablePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllocTablePush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.AllocTablePush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.table_id = reader.int32();
                    break;
                case 2:
                    message.game_id = reader.int32();
                    break;
                case 3:
                    message.svid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AllocTablePush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.AllocTablePush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.AllocTablePush} AllocTablePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllocTablePush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AllocTablePush message.
         * @function verify
         * @memberof gamebase.AllocTablePush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AllocTablePush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.table_id != null && message.hasOwnProperty("table_id"))
                if (!$util.isInteger(message.table_id))
                    return "table_id: integer expected";
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                if (!$util.isInteger(message.game_id))
                    return "game_id: integer expected";
            if (message.svid != null && message.hasOwnProperty("svid"))
                if (!$util.isInteger(message.svid))
                    return "svid: integer expected";
            return null;
        };

        /**
         * Creates an AllocTablePush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.AllocTablePush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.AllocTablePush} AllocTablePush
         */
        AllocTablePush.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.AllocTablePush)
                return object;
            var message = new $root.gamebase.AllocTablePush();
            if (object.table_id != null)
                message.table_id = object.table_id | 0;
            if (object.game_id != null)
                message.game_id = object.game_id | 0;
            if (object.svid != null)
                message.svid = object.svid | 0;
            return message;
        };

        /**
         * Creates a plain object from an AllocTablePush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.AllocTablePush
         * @static
         * @param {gamebase.AllocTablePush} message AllocTablePush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AllocTablePush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.table_id = 0;
                object.game_id = 0;
                object.svid = 0;
            }
            if (message.table_id != null && message.hasOwnProperty("table_id"))
                object.table_id = message.table_id;
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                object.game_id = message.game_id;
            if (message.svid != null && message.hasOwnProperty("svid"))
                object.svid = message.svid;
            return object;
        };

        /**
         * Converts this AllocTablePush to JSON.
         * @function toJSON
         * @memberof gamebase.AllocTablePush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AllocTablePush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AllocTablePush;
    })();

    gamebase.GetGameRuleReq = (function() {

        /**
         * Properties of a GetGameRuleReq.
         * @memberof gamebase
         * @interface IGetGameRuleReq
         * @property {string|null} [key] GetGameRuleReq key
         * @property {string|null} [lang] GetGameRuleReq lang
         */

        /**
         * Constructs a new GetGameRuleReq.
         * @memberof gamebase
         * @classdesc Represents a GetGameRuleReq.
         * @implements IGetGameRuleReq
         * @constructor
         * @param {gamebase.IGetGameRuleReq=} [properties] Properties to set
         */
        function GetGameRuleReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGameRuleReq key.
         * @member {string} key
         * @memberof gamebase.GetGameRuleReq
         * @instance
         */
        GetGameRuleReq.prototype.key = "";

        /**
         * GetGameRuleReq lang.
         * @member {string} lang
         * @memberof gamebase.GetGameRuleReq
         * @instance
         */
        GetGameRuleReq.prototype.lang = "";

        /**
         * Creates a new GetGameRuleReq instance using the specified properties.
         * @function create
         * @memberof gamebase.GetGameRuleReq
         * @static
         * @param {gamebase.IGetGameRuleReq=} [properties] Properties to set
         * @returns {gamebase.GetGameRuleReq} GetGameRuleReq instance
         */
        GetGameRuleReq.create = function create(properties) {
            return new GetGameRuleReq(properties);
        };

        /**
         * Encodes the specified GetGameRuleReq message. Does not implicitly {@link gamebase.GetGameRuleReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.GetGameRuleReq
         * @static
         * @param {gamebase.IGetGameRuleReq} message GetGameRuleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGameRuleReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.lang != null && Object.hasOwnProperty.call(message, "lang"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lang);
            return writer;
        };

        /**
         * Encodes the specified GetGameRuleReq message, length delimited. Does not implicitly {@link gamebase.GetGameRuleReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.GetGameRuleReq
         * @static
         * @param {gamebase.IGetGameRuleReq} message GetGameRuleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGameRuleReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGameRuleReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.GetGameRuleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.GetGameRuleReq} GetGameRuleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGameRuleReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.GetGameRuleReq();
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
         * Decodes a GetGameRuleReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.GetGameRuleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.GetGameRuleReq} GetGameRuleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGameRuleReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGameRuleReq message.
         * @function verify
         * @memberof gamebase.GetGameRuleReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGameRuleReq.verify = function verify(message) {
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
         * Creates a GetGameRuleReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.GetGameRuleReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.GetGameRuleReq} GetGameRuleReq
         */
        GetGameRuleReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.GetGameRuleReq)
                return object;
            var message = new $root.gamebase.GetGameRuleReq();
            if (object.key != null)
                message.key = String(object.key);
            if (object.lang != null)
                message.lang = String(object.lang);
            return message;
        };

        /**
         * Creates a plain object from a GetGameRuleReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.GetGameRuleReq
         * @static
         * @param {gamebase.GetGameRuleReq} message GetGameRuleReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGameRuleReq.toObject = function toObject(message, options) {
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
         * Converts this GetGameRuleReq to JSON.
         * @function toJSON
         * @memberof gamebase.GetGameRuleReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGameRuleReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGameRuleReq;
    })();

    gamebase.GetGameRuleResp = (function() {

        /**
         * Properties of a GetGameRuleResp.
         * @memberof gamebase
         * @interface IGetGameRuleResp
         * @property {string|null} [key] GetGameRuleResp key
         * @property {string|null} [rules] GetGameRuleResp rules
         */

        /**
         * Constructs a new GetGameRuleResp.
         * @memberof gamebase
         * @classdesc Represents a GetGameRuleResp.
         * @implements IGetGameRuleResp
         * @constructor
         * @param {gamebase.IGetGameRuleResp=} [properties] Properties to set
         */
        function GetGameRuleResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGameRuleResp key.
         * @member {string} key
         * @memberof gamebase.GetGameRuleResp
         * @instance
         */
        GetGameRuleResp.prototype.key = "";

        /**
         * GetGameRuleResp rules.
         * @member {string} rules
         * @memberof gamebase.GetGameRuleResp
         * @instance
         */
        GetGameRuleResp.prototype.rules = "";

        /**
         * Creates a new GetGameRuleResp instance using the specified properties.
         * @function create
         * @memberof gamebase.GetGameRuleResp
         * @static
         * @param {gamebase.IGetGameRuleResp=} [properties] Properties to set
         * @returns {gamebase.GetGameRuleResp} GetGameRuleResp instance
         */
        GetGameRuleResp.create = function create(properties) {
            return new GetGameRuleResp(properties);
        };

        /**
         * Encodes the specified GetGameRuleResp message. Does not implicitly {@link gamebase.GetGameRuleResp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.GetGameRuleResp
         * @static
         * @param {gamebase.IGetGameRuleResp} message GetGameRuleResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGameRuleResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.rules != null && Object.hasOwnProperty.call(message, "rules"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.rules);
            return writer;
        };

        /**
         * Encodes the specified GetGameRuleResp message, length delimited. Does not implicitly {@link gamebase.GetGameRuleResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.GetGameRuleResp
         * @static
         * @param {gamebase.IGetGameRuleResp} message GetGameRuleResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGameRuleResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGameRuleResp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.GetGameRuleResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.GetGameRuleResp} GetGameRuleResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGameRuleResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.GetGameRuleResp();
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
         * Decodes a GetGameRuleResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.GetGameRuleResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.GetGameRuleResp} GetGameRuleResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGameRuleResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGameRuleResp message.
         * @function verify
         * @memberof gamebase.GetGameRuleResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGameRuleResp.verify = function verify(message) {
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
         * Creates a GetGameRuleResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.GetGameRuleResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.GetGameRuleResp} GetGameRuleResp
         */
        GetGameRuleResp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.GetGameRuleResp)
                return object;
            var message = new $root.gamebase.GetGameRuleResp();
            if (object.key != null)
                message.key = String(object.key);
            if (object.rules != null)
                message.rules = String(object.rules);
            return message;
        };

        /**
         * Creates a plain object from a GetGameRuleResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.GetGameRuleResp
         * @static
         * @param {gamebase.GetGameRuleResp} message GetGameRuleResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGameRuleResp.toObject = function toObject(message, options) {
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
         * Converts this GetGameRuleResp to JSON.
         * @function toJSON
         * @memberof gamebase.GetGameRuleResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGameRuleResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGameRuleResp;
    })();

    gamebase.UserStandUpPush = (function() {

        /**
         * Properties of a UserStandUpPush.
         * @memberof gamebase
         * @interface IUserStandUpPush
         * @property {number|null} [uid] UserStandUpPush uid
         * @property {number|null} [userCount] UserStandUpPush userCount
         */

        /**
         * Constructs a new UserStandUpPush.
         * @memberof gamebase
         * @classdesc Represents a UserStandUpPush.
         * @implements IUserStandUpPush
         * @constructor
         * @param {gamebase.IUserStandUpPush=} [properties] Properties to set
         */
        function UserStandUpPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserStandUpPush uid.
         * @member {number} uid
         * @memberof gamebase.UserStandUpPush
         * @instance
         */
        UserStandUpPush.prototype.uid = 0;

        /**
         * UserStandUpPush userCount.
         * @member {number} userCount
         * @memberof gamebase.UserStandUpPush
         * @instance
         */
        UserStandUpPush.prototype.userCount = 0;

        /**
         * Creates a new UserStandUpPush instance using the specified properties.
         * @function create
         * @memberof gamebase.UserStandUpPush
         * @static
         * @param {gamebase.IUserStandUpPush=} [properties] Properties to set
         * @returns {gamebase.UserStandUpPush} UserStandUpPush instance
         */
        UserStandUpPush.create = function create(properties) {
            return new UserStandUpPush(properties);
        };

        /**
         * Encodes the specified UserStandUpPush message. Does not implicitly {@link gamebase.UserStandUpPush.verify|verify} messages.
         * @function encode
         * @memberof gamebase.UserStandUpPush
         * @static
         * @param {gamebase.IUserStandUpPush} message UserStandUpPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStandUpPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.userCount != null && Object.hasOwnProperty.call(message, "userCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.userCount);
            return writer;
        };

        /**
         * Encodes the specified UserStandUpPush message, length delimited. Does not implicitly {@link gamebase.UserStandUpPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.UserStandUpPush
         * @static
         * @param {gamebase.IUserStandUpPush} message UserStandUpPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStandUpPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserStandUpPush message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.UserStandUpPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.UserStandUpPush} UserStandUpPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStandUpPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.UserStandUpPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.userCount = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserStandUpPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.UserStandUpPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.UserStandUpPush} UserStandUpPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStandUpPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserStandUpPush message.
         * @function verify
         * @memberof gamebase.UserStandUpPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserStandUpPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.userCount != null && message.hasOwnProperty("userCount"))
                if (!$util.isInteger(message.userCount))
                    return "userCount: integer expected";
            return null;
        };

        /**
         * Creates a UserStandUpPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.UserStandUpPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.UserStandUpPush} UserStandUpPush
         */
        UserStandUpPush.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.UserStandUpPush)
                return object;
            var message = new $root.gamebase.UserStandUpPush();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.userCount != null)
                message.userCount = object.userCount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a UserStandUpPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.UserStandUpPush
         * @static
         * @param {gamebase.UserStandUpPush} message UserStandUpPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserStandUpPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.userCount = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.userCount != null && message.hasOwnProperty("userCount"))
                object.userCount = message.userCount;
            return object;
        };

        /**
         * Converts this UserStandUpPush to JSON.
         * @function toJSON
         * @memberof gamebase.UserStandUpPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserStandUpPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserStandUpPush;
    })();

    gamebase.JackpotUserData = (function() {

        /**
         * Properties of a JackpotUserData.
         * @memberof gamebase
         * @interface IJackpotUserData
         * @property {number|null} [win_count] JackpotUserData win_count
         * @property {number|null} [total_count] JackpotUserData total_count
         * @property {number|Long|null} [reward_pool] JackpotUserData reward_pool
         * @property {number|null} [continue_time] JackpotUserData continue_time
         * @property {Array.<number>|null} [rewardIdList] JackpotUserData rewardIdList
         * @property {boolean|null} [isReward] JackpotUserData isReward
         */

        /**
         * Constructs a new JackpotUserData.
         * @memberof gamebase
         * @classdesc Represents a JackpotUserData.
         * @implements IJackpotUserData
         * @constructor
         * @param {gamebase.IJackpotUserData=} [properties] Properties to set
         */
        function JackpotUserData(properties) {
            this.rewardIdList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JackpotUserData win_count.
         * @member {number} win_count
         * @memberof gamebase.JackpotUserData
         * @instance
         */
        JackpotUserData.prototype.win_count = 0;

        /**
         * JackpotUserData total_count.
         * @member {number} total_count
         * @memberof gamebase.JackpotUserData
         * @instance
         */
        JackpotUserData.prototype.total_count = 0;

        /**
         * JackpotUserData reward_pool.
         * @member {number|Long} reward_pool
         * @memberof gamebase.JackpotUserData
         * @instance
         */
        JackpotUserData.prototype.reward_pool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotUserData continue_time.
         * @member {number} continue_time
         * @memberof gamebase.JackpotUserData
         * @instance
         */
        JackpotUserData.prototype.continue_time = 0;

        /**
         * JackpotUserData rewardIdList.
         * @member {Array.<number>} rewardIdList
         * @memberof gamebase.JackpotUserData
         * @instance
         */
        JackpotUserData.prototype.rewardIdList = $util.emptyArray;

        /**
         * JackpotUserData isReward.
         * @member {boolean} isReward
         * @memberof gamebase.JackpotUserData
         * @instance
         */
        JackpotUserData.prototype.isReward = false;

        /**
         * Creates a new JackpotUserData instance using the specified properties.
         * @function create
         * @memberof gamebase.JackpotUserData
         * @static
         * @param {gamebase.IJackpotUserData=} [properties] Properties to set
         * @returns {gamebase.JackpotUserData} JackpotUserData instance
         */
        JackpotUserData.create = function create(properties) {
            return new JackpotUserData(properties);
        };

        /**
         * Encodes the specified JackpotUserData message. Does not implicitly {@link gamebase.JackpotUserData.verify|verify} messages.
         * @function encode
         * @memberof gamebase.JackpotUserData
         * @static
         * @param {gamebase.IJackpotUserData} message JackpotUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotUserData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.win_count != null && Object.hasOwnProperty.call(message, "win_count"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.win_count);
            if (message.total_count != null && Object.hasOwnProperty.call(message, "total_count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.total_count);
            if (message.reward_pool != null && Object.hasOwnProperty.call(message, "reward_pool"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.reward_pool);
            if (message.continue_time != null && Object.hasOwnProperty.call(message, "continue_time"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.continue_time);
            if (message.rewardIdList != null && message.rewardIdList.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.rewardIdList.length; ++i)
                    writer.int32(message.rewardIdList[i]);
                writer.ldelim();
            }
            if (message.isReward != null && Object.hasOwnProperty.call(message, "isReward"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isReward);
            return writer;
        };

        /**
         * Encodes the specified JackpotUserData message, length delimited. Does not implicitly {@link gamebase.JackpotUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.JackpotUserData
         * @static
         * @param {gamebase.IJackpotUserData} message JackpotUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotUserData message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.JackpotUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.JackpotUserData} JackpotUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.JackpotUserData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.win_count = reader.int32();
                    break;
                case 2:
                    message.total_count = reader.int32();
                    break;
                case 3:
                    message.reward_pool = reader.int64();
                    break;
                case 4:
                    message.continue_time = reader.int32();
                    break;
                case 5:
                    if (!(message.rewardIdList && message.rewardIdList.length))
                        message.rewardIdList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.rewardIdList.push(reader.int32());
                    } else
                        message.rewardIdList.push(reader.int32());
                    break;
                case 6:
                    message.isReward = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotUserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.JackpotUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.JackpotUserData} JackpotUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotUserData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotUserData message.
         * @function verify
         * @memberof gamebase.JackpotUserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotUserData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.win_count != null && message.hasOwnProperty("win_count"))
                if (!$util.isInteger(message.win_count))
                    return "win_count: integer expected";
            if (message.total_count != null && message.hasOwnProperty("total_count"))
                if (!$util.isInteger(message.total_count))
                    return "total_count: integer expected";
            if (message.reward_pool != null && message.hasOwnProperty("reward_pool"))
                if (!$util.isInteger(message.reward_pool) && !(message.reward_pool && $util.isInteger(message.reward_pool.low) && $util.isInteger(message.reward_pool.high)))
                    return "reward_pool: integer|Long expected";
            if (message.continue_time != null && message.hasOwnProperty("continue_time"))
                if (!$util.isInteger(message.continue_time))
                    return "continue_time: integer expected";
            if (message.rewardIdList != null && message.hasOwnProperty("rewardIdList")) {
                if (!Array.isArray(message.rewardIdList))
                    return "rewardIdList: array expected";
                for (var i = 0; i < message.rewardIdList.length; ++i)
                    if (!$util.isInteger(message.rewardIdList[i]))
                        return "rewardIdList: integer[] expected";
            }
            if (message.isReward != null && message.hasOwnProperty("isReward"))
                if (typeof message.isReward !== "boolean")
                    return "isReward: boolean expected";
            return null;
        };

        /**
         * Creates a JackpotUserData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.JackpotUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.JackpotUserData} JackpotUserData
         */
        JackpotUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.JackpotUserData)
                return object;
            var message = new $root.gamebase.JackpotUserData();
            if (object.win_count != null)
                message.win_count = object.win_count | 0;
            if (object.total_count != null)
                message.total_count = object.total_count | 0;
            if (object.reward_pool != null)
                if ($util.Long)
                    (message.reward_pool = $util.Long.fromValue(object.reward_pool)).unsigned = false;
                else if (typeof object.reward_pool === "string")
                    message.reward_pool = parseInt(object.reward_pool, 10);
                else if (typeof object.reward_pool === "number")
                    message.reward_pool = object.reward_pool;
                else if (typeof object.reward_pool === "object")
                    message.reward_pool = new $util.LongBits(object.reward_pool.low >>> 0, object.reward_pool.high >>> 0).toNumber();
            if (object.continue_time != null)
                message.continue_time = object.continue_time | 0;
            if (object.rewardIdList) {
                if (!Array.isArray(object.rewardIdList))
                    throw TypeError(".gamebase.JackpotUserData.rewardIdList: array expected");
                message.rewardIdList = [];
                for (var i = 0; i < object.rewardIdList.length; ++i)
                    message.rewardIdList[i] = object.rewardIdList[i] | 0;
            }
            if (object.isReward != null)
                message.isReward = Boolean(object.isReward);
            return message;
        };

        /**
         * Creates a plain object from a JackpotUserData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.JackpotUserData
         * @static
         * @param {gamebase.JackpotUserData} message JackpotUserData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotUserData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.rewardIdList = [];
            if (options.defaults) {
                object.win_count = 0;
                object.total_count = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reward_pool = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reward_pool = options.longs === String ? "0" : 0;
                object.continue_time = 0;
                object.isReward = false;
            }
            if (message.win_count != null && message.hasOwnProperty("win_count"))
                object.win_count = message.win_count;
            if (message.total_count != null && message.hasOwnProperty("total_count"))
                object.total_count = message.total_count;
            if (message.reward_pool != null && message.hasOwnProperty("reward_pool"))
                if (typeof message.reward_pool === "number")
                    object.reward_pool = options.longs === String ? String(message.reward_pool) : message.reward_pool;
                else
                    object.reward_pool = options.longs === String ? $util.Long.prototype.toString.call(message.reward_pool) : options.longs === Number ? new $util.LongBits(message.reward_pool.low >>> 0, message.reward_pool.high >>> 0).toNumber() : message.reward_pool;
            if (message.continue_time != null && message.hasOwnProperty("continue_time"))
                object.continue_time = message.continue_time;
            if (message.rewardIdList && message.rewardIdList.length) {
                object.rewardIdList = [];
                for (var j = 0; j < message.rewardIdList.length; ++j)
                    object.rewardIdList[j] = message.rewardIdList[j];
            }
            if (message.isReward != null && message.hasOwnProperty("isReward"))
                object.isReward = message.isReward;
            return object;
        };

        /**
         * Converts this JackpotUserData to JSON.
         * @function toJSON
         * @memberof gamebase.JackpotUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotUserData;
    })();

    gamebase.JackpotGetRewardReq = (function() {

        /**
         * Properties of a JackpotGetRewardReq.
         * @memberof gamebase
         * @interface IJackpotGetRewardReq
         * @property {number|null} [rewardId] JackpotGetRewardReq rewardId
         */

        /**
         * Constructs a new JackpotGetRewardReq.
         * @memberof gamebase
         * @classdesc Represents a JackpotGetRewardReq.
         * @implements IJackpotGetRewardReq
         * @constructor
         * @param {gamebase.IJackpotGetRewardReq=} [properties] Properties to set
         */
        function JackpotGetRewardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JackpotGetRewardReq rewardId.
         * @member {number} rewardId
         * @memberof gamebase.JackpotGetRewardReq
         * @instance
         */
        JackpotGetRewardReq.prototype.rewardId = 0;

        /**
         * Creates a new JackpotGetRewardReq instance using the specified properties.
         * @function create
         * @memberof gamebase.JackpotGetRewardReq
         * @static
         * @param {gamebase.IJackpotGetRewardReq=} [properties] Properties to set
         * @returns {gamebase.JackpotGetRewardReq} JackpotGetRewardReq instance
         */
        JackpotGetRewardReq.create = function create(properties) {
            return new JackpotGetRewardReq(properties);
        };

        /**
         * Encodes the specified JackpotGetRewardReq message. Does not implicitly {@link gamebase.JackpotGetRewardReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.JackpotGetRewardReq
         * @static
         * @param {gamebase.IJackpotGetRewardReq} message JackpotGetRewardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotGetRewardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rewardId != null && Object.hasOwnProperty.call(message, "rewardId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rewardId);
            return writer;
        };

        /**
         * Encodes the specified JackpotGetRewardReq message, length delimited. Does not implicitly {@link gamebase.JackpotGetRewardReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.JackpotGetRewardReq
         * @static
         * @param {gamebase.IJackpotGetRewardReq} message JackpotGetRewardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotGetRewardReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotGetRewardReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.JackpotGetRewardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.JackpotGetRewardReq} JackpotGetRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotGetRewardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.JackpotGetRewardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rewardId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotGetRewardReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.JackpotGetRewardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.JackpotGetRewardReq} JackpotGetRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotGetRewardReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotGetRewardReq message.
         * @function verify
         * @memberof gamebase.JackpotGetRewardReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotGetRewardReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rewardId != null && message.hasOwnProperty("rewardId"))
                if (!$util.isInteger(message.rewardId))
                    return "rewardId: integer expected";
            return null;
        };

        /**
         * Creates a JackpotGetRewardReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.JackpotGetRewardReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.JackpotGetRewardReq} JackpotGetRewardReq
         */
        JackpotGetRewardReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.JackpotGetRewardReq)
                return object;
            var message = new $root.gamebase.JackpotGetRewardReq();
            if (object.rewardId != null)
                message.rewardId = object.rewardId | 0;
            return message;
        };

        /**
         * Creates a plain object from a JackpotGetRewardReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.JackpotGetRewardReq
         * @static
         * @param {gamebase.JackpotGetRewardReq} message JackpotGetRewardReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotGetRewardReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.rewardId = 0;
            if (message.rewardId != null && message.hasOwnProperty("rewardId"))
                object.rewardId = message.rewardId;
            return object;
        };

        /**
         * Converts this JackpotGetRewardReq to JSON.
         * @function toJSON
         * @memberof gamebase.JackpotGetRewardReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotGetRewardReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotGetRewardReq;
    })();

    gamebase.JackpotGetRewardResp = (function() {

        /**
         * Properties of a JackpotGetRewardResp.
         * @memberof gamebase
         * @interface IJackpotGetRewardResp
         * @property {number|null} [result] JackpotGetRewardResp result
         * @property {number|Long|null} [reward] JackpotGetRewardResp reward
         * @property {number|Long|null} [totalReward] JackpotGetRewardResp totalReward
         * @property {number|Long|null} [maxReward] JackpotGetRewardResp maxReward
         * @property {gamebase.IJackpotUserData|null} [jackpotinfo] JackpotGetRewardResp jackpotinfo
         * @property {number|Long|null} [balance] JackpotGetRewardResp balance
         */

        /**
         * Constructs a new JackpotGetRewardResp.
         * @memberof gamebase
         * @classdesc Represents a JackpotGetRewardResp.
         * @implements IJackpotGetRewardResp
         * @constructor
         * @param {gamebase.IJackpotGetRewardResp=} [properties] Properties to set
         */
        function JackpotGetRewardResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JackpotGetRewardResp result.
         * @member {number} result
         * @memberof gamebase.JackpotGetRewardResp
         * @instance
         */
        JackpotGetRewardResp.prototype.result = 0;

        /**
         * JackpotGetRewardResp reward.
         * @member {number|Long} reward
         * @memberof gamebase.JackpotGetRewardResp
         * @instance
         */
        JackpotGetRewardResp.prototype.reward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotGetRewardResp totalReward.
         * @member {number|Long} totalReward
         * @memberof gamebase.JackpotGetRewardResp
         * @instance
         */
        JackpotGetRewardResp.prototype.totalReward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotGetRewardResp maxReward.
         * @member {number|Long} maxReward
         * @memberof gamebase.JackpotGetRewardResp
         * @instance
         */
        JackpotGetRewardResp.prototype.maxReward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotGetRewardResp jackpotinfo.
         * @member {gamebase.IJackpotUserData|null|undefined} jackpotinfo
         * @memberof gamebase.JackpotGetRewardResp
         * @instance
         */
        JackpotGetRewardResp.prototype.jackpotinfo = null;

        /**
         * JackpotGetRewardResp balance.
         * @member {number|Long} balance
         * @memberof gamebase.JackpotGetRewardResp
         * @instance
         */
        JackpotGetRewardResp.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JackpotGetRewardResp instance using the specified properties.
         * @function create
         * @memberof gamebase.JackpotGetRewardResp
         * @static
         * @param {gamebase.IJackpotGetRewardResp=} [properties] Properties to set
         * @returns {gamebase.JackpotGetRewardResp} JackpotGetRewardResp instance
         */
        JackpotGetRewardResp.create = function create(properties) {
            return new JackpotGetRewardResp(properties);
        };

        /**
         * Encodes the specified JackpotGetRewardResp message. Does not implicitly {@link gamebase.JackpotGetRewardResp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.JackpotGetRewardResp
         * @static
         * @param {gamebase.IJackpotGetRewardResp} message JackpotGetRewardResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotGetRewardResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.reward);
            if (message.totalReward != null && Object.hasOwnProperty.call(message, "totalReward"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.totalReward);
            if (message.maxReward != null && Object.hasOwnProperty.call(message, "maxReward"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.maxReward);
            if (message.jackpotinfo != null && Object.hasOwnProperty.call(message, "jackpotinfo"))
                $root.gamebase.JackpotUserData.encode(message.jackpotinfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.balance);
            return writer;
        };

        /**
         * Encodes the specified JackpotGetRewardResp message, length delimited. Does not implicitly {@link gamebase.JackpotGetRewardResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.JackpotGetRewardResp
         * @static
         * @param {gamebase.IJackpotGetRewardResp} message JackpotGetRewardResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotGetRewardResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotGetRewardResp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.JackpotGetRewardResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.JackpotGetRewardResp} JackpotGetRewardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotGetRewardResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.JackpotGetRewardResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.reward = reader.int64();
                    break;
                case 3:
                    message.totalReward = reader.int64();
                    break;
                case 4:
                    message.maxReward = reader.int64();
                    break;
                case 5:
                    message.jackpotinfo = $root.gamebase.JackpotUserData.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.balance = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotGetRewardResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.JackpotGetRewardResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.JackpotGetRewardResp} JackpotGetRewardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotGetRewardResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotGetRewardResp message.
         * @function verify
         * @memberof gamebase.JackpotGetRewardResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotGetRewardResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.reward != null && message.hasOwnProperty("reward"))
                if (!$util.isInteger(message.reward) && !(message.reward && $util.isInteger(message.reward.low) && $util.isInteger(message.reward.high)))
                    return "reward: integer|Long expected";
            if (message.totalReward != null && message.hasOwnProperty("totalReward"))
                if (!$util.isInteger(message.totalReward) && !(message.totalReward && $util.isInteger(message.totalReward.low) && $util.isInteger(message.totalReward.high)))
                    return "totalReward: integer|Long expected";
            if (message.maxReward != null && message.hasOwnProperty("maxReward"))
                if (!$util.isInteger(message.maxReward) && !(message.maxReward && $util.isInteger(message.maxReward.low) && $util.isInteger(message.maxReward.high)))
                    return "maxReward: integer|Long expected";
            if (message.jackpotinfo != null && message.hasOwnProperty("jackpotinfo")) {
                var error = $root.gamebase.JackpotUserData.verify(message.jackpotinfo);
                if (error)
                    return "jackpotinfo." + error;
            }
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                    return "balance: integer|Long expected";
            return null;
        };

        /**
         * Creates a JackpotGetRewardResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.JackpotGetRewardResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.JackpotGetRewardResp} JackpotGetRewardResp
         */
        JackpotGetRewardResp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.JackpotGetRewardResp)
                return object;
            var message = new $root.gamebase.JackpotGetRewardResp();
            if (object.result != null)
                message.result = object.result | 0;
            if (object.reward != null)
                if ($util.Long)
                    (message.reward = $util.Long.fromValue(object.reward)).unsigned = false;
                else if (typeof object.reward === "string")
                    message.reward = parseInt(object.reward, 10);
                else if (typeof object.reward === "number")
                    message.reward = object.reward;
                else if (typeof object.reward === "object")
                    message.reward = new $util.LongBits(object.reward.low >>> 0, object.reward.high >>> 0).toNumber();
            if (object.totalReward != null)
                if ($util.Long)
                    (message.totalReward = $util.Long.fromValue(object.totalReward)).unsigned = false;
                else if (typeof object.totalReward === "string")
                    message.totalReward = parseInt(object.totalReward, 10);
                else if (typeof object.totalReward === "number")
                    message.totalReward = object.totalReward;
                else if (typeof object.totalReward === "object")
                    message.totalReward = new $util.LongBits(object.totalReward.low >>> 0, object.totalReward.high >>> 0).toNumber();
            if (object.maxReward != null)
                if ($util.Long)
                    (message.maxReward = $util.Long.fromValue(object.maxReward)).unsigned = false;
                else if (typeof object.maxReward === "string")
                    message.maxReward = parseInt(object.maxReward, 10);
                else if (typeof object.maxReward === "number")
                    message.maxReward = object.maxReward;
                else if (typeof object.maxReward === "object")
                    message.maxReward = new $util.LongBits(object.maxReward.low >>> 0, object.maxReward.high >>> 0).toNumber();
            if (object.jackpotinfo != null) {
                if (typeof object.jackpotinfo !== "object")
                    throw TypeError(".gamebase.JackpotGetRewardResp.jackpotinfo: object expected");
                message.jackpotinfo = $root.gamebase.JackpotUserData.fromObject(object.jackpotinfo);
            }
            if (object.balance != null)
                if ($util.Long)
                    (message.balance = $util.Long.fromValue(object.balance)).unsigned = false;
                else if (typeof object.balance === "string")
                    message.balance = parseInt(object.balance, 10);
                else if (typeof object.balance === "number")
                    message.balance = object.balance;
                else if (typeof object.balance === "object")
                    message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a JackpotGetRewardResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.JackpotGetRewardResp
         * @static
         * @param {gamebase.JackpotGetRewardResp} message JackpotGetRewardResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotGetRewardResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reward = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reward = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.totalReward = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalReward = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.maxReward = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maxReward = options.longs === String ? "0" : 0;
                object.jackpotinfo = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.balance = options.longs === String ? "0" : 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.reward != null && message.hasOwnProperty("reward"))
                if (typeof message.reward === "number")
                    object.reward = options.longs === String ? String(message.reward) : message.reward;
                else
                    object.reward = options.longs === String ? $util.Long.prototype.toString.call(message.reward) : options.longs === Number ? new $util.LongBits(message.reward.low >>> 0, message.reward.high >>> 0).toNumber() : message.reward;
            if (message.totalReward != null && message.hasOwnProperty("totalReward"))
                if (typeof message.totalReward === "number")
                    object.totalReward = options.longs === String ? String(message.totalReward) : message.totalReward;
                else
                    object.totalReward = options.longs === String ? $util.Long.prototype.toString.call(message.totalReward) : options.longs === Number ? new $util.LongBits(message.totalReward.low >>> 0, message.totalReward.high >>> 0).toNumber() : message.totalReward;
            if (message.maxReward != null && message.hasOwnProperty("maxReward"))
                if (typeof message.maxReward === "number")
                    object.maxReward = options.longs === String ? String(message.maxReward) : message.maxReward;
                else
                    object.maxReward = options.longs === String ? $util.Long.prototype.toString.call(message.maxReward) : options.longs === Number ? new $util.LongBits(message.maxReward.low >>> 0, message.maxReward.high >>> 0).toNumber() : message.maxReward;
            if (message.jackpotinfo != null && message.hasOwnProperty("jackpotinfo"))
                object.jackpotinfo = $root.gamebase.JackpotUserData.toObject(message.jackpotinfo, options);
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance === "number")
                    object.balance = options.longs === String ? String(message.balance) : message.balance;
                else
                    object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber() : message.balance;
            return object;
        };

        /**
         * Converts this JackpotGetRewardResp to JSON.
         * @function toJSON
         * @memberof gamebase.JackpotGetRewardResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotGetRewardResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotGetRewardResp;
    })();

    gamebase.JackpotGetRewardPush = (function() {

        /**
         * Properties of a JackpotGetRewardPush.
         * @memberof gamebase
         * @interface IJackpotGetRewardPush
         * @property {number|null} [uid] JackpotGetRewardPush uid
         * @property {string|null} [nickname] JackpotGetRewardPush nickname
         * @property {string|null} [strHeader] JackpotGetRewardPush strHeader
         * @property {number|Long|null} [reward] JackpotGetRewardPush reward
         * @property {number|Long|null} [reward_pool] JackpotGetRewardPush reward_pool
         */

        /**
         * Constructs a new JackpotGetRewardPush.
         * @memberof gamebase
         * @classdesc Represents a JackpotGetRewardPush.
         * @implements IJackpotGetRewardPush
         * @constructor
         * @param {gamebase.IJackpotGetRewardPush=} [properties] Properties to set
         */
        function JackpotGetRewardPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JackpotGetRewardPush uid.
         * @member {number} uid
         * @memberof gamebase.JackpotGetRewardPush
         * @instance
         */
        JackpotGetRewardPush.prototype.uid = 0;

        /**
         * JackpotGetRewardPush nickname.
         * @member {string} nickname
         * @memberof gamebase.JackpotGetRewardPush
         * @instance
         */
        JackpotGetRewardPush.prototype.nickname = "";

        /**
         * JackpotGetRewardPush strHeader.
         * @member {string} strHeader
         * @memberof gamebase.JackpotGetRewardPush
         * @instance
         */
        JackpotGetRewardPush.prototype.strHeader = "";

        /**
         * JackpotGetRewardPush reward.
         * @member {number|Long} reward
         * @memberof gamebase.JackpotGetRewardPush
         * @instance
         */
        JackpotGetRewardPush.prototype.reward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotGetRewardPush reward_pool.
         * @member {number|Long} reward_pool
         * @memberof gamebase.JackpotGetRewardPush
         * @instance
         */
        JackpotGetRewardPush.prototype.reward_pool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JackpotGetRewardPush instance using the specified properties.
         * @function create
         * @memberof gamebase.JackpotGetRewardPush
         * @static
         * @param {gamebase.IJackpotGetRewardPush=} [properties] Properties to set
         * @returns {gamebase.JackpotGetRewardPush} JackpotGetRewardPush instance
         */
        JackpotGetRewardPush.create = function create(properties) {
            return new JackpotGetRewardPush(properties);
        };

        /**
         * Encodes the specified JackpotGetRewardPush message. Does not implicitly {@link gamebase.JackpotGetRewardPush.verify|verify} messages.
         * @function encode
         * @memberof gamebase.JackpotGetRewardPush
         * @static
         * @param {gamebase.IJackpotGetRewardPush} message JackpotGetRewardPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotGetRewardPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.strHeader != null && Object.hasOwnProperty.call(message, "strHeader"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.strHeader);
            if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.reward);
            if (message.reward_pool != null && Object.hasOwnProperty.call(message, "reward_pool"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.reward_pool);
            return writer;
        };

        /**
         * Encodes the specified JackpotGetRewardPush message, length delimited. Does not implicitly {@link gamebase.JackpotGetRewardPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.JackpotGetRewardPush
         * @static
         * @param {gamebase.IJackpotGetRewardPush} message JackpotGetRewardPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotGetRewardPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotGetRewardPush message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.JackpotGetRewardPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.JackpotGetRewardPush} JackpotGetRewardPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotGetRewardPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.JackpotGetRewardPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.strHeader = reader.string();
                    break;
                case 4:
                    message.reward = reader.int64();
                    break;
                case 5:
                    message.reward_pool = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotGetRewardPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.JackpotGetRewardPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.JackpotGetRewardPush} JackpotGetRewardPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotGetRewardPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotGetRewardPush message.
         * @function verify
         * @memberof gamebase.JackpotGetRewardPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotGetRewardPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.strHeader != null && message.hasOwnProperty("strHeader"))
                if (!$util.isString(message.strHeader))
                    return "strHeader: string expected";
            if (message.reward != null && message.hasOwnProperty("reward"))
                if (!$util.isInteger(message.reward) && !(message.reward && $util.isInteger(message.reward.low) && $util.isInteger(message.reward.high)))
                    return "reward: integer|Long expected";
            if (message.reward_pool != null && message.hasOwnProperty("reward_pool"))
                if (!$util.isInteger(message.reward_pool) && !(message.reward_pool && $util.isInteger(message.reward_pool.low) && $util.isInteger(message.reward_pool.high)))
                    return "reward_pool: integer|Long expected";
            return null;
        };

        /**
         * Creates a JackpotGetRewardPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.JackpotGetRewardPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.JackpotGetRewardPush} JackpotGetRewardPush
         */
        JackpotGetRewardPush.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.JackpotGetRewardPush)
                return object;
            var message = new $root.gamebase.JackpotGetRewardPush();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.strHeader != null)
                message.strHeader = String(object.strHeader);
            if (object.reward != null)
                if ($util.Long)
                    (message.reward = $util.Long.fromValue(object.reward)).unsigned = false;
                else if (typeof object.reward === "string")
                    message.reward = parseInt(object.reward, 10);
                else if (typeof object.reward === "number")
                    message.reward = object.reward;
                else if (typeof object.reward === "object")
                    message.reward = new $util.LongBits(object.reward.low >>> 0, object.reward.high >>> 0).toNumber();
            if (object.reward_pool != null)
                if ($util.Long)
                    (message.reward_pool = $util.Long.fromValue(object.reward_pool)).unsigned = false;
                else if (typeof object.reward_pool === "string")
                    message.reward_pool = parseInt(object.reward_pool, 10);
                else if (typeof object.reward_pool === "number")
                    message.reward_pool = object.reward_pool;
                else if (typeof object.reward_pool === "object")
                    message.reward_pool = new $util.LongBits(object.reward_pool.low >>> 0, object.reward_pool.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a JackpotGetRewardPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.JackpotGetRewardPush
         * @static
         * @param {gamebase.JackpotGetRewardPush} message JackpotGetRewardPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotGetRewardPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.nickname = "";
                object.strHeader = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reward = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reward = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reward_pool = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reward_pool = options.longs === String ? "0" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.strHeader != null && message.hasOwnProperty("strHeader"))
                object.strHeader = message.strHeader;
            if (message.reward != null && message.hasOwnProperty("reward"))
                if (typeof message.reward === "number")
                    object.reward = options.longs === String ? String(message.reward) : message.reward;
                else
                    object.reward = options.longs === String ? $util.Long.prototype.toString.call(message.reward) : options.longs === Number ? new $util.LongBits(message.reward.low >>> 0, message.reward.high >>> 0).toNumber() : message.reward;
            if (message.reward_pool != null && message.hasOwnProperty("reward_pool"))
                if (typeof message.reward_pool === "number")
                    object.reward_pool = options.longs === String ? String(message.reward_pool) : message.reward_pool;
                else
                    object.reward_pool = options.longs === String ? $util.Long.prototype.toString.call(message.reward_pool) : options.longs === Number ? new $util.LongBits(message.reward_pool.low >>> 0, message.reward_pool.high >>> 0).toNumber() : message.reward_pool;
            return object;
        };

        /**
         * Converts this JackpotGetRewardPush to JSON.
         * @function toJSON
         * @memberof gamebase.JackpotGetRewardPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotGetRewardPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotGetRewardPush;
    })();

    gamebase.JackpotRewardRecordReq = (function() {

        /**
         * Properties of a JackpotRewardRecordReq.
         * @memberof gamebase
         * @interface IJackpotRewardRecordReq
         */

        /**
         * Constructs a new JackpotRewardRecordReq.
         * @memberof gamebase
         * @classdesc Represents a JackpotRewardRecordReq.
         * @implements IJackpotRewardRecordReq
         * @constructor
         * @param {gamebase.IJackpotRewardRecordReq=} [properties] Properties to set
         */
        function JackpotRewardRecordReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new JackpotRewardRecordReq instance using the specified properties.
         * @function create
         * @memberof gamebase.JackpotRewardRecordReq
         * @static
         * @param {gamebase.IJackpotRewardRecordReq=} [properties] Properties to set
         * @returns {gamebase.JackpotRewardRecordReq} JackpotRewardRecordReq instance
         */
        JackpotRewardRecordReq.create = function create(properties) {
            return new JackpotRewardRecordReq(properties);
        };

        /**
         * Encodes the specified JackpotRewardRecordReq message. Does not implicitly {@link gamebase.JackpotRewardRecordReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.JackpotRewardRecordReq
         * @static
         * @param {gamebase.IJackpotRewardRecordReq} message JackpotRewardRecordReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotRewardRecordReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified JackpotRewardRecordReq message, length delimited. Does not implicitly {@link gamebase.JackpotRewardRecordReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.JackpotRewardRecordReq
         * @static
         * @param {gamebase.IJackpotRewardRecordReq} message JackpotRewardRecordReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotRewardRecordReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotRewardRecordReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.JackpotRewardRecordReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.JackpotRewardRecordReq} JackpotRewardRecordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotRewardRecordReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.JackpotRewardRecordReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotRewardRecordReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.JackpotRewardRecordReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.JackpotRewardRecordReq} JackpotRewardRecordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotRewardRecordReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotRewardRecordReq message.
         * @function verify
         * @memberof gamebase.JackpotRewardRecordReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotRewardRecordReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a JackpotRewardRecordReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.JackpotRewardRecordReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.JackpotRewardRecordReq} JackpotRewardRecordReq
         */
        JackpotRewardRecordReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.JackpotRewardRecordReq)
                return object;
            return new $root.gamebase.JackpotRewardRecordReq();
        };

        /**
         * Creates a plain object from a JackpotRewardRecordReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.JackpotRewardRecordReq
         * @static
         * @param {gamebase.JackpotRewardRecordReq} message JackpotRewardRecordReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotRewardRecordReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this JackpotRewardRecordReq to JSON.
         * @function toJSON
         * @memberof gamebase.JackpotRewardRecordReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotRewardRecordReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotRewardRecordReq;
    })();

    gamebase.RewardRecord = (function() {

        /**
         * Properties of a RewardRecord.
         * @memberof gamebase
         * @interface IRewardRecord
         * @property {number|null} [uid] RewardRecord uid
         * @property {string|null} [nickname] RewardRecord nickname
         * @property {string|null} [strHeader] RewardRecord strHeader
         * @property {number|null} [timeStamp] RewardRecord timeStamp
         * @property {number|Long|null} [reward] RewardRecord reward
         */

        /**
         * Constructs a new RewardRecord.
         * @memberof gamebase
         * @classdesc Represents a RewardRecord.
         * @implements IRewardRecord
         * @constructor
         * @param {gamebase.IRewardRecord=} [properties] Properties to set
         */
        function RewardRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RewardRecord uid.
         * @member {number} uid
         * @memberof gamebase.RewardRecord
         * @instance
         */
        RewardRecord.prototype.uid = 0;

        /**
         * RewardRecord nickname.
         * @member {string} nickname
         * @memberof gamebase.RewardRecord
         * @instance
         */
        RewardRecord.prototype.nickname = "";

        /**
         * RewardRecord strHeader.
         * @member {string} strHeader
         * @memberof gamebase.RewardRecord
         * @instance
         */
        RewardRecord.prototype.strHeader = "";

        /**
         * RewardRecord timeStamp.
         * @member {number} timeStamp
         * @memberof gamebase.RewardRecord
         * @instance
         */
        RewardRecord.prototype.timeStamp = 0;

        /**
         * RewardRecord reward.
         * @member {number|Long} reward
         * @memberof gamebase.RewardRecord
         * @instance
         */
        RewardRecord.prototype.reward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RewardRecord instance using the specified properties.
         * @function create
         * @memberof gamebase.RewardRecord
         * @static
         * @param {gamebase.IRewardRecord=} [properties] Properties to set
         * @returns {gamebase.RewardRecord} RewardRecord instance
         */
        RewardRecord.create = function create(properties) {
            return new RewardRecord(properties);
        };

        /**
         * Encodes the specified RewardRecord message. Does not implicitly {@link gamebase.RewardRecord.verify|verify} messages.
         * @function encode
         * @memberof gamebase.RewardRecord
         * @static
         * @param {gamebase.IRewardRecord} message RewardRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RewardRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.strHeader != null && Object.hasOwnProperty.call(message, "strHeader"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.strHeader);
            if (message.timeStamp != null && Object.hasOwnProperty.call(message, "timeStamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.timeStamp);
            if (message.reward != null && Object.hasOwnProperty.call(message, "reward"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.reward);
            return writer;
        };

        /**
         * Encodes the specified RewardRecord message, length delimited. Does not implicitly {@link gamebase.RewardRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.RewardRecord
         * @static
         * @param {gamebase.IRewardRecord} message RewardRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RewardRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RewardRecord message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.RewardRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.RewardRecord} RewardRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RewardRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.RewardRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.strHeader = reader.string();
                    break;
                case 4:
                    message.timeStamp = reader.int32();
                    break;
                case 5:
                    message.reward = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RewardRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.RewardRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.RewardRecord} RewardRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RewardRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RewardRecord message.
         * @function verify
         * @memberof gamebase.RewardRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RewardRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.strHeader != null && message.hasOwnProperty("strHeader"))
                if (!$util.isString(message.strHeader))
                    return "strHeader: string expected";
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                if (!$util.isInteger(message.timeStamp))
                    return "timeStamp: integer expected";
            if (message.reward != null && message.hasOwnProperty("reward"))
                if (!$util.isInteger(message.reward) && !(message.reward && $util.isInteger(message.reward.low) && $util.isInteger(message.reward.high)))
                    return "reward: integer|Long expected";
            return null;
        };

        /**
         * Creates a RewardRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.RewardRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.RewardRecord} RewardRecord
         */
        RewardRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.RewardRecord)
                return object;
            var message = new $root.gamebase.RewardRecord();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.strHeader != null)
                message.strHeader = String(object.strHeader);
            if (object.timeStamp != null)
                message.timeStamp = object.timeStamp | 0;
            if (object.reward != null)
                if ($util.Long)
                    (message.reward = $util.Long.fromValue(object.reward)).unsigned = false;
                else if (typeof object.reward === "string")
                    message.reward = parseInt(object.reward, 10);
                else if (typeof object.reward === "number")
                    message.reward = object.reward;
                else if (typeof object.reward === "object")
                    message.reward = new $util.LongBits(object.reward.low >>> 0, object.reward.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RewardRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.RewardRecord
         * @static
         * @param {gamebase.RewardRecord} message RewardRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RewardRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.nickname = "";
                object.strHeader = "";
                object.timeStamp = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reward = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reward = options.longs === String ? "0" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.strHeader != null && message.hasOwnProperty("strHeader"))
                object.strHeader = message.strHeader;
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                object.timeStamp = message.timeStamp;
            if (message.reward != null && message.hasOwnProperty("reward"))
                if (typeof message.reward === "number")
                    object.reward = options.longs === String ? String(message.reward) : message.reward;
                else
                    object.reward = options.longs === String ? $util.Long.prototype.toString.call(message.reward) : options.longs === Number ? new $util.LongBits(message.reward.low >>> 0, message.reward.high >>> 0).toNumber() : message.reward;
            return object;
        };

        /**
         * Converts this RewardRecord to JSON.
         * @function toJSON
         * @memberof gamebase.RewardRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RewardRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RewardRecord;
    })();

    gamebase.JackpotRewardRecordResp = (function() {

        /**
         * Properties of a JackpotRewardRecordResp.
         * @memberof gamebase
         * @interface IJackpotRewardRecordResp
         * @property {Array.<gamebase.IRewardRecord>|null} [itemList] JackpotRewardRecordResp itemList
         */

        /**
         * Constructs a new JackpotRewardRecordResp.
         * @memberof gamebase
         * @classdesc Represents a JackpotRewardRecordResp.
         * @implements IJackpotRewardRecordResp
         * @constructor
         * @param {gamebase.IJackpotRewardRecordResp=} [properties] Properties to set
         */
        function JackpotRewardRecordResp(properties) {
            this.itemList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JackpotRewardRecordResp itemList.
         * @member {Array.<gamebase.IRewardRecord>} itemList
         * @memberof gamebase.JackpotRewardRecordResp
         * @instance
         */
        JackpotRewardRecordResp.prototype.itemList = $util.emptyArray;

        /**
         * Creates a new JackpotRewardRecordResp instance using the specified properties.
         * @function create
         * @memberof gamebase.JackpotRewardRecordResp
         * @static
         * @param {gamebase.IJackpotRewardRecordResp=} [properties] Properties to set
         * @returns {gamebase.JackpotRewardRecordResp} JackpotRewardRecordResp instance
         */
        JackpotRewardRecordResp.create = function create(properties) {
            return new JackpotRewardRecordResp(properties);
        };

        /**
         * Encodes the specified JackpotRewardRecordResp message. Does not implicitly {@link gamebase.JackpotRewardRecordResp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.JackpotRewardRecordResp
         * @static
         * @param {gamebase.IJackpotRewardRecordResp} message JackpotRewardRecordResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotRewardRecordResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemList != null && message.itemList.length)
                for (var i = 0; i < message.itemList.length; ++i)
                    $root.gamebase.RewardRecord.encode(message.itemList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JackpotRewardRecordResp message, length delimited. Does not implicitly {@link gamebase.JackpotRewardRecordResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.JackpotRewardRecordResp
         * @static
         * @param {gamebase.IJackpotRewardRecordResp} message JackpotRewardRecordResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotRewardRecordResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotRewardRecordResp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.JackpotRewardRecordResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.JackpotRewardRecordResp} JackpotRewardRecordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotRewardRecordResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.JackpotRewardRecordResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.itemList && message.itemList.length))
                        message.itemList = [];
                    message.itemList.push($root.gamebase.RewardRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotRewardRecordResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.JackpotRewardRecordResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.JackpotRewardRecordResp} JackpotRewardRecordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotRewardRecordResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotRewardRecordResp message.
         * @function verify
         * @memberof gamebase.JackpotRewardRecordResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotRewardRecordResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemList != null && message.hasOwnProperty("itemList")) {
                if (!Array.isArray(message.itemList))
                    return "itemList: array expected";
                for (var i = 0; i < message.itemList.length; ++i) {
                    var error = $root.gamebase.RewardRecord.verify(message.itemList[i]);
                    if (error)
                        return "itemList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JackpotRewardRecordResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.JackpotRewardRecordResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.JackpotRewardRecordResp} JackpotRewardRecordResp
         */
        JackpotRewardRecordResp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.JackpotRewardRecordResp)
                return object;
            var message = new $root.gamebase.JackpotRewardRecordResp();
            if (object.itemList) {
                if (!Array.isArray(object.itemList))
                    throw TypeError(".gamebase.JackpotRewardRecordResp.itemList: array expected");
                message.itemList = [];
                for (var i = 0; i < object.itemList.length; ++i) {
                    if (typeof object.itemList[i] !== "object")
                        throw TypeError(".gamebase.JackpotRewardRecordResp.itemList: object expected");
                    message.itemList[i] = $root.gamebase.RewardRecord.fromObject(object.itemList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JackpotRewardRecordResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.JackpotRewardRecordResp
         * @static
         * @param {gamebase.JackpotRewardRecordResp} message JackpotRewardRecordResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotRewardRecordResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.itemList = [];
            if (message.itemList && message.itemList.length) {
                object.itemList = [];
                for (var j = 0; j < message.itemList.length; ++j)
                    object.itemList[j] = $root.gamebase.RewardRecord.toObject(message.itemList[j], options);
            }
            return object;
        };

        /**
         * Converts this JackpotRewardRecordResp to JSON.
         * @function toJSON
         * @memberof gamebase.JackpotRewardRecordResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotRewardRecordResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotRewardRecordResp;
    })();

    gamebase.JackpotGetUserRecordReq = (function() {

        /**
         * Properties of a JackpotGetUserRecordReq.
         * @memberof gamebase
         * @interface IJackpotGetUserRecordReq
         */

        /**
         * Constructs a new JackpotGetUserRecordReq.
         * @memberof gamebase
         * @classdesc Represents a JackpotGetUserRecordReq.
         * @implements IJackpotGetUserRecordReq
         * @constructor
         * @param {gamebase.IJackpotGetUserRecordReq=} [properties] Properties to set
         */
        function JackpotGetUserRecordReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new JackpotGetUserRecordReq instance using the specified properties.
         * @function create
         * @memberof gamebase.JackpotGetUserRecordReq
         * @static
         * @param {gamebase.IJackpotGetUserRecordReq=} [properties] Properties to set
         * @returns {gamebase.JackpotGetUserRecordReq} JackpotGetUserRecordReq instance
         */
        JackpotGetUserRecordReq.create = function create(properties) {
            return new JackpotGetUserRecordReq(properties);
        };

        /**
         * Encodes the specified JackpotGetUserRecordReq message. Does not implicitly {@link gamebase.JackpotGetUserRecordReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.JackpotGetUserRecordReq
         * @static
         * @param {gamebase.IJackpotGetUserRecordReq} message JackpotGetUserRecordReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotGetUserRecordReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified JackpotGetUserRecordReq message, length delimited. Does not implicitly {@link gamebase.JackpotGetUserRecordReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.JackpotGetUserRecordReq
         * @static
         * @param {gamebase.IJackpotGetUserRecordReq} message JackpotGetUserRecordReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotGetUserRecordReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotGetUserRecordReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.JackpotGetUserRecordReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.JackpotGetUserRecordReq} JackpotGetUserRecordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotGetUserRecordReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.JackpotGetUserRecordReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotGetUserRecordReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.JackpotGetUserRecordReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.JackpotGetUserRecordReq} JackpotGetUserRecordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotGetUserRecordReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotGetUserRecordReq message.
         * @function verify
         * @memberof gamebase.JackpotGetUserRecordReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotGetUserRecordReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a JackpotGetUserRecordReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.JackpotGetUserRecordReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.JackpotGetUserRecordReq} JackpotGetUserRecordReq
         */
        JackpotGetUserRecordReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.JackpotGetUserRecordReq)
                return object;
            return new $root.gamebase.JackpotGetUserRecordReq();
        };

        /**
         * Creates a plain object from a JackpotGetUserRecordReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.JackpotGetUserRecordReq
         * @static
         * @param {gamebase.JackpotGetUserRecordReq} message JackpotGetUserRecordReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotGetUserRecordReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this JackpotGetUserRecordReq to JSON.
         * @function toJSON
         * @memberof gamebase.JackpotGetUserRecordReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotGetUserRecordReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotGetUserRecordReq;
    })();

    gamebase.UserJackReward = (function() {

        /**
         * Properties of a UserJackReward.
         * @memberof gamebase
         * @interface IUserJackReward
         * @property {boolean|null} [isGet] UserJackReward isGet
         * @property {number|Long|null} [rewardBalance] UserJackReward rewardBalance
         * @property {number|null} [timeStamp] UserJackReward timeStamp
         */

        /**
         * Constructs a new UserJackReward.
         * @memberof gamebase
         * @classdesc Represents a UserJackReward.
         * @implements IUserJackReward
         * @constructor
         * @param {gamebase.IUserJackReward=} [properties] Properties to set
         */
        function UserJackReward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserJackReward isGet.
         * @member {boolean} isGet
         * @memberof gamebase.UserJackReward
         * @instance
         */
        UserJackReward.prototype.isGet = false;

        /**
         * UserJackReward rewardBalance.
         * @member {number|Long} rewardBalance
         * @memberof gamebase.UserJackReward
         * @instance
         */
        UserJackReward.prototype.rewardBalance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserJackReward timeStamp.
         * @member {number} timeStamp
         * @memberof gamebase.UserJackReward
         * @instance
         */
        UserJackReward.prototype.timeStamp = 0;

        /**
         * Creates a new UserJackReward instance using the specified properties.
         * @function create
         * @memberof gamebase.UserJackReward
         * @static
         * @param {gamebase.IUserJackReward=} [properties] Properties to set
         * @returns {gamebase.UserJackReward} UserJackReward instance
         */
        UserJackReward.create = function create(properties) {
            return new UserJackReward(properties);
        };

        /**
         * Encodes the specified UserJackReward message. Does not implicitly {@link gamebase.UserJackReward.verify|verify} messages.
         * @function encode
         * @memberof gamebase.UserJackReward
         * @static
         * @param {gamebase.IUserJackReward} message UserJackReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJackReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isGet != null && Object.hasOwnProperty.call(message, "isGet"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isGet);
            if (message.rewardBalance != null && Object.hasOwnProperty.call(message, "rewardBalance"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.rewardBalance);
            if (message.timeStamp != null && Object.hasOwnProperty.call(message, "timeStamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.timeStamp);
            return writer;
        };

        /**
         * Encodes the specified UserJackReward message, length delimited. Does not implicitly {@link gamebase.UserJackReward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.UserJackReward
         * @static
         * @param {gamebase.IUserJackReward} message UserJackReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJackReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserJackReward message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.UserJackReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.UserJackReward} UserJackReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJackReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.UserJackReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isGet = reader.bool();
                    break;
                case 2:
                    message.rewardBalance = reader.int64();
                    break;
                case 3:
                    message.timeStamp = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserJackReward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.UserJackReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.UserJackReward} UserJackReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJackReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserJackReward message.
         * @function verify
         * @memberof gamebase.UserJackReward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserJackReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isGet != null && message.hasOwnProperty("isGet"))
                if (typeof message.isGet !== "boolean")
                    return "isGet: boolean expected";
            if (message.rewardBalance != null && message.hasOwnProperty("rewardBalance"))
                if (!$util.isInteger(message.rewardBalance) && !(message.rewardBalance && $util.isInteger(message.rewardBalance.low) && $util.isInteger(message.rewardBalance.high)))
                    return "rewardBalance: integer|Long expected";
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                if (!$util.isInteger(message.timeStamp))
                    return "timeStamp: integer expected";
            return null;
        };

        /**
         * Creates a UserJackReward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.UserJackReward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.UserJackReward} UserJackReward
         */
        UserJackReward.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.UserJackReward)
                return object;
            var message = new $root.gamebase.UserJackReward();
            if (object.isGet != null)
                message.isGet = Boolean(object.isGet);
            if (object.rewardBalance != null)
                if ($util.Long)
                    (message.rewardBalance = $util.Long.fromValue(object.rewardBalance)).unsigned = false;
                else if (typeof object.rewardBalance === "string")
                    message.rewardBalance = parseInt(object.rewardBalance, 10);
                else if (typeof object.rewardBalance === "number")
                    message.rewardBalance = object.rewardBalance;
                else if (typeof object.rewardBalance === "object")
                    message.rewardBalance = new $util.LongBits(object.rewardBalance.low >>> 0, object.rewardBalance.high >>> 0).toNumber();
            if (object.timeStamp != null)
                message.timeStamp = object.timeStamp | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserJackReward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.UserJackReward
         * @static
         * @param {gamebase.UserJackReward} message UserJackReward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserJackReward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.isGet = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.rewardBalance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.rewardBalance = options.longs === String ? "0" : 0;
                object.timeStamp = 0;
            }
            if (message.isGet != null && message.hasOwnProperty("isGet"))
                object.isGet = message.isGet;
            if (message.rewardBalance != null && message.hasOwnProperty("rewardBalance"))
                if (typeof message.rewardBalance === "number")
                    object.rewardBalance = options.longs === String ? String(message.rewardBalance) : message.rewardBalance;
                else
                    object.rewardBalance = options.longs === String ? $util.Long.prototype.toString.call(message.rewardBalance) : options.longs === Number ? new $util.LongBits(message.rewardBalance.low >>> 0, message.rewardBalance.high >>> 0).toNumber() : message.rewardBalance;
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                object.timeStamp = message.timeStamp;
            return object;
        };

        /**
         * Converts this UserJackReward to JSON.
         * @function toJSON
         * @memberof gamebase.UserJackReward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserJackReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserJackReward;
    })();

    gamebase.JackpotGetUserRecordResp = (function() {

        /**
         * Properties of a JackpotGetUserRecordResp.
         * @memberof gamebase
         * @interface IJackpotGetUserRecordResp
         * @property {number|Long|null} [totalReward] JackpotGetUserRecordResp totalReward
         * @property {number|Long|null} [maxReward] JackpotGetUserRecordResp maxReward
         * @property {Array.<gamebase.IUserJackReward>|null} [itemList] JackpotGetUserRecordResp itemList
         */

        /**
         * Constructs a new JackpotGetUserRecordResp.
         * @memberof gamebase
         * @classdesc Represents a JackpotGetUserRecordResp.
         * @implements IJackpotGetUserRecordResp
         * @constructor
         * @param {gamebase.IJackpotGetUserRecordResp=} [properties] Properties to set
         */
        function JackpotGetUserRecordResp(properties) {
            this.itemList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JackpotGetUserRecordResp totalReward.
         * @member {number|Long} totalReward
         * @memberof gamebase.JackpotGetUserRecordResp
         * @instance
         */
        JackpotGetUserRecordResp.prototype.totalReward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotGetUserRecordResp maxReward.
         * @member {number|Long} maxReward
         * @memberof gamebase.JackpotGetUserRecordResp
         * @instance
         */
        JackpotGetUserRecordResp.prototype.maxReward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotGetUserRecordResp itemList.
         * @member {Array.<gamebase.IUserJackReward>} itemList
         * @memberof gamebase.JackpotGetUserRecordResp
         * @instance
         */
        JackpotGetUserRecordResp.prototype.itemList = $util.emptyArray;

        /**
         * Creates a new JackpotGetUserRecordResp instance using the specified properties.
         * @function create
         * @memberof gamebase.JackpotGetUserRecordResp
         * @static
         * @param {gamebase.IJackpotGetUserRecordResp=} [properties] Properties to set
         * @returns {gamebase.JackpotGetUserRecordResp} JackpotGetUserRecordResp instance
         */
        JackpotGetUserRecordResp.create = function create(properties) {
            return new JackpotGetUserRecordResp(properties);
        };

        /**
         * Encodes the specified JackpotGetUserRecordResp message. Does not implicitly {@link gamebase.JackpotGetUserRecordResp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.JackpotGetUserRecordResp
         * @static
         * @param {gamebase.IJackpotGetUserRecordResp} message JackpotGetUserRecordResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotGetUserRecordResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.totalReward != null && Object.hasOwnProperty.call(message, "totalReward"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.totalReward);
            if (message.maxReward != null && Object.hasOwnProperty.call(message, "maxReward"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.maxReward);
            if (message.itemList != null && message.itemList.length)
                for (var i = 0; i < message.itemList.length; ++i)
                    $root.gamebase.UserJackReward.encode(message.itemList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JackpotGetUserRecordResp message, length delimited. Does not implicitly {@link gamebase.JackpotGetUserRecordResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.JackpotGetUserRecordResp
         * @static
         * @param {gamebase.IJackpotGetUserRecordResp} message JackpotGetUserRecordResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotGetUserRecordResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotGetUserRecordResp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.JackpotGetUserRecordResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.JackpotGetUserRecordResp} JackpotGetUserRecordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotGetUserRecordResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.JackpotGetUserRecordResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.totalReward = reader.int64();
                    break;
                case 2:
                    message.maxReward = reader.int64();
                    break;
                case 3:
                    if (!(message.itemList && message.itemList.length))
                        message.itemList = [];
                    message.itemList.push($root.gamebase.UserJackReward.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotGetUserRecordResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.JackpotGetUserRecordResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.JackpotGetUserRecordResp} JackpotGetUserRecordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotGetUserRecordResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotGetUserRecordResp message.
         * @function verify
         * @memberof gamebase.JackpotGetUserRecordResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotGetUserRecordResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.totalReward != null && message.hasOwnProperty("totalReward"))
                if (!$util.isInteger(message.totalReward) && !(message.totalReward && $util.isInteger(message.totalReward.low) && $util.isInteger(message.totalReward.high)))
                    return "totalReward: integer|Long expected";
            if (message.maxReward != null && message.hasOwnProperty("maxReward"))
                if (!$util.isInteger(message.maxReward) && !(message.maxReward && $util.isInteger(message.maxReward.low) && $util.isInteger(message.maxReward.high)))
                    return "maxReward: integer|Long expected";
            if (message.itemList != null && message.hasOwnProperty("itemList")) {
                if (!Array.isArray(message.itemList))
                    return "itemList: array expected";
                for (var i = 0; i < message.itemList.length; ++i) {
                    var error = $root.gamebase.UserJackReward.verify(message.itemList[i]);
                    if (error)
                        return "itemList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JackpotGetUserRecordResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.JackpotGetUserRecordResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.JackpotGetUserRecordResp} JackpotGetUserRecordResp
         */
        JackpotGetUserRecordResp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.JackpotGetUserRecordResp)
                return object;
            var message = new $root.gamebase.JackpotGetUserRecordResp();
            if (object.totalReward != null)
                if ($util.Long)
                    (message.totalReward = $util.Long.fromValue(object.totalReward)).unsigned = false;
                else if (typeof object.totalReward === "string")
                    message.totalReward = parseInt(object.totalReward, 10);
                else if (typeof object.totalReward === "number")
                    message.totalReward = object.totalReward;
                else if (typeof object.totalReward === "object")
                    message.totalReward = new $util.LongBits(object.totalReward.low >>> 0, object.totalReward.high >>> 0).toNumber();
            if (object.maxReward != null)
                if ($util.Long)
                    (message.maxReward = $util.Long.fromValue(object.maxReward)).unsigned = false;
                else if (typeof object.maxReward === "string")
                    message.maxReward = parseInt(object.maxReward, 10);
                else if (typeof object.maxReward === "number")
                    message.maxReward = object.maxReward;
                else if (typeof object.maxReward === "object")
                    message.maxReward = new $util.LongBits(object.maxReward.low >>> 0, object.maxReward.high >>> 0).toNumber();
            if (object.itemList) {
                if (!Array.isArray(object.itemList))
                    throw TypeError(".gamebase.JackpotGetUserRecordResp.itemList: array expected");
                message.itemList = [];
                for (var i = 0; i < object.itemList.length; ++i) {
                    if (typeof object.itemList[i] !== "object")
                        throw TypeError(".gamebase.JackpotGetUserRecordResp.itemList: object expected");
                    message.itemList[i] = $root.gamebase.UserJackReward.fromObject(object.itemList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JackpotGetUserRecordResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.JackpotGetUserRecordResp
         * @static
         * @param {gamebase.JackpotGetUserRecordResp} message JackpotGetUserRecordResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotGetUserRecordResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.itemList = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.totalReward = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalReward = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.maxReward = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maxReward = options.longs === String ? "0" : 0;
            }
            if (message.totalReward != null && message.hasOwnProperty("totalReward"))
                if (typeof message.totalReward === "number")
                    object.totalReward = options.longs === String ? String(message.totalReward) : message.totalReward;
                else
                    object.totalReward = options.longs === String ? $util.Long.prototype.toString.call(message.totalReward) : options.longs === Number ? new $util.LongBits(message.totalReward.low >>> 0, message.totalReward.high >>> 0).toNumber() : message.totalReward;
            if (message.maxReward != null && message.hasOwnProperty("maxReward"))
                if (typeof message.maxReward === "number")
                    object.maxReward = options.longs === String ? String(message.maxReward) : message.maxReward;
                else
                    object.maxReward = options.longs === String ? $util.Long.prototype.toString.call(message.maxReward) : options.longs === Number ? new $util.LongBits(message.maxReward.low >>> 0, message.maxReward.high >>> 0).toNumber() : message.maxReward;
            if (message.itemList && message.itemList.length) {
                object.itemList = [];
                for (var j = 0; j < message.itemList.length; ++j)
                    object.itemList[j] = $root.gamebase.UserJackReward.toObject(message.itemList[j], options);
            }
            return object;
        };

        /**
         * Converts this JackpotGetUserRecordResp to JSON.
         * @function toJSON
         * @memberof gamebase.JackpotGetUserRecordResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotGetUserRecordResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotGetUserRecordResp;
    })();

    gamebase.JackpotGetRewardDetailReq = (function() {

        /**
         * Properties of a JackpotGetRewardDetailReq.
         * @memberof gamebase
         * @interface IJackpotGetRewardDetailReq
         */

        /**
         * Constructs a new JackpotGetRewardDetailReq.
         * @memberof gamebase
         * @classdesc Represents a JackpotGetRewardDetailReq.
         * @implements IJackpotGetRewardDetailReq
         * @constructor
         * @param {gamebase.IJackpotGetRewardDetailReq=} [properties] Properties to set
         */
        function JackpotGetRewardDetailReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new JackpotGetRewardDetailReq instance using the specified properties.
         * @function create
         * @memberof gamebase.JackpotGetRewardDetailReq
         * @static
         * @param {gamebase.IJackpotGetRewardDetailReq=} [properties] Properties to set
         * @returns {gamebase.JackpotGetRewardDetailReq} JackpotGetRewardDetailReq instance
         */
        JackpotGetRewardDetailReq.create = function create(properties) {
            return new JackpotGetRewardDetailReq(properties);
        };

        /**
         * Encodes the specified JackpotGetRewardDetailReq message. Does not implicitly {@link gamebase.JackpotGetRewardDetailReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.JackpotGetRewardDetailReq
         * @static
         * @param {gamebase.IJackpotGetRewardDetailReq} message JackpotGetRewardDetailReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotGetRewardDetailReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified JackpotGetRewardDetailReq message, length delimited. Does not implicitly {@link gamebase.JackpotGetRewardDetailReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.JackpotGetRewardDetailReq
         * @static
         * @param {gamebase.IJackpotGetRewardDetailReq} message JackpotGetRewardDetailReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotGetRewardDetailReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotGetRewardDetailReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.JackpotGetRewardDetailReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.JackpotGetRewardDetailReq} JackpotGetRewardDetailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotGetRewardDetailReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.JackpotGetRewardDetailReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotGetRewardDetailReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.JackpotGetRewardDetailReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.JackpotGetRewardDetailReq} JackpotGetRewardDetailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotGetRewardDetailReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotGetRewardDetailReq message.
         * @function verify
         * @memberof gamebase.JackpotGetRewardDetailReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotGetRewardDetailReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a JackpotGetRewardDetailReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.JackpotGetRewardDetailReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.JackpotGetRewardDetailReq} JackpotGetRewardDetailReq
         */
        JackpotGetRewardDetailReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.JackpotGetRewardDetailReq)
                return object;
            return new $root.gamebase.JackpotGetRewardDetailReq();
        };

        /**
         * Creates a plain object from a JackpotGetRewardDetailReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.JackpotGetRewardDetailReq
         * @static
         * @param {gamebase.JackpotGetRewardDetailReq} message JackpotGetRewardDetailReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotGetRewardDetailReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this JackpotGetRewardDetailReq to JSON.
         * @function toJSON
         * @memberof gamebase.JackpotGetRewardDetailReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotGetRewardDetailReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotGetRewardDetailReq;
    })();

    /**
     * CC_REWARD_TYPE enum.
     * @name gamebase.CC_REWARD_TYPE
     * @enum {number}
     * @property {number} CC_REWARD_TYPE_NULL=0 CC_REWARD_TYPE_NULL value
     * @property {number} CC_REWARD_TYPE_FIXED=1 CC_REWARD_TYPE_FIXED value
     * @property {number} CC_REWARD_TYPE_RATIO=2 CC_REWARD_TYPE_RATIO value
     */
    gamebase.CC_REWARD_TYPE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CC_REWARD_TYPE_NULL"] = 0;
        values[valuesById[1] = "CC_REWARD_TYPE_FIXED"] = 1;
        values[valuesById[2] = "CC_REWARD_TYPE_RATIO"] = 2;
        return values;
    })();

    gamebase.JackRward = (function() {

        /**
         * Properties of a JackRward.
         * @memberof gamebase
         * @interface IJackRward
         * @property {number|Long|null} [value_min] JackRward value_min
         * @property {number|Long|null} [value_max] JackRward value_max
         * @property {number|null} [reward_type] JackRward reward_type
         * @property {number|Long|null} [reward_value] JackRward reward_value
         */

        /**
         * Constructs a new JackRward.
         * @memberof gamebase
         * @classdesc Represents a JackRward.
         * @implements IJackRward
         * @constructor
         * @param {gamebase.IJackRward=} [properties] Properties to set
         */
        function JackRward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JackRward value_min.
         * @member {number|Long} value_min
         * @memberof gamebase.JackRward
         * @instance
         */
        JackRward.prototype.value_min = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackRward value_max.
         * @member {number|Long} value_max
         * @memberof gamebase.JackRward
         * @instance
         */
        JackRward.prototype.value_max = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackRward reward_type.
         * @member {number} reward_type
         * @memberof gamebase.JackRward
         * @instance
         */
        JackRward.prototype.reward_type = 0;

        /**
         * JackRward reward_value.
         * @member {number|Long} reward_value
         * @memberof gamebase.JackRward
         * @instance
         */
        JackRward.prototype.reward_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JackRward instance using the specified properties.
         * @function create
         * @memberof gamebase.JackRward
         * @static
         * @param {gamebase.IJackRward=} [properties] Properties to set
         * @returns {gamebase.JackRward} JackRward instance
         */
        JackRward.create = function create(properties) {
            return new JackRward(properties);
        };

        /**
         * Encodes the specified JackRward message. Does not implicitly {@link gamebase.JackRward.verify|verify} messages.
         * @function encode
         * @memberof gamebase.JackRward
         * @static
         * @param {gamebase.IJackRward} message JackRward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackRward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value_min != null && Object.hasOwnProperty.call(message, "value_min"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value_min);
            if (message.value_max != null && Object.hasOwnProperty.call(message, "value_max"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.value_max);
            if (message.reward_type != null && Object.hasOwnProperty.call(message, "reward_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.reward_type);
            if (message.reward_value != null && Object.hasOwnProperty.call(message, "reward_value"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.reward_value);
            return writer;
        };

        /**
         * Encodes the specified JackRward message, length delimited. Does not implicitly {@link gamebase.JackRward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.JackRward
         * @static
         * @param {gamebase.IJackRward} message JackRward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackRward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackRward message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.JackRward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.JackRward} JackRward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackRward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.JackRward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value_min = reader.int64();
                    break;
                case 2:
                    message.value_max = reader.int64();
                    break;
                case 3:
                    message.reward_type = reader.int32();
                    break;
                case 4:
                    message.reward_value = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackRward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.JackRward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.JackRward} JackRward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackRward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackRward message.
         * @function verify
         * @memberof gamebase.JackRward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackRward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value_min != null && message.hasOwnProperty("value_min"))
                if (!$util.isInteger(message.value_min) && !(message.value_min && $util.isInteger(message.value_min.low) && $util.isInteger(message.value_min.high)))
                    return "value_min: integer|Long expected";
            if (message.value_max != null && message.hasOwnProperty("value_max"))
                if (!$util.isInteger(message.value_max) && !(message.value_max && $util.isInteger(message.value_max.low) && $util.isInteger(message.value_max.high)))
                    return "value_max: integer|Long expected";
            if (message.reward_type != null && message.hasOwnProperty("reward_type"))
                if (!$util.isInteger(message.reward_type))
                    return "reward_type: integer expected";
            if (message.reward_value != null && message.hasOwnProperty("reward_value"))
                if (!$util.isInteger(message.reward_value) && !(message.reward_value && $util.isInteger(message.reward_value.low) && $util.isInteger(message.reward_value.high)))
                    return "reward_value: integer|Long expected";
            return null;
        };

        /**
         * Creates a JackRward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.JackRward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.JackRward} JackRward
         */
        JackRward.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.JackRward)
                return object;
            var message = new $root.gamebase.JackRward();
            if (object.value_min != null)
                if ($util.Long)
                    (message.value_min = $util.Long.fromValue(object.value_min)).unsigned = false;
                else if (typeof object.value_min === "string")
                    message.value_min = parseInt(object.value_min, 10);
                else if (typeof object.value_min === "number")
                    message.value_min = object.value_min;
                else if (typeof object.value_min === "object")
                    message.value_min = new $util.LongBits(object.value_min.low >>> 0, object.value_min.high >>> 0).toNumber();
            if (object.value_max != null)
                if ($util.Long)
                    (message.value_max = $util.Long.fromValue(object.value_max)).unsigned = false;
                else if (typeof object.value_max === "string")
                    message.value_max = parseInt(object.value_max, 10);
                else if (typeof object.value_max === "number")
                    message.value_max = object.value_max;
                else if (typeof object.value_max === "object")
                    message.value_max = new $util.LongBits(object.value_max.low >>> 0, object.value_max.high >>> 0).toNumber();
            if (object.reward_type != null)
                message.reward_type = object.reward_type | 0;
            if (object.reward_value != null)
                if ($util.Long)
                    (message.reward_value = $util.Long.fromValue(object.reward_value)).unsigned = false;
                else if (typeof object.reward_value === "string")
                    message.reward_value = parseInt(object.reward_value, 10);
                else if (typeof object.reward_value === "number")
                    message.reward_value = object.reward_value;
                else if (typeof object.reward_value === "object")
                    message.reward_value = new $util.LongBits(object.reward_value.low >>> 0, object.reward_value.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a JackRward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.JackRward
         * @static
         * @param {gamebase.JackRward} message JackRward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackRward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.value_min = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.value_min = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.value_max = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.value_max = options.longs === String ? "0" : 0;
                object.reward_type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reward_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reward_value = options.longs === String ? "0" : 0;
            }
            if (message.value_min != null && message.hasOwnProperty("value_min"))
                if (typeof message.value_min === "number")
                    object.value_min = options.longs === String ? String(message.value_min) : message.value_min;
                else
                    object.value_min = options.longs === String ? $util.Long.prototype.toString.call(message.value_min) : options.longs === Number ? new $util.LongBits(message.value_min.low >>> 0, message.value_min.high >>> 0).toNumber() : message.value_min;
            if (message.value_max != null && message.hasOwnProperty("value_max"))
                if (typeof message.value_max === "number")
                    object.value_max = options.longs === String ? String(message.value_max) : message.value_max;
                else
                    object.value_max = options.longs === String ? $util.Long.prototype.toString.call(message.value_max) : options.longs === Number ? new $util.LongBits(message.value_max.low >>> 0, message.value_max.high >>> 0).toNumber() : message.value_max;
            if (message.reward_type != null && message.hasOwnProperty("reward_type"))
                object.reward_type = message.reward_type;
            if (message.reward_value != null && message.hasOwnProperty("reward_value"))
                if (typeof message.reward_value === "number")
                    object.reward_value = options.longs === String ? String(message.reward_value) : message.reward_value;
                else
                    object.reward_value = options.longs === String ? $util.Long.prototype.toString.call(message.reward_value) : options.longs === Number ? new $util.LongBits(message.reward_value.low >>> 0, message.reward_value.high >>> 0).toNumber() : message.reward_value;
            return object;
        };

        /**
         * Converts this JackRward to JSON.
         * @function toJSON
         * @memberof gamebase.JackRward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackRward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackRward;
    })();

    gamebase.JackpotGetRewardDetailResp = (function() {

        /**
         * Properties of a JackpotGetRewardDetailResp.
         * @memberof gamebase
         * @interface IJackpotGetRewardDetailResp
         * @property {number|null} [win_count] JackpotGetRewardDetailResp win_count
         * @property {number|null} [total_count] JackpotGetRewardDetailResp total_count
         * @property {number|null} [continue_time] JackpotGetRewardDetailResp continue_time
         * @property {Array.<number|Long>|null} [winList] JackpotGetRewardDetailResp winList
         * @property {Array.<gamebase.IJackRward>|null} [rewardList] JackpotGetRewardDetailResp rewardList
         */

        /**
         * Constructs a new JackpotGetRewardDetailResp.
         * @memberof gamebase
         * @classdesc Represents a JackpotGetRewardDetailResp.
         * @implements IJackpotGetRewardDetailResp
         * @constructor
         * @param {gamebase.IJackpotGetRewardDetailResp=} [properties] Properties to set
         */
        function JackpotGetRewardDetailResp(properties) {
            this.winList = [];
            this.rewardList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JackpotGetRewardDetailResp win_count.
         * @member {number} win_count
         * @memberof gamebase.JackpotGetRewardDetailResp
         * @instance
         */
        JackpotGetRewardDetailResp.prototype.win_count = 0;

        /**
         * JackpotGetRewardDetailResp total_count.
         * @member {number} total_count
         * @memberof gamebase.JackpotGetRewardDetailResp
         * @instance
         */
        JackpotGetRewardDetailResp.prototype.total_count = 0;

        /**
         * JackpotGetRewardDetailResp continue_time.
         * @member {number} continue_time
         * @memberof gamebase.JackpotGetRewardDetailResp
         * @instance
         */
        JackpotGetRewardDetailResp.prototype.continue_time = 0;

        /**
         * JackpotGetRewardDetailResp winList.
         * @member {Array.<number|Long>} winList
         * @memberof gamebase.JackpotGetRewardDetailResp
         * @instance
         */
        JackpotGetRewardDetailResp.prototype.winList = $util.emptyArray;

        /**
         * JackpotGetRewardDetailResp rewardList.
         * @member {Array.<gamebase.IJackRward>} rewardList
         * @memberof gamebase.JackpotGetRewardDetailResp
         * @instance
         */
        JackpotGetRewardDetailResp.prototype.rewardList = $util.emptyArray;

        /**
         * Creates a new JackpotGetRewardDetailResp instance using the specified properties.
         * @function create
         * @memberof gamebase.JackpotGetRewardDetailResp
         * @static
         * @param {gamebase.IJackpotGetRewardDetailResp=} [properties] Properties to set
         * @returns {gamebase.JackpotGetRewardDetailResp} JackpotGetRewardDetailResp instance
         */
        JackpotGetRewardDetailResp.create = function create(properties) {
            return new JackpotGetRewardDetailResp(properties);
        };

        /**
         * Encodes the specified JackpotGetRewardDetailResp message. Does not implicitly {@link gamebase.JackpotGetRewardDetailResp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.JackpotGetRewardDetailResp
         * @static
         * @param {gamebase.IJackpotGetRewardDetailResp} message JackpotGetRewardDetailResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotGetRewardDetailResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.win_count != null && Object.hasOwnProperty.call(message, "win_count"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.win_count);
            if (message.total_count != null && Object.hasOwnProperty.call(message, "total_count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.total_count);
            if (message.continue_time != null && Object.hasOwnProperty.call(message, "continue_time"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.continue_time);
            if (message.winList != null && message.winList.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.winList.length; ++i)
                    writer.int64(message.winList[i]);
                writer.ldelim();
            }
            if (message.rewardList != null && message.rewardList.length)
                for (var i = 0; i < message.rewardList.length; ++i)
                    $root.gamebase.JackRward.encode(message.rewardList[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JackpotGetRewardDetailResp message, length delimited. Does not implicitly {@link gamebase.JackpotGetRewardDetailResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.JackpotGetRewardDetailResp
         * @static
         * @param {gamebase.IJackpotGetRewardDetailResp} message JackpotGetRewardDetailResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotGetRewardDetailResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotGetRewardDetailResp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.JackpotGetRewardDetailResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.JackpotGetRewardDetailResp} JackpotGetRewardDetailResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotGetRewardDetailResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.JackpotGetRewardDetailResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.win_count = reader.int32();
                    break;
                case 2:
                    message.total_count = reader.int32();
                    break;
                case 3:
                    message.continue_time = reader.int32();
                    break;
                case 4:
                    if (!(message.winList && message.winList.length))
                        message.winList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.winList.push(reader.int64());
                    } else
                        message.winList.push(reader.int64());
                    break;
                case 5:
                    if (!(message.rewardList && message.rewardList.length))
                        message.rewardList = [];
                    message.rewardList.push($root.gamebase.JackRward.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotGetRewardDetailResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.JackpotGetRewardDetailResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.JackpotGetRewardDetailResp} JackpotGetRewardDetailResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotGetRewardDetailResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotGetRewardDetailResp message.
         * @function verify
         * @memberof gamebase.JackpotGetRewardDetailResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotGetRewardDetailResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.win_count != null && message.hasOwnProperty("win_count"))
                if (!$util.isInteger(message.win_count))
                    return "win_count: integer expected";
            if (message.total_count != null && message.hasOwnProperty("total_count"))
                if (!$util.isInteger(message.total_count))
                    return "total_count: integer expected";
            if (message.continue_time != null && message.hasOwnProperty("continue_time"))
                if (!$util.isInteger(message.continue_time))
                    return "continue_time: integer expected";
            if (message.winList != null && message.hasOwnProperty("winList")) {
                if (!Array.isArray(message.winList))
                    return "winList: array expected";
                for (var i = 0; i < message.winList.length; ++i)
                    if (!$util.isInteger(message.winList[i]) && !(message.winList[i] && $util.isInteger(message.winList[i].low) && $util.isInteger(message.winList[i].high)))
                        return "winList: integer|Long[] expected";
            }
            if (message.rewardList != null && message.hasOwnProperty("rewardList")) {
                if (!Array.isArray(message.rewardList))
                    return "rewardList: array expected";
                for (var i = 0; i < message.rewardList.length; ++i) {
                    var error = $root.gamebase.JackRward.verify(message.rewardList[i]);
                    if (error)
                        return "rewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JackpotGetRewardDetailResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.JackpotGetRewardDetailResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.JackpotGetRewardDetailResp} JackpotGetRewardDetailResp
         */
        JackpotGetRewardDetailResp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.JackpotGetRewardDetailResp)
                return object;
            var message = new $root.gamebase.JackpotGetRewardDetailResp();
            if (object.win_count != null)
                message.win_count = object.win_count | 0;
            if (object.total_count != null)
                message.total_count = object.total_count | 0;
            if (object.continue_time != null)
                message.continue_time = object.continue_time | 0;
            if (object.winList) {
                if (!Array.isArray(object.winList))
                    throw TypeError(".gamebase.JackpotGetRewardDetailResp.winList: array expected");
                message.winList = [];
                for (var i = 0; i < object.winList.length; ++i)
                    if ($util.Long)
                        (message.winList[i] = $util.Long.fromValue(object.winList[i])).unsigned = false;
                    else if (typeof object.winList[i] === "string")
                        message.winList[i] = parseInt(object.winList[i], 10);
                    else if (typeof object.winList[i] === "number")
                        message.winList[i] = object.winList[i];
                    else if (typeof object.winList[i] === "object")
                        message.winList[i] = new $util.LongBits(object.winList[i].low >>> 0, object.winList[i].high >>> 0).toNumber();
            }
            if (object.rewardList) {
                if (!Array.isArray(object.rewardList))
                    throw TypeError(".gamebase.JackpotGetRewardDetailResp.rewardList: array expected");
                message.rewardList = [];
                for (var i = 0; i < object.rewardList.length; ++i) {
                    if (typeof object.rewardList[i] !== "object")
                        throw TypeError(".gamebase.JackpotGetRewardDetailResp.rewardList: object expected");
                    message.rewardList[i] = $root.gamebase.JackRward.fromObject(object.rewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JackpotGetRewardDetailResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.JackpotGetRewardDetailResp
         * @static
         * @param {gamebase.JackpotGetRewardDetailResp} message JackpotGetRewardDetailResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotGetRewardDetailResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.winList = [];
                object.rewardList = [];
            }
            if (options.defaults) {
                object.win_count = 0;
                object.total_count = 0;
                object.continue_time = 0;
            }
            if (message.win_count != null && message.hasOwnProperty("win_count"))
                object.win_count = message.win_count;
            if (message.total_count != null && message.hasOwnProperty("total_count"))
                object.total_count = message.total_count;
            if (message.continue_time != null && message.hasOwnProperty("continue_time"))
                object.continue_time = message.continue_time;
            if (message.winList && message.winList.length) {
                object.winList = [];
                for (var j = 0; j < message.winList.length; ++j)
                    if (typeof message.winList[j] === "number")
                        object.winList[j] = options.longs === String ? String(message.winList[j]) : message.winList[j];
                    else
                        object.winList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.winList[j]) : options.longs === Number ? new $util.LongBits(message.winList[j].low >>> 0, message.winList[j].high >>> 0).toNumber() : message.winList[j];
            }
            if (message.rewardList && message.rewardList.length) {
                object.rewardList = [];
                for (var j = 0; j < message.rewardList.length; ++j)
                    object.rewardList[j] = $root.gamebase.JackRward.toObject(message.rewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this JackpotGetRewardDetailResp to JSON.
         * @function toJSON
         * @memberof gamebase.JackpotGetRewardDetailResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotGetRewardDetailResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotGetRewardDetailResp;
    })();

    gamebase.JackpotUserDataDB = (function() {

        /**
         * Properties of a JackpotUserDataDB.
         * @memberof gamebase
         * @interface IJackpotUserDataDB
         * @property {number|null} [uid] JackpotUserDataDB uid
         * @property {number|null} [win_count] JackpotUserDataDB win_count
         * @property {number|Long|null} [curBalance] JackpotUserDataDB curBalance
         * @property {number|null} [endTimeStamp] JackpotUserDataDB endTimeStamp
         * @property {number|Long|null} [totalReward] JackpotUserDataDB totalReward
         * @property {number|Long|null} [maxReward] JackpotUserDataDB maxReward
         * @property {Array.<gamebase.IUserJackReward>|null} [userRewardList] JackpotUserDataDB userRewardList
         * @property {Array.<number|Long>|null} [winList] JackpotUserDataDB winList
         * @property {number|Long|null} [betAmount] JackpotUserDataDB betAmount
         * @property {number|null} [last_win_count] JackpotUserDataDB last_win_count
         */

        /**
         * Constructs a new JackpotUserDataDB.
         * @memberof gamebase
         * @classdesc Represents a JackpotUserDataDB.
         * @implements IJackpotUserDataDB
         * @constructor
         * @param {gamebase.IJackpotUserDataDB=} [properties] Properties to set
         */
        function JackpotUserDataDB(properties) {
            this.userRewardList = [];
            this.winList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JackpotUserDataDB uid.
         * @member {number} uid
         * @memberof gamebase.JackpotUserDataDB
         * @instance
         */
        JackpotUserDataDB.prototype.uid = 0;

        /**
         * JackpotUserDataDB win_count.
         * @member {number} win_count
         * @memberof gamebase.JackpotUserDataDB
         * @instance
         */
        JackpotUserDataDB.prototype.win_count = 0;

        /**
         * JackpotUserDataDB curBalance.
         * @member {number|Long} curBalance
         * @memberof gamebase.JackpotUserDataDB
         * @instance
         */
        JackpotUserDataDB.prototype.curBalance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotUserDataDB endTimeStamp.
         * @member {number} endTimeStamp
         * @memberof gamebase.JackpotUserDataDB
         * @instance
         */
        JackpotUserDataDB.prototype.endTimeStamp = 0;

        /**
         * JackpotUserDataDB totalReward.
         * @member {number|Long} totalReward
         * @memberof gamebase.JackpotUserDataDB
         * @instance
         */
        JackpotUserDataDB.prototype.totalReward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotUserDataDB maxReward.
         * @member {number|Long} maxReward
         * @memberof gamebase.JackpotUserDataDB
         * @instance
         */
        JackpotUserDataDB.prototype.maxReward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotUserDataDB userRewardList.
         * @member {Array.<gamebase.IUserJackReward>} userRewardList
         * @memberof gamebase.JackpotUserDataDB
         * @instance
         */
        JackpotUserDataDB.prototype.userRewardList = $util.emptyArray;

        /**
         * JackpotUserDataDB winList.
         * @member {Array.<number|Long>} winList
         * @memberof gamebase.JackpotUserDataDB
         * @instance
         */
        JackpotUserDataDB.prototype.winList = $util.emptyArray;

        /**
         * JackpotUserDataDB betAmount.
         * @member {number|Long} betAmount
         * @memberof gamebase.JackpotUserDataDB
         * @instance
         */
        JackpotUserDataDB.prototype.betAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotUserDataDB last_win_count.
         * @member {number} last_win_count
         * @memberof gamebase.JackpotUserDataDB
         * @instance
         */
        JackpotUserDataDB.prototype.last_win_count = 0;

        /**
         * Creates a new JackpotUserDataDB instance using the specified properties.
         * @function create
         * @memberof gamebase.JackpotUserDataDB
         * @static
         * @param {gamebase.IJackpotUserDataDB=} [properties] Properties to set
         * @returns {gamebase.JackpotUserDataDB} JackpotUserDataDB instance
         */
        JackpotUserDataDB.create = function create(properties) {
            return new JackpotUserDataDB(properties);
        };

        /**
         * Encodes the specified JackpotUserDataDB message. Does not implicitly {@link gamebase.JackpotUserDataDB.verify|verify} messages.
         * @function encode
         * @memberof gamebase.JackpotUserDataDB
         * @static
         * @param {gamebase.IJackpotUserDataDB} message JackpotUserDataDB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotUserDataDB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
            if (message.win_count != null && Object.hasOwnProperty.call(message, "win_count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.win_count);
            if (message.curBalance != null && Object.hasOwnProperty.call(message, "curBalance"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.curBalance);
            if (message.endTimeStamp != null && Object.hasOwnProperty.call(message, "endTimeStamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.endTimeStamp);
            if (message.totalReward != null && Object.hasOwnProperty.call(message, "totalReward"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.totalReward);
            if (message.maxReward != null && Object.hasOwnProperty.call(message, "maxReward"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.maxReward);
            if (message.userRewardList != null && message.userRewardList.length)
                for (var i = 0; i < message.userRewardList.length; ++i)
                    $root.gamebase.UserJackReward.encode(message.userRewardList[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.winList != null && message.winList.length) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                for (var i = 0; i < message.winList.length; ++i)
                    writer.int64(message.winList[i]);
                writer.ldelim();
            }
            if (message.betAmount != null && Object.hasOwnProperty.call(message, "betAmount"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.betAmount);
            if (message.last_win_count != null && Object.hasOwnProperty.call(message, "last_win_count"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.last_win_count);
            return writer;
        };

        /**
         * Encodes the specified JackpotUserDataDB message, length delimited. Does not implicitly {@link gamebase.JackpotUserDataDB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.JackpotUserDataDB
         * @static
         * @param {gamebase.IJackpotUserDataDB} message JackpotUserDataDB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotUserDataDB.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotUserDataDB message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.JackpotUserDataDB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.JackpotUserDataDB} JackpotUserDataDB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotUserDataDB.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.JackpotUserDataDB();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    message.win_count = reader.int32();
                    break;
                case 3:
                    message.curBalance = reader.int64();
                    break;
                case 4:
                    message.endTimeStamp = reader.int32();
                    break;
                case 5:
                    message.totalReward = reader.int64();
                    break;
                case 6:
                    message.maxReward = reader.int64();
                    break;
                case 7:
                    if (!(message.userRewardList && message.userRewardList.length))
                        message.userRewardList = [];
                    message.userRewardList.push($root.gamebase.UserJackReward.decode(reader, reader.uint32()));
                    break;
                case 8:
                    if (!(message.winList && message.winList.length))
                        message.winList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.winList.push(reader.int64());
                    } else
                        message.winList.push(reader.int64());
                    break;
                case 9:
                    message.betAmount = reader.int64();
                    break;
                case 10:
                    message.last_win_count = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotUserDataDB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.JackpotUserDataDB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.JackpotUserDataDB} JackpotUserDataDB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotUserDataDB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotUserDataDB message.
         * @function verify
         * @memberof gamebase.JackpotUserDataDB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotUserDataDB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.win_count != null && message.hasOwnProperty("win_count"))
                if (!$util.isInteger(message.win_count))
                    return "win_count: integer expected";
            if (message.curBalance != null && message.hasOwnProperty("curBalance"))
                if (!$util.isInteger(message.curBalance) && !(message.curBalance && $util.isInteger(message.curBalance.low) && $util.isInteger(message.curBalance.high)))
                    return "curBalance: integer|Long expected";
            if (message.endTimeStamp != null && message.hasOwnProperty("endTimeStamp"))
                if (!$util.isInteger(message.endTimeStamp))
                    return "endTimeStamp: integer expected";
            if (message.totalReward != null && message.hasOwnProperty("totalReward"))
                if (!$util.isInteger(message.totalReward) && !(message.totalReward && $util.isInteger(message.totalReward.low) && $util.isInteger(message.totalReward.high)))
                    return "totalReward: integer|Long expected";
            if (message.maxReward != null && message.hasOwnProperty("maxReward"))
                if (!$util.isInteger(message.maxReward) && !(message.maxReward && $util.isInteger(message.maxReward.low) && $util.isInteger(message.maxReward.high)))
                    return "maxReward: integer|Long expected";
            if (message.userRewardList != null && message.hasOwnProperty("userRewardList")) {
                if (!Array.isArray(message.userRewardList))
                    return "userRewardList: array expected";
                for (var i = 0; i < message.userRewardList.length; ++i) {
                    var error = $root.gamebase.UserJackReward.verify(message.userRewardList[i]);
                    if (error)
                        return "userRewardList." + error;
                }
            }
            if (message.winList != null && message.hasOwnProperty("winList")) {
                if (!Array.isArray(message.winList))
                    return "winList: array expected";
                for (var i = 0; i < message.winList.length; ++i)
                    if (!$util.isInteger(message.winList[i]) && !(message.winList[i] && $util.isInteger(message.winList[i].low) && $util.isInteger(message.winList[i].high)))
                        return "winList: integer|Long[] expected";
            }
            if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                if (!$util.isInteger(message.betAmount) && !(message.betAmount && $util.isInteger(message.betAmount.low) && $util.isInteger(message.betAmount.high)))
                    return "betAmount: integer|Long expected";
            if (message.last_win_count != null && message.hasOwnProperty("last_win_count"))
                if (!$util.isInteger(message.last_win_count))
                    return "last_win_count: integer expected";
            return null;
        };

        /**
         * Creates a JackpotUserDataDB message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.JackpotUserDataDB
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.JackpotUserDataDB} JackpotUserDataDB
         */
        JackpotUserDataDB.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.JackpotUserDataDB)
                return object;
            var message = new $root.gamebase.JackpotUserDataDB();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.win_count != null)
                message.win_count = object.win_count | 0;
            if (object.curBalance != null)
                if ($util.Long)
                    (message.curBalance = $util.Long.fromValue(object.curBalance)).unsigned = false;
                else if (typeof object.curBalance === "string")
                    message.curBalance = parseInt(object.curBalance, 10);
                else if (typeof object.curBalance === "number")
                    message.curBalance = object.curBalance;
                else if (typeof object.curBalance === "object")
                    message.curBalance = new $util.LongBits(object.curBalance.low >>> 0, object.curBalance.high >>> 0).toNumber();
            if (object.endTimeStamp != null)
                message.endTimeStamp = object.endTimeStamp | 0;
            if (object.totalReward != null)
                if ($util.Long)
                    (message.totalReward = $util.Long.fromValue(object.totalReward)).unsigned = false;
                else if (typeof object.totalReward === "string")
                    message.totalReward = parseInt(object.totalReward, 10);
                else if (typeof object.totalReward === "number")
                    message.totalReward = object.totalReward;
                else if (typeof object.totalReward === "object")
                    message.totalReward = new $util.LongBits(object.totalReward.low >>> 0, object.totalReward.high >>> 0).toNumber();
            if (object.maxReward != null)
                if ($util.Long)
                    (message.maxReward = $util.Long.fromValue(object.maxReward)).unsigned = false;
                else if (typeof object.maxReward === "string")
                    message.maxReward = parseInt(object.maxReward, 10);
                else if (typeof object.maxReward === "number")
                    message.maxReward = object.maxReward;
                else if (typeof object.maxReward === "object")
                    message.maxReward = new $util.LongBits(object.maxReward.low >>> 0, object.maxReward.high >>> 0).toNumber();
            if (object.userRewardList) {
                if (!Array.isArray(object.userRewardList))
                    throw TypeError(".gamebase.JackpotUserDataDB.userRewardList: array expected");
                message.userRewardList = [];
                for (var i = 0; i < object.userRewardList.length; ++i) {
                    if (typeof object.userRewardList[i] !== "object")
                        throw TypeError(".gamebase.JackpotUserDataDB.userRewardList: object expected");
                    message.userRewardList[i] = $root.gamebase.UserJackReward.fromObject(object.userRewardList[i]);
                }
            }
            if (object.winList) {
                if (!Array.isArray(object.winList))
                    throw TypeError(".gamebase.JackpotUserDataDB.winList: array expected");
                message.winList = [];
                for (var i = 0; i < object.winList.length; ++i)
                    if ($util.Long)
                        (message.winList[i] = $util.Long.fromValue(object.winList[i])).unsigned = false;
                    else if (typeof object.winList[i] === "string")
                        message.winList[i] = parseInt(object.winList[i], 10);
                    else if (typeof object.winList[i] === "number")
                        message.winList[i] = object.winList[i];
                    else if (typeof object.winList[i] === "object")
                        message.winList[i] = new $util.LongBits(object.winList[i].low >>> 0, object.winList[i].high >>> 0).toNumber();
            }
            if (object.betAmount != null)
                if ($util.Long)
                    (message.betAmount = $util.Long.fromValue(object.betAmount)).unsigned = false;
                else if (typeof object.betAmount === "string")
                    message.betAmount = parseInt(object.betAmount, 10);
                else if (typeof object.betAmount === "number")
                    message.betAmount = object.betAmount;
                else if (typeof object.betAmount === "object")
                    message.betAmount = new $util.LongBits(object.betAmount.low >>> 0, object.betAmount.high >>> 0).toNumber();
            if (object.last_win_count != null)
                message.last_win_count = object.last_win_count | 0;
            return message;
        };

        /**
         * Creates a plain object from a JackpotUserDataDB message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.JackpotUserDataDB
         * @static
         * @param {gamebase.JackpotUserDataDB} message JackpotUserDataDB
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotUserDataDB.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.userRewardList = [];
                object.winList = [];
            }
            if (options.defaults) {
                object.uid = 0;
                object.win_count = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.curBalance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.curBalance = options.longs === String ? "0" : 0;
                object.endTimeStamp = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.totalReward = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalReward = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.maxReward = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maxReward = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.betAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.betAmount = options.longs === String ? "0" : 0;
                object.last_win_count = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.win_count != null && message.hasOwnProperty("win_count"))
                object.win_count = message.win_count;
            if (message.curBalance != null && message.hasOwnProperty("curBalance"))
                if (typeof message.curBalance === "number")
                    object.curBalance = options.longs === String ? String(message.curBalance) : message.curBalance;
                else
                    object.curBalance = options.longs === String ? $util.Long.prototype.toString.call(message.curBalance) : options.longs === Number ? new $util.LongBits(message.curBalance.low >>> 0, message.curBalance.high >>> 0).toNumber() : message.curBalance;
            if (message.endTimeStamp != null && message.hasOwnProperty("endTimeStamp"))
                object.endTimeStamp = message.endTimeStamp;
            if (message.totalReward != null && message.hasOwnProperty("totalReward"))
                if (typeof message.totalReward === "number")
                    object.totalReward = options.longs === String ? String(message.totalReward) : message.totalReward;
                else
                    object.totalReward = options.longs === String ? $util.Long.prototype.toString.call(message.totalReward) : options.longs === Number ? new $util.LongBits(message.totalReward.low >>> 0, message.totalReward.high >>> 0).toNumber() : message.totalReward;
            if (message.maxReward != null && message.hasOwnProperty("maxReward"))
                if (typeof message.maxReward === "number")
                    object.maxReward = options.longs === String ? String(message.maxReward) : message.maxReward;
                else
                    object.maxReward = options.longs === String ? $util.Long.prototype.toString.call(message.maxReward) : options.longs === Number ? new $util.LongBits(message.maxReward.low >>> 0, message.maxReward.high >>> 0).toNumber() : message.maxReward;
            if (message.userRewardList && message.userRewardList.length) {
                object.userRewardList = [];
                for (var j = 0; j < message.userRewardList.length; ++j)
                    object.userRewardList[j] = $root.gamebase.UserJackReward.toObject(message.userRewardList[j], options);
            }
            if (message.winList && message.winList.length) {
                object.winList = [];
                for (var j = 0; j < message.winList.length; ++j)
                    if (typeof message.winList[j] === "number")
                        object.winList[j] = options.longs === String ? String(message.winList[j]) : message.winList[j];
                    else
                        object.winList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.winList[j]) : options.longs === Number ? new $util.LongBits(message.winList[j].low >>> 0, message.winList[j].high >>> 0).toNumber() : message.winList[j];
            }
            if (message.betAmount != null && message.hasOwnProperty("betAmount"))
                if (typeof message.betAmount === "number")
                    object.betAmount = options.longs === String ? String(message.betAmount) : message.betAmount;
                else
                    object.betAmount = options.longs === String ? $util.Long.prototype.toString.call(message.betAmount) : options.longs === Number ? new $util.LongBits(message.betAmount.low >>> 0, message.betAmount.high >>> 0).toNumber() : message.betAmount;
            if (message.last_win_count != null && message.hasOwnProperty("last_win_count"))
                object.last_win_count = message.last_win_count;
            return object;
        };

        /**
         * Converts this JackpotUserDataDB to JSON.
         * @function toJSON
         * @memberof gamebase.JackpotUserDataDB
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotUserDataDB.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotUserDataDB;
    })();

    gamebase.JackpotDataDB = (function() {

        /**
         * Properties of a JackpotDataDB.
         * @memberof gamebase
         * @interface IJackpotDataDB
         * @property {Array.<gamebase.IRewardRecord>|null} [rewarRecordList] JackpotDataDB rewarRecordList
         */

        /**
         * Constructs a new JackpotDataDB.
         * @memberof gamebase
         * @classdesc Represents a JackpotDataDB.
         * @implements IJackpotDataDB
         * @constructor
         * @param {gamebase.IJackpotDataDB=} [properties] Properties to set
         */
        function JackpotDataDB(properties) {
            this.rewarRecordList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JackpotDataDB rewarRecordList.
         * @member {Array.<gamebase.IRewardRecord>} rewarRecordList
         * @memberof gamebase.JackpotDataDB
         * @instance
         */
        JackpotDataDB.prototype.rewarRecordList = $util.emptyArray;

        /**
         * Creates a new JackpotDataDB instance using the specified properties.
         * @function create
         * @memberof gamebase.JackpotDataDB
         * @static
         * @param {gamebase.IJackpotDataDB=} [properties] Properties to set
         * @returns {gamebase.JackpotDataDB} JackpotDataDB instance
         */
        JackpotDataDB.create = function create(properties) {
            return new JackpotDataDB(properties);
        };

        /**
         * Encodes the specified JackpotDataDB message. Does not implicitly {@link gamebase.JackpotDataDB.verify|verify} messages.
         * @function encode
         * @memberof gamebase.JackpotDataDB
         * @static
         * @param {gamebase.IJackpotDataDB} message JackpotDataDB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotDataDB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rewarRecordList != null && message.rewarRecordList.length)
                for (var i = 0; i < message.rewarRecordList.length; ++i)
                    $root.gamebase.RewardRecord.encode(message.rewarRecordList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JackpotDataDB message, length delimited. Does not implicitly {@link gamebase.JackpotDataDB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.JackpotDataDB
         * @static
         * @param {gamebase.IJackpotDataDB} message JackpotDataDB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotDataDB.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotDataDB message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.JackpotDataDB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.JackpotDataDB} JackpotDataDB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotDataDB.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.JackpotDataDB();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.rewarRecordList && message.rewarRecordList.length))
                        message.rewarRecordList = [];
                    message.rewarRecordList.push($root.gamebase.RewardRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotDataDB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.JackpotDataDB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.JackpotDataDB} JackpotDataDB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotDataDB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotDataDB message.
         * @function verify
         * @memberof gamebase.JackpotDataDB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotDataDB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rewarRecordList != null && message.hasOwnProperty("rewarRecordList")) {
                if (!Array.isArray(message.rewarRecordList))
                    return "rewarRecordList: array expected";
                for (var i = 0; i < message.rewarRecordList.length; ++i) {
                    var error = $root.gamebase.RewardRecord.verify(message.rewarRecordList[i]);
                    if (error)
                        return "rewarRecordList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JackpotDataDB message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.JackpotDataDB
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.JackpotDataDB} JackpotDataDB
         */
        JackpotDataDB.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.JackpotDataDB)
                return object;
            var message = new $root.gamebase.JackpotDataDB();
            if (object.rewarRecordList) {
                if (!Array.isArray(object.rewarRecordList))
                    throw TypeError(".gamebase.JackpotDataDB.rewarRecordList: array expected");
                message.rewarRecordList = [];
                for (var i = 0; i < object.rewarRecordList.length; ++i) {
                    if (typeof object.rewarRecordList[i] !== "object")
                        throw TypeError(".gamebase.JackpotDataDB.rewarRecordList: object expected");
                    message.rewarRecordList[i] = $root.gamebase.RewardRecord.fromObject(object.rewarRecordList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JackpotDataDB message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.JackpotDataDB
         * @static
         * @param {gamebase.JackpotDataDB} message JackpotDataDB
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotDataDB.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.rewarRecordList = [];
            if (message.rewarRecordList && message.rewarRecordList.length) {
                object.rewarRecordList = [];
                for (var j = 0; j < message.rewarRecordList.length; ++j)
                    object.rewarRecordList[j] = $root.gamebase.RewardRecord.toObject(message.rewarRecordList[j], options);
            }
            return object;
        };

        /**
         * Converts this JackpotDataDB to JSON.
         * @function toJSON
         * @memberof gamebase.JackpotDataDB
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotDataDB.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotDataDB;
    })();

    /**
     * CC_SHARE_TYPE enum.
     * @name gamebase.CC_SHARE_TYPE
     * @enum {number}
     * @property {number} CC_SHARE_TYPE_NULL=0 CC_SHARE_TYPE_NULL value
     * @property {number} CC_SHARE_TYPE_JACKPOT=1 CC_SHARE_TYPE_JACKPOT value
     */
    gamebase.CC_SHARE_TYPE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CC_SHARE_TYPE_NULL"] = 0;
        values[valuesById[1] = "CC_SHARE_TYPE_JACKPOT"] = 1;
        return values;
    })();

    gamebase.SharePosterReq = (function() {

        /**
         * Properties of a SharePosterReq.
         * @memberof gamebase
         * @interface ISharePosterReq
         * @property {number|null} [share_type] SharePosterReq share_type
         */

        /**
         * Constructs a new SharePosterReq.
         * @memberof gamebase
         * @classdesc Represents a SharePosterReq.
         * @implements ISharePosterReq
         * @constructor
         * @param {gamebase.ISharePosterReq=} [properties] Properties to set
         */
        function SharePosterReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SharePosterReq share_type.
         * @member {number} share_type
         * @memberof gamebase.SharePosterReq
         * @instance
         */
        SharePosterReq.prototype.share_type = 0;

        /**
         * Creates a new SharePosterReq instance using the specified properties.
         * @function create
         * @memberof gamebase.SharePosterReq
         * @static
         * @param {gamebase.ISharePosterReq=} [properties] Properties to set
         * @returns {gamebase.SharePosterReq} SharePosterReq instance
         */
        SharePosterReq.create = function create(properties) {
            return new SharePosterReq(properties);
        };

        /**
         * Encodes the specified SharePosterReq message. Does not implicitly {@link gamebase.SharePosterReq.verify|verify} messages.
         * @function encode
         * @memberof gamebase.SharePosterReq
         * @static
         * @param {gamebase.ISharePosterReq} message SharePosterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SharePosterReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.share_type != null && Object.hasOwnProperty.call(message, "share_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.share_type);
            return writer;
        };

        /**
         * Encodes the specified SharePosterReq message, length delimited. Does not implicitly {@link gamebase.SharePosterReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.SharePosterReq
         * @static
         * @param {gamebase.ISharePosterReq} message SharePosterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SharePosterReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SharePosterReq message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.SharePosterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.SharePosterReq} SharePosterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SharePosterReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.SharePosterReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.share_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SharePosterReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.SharePosterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.SharePosterReq} SharePosterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SharePosterReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SharePosterReq message.
         * @function verify
         * @memberof gamebase.SharePosterReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SharePosterReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.share_type != null && message.hasOwnProperty("share_type"))
                if (!$util.isInteger(message.share_type))
                    return "share_type: integer expected";
            return null;
        };

        /**
         * Creates a SharePosterReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.SharePosterReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.SharePosterReq} SharePosterReq
         */
        SharePosterReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.SharePosterReq)
                return object;
            var message = new $root.gamebase.SharePosterReq();
            if (object.share_type != null)
                message.share_type = object.share_type | 0;
            return message;
        };

        /**
         * Creates a plain object from a SharePosterReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.SharePosterReq
         * @static
         * @param {gamebase.SharePosterReq} message SharePosterReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SharePosterReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.share_type = 0;
            if (message.share_type != null && message.hasOwnProperty("share_type"))
                object.share_type = message.share_type;
            return object;
        };

        /**
         * Converts this SharePosterReq to JSON.
         * @function toJSON
         * @memberof gamebase.SharePosterReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SharePosterReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SharePosterReq;
    })();

    gamebase.SharePosterResp = (function() {

        /**
         * Properties of a SharePosterResp.
         * @memberof gamebase
         * @interface ISharePosterResp
         * @property {number|null} [result] SharePosterResp result
         * @property {Array.<gamebase.SharePosterResp.IPoster>|null} [list] SharePosterResp list
         * @property {string|null} [share_url] SharePosterResp share_url
         * @property {string|null} [telegram] SharePosterResp telegram
         * @property {string|null} [whatsapp] SharePosterResp whatsapp
         * @property {number|null} [share_type] SharePosterResp share_type
         * @property {string|null} [title] SharePosterResp title
         */

        /**
         * Constructs a new SharePosterResp.
         * @memberof gamebase
         * @classdesc Represents a SharePosterResp.
         * @implements ISharePosterResp
         * @constructor
         * @param {gamebase.ISharePosterResp=} [properties] Properties to set
         */
        function SharePosterResp(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SharePosterResp result.
         * @member {number} result
         * @memberof gamebase.SharePosterResp
         * @instance
         */
        SharePosterResp.prototype.result = 0;

        /**
         * SharePosterResp list.
         * @member {Array.<gamebase.SharePosterResp.IPoster>} list
         * @memberof gamebase.SharePosterResp
         * @instance
         */
        SharePosterResp.prototype.list = $util.emptyArray;

        /**
         * SharePosterResp share_url.
         * @member {string} share_url
         * @memberof gamebase.SharePosterResp
         * @instance
         */
        SharePosterResp.prototype.share_url = "";

        /**
         * SharePosterResp telegram.
         * @member {string} telegram
         * @memberof gamebase.SharePosterResp
         * @instance
         */
        SharePosterResp.prototype.telegram = "";

        /**
         * SharePosterResp whatsapp.
         * @member {string} whatsapp
         * @memberof gamebase.SharePosterResp
         * @instance
         */
        SharePosterResp.prototype.whatsapp = "";

        /**
         * SharePosterResp share_type.
         * @member {number} share_type
         * @memberof gamebase.SharePosterResp
         * @instance
         */
        SharePosterResp.prototype.share_type = 0;

        /**
         * SharePosterResp title.
         * @member {string} title
         * @memberof gamebase.SharePosterResp
         * @instance
         */
        SharePosterResp.prototype.title = "";

        /**
         * Creates a new SharePosterResp instance using the specified properties.
         * @function create
         * @memberof gamebase.SharePosterResp
         * @static
         * @param {gamebase.ISharePosterResp=} [properties] Properties to set
         * @returns {gamebase.SharePosterResp} SharePosterResp instance
         */
        SharePosterResp.create = function create(properties) {
            return new SharePosterResp(properties);
        };

        /**
         * Encodes the specified SharePosterResp message. Does not implicitly {@link gamebase.SharePosterResp.verify|verify} messages.
         * @function encode
         * @memberof gamebase.SharePosterResp
         * @static
         * @param {gamebase.ISharePosterResp} message SharePosterResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SharePosterResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.gamebase.SharePosterResp.Poster.encode(message.list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.share_url != null && Object.hasOwnProperty.call(message, "share_url"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.share_url);
            if (message.telegram != null && Object.hasOwnProperty.call(message, "telegram"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.telegram);
            if (message.whatsapp != null && Object.hasOwnProperty.call(message, "whatsapp"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.whatsapp);
            if (message.share_type != null && Object.hasOwnProperty.call(message, "share_type"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.share_type);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.title);
            return writer;
        };

        /**
         * Encodes the specified SharePosterResp message, length delimited. Does not implicitly {@link gamebase.SharePosterResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.SharePosterResp
         * @static
         * @param {gamebase.ISharePosterResp} message SharePosterResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SharePosterResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SharePosterResp message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.SharePosterResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.SharePosterResp} SharePosterResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SharePosterResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.SharePosterResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.gamebase.SharePosterResp.Poster.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.share_url = reader.string();
                    break;
                case 4:
                    message.telegram = reader.string();
                    break;
                case 5:
                    message.whatsapp = reader.string();
                    break;
                case 6:
                    message.share_type = reader.int32();
                    break;
                case 7:
                    message.title = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SharePosterResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.SharePosterResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.SharePosterResp} SharePosterResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SharePosterResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SharePosterResp message.
         * @function verify
         * @memberof gamebase.SharePosterResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SharePosterResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.gamebase.SharePosterResp.Poster.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.share_url != null && message.hasOwnProperty("share_url"))
                if (!$util.isString(message.share_url))
                    return "share_url: string expected";
            if (message.telegram != null && message.hasOwnProperty("telegram"))
                if (!$util.isString(message.telegram))
                    return "telegram: string expected";
            if (message.whatsapp != null && message.hasOwnProperty("whatsapp"))
                if (!$util.isString(message.whatsapp))
                    return "whatsapp: string expected";
            if (message.share_type != null && message.hasOwnProperty("share_type"))
                if (!$util.isInteger(message.share_type))
                    return "share_type: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            return null;
        };

        /**
         * Creates a SharePosterResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.SharePosterResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.SharePosterResp} SharePosterResp
         */
        SharePosterResp.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.SharePosterResp)
                return object;
            var message = new $root.gamebase.SharePosterResp();
            if (object.result != null)
                message.result = object.result | 0;
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".gamebase.SharePosterResp.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".gamebase.SharePosterResp.list: object expected");
                    message.list[i] = $root.gamebase.SharePosterResp.Poster.fromObject(object.list[i]);
                }
            }
            if (object.share_url != null)
                message.share_url = String(object.share_url);
            if (object.telegram != null)
                message.telegram = String(object.telegram);
            if (object.whatsapp != null)
                message.whatsapp = String(object.whatsapp);
            if (object.share_type != null)
                message.share_type = object.share_type | 0;
            if (object.title != null)
                message.title = String(object.title);
            return message;
        };

        /**
         * Creates a plain object from a SharePosterResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.SharePosterResp
         * @static
         * @param {gamebase.SharePosterResp} message SharePosterResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SharePosterResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults) {
                object.result = 0;
                object.share_url = "";
                object.telegram = "";
                object.whatsapp = "";
                object.share_type = 0;
                object.title = "";
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.gamebase.SharePosterResp.Poster.toObject(message.list[j], options);
            }
            if (message.share_url != null && message.hasOwnProperty("share_url"))
                object.share_url = message.share_url;
            if (message.telegram != null && message.hasOwnProperty("telegram"))
                object.telegram = message.telegram;
            if (message.whatsapp != null && message.hasOwnProperty("whatsapp"))
                object.whatsapp = message.whatsapp;
            if (message.share_type != null && message.hasOwnProperty("share_type"))
                object.share_type = message.share_type;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            return object;
        };

        /**
         * Converts this SharePosterResp to JSON.
         * @function toJSON
         * @memberof gamebase.SharePosterResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SharePosterResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SharePosterResp.Poster = (function() {

            /**
             * Properties of a Poster.
             * @memberof gamebase.SharePosterResp
             * @interface IPoster
             * @property {number|null} [id] Poster id
             * @property {string|null} [url] Poster url
             */

            /**
             * Constructs a new Poster.
             * @memberof gamebase.SharePosterResp
             * @classdesc Represents a Poster.
             * @implements IPoster
             * @constructor
             * @param {gamebase.SharePosterResp.IPoster=} [properties] Properties to set
             */
            function Poster(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Poster id.
             * @member {number} id
             * @memberof gamebase.SharePosterResp.Poster
             * @instance
             */
            Poster.prototype.id = 0;

            /**
             * Poster url.
             * @member {string} url
             * @memberof gamebase.SharePosterResp.Poster
             * @instance
             */
            Poster.prototype.url = "";

            /**
             * Creates a new Poster instance using the specified properties.
             * @function create
             * @memberof gamebase.SharePosterResp.Poster
             * @static
             * @param {gamebase.SharePosterResp.IPoster=} [properties] Properties to set
             * @returns {gamebase.SharePosterResp.Poster} Poster instance
             */
            Poster.create = function create(properties) {
                return new Poster(properties);
            };

            /**
             * Encodes the specified Poster message. Does not implicitly {@link gamebase.SharePosterResp.Poster.verify|verify} messages.
             * @function encode
             * @memberof gamebase.SharePosterResp.Poster
             * @static
             * @param {gamebase.SharePosterResp.IPoster} message Poster message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Poster.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
                return writer;
            };

            /**
             * Encodes the specified Poster message, length delimited. Does not implicitly {@link gamebase.SharePosterResp.Poster.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gamebase.SharePosterResp.Poster
             * @static
             * @param {gamebase.SharePosterResp.IPoster} message Poster message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Poster.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Poster message from the specified reader or buffer.
             * @function decode
             * @memberof gamebase.SharePosterResp.Poster
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gamebase.SharePosterResp.Poster} Poster
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Poster.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.SharePosterResp.Poster();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.url = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Poster message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gamebase.SharePosterResp.Poster
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gamebase.SharePosterResp.Poster} Poster
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Poster.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Poster message.
             * @function verify
             * @memberof gamebase.SharePosterResp.Poster
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Poster.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.url != null && message.hasOwnProperty("url"))
                    if (!$util.isString(message.url))
                        return "url: string expected";
                return null;
            };

            /**
             * Creates a Poster message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gamebase.SharePosterResp.Poster
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gamebase.SharePosterResp.Poster} Poster
             */
            Poster.fromObject = function fromObject(object) {
                if (object instanceof $root.gamebase.SharePosterResp.Poster)
                    return object;
                var message = new $root.gamebase.SharePosterResp.Poster();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.url != null)
                    message.url = String(object.url);
                return message;
            };

            /**
             * Creates a plain object from a Poster message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gamebase.SharePosterResp.Poster
             * @static
             * @param {gamebase.SharePosterResp.Poster} message Poster
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Poster.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.url = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.url != null && message.hasOwnProperty("url"))
                    object.url = message.url;
                return object;
            };

            /**
             * Converts this Poster to JSON.
             * @function toJSON
             * @memberof gamebase.SharePosterResp.Poster
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Poster.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Poster;
        })();

        return SharePosterResp;
    })();

    gamebase.JackpotPoolChangePush = (function() {

        /**
         * Properties of a JackpotPoolChangePush.
         * @memberof gamebase
         * @interface IJackpotPoolChangePush
         * @property {number|Long|null} [reward_pool] JackpotPoolChangePush reward_pool
         */

        /**
         * Constructs a new JackpotPoolChangePush.
         * @memberof gamebase
         * @classdesc Represents a JackpotPoolChangePush.
         * @implements IJackpotPoolChangePush
         * @constructor
         * @param {gamebase.IJackpotPoolChangePush=} [properties] Properties to set
         */
        function JackpotPoolChangePush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JackpotPoolChangePush reward_pool.
         * @member {number|Long} reward_pool
         * @memberof gamebase.JackpotPoolChangePush
         * @instance
         */
        JackpotPoolChangePush.prototype.reward_pool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JackpotPoolChangePush instance using the specified properties.
         * @function create
         * @memberof gamebase.JackpotPoolChangePush
         * @static
         * @param {gamebase.IJackpotPoolChangePush=} [properties] Properties to set
         * @returns {gamebase.JackpotPoolChangePush} JackpotPoolChangePush instance
         */
        JackpotPoolChangePush.create = function create(properties) {
            return new JackpotPoolChangePush(properties);
        };

        /**
         * Encodes the specified JackpotPoolChangePush message. Does not implicitly {@link gamebase.JackpotPoolChangePush.verify|verify} messages.
         * @function encode
         * @memberof gamebase.JackpotPoolChangePush
         * @static
         * @param {gamebase.IJackpotPoolChangePush} message JackpotPoolChangePush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotPoolChangePush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reward_pool != null && Object.hasOwnProperty.call(message, "reward_pool"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.reward_pool);
            return writer;
        };

        /**
         * Encodes the specified JackpotPoolChangePush message, length delimited. Does not implicitly {@link gamebase.JackpotPoolChangePush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.JackpotPoolChangePush
         * @static
         * @param {gamebase.IJackpotPoolChangePush} message JackpotPoolChangePush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotPoolChangePush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotPoolChangePush message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.JackpotPoolChangePush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.JackpotPoolChangePush} JackpotPoolChangePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotPoolChangePush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.JackpotPoolChangePush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reward_pool = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotPoolChangePush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.JackpotPoolChangePush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.JackpotPoolChangePush} JackpotPoolChangePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotPoolChangePush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotPoolChangePush message.
         * @function verify
         * @memberof gamebase.JackpotPoolChangePush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotPoolChangePush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reward_pool != null && message.hasOwnProperty("reward_pool"))
                if (!$util.isInteger(message.reward_pool) && !(message.reward_pool && $util.isInteger(message.reward_pool.low) && $util.isInteger(message.reward_pool.high)))
                    return "reward_pool: integer|Long expected";
            return null;
        };

        /**
         * Creates a JackpotPoolChangePush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.JackpotPoolChangePush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.JackpotPoolChangePush} JackpotPoolChangePush
         */
        JackpotPoolChangePush.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.JackpotPoolChangePush)
                return object;
            var message = new $root.gamebase.JackpotPoolChangePush();
            if (object.reward_pool != null)
                if ($util.Long)
                    (message.reward_pool = $util.Long.fromValue(object.reward_pool)).unsigned = false;
                else if (typeof object.reward_pool === "string")
                    message.reward_pool = parseInt(object.reward_pool, 10);
                else if (typeof object.reward_pool === "number")
                    message.reward_pool = object.reward_pool;
                else if (typeof object.reward_pool === "object")
                    message.reward_pool = new $util.LongBits(object.reward_pool.low >>> 0, object.reward_pool.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a JackpotPoolChangePush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.JackpotPoolChangePush
         * @static
         * @param {gamebase.JackpotPoolChangePush} message JackpotPoolChangePush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotPoolChangePush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reward_pool = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reward_pool = options.longs === String ? "0" : 0;
            if (message.reward_pool != null && message.hasOwnProperty("reward_pool"))
                if (typeof message.reward_pool === "number")
                    object.reward_pool = options.longs === String ? String(message.reward_pool) : message.reward_pool;
                else
                    object.reward_pool = options.longs === String ? $util.Long.prototype.toString.call(message.reward_pool) : options.longs === Number ? new $util.LongBits(message.reward_pool.low >>> 0, message.reward_pool.high >>> 0).toNumber() : message.reward_pool;
            return object;
        };

        /**
         * Converts this JackpotPoolChangePush to JSON.
         * @function toJSON
         * @memberof gamebase.JackpotPoolChangePush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotPoolChangePush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotPoolChangePush;
    })();

    gamebase.GameNotificationPush = (function() {

        /**
         * Properties of a GameNotificationPush.
         * @memberof gamebase
         * @interface IGameNotificationPush
         * @property {gamebase.GameNotificationPush.ActionType|null} [action] GameNotificationPush action
         * @property {number|null} [param] GameNotificationPush param
         * @property {number|null} [param2] GameNotificationPush param2
         */

        /**
         * Constructs a new GameNotificationPush.
         * @memberof gamebase
         * @classdesc Represents a GameNotificationPush.
         * @implements IGameNotificationPush
         * @constructor
         * @param {gamebase.IGameNotificationPush=} [properties] Properties to set
         */
        function GameNotificationPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameNotificationPush action.
         * @member {gamebase.GameNotificationPush.ActionType} action
         * @memberof gamebase.GameNotificationPush
         * @instance
         */
        GameNotificationPush.prototype.action = 0;

        /**
         * GameNotificationPush param.
         * @member {number} param
         * @memberof gamebase.GameNotificationPush
         * @instance
         */
        GameNotificationPush.prototype.param = 0;

        /**
         * GameNotificationPush param2.
         * @member {number} param2
         * @memberof gamebase.GameNotificationPush
         * @instance
         */
        GameNotificationPush.prototype.param2 = 0;

        /**
         * Creates a new GameNotificationPush instance using the specified properties.
         * @function create
         * @memberof gamebase.GameNotificationPush
         * @static
         * @param {gamebase.IGameNotificationPush=} [properties] Properties to set
         * @returns {gamebase.GameNotificationPush} GameNotificationPush instance
         */
        GameNotificationPush.create = function create(properties) {
            return new GameNotificationPush(properties);
        };

        /**
         * Encodes the specified GameNotificationPush message. Does not implicitly {@link gamebase.GameNotificationPush.verify|verify} messages.
         * @function encode
         * @memberof gamebase.GameNotificationPush
         * @static
         * @param {gamebase.IGameNotificationPush} message GameNotificationPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameNotificationPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
            if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.param);
            if (message.param2 != null && Object.hasOwnProperty.call(message, "param2"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.param2);
            return writer;
        };

        /**
         * Encodes the specified GameNotificationPush message, length delimited. Does not implicitly {@link gamebase.GameNotificationPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gamebase.GameNotificationPush
         * @static
         * @param {gamebase.IGameNotificationPush} message GameNotificationPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameNotificationPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameNotificationPush message from the specified reader or buffer.
         * @function decode
         * @memberof gamebase.GameNotificationPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gamebase.GameNotificationPush} GameNotificationPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameNotificationPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamebase.GameNotificationPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.action = reader.int32();
                    break;
                case 2:
                    message.param = reader.int32();
                    break;
                case 3:
                    message.param2 = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameNotificationPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gamebase.GameNotificationPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gamebase.GameNotificationPush} GameNotificationPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameNotificationPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameNotificationPush message.
         * @function verify
         * @memberof gamebase.GameNotificationPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameNotificationPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action"))
                switch (message.action) {
                default:
                    return "action: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.param != null && message.hasOwnProperty("param"))
                if (!$util.isInteger(message.param))
                    return "param: integer expected";
            if (message.param2 != null && message.hasOwnProperty("param2"))
                if (!$util.isInteger(message.param2))
                    return "param2: integer expected";
            return null;
        };

        /**
         * Creates a GameNotificationPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gamebase.GameNotificationPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gamebase.GameNotificationPush} GameNotificationPush
         */
        GameNotificationPush.fromObject = function fromObject(object) {
            if (object instanceof $root.gamebase.GameNotificationPush)
                return object;
            var message = new $root.gamebase.GameNotificationPush();
            switch (object.action) {
            case "ACTION_OP_TIPS":
            case 0:
                message.action = 0;
                break;
            case "ACTION_OP_KICK":
            case 1:
                message.action = 1;
                break;
            }
            if (object.param != null)
                message.param = object.param | 0;
            if (object.param2 != null)
                message.param2 = object.param2 | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameNotificationPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gamebase.GameNotificationPush
         * @static
         * @param {gamebase.GameNotificationPush} message GameNotificationPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameNotificationPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.action = options.enums === String ? "ACTION_OP_TIPS" : 0;
                object.param = 0;
                object.param2 = 0;
            }
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = options.enums === String ? $root.gamebase.GameNotificationPush.ActionType[message.action] : message.action;
            if (message.param != null && message.hasOwnProperty("param"))
                object.param = message.param;
            if (message.param2 != null && message.hasOwnProperty("param2"))
                object.param2 = message.param2;
            return object;
        };

        /**
         * Converts this GameNotificationPush to JSON.
         * @function toJSON
         * @memberof gamebase.GameNotificationPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameNotificationPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ActionType enum.
         * @name gamebase.GameNotificationPush.ActionType
         * @enum {number}
         * @property {number} ACTION_OP_TIPS=0 ACTION_OP_TIPS value
         * @property {number} ACTION_OP_KICK=1 ACTION_OP_KICK value
         */
        GameNotificationPush.ActionType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ACTION_OP_TIPS"] = 0;
            values[valuesById[1] = "ACTION_OP_KICK"] = 1;
            return values;
        })();

        return GameNotificationPush;
    })();

    return gamebase;
})();

module.exports = $root;
