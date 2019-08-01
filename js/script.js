// MENU OPEN AND CLOSE 

// OLD menuClose NOT USED
/*
function menuClose()
{
	if(b[0].style.display==="none")
	{
	b[0].style.display="block";
	}
	else
	{
	//b[0].style.display="none";
}
*/


function menuClose()
{
	var a = document.getElementsByTagName("button-burger");
	var b = document.getElementsByClassName("menu");
	var c = document.getElementsByClassName("menu-link");

	if(b[0].style.width==="0vw")
	{
	b[0].style.width="100vw";
	}
	else
	{
	b[0].style.width="0vw";
	}	
}

// GALLERY OVERLAY EFFECT

/*
function galleryOverlay()
{
	var a = document.getElementsByClassName("img_flex");
	var b = document.getElementsByClassName("gallery_flex");
	var d = document.getElementsByClassName("gallery_flex_hidden");
	var c=b;
	if ( 
	b[0].style.zIndex==="2"
		)
	{
	a[0].style.border="5px solid green";
	c[0].style.position="relative";
	c[0].style.width="15em";
	c[0].style.height="15em";
	a[0].style.width="50em";
	}
	else
	{
	a[0].style.border="5px solid red";
	a[0].style.width="40vw";
	c[0].style.width="40vw";
	c[0].style.height="auto";
	c[0].style.zIndex="2";
	c[0].style.position="absolute";
	}

}
*/

//GALLERY IMAGE 1
var g1=document.getElementById("g1open");
function galleryOpen()
{
	
	var g1 = document.getElementsByClassName("gallery_flex_hidden");
	if(g1[0].style.display=="block")
	{
	g1[0].style.display="none";
	}
	else
	{
	g1[0].style.display="block";
	}
}

function galleryClose()
{
	
	var g1 = document.getElementsByClassName("gallery_flex_hidden");
	if(g1[0].style.display=="none")
	{
	g1[0].style.display="block";
	}
	else
	{
	g1[0].style.display="none";
	}
}

//GALLERY IMAGE 2 


function galleryOpen2()
{
	var g2=document.getElementsByClassName("gallery_flex_hidden_2")
	if(g2[0].style.display=="block")
	{
	g2[0].style.display="none";
	}
	else
	{
	g2[0].style.display="block";
	}
}

function galleryClose2()
{
	
	var g2 = document.getElementsByClassName("gallery_flex_hidden_2");
	if(g2[0].style.display=="none")
	{
	g2[0].style.display="block";
	}
	else
	{
	g2[0].style.display="none";
	}
}

// GALLERY IMAGE 3 

function galleryOpen3()
{
	var g3=document.getElementsByClassName("gallery_flex_hidden_3")
	if(g3[0].style.display=="block")
	{
	g3[0].style.display="none";
	}
	else
	{
	g3[0].style.display="block";
	}
}

function galleryClose3()
{
	
	var g3 = document.getElementsByClassName("gallery_flex_hidden_3");
	if(g3[0].style.display=="none")
	{
	g3[0].style.display="block";
	}
	else
	{
	g3[0].style.display="none";
	}
}

// GALLERY IMAGE 4
function galleryOpen4()
{
	var g4=document.getElementsByClassName("gallery_flex_hidden_4")
	if(g4[0].style.display=="block")
	{
	g4[0].style.display="none";
	}
	else
	{
	g4[0].style.display="block";
	}
}

function galleryClose4()
{
	
	var g4 = document.getElementsByClassName("gallery_flex_hidden_4");
	if(g4[0].style.display=="none")
	{
	g4[0].style.display="block";
	}
	else
	{
	g4[0].style.display="none";
	}
}

// GALLERY IMAGE 5
function galleryOpen5()
{
	var g5=document.getElementsByClassName("gallery_flex_hidden_5")
	if(g5[0].style.display=="block")
	{
	g5[0].style.display="none";
	}
	else
	{
	g5[0].style.display="block";
	}
}

function galleryClose5()
{
	
	var g5 = document.getElementsByClassName("gallery_flex_hidden_5");
	if(g5[0].style.display=="none")
	{
	g5[0].style.display="block";
	}
	else
	{
	g5[0].style.display="none";
	}
}

// GALLERY IMAGE 6
function galleryOpen6()
{
	var g6=document.getElementsByClassName("gallery_flex_hidden_6");
	if(g6[0].style.display=="block")
	{
	g6[0].style.display="none";
	}
	else
	{
	g6[0].style.display="block";
	}
}

function galleryClose6()
{
	
	var g6 = document.getElementsByClassName("gallery_flex_hidden_6");
	if(g6[0].style.display=="none")
	{
	g6[0].style.display="block";
	}
	else
	{
	g6[0].style.display="none";
	}
}

// GALLERY IMAGE 7
function galleryOpen7()
{
	var g7=document.getElementsByClassName("gallery_flex_hidden_7");
	if(g7[0].style.display=="block")
	{
	g7[0].style.display="none";
	}
	else
	{
	g7[0].style.display="block";
	}
}

function galleryClose7()
{
	
	var g7 = document.getElementsByClassName("gallery_flex_hidden_7");
	if(g7[0].style.display=="none")
	{
	g7[0].style.display="block";
	}
	else
	{
	g7[0].style.display="none";
	}
}

