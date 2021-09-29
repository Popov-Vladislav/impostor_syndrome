const addHiddenClass = (arrSel, className) => {
    arrSel.forEach(v=>{
            v.classList.add('hidden')
            if(className && v.classList.contains(className)){
                v.classList.remove('hidden')
            }
    })
}

window.onload = function() {
    const questions = document.querySelectorAll('.question')
    const buttons = document.querySelectorAll('.uk-button')
    const results = document.querySelectorAll('.result')
    const title = document.getElementById('first-title')
    console.log(buttons, questions)
    addHiddenClass(questions, 'question-1')
    addHiddenClass(results)

    buttons.forEach(button=>{
        console.log(button)
        button.addEventListener('click', () => {
            const nextQuestion = button.getAttribute('data-next-quest')
            if(nextQuestion){
                addHiddenClass(questions, nextQuestion)
                return
            }
            const result = button.getAttribute('data-result')
            if(result){
                addHiddenClass(questions)
                title.classList.add('hidden')
                addHiddenClass(results, result)
            }
        })
    })
}