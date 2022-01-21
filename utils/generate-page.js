const generateManagerCard = function(manager) {
    return `
        <div>
          <p id="role">${manager.getRole()} &#9749;</p>
          <p id="name">${manager.getName()}</p>
          <p>ID: ${manager.getId()}</p>
          <pre id="email">Email: <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></pre>
          <p>Office Room: #${manager.getOfficeNumber()}</p>
        </div>
  `;
  };
  
  const generateEngineerCard = function(engineer) {
    return `
        <li>
          <p id="role">${engineer.getRole()} &#127947;</p>
          <p id="name">${engineer.getName()}</p>
          <p>ID: ${engineer.getId()}</p>
          <pre id="email">Email: <a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></pre>
          <a href="https://github.com/${engineer.getGitHubUser()}">Github Profile</a>
        </li>
  `;
  };
  
  const generateInternCard = function(intern) {
    return `
    <li>
      <p id="role">${intern.getRole()} &#9997;</p>
      <p id="name">${intern.getName()}</p>
      <p>ID: ${intern.getId()}</p>
      <pre id="email">Email: <a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a></pre>
      <p>College: ${intern.getSchool()}</p>
    </li>
  `;
  };
  
  const generateAllEngineerCards = function(engineers) {
    let htmlList = ``;
    for (let i = 0; i < engineers.length; i++) {
      htmlList += generateEngineerCard(engineers[i]);
    }
    return htmlList;
  };
  
  const generateAllInternCards = function(interns) {
    let htmlList = ``;
    for (let i = 0; i < interns.length; i++) {
      htmlList += generateInternCard(interns[i]);
    }
    return htmlList;
  };
  
  module.exports = generatePage = (teamName, manager, engineers, interns) => {
    // Uses team member data to fill out the html
  
    //returns filled out html
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Name</title>
    <link href="./style.css" rel="stylesheet">
  </head>
  <body>
    <header>
      <h1 id="team-name">${teamName}</h1>
    </header>
    <section id="team-members">
      <div id="manager">
      ${generateManagerCard(manager)}
      </div>
      <ul id="engineers">
      ${generateAllEngineerCards(engineers)}
      </ul>
      <ul id="interns">
      ${generateAllInternCards(interns)}
      </ul>
    </section>
  </body>
  </html>
  `;
  };