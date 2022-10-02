var selectedColor = "white"
var titulo = ""
var autor = ""

var colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "cyan",
    "pink",
    "white"
]

var colors_to_id = {
    "red" : 1,
    "green" : 2,
    "blue" : 3,
    "yellow" : 4,
    "orange" : 5,
    "purple" : 6,
    "cyan" : 7,
    "pink" : 8,
    "white" : 9
}

function setup(){
    var div_holder = document.getElementById("div_holder")
    for(var i = 0; i < 16 * 16; i++){
        div_holder.insertAdjacentHTML('beforeend', `
            <div class="div_paint" style="background-color: white" onclick="changeColor(this)"></div>
        `)
    }

    var div_colors = document.getElementById("div_colors")
    for(var i = 0; i < colors.length; i++){
        div_colors.insertAdjacentHTML('beforeend', `
            <div class="div_color" style="background-color: ${colors[i]}" onclick="selectColor(this)"></div>
        `)
    }
}

function selectColor(div_color){
    selectedColor = div_color.style.backgroundColor
}

function changeColor(div_paint){
    div_paint.style.backgroundColor = selectedColor
    updateJSON()
}

function changeTitle(_titulo){
    titulo = _titulo.value;
    updateJSON()
}

function changeAuthor(_autor){
    autor = _autor.value;
    updateJSON()
}

function updateJSON(){
    var div_holder = document.getElementById("div_holder")
    var text_json = document.getElementById("text_json");

    json_text = `{
"titulo" : "${titulo}",
"autor" : "${autor}",
"cores" : [\n`;
    var aux = 1;
    for (var i = 1; i <= div_holder.children.length; i++) {
        json_text += `${colors_to_id[div_holder.children[i - 1].style.backgroundColor]}${(i != div_holder.children.length) ? ', ' : ''}`
        if(i % 16 == 0)
            json_text += `\n`
    }
    json_text += `]\n}`

    text_json.innerHTML = json_text;
}

setup();
updateJSON();