fetch(json_url).then((Response) => Response.json())
.then(data => {
    let movies_array = data.filter(ele => {
        return ele.name === "The Boys";
    });
    document.getElementById('title').innerText = movies_array[0].name;
    document.getElementByTagName('video')[0].setAttribute(src = movies_array[0].trailer);
    document.getElementByTagName('video')[0].play();
    document.getElementById('low_q').innerText = movies_array[0].low;
    document.getElementById('medium_q').innerText = movies_array[0].medium;
    document.getElementById('high_q').innerText = movies_array[0].high;
    document.getElementById('gen').innerText = movies_array[0].genre;
    document.getElementById('date').innerText = movies_array[0].date;
    document.getElementById('rate').innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i> 9.6 ${movies_arraydata[0].imdb}`;
})