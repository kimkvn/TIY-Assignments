module.exports.Chess = Chess;
module.exports.newPosition = newPosition;



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



function newPosition(x,y){
  /*
   * usage: new Position(1,1)
   * @property Number x coordinate
   * @property Number y coordinate
   */

   return {'x': x, 'y': y}


}; //END Position
