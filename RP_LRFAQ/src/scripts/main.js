  var scenario = [];
  var id ;

  function showquestion(id){
  // we push Scenario here
  // start-again (hide all over questions and reveal question 1)
  if (id=='0'){scenario = [];$('#q1').addClass("hidden");$('#q2').addClass("hidden");$('#q3').addClass("hidden");$('#q4').addClass("hidden");$('#q5').addClass("hidden");$('#q6').addClass("hidden");$('#q7').addClass("hidden");$('#q8').addClass("hidden");$('#q9').addClass("hidden");$('#q10').addClass("hidden");$('#q11').addClass("hidden");$('#q22').addClass("hidden");$('#q23').addClass("hidden");$('#q24').addClass("hidden");$('#q25').addClass("hidden");$('#q25').addClass("hidden");$('#rst1').addClass("hidden");$('#rst2').addClass("hidden");$('#rst3').addClass("hidden");$('#rst4').addClass("hidden");$('#rst5').addClass("hidden");$('#rst6').addClass("hidden");$('#start-again').addClass("hidden");$('#start').fadeIn(3000).removeClass("hidden");}
  //start ()
  if (id=='1'){scenario.push("1");$('#start').fadeOut();$('#q1').fadeIn(3000).removeClass("hidden");}
  //question 1, ::show Start again button and back button on YES/NO selection::
  if (id=='2'){scenario.push("2");$('#back').removeClass("hidden");$('#start-again').fadeIn(3000).removeClass("hidden");$('#q1').fadeOut();$('#q2').fadeIn(3000).removeClass("hidden");}
  if (id=='8'){scenario.push("8");$('#back').removeClass("hidden");$('#start-again').fadeIn(3000).removeClass("hidden");$('#q1').fadeOut();$('#q8').fadeIn(3000).removeClass("hidden");}
  //question 2
  if (id=='3'){scenario.push("3");$('#back').removeClass("hidden");$('#q2').fadeOut();$('#q3').fadeIn(3000).removeClass("hidden");}
  if (id=='4'){scenario.push("4");$('#back').removeClass("hidden");$('#q2').fadeOut();$('#q4').fadeIn(3000).removeClass("hidden");}
  //question 3
  //question 4
  if (id=='5'){scenario.push("5");$('#back').removeClass("hidden");$('#q4').fadeOut();$('#q5').fadeIn(3000).removeClass("hidden");}
  if (id=='6'){scenario.push("6");$('#back').removeClass("hidden");$('#q4').fadeOut();$('#q6').fadeIn(3000).removeClass("hidden");}
  //question 5
  //question 6
  if (id=='7'){scenario.push("7");$('#back').removeClass("hidden");$('#q6').fadeOut();$('#q7').fadeIn(3000).removeClass("hidden");}
  //question 7
  //question 8
  if (id=='2'){$('#q8').fadeOut();$('#back').removeClass("hidden");$('#q2').fadeIn(3000).removeClass("hidden");}
  if (id=='9'){scenario.push("9");$('#back').removeClass("hidden");$('#q8').fadeOut();$('#q9').fadeIn(3000).removeClass("hidden");}
  //question 9
  if (id=='10'){scenario.push("10");$('#back').removeClass("hidden");$('#q9').fadeOut();$('#q10').fadeIn(3000).removeClass("hidden");}
  //question 10
  if (id=='11'){scenario.push("11");$('#back').removeClass("hidden");$('#q10').fadeOut();$('#q11').fadeIn(3000).removeClass("hidden");}

  // clicked from questions 3, 5, 7

  if (id=='21'){scenario.push("21");$('#back').removeClass("hidden");$('#q3').addClass("hidden");$('#q5').addClass("hidden");$('#q7').addClass('hidden');$('#q21').fadeIn(3000).removeClass("hidden");}

  //if (id=='21'){scenario.push("21");$('#q3').addClass("hidden");$('#q5').addClass("hidden");$('#q7').addClass('hidden');$('#q21').fadeIn(3000).removeClass("hidden");}


  //question 21
  if (id=='22'){scenario.push("22");$('#back').removeClass("hidden");$('#q21').fadeOut();$('#q22').fadeIn(3000).removeClass("hidden");}
  //question 22
  if (id=='23'){scenario.push("23");$('#back').removeClass("hidden");$('#q22').fadeOut();$('#q23').fadeIn(3000).removeClass("hidden");}
  //question 23
  if (id=='24'){scenario.push("24");$('#back').removeClass("hidden");$('#q23').fadeOut();$('#q24').fadeIn(3000).removeClass("hidden");}
  //question 24
  if (id=='25'){scenario.push("25");$('#back').removeClass("hidden");$('#q24').fadeOut();$('#q25').fadeIn(3000).removeClass("hidden");}
  //question 25
  if (id=='26'){scenario.push("26");$('#back').removeClass("hidden");$('#q25').fadeOut();$('#q26').fadeIn(3000).removeClass("hidden");}



  }

  function back(){
  // we dont push Scenario here
      $('#back').removeClass("hidden"); // this will reveal Back button all time
      var current = '#q' + scenario.slice(-1)[0];
      $(current).addClass("hidden"); // Clear Current question
      //console.log(scenario);
      //console.log("This is Current : " + current);
      var id = scenario.slice(-2)[0]; // Take you Last question.
      //console.log("This was Last : "+ id);

      if (id=='1'|| id=='2'|| id=='3'|| id=='4'|| id=='5'||id=='6'|| id=='7'|| id=='8'||id=='9'|| id=='10'|| id=='11'||id=='21'|| id=='22'|| id=='23'||id=='24'|| id=='25'|| id=='26'){
          $('#back').addClass("hidden"); // this will hid Back button on all questions
      }
      scenario.pop();


  //back(id);


  //start $('#back').addClass("hidden");
  if (id=='1'){$('#start-again').fadeIn(3000).removeClass("hidden");$('#start').fadeOut();$('#q1').fadeIn(3000).removeClass("hidden");}
  //question 1
  if (id=='2'){$('#q1').fadeOut();$('#q2').fadeIn(3000).removeClass("hidden");}
  if (id=='8'){$('#q1').fadeOut();$('#q8').fadeIn(3000).removeClass("hidden");}
  //question 2
  if (id=='3'){$('#q2').fadeOut();$('#q3').fadeIn(3000).removeClass("hidden");}
  if (id=='4'){$('#q2').fadeOut();$('#q4').fadeIn(3000).removeClass("hidden");}
  //question 3
  //question 4
  if (id=='5'){$('#q4').fadeOut();$('#q5').fadeIn(3000).removeClass("hidden");}
  if (id=='6'){$('#q4').fadeOut();$('#q6').fadeIn(3000).removeClass("hidden");}
  //question 5
  //question 6
  if (id=='7'){$('#q6').fadeOut();$('#q7').fadeIn(3000).removeClass("hidden");}
  //question 7
  //question 8
  if (id=='2'){$('#q8').fadeOut();$('#q2').fadeIn(3000).removeClass("hidden");}
  if (id=='9'){$('#q8').fadeOut();$('#q9').fadeIn(3000).removeClass("hidden");}
  //question 9
  if (id=='10'){$('#q9').fadeOut();$('#q10').fadeIn(3000).removeClass("hidden");}
  //question 10
  if (id=='11'){$('#q10').fadeOut();$('#q11').fadeIn(3000).removeClass("hidden");}
  //question 21
  if (id=='21'){$('#q22').fadeOut();$('#q21').fadeIn(3000).removeClass('hidden');}

  //question 22
  if (id=='22'){$('#q23').fadeOut();$('#q22').fadeIn(3000).removeClass("hidden");}
  //question 23
  if (id=='23'){$('#q24').fadeOut();$('#q23').fadeIn(3000).removeClass("hidden");}
  //question 24
  if (id=='24'){$('#q25').fadeOut();$('#q24').fadeIn(3000).removeClass("hidden");}
  //question 25
  if (id=='25'){$('#q26').fadeOut();$('#q25').fadeIn(3000).removeClass("hidden");}
  //question 26
  if (id=='26'){$('#rst6').fadeOut();$('#q26').fadeIn(3000).removeClass("hidden");}
  //Hide all answares
  $('#rst1').addClass('hidden');
  $('#rst2').addClass('hidden');
  $('#rst3').addClass('hidden');
  $('#rst4').addClass('hidden');
  $('#rst5').addClass('hidden');
  $('#rst6').addClass('hidden');

  }
