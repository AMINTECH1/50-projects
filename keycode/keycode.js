const insert = document.getElementById('insert')

window.addEventListener('keydown', (mk)=>{
insert.innerHTML = `
<div class="key">
            ${mk.key === ' ' ? 'Space' : mk.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${mk.keyCode}
            <small>event.keycode</small>
        </div>
        <div class="key">
            ${mk.code}
            <small>event.code</small>
        </div>
`
})