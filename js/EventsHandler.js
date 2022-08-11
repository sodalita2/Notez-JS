function ReturnAddNoteBlock(){

    let AddNoteBlock = `
            <div class="Create-Note-Title">
                <h3>Note Title:</h3>
            </div>
            <div class="Create-Note-Input">
                <input id="Note-Title" type="text" class="Note-Title">
            </div>
            <div class="Create-Note-Checkbox">
                <input id="Important-Checkbox" type="checkbox">
                <label for="Important-Checkbox">Check as important</label>
            </div>
            <div class="Note-Content-Container">
                <textarea id="Note-Textarea" class="Note-Textarea" placeholder="Type note here..."></textarea>
                <div class="Emoji-Container">
                    <div id="Emoji-Opener" class="Emoji-Opener"></div>
                    <div id="Emoji-Menu" class="Emoji-Menu">
                        <button type="button" class="Emoji-Button">😁</button>
                        <button type="button" class="Emoji-Button">😂</button>
                        <button type="button" class="Emoji-Button">😃</button>
                        <button type="button" class="Emoji-Button">😄</button>
                        <button type="button" class="Emoji-Button">😅</button>
                        <button type="button" class="Emoji-Button">😆</button>
                        <button type="button" class="Emoji-Button">😉</button>
                        <button type="button" class="Emoji-Button">😊</button>
                        <button type="button" class="Emoji-Button">😋</button>
                        <button type="button" class="Emoji-Button">😌</button>
                        <button type="button" class="Emoji-Button">😍</button>
                        <button type="button" class="Emoji-Button">😏</button>
                        <button type="button" class="Emoji-Button">😒</button>
                        <button type="button" class="Emoji-Button">😓</button>
                        <button type="button" class="Emoji-Button">😔</button>
                        <button type="button" class="Emoji-Button">😖</button>
                        <button type="button" class="Emoji-Button">😘</button>
                        <button type="button" class="Emoji-Button">😚</button>
                        <button type="button" class="Emoji-Button">😜</button>
                        <button type="button" class="Emoji-Button">😝</button>
                        <button type="button" class="Emoji-Button">😞</button>
                        <button type="button" class="Emoji-Button">😠</button>
                        <button type="button" class="Emoji-Button">😢</button>
                        <button type="button" class="Emoji-Button">😤</button>
                        <button type="button" class="Emoji-Button">😥</button>
                        <button type="button" class="Emoji-Button">😨</button>
                        <button type="button" class="Emoji-Button">😩</button>
                        <button type="button" class="Emoji-Button">😪</button>
                        <button type="button" class="Emoji-Button">😫</button>
                        <button type="button" class="Emoji-Button">😭</button>
                        <button type="button" class="Emoji-Button">😰</button>
                        <button type="button" class="Emoji-Button">😱</button>
                        <button type="button" class="Emoji-Button">😲</button>
                        <button type="button" class="Emoji-Button">😳</button>
                        <button type="button" class="Emoji-Button">😵</button>
                        <button type="button" class="Emoji-Button">😷</button>
                        <button type="button" class="Emoji-Button">😸</button>
                        <button type="button" class="Emoji-Button">😹</button>
                        <button type="button" class="Emoji-Button">😺</button>
                        <button type="button" class="Emoji-Button">😻</button>
                        <button type="button" class="Emoji-Button">😼</button>
                        <button type="button" class="Emoji-Button">😽</button>
                        <button type="button" class="Emoji-Button">😾</button>
                        <button type="button" class="Emoji-Button">😿</button>
                        <button type="button" class="Emoji-Button">🙀</button>
                        <button type="button" class="Emoji-Button">🙅</button>
                        <button type="button" class="Emoji-Button">🙆</button>
                        <button type="button" class="Emoji-Button">🙇</button>
                        <button type="button" class="Emoji-Button">🙈</button>
                        <button type="button" class="Emoji-Button">🙉</button>
                        <button type="button" class="Emoji-Button">🙊</button>
                        <button type="button" class="Emoji-Button">🙋</button>
                        <button type="button" class="Emoji-Button">🙌</button>
                        <button type="button" class="Emoji-Button">🙍</button>
                        <button type="button" class="Emoji-Button">🙎</button>
                        <button type="button" class="Emoji-Button">🙏</button>
                    </div>
                </div>
            </div>
            <div class="Options-Container">
                <div class="Font-Container">
                    <div id="Font-Limit">Font size limit of 50 reached!</div>
                    <div id="Font-Adjusters">
                        <button id="Decrease-Font">Decrease Fontsize</button>
                        <span id="Current-FontSize"></span>
                        <button id="Increase-Font">Increase Fontsize</button>
                    </div>
                </div>
                <div class="TextOptions-Container">
                    <div class="TextAlign">
                        <button id="Align-Left"><img src="/resources/Align-Left.png"></button>
                        <button id="Align-Center"><img src="/resources/Align-Center.png"></button>
                        <button id="Align-Right"><img src="/resources/Align-Right.png"></button>
                    </div>
                    <div class="FontWeight">
                        <button id="Weight-300">Weight 300</button>
                        <button id="Weight-500">Weight 500</button>
                        <button id="Weight-700">Weight 700</button>
                    </div>
                </div>
            </div>
            <div class="Create-Note-Button">
                <button id="Create-Note">Create Note</button>
            </div>
        `;

    return AddNoteBlock;
}

