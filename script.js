let numberofbutton = document.querySelectorAll(".drum").length:
for (let i = 0; i<numberofbutton; i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("clicked", function(){
            let buttoninnerhtml=this.innerHTML;
            makesound(buttoninnerhtml);
            buttonanimation(buttoninnerhtml);
        });
    }
    addEventListener("keydown", function(event){
        makesound(event.key);
        buttonanimation(event.key);
    })

    function makesound(key){
        switch (key){
            case "w":
                let audio=new Audio("sounds/kick.wav");
                audio.play();
                break;
            case "a":
                let audio=
        }
    }