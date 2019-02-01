const data = {
  questions: [
    {
      id: 1,
      desc: "Answer this quick and easy interactive questionnaire to find out",
      yes: 2,
      no: null
    },
    {
      id: 2,
      desc:
        'Will you be directly communicating with City of Toronto Public Office Holders (POH) on subject matters listed in the definition of Lobby, <a href="http://www.toronto.ca/legdocs/municode/1184_140.pdf" title="Toronto Municipal Code Chapter 140-1" target="_blank" rel="noopener noreferrer"><span class="sr-only">Toronto municipal code chapter 140-1</span> §. 140-1 <span class="sr-only">Open in New Window</span></a>, of the Lobbying By-law?',
      yes: 3,
      no: 9
    },
    {
      id: 3,
      desc:
        "Does any of the following apply to you? <ul> <li> Are you communicating on behalf of an individual, corporation, organization or other person, or a partnership that employed you? </li> <li> Are you a sole proprietor communicating on behalf of your business? </li> <li> Are you a partner in a business communicating on behalf of your partnership? </li> </ul>",
      yes: 4,
      no: 5
    },
    {
      id: 4,
      desc: "Accordions",
      yes: null,
      no: null
    },
    {
      id: 5,
      desc:
        " Are you communicating for payment and on behalf of a client (an individual, corporation, or other person, or a partnership or organization)? ",
      yes: 6,
      no: 7
    },
    {
      id: 6,
      desc: "Accordions",
      yes: null,
      no: null
    },
    {
      id: 7,
      desc:
        'Does any of the following apply to you? <br/><br/><ul> <li> Are you an individual, corporation, organization or other person, or a partnership, who or that, without payment, lobbying or causing an employee to lobby a POH on behalf of or for the benefit of the interests of a for-profit entity or organization (<a href="http://www.toronto.ca/legdocs/municode/1184_140.pdf" title="Toronto Municipal Code Chapter 140" target="_blank" rel="noopener noreferrer" >Restricted definition <span class="sr-only"> Open in New Window Toronto Municipal Code Chapter 140</span> </a>)? </li> <li> Are you a director of a for-profit entity or organization (<a href="http://www.toronto.ca/legdocs/municode/1184_140.pdf" title="Toronto Municipal Code Chapter 140" target="_blank" rel="noopener noreferrer" >Restricted definition <span class="sr-only"> Open in New Window Toronto Municipal Code Chapter 140</span> </a>) lobbying or causing an employee to lobby a POH on behalf of, or for benefit of the interests of, the for-profit entity or organization (<a href="http://www.toronto.ca/legdocs/municode/1184_140.pdf" title="Toronto Municipal Code Chapter 140" target="_blank" rel="noopener noreferrer" >Restricted definition <span class="sr-only"> Open in New Window Toronto Municipal Code Chapter 140</span> </a>)? </li> <li> Are you a shareholder of a for-profit entity, lobbying or causing an employee to lobby a POH on behalf of, or for benefit of the interests of, the for-profit entity? </li> </ul>',
      yes: 8,
      no: 34
    },
    {
      id: 8,
      desc: "Accordions",
      yes: null,
      no: null
    },
    {
      id: 9,
      desc:
        " Are you appealing to members of the public through the mass media or by direct communication to communicate with a Public Office Holder? ",
      yes: 3,
      no: 10
    },
    {
      id: 10,
      desc:
        " Are you arranging a meeting between a Public Office Holder and another person? ",
      yes: 11,
      no: 34
    },
    {
      id: 11,
      desc:
        " Are you communicating for payment and on behalf of a client (an individual, corporation, or other person, or a partnership or organization)? ",
      yes: 32,
      no: 12
    },
    {
      id: 12,
      desc:
        'Does any of the following apply to you? <ul> <li> Are you an individual, corporation, organization or other person, or a partnership, who or that, without payment, lobbying or causing an employee to lobby a Public Office Holder on behalf of or for the benefit of the interests of a for-profit entity or organization (<a href="http://www.toronto.ca/legdocs/municode/1184_140.pdf" title="Toronto Municipal Code Chapter 140" aria-describedby="pdflink" target="_blank" rel="noopener noreferrer" >Restricted definition</a>)? </li> <li> Are you a director of a for-profit entity or organization (<a href="http://www.toronto.ca/legdocs/municode/1184_140.pdf" title="Toronto Municipal Code Chapter 140" aria-describedby="pdflink" target="_blank" rel="noopener noreferrer" >Restricted definition</a>) lobbying or causing an employee to lobby a Public Office Holder on behalf of, or for benefit of the interests of, the for-profit entity or organization (<a href="http://www.toronto.ca/legdocs/municode/1184_140.pdf" title="Toronto Municipal Code Chapter 140" aria-describedby="pdflink" target="_blank" rel="noopener noreferrer" >Restricted definition</a>)? </li> <li> Are you a shareholder of a for-profit entity, lobbying or causing an employee to lobby a Public Office Holder on behalf of, or for benefit of the interests of, the for-profit entity? </li> </ul>',
      yes: 33,
      no: 34
    },
    {
      id: 21,
      desc:
        " Are you a Consultant Lobbyist communicating on behalf of a not-for-profit? ",
      yes: 36,
      no: 22
    },
    {
      id: 22,
      desc:
        " Are you a member, person on the staff of the member, or officer or employee of a not-for-profit corporation or other not-for-profit corporation or other not-for-profit organization acting in your official capacity? ",
      yes: 23,
      no: 36
    },
    {
      id: 23,
      desc:
        " Are you an employee, a director, or a volunteer lobbying on behalf of a not-for-profit organization related to one or all of the following? (Professions, labour groups, business, industry, or for-profit entities) ",
      yes: 36,
      no: 24
    },
    {
      id: 24,
      desc:
        " Is the not-for-profit organization funded by a for-profit entity to advance their finance/commercial interests? ",
      yes: 36,
      no: 25
    },
    {
      id: 25,
      desc:
        " Is the not-for-profit communicating with Public Office Holders with respect to a grant application, award, or other financial benefit outside of the established administrative review, approval or appeal processes for the grant application, award or other financial benefit? ",
      yes: 26,
      no: 35
    },
    {
      id: 26,
      desc:
        " Is the not-for-profit a “Community Services Sector” organization that is not related to professions, labour groups, business, industry or for-profit entities? ",
      yes: 35,
      no: 36
    },
    {
      id: 31,
      desc:
        " You are required to register as an In House Lobbyist. Contact The Lobbyist Registrar's Office for more information",
      yes: null,
      no: null
    },
    {
      id: 32,
      desc:
        " You are required to register as a Consultant Lobbyist. Contact The Lobbyist Registrar's Office for more information",
      yes: null,
      no: null
    },
    {
      id: 33,
      desc:
        " You are required to register as a Voluntary Lobbyist. Contact The Lobbyist Registrar's Office for more information",
      yes: null,
      no: null
    },
    {
      id: 34,
      desc:
        " You are NOT a Lobbyist. Contact The Lobbyist Registrar's Office for more information",
      yes: null,
      no: null
    },
    {
      id: 35,
      desc:
        " The not-for-profit exemption applies to you, registration is NOT required",
      yes: null,
      no: null
    },
    {
      id: 36,
      desc:
        " The not-for-profit exemption does NOT apply to you, unless another exemption applies, you are required to register",
      yes: null,
      no: null
    }
  ]
};

export default data;
