let count = 0;
let value = [];
let colorButtons = document.querySelectorAll(".colorButton");
document.querySelector("#Stop").disabled = true;
playDisabled();
colorButtonsDisabled();
for(i = 0; i < colorButtons.length; i++)
{
    colorButtons[i].disabled = true;
}
$("button#History").click(function()
{
    History();
});
function History()
{
    text = document.querySelector("#count");
    if(text.innerText == "")
    {
        text.innerText = "(" + value.length + ")";
        $("button#History").css("box-shadow", "0 0 5px white, 0 0 25px white, 0 0 50px white");
        $(".History .historyButton button").css("display", "block");
    }
    else
    {
        text.innerText = "";
        $("button#History").css("box-shadow", "0 0");
        $(".History .historyButton button").css("display", "none");
    }
    // if($("span#count").text(""))
    // {
    //     $("span#count").text("(" + value.length +")");
    // }
    // else
    // {
    //     $("span#count").text("");
    // }
}
function createList(clsname)
{
    var div = document.createElement("button");
    div.innerHTML = clsname;
    div.classList.add("history" + clsname);
    div.classList.add("seejn");
    document.querySelector(".historyButton").appendChild(div);
}
//record the order of button clicked
$("#Record").click(function()
{      
    for(i = 0; i < colorButtons.length; i++)
    {
        colorButtons[i].disabled = false;
    }
    if(colorButtons[0].disabled == false)
    {  
        document.querySelector("#Record").disabled = true;
        document.querySelector("#Stop").disabled = false;
        colorButtonsEnabled();
        $("header").css("visibility","visible");
        // buttons();
        playDisabled();
    }
    else
    {
        alert("Not Recording! Some issues arised.");
    }
});

$("#Stop").click(function()
{
    document.querySelector("#Record").disabled = false;
    document.querySelector("#Stop").disabled = true;
    playDisabled();
    $("header").css("visibility","hidden");
    for(i = 0; i < colorButtons.length; i++)
        colorButtons[i].disabled = true; 
    colorButtonsDisabled();
    $(".circle").css(
        {
            "border":"2px solid white",
            "box-shadow":"0 0 white"
        });
}); 

