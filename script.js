localStorage.setItem('color','black')
function changeColor(){
    let button = document.getElementsByClassName('btn btn-dark')
    if(localStorage.color==='black'){
        $('body').css('background-color',localStorage.getItem('color'))
        $("#but").attr('class', 'btn btn-light');
        $(".dark").toggleClass('light')
        localStorage.setItem('color','aqua')
    }
    else if(localStorage.color==='aqua'){
        $('body').css('background-color',localStorage.getItem('color'))
        $("#but").attr('class', 'btn btn-dark');
        $(".dark").toggleClass('light')
        localStorage.setItem('color','black')
    }
}
document.cookie = "user=Dalida; path=/; expires=San, 12 Jun 2022 00:00:00 GMT"


let resultPlace = $("#result")
function showResult(){
    let personName = $("#name").val()
    let character = $("#character").val()
    let adverb = $("#adverb").val()
    let adjective = $("#adjective").val()
    $("#title").replaceWith(("<h2>Wendy's crazy MadLibs Story</h2>"))
    $("#result").replaceWith(`<h3>One day my friend <span style="color: green;">${personName}</span> was visiting New York and ran into <span style="color: green;">${character}</span>. <span style="color: green;">${personName}</span> ran <span style="color: green;">${adverb}</span> to meen <span style="color: green;">${character}</span>. But <span style="color: green;">${character}</span> turned out to be very <span style="color: green;">${adjective}</span> and <span style="color: green;">${personName}</span> din not enjoy the meeting. </h3>`)
}
    function showCalcResult(){
        let width= $("#width").val()
        let height = $("#height").val()
        let adverb = $("#number").val()
        let kb =  ((width * height)*3)/1024
        $("#result").replaceWith(`<h3>File is ${kb}KB which is OK </h3>`)
    }