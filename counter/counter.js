const counter = document.querySelectorAll('.counter')

counter.forEach(counter =>{
    counter.innerText = '0'

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target')
        const cc = +counter.innerText
        const increse = target/200

        if(cc<target) {
            counter.innerText =`${Math.ceil(cc+increse)}`
            setTimeout(updateCounter, 1)
        } else{
            counter.innerText = target
        }
         
    }
    updateCounter()
})