version = '0.2.0'

selection = []
lektionen = []
currQ = {}
wrongs = []
all_data = []

random = (from, to) -> Math.floor((Math.random()*to)+from)

add_lektion = (n) ->
  n = parseInt n
  selection = selection.concat data[n]
  if lektionen.indexOf(n) == -1
    lektionen.push n
  save_lektions()

add_lektionen = ->
  selection = []
  for i in lektionen
    add_lektion(i)

add_points = (n) ->
  if n == undefined
    localStorage.stammpoints = parseInt(localStorage.stammpoints) + 1
  else
    localStorage.stammpoints = parseInt(localStorage.stammpoints) + n

  $('.stammpoints').html(localStorage.stammpoints)

add_wrong = (n) ->
  if wrongs.indexOf(n) == -1
    wrongs.push(parseInt(n))
    save_wrongs()

add_to_wrong = () ->
  localStorage.stammpoints_wrongs = parseInt(localStorage.stammpoints_wrongs) + 1
  $('.stammpoints_wrongs').html localStorage.stammpoints_wrongs

change_theme = (name) ->
  if name
    localStorage.theme = name
    $('body').attr 'class', name
  else
    if localStorage.theme == 'light'
      $('body').attr 'class', 'dark'
      localStorage.theme = 'dark'
    else
      $('body').attr 'class', 'light'
      localStorage.theme = 'light'

check = ->
  console.log 'lets see what you got there'

  __first__ = $('.first').val().toLowerCase().trim()
  __second__ = $('.second').val().toLowerCase().trim()
  __third__ = $('.third').val().toLowerCase().trim()

  __right__ = 0

  if __first__ == currQ.first
    $('.first').addClass('answer_right')
    $('.label-1').html('Richtig')
    add_points()
    __right__++
  else
    $('.first').addClass('answer_wrong')
    $('.label-1').html(currQ.first)
    add_to_wrong()

  if __second__ == currQ.second
    $('.second').addClass('answer_right')
    $('.label-2').html('Richtig')
    add_points()
    __right__++
  else
    $('.second').addClass('answer_wrong')
    $('.label-2').html(currQ.second)
    add_to_wrong()

  if __third__ == currQ.third
    $('.third').addClass('answer_right')
    $('.label-3').html('Richtig')
    add_points()
    __right__++
  else
    $('.third').addClass('answer_wrong')
    $('.label-3').html(currQ.third)
    add_to_wrong()

    if __right__ == 3
      console.log 'alles Richtig'
      remove_wrong(all_data.indexOf(currQ.raw))
    else
      add_wrong(all_data.indexOf(currQ.raw))

  setTimeout ->
    $(".first").focus()
    newQ()
  , 5000

learn_wrongs = () ->
  selection = []
  for i in wrongs
    selection.push all_data[i]

load_lektions = ->
  lektionen = []
  for i in localStorage.lektionen.split(',')
    lektionen.push(parseInt(i))
  add_lektionen()

li_listeners = ->
  $('.active').off()
  $('.inactive').off()

  $('.active').click ->
    console.log 'click on active'
    remove_lektion(parseInt($(this).data('lektion')))
    $(this).removeClass('active')
    $(this).addClass('inactive')
    li_listeners()
    newQ()

  $('.inactive').click ->
    console.log 'click on inactive'
    console.log 'add_lektion', parseInt($(this).data('lektion'))
    add_lektion(parseInt($(this).data('lektion')))
    $(this).addClass('active')
    $(this).removeClass('inactive')
    li_listeners()
    newQ()

newQ = ->
  $('.label-1').html('Erste Stammform')
  $('.label-2').html('Zweite Stammform')
  $('.label-3').html('Dritte Stammform')

  $('.input-group > input').val ''
  $('.input-group > input').removeClass "has-value"

  $('.input-group > input').removeClass('answer_right')
  $('.input-group > input').removeClass('answer_wrong')
  # $('.input-group > input').css('border-bottom', 'solid 1px #21a1e1')

  #if localStorage.theme == 'light'
  #  $('.input-group > input').css('border-bottom', 'solid 1px #21a1e1')
  #else if localStorage.theme == 'dark'
  #  $('.input-group > input').css('border-bottom', 'solid 1px #FFC107')


  $('.infinitiv').addClass('pop')
  setTimeout ->
    $('.infinitiv').removeClass('pop')
  , 300


  currQ.id = random(0, selection.length)
  currQ.raw = selection[currQ.id]
  currQ.arr = currQ.raw.split(', ')

  currQ.inf = currQ.arr[0].trim().toLowerCase()
  currQ.first = currQ.arr[1].trim().toLowerCase()
  currQ.second = currQ.arr[2].trim().toLowerCase()
  try
    currQ.third = currQ.arr[3].trim().toLowerCase()
  catch e
    currQ.third = ''

  $('.infinitiv').html(currQ.inf)

remove_lektion = (n) ->
  if lektionen.indexOf(n) > -1
    lektionen.splice(lektionen.indexOf(n), 1)
    add_lektionen()
    save_lektions()

remove_wrong = (n) ->
  if wrongs.indexOf(parseInt(n)) != -1
    wrongs.splice(wrongs.indexOf(parseInt(n)), 1)
    save_wrongs()

