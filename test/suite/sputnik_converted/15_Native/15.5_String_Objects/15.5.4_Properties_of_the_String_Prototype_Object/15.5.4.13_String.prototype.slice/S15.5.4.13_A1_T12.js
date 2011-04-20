// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.13_A1_T12;
* @section: 15.5.4.13;
* @assertion: String.prototype.slice (start, end);
* @description: Arguments are objects, and instance is string. 
* First object have overrided valueOf function and toString function, that return exception. 
* Second object have overrided valueOf function, that return exception;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.13_A1_T12",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.13_String.prototype.slice\S15.5.4.13_A1_T12.js",

assertion: "String.prototype.slice (start, end)",

description: "Arguments are objects, and instance is string.",

test: function testcase() {
   var __obj = {valueOf:function(){return {};}, toString:function(){throw "instart";}};
var __obj2 = {valueOf:function(){throw "inend";}};
var __str = new String("ABB\u0041BABAB");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
    try {
      var x = slice(__obj, __obj2);
      $FAIL('#1: "var x = slice(__obj,__obj2)" lead to throwing exception');
    } catch (e) {
      if (e!=="instart") {
        $ERROR('#1.1: Exception === "instart". Actual: '+e);
      }
    }
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

