import { useState } from 'react'
import reactLogo from './assets/react.svg'
import marcus from './assets/marcus.jpg'
import seneca from './assets/seneca.jpg'
import epictetus from './assets/epictetus.jpg'
import './Ask.css'
import { askQuestion } from './utlis'

export default function Ask({ myQuestion, setMyQuestion, myPhil, setMyPhil, setIsAskMode, sendQuestion }) {

  var select = document.querySelector('.image-select');

  var template = function (data, container) {
    var img = document.createElement('img');
    img.src = data.element.getAttribute('data-image');
    img.style.width = '32px';
    img.style.height = '32px';
    img.style.marginRight = '8px';

    var text = document.createElement('span');
    text.textContent = data.text;

    container.appendChild(img);
    container.appendChild(text);
    return container;
  }

  var options = {
    templateSelection: template,
    templateResult: template
  };

  var select2 = new Select2(select, options);


  return (
    <div id="ask-module">
      <label htmlFor="phil">Select your philosopher</label>



      <select class="image-select" id="phil" name="phil" onChange={(e) => setMyPhil(e.target.value)}>
        <option data-image={seneca}>Seneca</option>
        <option data-image={marcus}>Marcus Aurelius</option>
        <option data-image={epictetus}>Epictetus</option>
      </select>


      <textarea name="question" id="question" cols="30" rows="10" onChange={e => setMyQuestion(e.target.value)} value={myQuestion}></textarea>
      <button onClick={sendQuestion}>Ask</button>
    </div >

  )

}
