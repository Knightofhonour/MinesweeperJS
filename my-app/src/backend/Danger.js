class Danger{

    static noOfRows = 0;
    static noOfCols= 0;
    static rows = [];

    static createRows(){
        for(var i=0;i<this.noOfRows;i++){
            var row = [];
            for(var j=0;j<this.noOfCols;j++){
                row.push(0);
            }
            this.rows.push(row);
        }
    }

    static getValue(row, col){
        return this.rows[row][col];
    }

    static getDanger(row, col){
        var sum = 0;
        sum += this.rows[row-1]?.[col-1]?this.rows[row-1][col-1]:0;
        sum += this.rows[row-1]?.[col]?this.rows[row-1][col]:0;
        sum += this.rows[row-1]?.[col+1]?this.rows[row-1][col+1]:0;
        sum += this.rows[row]?.[col-1]?this.rows[row][col-1]:0;
        sum += this.rows[row]?.[col+1]?this.rows[row][col+1]:0;
        sum += this.rows[row+1]?.[col-1]?this.rows[row+1][col-1]:0;
        sum += this.rows[row+1]?.[col]?this.rows[row+1][col]:0;
        sum += this.rows[row+1]?.[col+1]?this.rows[row+1][col+1]:0;
        return sum;
    }

    static changeValue(row, col, value){
        this.rows[row][col] = value;
    }
}
export default Danger;