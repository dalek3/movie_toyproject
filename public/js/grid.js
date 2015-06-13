$
.grid
 each item in row
  .grid-item
   a(href='/movie/#{item.name}' data-toggle='modal' data-target='#myModal')
    img(src='#{item.imgpath}')

