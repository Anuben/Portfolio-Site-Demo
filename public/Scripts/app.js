/*
File Name: app.css
Student's Name: Anuben Keshavala
StudentID: 301120629
Date: October 23, 2020
*/

// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/business-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();