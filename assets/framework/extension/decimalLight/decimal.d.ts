export default Decimal;

export namespace Decimal {
  export type Config = DecimalConfig;
  export type Constructor = DecimalConstructor;
  export type Instance = DecimalInstance;
  export type Modulo = DecimalModulo;
  export type Rounding = DecimalRounding;
  export type Value = DecimalValue;
}

declare global {
  const Decimal: DecimalConstructor;
  type Decimal = DecimalInstance;

  namespace Decimal {
    type Config = DecimalConfig;
    type Constructor = DecimalConstructor;
    type Instance = DecimalInstance;
    type Modulo = DecimalModulo;
    type Rounding = DecimalRounding;
    type Value = DecimalValue;
  }
}

type DecimalInstance = Decimal;
type DecimalConstructor = typeof Decimal;
type DecimalValue = string | number | Decimal;
type DecimalRounding = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type DecimalModulo = DecimalRounding | 9;


export interface DecimalConfig {
  precision?: number;
  rounding?: number;
  toExpNeg?: number;
  toExpPos?: number;
  LN10?: Numeric;
}

export type Numeric = string | number | Decimal;


export declare class Decimal {
  /**
  *Decimal构造函数和导出的函数。
  *返回一个新的Decimal实例。
  *
  *@param value｛number | string | Decimal｝一个数值。
  *
  */
  constructor(value: Numeric)

  /**
  *返回一个新的Decimal，其值为该Decimal的绝对值。
  */
  absoluteValue(): Decimal;

  /**
  *返回一个新的Decimal，其值为该Decimal的绝对值。
  */
  abs(): Decimal;

  /**
   * 比大小:
   * 返回:
   *  1，如果这个Decimal的值大于“y”的值，
   * -1如果这个Decimal的值小于“y”的值，
   * 如果它们具有相同的值，则为0
  */
  comparedTo(y: Numeric): 1 | 0 | -1;

  /**
  *返回
  *1，如果这个Decimal的值大于“y”的值，
  *-1如果这个Decimal的值小于“y”的值，
  *如果它们具有相同的值，则为0
  */
  cmp(y: Numeric): 1 | 0 | -1;

  /**
   *返回此decimal值的小数位数。
   */
  decimalPlaces(): number;

  /**
   *返回此decimal值的小数位数。
   */
  dp(): number;

  /**
  *返回一个新的Decimal，其值是此Decimal的值除以“y”，截断为
  *“精度”有效数字。
  *
  */
  dividedBy(y: Numeric): Decimal;

  /**
  *返回一个新的Decimal，其值是此Decimal的值除以“y”，截断为
  *“精度”有效数字。
  *
  */
  div(y: Numeric): Decimal;

  /**
  *返回一个新的Decimal，其值是该Decimal值的整数部分
  *由“y”的值截断为“精度”有效数字。
  *
  */
  dividedToIntegerBy(y: Numeric): Decimal;

  /**
  *返回一个新的Decimal，其值是该Decimal值的整数部分
  *由“y”的值截断为“精度”有效数字。
  *
  */
  idiv(y: Numeric): Decimal;

  /**
   * 如果此Decimal的值等于“y”的值，则返回true，否则返回false。
   */
  equals(y: Numeric): boolean;

  /**
   * 如果此Decimal的值等于“y”的值，则返回true，否则返回false。
   */
  eq(y: Numeric): boolean;

  /**
   *返回此Decimal的（以10为基数）指数值（this.e是以10000000为基数的指数）。
   */
  exponent(): number;

  /**
   * 如果此Decimal的值大于“y”的值，则返回true，否则返回
   * false.
   */
  greaterThan(y: Numeric): boolean;

  /**
   * 如果此Decimal的值大于“y”的值，则返回true，否则返回
   * false.
   */
  gt(y: Numeric): boolean;

  /**
   * 如果此Decimal的值大于或等于“y”的值，则返回true，
   * 否则返回false。
   *
   */
  greaterThanOrEqualTo(y: Numeric): boolean;

  /**
   * 如果此Decimal的值大于或等于“y”的值，则返回true，
   * 否则返回false。
   *
   */
  gte(y: Numeric): boolean;

