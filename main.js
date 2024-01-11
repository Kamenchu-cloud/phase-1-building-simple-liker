// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

// .hidden class
const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

// Event listener 
const emptyHearts = document.querySelectorAll('.like-glyph');
emptyHearts.forEach(emptyHeart => {
  emptyHeart.addEventListener('click', function () {
    mimicServerCall()
      .then(() => {
        emptyHeart.classList.add('activated-heart');
        emptyHeart.innerText = FULL_HEART;
      })
      .catch((error) => {
        errorModal.classList.remove('hidden');
        document.getElementById('modal-message').innerText = error;
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });
});

// Event listener for clicking on a full heart
emptyHearts.forEach(fullHeart => {
  fullHeart.addEventListener('click', function () {
    fullHeart.classList.remove('activated-heart');
    fullHeart.innerText = EMPTY_HEART;
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