$("#Play").click(function()
{
    alert(value.length);
    value.forEach(circleAnimation);
});
$("#Reset").click(function()
{
    count = 0;
    value.length = 0;
    playDisabled();
    $(".circle").css(
        {
            "border":"2px solid white",
            "box-shadow":"0 0 white"
        });
    $(".seejn").remove();
    $("button#History").css("box-shadow", "0 0");
    text.innerText = "";
});  
function circleAnimation(e)
{ 
    alert(e);
}
click();
function click()
{
    $(".neon button.Red").click(function()
            {
                $(this).css(
                    {
                        "box-shadow": "0 0 5px rgb(248, 19, 19), 0 0 25px rgb(248, 19, 19), 0 0 50px rgb(248, 19, 19), 0 0 200px rgb(248, 19, 19)"
                    });
                $(".neon button.Blue").css(
                    {
                        "box-shadow":""
                    });
                $(".neon button.Green").css(
                    {
                        "box-shadow":""
                    });
                $(".neon button.Yellow").css(
                    {
                        "box-shadow":""
                    });
                $(".circle").css(
                    {
                        "border":"2px solid rgb(248, 19, 19)",
                        "box-shadow":"inset 0 0 5px  rgb(248, 19, 19), 0 0 25px  rgb(248, 19, 19), inset 0 0 50px  rgb(248, 19, 19), 0 0 200px  rgb(248, 19, 19)"
                    });
            });
            $(".neon button.Blue").click(function()
            {
                $(this).css(
                    {                        
                        "box-shadow":" 0 0 5px rgb(3, 178, 247), 0 0 25px rgb(3, 178, 247), 0 0 50px rgb(3, 178, 247), 0 0 200px rgb(3, 178, 247)"
                    });
                $(".neon button.Red").css(
                    {
                        "box-shadow":""
                    });
                $(".neon button.Green").css(
                    {
                        "box-shadow":""
                    });
                $(".neon button.Yellow").css(
                    {
                        "box-shadow":""
                    });
                $(".circle").css(
                    {
                        "border":"2px solid rgb(3, 178, 247)",
                        "box-shadow":"inset 0 0 5px  rgb(3, 178, 247), 0 0 25px  rgb(3, 178, 247), inset 0 0 50px  rgb(3, 178, 247), 0 0 200px  rgb(3, 178, 247)"
                    });
            });
            $(".neon button.Green").click(function()
            {
                $(this).css(
                    {
                        "box-shadow": "0 0 5px rgb(3, 247, 36), 0 0 25px rgb(3, 247, 36), 0 0 50px rgb(3, 247, 36), 0 0 200px rgb(3, 247, 36)"
                    });
                $(".neon button.Blue").css(
                    {
                        "box-shadow":""
                    });
                $(".neon button.Red").css(
                    {
                        "box-shadow":""
                    });
                $(".neon button.Yellow").css(
                    {
                        "box-shadow":""
                    });
                $(".circle").css(
                    {
                        "border":"2px solid rgb(3, 247, 36)",
                        "box-shadow":"inset 0 0 5px  rgb(3, 247, 36), 0 0 25px  rgb(3, 247, 36), inset 0 0 50px  rgb(3, 247, 36), 0 0 200px  rgb(3, 247, 36)"
                    });
            });
            
            $(".neon button.Yellow").click(function()
            {
                $(this).css(
                    {
                        "box-shadow": "0 0 5px rgb(188, 201, 12), 0 0 25px rgb(188, 201, 12), 0 0 50px rgb(188, 201, 12), 0 0 200px rgb(188, 201, 12)"
                    });
                $(".neon button.Blue").css(
                    {
                        "box-shadow":""
                    });
                $(".neon button.Green").css(
                    {
                        "box-shadow":""
                    });
                $(".neon button.Red").css(
                    {
                        "box-shadow":""
                    });
                $(".circle").css(
                    {
                        "border":"2px solid rgb(188, 201, 12)",
                        "box-shadow":"inset 0 0 5px  rgb(188, 201, 12), 0 0 25px  rgb(188, 201, 12), inset 0 0 50px  rgb(188, 201, 12), 0 0 200px  rgb(188, 201, 12)"
                    });
            });
}
function Red()
{
    value[count] = "Red";
    count++;
    var clsName = document.querySelector("#Red").id;
    createList(clsName);
}
function Blue()
{
    value[count] = "Blue";
    count++;
    var clsName = document.querySelector("#Blue").id;
    createList(clsName);
}
function Green()
{
    value[count] = "Green";
    count++;
    var clsName = document.querySelector("#Green").id;
    createList(clsName);
}
function Yellow()
{
    value[count] = "Yellow";
    count++;
    var clsName = document.querySelector("#Yellow").id;
    createList(clsName);
}
function playDisabled()
{
    $("#Stop").css(
        {
            "box-shadow":"0 0"
        });    
    if(value.length != 0)
    {
        document.querySelector("#Play").disabled = false;
    }
    else
    { 
        document.querySelector("#Play").disabled = true;
        document.querySelector("#Play").style.boxShadow = "0 0";
    }
}
function colorButtonsDisabled()
{
    $(".neon button.Red").css(
        {
            "background-color": "rgb(65, 1, 1)",
            "box-shadow":"0 0"
        });
    $(".neon button.Blue").css(
        {
            "background-color": "rgb(1, 20, 44)",
            "box-shadow":"0 0"
        });
    $(".neon button.Green").css(
        {
            "background-color": "rgb(0, 41, 14)",
            "box-shadow":"0 0"
        });
    $(".neon button.Yellow").css(
        {
            "background-color": "rgb(72, 77, 3)",
            "box-shadow":"0 0"
        });
}
function colorButtonsEnabled()
{
    $(".neon button.Red").css(
        {
            "background-color": "rgb(248, 19, 19)",
            "box-shadow": "0 0 5px rgb(248, 19, 19), 0 0 25px rgb(248, 19, 19), 0 0 50px rgb(248, 19, 19), 0 0 200px rgb(248, 19, 19)"
        });
    $(".neon button.Blue").css(
        {
            "background-color": "rgb(3, 178, 247)",                
            "box-shadow": "0 0 5px rgb(3, 178, 247), 0 0 25px rgb(3, 178, 247), 0 0 50px rgb(3, 178, 247), 0 0 200px rgb(3, 178, 247)"
        });
    $(".neon button.Green").css(
        {
            "background-color": "rgb(3, 247, 36)",
            "box-shadow": "0 0 5px rgb(3, 247, 36), 0 0 25px rgb(3, 247, 36), 0 0 50px rgb(3, 247, 36), 0 0 200px rgb(3, 247, 36)"
        });
    $(".neon button.Yellow").css(
        {
            "background-color": "rgb(188, 201, 12)",
            "box-shadow": "0 0 5px rgb(188, 201, 12), 0 0 25px rgb(188, 201, 12), 0 0 50px rgb(188, 201, 12), 0 0 200px rgb(188, 201, 12)"        
        });
//active psuedo code effect
    $(".neon button.Red").mousedown(function()
    {
        $(this).css("background","rgb(65, 1, 1)");
    });
    $(".neon button.Red").mouseup(function()
    {
        $(this).css("background","rgb(248, 19, 19)");
    });

    
    $(".neon button.Blue").mousedown(function()
    {
        $(this).css("background","rgb(1, 20, 44)");
    });
    $(".neon button.Blue").mouseup(function()
    {
        $(this).css("background","rgb(3, 178, 247)");
    });

    
    $(".neon button.Green").mousedown(function()
    {
        $(this).css("background","rgb(0, 41, 14)");
    });
    $(".neon button.Green").mouseup(function()
    {
        $(this).css("background","rgb(3, 247, 36)");
    });

    $(".neon button.Yellow").mousedown(function()
    {
        $(this).css("background","rgb(72, 77, 3)");
    });
    $(".neon button.Yellow").mouseup(function()
    {
        $(this).css("background","rgb(188, 201, 12)");
    });
}