  /**
   * 如果此Decimal的值是整数，则返回true，否则返回false。
   *
   */
  isInteger(): boolean;

  /**
   * 如果此Decimal的值是整数，则返回true，否则返回false。
   *
   */
  isint(): boolean;

  /**
   * 如果此Decimal的值为负数，则返回true，否则返回false。
   */
  isNegative(): boolean;

  /**
   * 如果此Decimal的值为负数，则返回true，否则返回false。
   */
  isneg(): boolean;

  /**
   * 如果此Decimal的值为正，则返回true，否则返回false。
   * 注意:0也会返回false
   */
  isPositive(): boolean;

  /**
   * 如果此Decimal的值为正，则返回true，否则返回false。
   *
   */
  ispos(): boolean;

  /**
   * 如果此Decimal的值为0，则返回true，否则返回false。
   *
   */
  isZero(): boolean;

  /**
   * 如果此Decimal的值小于“y”，则返回true，否则返回false。
   *
   */
  lessThan(y: Numeric): boolean;

  /**
   * 如果此Decimal的值小于“y”，则返回true，否则返回false。
   *
   */
  lt(y: Numeric): boolean;

  /**
   * 如果此Decimal的值小于或等于“y”，则返回true，否则返回false。
   *
   */
  lessThanOrEqualTo(y: Numeric): boolean;

  /**
   * 如果此Decimal的值小于或等于“y”，则返回true，否则返回false。
   *
   */
  lte(y: Numeric): boolean;

  /**
   *返回此Decimal值的对数到指定的基数，截断为
   *“精度”有效数字。
   *如果未指定基数，则返回log[10]（x）。
   *log[base]（x）=ln（x）/ln（base）
   *结果的最大误差为1 ulp（最后一位的单位）。
   */
  logarithm(base?: Numeric): Decimal;

  /**
   *返回此Decimal值的对数到指定的基数，截断为
   *“精度”有效数字。
   *如果未指定基数，则返回log[10]（x）。
   *log[base]（x）=ln（x）/ln（base）
   *结果的最大误差为1 ulp（最后一位的单位）。
   */
  log(base?: Numeric): Decimal;

  /**
   *返回一个新的Decimal，其值为该Decimal的值减去“y”，截断为
   *“精度”有效数字。
   *
   */
  minus(y: Numeric): Decimal;

  /**
   * 返回一个新的Decimal，其值为该Decimal的值减去“y”，截断为
   * `precision` significant digits.
   *
   */
  sub(y: Numeric): Decimal;

  /**
   * 取模运算:等价于 a%b
   *返回一个新的Decimal，其值为该Decimal模“y”的值，截断为
   *“精度”有效数字。
   *
   */
  modulo(y: Numeric): Decimal;

  /**
   * 取模运算:等价于 a%b
   *返回一个新的Decimal，其值为该Decimal模“y”的值，截断为
   *“精度”有效数字。
   *
   */
  mod(y: Numeric): Decimal;

  /**
  *返回一个新的Decimal，其值是该Decimal值的自然指数，
  *即，将基数e提高到该十进制值的幂，截断为“精度”`
  *有效数字。
   *
   */
  naturalExponetial(): Decimal;

  /**
   *返回一个新的Decimal，其值是该Decimal值的自然指数，
   *即，将基数e提高到该十进制值的幂，截断为“精度”`
   *有效数字。
   *
   */
  exp(): Decimal;

  /**
   *返回一个新的Decimal，其值为该Decimal值的自然对数，
   *截断为“精度”有效数字。
   *
   */
  naturalLogarithm(): Decimal;

  /**
   *返回一个新的Decimal，其值为该Decimal值的自然对数，
   *截断为“精度”有效数字。
   *
   */
  ln(): Decimal;

  /**
   * 返回一个新的Decimal，其值是该Decimal被否定的值，即乘以-1.
   *
   */
  negated(): Decimal;

  /**
   * 返回一个新的Decimal，其值是该Decimal被否定的值，即乘以-1.
   *
   */
  neg(): Decimal;

  /**
   *返回一个新的Decimal，其值是此Decimal的值加上“y”，截断为
   *“精度”有效数字。
   *
   */
  plus(y: Numeric): Decimal;

