


$('.wi')


function GetGridElementsPosition(index){
    //Get the css attribute grid-template-columns from the css of class grid
    //split on whitespace and get the length, this will give you how many columns
    const colCount = $('main').css('grid-template-columns').split(' ').length;

    const rowPosition = Math.floor(index / colCount);
    const colPosition = index % colCount;

    //Return an object with properties row and column
    return { row: rowPosition, column: colPosition } ;
}