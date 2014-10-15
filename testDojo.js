var assert = require('assert');

/**
* The conway function determines if a cell in
* Conway's Game of Life is alive or dead for a single tick, given
* the neighbors of that cell.
*/

function conway(cell, neighbors){
  var liveNeighbors = numberOfLiveNeighbors(neighbors);
  if (liveNeighbors >= 2){
    return true;
  }
  return false;
}

function numberOfLiveNeighbors(neighbors){

  var liveCells = 0;
  var index = 0;
  while ( index < neighbors.length ){
    if (neighbors[index] === true){
      liveCells++;
    }
    index++;
  }
  return liveCells;

function test_numberOfLiveNeighbors(neighbors , expected,
message){
  var actual = numberOfLiveNeighbors(neighbors);

  assert(actual === expected) || console.log(message);

}


test_numberOfLiveNeighbors([
    false, false, false,
    false,        false,
    false, false, false,
  ]), 0, 'no live neighbors');

test_numberOfLiveNeighbors([
  true, false, false,
  false,        false,
  false, false, false,
  ]) 1, '1 live neighbors');

test_numberOfLiveNeighbors([
  false, true, false,
  false,        false,
  false, false, false,
  ]) 1, '1 live neighbors (not [0])');

var cell = false,
    neighbors = [
      false, false, false,
      false,        false,
      false, false, false
    ];

assert.equal(conway(cell, neighbors), false,
'an empty board should remain empty') || console.log('pass!');

assert.equal(conway(true, neighbors), false,
  'a cell with no neighbors dies') || console.log('pass!');

neighbors = [
  false, true, false,
  false,       false,
  false, false, false,
];

assert.equal(conway(true, neighbors), false,
  'a cell with only 1 neighbor dies') || console.log('pass!');

neighbors = [
  true, true, false,
  false,       false,
  false, true, false,
];


assert.equal(conway(true, neighbors), true,
  'a cell with 2 neightbors survives'
);
