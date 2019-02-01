// The main javascript file for lobbyist_questionnaire.
// IMPORTANT:
// Any resources from this project should be referenced using SRC_PATH preprocessor var
// Ex: let myImage = '/*@echo SRC_PATH*//img/sample.jpg';

$(function () {
  if (window['CotApp']) { //the code in this 'if' block should be deleted for embedded apps
    const app = new CotApp("lobbyist_questionnaire",{
      hasContentTop: false,
      hasContentBottom: false,
      hasContentRight: false,
      hasContentLeft: false,
      searchcontext: 'INTER'
    });

    app.setBreadcrumb([
      {"name": "lobbyist_questionnaire", "link": "#"}
    ]).render();
  }
  let container = $('#lobbyist_questionnaire_container');
});
