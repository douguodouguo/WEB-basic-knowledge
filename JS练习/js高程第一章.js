// "use strict" 严格模式。

/****************************************************************************************/

/*
 * 标识符的组成：数字、字母、_、$，开头第一个字符不能是数字。
 * js 语句使用 “ ; ” 结束。
 */

/****************************************************************************************/

//JS 变量的特性
/*
 * js 变量是松散型的，但是不建议在使用中去改变变量的数据类型。
 * js 未经初始化的变量都保存着同一个值 undefined 。
 */
var i;
console.log(i);// 输出 undefined

/*
 * 使用关键字 var 定义的变量为当前作用域下的局部变量，若是在全局作用域下定义的变量则为全局变量。
 * 在严格模式下不使用关键字 var 来定义变量会抛出 ReferenceError 错误。
 */

/****************************************************************************************/

// js 的数据类型：Undefined、Null、String、Boolean、Number、Object

// Undefined 类型
/*
 * Undefined 该数据类型只有一个值，就是其本身 undefined 。
 * 使用关键字 var 声明变量后却没有初始化时，这个变量的默认值就是 undefined 。
 * 多个未经初始化的变量之间是等价的，但是未初始化的变量和未声明的变量是不一样的。
 */

/*
 * typeof 操作符，用来检测变量的数据类型。
 * 对于未声明变量和未初始化变量使用 typeof 操作符存在的问题：都会返回 undefined 。
 */
var sf;
console.log(typeof sf);//输出 undefined
console.log(typeof ss);//输出 undefined

/*
 * 对于此类问题，建议在声明变量时就对变量进行初始化，只有这样在使用 typeof 操作符返回 undefined 时，
 * 才能判断该变量到底是未初始化还是未声明。
 */

/*****************************************************************************************/

// Null 类型
/*
 * Null 该数据类型同样只有一个值，就是其本身 null 。
 * Null 的作用是表示一个空对象指针，使用 typeof 操作符时，会返回 Object 。
 */
var car = null;
console.log(typeof car);//输出 Object

/*
 * 在 js 的逻辑里，undefined 值是派生自 null 值的，所以在对这两者进行相等操作判断的时候总会返回 true 。
 * 但是 undefined 和 null 的语义却完全不同！！！
 * undefined 存在的意义是在于判断变量是否有被声明。
 * null 的语义就是表明其初始化的变量保存的是一个空对象。
 * 所以只要是用来保存对象的变量还没有真正的保存对象时，就应该用 null 来初始化。
 */

/*****************************************************************************************/

// Boolean 类型
/*
 * Boolean 类型只有两个值：true 和 false 。
 * 对保存 boolean 值的变量使用 typeof 操作符会返回 Boolean 。
 * 区分大小写，并且这两个值不是字符串，不能加引号。
 */
var p = true;
console.log(typeof p);//输出 boolean

/*
 * Boolean 类型虽然只有两个值，但是在其他类型中有着相应的值与之对应。
 * 那么这就需要转换函数 Boolean() 将其转化为对应的 boolean 值。
 * 对于 String 类型：任何非空字符串--> ture ，空字符串--> false 。
 * 对于 Number 类型：任何非零数字值--> true ，0 和 NaN --> false 。
 * 对于 Object 类型：任何非空对象--> true ， Null --> false 。
 * 对于 Undefined 类型： undefined --> false 。
 */

/*
 *在流程控制语句中，会自动执行 Boolean() 。 
 */

var message = "hello";
if(message){
    console.log("hello world");
}

/*****************************************************************************************/

// Number 类型
/*
 * JS 支持多种进制：二进制、八进制、十进制、十六进制。
 * 但在运算当中实际上是以 十进制 作为基本运算进制的。
 * 浮点数：因为保存浮点数的内存是保存整数的两倍，所以 JS 会自动将可转化为整数的浮点数进行转化。
 * 浮点数的精度最高只有 17 位小数，并且计算精度也远不如整数。
 * 数值范围： 最大，Number.MAX_VALUE；最小，Number.MIN_VALUE。
 * isFinite() 函数方法用来判断一个数是否在最大值和最小值之间。
 */
