let count = 0;
let value = [];
let colorButtons = document.querySelectorAll(".colorButton");
document.querySelector("#Stop").disabled = true;
playDisabled();
colorButtonsDisabled();
for(var i = 0; i < colorButtons.length; i++)
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
    for(var i = 0; i < colorButtons.length; i++)
    {
        colorButtons[i].disabled = false;
    }
    if(colorButtons[0].disabled == false)
    {  
        recordDisabled();
        document.querySelector("#Stop").disabled = false;
        colorButtonsEnabled();
        $("header").css("visibility","visible");
        // buttons();
        playDisabled();
        document.querySelector("#circle").className = "circle";
    }
    else
    {
        alert("Not Recording! Some issues arised.");
    }
});

function recordDisabled()
{
    if(document.querySelector("#Record").disabled == false)
        document.querySelector("#Record").disabled = true;
    else
        document.querySelector("#Record").disabled = false
}
$("#Stop").click(function()
{
    recordDisabled();
    stopDisabled();
    playDisabled();
    $("header").css("visibility","hidden");
    for(var i = 0; i < colorButtons.length; i++)
        colorButtons[i].disabled = true; 
    colorButtonsDisabled();    
    $(".circle").attr("style", "");
    document.querySelector("#circle").className = "circle";
}); 
function stopDisabled()
{
    if(document.querySelector("#Stop").disabled == false)
        document.querySelector("#Stop").disabled = true;
    else
        document.querySelector("#Stop").disabled = false
}
$("#Play").click(function()
{
    recordDisabled();
    stopDisabled();
    circleAnimation()
});
function playDisabled()
{    
    $("#Stop").attr("style", "");
  
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
$("#Reset").click(function()
{
    count = 0;
    value.length = 0;
    playDisabled();
    stopDisabled();
    recordDisabled();
    $(".circle").attr("style", "");
    $(".seejn").remove();
    $("button#History").css("box-shadow", "0 0");
    document.querySelector("#count").innerText = "";
    document.querySelector("#circle").className = "circle";
}); 
function circleAnimation()
{
    let circle = document.querySelector("#circle");
    let j = 0;
    let len = value.length;
    let cls;
    let termination = setInterval(function()
    {
        animation();
    },2000); 
    $("#Stop").click(function()
    {
        clearInterval(termination);
    });
    function animation()
    {
        if(j != len)
        {
            console.log(j);
            console.log(len);
            cls = value[j].innerHTML;
            console.log(cls);
            circle.classList = "circle" + cls;
            j++;
        }
        else
        {
            alert("Animation Ended.");
            clearInterval(termination);
        }
    }
}
click();
function click()
{
             $(".neon button.Red").mouseup(function()
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
            $(".neon button.Red").mousedown(function()
            {
                $(".circle").attr("style", "");

            });
            $(".neon button.Blue").mouseup(function()
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
            $(".neon button.Blue").mousedown(function()
            {
                $(".circle").attr("style", "");

            });
            $(".neon button.Green").mouseup(function()
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
            $(".neon button.Green").mousedown(function()
            {
                $(".circle").attr("style", "");

            });
            
            $(".neon button.Yellow").mouseup(function()
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
            $(".neon button.Yellow").mousedown(function()
            {
                $(".circle").attr("style", "");
            });
}
function Red()
{
    value[count] = document.querySelector("#Red");
    var clsName = value[count].id;
    createList(clsName);
    count++;
}
function Blue()
{
    value[count] = document.querySelector("#Blue");
    var clsName = value[count].id;
    createList(clsName);
    count++;
}
function Green()
{
    value[count] = document.querySelector("#Green");
    var clsName = value[count].id;
    createList(clsName);
    count++;
}
function Yellow()
{
    value[count] = document.querySelector("#Yellow");
    var clsName = value[count].id;
    createList(clsName);
    count++;
}
function playDisabled()
{    
    $("#Stop").attr("style", "");
  
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