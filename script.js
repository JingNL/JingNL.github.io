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
    moves = document.getElementById("moves");
    box1.style.gridColumnStart = 4;
    box1.style.gridColumnEnd = 5;
    box1.style.gridRowStart = 3;
    box1.style.gridRowEnd = 4;
    box2.style.gridColumnStart = 5;
    box2.style.gridColumnEnd = 6;
    box2.style.gridRowStart = 3;
    box2.style.gridRowEnd = 4;
    box3.style.gridColumnStart = 6;
    box3.style.gridColumnEnd = 7;
    box3.style.gridRowStart = 3;
    box3.style.gridRowEnd = 4;
    box4.style.gridColumnStart = 7;
    box4.style.gridColumnEnd = 8;
    box4.style.gridRowStart = 3;
    box4.style.gridRowEnd = 4;
    box5.style.gridColumnStart = 4;
    box5.style.gridColumnEnd = 5;
    box5.style.gridRowStart = 4;
    box5.style.gridRowEnd = 5;
    box6.style.gridColumnStart = 5;
    box6.style.gridColumnEnd = 6;
    box6.style.gridRowStart = 4;
    box6.style.gridRowEnd = 5;
    box7.style.gridColumnStart = 6;
    box7.style.gridColumnEnd = 7;
    box7.style.gridRowStart = 4;
    box7.style.gridRowEnd = 5;
    box8.style.gridColumnStart = 7;
    box8.style.gridColumnEnd = 8;
    box8.style.gridRowStart = 4;
    box8.style.gridRowEnd = 5;
    box9.style.gridColumnStart = 4;
    box9.style.gridColumnEnd = 5;
    box9.style.gridRowStart = 5;
    box9.style.gridRowEnd = 6;
    box10.style.gridColumnStart = 5;
    box10.style.gridColumnEnd = 6;
    box10.style.gridRowStart = 5;
    box10.style.gridRowEnd = 6;
    box11.style.gridColumnStart = 6;
    box11.style.gridColumnEnd = 7;
    box11.style.gridRowStart = 5;
    box11.style.gridRowEnd = 6;
    box12.style.gridColumnStart = 7;
    box12.style.gridColumnEnd = 8;
    box12.style.gridRowStart = 5;
    box12.style.gridRowEnd = 6;
    box13.style.gridColumnStart = 4;
    box13.style.gridColumnEnd = 5;
    box13.style.gridRowStart = 6;
    box13.style.gridRowEnd = 7;
    box14.style.gridColumnStart = 5;
    box14.style.gridColumnEnd = 6;
    box14.style.gridRowStart = 6;
    box14.style.gridRowEnd = 7;
    box15.style.gridColumnStart = 6;
    box15.style.gridColumnEnd = 7;
    box15.style.gridRowStart = 6;
    box15.style.gridRowEnd = 7;
    emptybox.style.gridColumnStart = 7;
    emptybox.style.gridColumnEnd = 8;
    emptybox.style.gridRowStart = 6;
    emptybox.style.gridRowEnd = 7;
    emptycoords = [7,8,6,7];
    clickedbox = [0,0,0,0];
    temp = [0,0,0,0];
    counting = false;
}
function complete()
{
    if(box1.style.gridColumnStart == 4 && box1.style.gridRowStart == 3)
    {
        if(box2.style.gridColumnStart == 5 && box2.style.gridRowStart == 3)
        {
            if(box3.style.gridColumnStart == 6 && box3.style.gridRowStart == 3)
            {
                if(box4.style.gridColumnStart == 7 && box4.style.gridRowStart == 3)
                {
                    if(box5.style.gridColumnStart == 4 && box5.style.gridRowStart == 4)
                    {
                        if(box6.style.gridColumnStart == 5 && box6.style.gridRowStart == 4)
                        {
                            if(box7.style.gridColumnStart == 6 && box7.style.gridRowStart == 4)
                            {
                                if(box8.style.gridColumnStart == 7 && box8.style.gridRowStart == 4)
                                {
                                    if(box9.style.gridColumnStart == 4 && box9.style.gridRowStart == 5)
                                    {
                                        if(box10.style.gridColumnStart == 5 && box10.style.gridRowStart == 5)
                                        {
                                            if(box11.style.gridColumnStart == 6 && box11.style.gridRowStart == 5)
                                            {
                                                if(box12.style.gridColumnStart == 7 && box12.style.gridRowStart == 5)
                                                {
                                                    if(box13.style.gridColumnStart == 4 && box13.style.gridRowStart == 6)
                                                    {
                                                        if(box14.style.gridColumnStart == 5 && box14.style.gridRowStart == 6)
                                                        {
                                                            if(box15.style.gridColumnStart == 6 && box15.style.gridRowStart == 6)
                                                            {
                                                                return true;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function start()
{
    counting = true;
    clicks = 0;
    moves.innerHTML = `Number of Moves: ${clicks}`;
}
function restart()
{
    counting = false;
}
function box1clicked()
{
    clickedbox[0] = box1.style.gridColumnStart;
    clickedbox[1] = box1.style.gridColumnEnd;
    clickedbox[2] = box1.style.gridRowStart;
    clickedbox[3] = box1.style.gridRowEnd;
    if((Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]) == 0) || (Math.abs(clickedbox[2]-emptycoords[2]) == 1 && Math.abs(clickedbox[0]-emptycoords[0]) == 0))
    {
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
        if(counting)
        {
            clicks += 1;
            moves.innerHTML = `Number of Moves: ${clicks}`;
            if(complete())
            {
                console.log(true);
            }
        }
    }
}
function box2clicked()
{
    clickedbox[0] = box2.style.gridColumnStart;
    clickedbox[1] = box2.style.gridColumnEnd;
    clickedbox[2] = box2.style.gridRowStart;
    clickedbox[3] = box2.style.gridRowEnd;
    if((Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]) == 0) || (Math.abs(clickedbox[2]-emptycoords[2]) == 1 && Math.abs(clickedbox[0]-emptycoords[0]) == 0))
    {
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
        box2.style.gridColumnStart = clickedbox[0];
        box2.style.gridColumnEnd = clickedbox[1];
        box2.style.gridRowStart = clickedbox[2];
        box2.style.gridRowEnd = clickedbox[3];
        if(counting)
        {
            clicks += 1;
            moves.innerHTML = `Number of Moves: ${clicks}`;
            if(complete())
            {
                console.log(true);
            }
        }
    }
}
function box3clicked()
{
    clickedbox[0] = box3.style.gridColumnStart;
    clickedbox[1] = box3.style.gridColumnEnd;
    clickedbox[2] = box3.style.gridRowStart;
    clickedbox[3] = box3.style.gridRowEnd;
    if((Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]) == 0) || (Math.abs(clickedbox[2]-emptycoords[2]) == 1 && Math.abs(clickedbox[0]-emptycoords[0]) == 0))
    {
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
        box3.style.gridColumnStart = clickedbox[0];
        box3.style.gridColumnEnd = clickedbox[1];
        box3.style.gridRowStart = clickedbox[2];
        box3.style.gridRowEnd = clickedbox[3];
        if(counting)
        {
            clicks += 1;
            moves.innerHTML = `Number of Moves: ${clicks}`;
            if(complete())
            {
                console.log(true);
            }
        }
    }
}
function box4clicked()
{
    clickedbox[0] = box4.style.gridColumnStart;
    clickedbox[1] = box4.style.gridColumnEnd;
    clickedbox[2] = box4.style.gridRowStart;
    clickedbox[3] = box4.style.gridRowEnd;
    if((Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]) == 0) || (Math.abs(clickedbox[2]-emptycoords[2]) == 1 && Math.abs(clickedbox[0]-emptycoords[0]) == 0))
    {
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
        box4.style.gridColumnStart = clickedbox[0];
        box4.style.gridColumnEnd = clickedbox[1];
        box4.style.gridRowStart = clickedbox[2];
        box4.style.gridRowEnd = clickedbox[3];
        if(counting)
        {
            clicks += 1;
            moves.innerHTML = `Number of Moves: ${clicks}`;
            if(complete())
            {
                console.log(true);
            }
        }
    }
}
function box5clicked()
{
    clickedbox[0] = box5.style.gridColumnStart;
    clickedbox[1] = box5.style.gridColumnEnd;
    clickedbox[2] = box5.style.gridRowStart;
    clickedbox[3] = box5.style.gridRowEnd;
    if((Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]) == 0) || (Math.abs(clickedbox[2]-emptycoords[2]) == 1 && Math.abs(clickedbox[0]-emptycoords[0]) == 0))
    {
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
        box5.style.gridColumnStart = clickedbox[0];
        box5.style.gridColumnEnd = clickedbox[1];
        box5.style.gridRowStart = clickedbox[2];
        box5.style.gridRowEnd = clickedbox[3];
        if(counting)
        {
            clicks += 1;
            moves.innerHTML = `Number of Moves: ${clicks}`;
            if(complete())
            {
                console.log(true);
            }
        }
    }
}
function box6clicked()
{
    clickedbox[0] = box6.style.gridColumnStart;
    clickedbox[1] = box6.style.gridColumnEnd;
    clickedbox[2] = box6.style.gridRowStart;
    clickedbox[3] = box6.style.gridRowEnd;
    if((Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]) == 0) || (Math.abs(clickedbox[2]-emptycoords[2]) == 1 && Math.abs(clickedbox[0]-emptycoords[0]) == 0))
    {
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
        box6.style.gridColumnStart = clickedbox[0];
        box6.style.gridColumnEnd = clickedbox[1];
        box6.style.gridRowStart = clickedbox[2];
        box6.style.gridRowEnd = clickedbox[3];
        if(counting)
        {
            clicks += 1;
            moves.innerHTML = `Number of Moves: ${clicks}`;
            if(complete())
            {
                console.log(true);
            }
        }
    }
}
function box7clicked()
{
    clickedbox[0] = box7.style.gridColumnStart;
    clickedbox[1] = box7.style.gridColumnEnd;
    clickedbox[2] = box7.style.gridRowStart;
    clickedbox[3] = box7.style.gridRowEnd;
    if((Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]) == 0) || (Math.abs(clickedbox[2]-emptycoords[2]) == 1 && Math.abs(clickedbox[0]-emptycoords[0]) == 0))
    {
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
        box7.style.gridColumnStart = clickedbox[0];
        box7.style.gridColumnEnd = clickedbox[1];
        box7.style.gridRowStart = clickedbox[2];
        box7.style.gridRowEnd = clickedbox[3];
        if(counting)
        {
            clicks += 1;
            moves.innerHTML = `Number of Moves: ${clicks}`;
            if(complete())
            {
                console.log(true);
            }
        }
    }
}
function box8clicked()
{
    clickedbox[0] = box8.style.gridColumnStart;
    clickedbox[1] = box8.style.gridColumnEnd;
    clickedbox[2] = box8.style.gridRowStart;
    clickedbox[3] = box8.style.gridRowEnd;
    if((Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]) == 0) || (Math.abs(clickedbox[2]-emptycoords[2]) == 1 && Math.abs(clickedbox[0]-emptycoords[0]) == 0))
    {
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
        box8.style.gridColumnStart = clickedbox[0];
        box8.style.gridColumnEnd = clickedbox[1];
        box8.style.gridRowStart = clickedbox[2];
        box8.style.gridRowEnd = clickedbox[3];
        if(counting)
        {
            clicks += 1;
            moves.innerHTML = `Number of Moves: ${clicks}`;
            if(complete())
            {
                console.log(true);
            }
        }
    }
}
function box9clicked()
{
    clickedbox[0] = box9.style.gridColumnStart;
    clickedbox[1] = box9.style.gridColumnEnd;
    clickedbox[2] = box9.style.gridRowStart;
    clickedbox[3] = box9.style.gridRowEnd;
    if((Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]) == 0) || (Math.abs(clickedbox[2]-emptycoords[2]) == 1 && Math.abs(clickedbox[0]-emptycoords[0]) == 0))
    {
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
        box9.style.gridColumnStart = clickedbox[0];
        box9.style.gridColumnEnd = clickedbox[1];
        box9.style.gridRowStart = clickedbox[2];
        box9.style.gridRowEnd = clickedbox[3];
        if(counting)
        {
            clicks += 1;
            moves.innerHTML = `Number of Moves: ${clicks}`;
            if(complete())
            {
                console.log(true);
            }
        }
    }
}
function box10clicked()
{
    clickedbox[0] = box10.style.gridColumnStart;
    clickedbox[1] = box10.style.gridColumnEnd;
    clickedbox[2] = box10.style.gridRowStart;
    clickedbox[3] = box10.style.gridRowEnd;
    if((Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]) == 0) || (Math.abs(clickedbox[2]-emptycoords[2]) == 1 && Math.abs(clickedbox[0]-emptycoords[0]) == 0))
    {
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
        box10.style.gridColumnStart = clickedbox[0];
        box10.style.gridColumnEnd = clickedbox[1];
        box10.style.gridRowStart = clickedbox[2];
        box10.style.gridRowEnd = clickedbox[3];
        if(counting)
        {
            clicks += 1;
            moves.innerHTML = `Number of Moves: ${clicks}`;
            if(complete())
            {
                console.log(true);
            }
        }
    }
}
function box11clicked()
{
    clickedbox[0] = box11.style.gridColumnStart;
    clickedbox[1] = box11.style.gridColumnEnd;
    clickedbox[2] = box11.style.gridRowStart;
    clickedbox[3] = box11.style.gridRowEnd;
    if((Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]) == 0) || (Math.abs(clickedbox[2]-emptycoords[2]) == 1 && Math.abs(clickedbox[0]-emptycoords[0]) == 0))
    {
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
        box11.style.gridColumnStart = clickedbox[0];
        box11.style.gridColumnEnd = clickedbox[1];
        box11.style.gridRowStart = clickedbox[2];
        box11.style.gridRowEnd = clickedbox[3];
        if(counting)
        {
            clicks += 1;
            moves.innerHTML = `Number of Moves: ${clicks}`;
            if(complete())
            {
                console.log(true);
            }
        }
    }
}
function box12clicked()
{
    clickedbox[0] = box12.style.gridColumnStart;
    clickedbox[1] = box12.style.gridColumnEnd;
    clickedbox[2] = box12.style.gridRowStart;
    clickedbox[3] = box12.style.gridRowEnd;
    if((Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]) == 0) || (Math.abs(clickedbox[2]-emptycoords[2]) == 1 && Math.abs(clickedbox[0]-emptycoords[0]) == 0))
    {
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
        box12.style.gridColumnStart = clickedbox[0];
        box12.style.gridColumnEnd = clickedbox[1];
        box12.style.gridRowStart = clickedbox[2];
        box12.style.gridRowEnd = clickedbox[3];
        if(counting)
        {
            clicks += 1;
            moves.innerHTML = `Number of Moves: ${clicks}`;
            if(complete())
            {
                console.log(true);
            }
        }
    }
}
function box13clicked()
{
    clickedbox[0] = box13.style.gridColumnStart;
    clickedbox[1] = box13.style.gridColumnEnd;
    clickedbox[2] = box13.style.gridRowStart;
    clickedbox[3] = box13.style.gridRowEnd;
    if((Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]) == 0) || (Math.abs(clickedbox[2]-emptycoords[2]) == 1 && Math.abs(clickedbox[0]-emptycoords[0]) == 0))
    {
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
        box13.style.gridColumnStart = clickedbox[0];
        box13.style.gridColumnEnd = clickedbox[1];
        box13.style.gridRowStart = clickedbox[2];
        box13.style.gridRowEnd = clickedbox[3];
        if(counting)
        {
            clicks += 1;
            moves.innerHTML = `Number of Moves: ${clicks}`;
            if(complete())
            {
                console.log(true);
            }
        }
    }
}
function box14clicked()
{
    clickedbox[0] = box14.style.gridColumnStart;
    clickedbox[1] = box14.style.gridColumnEnd;
    clickedbox[2] = box14.style.gridRowStart;
    clickedbox[3] = box14.style.gridRowEnd;
    if((Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]) == 0) || (Math.abs(clickedbox[2]-emptycoords[2]) == 1 && Math.abs(clickedbox[0]-emptycoords[0]) == 0))
    {
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
        box14.style.gridColumnStart = clickedbox[0];
        box14.style.gridColumnEnd = clickedbox[1];
        box14.style.gridRowStart = clickedbox[2];
        box14.style.gridRowEnd = clickedbox[3];
        if(counting)
        {
            clicks += 1;
            moves.innerHTML = `Number of Moves: ${clicks}`;
            if(complete())
            {
                console.log(true);
            }
        }
    }
}
function box15clicked()
{
    clickedbox[0] = box15.style.gridColumnStart;
    clickedbox[1] = box15.style.gridColumnEnd;
    clickedbox[2] = box15.style.gridRowStart;
    clickedbox[3] = box15.style.gridRowEnd;
    if((Math.abs(clickedbox[0]-emptycoords[0]) == 1 && Math.abs(clickedbox[2]-emptycoords[2]) == 0) || (Math.abs(clickedbox[2]-emptycoords[2]) == 1 && Math.abs(clickedbox[0]-emptycoords[0]) == 0))
    {
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
        if(counting)
        {
            clicks += 1;
            moves.innerHTML = `Number of Moves: ${clicks}`;
            if(complete())
            {
                console.log(true);
            }
        }
    }
}