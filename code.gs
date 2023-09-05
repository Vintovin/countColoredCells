function countColoredCells(countRange,color) {
  var activeRange = SpreadsheetApp.getActiveRange();
  var activeSheet = activeRange.getSheet();
  var formula = activeRange.getFormula();
  
  var rangeA1Notation = formula.match(/\((.*)\,/).pop();
  var range = activeSheet.getRange(rangeA1Notation);
  var bg = range.getBackgrounds();
  var values = range.getValues();
  var totalCells = bg.length * (bg[0] ? bg[0].length : 0); 

  
  var count = 0;
  
   for(var i=0;i<bg.length;i++)
    for(var j=0;j<bg[0].length;j++) {
      if(bg[i][j] === "#b7b7b7") {
        totalCells--;  // Subtract 1 from totalCells if the cell color is "#B7B7B7"
      } else if(bg[i][j] == color) {
        count++;
      }
    }

  if (totalCells === 0) {
    return "0.00%";  // Avoid division by zero.
  } else {
    return ((count / totalCells) * 100).toFixed(2) + "%";  // Returns the percentage with 2 decimal places and the percentage sign.
  }

  return count;
};
