

let init = function(){
    const lightBulbPath = document.querySelector(".light-bulb-path");
    const screen1 = document.querySelector(".js-screen-1");
    const screen1Inner = document.querySelector(".screen-1-inner");
    const lightContainer = document.querySelector(".js-light-container");
    
    const pathLength = lightBulbPath.getTotalLength();
    lightBulbPath.style.strokeDasharray = pathLength + " " + pathLength;
    lightBulbPath.style.strokeDashoffset = pathLength;
    lightBulbPath.getBoundingClientRect();

    const lightPath = document.querySelectorAll(".light-path");
    for (let i = 0; i < lightPath.length; i++) {
        let el = lightPath[i];
        el.style.cssText = "opacity: 0";
    }

    screen1.addEventListener("scroll", () => {

        let currY = screen1.scrollTop;
        let postHeight = screen1.offsetHeight;
        let scrollHeight = screen1Inner.offsetHeight;
        let scrollPercentage = (currY / (scrollHeight - postHeight));

        let drawLength = pathLength * scrollPercentage;
 
        if(scrollPercentage >= 0.95){
            lightContainer.classList.add("light-on");
        } else{
            if(currY < 2100){
                lightContainer.classList.remove("light-on");
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                });
            }
        }

        lightBulbPath.style.strokeDashoffset = pathLength - drawLength;

        if (scrollPercentage >= 1) {
            lightBulbPath.style.strokeDasharray = "none";
        } else {
            if(currY < 2100){
                lightBulbPath.style.strokeDasharray = pathLength + " " + pathLength;
            }
            
        }

        for (let i = 0; i < lightPath.length; i++) {
            let el = lightPath[i];
            el.style.cssText = `opacity: ${scrollPercentage}`;
        }

    });

    // window.addEventListener("scroll", function (event) {
    //     event.preventDefault();
    //     let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    //     let drawLength = pathLength * scrollPercentage;
        
    //     scrollPercentage >= 0.95 ? lightContainer.classList.add("light-on") : lightContainer.classList.remove("light-on") ;

    //     lightBulbPath.style.strokeDashoffset = pathLength - drawLength;
    //     if (scrollPercentage >= 1) {
    //         lightBulbPath.style.strokeDasharray = "none";
            
    //     } else {
    //         lightBulbPath.style.strokeDasharray = pathLength + " " + pathLength;
    //     }

    //     for (let i = 0; i < lightPath.length; i++) {
    //         let el = lightPath[i];
    //         el.style.cssText = `opacity: ${scrollPercentage}`;
    //     }

    // });
};

export {init};