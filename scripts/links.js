// Define the base URL for your GitHub Pages repository
const baseURL = "https://crispol12.github.io/wdd230";

// Define the URL for your JSON data file
const linksURL = "https://crispol12.github.io/wdd230/data/links.json";

// Asynchronous function to fetch the links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    // For testing purposes, you can log the data here:
    // console.log(data);
    // Call the function to display the links, sending the weeks array as an argument
    displayLinks(data.weeks);
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

// Function to dynamically create and display the activity links with vertical bars between them
function displayLinks(weeks) {
  // Get the container element where the links will be inserted
  const linksContainer = document.getElementById("links");
  // Clear any existing content
  linksContainer.innerHTML = "";

  // Loop over each week in the array
  weeks.forEach(weekObj => {
    // Create and append a heading for the week
    const weekHeading = document.createElement("h3");
    weekHeading.textContent = weekObj.week;
    linksContainer.appendChild(weekHeading);

    // Create a paragraph to hold the links for this week on one line
    const linkLine = document.createElement("p");

    // Loop over each link in the week object's "links" array
    weekObj.links.forEach((link, index) => {
      // Create the anchor element for the link
      const a = document.createElement("a");
      // Build the full URL by concatenating the base URL and the relative URL from JSON
      a.href = baseURL + link.url;
      // Set the link text to the title from JSON
      a.textContent = link.title;
      // Append the link to the paragraph
      linkLine.appendChild(a);

      // Append a vertical bar between links (except after the last link)
      if (index < weekObj.links.length - 1) {
        linkLine.appendChild(document.createTextNode(" | "));
      }
    });

    // Append the line of links to the container
    linksContainer.appendChild(linkLine);
  });
}

// Call the getLinks function to start the process
getLinks();