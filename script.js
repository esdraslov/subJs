let tag = new tagAutoShow('div', subJs.getChild('.result'), 'hello world')
let buttonR = subJs.getChildByClass('reload')
let button = subJs.getChildByClass('resultBtn')
let title = subJs.getChildByClass('title')
let description = subJs.getChildByClass('description')

button.addEventListener('click', () => {
    let text = prompt('the text')
    if(subJs.isNumber(text)){
        tag.changeText(subJs.turnStringType(text))
    }else{
        tag.changeText(text)
    }
})
title.addEventListener('mouseenter', () => {
    description.hidden = false
})
title.addEventListener('mouseleave', () => {
    description.hidden = true
})
subJs.eventList.onEventGeted(buttonR, 'click', () => {
    subJs.Reload()
})