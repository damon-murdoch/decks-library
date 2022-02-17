// Get the page's query string
const query = window.location.search;

// Retrieve the params from the string
const params = new URLSearchParams(query);

// Show the deck page
function showPageDeck(year, format, deck)
{

}

// Show the format page
function showPageFormat(year, format)
{

}

// Show the year page
function showPageYear(year)
{

}

// Show the home page
function showPageHome()
{
  
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