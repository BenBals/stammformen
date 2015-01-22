selection = []
lektionen = []
currQ = {}

random = (from, to) -> Math.floor((Math.random()*to)+from)

add_lektion = (n) ->
  n = parseInt n
  selection = selection.concat data[n]
  if lektionen.indexOf(n) == -1
    lektionen.push n

add_lektionen = ->
  selection = []
  for i in lektionen
    console.log i
    add_lektion(i)

remove_lektion = (n) ->
  if lektionen.indexOf(n) > -1
    lektionen.splice(lektionen.indexOf(n), 1)
    add_lektionen()

  


newQ = ->
  $('.label-1').html('Erste Stammform')
  $('.label-2').html('Zweite Stammform')
  $('.label-3').html('Dritte Stammform')

  $('.infinitiv').addClass('pop')
  setTimeout ->
    $('.infinitiv').removeClass('pop')
  ,500


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

check = ->
  console.log 'lets see what you got there'

  __first__ = $('.first').val().toLowerCase()
  __second__ = $('.second').val().toLowerCase()
  __third__ = $('.third').val().toLowerCase()

  if __first__ == currQ.first
    $('.first').css('border-bottom', 'solid 2px #4CD964')
    $('.label-1').html('Richtig')
  else
    $('.first').css('border-bottom', 'solid 2px #FF3B30')
    $('.label-1').html(currQ.first)

  if __second__ == currQ.second
    $('.second').css('border-bottom', 'solid 2px #4CD964')
    $('.label-2').html('Richtig')
  else
    $('.second').css('border-bottom', 'solid 2px #FF3B30')
    $('.label-2').html(currQ.second)

  if __third__ == currQ.third
    $('.third').css('border-bottom', 'solid 2px #4CD964')
    $('.label-3').html('Richtig')
  else
    $('.third').css('border-bottom', 'solid 2px #FF3B30')
    $('.label-3').html(currQ.third)

  setTimeout ->
    newQ()
  , 5000

  

$ ->
  $('.start').addClass('slide-in')
  setTimeout ->
    $('.start').removeClass('slide-in')
  ,500

  $(".awesome-form .input-group input").focusout ->
    text_val = $(this).val()
    if text_val is ""
      $(this).removeClass "has-value"
    else
      $(this).addClass "has-value"

  # while dev
  for key, val of data
    add_lektion(key)

$('.go').click ->
  $('.start').addClass('slide-out')
  setTimeout ->
    $('.game').addClass('slide-in')
    $('.game').removeClass('dpn')
    $('.start').removeClass('slide-out')
    $('.start').addClass('dpn')
    setTimeout ->
      $('.game').removeClass('slide-in')
    ,500
  ,500
  newQ()

$('html').click (e) ->
  if e.target == $('.overlay')[0]
    $('.settings').fadeOut('fast')
    $('.info').fadeOut('fast')
    $('.overlay').fadeOut('fast')

$('.fa-cog').click ->
  $('.settings').fadeIn('fast')
  $('.overlay').fadeIn('fast')

  for key, val of data
    key = parseInt(key)
    if lektionen.indexOf(parseInt(key)) > -1
      $('.lektionen').append " <li class='active remove_#{key}' data-lektion='#{key}'>Lektion #{key}</li>"
    else
      $('.lektionen').append "<li class='inactive add_#{key}' data-lektion='#{key}'>Lektion #{key}</li>"

  li_listeners()


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



  

$('.fa-info-circle').click ->
  $('.info').fadeIn('fast')
  $('.overlay').fadeIn('fast')

$('#form').submit(check)
$('.submit').click(check)