  /**
   *返回一个新的Decimal，其值是此Decimal的值加上“y”，截断为
   *“精度”有效数字。
   *
   */
  add(y: Numeric): Decimal;

  /**
   *返回此十进制值的有效位数。
   *@param zeros｛boolean | number｝是否计数整数部分后面的零：true、false、1或0。
   */
  precision(zeros: boolean | number): number;

  /**
   *返回此十进制值的有效位数。
   *@param zeros｛boolean | number｝是否计数整数部分后面的零：true、false、1或0。
   */
  sd(zeros: boolean | number): number;

  /**
   *返回一个新的Decimal，其值为该Decimal的平方根，截断为`precision` 有效数字。
   *
   */
  squareRoot(): Decimal;

  /**
   *返回一个新的Decimal，其值为该Decimal的平方根，截断为`precision` 有效数字。
   *
   */
  sqrt(): Decimal;

  /**
    *返回一个新的Decimal，其值是此Decimal乘以“y”的值，截断为
    *“精度”有效数字。
    *
   */
  times(y: Numeric): Decimal;

  /**
   *返回一个新的Decimal，其值是此Decimal乘以“y”的值，截断为
   *“精度”有效数字。
   *
   */
  mul(y: Numeric): Decimal;

  /**
   *返回一个新的Decimal，其值为该Decimal的值，四舍五入到最大值`dp`
   *使用舍入模式“rm”或省略“rm”时使用“舍入”的小数位数。
   *如果省略了“dp”，则返回一个新的Decimal，其值为该Decimal的值。
   *
   *@param dp｛number｝小数位数。整数，包括0到MAX_DIGITS。
   *@param rm｛number｝舍入模式。整数，包括0到8。
   */
  toDecimalPlaces(dp?: number, rm?: number): Decimal;

  /**
   *返回一个新的Decimal，其值为该Decimal的值，四舍五入到最大值`dp`
   *使用舍入模式“rm”或省略“rm”时使用“舍入”的小数位数。
   *如果省略了“dp”，则返回一个新的Decimal，其值为该Decimal的值。
   *
   *@param dp｛number｝小数位数。整数，包括0到MAX_DIGITS。
   *@param rm｛number｝舍入模式。整数，包括0到8。
   *
   */
  todp(dp?: number, rm?: number): Decimal;

  /**
   *返回一个字符串，该字符串以指数表示法表示此Decimal的值，四舍五入为
   *“dp”使用舍入模式“舍入”固定小数位数。
   *
   *@param dp｛number｝小数位数。整数，包括0到MAX_DIGITS。
   *@param rm｛number｝舍入模式。整数，包括0到8。
   */
  toExponential(dp?: number, rm?: number): string;

  /**
   *以正常（定点）表示法将表示此十进制值的字符串返回到
   *“dp”固定小数位数，如果“rm”为，则使用舍入模式“rm”或“舍入”进行舍入省略。
   *与JavaScript数字一样，（-0）.toFixed（0）是“0”，但例如（0.00001）.toFixed（0”是“-0”。
   *
   *@param dp｛number｝小数位数。整数，包括0到MAX_DIGITS。
   *@param rm｛number｝舍入模式。整数，包括0到8。
   *
   *（-0）.toFixed（0）是“0”，但（-0.1）.toFixed（1）是“-0”。
   *（-0）.toFixed（1）为“0.0”，但（-0.01）.toFixed（1”为“-0.0”。
   *（-0）.toFixed（3）为0.000。
   *
   */
  toFixed(dp?: number, rm?: number): string;

  /**
   *返回一个新的Decimal，其值是使用四舍五入到整数的此Decimal的值
   *舍入模式“舍入”。
   */
  toInteger(): Decimal;

  /**
   *返回一个新的Decimal，其值是使用四舍五入到整数的此Decimal的值
   *舍入模式“舍入”。
   *
   */
  toint(): Decimal;

  /**
   * 返回转换为数字基元的此Decimal的值。
   *
   */
  toNumber(): number;

