// Generated by CoffeeScript 1.8.0
(function() {
  var add_lektion, add_lektionen, add_points, add_to_wrong, add_wrong, all_data, change_theme, check, currQ, data, learn_wrongs, lektionen, li_listeners, load_lektions, newQ, random, remove_lektion, remove_wrong, save_lektions, save_wrongs, selection, version, wrongs;

  data = {
    1: ['agere, ago, egi, actum', 'audire, audio, audivi, auditum', 'esse, sum, fui, -', 'invenire, invenio, inveni, inventum', 'iuvare, iuvo, iuvi, iutum', 'ludere, ludo, lusi, lusum', 'reprehendere, reprehendo, reprehendi, reprehensum', 'respondere, respondeo, respondi, responsum', 'sedere, sedeo, sedi, sessum', 'tacere, taceo, tacui, tacitum', 'venire, venio, veni, ventum', 'videre, video, vidi, visum'],
    2: ['adiuvare, adiuvo, adiuvi, adiutum', 'cupere, cupio, cupivi, cupitum', 'currere, curro, cucurri, cursum', 'debere, debeo, debui, debitum', 'fugere, fugio, fugi, -', 'habere, habeo, habui, habitum', 'rapere, rapio, rapui, raptum', 'ridere, rideo, risi, risum', 'sumere, sumo, sumpsi, sumptum'],
    3: ['adesse, adsum, adfui, -', 'capere, capio, cepi, captum', 'considere, consido, consedi, consessum', 'dicere, dico, dixi, dictum', 'dormire, dormio, dormivi, dormitum', 'incipere, incipio, coepi, inceptum', 'irridere, irrideo, irrisi, irrisum', 'legere, lego, legi, lectum', 'monere, moneo, monui, monitum', 'scribere, scribo, scripsi, scriptum', 'timere, timeo, timui, -'],
    4: ['accedere, accedo, accessi, accessum', 'colligere, colligo, collegi, collectum', 'conspicere, conspicio, conspexi, conspectum', 'gaudere, gaudeo, gavisus sum, -', 'intellegere, intellego, intellexi, intellectum', 'pergere, pergo, perrexi, perrectum', 'tangere, tango, tetigi, tactum'],
    5: ['cadere, cado, cecidi, - fallen', 'caedere, caedo, cecidi, caesum', 'condere, condo, condidi, conditum', 'facere, facio, feci, factum'],
    6: ['accipere, accipio, accepi, acceptum', 'adducere, adduco, adduxi, adductum', 'aperire, aperio, aperui, apertum', 'dare, do, dedi, datum', 'ducere, duco, duxi, ductum', 'fallere, fallo, fefelli, -'],
    7: ['amittere, amitto, amisi, amissum', 'canere, cano, cecini, -', 'contendere, contendo, contendi, contentum', 'crescere, cresco, crevi, cretum', 'iacere, iaceo, iacui, -', 'mittere, mitto, misi, missum', 'petere, peto, petivi, petitum', 'scire, scio, scivi, scitum', 'sinere, sino, sivi, situm', 'surgere, surgo, surrexi, surrectum', 'vincere, vinco, vici, victum', 'vivere, vivo, vixi, -'],
    8: ['alere, alo, alui, altum', 'arcessere, arcesso, arcessivi, arcessitum', 'confidere, confido, confisus sum, -', 'consulere, consulo, consului, consultum', 'deesse, desum, defui, -', 'defendere, defendo, defendi, defensum', 'favere, faveo, favi, fautum', 'iubere, iubeo, iussi, iussum', 'recipere, recipio, recepi, receptum', 'tradere, trado, tradidi, traditum', 'valere, valeo, valui, -', 'vendere, vendo, vendidi, venditum'],
    9: ['deponere, depono, deposui, depositum', 'emere, emo, emi, emptum', 'exercere, exerceo, exercui, exercitum', 'placere, placeo, placui, placitum', 'quaerere, quaero, quaesivi, quaesitum', 'reperire, reperio, repperi, repertum'],
    10: ['apparere, appareo, apparui, -', 'consistere, consisto, constiti, -', 'credere, credo, credidi, creditum', 'custodire, custodio, custodivi, custoditum', 'decipere, decipio, decepi, deceptum', 'frangere, frango, fregi, fractum', 'manere, maneo, mansi, -', 'minuere, minuo, minui, minutum', 'parere, pareo, parui, -', 'punire, punio, punivi, punitum', 'relinquere, relinquo, reliqui, relictum', 'removere, removeo, removi, remotum', 'stare, sto, steti, -', 'trahere, traho, traxi, tractum'],
    11: ['accidere, accido, accidi, -', 'praebere, praebeo, praebui, praebitum', 'tenere, teneo, tenui, tentum'],
    12: ['abire, abeo, abii, abitum', 'afficere, afficio, affeci, affectum', 'decernere, decerno, decrevi, decretum', 'diligere, diligo, dilexi, dilectum', 'inire, ineo, inii, initum', 'interire, intereo, interio, interitum', 'ire, eo, ii, itum', 'praeterire, praetereo, praeterii, praeteritum', 'regere, rego, rexi, rectum', 'volvere, volvo, volvi, volutum'],
    13: ['arripere, arripio, arripui, arreptum', 'aspicere, aspicio, aspexi, aspectum', 'movere, moveo, movi, motum', 'neglegere, neglego, neglexi, neglectum', 'pendere, pendeo, pependi, -', 'perterrere, perterreo, perterrui, -', 'reddere, reddo, reddidi, redditum'],
    14: ['admovere, admoveo, admovi, admotum', 'advenire, advenio, adveni, adventum', 'animadvertere, animadverto, animadverti, animadversum', 'dividere, divido, divisi, divisum', 'imponere, impono, imposui, impositum', 'incendere, incendo, incendi, incensum', 'interficere, interficio, interfeci, interfectum', 'metuere, metuo, metui, -', 'perficere, perficio, perfeci, perfectum'],
    15: ['constituere, constituo, constitui, constitutum', 'edere, edo, edidi, editum', 'imminere, immineo, -, -', 'instituere, instituo, institui, institutum', 'parere, pario, peperi, partum', 'prohibere, prohibeo, prohibui, prohibitum', 'ruere, ruo, rui, rutum', 'tendere, tendo, tetendi, tentum'],
    16: ['carere, careo, carui, -', 'delere, deleo, delevi, deletum', 'dolere, doleo, dolui, -', 'persuadere, persuadeo, persuasi, persuasum', 'redire, redeo, redii, reditum', 'velle, volo, volui, -'],
    17: ['commovere, commoveo, commovi, commotum', 'convenire, convenio, conveni, conventum', 'effugere, effugio, effugi, -', 'invadere, invado, invasi, invasum', 'munire, munio, munivi, munitum', 'resistere, resisto, restiti, -'],
    18: ['abesse, absum, afui, -', 'cedere, cedo, cessi, cessum', 'cernere, cerno, crevi, cretum', 'descendere, descendo, descendi, -', 'gerere, gero, gessi, gestum', 'patere, pateo, patui, -', 'providere, provideo, providi, provisum'],
    19: ['constat, constitit, -, -', 'demittere, demitto, demisi, demissum', 'exponere, expono, exposui, expositum', 'instruere, instruo, instruxi, instructum', 'occidere, occido, occidi, occisum', 'oportet, oportuit, -, -', 'ostendere, ostendo, ostendi, ostentum', 'pervenire, pervenio, perveni, perventum', 'repetere, repeto, repetivi, repetitum', 'restituere, restituo, restitui, restitutum', 'videri, videor, visus sum, -'],
    20: ['conicere, conicio, conieci, coniectum', 'convertere, converto, converti, conversum', 'exstinguere, exstinguo, exstinxi, exstinctum', 'fungi, fungor, functus sum, -', 'hortari, hortor, hortatus sum, -', 'loqui, loquor, locutus sum, -', 'oriri, orior, ortus sum, -', 'sequi, sequor, secutus sum, -', 'solvere, solvo, solvi, solutum'],
    21: ['arbitrari, arbitror, arbitratus sum, -', 'audere, audeo, ausus sum, -', 'expellere, expello, expuli, expulsum', 'labi, labor, lapsus sum, -', 'oboedire, oboedio, oboedivi, oboeditum', 'proficisci, proficiscor, profectus sum, -', 'solere, soleo, solitus sum, -', 'suspicari, suspicor, suspicatus sum, -'],
    22: ['cavere, caveo, cavi, cautum', 'circumdare, circumdo, circumdedi, circumdatum', 'claudere, claudo, clausi, clausum', 'educere, educo, eduxi, eductum', 'mirari, miror, miratus sum sich', 'pellere, pello, pepuli, pulsum', 'perire, pereo, perii, -', 'permittere, permitto, permisi, permissum', 'polliceri, polliceor, pollicitus sum, -', 'ponere, pono, posui, positum', 'reri, reor, ratus sum', 'statuere, statuo, statui, statutum', 'traicere, traicio, traieci, traiectum'],
    23: ['adimere, adimo, ademi, ademptum', 'admonere, admoneo, admonui, admonitum', 'comperire, comperio, comperi, compertum', 'egere, egeo, egui, -', 'mori, morior, mortuus sum'],
    24: ['adhibere, adhibeo, adhibui, adhibitum', 'cogere, cogo, coegi, coactum', 'efficere, efficio, effeci, effectum', 'exire, exeo, exii, exitum', 'iungere, iungo, iunxi, iunctum', 'morari, moror, moratus sum', 'nocere, noceo, nocui, nocitum', 'parcere, parco, peperci, -', 'pati, patior, passus sum', 'poscere, posco, poposci, -', 'praestare, praesto, praestiti, -', 'subicere, subicio, subieci, subiectum'],
    25: ['adire, adeo, adii, aditum', 'aggredi, aggredior, aggressus sum', 'censere, censeo, censui, censum', 'concurrere, concurro, concurri, concursum', 'dissentire, dissentio, dissensi, dissensum', 'disserere, dissero, disserui, dissertum', 'fateri, fateor, fassus sum', 'mentiri, mentior, mentitus sum', 'nescire, nescio, nescivi, -', 'obicere, obicio, obieci, obiectum', 'sentire, sentio, sensi, sensum', 'versari, versor, versatus sum'],
    26: ['consentire, consentio, consensi, consensum', 'corrumpere, corrumpo, corrupi, corruptum', 'dedere, dedo, dedidi, deditum', 'desistere, desisto, destiti, -', 'eligere, eligo, elegi, electum', 'evenire, evenio, eveni, eventum', 'instare, insto, institi, -', 'invidere, invideo, invidi, invisum', 'studere, studeo, studui, -', 'uti, utor, usus sum'],
    27: ['cognoscere, cognosco, cognovi, cognitum', 'colere, colo, colui, cultum', 'comprehendere, comprehendo, comprehendi, comprehensum', 'consequi, consequor, consecutus sum', 'docere, doceo, docui, doctum', 'fingere, fingo, finxi, fictum', 'frui, fruor, fruitus sum', 'imitari, imitor, imitatus sum', 'occurrere, occurro, occurri, occursum', 'perdere, perdo, perdidi, perditum', 'praecipere, praecipio, praecepi, praeceptum'],
    28: ['decet, decuit, -, -', 'discere, disco, didici, -', 'eripere, eripio, eripui, ereptum', 'nasci, nascor, natus sum', 'novisse, novi, notum', 'praeesse, praesum,praefui, -', 'precari, precor, precatus sum', 'rumpere, rumpo, rupi, ruptum'],
    29: ['adipisci, adipiscor, adeptus sum', 'augere, augeo, auxi, auctum', 'conari, conor, conatus sum', 'concedere, concedo, concessi, concessum', 'conficere, conficio, confeci, confectum', 'dimittere, dimitto, dimisi, dimissum', 'iacere, iacio, ieci, iactum', 'ingredi, ingredior, ingressus sum', 'interesse, intersum, interfui, -', 'obstare, obsto, obstiti, -', 'praemittere, praemitto, praemisi, praemissum'],
    30: ['ardere, ardeo, arsi, -', 'avertere, averto, averti, aversum', 'componere, compono, composui, compositum', 'conscribere, conscribo, conscripsi, conscriptum', 'differre, differo, distuli, dilatum', 'ferre, fero, tuli, latum', 'inferre, infero, intuli, illatum', 'offerre, offero, obtuli, oblatum', 'perferre, perfero, pertuli, perlatum', 'perspicere, perspicio, perspexi, perspectum', 'praeferre, praefero, praetuli, praelatum', 'referre, refero, rettuli, relatum', 'servire, servio, servivi, servitum']
  };

  version = '0.2.0';

  selection = [];

  lektionen = [];

  currQ = {};

  wrongs = [];

  all_data = [];

  random = function(from, to) {
    return Math.floor((Math.random() * to) + from);
  };

  add_lektion = function(n) {
    n = parseInt(n);
    selection = selection.concat(data[n]);
    if (lektionen.indexOf(n) === -1) {
      lektionen.push(n);
    }
    return save_lektions();
  };

  add_lektionen = function() {
    var i, _i, _len, _results;
    selection = [];
    _results = [];
    for (_i = 0, _len = lektionen.length; _i < _len; _i++) {
      i = lektionen[_i];
      _results.push(add_lektion(i));
    }
    return _results;
  };

  add_points = function(n) {
    if (n === void 0) {
      localStorage.stammpoints = parseInt(localStorage.stammpoints) + 1;
    } else {
      localStorage.stammpoints = parseInt(localStorage.stammpoints) + n;
    }
    return $('.stammpoints').html(localStorage.stammpoints);
  };

  add_wrong = function(n) {
    if (wrongs.indexOf(n) === -1) {
      wrongs.push(parseInt(n));
      return save_wrongs();
    }
  };

  add_to_wrong = function() {
    localStorage.stammpoints_wrongs = parseInt(localStorage.stammpoints_wrongs) + 1;
    return $('.stammpoints_wrongs').html(localStorage.stammpoints_wrongs);
  };

  change_theme = function(name) {
    if (name) {
      localStorage.theme = name;
      return $('body').attr('class', name);
    } else {
      if (localStorage.theme === 'light') {
        $('body').attr('class', 'dark');
        return localStorage.theme = 'dark';
      } else {
        $('body').attr('class', 'light');
        return localStorage.theme = 'light';
      }
    }
  };

  check = function() {
    var __first__, __right__, __second__, __third__;
    console.log('lets see what you got there');
    __first__ = $('.first').val().toLowerCase().trim();
    __second__ = $('.second').val().toLowerCase().trim();
    __third__ = $('.third').val().toLowerCase().trim();
    __right__ = 0;
    if (__first__ === currQ.first) {
      $('.first').addClass('answer_right');
      $('.label-1').html('Richtig');
      add_points();
      __right__++;
    } else {
      $('.first').addClass('answer_wrong');
      $('.label-1').html(currQ.first);
      add_to_wrong();
    }
    if (__second__ === currQ.second) {
      $('.second').addClass('answer_right');
      $('.label-2').html('Richtig');
      add_points();
      __right__++;
    } else {
      $('.second').addClass('answer_wrong');
      $('.label-2').html(currQ.second);
      add_to_wrong();
    }
    if (__third__ === currQ.third) {
      $('.third').addClass('answer_right');
      $('.label-3').html('Richtig');
      add_points();
      __right__++;
    } else {
      $('.third').addClass('answer_wrong');
      $('.label-3').html(currQ.third);
      add_to_wrong();
      if (__right__ === 3) {
        console.log('alles Richtig');
        remove_wrong(all_data.indexOf(currQ.raw));
      } else {
        add_wrong(all_data.indexOf(currQ.raw));
      }
    }
    return setTimeout(function() {
      $(".first").focus();
      return newQ();
    }, 5000);
  };

  learn_wrongs = function() {
    var i, _i, _len, _results;
    selection = [];
    _results = [];
    for (_i = 0, _len = wrongs.length; _i < _len; _i++) {
      i = wrongs[_i];
      _results.push(selection.push(all_data[i]));
    }
    return _results;
  };

  load_lektions = function() {
    var i, _i, _len, _ref;
    lektionen = [];
    _ref = localStorage.lektionen.split(',');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      i = _ref[_i];
      lektionen.push(parseInt(i));
    }
    return add_lektionen();
  };

  li_listeners = function() {
    $('.active').off();
    $('.inactive').off();
    $('.active').click(function() {
      console.log('click on active');
      remove_lektion(parseInt($(this).data('lektion')));
      $(this).removeClass('active');
      $(this).addClass('inactive');
      li_listeners();
      return newQ();
    });
    return $('.inactive').click(function() {
      console.log('click on inactive');
      console.log('add_lektion', parseInt($(this).data('lektion')));
      add_lektion(parseInt($(this).data('lektion')));
      $(this).addClass('active');
      $(this).removeClass('inactive');
      li_listeners();
      return newQ();
    });
  };

  newQ = function() {
    var e;
    $('.label-1').html('Erste Stammform');
    $('.label-2').html('Zweite Stammform');
    $('.label-3').html('Dritte Stammform');
    $('.input-group > input').val('');
    $('.input-group > input').removeClass("has-value");
    $('.input-group > input').removeClass('answer_right');
    $('.input-group > input').removeClass('answer_wrong');
    $('.infinitiv').addClass('pop');
    setTimeout(function() {
      return $('.infinitiv').removeClass('pop');
    }, 300);
    currQ.id = random(0, selection.length);
    currQ.raw = selection[currQ.id];
    currQ.arr = currQ.raw.split(', ');
    currQ.inf = currQ.arr[0].trim().toLowerCase();
    currQ.first = currQ.arr[1].trim().toLowerCase();
    currQ.second = currQ.arr[2].trim().toLowerCase();
    try {
      currQ.third = currQ.arr[3].trim().toLowerCase();
    } catch (_error) {
      e = _error;
      currQ.third = '';
    }
    return $('.infinitiv').html(currQ.inf);
  };

  remove_lektion = function(n) {
    if (lektionen.indexOf(n) > -1) {
      lektionen.splice(lektionen.indexOf(n), 1);
      add_lektionen();
      return save_lektions();
    }
  };

  remove_wrong = function(n) {
    if (wrongs.indexOf(parseInt(n)) !== -1) {
      wrongs.splice(wrongs.indexOf(parseInt(n)), 1);
      return save_wrongs();
    }
  };

  save_lektions = function() {
    var i, _i, _len;
    localStorage.lektionen = '';
    for (_i = 0, _len = lektionen.length; _i < _len; _i++) {
      i = lektionen[_i];
      if (localStorage.lektionen === '') {
        localStorage.lektionen += String(i);
      } else {
        localStorage.lektionen += ',' + i;
      }
    }
    return true;
  };

  save_wrongs = function() {
    var i, _i, _len;
    localStorage.wrongs = '';
    for (_i = 0, _len = wrongs.length; _i < _len; _i++) {
      i = wrongs[_i];
      if (localStorage.wrongs === '') {
        localStorage.wrongs += String(i);
      } else {
        localStorage.wrongs += ',' + String(i);
      }
    }
    return true;
  };

  $(function() {
    var i, key, val, _i, _len, _ref;
    $('.version').html('v' + version);
    console.log('Stammformen by Ben Bals');
    console.log('Version: v' + version);
    $('.start').addClass('slide-in');
    setTimeout(function() {
      return $('.start').removeClass('slide-in');
    }, 500);
    $(".awesome-form .input-group input").focusout(function() {
      var text_val;
      text_val = $(this).val();
      if (text_val === "") {
        return $(this).removeClass("has-value");
      } else {
        return $(this).addClass("has-value");
      }
    });
    for (key in data) {
      val = data[key];
      all_data = all_data.concat(val);
    }
    if (localStorage.wrongs === void 0) {
      localStorage.wrongs = '';
      wrongs = [];
    } else {
      _ref = localStorage.wrongs.split(',');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        if (i !== '') {
          wrongs.push(parseInt(i));
        }
      }
    }
    if (localStorage.lektionen !== '' && localStorage.lektionen !== void 0) {
      load_lektions();
    } else {
      localStorage.lektionen = '';
      for (key in data) {
        val = data[key];
        add_lektion(key);
      }
    }
    if (localStorage.theme === void 0) {
      localStorage.theme === 'light';
    }
    change_theme(localStorage.theme);
    if (localStorage.stammpoints === void 0) {
      localStorage.stammpoints = 0;
      localStorage.stammpoints_wrongs = 0;
    }
    $('.stammpoints_wrongs').html(localStorage.stammpoints_wrongs);
    $('.stammpoints').html(localStorage.stammpoints);
    if (localStorage.total_time === void 0 || localStorage.total_time === "NaN") {
      localStorage.total_time = 0;
      console.log("no total_time, setting it to " + localStorage.total_time);
    }
    return setInterval(function() {
      var __minutes__, __seconds__;
      localStorage.total_time = parseInt(localStorage.total_time) + 1;
      __minutes__ = parseInt(parseInt(localStorage.total_time) / 60);
      __seconds__ = parseInt(parseInt(localStorage.total_time) - (__minutes__ * 60));
      if (__seconds__ < 10) {
        __seconds__ = '0' + String(__seconds__);
      }
      $('.total_time_minutes').html(__minutes__);
      $('.total_time_seconds').html(__seconds__);
      if (parseInt(localStorage.total_time) > 3600) {
        return $('.go_crazy').fadeIn('fast');
      }
    }, 1000);
  });

  $('.go').click(function() {
    $('.start').addClass('slide-out');
    setTimeout(function() {
      $('.game').addClass('slide-in');
      $('.game').removeClass('dpn');
      $('.start').removeClass('slide-out');
      $('.start').addClass('dpn');
      return setTimeout(function() {
        return $('.game').removeClass('slide-in');
      }, 500);
    }, 500);
    return newQ();
  });

  $('.go_crazy').click(function() {
    return change_theme('crazy');
  });

  $('html').click(function(e) {
    if (e.target === $('.overlay')[0]) {
      $('.settings').fadeOut('fast');
      $('.info').fadeOut('fast');
      $('.stats').fadeOut('fast');
      return $('.overlay').fadeOut('fast');
    }
  });

  $('.icons8-close').click(function() {
    $('.settings').fadeOut('fast');
    $('.info').fadeOut('fast');
    $('.stats').fadeOut('fast');
    return $('.overlay').fadeOut('fast');
  });

  $('.icons8-settings, .btn-settings').click(function() {
    var key, val;
    $('.settings').fadeIn('fast');
    $('.overlay').fadeIn('fast');
    if (localStorage.wrongs === '') {
      $('.learn_wrongs').css('display', 'none');
      $('.reset_wrongs').css('display', 'none');
      $('.learn_normal').css('display', 'none');
    } else {
      $('.learn_wrongs').css('display', 'block');
      $('.reset_wrongs').css('display', 'block');
    }
    $('.lektionen').html('');
    for (key in data) {
      val = data[key];
      key = parseInt(key);
      if (lektionen.indexOf(parseInt(key)) > -1) {
        $('.lektionen').append(" <li class='active remove_" + key + "' data-lektion='" + key + "'>Lektion " + key + "</li>");
      } else {
        $('.lektionen').append("<li class='inactive add_" + key + "' data-lektion='" + key + "'>Lektion " + key + "</li>");
      }
    }
    return li_listeners();
  });

  $('.icons8-info').click(function() {
    $('.info').fadeIn('fast');
    return $('.overlay').fadeIn('fast');
  });

  $('.icons8-line_chart').click(function() {
    $('.stats').fadeIn('fast');
    return $('.overlay').fadeIn('fast');
  });

  $('.learn_wrongs').click(function() {
    $('.normal').fadeOut();
    $('.learn_normal').fadeIn();
    $('.learn_wrongs').fadeOut();
    return learn_wrongs();
  });

  $('.learn_normal').click(function() {
    $('.normal').fadeIn();
    add_lektionen();
    return newQ();
  });

  $('.reset_wrongs').click(function() {
    wrongs = [];
    save_wrongs();
    $('.normal').fadeIn();
    $('.learn_wrongs').fadeOut();
    $('.reset_wrongs').fadeOut();
    add_lektionen();
    return newQ();
  });

  $('.change_theme').click(function() {
    return change_theme();
  });

  $('.input-group > input').on('keydown', function(e) {
    if (e.which === 13) {
      return check();
    }
  });

  $('.submit').click(check);

}).call(this);
