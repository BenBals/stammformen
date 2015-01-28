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

check = ->
  console.log 'lets see what you got there'

  __first__ = $('.first').val().toLowerCase().trim()
  __second__ = $('.second').val().toLowerCase().trim()
  __third__ = $('.third').val().toLowerCase().trim()

  __right__ = 0

  if __first__ == currQ.first
    $('.first').css('border-bottom', 'solid 2px #4CD964')
    $('.label-1').html('Richtig')
    add_points()
    __right__++
  else
    $('.first').css('border-bottom', 'solid 2px #FF3B30')
    $('.label-1').html(currQ.first)

  if __second__ == currQ.second
    $('.second').css('border-bottom', 'solid 2px #4CD964')
    $('.label-2').html('Richtig')
    add_points()
    __right__++
  else
    $('.second').css('border-bottom', 'solid 2px #FF3B30')
    $('.label-2').html(currQ.second)

  if __third__ == currQ.third
    $('.third').css('border-bottom', 'solid 2px #4CD964')
    $('.label-3').html('Richtig')
    add_points()
    __right__++
  else
    $('.third').css('border-bottom', 'solid 2px #FF3B30')
    $('.label-3').html(currQ.third)

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

  $('.inactive').click ->
    console.log 'click on inactive'
    console.log 'add_lektion', parseInt($(this).data('lektion'))
    add_lektion(parseInt($(this).data('lektion')))
    $(this).addClass('active')
    $(this).removeClass('inactive')
    li_listeners()

newQ = ->
  $('.label-1').html('Erste Stammform')
  $('.label-2').html('Zweite Stammform')
  $('.label-3').html('Dritte Stammform')

  $('.input-group > input').val ''
  $('.input-group > input').removeClass "has-value"
  $('.input-group > input').css('border-bottom', 'solid 2px #21a1e1')


  $('.infinitiv').addClass('pop')
  setTimeout ->
    $('.infinitiv').removeClass('pop')
  , 500


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
  

  if localStorage.stammpoints == undefined
    localStorage.stammpoints = 0
    $('.stammpoints').html(localStorage.stammpoints)
  

$('.go').click ->
  $('.start').addClass('slide-out')
  setTimeout ->
    $('.game').addClass('slide-in')
    $('.game').removeClass('dpn')
    $('.start').removeClass('slide-out')
    $('.start').addClass('dpn')
    setTimeout ->
      $('.game').removeClass('slide-in')
    , 500
  , 500
  newQ()

$('html').click (e) ->
  if e.target == $('.overlay')[0]
    $('.settings').fadeOut('fast')
    $('.info').fadeOut('fast')
    $('.stats').fadeOut('fast')
    $('.overlay').fadeOut('fast')
    newQ()

$('.fa-times-circle').click ->
  console.log 'click fa-times-circle'
  $('.settings').fadeOut('fast')
  $('.info').fadeOut('fast')
  $('.stats').fadeOut('fast')
  $('.overlay').fadeOut('fast')
  newQ()

$('.fa-cog, .btn-settings').click ->
  $('.settings').fadeIn('fast')
  $('.overlay').fadeIn('fast')

  if localStorage.wrongs == ''
    $('.learn_wrongs').css 'display', 'none'
    $('.reset_wrongs').css 'display', 'none'
    $('.learn_normal').css 'display', 'none'
  else
    $('.learn_wrongs').css 'display', 'block'
    $('.reset_wrongs').css 'display', 'block'
  
  $('.lektionen').html('')

  for key, val of data
    key = parseInt(key)
    if lektionen.indexOf(parseInt(key)) > -1
      $('.lektionen').append " <li class='active remove_#{key}' data-lektion='#{key}'>Lektion #{key}</li>"
    else
      $('.lektionen').append "<li class='inactive add_#{key}' data-lektion='#{key}'>Lektion #{key}</li>"

  li_listeners()

$('.fa-info-circle').click ->
  $('.info').fadeIn('fast')
  $('.overlay').fadeIn('fast')
  

$('.fa-bar-chart').click ->
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

$('.reset_wrongs').click ->
  wrongs = []
  save_wrongs()
  $('.normal').fadeIn()
  $('.learn_wrongs').fadeOut()
  $('.reset_wrongs').fadeOut()
  add_lektionen()


$('.input-group > input').on 'keydown', (e) ->
  if e.which == 13
    check()

$('.submit').click(check)