const question = document.querySelectorAll(".que-about");

questions.forEach(q => {
    q.addEventListenr("click",() => {
        const answer = q.nextElementSibling;

        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
            q.querySelector("span").innerText = "+";
        }else{
            answer.style.maxHeight = answer.scrollHeight + "px";
            q.querySelector("span").innerText = "⨯";
        }
    });
});