save_lektions = () ->
  localStorage.lektionen = ''
  for i in lektionen
    if localStorage.lektionen == ''
      localStorage.lektionen += String(i)
    else
      localStorage.lektionen += (',' + i)
  true

save_wrongs = () ->
  localStorage.wrongs = ''
  for i in wrongs
    if localStorage.wrongs == ''
      localStorage.wrongs += String(i)
    else
      localStorage.wrongs += (',' + String(i))
  true

$ ->
  $('.version').html 'v' + version
  console.log 'Stammformen by Ben Bals'
  console.log 'Version: v' + version
  $('.start').addClass('slide-in')
  setTimeout ->
    $('.start').removeClass('slide-in')
  , 500

  $(".awesome-form .input-group input").focusout ->
    text_val = $(this).val()
    if text_val is ""
      $(this).removeClass "has-value"
    else
      $(this).addClass "has-value"

  for key, val of data
    all_data = all_data.concat val

  if localStorage.wrongs == undefined
    localStorage.wrongs = ''
    wrongs = []
  else
    for i in localStorage.wrongs.split(',')
      if i != ''
        wrongs.push(parseInt(i))

  if localStorage.lektionen != '' and localStorage.lektionen != undefined
    load_lektions()
  else
    localStorage.lektionen = ''
    for key, val of data
      add_lektion(key)


  if localStorage.theme == undefined
    localStorage.theme == 'light'

  change_theme(localStorage.theme)
  

  if localStorage.stammpoints == undefined
    localStorage.stammpoints = 0
    localStorage.stammpoints_wrongs = 0
  $('.stammpoints_wrongs').html localStorage.stammpoints_wrongs
  $('.stammpoints').html localStorage.stammpoints

  if localStorage.total_time == undefined || localStorage.total_time == "NaN"
    localStorage.total_time = 0
    console.log "no total_time, setting it to #{localStorage.total_time}"

  setInterval ->
    localStorage.total_time = parseInt(localStorage.total_time) + 1
    
    __minutes__ = parseInt(parseInt(localStorage.total_time) / 60)
    __seconds__ = parseInt(parseInt(localStorage.total_time) - (__minutes__ * 60))
    
    if __seconds__ < 10
      __seconds__ = '0' + String(__seconds__)
    

    $('.total_time_minutes').html __minutes__
    $('.total_time_seconds').html __seconds__

    if parseInt(localStorage.total_time) > 3600
      $('.go_crazy').fadeIn('fast')
    

  , 1000
  
  

$('.go').click ->
  $('.start').addClass 'slide-out'
  setTimeout ->
    $('.game').addClass 'slide-in'
    $('.game').removeClass 'dpn'
    $('.start').removeClass 'slide-out'
    $('.start').addClass 'dpn'
    setTimeout ->
      $('.game').removeClass 'slide-in'
    , 500
  , 500
  newQ()

$('.go_crazy').click ->
  change_theme('crazy')

$('html').click (e) ->
  if e.target == $('.overlay')[0]
    $('.settings').fadeOut 'fast'
    $('.info').fadeOut 'fast'
    $('.stats').fadeOut 'fast'
    $('.overlay').fadeOut 'fast'

$('.icons8-close').click ->
  $('.settings').fadeOut 'fast'
  $('.info').fadeOut 'fast'
  $('.stats').fadeOut 'fast'
  $('.overlay').fadeOut 'fast'

$('.icons8-settings, .btn-settings').click ->
  $('.settings').fadeIn 'fast'
  $('.overlay').fadeIn 'fast'

  if localStorage.wrongs == ''
    $('.learn_wrongs').css 'display', 'none'
    $('.reset_wrongs').css 'display', 'none'
    $('.learn_normal').css 'display', 'none'
  else
    $('.learn_wrongs').css 'display', 'block'
    $('.reset_wrongs').css 'display', 'block'
  
  $('.lektionen').html ''

  for key, val of data
    key = parseInt(key)
    if lektionen.indexOf(parseInt(key)) > -1
      $('.lektionen').append " <li class='active remove_#{key}' data-lektion='#{key}'>Lektion #{key}</li>"
    else
      $('.lektionen').append "<li class='inactive add_#{key}' data-lektion='#{key}'>Lektion #{key}</li>"

  li_listeners()

$('.icons8-info').click ->
  $('.info').fadeIn('fast')
  $('.overlay').fadeIn('fast')
  

$('.icons8-line_chart').click ->
  $('.stats').fadeIn('fast')
  $('.overlay').fadeIn('fast')

$('.learn_wrongs').click ->
  $('.normal').fadeOut()
  $('.learn_normal').fadeIn()
  $('.learn_wrongs').fadeOut()
  learn_wrongs()

$('.learn_normal').click ->
  $('.normal').fadeIn()
  add_lektionen()
  newQ()

$('.reset_wrongs').click ->
  wrongs = []
  save_wrongs()
  $('.normal').fadeIn()
  $('.learn_wrongs').fadeOut()
  $('.reset_wrongs').fadeOut()
  add_lektionen()
  newQ()


$('.change_theme').click ->
  change_theme()

$('.input-group > input').on 'keydown', (e) ->
  if e.which == 13
    check()

$('.submit').click(check)