  /**
    *返回一个新的Decimal，其值是该Decimal的值，
    *截断为“精度”有效数字。
    *对于非整数或非常大的指数，pow（x，y）使用
    *
    *x^y=exp（y*ln（x））
    *
    *最大误差为1 ulp（单位位于最后一位）。
    *
    *@param y｛number | string | Decimal｝这个Decimal的幂。
   */
  toPower(y: Numeric): Decimal;

  /**
   * Return a new Decimal whose value is the value of this Decimal raised to the power `y`,
   * truncated to `precision` significant digits.
   *
   * For non-integer or very large exponents pow(x, y) is calculated using
   *
   *   x^y = exp(y*ln(x))
   *
   * The maximum error is 1 ulp (unit in last place).
   *
   * @param y {number|string|Decimal} The power to which to raise this Decimal.
   *
   */
  pow(y: Numeric): Decimal;

  /**
   * Return a string representing the value of this Decimal rounded to `sd` significant digits
   * using rounding mode `rounding`.
   *
   * Return exponential notation if `sd` is less than the number of digits necessary to represent
   * the integer part of the value in normal notation.
   *
   * @param sd {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @param rm {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  toPrecision(sd?: number, rm?: number): string;

  /**
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
   * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
   * omitted.
   *
   * @param sd {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * @param rm {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  toSignificantDigits(sd?: number, rm?: number): Decimal;

  /**
   *返回一个新的Decimal，其值为该Decimal的值，四舍五入到最大值`sd`
   *使用舍入模式“rm”的有效数字，或分别转换为“精度”和“舍入”，如果 省略。
   *@param sd｛number｝有效数字。整数，从1到MAX_DIGITS（包括在内）。
   *@param rm｛number｝舍入模式。整数，包括0到8。
   *
   */
  tosd(sd?: number, rm?: number): Decimal;

  /**
    *返回表示此十进制值的字符串。
    *
    *如果此Decimal的正指数等于或大于，则返回指数表示法
    *“toExpPos”，或等于或小于“toExpNeg”的负指数。
  */
  toString(): string;

  /**
    *返回表示此十进制值的字符串。
    *
    *如果此Decimal的正指数等于或大于，则返回指数表示法
    *“toExpPos”，或等于或小于“toExpNeg”的负指数。
   *
   */
  valueOf(): string;

  /**
   * Return a string representing the value of this Decimal.
   *
   * Return exponential notation if this Decimal has a positive exponent equal to or greater than
   * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
   *
   */
  val(): string;

  /**
   * Return a string representing the value of this Decimal.
   *
   * Return exponential notation if this Decimal has a positive exponent equal to or greater than
   * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
   *
   */
  toJSON(): string;

  /**
   * Create and return a Decimal constructor with the same configuration properties as this Decimal
   * constructor.
   *
   * @param config? Config
   */
  static clone(config?: DecimalConfig): typeof Decimal;

  /**
   *为Decimal构造函数配置全局设置。
   */
  static config(config: DecimalConfig): Decimal;

  /**
   *为Decimal构造函数配置全局设置。
   */
  static set(config: DecimalConfig): Decimal;

  //计算或基数转换结果的最大有效位数。
  //例如`Decimal.config（{precision:20}）`
  static precision: number;

  //默认情况下由“toInteger”、“toDecimalPlaces”、“to Exponential”使用的舍入模式，
  //“toFixed”、“toPrecision”和“toSignificantDigits”。
  //
  //例如。
  //`Decimal.rounding=4`
  //`Decimal.rounding=十进制。ROUND_HALF_UP`
  static rounding: number;
  static readonly ROUND_UP: number;
  static readonly ROUND_DOWN: number;
  static readonly ROUND_CEIL: number;
  static readonly ROUND_FLOOR: number;
  static readonly ROUND_HALF_UP: number;
  static readonly ROUND_HALF_DOWN: number;
  static readonly ROUND_HALF_EVEN: number;
  static readonly ROUND_HALF_CEIL: number;
  static readonly ROUND_HALF_FLOOR: number;

  //“toString”返回指数表示法的指数值。
  //JavaScript数字：-7
  static toExpNeg: number;                          // 0 to -MAX_E

  //“toString”返回指数表示法的指数值。
  //JavaScript数字：21
  static toExpPos: number;                         // 0 to MAX_E

  //10的自然对数。
  static LN10: Decimal;
}

