fetch('https://openlibrary.org/search.json?q=harry+potter')
  .then(response =>{
    if(!response.ok){
throw new Error('response not ok');
    }
return response.json();
    })

  .then(data => {
    const container=document.getElementById("bookcontainer");
    data.docs.forEach(book => {
        const card=document.createElement("div");
        card.className= "card";
        card.innerHTML=`
        <div class="title">  ${book.title}</div>
      <div class="author"> <strong> Author</strong>: ${book.author_name?.join(' ,')}</div>
      <div class="year"> <strong>Year</strong>:${book.first_publish_year || 'N/A'}</div>
      `;
      container.appendChild(card);
    });
  })
  .catch(Error=>{
   const container=document.getElementById("bookcontainer");
   container.innerHTML=`<p>Error: ${Error.message}</p>`
    console.error("Error fetching data:", Error);
});