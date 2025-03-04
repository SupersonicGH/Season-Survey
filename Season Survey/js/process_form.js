function validateData() {


    document.infoForm.first_name.onblur = function fName() {
        let fName = document.getElementById("fName");
        let span = fName.getElementsByTagName("span");
        let first_name = document.getElementById("first_name");
        let fName_format = /^[A-Z][a-z]+$/;
        if (first_name.value.length > 0 && first_name.value != null && first_name.value.match(fName_format)) {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("Success!"));

            } else {
                span[0].firstChild.nodeValue = "Success!";

            }
        } else {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("Error!"));

            } else {
                span[0].firstChild.nodeValue = "Error!";

            }
        }
    }


    document.infoForm.first_name.onfocus = function () {
        let fName = document.getElementById("fName");
        let span = fName.getElementsByTagName("span");
        span[0].firstChild.nodeValue = "Please enter your first name!"
    }


    document.infoForm.last_name.onblur = function lName() {
        let lName = document.getElementById("lName");
        let span = lName.getElementsByTagName("span");
        let last_name = document.getElementById("last_name");
        let lName_format = /^[A-Z][ ]?[']?[a-z]+$/;
        if (last_name.value.length > 0 && last_name.value != null && last_name.value.match(lName_format)) {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("Success!"));

            } else {
                span[0].firstChild.nodeValue = "Success!";

            }
        } else {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("Error!"));

            } else {
                span[0].firstChild.nodeValue = "Error!";

            }
        }
    }

    document.infoForm.last_name.onfocus = function () {
        let lName = document.getElementById("lName");
        let span = lName.getElementsByTagName("span");
        span[0].firstChild.nodeValue = "Please enter your last name!"
    }


    document.infoForm.phone.onblur = function phoneN() {
        let phoneN = document.getElementById("phoneN");
        let span = phoneN.getElementsByTagName("span");
        let phone = document.getElementById("phone");
        let phoneN_format = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/;
        if (phone.value.length > 0 && phone.value != null && phone.value.match(phoneN_format)) {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("Success!"));

            } else {
                span[0].firstChild.nodeValue = "Success!";

            }
        } else {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("Error!"));

            } else {
                span[0].firstChild.nodeValue = "Error!";

            }
        }
    }

    document.infoForm.phone.onfocus = function () {
        let phoneN = document.getElementById("phoneN");
        let span = phoneN.getElementsByTagName("span");
        span[0].firstChild.nodeValue = "Please enter your phone number in this format: (XXX) XXX-XXXX"
    }


    document.infoForm.email.onblur = function emailV() {
        let emailV = document.getElementById("emailV");
        let span = emailV.getElementsByTagName("span");
        let email = document.getElementById("email");
        let emailV_format = /^.+[@].+[.com]{4}$|^.+[@].+[.edu]{4}$/;
        if (email.value.length > 0 && email.value != null && email.value.match(emailV_format)) {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("Success!"));

            } else {
                span[0].firstChild.nodeValue = "Success!";

            }
        } else {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("Error!"));

            } else {
                span[0].firstChild.nodeValue = "Error!";

            }
        }
    }

    document.infoForm.email.onfocus = function () {
        let emailV = document.getElementById("emailV");
        let span = emailV.getElementsByTagName("span");
        span[0].firstChild.nodeValue = "Please enter your email in this format: example@example.com/.edu"
    }


    document.infoForm.website.onblur = function webURL() {
        let webURL = document.getElementById("webURL");
        let span = webURL.getElementsByTagName("span");
        let website = document.getElementById("website");
        let website_format = /^(https:\/\/).+(~).+(\/)/;
        if (website.value.length > 0 && website.value != null && website.value.match(website_format)) {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("Success!"));

            } else {
                span[0].firstChild.nodeValue = "Success!";

            }
        } else {
            if (span[0].firstChild.nodeValue == null) {
                span[0].appendChild(document.createTextNode("Error!"));

            } else {
                span[0].firstChild.nodeValue = "Error!";

            }
        }
    }

    document.infoForm.website.onfocus = function () {
        let webURL = document.getElementById("webURL");
        let span = webURL.getElementsByTagName("span");
        span[0].firstChild.nodeValue = "Please enter your UCF GaIM URL. Ex. https://students.gaim.ucf.edu/~yournid/"
    }

    document.infoForm.addEventListener("submit", anonBox, false);

    function anonBox() {
        let first_name = document.getElementById("first_name");
        let last_name = document.getElementById("last_name");
        let phone = document.getElementById("phone");
        let email = document.getElementById("email");
        let website = document.getElementById("website");
        if (document.infoForm.elements["anon"].checked) {
            first_name.value = null;
            last_name.value = null;
            phone.value = null;
            email.value = null;
            website.value = null;
        } else {
            return false;
        }
    }
    document.infoForm.addEventListener("submit", badge_creation, false);

    function badge_creation(event) {
        event.preventDefault();
        let badge = document.getElementById("badge");
        while (badge.hasChildNodes()) {
            badge.removeChild(badge.lastChild);
        }

        let first_name = document.getElementById("first_name");
        let last_name = document.getElementById("last_name");
        let phone = document.getElementById("phone");
        let email = document.getElementById("email");
        let website = document.getElementById("website");
        badge.appendChild(document.createTextNode("Name: " + first_name.value + " " + last_name.value));
        badge.appendChild(document.createElement("br"));
        // badge.appendChild(document.createTextNode("Last Name: " + last_name.value));
        //badge.appendChild(document.createElement("br"));
        badge.appendChild(document.createTextNode("Phone: " + phone.value));
        badge.appendChild(document.createElement("br"));
        badge.appendChild(document.createTextNode("Email: " + email.value));
        badge.appendChild(document.createElement("br"));
        badge.appendChild(document.createTextNode("Website: " + website.value));
        badge.appendChild(document.createElement("br"));

        if (document.infoForm.elements["A"][0].checked && document.infoForm.elements["B"][0].checked) {
            badge.appendChild(document.createTextNode("You got Summer!"));
            badge.appendChild(document.createElement("br"));
            let summer_img = document.createElement("img");
            summer_img.setAttribute("src", "img/Summer.jpg");
            summer_img.setAttribute("class", "badgeImage");
            badge.appendChild(summer_img);
        }

        if (document.infoForm.elements["A"][0].checked && document.infoForm.elements["B"][1].checked) {
            badge.appendChild(document.createTextNode("You got Winter!"));
            badge.appendChild(document.createElement("br"));
            let winter_img = document.createElement("img");
            winter_img.setAttribute("src", "img/Winter.jpg");
            winter_img.setAttribute("class", "badgeImage");
            badge.appendChild(winter_img);
        }

        if (document.infoForm.elements["A"][1].checked && document.infoForm.elements["B"][0].checked) {
            badge.appendChild(document.createTextNode("You got Spring!"));
            badge.appendChild(document.createElement("br"));
            let spring_img = document.createElement("img");
            spring_img.setAttribute("src", "img/Spring.jpg");
            spring_img.setAttribute("class", "badgeImage");
            badge.appendChild(spring_img);
        }

        if (document.infoForm.elements["A"][1].checked && document.infoForm.elements["B"][1].checked) {
            badge.appendChild(document.createTextNode("You got Fall!"));
            badge.appendChild(document.createElement("br"));
            let fall_img = document.createElement("img");
            fall_img.setAttribute("src", "img/Fall.jpg");
            fall_img.setAttribute("class", "badgeImage");
            badge.appendChild(fall_img);
        }

    }
}

window.addEventListener("load", validateData, false);