function Chess(){

    /*
     * @return String either "white" or "black" representing current player
     */
  getPlayer: function(){

  },//END getPlayer

    /*
     * @param Piece, piece to move
     * @param Position, destination to move piece
     */
  move: function(piece, position){

  },//END move


    /*
     * Advance the board to the Catalan Opening, closed variation
     */
  opening: function(){

  },//END opening



    /*
     * @return String representation of the board
     */
  display: function(){

  },//END display

}; //END Chess



function Position(x,y){
  /*
   * usage: new Position(1,1)
   * @property Number x coordinate
   * @property Number y coordinate
   */


}; //END Position

function Piece(name, color){

  /*
   * usage new Piece('Queen', 'black')
   */


   // @return String name of Piece, e.g. 'Queen', 'Pawn'
   getName: function(){

   },




   /*
    *@return String player 'black' or 'white'
    * is a command, NO RETURNS
    */
   getColor: function(){

   },



   /*
    * Set piece to position on board
    * @param Position, position.
    * is a command, NO RETURNS
    */
   setPosition: function(){
   },




   /*
    * @return String representation of Piece
    * ex: "Q === String(new Piece("Queen", "white"))
    * ex: "r === String(new Piece("Rook", "black"))
    */
   toString: function(){

   },

}; //END Piece