function ReturnNoteBlock(){

    let NoteBlock = `
            <div class="Create-Note-Title">
                <h3>Note Title:</h3>
            </div>
            <div class="Create-Note-Input">
                <input id="Note-Title" type="text" class="Note-Title">
            </div>
            <div class="Create-Note-Checkbox">
                <input id="Important-Checkbox" type="checkbox">
                <label for="Important-Checkbox">Check as important</label>
            </div>
            <div class="Note-Content-Container">
                <textarea id="Note-Textarea" class="Note-Textarea" placeholder="Type note here..."></textarea>
                <div class="Emoji-Container">
                    <div id="Emoji-Opener" class="Emoji-Opener"></div>
                    <div id="Emoji-Menu" class="Emoji-Menu">
                        <button type="button" class="Emoji-Button">😁</button>
                        <button type="button" class="Emoji-Button">😂</button>
                        <button type="button" class="Emoji-Button">😃</button>
                        <button type="button" class="Emoji-Button">😄</button>
                        <button type="button" class="Emoji-Button">😅</button>
                        <button type="button" class="Emoji-Button">😆</button>
                        <button type="button" class="Emoji-Button">😉</button>
                        <button type="button" class="Emoji-Button">😊</button>
                        <button type="button" class="Emoji-Button">😋</button>
                        <button type="button" class="Emoji-Button">😌</button>
                        <button type="button" class="Emoji-Button">😍</button>
                        <button type="button" class="Emoji-Button">😏</button>
                        <button type="button" class="Emoji-Button">😒</button>
                        <button type="button" class="Emoji-Button">😓</button>
                        <button type="button" class="Emoji-Button">😔</button>
                        <button type="button" class="Emoji-Button">😖</button>
                        <button type="button" class="Emoji-Button">😘</button>
                        <button type="button" class="Emoji-Button">😚</button>
                        <button type="button" class="Emoji-Button">😜</button>
                        <button type="button" class="Emoji-Button">😝</button>
                        <button type="button" class="Emoji-Button">😞</button>
                        <button type="button" class="Emoji-Button">😠</button>
                        <button type="button" class="Emoji-Button">😢</button>
                        <button type="button" class="Emoji-Button">😤</button>
                        <button type="button" class="Emoji-Button">😥</button>
                        <button type="button" class="Emoji-Button">😨</button>
                        <button type="button" class="Emoji-Button">😩</button>
                        <button type="button" class="Emoji-Button">😪</button>
                        <button type="button" class="Emoji-Button">😫</button>
                        <button type="button" class="Emoji-Button">😭</button>
                        <button type="button" class="Emoji-Button">😰</button>
                        <button type="button" class="Emoji-Button">😱</button>
                        <button type="button" class="Emoji-Button">😲</button>
                        <button type="button" class="Emoji-Button">😳</button>
                        <button type="button" class="Emoji-Button">😵</button>
                        <button type="button" class="Emoji-Button">😷</button>
                        <button type="button" class="Emoji-Button">😸</button>
                        <button type="button" class="Emoji-Button">😹</button>
                        <button type="button" class="Emoji-Button">😺</button>
                        <button type="button" class="Emoji-Button">😻</button>
                        <button type="button" class="Emoji-Button">😼</button>
                        <button type="button" class="Emoji-Button">😽</button>
                        <button type="button" class="Emoji-Button">😾</button>
                        <button type="button" class="Emoji-Button">😿</button>
                        <button type="button" class="Emoji-Button">🙀</button>
                        <button type="button" class="Emoji-Button">🙅</button>
                        <button type="button" class="Emoji-Button">🙆</button>
                        <button type="button" class="Emoji-Button">🙇</button>
                        <button type="button" class="Emoji-Button">🙈</button>
                        <button type="button" class="Emoji-Button">🙉</button>
                        <button type="button" class="Emoji-Button">🙊</button>
                        <button type="button" class="Emoji-Button">🙋</button>
                        <button type="button" class="Emoji-Button">🙌</button>
                        <button type="button" class="Emoji-Button">🙍</button>
                        <button type="button" class="Emoji-Button">🙎</button>
                        <button type="button" class="Emoji-Button">🙏</button>
                    </div>
                </div>
            </div>
            <div class="Options-Container">
                <div class="Font-Container">
                    <div id="Font-Limit">Font size limit of 50 reached!</div>
                    <div id="Font-Adjusters">
                        <button id="Decrease-Font">Decrease Fontsize</button>
                        <span id="Current-FontSize"></span>
                        <button id="Increase-Font">Increase Fontsize</button>
                    </div>
                </div>
                <div class="TextOptions-Container">
                    <div class="TextAlign">
                        <button id="Align-Left"><img src="/resources/Align-Left.png"></button>
                        <button id="Align-Center"><img src="/resources/Align-Center.png"></button>
                        <button id="Align-Right"><img src="/resources/Align-Right.png"></button>
                    </div>
                    <div class="FontWeight">
                        <button id="Weight-300">Weight 300</button>
                        <button id="Weight-500">Weight 500</button>
                        <button id="Weight-700">Weight 700</button>
                    </div>
                </div>
            </div>
            <div class="Create-Note-Button">
                <button id="Create-Note">Create Note</button>
            </div>
        `;

    return NoteBlock;
}



