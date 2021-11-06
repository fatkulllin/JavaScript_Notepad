let texts = [

];

let textarea = document.querySelector('textarea')
let textButton = document.querySelector('#text button')
let ul = document.querySelector('#notes')
let createButton = document.querySelector('#create button')
let k = 0
let p = document.querySelector('p')

p.innerHTML= 'Режим создания'

textButton.addEventListener('click',function(){

    let mode = this.dataset.mode;

    if (mode == 'create') {
        k++
        texts.push(textarea.value)
        let li = document.createElement('li')
        li.dataset.key = k
        ul.appendChild(li)
        textarea.value = ''
        let span = document.createElement('span')
        span.innerHTML = 'Запись ' + k
        span.classList.add('open')
        li.appendChild(span)
        span.addEventListener('click',function(){
            let lis = document.querySelectorAll('li')
            for (let elem of lis){
                if(elem.classList.contains('active') == true){
                    elem.classList.remove('active')
                }
            }
            li.classList.add('active')
            textButton.dataset.key = li.dataset.key
            textarea.value = texts[li.dataset.key - 1]
            textButton.dataset.key = li.dataset.key
        })
        let span2 = document.createElement('span')
        span2.innerHTML = ' X'
        span2.classList.add('remove')
        li.appendChild(span2)
        span2.addEventListener('click',function(event){
            alert(span.innerHTML + ' удален')
            li.remove()
        })
    }
    if (mode == 'update') {
        let key = this.dataset.key;
        texts[key-1] = textarea.value
        
    }
})

createButton.addEventListener('click',function(){
    let mode = textButton.dataset.mode;
    if (mode == 'create') {
        textButton.dataset.mode = 'update'
        p.innerHTML= 'Обновление'
    }else{
        textButton.dataset.mode = 'create'
        p.innerHTML= 'Режим создания'
    }
})