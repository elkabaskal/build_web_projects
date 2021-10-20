export const timer = document.getElementById('btn__timer-start').addEventListener('click', () => timerInt());

function timerInt() {

    let counter = +document.getElementById("number").value;
    let id = setInterval(function() {

        document.getElementById('btn__timer-stop').addEventListener('click', () => clearInterval(id));

        if (counter === -1) {
            clearInterval(id);
        } else {
            const timerBlock = document.getElementById("run__timer");
            timerBlock.textContent = counter;
            counter--;
            if (counter <= 5) {
                var audio = new Audio("peep.mp3");
                audio.play();


                /*  var sound = new Howl({
                     src: ['sound.mp3']
                 });

                 sound.play(); */
            }
        }
    }, 1000);
}