const questions = [{
    id: 0,
    question: "Choose your weapon",
    btn1: "Sword",
    btn2: "Staff",
},
{
    id: 1,
    question: "Choose your attire",
    btn1: "Heavy Armor",
    btn2: "Light Robe",
},
{
    id: 2,
    question: "Choose your battlefield",
    btn1: "Valley",
    btn2: "Cave",
},
{
    id: 3,
    question: "Choose your item",
    btn1: "Dagger",
    btn2: "Smokebomb",
},
{
    id: 4,
    question: "Choose your companion",
    btn1: "Griffin",
    btn2: "Dragon",
}]



let warrior = 0
let wizard = 0
let counter = 0


const play = async function (div) {


    if (counter <= questions.length - 1) {
        
        screenify(questions[counter])
        counter++

    } else {
        
        if (warrior > wizard) {
            
            div.innerHTML = `You are a Warrior`
            animate('warrior')
            return
        }
        if (warrior < wizard) {
            
            div.innerHTML = `You are a Wizard`
            animate('wiz')
            return
        }

        if (warrior === wizard) {
            div.innerHTML = `You are a Paladin`
            animate('wiz')
            return
        }
    }

}

const screenify = function (q) {

    const qDiv = document.querySelector("#questions")
    const questionp = document.createElement('p')
    const yabtn = document.createElement('button')
    const nobtn = document.createElement('button')

    qDiv.innerHTML = ""

    questionp.textContent = q.question
    yabtn.innerHTML = q.btn1
    nobtn.innerHTML = q.btn2
    

    qDiv.append(questionp)
    qDiv.append(yabtn)
    qDiv.append(nobtn)


    yabtn.addEventListener('click', () => {
        warrior++
        play(qDiv)
    })

    nobtn.addEventListener('click', () => {
        wizard++
       play(qDiv)

    })



}


const animate = (name) => {
    let anim = document.querySelector('#anim')
    let question = document.querySelector('#questions')
    let num = random()
    anim.style.display = "block"
    
    
    //redoing question styles to look better for mobile
    question.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    question.style.border = 'none'
    question.style.marginTop = '30%'
    question.style.height = 'auto'
    question.style.fontSize = '30px'

    
    if (name === "warrior") {
        anim.style.backgroundImage = `url("/img/knight${num}.png")`
    } else {
        anim.style.backgroundImage = `url("/img/wiz${num}.png")`
    }
    
}

const random = function () {

    let random = Math.floor(Math.random() * 2) + 1
    
    return random
}


play()



