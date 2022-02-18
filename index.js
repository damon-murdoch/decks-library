// Get the page's query string
const query = window.location.search;

// Retrieve the params from the string
const params = new URLSearchParams(query);

// Show the deck page
function showPageDeck(year, format, deck)
{
  // Set the title to the format + the team
  let title = format + ' - ' + deck;

  // Set the document title to the title
  document.title = title;

  // Set the name of the site to the title
  document.getElementById('sitesubtitle').innerHTML = title;
}

// Show the format page
function showPageFormat(year, format)
{
  // Set the title to the year + the format
  let title = year + ' - ' + format;

  // Set the document title to the title
  document.title = title;

  // Set the name of the site to the title
  document.getElementById('sitesubtitle').innerHTML = title;
}

// Show the year page
function showPageYear(year)
{
  // Set the title to the year
  let title = year;

  // Set the document title to the title
  document.title = title;
  
  // Set the name of the site to the title
  document.getElementById('sitesubtitle').innerHTML = title;
}

// Show the home page
function showPageHome()
{
  // Get the page body from the content
  let body = document.getElementById('content');

  // Set the title to home
  let title = 'Home';

  // Set the document title to the title
  document.title = title;
  
  // Set the name of the site to the title
  document.getElementById('sitesubtitle').innerHTML = title;

  // Div for controlling the width of a container
  let div = document.createElement('div');

  // Set the width of the div element
  // div.classList.value = "w-50";
  div.classList.value = "text-center"

  // Select drop-down for the year
  let select = document.createElement('select');

  // Loop over all of the years in the decks
  for(let key of Object.keys(DECKS))
  {
    // Create the table element
    let option = document.createElement('option');

    // Add a row linking to the year to the table
    option.innerHTML = "<a class='link-light' href='?year=" + key + "'>" + key + "</a>";

    // Create the onclick event
    option.onclick = function a(){
      // Open the page for the option linked
      window.location.href = "?year= " + option.value;
    };

    // Add the row to the body
    select.appendChild(option);
  }

  // Add the document to the table
  div.appendChild(select);

  // Add the div to the body
  body.appendChild(div);
}

// If year is selected
if (params.has('year'))
{
  // Get the year from the params
  let year = params.get('year');

  // If format is selected
  if (params.has('format'))
  {
    // Get the format from the params
    let format = params.get('format');

    // If deck is selected
    if (params.has('deck'))
    {
      // Get the deck from the params
      let deck = params.get('deck');

      // Show the page for the deck
      showPageDeck(year, format, deck);
    }
    else // No deck selected
    {
      // Show the page for the format
      showPageFormat(year, format);
    }
  }
  else // No format selected
  {
    // Show the page for the year
    showPageYear(year);
  }
}
else // No year selected
{
  // Show the home page
  showPageHome();
}