var HomePage = document.querySelector("#HomePage");

var AddNoteButton = document.querySelector("#Add-Note");

var RightSideDivOpen = 0;

AddNoteButton.addEventListener("click", () =>{

    RightSideDivOpen += 1;

    if (RightSideDivOpen == 1){
        let RightSideDiv = document.createElement('div');
        RightSideDiv.classList.add('Right-Side');
        RightSideDiv.setAttribute('id','Right-Side');


        let AddNoteBlock = ReturnAddNoteBlock();
        
        RightSideDiv.innerHTML = AddNoteBlock;
        HomePage.appendChild(RightSideDiv);
    }
    








    /* ########################################## */


    var NoteTextarea = document.querySelector("#Note-Textarea");

    var EmojiOpenerDiv = document.querySelector("#Emoji-Opener");
    
    var EmojiMenuDiv = document.querySelector("#Emoji-Menu");
    
    var EmojiButtons = document.querySelectorAll(".Emoji-Button");
    
    
    var EmojiOpenerDivBool = false;
    EmojiOpenerDiv.addEventListener("click", () =>{
    
        if (EmojiOpenerDivBool == false){
            EmojiOpenerDiv.innerText = "X";
            EmojiOpenerDiv.style.backgroundImage = "none";
            EmojiMenuDiv.style.display = "flex";
            for (let i=0;i<EmojiButtons.length;i++){
                EmojiButtons[i].style.display = "inline-block";
            }
            EmojiOpenerDivBool = true;
        }else if (EmojiOpenerDivBool == true){
            EmojiOpenerDiv.innerText = "";
            EmojiOpenerDiv.style.backgroundImage = "";
            EmojiMenuDiv.style.display = "none";
            for (let i=0;i<EmojiButtons.length;i++){
                EmojiButtons[i].style.display = "none";
            }
            EmojiOpenerDivBool = false;
        }
    });
    

    

    



    /* ########################################## */

    var CurrentFontSize = document.querySelector("#Current-FontSize");
    var IncreaseFontButton = document.querySelector("#Increase-Font");
    var DecreaseFontButton = document.querySelector("#Decrease-Font");

    var FontLimitDiv = document.querySelector("#Font-Limit");

    CurrentFontSize.innerText = "18";

    IncreaseFontButton.addEventListener("click", () =>{

        if (parseInt(CurrentFontSize.innerText) < 50){
            NoteTextarea.style.fontSize = (parseInt(CurrentFontSize.innerText)+1).toString()+"px";  
            CurrentFontSize.innerText = (parseInt(CurrentFontSize.innerText)+1).toString();
            FontLimitDiv.style.visibility = "hidden";
            FontLimitDiv.style.animationPlayState = "paused";
        }else{
            FontLimitDiv.innerText = "Font size limit of 50 reached!";
            FontLimitDiv.style.visibility = "visible";
            FontLimitDiv.style.animationPlayState = "running";
        }
        
    });

    DecreaseFontButton.addEventListener("click", () =>{

        if (parseInt(CurrentFontSize.innerText) > 10){
            NoteTextarea.style.fontSize = (parseInt(CurrentFontSize.innerText)-1).toString()+"px";
            CurrentFontSize.innerText = (parseInt(CurrentFontSize.innerText)-1).toString();
            FontLimitDiv.style.visibility = "hidden";
            FontLimitDiv.style.animationPlayState = "paused";
        }else{
            FontLimitDiv.innerText = "Minimum font size is 10!";
            FontLimitDiv.style.visibility = "visible";
            FontLimitDiv.style.animationPlayState = "running";
        }

    });










    
    /* ########################################## */

    var AlignLeftButton = document.querySelector("#Align-Left");
    var AlignCenterButton = document.querySelector("#Align-Center");
    var AlignRightButton = document.querySelector("#Align-Right");


    /* default value on load */
    NoteTextarea.style.textAlign = "left";
    AlignLeftButton.addEventListener("click", () =>{
        NoteTextarea.style.textAlign = "left";
    });
    AlignRightButton.addEventListener("click", () =>{
        NoteTextarea.style.textAlign = "right";
    });
    AlignCenterButton.addEventListener("click", () =>{
        NoteTextarea.style.textAlign = "center";
    });

    var Weight300 = document.querySelector("#Weight-300");
    var Weight500 = document.querySelector("#Weight-500");
    var Weight700 = document.querySelector("#Weight-700");

    /* default value on load */
    NoteTextarea.style.fontWeight = "500";
    Weight300.addEventListener("click", () =>{
        NoteTextarea.style.fontWeight = "300";
    });
    Weight500.addEventListener("click", () =>{
        NoteTextarea.style.fontWeight = "500";
    });
    Weight700.addEventListener("click", () =>{
        NoteTextarea.style.fontWeight = "700";
    });





   



        
    /* jquery selector for id */
    var TypedNoteTitle = $("#Note-Title");

    var NotesContainer = document.querySelector("#Notes-Container");
    var CreateNoteButton = document.querySelector("#Create-Note");

    /* ########################################## */

    CreateNoteButton.addEventListener("click", () =>{
        
        var ImportantCheckbox = document.querySelector("#Important-Checkbox").checked;

        let NoteBox = document.createElement('div');
        NoteBox.classList.add('Note-Box');
        let HiddenTitle = document.createElement('div');
        HiddenTitle.classList.add('Hidden-Title');
        HiddenTitle.innerText = TypedNoteTitle.val();
        NoteBox.appendChild(HiddenTitle);
        let HiddenFontSize = document.createElement('div');
        HiddenFontSize.classList.add('Hidden-FontSize');
        HiddenFontSize.innerText = CurrentFontSize.innerText;
        NoteBox.appendChild(HiddenFontSize);
        let HiddenTextAlign = document.createElement('div');
        HiddenTextAlign.classList.add('Hidden-TextAlign');
        HiddenTextAlign.innerText = NoteTextarea.style.textAlign;
        NoteBox.appendChild(HiddenTextAlign);
        let HiddenFontWeight = document.createElement('div');
        HiddenFontWeight.classList.add('Hidden-FontWeight');
        HiddenFontWeight.innerText = NoteTextarea.style.fontWeight;
        NoteBox.appendChild(HiddenFontWeight);
        let NoteTitle = document.createElement('div');
        NoteTitle.classList.add('Note-Title');
        let TitleSpan = document.createElement('span');
        let SlicedTitle = TypedNoteTitle.val().slice(0,18);
        if (SlicedTitle.length >= 18){
            SlicedTitle = SlicedTitle + "...";
        }
        TitleSpan.innerText = SlicedTitle;
        NoteTitle.appendChild(TitleSpan);
        NoteBox.appendChild(NoteTitle);
        if (ImportantCheckbox == true){
            let ImportantSpan = document.createElement('span');
            ImportantSpan.setAttribute('id','important');
            ImportantSpan.style.visibility = "visible";
            NoteTitle.appendChild(ImportantSpan);
        }
        let HiddenContent = document.createElement('div');
        HiddenContent.classList.add('Hidden-Content');
        HiddenContent.innerText = NoteTextarea.value;
        NoteBox.appendChild(HiddenContent);
        let NoteContent = document.createElement('div');
        NoteContent.classList.add("Note-Content");
        let ContentSpan = document.createElement('span');
        let SlicedContent = NoteTextarea.value.slice(0,80);
        if (SlicedContent.length >= 80){
            SlicedContent = SlicedContent + " . . .";
        }
        ContentSpan.innerText = SlicedContent;
        NoteContent.appendChild(ContentSpan);
        NoteBox.appendChild(NoteContent);


        NotesContainer.appendChild(NoteBox);

        NotesStorageCounter += 1;

        var NoteObj = {
            Important: ImportantCheckbox,
            HiddenTitle: HiddenTitle.innerText,
            Title: SlicedTitle,
            HiddenContent: HiddenContent.innerText,
            Content: SlicedContent,
            TextAlign: NoteTextarea.style.textAlign,
            FontSize: CurrentFontSize.innerText,
            FontWeight: NoteTextarea.style.fontWeight
        };

        localStorage.setItem(`Note${NotesStorageCounter}`,JSON.stringify(NoteObj));


        $("#Right-Side").remove();

        NoteBox.addEventListener("click", () =>{
            $("#Right-Side").remove();

            let RightSideDiv = document.createElement('div');
            RightSideDiv.classList.add('Right-Side');
            RightSideDiv.setAttribute('id','Right-Side');
            
            let NoteBlock = ReturnNoteBlock();
            RightSideDiv.innerHTML = NoteBlock;
            
            RightSideDiv.children[1].lastElementChild.value = HiddenTitle.innerText;
            RightSideDiv.children[3].firstElementChild.value = HiddenContent.innerText;
            RightSideDiv.children[3].firstElementChild.style.fontSize = HiddenFontSize.innerText;
            RightSideDiv.children[3].firstElementChild.style.textAlign = HiddenTextAlign.innerText;
            RightSideDiv.children[3].firstElementChild.style.fontWeight = HiddenFontWeight.innerText;
            RightSideDiv.children[4].firstElementChild.lastElementChild.children[1].innerText = HiddenFontSize.innerText;

            
            HomePage.append(RightSideDiv);
        });


    });












});

























