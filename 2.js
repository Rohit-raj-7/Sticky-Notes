function onClickbutton() {
    let box = document.createElement('div')
    box.style.height = '100px'
    box.style.width = '100px'
    box.style.backgroundColor = 'blue'
    box.style.borderRadius = '10px'
    box.style.padding = '30px'
    box.style.color = 'white'
    //div.style.display='flex'
    // let color=document.getElementById('color')
 

    let text = document.getElementById("input")
    box.innerText = text.value
    if (text.value.length == 0) {
        return 0;
    }

    let note = document.getElementById("note")
    note.append(box)

}