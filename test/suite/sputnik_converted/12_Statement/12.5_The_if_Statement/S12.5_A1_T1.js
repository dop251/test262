// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A1_T1;
* @section: 12.5;
* @assertion: 1, true, non-empty string in expression is evaluated to true;
* @description: Using "if" without "else" construction;
*/

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A1_T1",

path: "12_Statement\12.5_The_if_Statement\S12.5_A1_T1.js",

assertion: "1, true, non-empty string in expression is evaluated to true",

description: "Using \"if\" without \"else\" construction",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(!(1))
	$ERROR('#1: 1 in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(!(true))
	$ERROR('#2: true in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(!("1"))
	$ERROR('#3: "1" in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(!("A"))
	$ERROR('#4: "A" in expression is evaluated to true');
//
//////////////////////////////////////////////////////////////////////////////


 }
});

