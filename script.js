function initialize()
{
    clicks = 0;
    score = 0;

    archercomplete = false;
    archer = document.getElementById("archer");
    archerclicked = false;
    archer1 = document.getElementById("archer1");
    archer1clicked = false;

    kingcomplete = false;
    king = document.getElementById("king");
    kingclicked = false;
    king1 = document.getElementById("king1");
    king1clicked = false;

    stopsigncomplete = false;
    stopsign = document.getElementById("stopsign");
    stopsignclicked = false;
    stopsign1 = document.getElementById("stopsign1");
    stopsign1clicked = false;

    wizardcomplete = false;
    wizard = document.getElementById("wizard");
    wizardclicked = false;
    wizard1 = document.getElementById("wizard1");
    wizard1clicked = false;

    trollcomplete = false;
    troll = document.getElementById("troll");
    trollclicked = false;
    troll1 = document.getElementById("troll1");
    troll1clicked = false;

    knightcomplete = false;
    knight = document.getElementById("knight");
    knightclicked = false;
    knight1 = document.getElementById("knight1");
    knight1clicked = false;

    fakecardcomplete = false;
    fakecard = document.getElementById("fakecard");
    fakecardclicked = false;
    fakecard1 = document.getElementById("fakecard1");
    fakecard1clicked = false;
    
    healercomplete = false;
    healer = document.getElementById("healer");
    healerclicked = false;
    healer1 = document.getElementById("healer1");
    healer1clicked = false;

    scorecounter = document.getElementById("score");
}
function reset()
{
    if(clicks == 2)
    {
        return;
    } else {
    clicks = 0;
    score = 0;
    scorecounter.innerHTML = `Score: ${score}`;
    archer.src = "CARDBACK.png";
    archer1.src = "CARDBACK.png";
    king.src = "CARDBACK.png";
    king1.src = "CARDBACK.png";
    stopsign.src = "CARDBACK.png";
    stopsign1.src = "CARDBACK.png";
    wizard.src = "CARDBACK.png";
    wizard1.src = "CARDBACK.png";
    troll.src = "CARDBACK.png";
    troll1.src = "CARDBACK.png";
    knight.src = "CARDBACK.png";
    knight1.src = "CARDBACK.png";
    fakecard.src = "CARDBACK.png";
    fakecard1.src = "CARDBACK.png";
    healer.src = "CARDBACK.png";
    healer1.src = "CARDBACK.png";
    archercomplete = false;
    archerclicked = false;
    archer1clicked = false;
    kingcomplete = false;
    kingclicked = false;
    king1clicked = false;
    stopsigncomplete = false;
    stopsignclicked = false;
    stopsign1clicked = false;
    wizardcomplete = false;
    wizardclicked = false;
    wizard1clicked = false;
    trollcomplete = false;
    trollclicked = false;
    troll1clicked = false;
    knightcomplete = false;
    knightclicked = false;
    knight1clicked = false;
    fakecardcomplete = false;
    fakecardclicked = false;
    fakecard1clicked = false;
    healercomplete = false;
    healerclicked = false;
    healer1clicked = false;
    }
}
archer1.onclick = function(){
    if(archercomplete || clicks == 2)
    {
        return;
    } else {
      archer1.src = "archer.png";
        if(archer1clicked == false)
      {
        archer1clicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(archer1clicked && archerclicked)
            {
                clicks = 0;
                archer1clicked = false;
                archerclicked = false;
                archercomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                archer1clicked = false;
                archer1.src = "CARDBACK.png";
                if(kingclicked)
                {
                    kingclicked = false;
                    king.src = "CARDBACK.png";
                }
                if(king1clicked)
                {
                    king1clicked = false;
                    king1.src = "CARDBACK.png";
                }
                if(stopsignclicked)
                {
                    stopsignclicked = false;
                    stopsign.src = "CARDBACK.png";
                }
                if(stopsign1clicked)
                {
                    stopsign1clicked = false;
                    stopsign1.src = "CARDBACK.png";
                }
                if(wizardclicked)
                {
                    wizardclicked = false;
                    wizard.src = "CARDBACK.png";
                }
                if(wizard1clicked)
                {
                    wizard1clicked = false;
                    wizard1.src = "CARDBACK.png";
                }
                if(trollclicked)
                {
                    trollclicked = false;
                    troll.src = "CARDBACK.png";
                }
                if(troll1clicked)
                {
                    troll1clicked = false;
                    troll1.src = "CARDBACK.png";
                }
                if(knightclicked)
                {
                    knightclicked = false;
                    knight.src = "CARDBACK.png";
                }
                if(knight1clicked)
                {
                    knight1clicked = false;
                    knight1.src = "CARDBACK.png";
                }
                if(fakecardclicked)
                {
                    fakecardclicked = false;
                    fakecard.src = "CARDBACK.png";
                }
                if(fakecard1clicked)
                {
                    fakecard1clicked = false;
                    fakecard1.src = "CARDBACK.png";
                }
                if(healerclicked)
                {
                    healerclicked = false;
                    healer.src = "CARDBACK.png";
                }
                if(healer1clicked)
                {
                    healer1clicked = false;
                    healer1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}
archer.onclick = function(){
    if(archercomplete || clicks == 2)
    {
        return;
    } else {
      archer.src = "archer.png";
        if(archerclicked == false)
      {
        archerclicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(archer1clicked && archerclicked)
            {
                clicks = 0;
                archer1clicked = false;
                archerclicked = false;
                archercomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                archerclicked = false;
                archer.src = "CARDBACK.png";
                if(kingclicked)
                {
                    kingclicked = false;
                    king.src = "CARDBACK.png";
                }
                if(king1clicked)
                {
                    king1clicked = false;
                    king1.src = "CARDBACK.png";
                }
                if(stopsignclicked)
                {
                    stopsignclicked = false;
                    stopsign.src = "CARDBACK.png";
                }
                if(stopsign1clicked)
                {
                    stopsign1clicked = false;
                    stopsign1.src = "CARDBACK.png";
                }
                if(wizardclicked)
                {
                    wizardclicked = false;
                    wizard.src = "CARDBACK.png";
                }
                if(wizard1clicked)
                {
                    wizard1clicked = false;
                    wizard1.src = "CARDBACK.png";
                }
                if(trollclicked)
                {
                    trollclicked = false;
                    troll.src = "CARDBACK.png";
                }
                if(troll1clicked)
                {
                    troll1clicked = false;
                    troll1.src = "CARDBACK.png";
                }
                if(knightclicked)
                {
                    knightclicked = false;
                    knight.src = "CARDBACK.png";
                }
                if(knight1clicked)
                {
                    knight1clicked = false;
                    knight1.src = "CARDBACK.png";
                }
                if(fakecardclicked)
                {
                    fakecardclicked = false;
                    fakecard.src = "CARDBACK.png";
                }
                if(fakecard1clicked)
                {
                    fakecard1clicked = false;
                    fakecard1.src = "CARDBACK.png";
                }
                if(healerclicked)
                {
                    healerclicked = false;
                    healer.src = "CARDBACK.png";
                }
                if(healer1clicked)
                {
                    healer1clicked = false;
                    healer1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}
king.onclick = function(){
    if(kingcomplete || clicks == 2)
    {
        return;
    } else {
      king.src = "buff king.png";
        if(kingclicked == false)
      {
        kingclicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(kingclicked && king1clicked)
            {
                clicks = 0;
                kingclicked = false;
                king1clicked = false;
                kingcomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                kingclicked = false;
                king.src = "CARDBACK.png";
                if(archerclicked)
                {
                    archerclicked = false;
                    archer.src = "CARDBACK.png";
                }
                if(archer1clicked)
                {
                    archer1clicked = false;
                    archer1.src = "CARDBACK.png";
                }
                if(stopsignclicked)
                {
                    stopsignclicked = false;
                    stopsign.src = "CARDBACK.png";
                }
                if(stopsign1clicked)
                {
                    stopsign1clicked = false;
                    stopsign1.src = "CARDBACK.png";
                }
                if(wizardclicked)
                {
                    wizardclicked = false;
                    wizard.src = "CARDBACK.png";
                }
                if(wizard1clicked)
                {
                    wizard1clicked = false;
                    wizard1.src = "CARDBACK.png";
                }
                if(trollclicked)
                {
                    trollclicked = false;
                    troll.src = "CARDBACK.png";
                }
                if(troll1clicked)
                {
                    troll1clicked = false;
                    troll1.src = "CARDBACK.png";
                }
                if(knightclicked)
                {
                    knightclicked = false;
                    knight.src = "CARDBACK.png";
                }
                if(knight1clicked)
                {
                    knight1clicked = false;
                    knight1.src = "CARDBACK.png";
                }
                if(fakecardclicked)
                {
                    fakecardclicked = false;
                    fakecard.src = "CARDBACK.png";
                }
                if(fakecard1clicked)
                {
                    fakecard1clicked = false;
                    fakecard1.src = "CARDBACK.png";
                }
                if(healerclicked)
                {
                    healerclicked = false;
                    healer.src = "CARDBACK.png";
                }
                if(healer1clicked)
                {
                    healer1clicked = false;
                    healer1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}
king1.onclick = function(){
    if(kingcomplete || clicks == 2)
    {
        return;
    } else {
      king1.src = "buff king.png";
        if(king1clicked == false)
      {
        king1clicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(kingclicked && king1clicked)
            {
                clicks = 0;
                kingclicked = false;
                king1clicked = false;
                kingcomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                king1clicked = false;
                king1.src = "CARDBACK.png";
                if(archerclicked)
                {
                    archerclicked = false;
                    archer.src = "CARDBACK.png";
                }
                if(archer1clicked)
                {
                    archer1clicked = false;
                    archer1.src = "CARDBACK.png";
                }
                if(stopsignclicked)
                {
                    stopsignclicked = false;
                    stopsign.src = "CARDBACK.png";
                }
                if(stopsign1clicked)
                {
                    stopsign1clicked = false;
                    stopsign1.src = "CARDBACK.png";
                }
                if(wizardclicked)
                {
                    wizardclicked = false;
                    wizard.src = "CARDBACK.png";
                }
                if(wizard1clicked)
                {
                    wizard1clicked = false;
                    wizard1.src = "CARDBACK.png";
                }
                if(trollclicked)
                {
                    trollclicked = false;
                    troll.src = "CARDBACK.png";
                }
                if(troll1clicked)
                {
                    troll1clicked = false;
                    troll1.src = "CARDBACK.png";
                }
                if(knightclicked)
                {
                    knightclicked = false;
                    knight.src = "CARDBACK.png";
                }
                if(knight1clicked)
                {
                    knight1clicked = false;
                    knight1.src = "CARDBACK.png";
                }
                if(fakecardclicked)
                {
                    fakecardclicked = false;
                    fakecard.src = "CARDBACK.png";
                }
                if(fakecard1clicked)
                {
                    fakecard1clicked = false;
                    fakecard1.src = "CARDBACK.png";
                }
                if(healerclicked)
                {
                    healerclicked = false;
                    healer.src = "CARDBACK.png";
                }
                if(healer1clicked)
                {
                    healer1clicked = false;
                    healer1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}
stopsign.onclick = function(){
    if(stopsigncomplete || clicks == 2)
    {
        return;
    } else {
      stopsign.src = "STOPSIGN.png";
        if(stopsignclicked == false)
      {
        stopsignclicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(stopsignclicked && stopsign1clicked)
            {
                clicks = 0;
                stopsignclicked = false;
                stopsign1clicked = false;
                stopsigncomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                stopsignclicked = false;
                stopsign.src = "CARDBACK.png";
                if(archerclicked)
                {
                    archerclicked = false;
                    archer.src = "CARDBACK.png";
                }
                if(archer1clicked)
                {
                    archer1clicked = false;
                    archer1.src = "CARDBACK.png";
                }
                if(kingclicked)
                {
                    kingclicked = false;
                    king.src = "CARDBACK.png";
                }
                if(king1clicked)
                {
                    king1clicked = false;
                    king1.src = "CARDBACK.png";
                }
                if(wizardclicked)
                {
                    wizardclicked = false;
                    wizard.src = "CARDBACK.png";
                }
                if(wizard1clicked)
                {
                    wizard1clicked = false;
                    wizard1.src = "CARDBACK.png";
                }
                if(trollclicked)
                {
                    trollclicked = false;
                    troll.src = "CARDBACK.png";
                }
                if(troll1clicked)
                {
                    troll1clicked = false;
                    troll1.src = "CARDBACK.png";
                }
                if(knightclicked)
                {
                    knightclicked = false;
                    knight.src = "CARDBACK.png";
                }
                if(knight1clicked)
                {
                    knight1clicked = false;
                    knight1.src = "CARDBACK.png";
                }
                if(fakecardclicked)
                {
                    fakecardclicked = false;
                    fakecard.src = "CARDBACK.png";
                }
                if(fakecard1clicked)
                {
                    fakecard1clicked = false;
                    fakecard1.src = "CARDBACK.png";
                }
                if(healerclicked)
                {
                    healerclicked = false;
                    healer.src = "CARDBACK.png";
                }
                if(healer1clicked)
                {
                    healer1clicked = false;
                    healer1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}
stopsign1.onclick = function(){
    if(stopsigncomplete || clicks == 2)
    {
        return;
    } else {
      stopsign1.src = "STOPSIGN.png";
        if(stopsign1clicked == false)
      {
        stopsign1clicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(stopsignclicked && stopsign1clicked)
            {
                clicks = 0;
                stopsignclicked = false;
                stopsign1clicked = false;
                stopsigncomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                stopsign1clicked = false;
                stopsign1.src = "CARDBACK.png";
                if(archerclicked)
                {
                    archerclicked = false;
                    archer.src = "CARDBACK.png";
                }
                if(archer1clicked)
                {
                    archer1clicked = false;
                    archer1.src = "CARDBACK.png";
                }
                if(kingclicked)
                {
                    kingclicked = false;
                    king.src = "CARDBACK.png";
                }
                if(king1clicked)
                {
                    king1clicked = false;
                    king1.src = "CARDBACK.png";
                }
                if(wizardclicked)
                {
                    wizardclicked = false;
                    wizard.src = "CARDBACK.png";
                }
                if(wizard1clicked)
                {
                    wizard1clicked = false;
                    wizard1.src = "CARDBACK.png";
                }
                if(trollclicked)
                {
                    trollclicked = false;
                    troll.src = "CARDBACK.png";
                }
                if(troll1clicked)
                {
                    troll1clicked = false;
                    troll1.src = "CARDBACK.png";
                }
                if(knightclicked)
                {
                    knightclicked = false;
                    knight.src = "CARDBACK.png";
                }
                if(knight1clicked)
                {
                    knight1clicked = false;
                    knight1.src = "CARDBACK.png";
                }
                if(fakecardclicked)
                {
                    fakecardclicked = false;
                    fakecard.src = "CARDBACK.png";
                }
                if(fakecard1clicked)
                {
                    fakecard1clicked = false;
                    fakecard1.src = "CARDBACK.png";
                }
                if(healerclicked)
                {
                    healerclicked = false;
                    healer.src = "CARDBACK.png";
                }
                if(healer1clicked)
                {
                    healer1clicked = false;
                    healer1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}
wizard.onclick = function(){
    if(wizardcomplete || clicks == 2)
    {
        return;
    } else {
      wizard.src = "wizard.png";
        if(wizardclicked == false)
      {
        wizardclicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(wizardclicked && wizard1clicked)
            {
                clicks = 0;
                wizardclicked = false;
                wizard1clicked = false;
                wizardcomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                wizardclicked = false;
                wizard.src = "CARDBACK.png";
                if(archerclicked)
                {
                    archerclicked = false;
                    archer.src = "CARDBACK.png";
                }
                if(archer1clicked)
                {
                    archer1clicked = false;
                    archer1.src = "CARDBACK.png";
                }
                if(kingclicked)
                {
                    kingclicked = false;
                    king.src = "CARDBACK.png";
                }
                if(king1clicked)
                {
                    king1clicked = false;
                    king1.src = "CARDBACK.png";
                }
                if(stopsignclicked)
                {
                    stopsignclicked = false;
                    stopsign.src = "CARDBACK.png";
                }
                if(stopsign1clicked)
                {
                    stopsign1clicked = false;
                    stopsign1.src = "CARDBACK.png";
                }
                if(trollclicked)
                {
                    trollclicked = false;
                    troll.src = "CARDBACK.png";
                }
                if(troll1clicked)
                {
                    troll1clicked = false;
                    troll1.src = "CARDBACK.png";
                }
                if(knightclicked)
                {
                    knightclicked = false;
                    knight.src = "CARDBACK.png";
                }
                if(knight1clicked)
                {
                    knight1clicked = false;
                    knight1.src = "CARDBACK.png";
                }
                if(fakecardclicked)
                {
                    fakecardclicked = false;
                    fakecard.src = "CARDBACK.png";
                }
                if(fakecard1clicked)
                {
                    fakecard1clicked = false;
                    fakecard1.src = "CARDBACK.png";
                }
                if(healerclicked)
                {
                    healerclicked = false;
                    healer.src = "CARDBACK.png";
                }
                if(healer1clicked)
                {
                    healer1clicked = false;
                    healer1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}
wizard1.onclick = function(){
    if(wizardcomplete || clicks == 2)
    {
        return;
    } else {
      wizard1.src = "wizard.png";
        if(wizard1clicked == false)
      {
        wizard1clicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(wizardclicked && wizard1clicked)
            {
                clicks = 0;
                wizardclicked = false;
                wizard1clicked = false;
                wizardcomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                wizard1clicked = false;
                wizard1.src = "CARDBACK.png";
                if(archerclicked)
                {
                    archerclicked = false;
                    archer.src = "CARDBACK.png";
                }
                if(archer1clicked)
                {
                    archer1clicked = false;
                    archer1.src = "CARDBACK.png";
                }
                if(kingclicked)
                {
                    kingclicked = false;
                    king.src = "CARDBACK.png";
                }
                if(king1clicked)
                {
                    king1clicked = false;
                    king1.src = "CARDBACK.png";
                }
                if(stopsignclicked)
                {
                    stopsignclicked = false;
                    stopsign.src = "CARDBACK.png";
                }
                if(stopsign1clicked)
                {
                    stopsign1clicked = false;
                    stopsign1.src = "CARDBACK.png";
                }
                if(trollclicked)
                {
                    trollclicked = false;
                    troll.src = "CARDBACK.png";
                }
                if(troll1clicked)
                {
                    troll1clicked = false;
                    troll1.src = "CARDBACK.png";
                }
                if(knightclicked)
                {
                    knightclicked = false;
                    knight.src = "CARDBACK.png";
                }
                if(knight1clicked)
                {
                    knight1clicked = false;
                    knight1.src = "CARDBACK.png";
                }
                if(fakecardclicked)
                {
                    fakecardclicked = false;
                    fakecard.src = "CARDBACK.png";
                }
                if(fakecard1clicked)
                {
                    fakecard1clicked = false;
                    fakecard1.src = "CARDBACK.png";
                }
                if(healerclicked)
                {
                    healerclicked = false;
                    healer.src = "CARDBACK.png";
                }
                if(healer1clicked)
                {
                    healer1clicked = false;
                    healer1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}
troll.onclick = function(){
    if(trollcomplete || clicks == 2)
    {
        return;
    } else {
        troll.src = "troll.png";
        if(trollclicked == false)
      {
        trollclicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(trollclicked && troll1clicked)
            {
                clicks = 0;
                trollclicked = false;
                troll1clicked = false;
                trollcomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                trollclicked = false;
                troll.src = "CARDBACK.png";
                if(archerclicked)
                {
                    archerclicked = false;
                    archer.src = "CARDBACK.png";
                }
                if(archer1clicked)
                {
                    archer1clicked = false;
                    archer1.src = "CARDBACK.png";
                }
                if(kingclicked)
                {
                    kingclicked = false;
                    king.src = "CARDBACK.png";
                }
                if(king1clicked)
                {
                    king1clicked = false;
                    king1.src = "CARDBACK.png";
                }
                if(stopsignclicked)
                {
                    stopsignclicked = false;
                    stopsign.src = "CARDBACK.png";
                }
                if(stopsign1clicked)
                {
                    stopsign1clicked = false;
                    stopsign1.src = "CARDBACK.png";
                }
                if(wizardclicked)
                {
                    wizardclicked = false;
                    wizard.src = "CARDBACK.png";
                }
                if(wizard1clicked)
                {
                    wizard1clicked = false;
                    wizard1.src = "CARDBACK.png";
                }
                if(knightclicked)
                {
                    knightclicked = false;
                    knight.src = "CARDBACK.png";
                }
                if(knight1clicked)
                {
                    knight1clicked = false;
                    knight1.src = "CARDBACK.png";
                }
                if(fakecardclicked)
                {
                    fakecardclicked = false;
                    fakecard.src = "CARDBACK.png";
                }
                if(fakecard1clicked)
                {
                    fakecard1clicked = false;
                    fakecard1.src = "CARDBACK.png";
                }
                if(healerclicked)
                {
                    healerclicked = false;
                    healer.src = "CARDBACK.png";
                }
                if(healer1clicked)
                {
                    healer1clicked = false;
                    healer1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}
troll1.onclick = function(){
    if(trollcomplete || clicks == 2)
    {
        return;
    } else {
        troll1.src = "troll.png";
        if(troll1clicked == false)
      {
        troll1clicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(trollclicked && troll1clicked)
            {
                clicks = 0;
                trollclicked = false;
                troll1clicked = false;
                trollcomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                troll1clicked = false;
                troll1.src = "CARDBACK.png";
                if(archerclicked)
                {
                    archerclicked = false;
                    archer.src = "CARDBACK.png";
                }
                if(archer1clicked)
                {
                    archer1clicked = false;
                    archer1.src = "CARDBACK.png";
                }
                if(kingclicked)
                {
                    kingclicked = false;
                    king.src = "CARDBACK.png";
                }
                if(king1clicked)
                {
                    king1clicked = false;
                    king1.src = "CARDBACK.png";
                }
                if(stopsignclicked)
                {
                    stopsignclicked = false;
                    stopsign.src = "CARDBACK.png";
                }
                if(stopsign1clicked)
                {
                    stopsign1clicked = false;
                    stopsign1.src = "CARDBACK.png";
                }
                if(wizardclicked)
                {
                    wizardclicked = false;
                    wizard.src = "CARDBACK.png";
                }
                if(wizard1clicked)
                {
                    wizard1clicked = false;
                    wizard1.src = "CARDBACK.png";
                }
                if(knightclicked)
                {
                    knightclicked = false;
                    knight.src = "CARDBACK.png";
                }
                if(knight1clicked)
                {
                    knight1clicked = false;
                    knight1.src = "CARDBACK.png";
                }
                if(fakecardclicked)
                {
                    fakecardclicked = false;
                    fakecard.src = "CARDBACK.png";
                }
                if(fakecard1clicked)
                {
                    fakecard1clicked = false;
                    fakecard1.src = "CARDBACK.png";
                }
                if(healerclicked)
                {
                    healerclicked = false;
                    healer.src = "CARDBACK.png";
                }
                if(healer1clicked)
                {
                    healer1clicked = false;
                    healer1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}
knight.onclick = function(){
    if(knightcomplete || clicks == 2)
    {
        return;
    } else {
        knight.src = "knight.png";
        if(knightclicked == false)
      {
        knightclicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(knightclicked && knight1clicked)
            {
                clicks = 0;
                knightclicked = false;
                knight1clicked = false;
                knightcomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                knightclicked = false;
                knight.src = "CARDBACK.png";
                if(archerclicked)
                {
                    archerclicked = false;
                    archer.src = "CARDBACK.png";
                }
                if(archer1clicked)
                {
                    archer1clicked = false;
                    archer1.src = "CARDBACK.png";
                }
                if(kingclicked)
                {
                    kingclicked = false;
                    king.src = "CARDBACK.png";
                }
                if(king1clicked)
                {
                    king1clicked = false;
                    king1.src = "CARDBACK.png";
                }
                if(stopsignclicked)
                {
                    stopsignclicked = false;
                    stopsign.src = "CARDBACK.png";
                }
                if(stopsign1clicked)
                {
                    stopsign1clicked = false;
                    stopsign1.src = "CARDBACK.png";
                }
                if(wizardclicked)
                {
                    wizardclicked = false;
                    wizard.src = "CARDBACK.png";
                }
                if(wizard1clicked)
                {
                    wizard1clicked = false;
                    wizard1.src = "CARDBACK.png";
                }
                if(trollclicked)
                {
                    trollclicked = false;
                    troll.src = "CARDBACK.png";
                }
                if(troll1clicked)
                {
                    troll1clicked = false;
                    troll1.src = "CARDBACK.png";
                }
                if(fakecardclicked)
                {
                    fakecardclicked = false;
                    fakecard.src = "CARDBACK.png";
                }
                if(fakecard1clicked)
                {
                    fakecard1clicked = false;
                    fakecard1.src = "CARDBACK.png";
                }
                if(healerclicked)
                {
                    healerclicked = false;
                    healer.src = "CARDBACK.png";
                }
                if(healer1clicked)
                {
                    healer1clicked = false;
                    healer1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}
knight1.onclick = function(){
    if(knightcomplete || clicks == 2)
    {
        return;
    } else {
        knight1.src = "knight.png";
        if(knight1clicked == false)
      {
        knight1clicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(knightclicked && knight1clicked)
            {
                clicks = 0;
                knightclicked = false;
                knight1clicked = false;
                knightcomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                knight1clicked = false;
                knight1.src = "CARDBACK.png";
                if(archerclicked)
                {
                    archerclicked = false;
                    archer.src = "CARDBACK.png";
                }
                if(archer1clicked)
                {
                    archer1clicked = false;
                    archer1.src = "CARDBACK.png";
                }
                if(kingclicked)
                {
                    kingclicked = false;
                    king.src = "CARDBACK.png";
                }
                if(king1clicked)
                {
                    king1clicked = false;
                    king1.src = "CARDBACK.png";
                }
                if(stopsignclicked)
                {
                    stopsignclicked = false;
                    stopsign.src = "CARDBACK.png";
                }
                if(stopsign1clicked)
                {
                    stopsign1clicked = false;
                    stopsign1.src = "CARDBACK.png";
                }
                if(wizardclicked)
                {
                    wizardclicked = false;
                    wizard.src = "CARDBACK.png";
                }
                if(wizard1clicked)
                {
                    wizard1clicked = false;
                    wizard1.src = "CARDBACK.png";
                }
                if(trollclicked)
                {
                    trollclicked = false;
                    troll.src = "CARDBACK.png";
                }
                if(troll1clicked)
                {
                    troll1clicked = false;
                    troll1.src = "CARDBACK.png";
                }
                if(fakecardclicked)
                {
                    fakecardclicked = false;
                    fakecard.src = "CARDBACK.png";
                }
                if(fakecard1clicked)
                {
                    fakecard1clicked = false;
                    fakecard1.src = "CARDBACK.png";
                }
                if(healerclicked)
                {
                    healerclicked = false;
                    healer.src = "CARDBACK.png";
                }
                if(healer1clicked)
                {
                    healer1clicked = false;
                    healer1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}
fakecard.onclick = function(){
    if(fakecardcomplete || clicks == 2)
    {
        return;
    } else {
        fakecard.src = "FAKECARDBACK.png";
        if(fakecardclicked == false)
      {
        fakecardclicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(fakecardclicked && fakecard1clicked)
            {
                clicks = 0;
                fakecardclicked = false;
                fakecard1clicked = false;
                fakecardcomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                fakecardclicked = false;
                fakecard.src = "CARDBACK.png";
                if(archerclicked)
                {
                    archerclicked = false;
                    archer.src = "CARDBACK.png";
                }
                if(archer1clicked)
                {
                    archer1clicked = false;
                    archer1.src = "CARDBACK.png";
                }
                if(kingclicked)
                {
                    kingclicked = false;
                    king.src = "CARDBACK.png";
                }
                if(king1clicked)
                {
                    king1clicked = false;
                    king1.src = "CARDBACK.png";
                }
                if(stopsignclicked)
                {
                    stopsignclicked = false;
                    stopsign.src = "CARDBACK.png";
                }
                if(stopsign1clicked)
                {
                    stopsign1clicked = false;
                    stopsign1.src = "CARDBACK.png";
                }
                if(wizardclicked)
                {
                    wizardclicked = false;
                    wizard.src = "CARDBACK.png";
                }
                if(wizard1clicked)
                {
                    wizard1clicked = false;
                    wizard1.src = "CARDBACK.png";
                }
                if(trollclicked)
                {
                    trollclicked = false;
                    troll.src = "CARDBACK.png";
                }
                if(troll1clicked)
                {
                    troll1clicked = false;
                    troll1.src = "CARDBACK.png";
                }
                if(knightclicked)
                {
                    knightclicked = false;
                    knight.src = "CARDBACK.png";
                }
                if(knight1clicked)
                {
                    knight1clicked = false;
                    knight1.src = "CARDBACK.png";
                }
                if(healerclicked)
                {
                    healerclicked = false;
                    healer.src = "CARDBACK.png";
                }
                if(healer1clicked)
                {
                    healer1clicked = false;
                    healer1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}
fakecard1.onclick = function(){
    if(fakecardcomplete || clicks == 2)
    {
        return;
    } else {
        fakecard1.src = "FAKECARDBACK.png";
        if(fakecard1clicked == false)
      {
        fakecard1clicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(fakecardclicked && fakecard1clicked)
            {
                clicks = 0;
                fakecardclicked = false;
                fakecard1clicked = false;
                fakecardcomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                fakecard1clicked = false;
                fakecard1.src = "CARDBACK.png";
                if(archerclicked)
                {
                    archerclicked = false;
                    archer.src = "CARDBACK.png";
                }
                if(archer1clicked)
                {
                    archer1clicked = false;
                    archer1.src = "CARDBACK.png";
                }
                if(kingclicked)
                {
                    kingclicked = false;
                    king.src = "CARDBACK.png";
                }
                if(king1clicked)
                {
                    king1clicked = false;
                    king1.src = "CARDBACK.png";
                }
                if(stopsignclicked)
                {
                    stopsignclicked = false;
                    stopsign.src = "CARDBACK.png";
                }
                if(stopsign1clicked)
                {
                    stopsign1clicked = false;
                    stopsign1.src = "CARDBACK.png";
                }
                if(wizardclicked)
                {
                    wizardclicked = false;
                    wizard.src = "CARDBACK.png";
                }
                if(wizard1clicked)
                {
                    wizard1clicked = false;
                    wizard1.src = "CARDBACK.png";
                }
                if(trollclicked)
                {
                    trollclicked = false;
                    troll.src = "CARDBACK.png";
                }
                if(troll1clicked)
                {
                    troll1clicked = false;
                    troll1.src = "CARDBACK.png";
                }
                if(knightclicked)
                {
                    knightclicked = false;
                    knight.src = "CARDBACK.png";
                }
                if(knight1clicked)
                {
                    knight1clicked = false;
                    knight1.src = "CARDBACK.png";
                }
                if(healerclicked)
                {
                    healerclicked = false;
                    healer.src = "CARDBACK.png";
                }
                if(healer1clicked)
                {
                    healer1clicked = false;
                    healer1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}
healer.onclick = function(){
    if(healercomplete || clicks == 2)
    {
        return;
    } else {
        healer.src = "HEALER.png";
        if(healerclicked == false)
      {
        healerclicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(healerclicked && healer1clicked)
            {
                clicks = 0;
                healerclicked = false;
                healer1clicked = false;
                healercomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                healerclicked = false;
                healer.src = "CARDBACK.png";
                if(archerclicked)
                {
                    archerclicked = false;
                    archer.src = "CARDBACK.png";
                }
                if(archer1clicked)
                {
                    archer1clicked = false;
                    archer1.src = "CARDBACK.png";
                }
                if(kingclicked)
                {
                    kingclicked = false;
                    king.src = "CARDBACK.png";
                }
                if(king1clicked)
                {
                    king1clicked = false;
                    king1.src = "CARDBACK.png";
                }
                if(stopsignclicked)
                {
                    stopsignclicked = false;
                    stopsign.src = "CARDBACK.png";
                }
                if(stopsign1clicked)
                {
                    stopsign1clicked = false;
                    stopsign1.src = "CARDBACK.png";
                }
                if(wizardclicked)
                {
                    wizardclicked = false;
                    wizard.src = "CARDBACK.png";
                }
                if(wizard1clicked)
                {
                    wizard1clicked = false;
                    wizard1.src = "CARDBACK.png";
                }
                if(trollclicked)
                {
                    trollclicked = false;
                    troll.src = "CARDBACK.png";
                }
                if(troll1clicked)
                {
                    troll1clicked = false;
                    troll1.src = "CARDBACK.png";
                }
                if(knightclicked)
                {
                    knightclicked = false;
                    knight.src = "CARDBACK.png";
                }
                if(knight1clicked)
                {
                    knight1clicked = false;
                    knight1.src = "CARDBACK.png";
                }
                if(fakecardclicked)
                {
                    fakecardclicked = false;
                    fakecard.src = "CARDBACK.png";
                }
                if(fakecard1clicked)
                {
                    fakecard1clicked = false;
                    fakecard1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}
healer1.onclick = function(){
    if(healercomplete || clicks == 2)
    {
        return;
    } else {
        healer1.src = "HEALER.png";
        if(healer1clicked == false)
      {
        healer1clicked = true;
        clicks += 1;
        score += 1;
        scorecounter.innerHTML = `Score: ${score}`;
        if(clicks == 2)
        {
            if(healerclicked && healer1clicked)
            {
                clicks = 0;
                healerclicked = false;
                healer1clicked = false;
                healercomplete = true;
            } else {
                setTimeout(function(){
                clicks = 0;
                healer1clicked = false;
                healer1.src = "CARDBACK.png";
                if(archerclicked)
                {
                    archerclicked = false;
                    archer.src = "CARDBACK.png";
                }
                if(archer1clicked)
                {
                    archer1clicked = false;
                    archer1.src = "CARDBACK.png";
                }
                if(kingclicked)
                {
                    kingclicked = false;
                    king.src = "CARDBACK.png";
                }
                if(king1clicked)
                {
                    king1clicked = false;
                    king1.src = "CARDBACK.png";
                }
                if(stopsignclicked)
                {
                    stopsignclicked = false;
                    stopsign.src = "CARDBACK.png";
                }
                if(stopsign1clicked)
                {
                    stopsign1clicked = false;
                    stopsign1.src = "CARDBACK.png";
                }
                if(wizardclicked)
                {
                    wizardclicked = false;
                    wizard.src = "CARDBACK.png";
                }
                if(wizard1clicked)
                {
                    wizard1clicked = false;
                    wizard1.src = "CARDBACK.png";
                }
                if(trollclicked)
                {
                    trollclicked = false;
                    troll.src = "CARDBACK.png";
                }
                if(troll1clicked)
                {
                    troll1clicked = false;
                    troll1.src = "CARDBACK.png";
                }
                if(knightclicked)
                {
                    knightclicked = false;
                    knight.src = "CARDBACK.png";
                }
                if(knight1clicked)
                {
                    knight1clicked = false;
                    knight1.src = "CARDBACK.png";
                }
                if(fakecardclicked)
                {
                    fakecardclicked = false;
                    fakecard.src = "CARDBACK.png";
                }
                if(fakecard1clicked)
                {
                    fakecard1clicked = false;
                    fakecard1.src = "CARDBACK.png";
                }
            }, 2000);
            }
        }
      }
    }
}