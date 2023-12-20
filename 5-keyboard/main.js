

const insert=document.querySelector("#insert")

window.addEventListener('keydown',(e)=>{
    insert.innerHTML = `
    <div class='color'>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Key</th>
      <th scope="col">KeyCode</th>
      <th scope="col">Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
   
  </tbody>
</table>
    
    </div>
    `;
})