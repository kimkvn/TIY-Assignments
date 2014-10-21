module.exports.Chess = Chess;
module.exports.newPosition = newPosition;
module.exports.Piece = Piece;





/*
 * usage: new Position(1,1)
 * @property Number x coordinate
 * @property Number y coordinate
 */
function newPosition(x, y){
    return { "x" : x , "y" : y };

} //END newPosition




/**
 * @constructor Piece
 *
 * @param String name
 * @param String color
 *
 * @method getName
 * @method getColor
 * @method setPosition
 * @method toString
 */
function Piece(name, color){

  Piece.prototype.getName = function(name){
    return {'King': King}
  },

  Piece.prototype.getColor = function(color){

  },

}; //END Piece

console.log(Piece('King'))


function Chess(){

    /*
     * @return String either "white" or "black" representing current player
     */
  // getPlayer: function(){
  //
  // },//END getPlayer
  //
  //   /*
  //    * @param Piece, piece to move
  //    * @param Position, destination to move piece
  //    */
  // move: function(piece, position){
  //
  // },//END move
  //
  //
  //   /*
  //    * Advance the board to the Catalan Opening, closed variation
  //    */
  // opening: function(){
  //
  // },//END opening
  //
  //
  //
  //   /*
  //    * @return String representation of the board
  //    */
  // display: function(){
  //
  // },//END display

}; //END Chess
