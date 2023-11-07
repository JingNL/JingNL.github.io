function initialize()
{
    combination = getRandomNum(3, 1) + getRandomNum(3,10) + getRandomNum(3,100);
    phrase = 'Enter Your Code: ';
    firstDigit = 0;
    secondDigit = 0;
    thirdDigit = 0;
    yourCode = 0;
    attempts = 7;
    myDiv = document.getElementById("divout");
    attem = document.getElementById("attem");
    te = document.getElementById("text");
    code = document.getElementById("divin");
}
function enterNum(num)
{
    if(firstDigit == 0)
    {
        firstDigit += num;
        phrase = `Enter Your Code: ${firstDigit}`;
        yourCode += firstDigit*100;
    } else if(secondDigit == 0)
    {
        secondDigit += num;
        phrase = `Enter Your Code: ${firstDigit}${secondDigit}`;
        yourCode += secondDigit*10;
    } else if(thirdDigit == 0)
    {
        thirdDigit += num;
        phrase = `Enter Your Code: ${firstDigit}${secondDigit}${thirdDigit}`;
        yourCode += thirdDigit*1;
    }
    return phrase;
}
function clearCode()
{
    phrase = 'Enter Your Code: ';
    firstDigit = 0;
    secondDigit = 0;
    thirdDigit = 0;
    yourCode = 0;
    return phrase;
}
function text(string)
{
    if(thirdDigit > 0)
    {
        if(yourCode == combination)
        {
            code.innerHTML = `Your Input: ${yourCode}`;
            te.innerHTML = "Congratulations! You successfully opened the safe! Seeing how you're so efficient at opening vaults we should try another!";
            firstDigit = 0;
            secondDigit = 0;
            thirdDigit = 0;
            yourCode = 0;
            attempts = 7;
            phrase = 'Enter Your Code: ';
            combination = getRandomNum(3, 1) + getRandomNum(3,10) + getRandomNum(3,100);
            myDiv.innerHTML = `Enter Your Code: `;
            attem.innerHTML = `Attempts Left: ${attempts}`;
        } else if(attempts == 1)
        {
            code.innerHTML = `Your Input: ${yourCode}`;
            te.innerHTML = "You failed to unlock the safe in time and the police got to you! Maybe this try you'll have more luck."
            firstDigit = 0;
            secondDigit = 0;
            thirdDigit = 0;
            yourCode = 0;
            attempts = 7;
            phrase = 'Enter Your Code: ';
            combination = getRandomNum(3, 1) + getRandomNum(3,10) + getRandomNum(3,100);
            myDiv.innerHTML = `Enter Your Code: `;
            attem.innerHTML = `Attempts Left: ${attempts}`;
        } else {
        if(yourCode > combination)
        {
            te.innerHTML = "Wrong code inputted, the combination is smaller!";
        } else {
            te.innerHTML = "Wrong code inputted, the combination is larger!";
        }
            code.innerHTML = `Your Input: ${yourCode}`;
            phrase = 'Enter Your Code: ';
            firstDigit = 0;
            secondDigit = 0;
            thirdDigit = 0;
            yourCode = 0;
            attempts -= 1;
            myDiv.innerHTML = `Enter Your Code: `;
            attem.innerHTML = `Attempts Left: ${attempts}`;
        }
    } else {
        myDiv.innerHTML = string;
    }
}
function getRandomNum(num, multi)
{
    return Math.floor((Math.random() * num) + 1) * multi;
}
