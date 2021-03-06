//// [compoundExponentiationAssignmentLHSIsValue.ts]
// expected error for all the LHS of compound assignments (arithmetic and addition)
var value;

// this
class C {
    constructor() {
        this **= value;
    }
    foo() {
        this **= value;
    }
    static sfoo() {
        this **= value;
    }
}

function foo() {
    this **= value;
}

this **= value;

// identifiers: module, class, enum, function
module M { export var a; }
M **= value;

C **= value;

enum E { }
E **= value;

foo **= value;

// literals
null **= value;
true **= value;
false **= value;
0 **= value;
'' **= value;
/d+/ **= value;

// object literals
{ a: 0 } **= value;

// array literals
['', ''] **= value;

// super
class Derived extends C {
    constructor() {
        super();
        super **= value;
    }

    foo() {
        super **= value;
    }

    static sfoo() {
        super **= value;
    }
}

// function expression
function bar1() { } **= value;
() => { } **= value;

// function calls
foo() **= value;

// parentheses, the containted expression is value
(this) **= value;
(M) **= value;
(C) **= value;
(E) **= value;
(foo) **= value;
(null) **= value;
(true) **= value;
(0) **= value;
('') **= value;
(/d+/) **= value;
({}) **= value;
([]) **= value;
(function baz1() { }) **= value;
(foo()) **= value;

//// [compoundExponentiationAssignmentLHSIsValue.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// expected error for all the LHS of compound assignments (arithmetic and addition)
var value;
// this
var C = (function () {
    function C() {
        this = Math.pow(this, value);
    }
    C.prototype.foo = function () {
        this = Math.pow(this, value);
    };
    C.sfoo = function () {
        this = Math.pow(this, value);
    };
    return C;
})();
function foo() {
    this = Math.pow(this, value);
}
this = Math.pow(this, value);
// identifiers: module, class, enum, function
var M;
(function (M) {
})(M || (M = {}));
M = Math.pow(M, value);
C = Math.pow(C, value);
var E;
(function (E) {
})(E || (E = {}));
E = Math.pow(E, value);
foo = Math.pow(foo, value);
// literals
null = Math.pow(null, value);
true = Math.pow(true, value);
false = Math.pow(false, value);
0 = Math.pow(0, value);
'' = Math.pow('', value);
/d+/ = Math.pow(/d+/, value);
// object literals
{
    a: 0;
}
value;
// array literals
['', ''] = Math.pow(['', ''], value);
// super
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        _super.call(this);
        (_a = _super.prototype, _a. = Math.pow(_a., value));
        var _a;
    }
    Derived.prototype.foo = function () {
        (_a = _super.prototype, _a. = Math.pow(_a., value));
        var _a;
    };
    Derived.sfoo = function () {
        (_a = _super, _a. = Math.pow(_a., value));
        var _a;
    };
    return Derived;
})(C);
// function expression
function bar1() { }
value;
(function () { });
value;
// function calls
foo() = Math.pow(foo(), value);
// parentheses, the containted expression is value
(this) = Math.pow((this), value);
(M) = Math.pow((M), value);
(C) = Math.pow((C), value);
(E) = Math.pow((E), value);
(foo) = Math.pow((foo), value);
(null) = Math.pow((null), value);
(true) = Math.pow((true), value);
(0) = Math.pow((0), value);
('') = Math.pow((''), value);
(/d+/) = Math.pow((/d+/), value);
({}) = Math.pow(({}), value);
([]) = Math.pow(([]), value);
(function baz1() { }) = Math.pow((function baz1() { }), value);
(foo()) = Math.pow((foo()), value);
