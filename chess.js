let chessboard = document.createElement("table");
chessboard.setAttribute("class", "center")

let head = document.querySelector("#title");
//alert("hello...")


let chessboardBackend = [["BR","BN","BB","BQ","BK","BB","BN","BR"],
                         ["BP","BP","BP","BP","BP","BP","BP","BP"],
                         [, , , , , , , ],
                         [, , , , , , , ],
                         [, , , , , , , ],
                         [, , , , , , , ],
                         ["WP","WP","WP","WP","WP","WP","WP","WP"],
                         ["WR","WN","WB","WQ","WK","WB","WN","WR"]];


let selected_cell=0;


let row;0
let cell;
for( let i=0; i<8; i++){
    row = chessboard.insertRow(-1);
    for(let j=0; j<8; j++){
        cell = row.insertCell(j);
        if((i+j)%2==0)
            cell.setAttribute("bgcolor", "#f3bc77" );
        else
            cell.setAttribute("bgcolor", "#a55233" );
        cell.setAttribute("class", chessboardBackend[i][j]);
        cell.setAttribute("id",`${i}${j}`);
        cell.addEventListener("click", movePiece)


        
    }
}


//head.append(chessboard);
document.body.appendChild(chessboard);


function update(){
    
    for(let i=0;i<8;i++)
        for(let j=0;i<8;j++)
        document.getElementById(`${i}${j}`).setAttribute("class", chessboardBackend[i][j]);
}


function movePiece(){
    if(selected_cell==0 && this.className!=="undefined"){
        selected_cell=this.id;
        this.setAttribute("style","outline: 3px solid red");
        return;
    }else if(selected_cell!=0){
        if(this.id==selected_cell)
        {
            document.getElementById(selected_cell).setAttribute("style","outline: 0px solid red");
            selected_cell = 0;
            return;
            
        }

        chessboardBackend[this.id[0]][this.id[1]]=chessboardBackend[selected_cell[0]][selected_cell[1]];
        chessboardBackend[selected_cell[0]][selected_cell[1]] = "undefined"
        this.setAttribute("class", chessboardBackend[this.id[0]][this.id[1]]);
        document.getElementById(selected_cell).setAttribute("class","")
        document.getElementById(selected_cell).setAttribute("style","outline: 0px solid red");
        selected_cell = 0;
       
       
    } 
}