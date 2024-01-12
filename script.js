function initialize()
{
    clicks = 0;
    box1 = document.getElementById("box1");
    box2 = document.getElementById("box2");
    box3 = document.getElementById("box3");
    box4 = document.getElementById("box4");
    box5 = document.getElementById("box5");
    box6 = document.getElementById("box6");
    box7 = document.getElementById("box7");
    box8 = document.getElementById("box8");
    box9 = document.getElementById("box9");
    box10 = document.getElementById("box10");
    box11 = document.getElementById("box11");
    box12 = document.getElementById("box12");
    box13 = document.getElementById("box13");
    box14 = document.getElementById("box14");
    box15 = document.getElementById("box15");
    emptybox = document.getElementById("emptybox");
    emptycoords = [7,8,6,7];
    clickedbox = [0,0,0,0];
    temp = [0,0,0,0];
    console.log(clickedbox[0]);
}
function box1clicked()
{
    clickedbox[0] = box1.style.gridColumnStart;
    clickedbox[1] = box1.style.gridColumnEnd;
    clickedbox[2] = box1.style.gridRowStart;
    clickedbox[3] = box1.style.gridRowEnd;
    if(Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]))
    {
        console.log(clickedbox[0]);
        temp[0] = clickedbox[0];
        temp[1] = clickedbox[1];
        temp[2] = clickedbox[2];
        temp[3] = clickedbox[3];
        clickedbox[0] = emptycoords[0];
        clickedbox[1] = emptycoords[1];
        clickedbox[2] = emptycoords[2];
        clickedbox[3] = emptycoords[3];
        emptycoords[0] = temp[0];
        emptycoords[1] = temp[1];
        emptycoords[2] = temp[2];
        emptycoords[3] = temp[3];
        emptybox.style.gridColumnStart = emptycoords[0];
        emptybox.style.gridColumnEnd = emptycoords[1];
        emptybox.style.gridRowStart = emptycoords[2];
        emptybox.style.gridRowEnd = emptycoords[3];
        box1.style.gridColumnStart = clickedbox[0];
        box1.style.gridColumnEnd = clickedbox[1];
        box1.style.gridRowStart = clickedbox[2];
        box1.style.gridRowEnd = clickedbox[3];
    }
}
function box15clicked()
{
    clickedbox[0] = box15.style.gridColumnStart;
    clickedbox[1] = box15.style.gridColumnEnd;
    clickedbox[2] = box15.style.gridRowStart;
    clickedbox[3] = box15.style.gridRowEnd;
    if(Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]))
    {
        console.log(clickedbox[0]);
        temp[0] = clickedbox[0];
        temp[1] = clickedbox[1];
        temp[2] = clickedbox[2];
        temp[3] = clickedbox[3];
        clickedbox[0] = emptycoords[0];
        clickedbox[1] = emptycoords[1];
        clickedbox[2] = emptycoords[2];
        clickedbox[3] = emptycoords[3];
        emptycoords[0] = temp[0];
        emptycoords[1] = temp[1];
        emptycoords[2] = temp[2];
        emptycoords[3] = temp[3];
        emptybox.style.gridColumnStart = emptycoords[0];
        emptybox.style.gridColumnEnd = emptycoords[1];
        emptybox.style.gridRowStart = emptycoords[2];
        emptybox.style.gridRowEnd = emptycoords[3];
        box15.style.gridColumnStart = clickedbox[0];
        box15.style.gridColumnEnd = clickedbox[1];
        box15.style.gridRowStart = clickedbox[2];
        box15.style.gridRowEnd = clickedbox[3];
    }
}