// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.4.2_A1_T2;
 * @section: 15.9.4.2;
 * @assertion: The Date property "parse" has { DontEnum } attributes;
 * @description: Checking absence of DontDelete attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.4.2_A1_T2",

path: "15_Native\15.9_Date_Objects\15.9.4_Properties_of_the_Date_Constructor\15.9.4.2_Date.parse\S15.9.4.2_A1_T2.js",

assertion: "The Date property \"parse\" has { DontEnum } attributes",

description: "Checking absence of DontDelete attribute",

test: function testcase() {
   if (delete Date.parse  === false) {
  $ERROR('#1: The Date.parse property has not the attributes DontDelete');
}

if (Date.hasOwnProperty('parse')) {
  $FAIL('#2: The Date.parse property has not the attributes DontDelete');
}


 }
});

