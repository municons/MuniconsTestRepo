
        function checkme(id) {
            if (document.getElementById(id).className == "slide_link") {
                switchon(id)
                addtoarray(id);
            }
            else {
                switchoff(id)
                removefromarray(id);
            }
            sendglobalvalue("slideflow", slideflow);
        }
        function switchon(id) {
            if (id.length > 0 && id!="2000") { document.getElementById(id).className += " checked"; }
        }
        function switchoff(id) {
            if (id.length > 0 && id!="2000") { document.getElementById(id).className = "slide_link"; }
        }
        function addtoarray(id) {
            idn = parseInt(id);
            slideflow[idn] = id;
        }
        function removefromarray(id) {
            idn = parseInt(id);
            slideflow[idn] = "";
        }
        function cleararray() {
			slideflow.forEach(element => switchoff(element));
            slideflow.forEach(element => removefromarray(element));
			$('.overlay').css('display', 'none');
            sendglobalvalue("slideflow", slideflow);	
        }
        function nextslideinflow() {
            sendglobalvalue("slideflowisactive", true);
            fallback = "03";
            from = globalvariables["returntoid"];
            nextslide = "";
            slideflow.forEach(element => checkifhigher(element, from));
            if (nextslide.length < 2) { nextslide = fallback };
            if (parseInt(nextslide) < parseInt(from)) { nextslide = fallback;sendglobalvalue("slideflowisactive", "false");}
            veevaNavigateSceneWithID(nextslide);
        }
        function checkifhigher(id, from) {
            if (id.length > 0 && nextslide.length < 1) {
                if (parseInt(id) > parseInt(from))
                    nextslide = id;
            }
        }
		function checkiflower(id, from) {
            if (id.length > 0 && previousslide.length < 1) {
                if (parseInt(id) < parseInt(from))
                    previousslide = id;
            }
        }
		//slideflow-code end ////////////////////////////////////////////////////////////////////