
var AddNoteButton = document.querySelector("#Add-Note");

var RightSideDiv = document.querySelector("#Right-Side");

AddNoteButton.addEventListener("click", () =>{



});















var NoteTextarea = document.querySelector("#Note-Textarea");

var EmojiOpenerDiv = document.querySelector("#Emoji-Opener");

var EmojiMenuDiv = document.querySelector("#Emoji-Menu");

var EmojiButtons = document.querySelectorAll(".Emoji-Button");


var EmojiOpenerDivBool = false;
EmojiOpenerDiv.addEventListener("click", () =>{

    if (EmojiOpenerDivBool == false){
        CloseEmojiButton.style.display = "flex";
        EmojiOpenerDiv.style.padding = "3px";
        EmojiOpenerDiv.style.height = "80px";
        EmojiOpenerDiv.style.width = "75%";
        EmojiOpenerDiv.style.border = "1px solid black";
        EmojiOpenerDiv.style.backgroundImage = "none";
        EmojiOpenerDiv.style.cursor = "none";
        for (let i=0;i<EmojiButtons.length;i++){
            EmojiButtons[i].style.display = "inline-block";
        }
    }else if (EmojiOpenerDivBool == true){
        
    }
    

});


/*
 for (let i=0;i<EmojiButtons.length;i++){
        EmojiButtons[i].style.display = "none";
    }
    CloseEmojiButton.style.display = null;
    EmojiOpenerDiv.style.width = null;
    EmojiOpenerDiv.style.height = null;
    EmojiOpenerDiv.style.backgroundImage = null;
    EmojiOpenerDiv.style.cursor = "pointer";
*/

var CurrentFontSize = document.querySelector("#Current-FontSize");
var IncreaseFontButton = document.querySelector("#Increase-Font");
var DecreaseFontButton = document.querySelector("#Decrease-Font");

var FontLimitH3 = document.querySelector("#Font-Limit");

CurrentFontSize.innerText = "18";

IncreaseFontButton.addEventListener("click", () =>{

    if (parseInt(CurrentFontSize.innerText) < 50){
        NoteTextarea.style.fontSize = (parseInt(CurrentFontSize.innerText)+1).toString()+"px";  
        CurrentFontSize.innerText = (parseInt(CurrentFontSize.innerText)+1).toString();
    }else{
        
    }
    
});