/*
<div class="Note-Box">
    <div class="Hidden-Title"></div>
    <div class="Note-Title"><span>title title</span><span id="important"></span></div>
    <div class="Hidden-Content"></div>
    <div class="Note-Content"><span>content content content content content content content content </span></div>
    <div class="Note-Date"><span>Thursday, 7 August 2022 at 21:57</span></div>
</div>
*/
/*
var NoteObj = {
    Important: ImportantCheckbox,
    HiddenTitle: HiddenTitle.innerText,
    Title: SlicedTitle,
    HiddenContent: HiddenContent.innerText,
    Content: SlicedContent,
    TextAlign: NoteTextarea.style.textAlign,
    FontSize: CurrentFontSize.innerText,
    FontWeight: NoteTextarea.style.fontWeight
};
*/


/* jquery selector for id */
var TypedNoteTitle = $("#Note-Title");

var NotesContainer = document.querySelector("#Notes-Container");
var CreateNoteButton = document.querySelector("#Create-Note");


function getLocalKeys(){

    var keys = Object.keys(localStorage);
    return keys;
}

function MountLocalNotes(){

    let keys = getLocalKeys();
    for (let i=0;i<keys.length;i++){
        let NoteObj = JSON.parse(localStorage.getItem(keys[i]));

        let NoteBox = document.createElement('div');
        NoteBox.classList.add('Note-Box');
        let HiddenTitle = document.createElement('div');
        HiddenTitle.classList.add('Hidden-Title');
        HiddenTitle.innerText = NoteObj.HiddenTitle;
        NoteBox.appendChild(HiddenTitle);
        let HiddenFontSize = document.createElement('div');
        HiddenFontSize.classList.add('Hidden-FontSize');
        HiddenFontSize.innerText = NoteObj.FontSize;
        NoteBox.appendChild(HiddenFontSize);
        let HiddenTextAlign = document.createElement('div');
        HiddenTextAlign.classList.add('Hidden-TextAlign');
        HiddenTextAlign.innerText = NoteObj.TextAlign;
        NoteBox.appendChild(HiddenTextAlign);
        let HiddenFontWeight = document.createElement('div');
        HiddenFontWeight.classList.add('Hidden-FontWeight');
        HiddenFontWeight.innerText = NoteObj.FontWeight;
        NoteBox.appendChild(HiddenFontWeight);
        let NoteTitle = document.createElement('div');
        NoteTitle.classList.add('Note-Title');
        let TitleSpan = document.createElement('span');
        TitleSpan.innerText = NoteObj.Title;
        NoteTitle.appendChild(TitleSpan);
        NoteBox.appendChild(NoteTitle);
        if (NoteObj.Important == true){
            let ImportantSpan = document.createElement('span');
            ImportantSpan.setAttribute('id','important');
            ImportantSpan.style.visibility = "visible";
            NoteTitle.appendChild(ImportantSpan);
        }
        let HiddenContent = document.createElement('div');
        HiddenContent.classList.add('Hidden-Content');
        HiddenContent.innerText = NoteObj.HiddenContent;
        NoteBox.appendChild(HiddenContent);
        let NoteContent = document.createElement('div');
        NoteContent.classList.add("Note-Content");
        let ContentSpan = document.createElement('span');
        ContentSpan.innerText = NoteObj.Content;
        NoteContent.appendChild(ContentSpan);
        NoteBox.appendChild(NoteContent);

        
        NotesContainer.appendChild(NoteBox);


        NoteBox.addEventListener("click", () =>{
            $("#Right-Side").remove();

            let RightSideDiv = document.createElement('div');
            RightSideDiv.classList.add('Right-Side');
            RightSideDiv.setAttribute('id','Right-Side');
            
            let NoteBlock = ReturnNoteBlock();
            RightSideDiv.innerHTML = NoteBlock;
            /*
            document.getElementById("#Note-Title").innerText = HiddenTitle.innerText;
            document.getElementById("#Note-Textarea").innerText = HiddenContent.innerText;
            */
            
            RightSideDiv.children[1].lastElementChild.value = HiddenTitle.innerText;
            RightSideDiv.children[3].firstElementChild.value = HiddenContent.innerText;
            RightSideDiv.children[3].firstElementChild.style.fontSize = HiddenFontSize.innerText;
            RightSideDiv.children[3].firstElementChild.style.textAlign = HiddenTextAlign.innerText;
            RightSideDiv.children[3].firstElementChild.style.fontWeight = HiddenFontWeight.innerText;
            RightSideDiv.children[4].firstElementChild.lastElementChild.children[1].innerText = HiddenFontSize.innerText;

            
            
            HomePage.append(RightSideDiv);
        });
    }
    

}














if (getLocalKeys().length > 0){
    var NotesStorageCounter = getLocalKeys().length;
    MountLocalNotes();
}else{
    var NotesStorageCounter = 0;
}