var max = Number.MAX_VALUE, min = Number.MIN_VALUE;
console.log("最大值：" + max);
console.log("最小值：" + min);
if(min < 0){
    console.log("min最小");
}else{
    console.log("0最小");//这会是一个有意思的点
}

/*
 * NaN (NOT A NUMBER) 这是一个特殊的数值，用来表示一个本应该返回数值的操作数而未返回数值的情况。
 * 主要作用是在避免在未返回数值时抛出错误而导致程序终止。
 * isNaN() 判断一个变量保存的数是否为 NaN。
 * NaN 参与任何运算其返回的结果都是 NaN，并且 NaN 与任何数都不相等！包括他自己。 
 */
var ntan = NaN;
console.log(ntan == NaN);
console.log(isNaN(ntan));
console.log(isNaN(10));

/*
 * 数值转换
 * 方法一：Number()
 *  规则：undefined 转换为 NaN、null 转换为 0、Boolean 的 ture 转换为 1，false 转换为 0。
 *       对于 String 类型：只要包含又非数值字符的全转换为 NaN，其他按照十进制基本数值转换。
 *       对于 Object 类型：首先调用 valueOf() 方法，再按之前的规则转换，如果结果是 NaN，则
 *                        调用 toString() 方法后，在之前的规则转换。
 *  缺点：在转换 字符类型 时太过复杂不够合理       
 * 
 * 方法二：parseInt()
 *  规则：在转换字符串的时候，首先忽略字符串前的空格，只要是第一个非空格字符不是负号或者数字字符，
 *       就会返回 NaN ，直到解析完最后一个字符或者遇到第一个非数字字符。
 *  参数：parseInt("字符串",解析基数)
 *  parseInt() 已经不具备解析 八进制 数的能力了。
 * 
 * 方法三：parseFloat()
 *  规则：解析规则和 parseInt() 一样，但是只有第一个小数点是合法的，也就是说在第二个小数点或者一
 *       个非数字字符的时候会停止解析。
 *  参数：parseFloat() 只有解析十进制数的能力，所以只有一个参数就是带解析字符。
 */
var text = "025.4f";
console.log(Number(text));//输出 NaN ，因为包含非数字字符
console.log(parseInt(text,16));
console.log(parseInt(text));
console.log(parseFloat(text));

/****************************************************************************************/

// String 类型
/*
 * 用双引号或则单引号括起来的都是字符串。
 * 每一个字符串都拥有 length 属性，通过该属性可以访问获得字符串的长度。
 * JS 字符串的特点：不可改变
 */

/*
 * 字符转换
 * 方法一：toString()
 *  规则：把除了 undefined 和 null 之外的所有数据类型按字符串的形式表示出来。
 *       包括字符串类型也拥有这个方法，返回的是字符串的一个副本。
 * 
 * 方法二：String()
 *  规则：在 toString() 的基础上，可以将 undefined 的 null 都转换为字符串。
 */
var testU;
console.log(toString(testU));
console.log(String(testU));

/****************************************************************************************/

// Object 类型
/**
 * Object 类型是它所有实例的基础。
 * Object 类型所具有的任何属性和方法同样存在于更加具体的对象中。
 * 基本方法和属性：
 *  constructor：保存着用于创建当前对象的函数。
 * 
 *  hasOwnProperty("propertyName")：检查给定的属性是否存在于实例中。
 * 
 *  isPrototypeOf(Object)：用于检测传入的对象是否为当前实例的原型。
 *  
 *  propertyIsEnumerable("propertyName")：用于检测给定的属性能否用 for-in 来枚举。
 * 
 *  toLocaleString()：返回对象的字符串表示，字符串与执行环境对应。
 * 
 *  toString()：返回对象的字符串表示。
 * 
 *  valueOf()：返回对象的字符串表示、数值或布尔值表示，一般和 toString() 结果一样。
 */

 var car = null;
 car = {
     makeName : "红旗",
     age : 62,
 }

/****************************************************************************************/


