async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="restaurant-name"]').value.trim();
  const location = document.querySelector('input[name="restaurant-location"]').value.trim();
const imageEl = document.getElementbyId("restaurant-image");

if(document.body.contains(imageEl)) //If an image is uploaded, use the url as the image source 
    {
      img_url = imageEl.src;
    }

img_url = '../../images/spencer-david-unsplash.jpg';

  const response = await fetch(`/api/restaurants`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      location, 
      img_url
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });


  if (response.ok) {
    // send to page that shows all restaurants
    window.alert("New Restaurant added");
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-restaurant-form').addEventListener('submit', newFormHandler);