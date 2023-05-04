function selectControl() {
    var element3700 = document.getElementById('3700').classList.contains('checked');

    if (element3700) {
        checkme('3710');
        checkme('3720');

        $('#3700, #3710, #3720').parent().siblings().find('.overlay').css('display', 'block');


    } else {
        switchoff('3710')
        removefromarray('3710');

        switchoff('3720')
        removefromarray('3720');

        $('#3700, #3710, #3720').parent().find('.overlay').css('display', 'none');

    }
}

function selectControl3710() {
    var element3710 = document.getElementById('3710').classList.contains('checked');

    if (element3710) {
        checkme('3700');
        checkme('3720');

        $('#3700, #3710, #3720').parent().siblings().find('.overlay').css('display', 'block');
    } else {
        switchoff('3700')
        removefromarray('3700');

        switchoff('3720')
        removefromarray('3720');


        $('#3700, #3710, #3720').parent().find('.overlay').css('display', 'none');
    }
}

function selectControl3720() {
    var element3720 = document.getElementById('3720').classList.contains('checked');


    if (element3720) {
        checkme('3700');
        checkme('3710');


        $('#3700, #3710, #3720').parent().siblings().find('.overlay').css('display', 'block');
    } else {
        switchoff('3700')
        removefromarray('3700');

        switchoff('3710')
        removefromarray('3710');


        $('#3700, #3710, #3720').parent().find('.overlay').css('display', 'none');
    }
}

function selectControl3300() {
    var element3300 = document.getElementById('3300').classList.contains('checked');

    if (element3300) {
        checkme('3310');

        $('#3300, #3310').parent().siblings().find('.overlay').css('display', 'block');
    } else {

        switchoff('3310')
        removefromarray('3310');

        $('#3300, #3310').parent().find('.overlay').css('display', 'none');
    }

}

function selectControl3310() {
    var element3310 = document.getElementById('3310').classList.contains('checked');

    if (element3310) {
        checkme('3300');

        $('#3300, #3310').parent().siblings().find('.overlay').css('display', 'block');
    } else {

        switchoff('3300')
        removefromarray('3300');

        $('#3300, #3310').parent().find('.overlay').css('display', 'none');
    }

}

function selectControl3600() {
    var element3600 = document.getElementById('3600').classList.contains('checked');

    if (element3600) {
        checkme('3610');
        checkme('3620');
        checkme('3630');
        checkme('3640');

        $('#3600, #3610, #3620, #3630, #3640').parent().siblings().find('.overlay').css('display', 'block');
    } else {

        switchoff('3610')
        removefromarray('3610');

        switchoff('3620')
        removefromarray('3620');

        switchoff('3630')
        removefromarray('3630');

        switchoff('3640')
        removefromarray('3640');

        $('#3600, #3610, #3620, #3630, #3640').parent().siblings().find('.overlay').css('display', 'none');


    }
}

function selectControl3610() {
    var element3610 = document.getElementById('3610').classList.contains('checked');

    if (element3610) {
        checkme('3600');
        checkme('3620');
        checkme('3630');
        checkme('3640');

        $('#3600, #3610, #3620, #3630, #3640').parent().siblings().find('.overlay').css('display', 'block');
    } else {

        switchoff('3600')
        removefromarray('3600');

        switchoff('3620')
        removefromarray('3620');

        switchoff('3630')
        removefromarray('3630');

        switchoff('3640')
        removefromarray('3640');

        $('#3600, #3610, #3620, #3630, #3640').parent().siblings().find('.overlay').css('display', 'none');


    }
}

function selectControl3620() {
    var element3620 = document.getElementById('3620').classList.contains('checked');

    if (element3620) {
        checkme('3600');
        checkme('3610');
        checkme('3630');
        checkme('3640');

        $('#3600, #3610, #3620, #3630, #3640').parent().siblings().find('.overlay').css('display', 'block');
    } else {

        switchoff('3600')
        removefromarray('3600');

        switchoff('3610')
        removefromarray('3610');

        switchoff('3630')
        removefromarray('3630');

        switchoff('3640')
        removefromarray('3640');

        $('#3600, #3610, #3620, #3630, #3640').parent().siblings().find('.overlay').css('display', 'none');


    }
}

function selectControl3630() {
    var element3630 = document.getElementById('3630').classList.contains('checked');

    if (element3630) {
        checkme('3600');
        checkme('3610');
        checkme('3620');
        checkme('3640');

        $('#3600, #3610, #3620, #3630, #3640').parent().siblings().find('.overlay').css('display', 'block');
    } else {

        switchoff('3600')
        removefromarray('3600');

        switchoff('3610')
        removefromarray('3610');

        switchoff('3620')
        removefromarray('3620');

        switchoff('3640')
        removefromarray('3640');

        $('#3600, #3610, #3620, #3630, #3640').parent().siblings().find('.overlay').css('display', 'none');


    }
}

function selectControl3640() {
    var element3630 = document.getElementById('3640').classList.contains('checked');

    if (element3630) {
        checkme('3600');
        checkme('3610');
        checkme('3620');
        checkme('3630');

        $('#3600, #3610, #3620, #3630, #3640').parent().siblings().find('.overlay').css('display', 'block');
    } else {

        switchoff('3600');
        removefromarray('3600');

        switchoff('3610');
        removefromarray('3610');

        switchoff('3620');
        removefromarray('3620');

        switchoff('3630');
        removefromarray('3630');

        $('#3600, #3610, #3620, #3630, #3640').parent().siblings().find('.overlay').css('display', 'none');


    }

}