// GALLERY IMAGE 8
function galleryOpen8()
{
	var g8=document.getElementsByClassName("gallery_flex_hidden_8");
	if(g8[0].style.display=="block")
	{
	g8[0].style.display="none";
	}
	else
	{
	g8[0].style.display="block";
	}
}

function galleryClose8()
{
	
	var g8 = document.getElementsByClassName("gallery_flex_hidden_8");
	if(g8[0].style.display=="none")
	{
	g8[0].style.display="block";
	}
	else
	{
	g8[0].style.display="none";
	}
}

// GALLERY IMAGE 9
function galleryOpen9()
{
	var g9=document.getElementsByClassName("gallery_flex_hidden_9");
	if(g9[0].style.display=="block")
	{
	g9[0].style.display="none";
	}
	else
	{
	g9[0].style.display="block";
	}
}

function galleryClose9()
{
	
	var g9 = document.getElementsByClassName("gallery_flex_hidden_9");
	if(g9[0].style.display=="none")
	{
	g9[0].style.display="block";
	}
	else
	{
	g9[0].style.display="none";
	}
}

// GALLERY IMAGE 10
function galleryOpen10()
{
	var g10=document.getElementsByClassName("gallery_flex_hidden_10");
	if(g10[0].style.display=="block")
	{
	g10[0].style.display="none";
	}
	else
	{
	g10[0].style.display="block";
	}
}

function galleryClose10()
{
	
	var g10 = document.getElementsByClassName("gallery_flex_hidden_10");
	if(g10[0].style.display=="none")
	{
	g10[0].style.display="block";
	}
	else
	{
	g10[0].style.display="none";
	}
}



/*
function articleOpen()
{
	var a = document.getElementsByClassName("articles_flex_content");
	var b = document.getElementsByClassName("articles_text");
	var c = document.getElementsByClassName("articles_flex");
	a[0].style.height="auto";
	b[0].style.height="auto";
	c[0].style.height="auto";
}

*/

function articleOpen()
{
	var a = document.getElementsByClassName("articles_flex_content");
	var b = document.getElementsByClassName("articles_text");
	var c = document.getElementsByClassName("articles_flex");
	if(c[0].style.height==="auto")
	{
	a[0].style.height="17vh";
	b[0].style.height="25vh";
	c[0].style.height="30vh";
	}
	else
	{
	c[0].style.height="auto";
	b[0].style.height="auto";
	a[0].style.height="auto";
	}
}

/*
function galleryOpen()
{
	
	var d = document.getElementsByClassName("gallery_flex_hidden");
	if(d[0].style.display=="block")
	{
	d[0].style.display="none";
	}
	else
	{
	d[0].style.display="block";
	}
}

function galleryClose()
{
	
	var d = document.getElementsByClassName("gallery_flex_hidden");
	if(d[0].style.display=="none")
	{
	d[0].style.display="block";
	}
	else
	{
	d[0].style.display="none";
	}
}
*/


/*
function menuIntro()
{

	var d=document.getElementsByClassName("menu-message")[0];
	
	d.style.color="yellow";
	d.innerHTML="CLICK";
	d.style.position="absolute";
	d.style.width="auto";
	d.style.fontSize="1em";
	d.style.borderRadius="15%";
	d.style.backgroundColor="rgba(0,0,0,0.5)";
	
}

*/

// FORMULAIRE VALIDATION : déclaration de chaque fonction individuellement
/*
function validateFirstName() 
{
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") 
  	{
    alert("First Name must be filled out");
    return false;
  	}
}

function validateLastName() 
{
  var y = document.forms["myForm2"]["lname"].value;
  if (y == "") 
  	{
    alert("Last Name must be filled out");
    return false;
  	}
}

function validateEmail()
{
  var z = document.forms["myForm3"]["email"].value;
  if (z == "") 
  	{
    alert("Email Adress must be filled out");
    return false;
  	}
}

function validateChoice() 
{
        var w = document.getElementById("selectContribution");
        if (w.value == "") 
        {
            alert("Please select an option!");
            return false;
        }
        return true;
}

function validateText() 
{
        var w = document.getElementById("textToFill");
        if (w.value == "") 
        {
            alert("Please fill the text area!");
            return false;
        }
        else
        {
        	alert("Thank you! :)")
        }
        return true;
}
*/

//VALIDATE EVERYTHING VIA BUTTON SEND 

function validateEverything()
{

//Déclaration des fonctions 
validateFirstName();
validateLastName();
validateEmail();
validateChoice();
validateText();

//Assignation des fonctions

	function validateFirstName() 
{
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") 
  	{
    alert("First Name must be filled out");
    return false;
  	}
}

function validateLastName() 
{
  var y = document.forms["myForm2"]["lname"].value;
  if (y == "") 
  	{
    alert("Last Name must be filled out");
    return false;
  	}
}

function validateEmail()
{
  var z = document.forms["myForm3"]["email"].value;
  if (z == "") 
  	{
    alert("Email Adress must be filled out");
    return false;
  	}
}

function validateChoice() 
{
        var w = document.getElementById("selectContribution");
        if (w.value == "") 
        {
            alert("Please select an option!");
            return false;
        }
        return true;
}

function validateText() 
{
        var w = document.getElementById("textToFill");
        if (w.value == "") 
        {
            alert("Please fill the text area!");
            return false;
        }
        else
        {
        	alert("Thank you for your opinion! :)")
        }
        return true;
}
}

	
