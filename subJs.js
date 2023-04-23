let trusterTemplates = [
    'heading',
    'tab',
    'defaultTruster'
]
let classAUsedTimes = 0
let subJs = {
    newTag: function(tag){
        return document.createElement(tag)
    },
    setTagText: function(text, tag){
        tag.innerText = text
    },
    setTagTruster: function(tag, trusterTemplate = 'defaultTruster'){
        let ret = `the truster template is not a valid template`
        if(
            trusterTemplate == trusterTemplates[0] 
            || 
            trusterTemplate == trusterTemplates[1]
            ||
            trusterTemplate == trusterTemplates[2]
            ){
            ret = trusterTemplate + 'Truster' + tag
        }
        return ret
    },
    showTag: function(tag, truster, child = document.body){
        if(
            truster == trusterTemplates[0] + 'Truster' + tag
            ||
            truster == trusterTemplates[1] + 'Truster' + tag
            ||
            truster == trusterTemplates[2] + 'Truster' + tag
            ){
            child.appendChild(tag)
        }else{
            console.error('the truster is not original')
        }
    },
    getChild: function(child = 'body'){
        return document.querySelector(child)
    },
    getChildByClass: function(child = 'container'){
        return document.querySelector(`.${child}`)
    },
    getChildById: function(child = 'container'){
        return document.querySelector(`#${child}`)
    },
    getAllChildsByAttribute: function(attribute, value = 'true'){
        return document.querySelectorAll(`[${attribute}=${value}]`)
    },
    getLength: function(string = ''){
        return string.length
    },
    turnStringType: function(num = 0){
        return num + ''
    },
    eventList: {
        onEventGeted: function(child, event, func = () => {}){
            child.addEventListener(event, func)
        },
        removeOnEventGeted: function(child, event, func = () => {}){
            child.removeEventListener(event, func)
        }
    },
    Reload: function(){
        window.location.reload()
    },
    isNumber: function(expression = 0 || "0"){
        let ret = false
        if(
            expression.charAt(0) == 0
            ||
            expression.charAt(0) == 1
            ||
            expression.charAt(0) == 2
            ||
            expression.charAt(0) == 3
            ||
            expression.charAt(0) == 4
            ||
            expression.charAt(0) == 5
            ||
            expression.charAt(0) == 6
            ||
            expression.charAt(0) == 7
            ||
            expression.charAt(0) == 8
            ||
            expression.charAt(0) == 9
          ){
            ret = true
        }
        return ret
    },
    isFakeTruster: function(truster, tag, trusterTemplate = 'defaultTruster'){
        let ret = false
        if(
            truster != trusterTemplate + 'Truster' + tag
        ){
            ret = true
        }
        return ret
    }
}
class tagAutoShow {
    tag = null
    childShow = document.body
    constructor(child, ShowChild, innerHTML){
        this.tag = document.createElement(child)
        this.childShow = ShowChild
        this.tag.innerHTML = innerHTML
        if(classAUsedTimes < 10){
            this.childShow.appendChild(this.tag)
            classAUsedTimes++
        }else{
            console.error('tryng use "tagAutoShow" more 10 time')
        }
    }
    changeHTML = (newInnerHTML) => {
        this.tag.innerHTML = newInnerHTML
    }
    changeText = (newInnerText) => {
        this.tag.innerText = newInnerText
    }
}
class newWindow {
    win = null
    constructor(url, options = {target: '_blank'}){
        this.win = window.open(url, options.target)
    }
    close = () => {
        this.win.close()
    }
    targetWindow = {
        href: function(url){
            this.win.location.href = url
        }
    }
}