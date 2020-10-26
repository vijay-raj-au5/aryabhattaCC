$(document).ready(function(){
    var cities = "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json";

    $('#search-query').keyup(function () {
        var searchQuery = $('#search-query').val();
        var expression = new RegExp(searchQuery,"i");
        $('#search-results').html('')

        $.ajax({url:cities,
                success:function(data){
                    data = JSON.parse(data);


                    if(data.length > 0) {
                        $.each(data,function(err,value) {
                            if (value.state.search(expression) === 0){
                                $('#search-results').append('<li class="list-group-item link-class">'+value.name+'</li>');
                            }
                        })

                    }
                }})
   


    })
    // color = [red,blue,green]

    // color.search('blue')
    1

    // [{
    //     id: 1,
    //     name:'mUMBAI',
    //     state:"MahaRASHTRA"

    // },
    // {
    //     id: 1,
    //     name:'mUMBAI',
    //     state:"Maha"

    // }]
    // [0,1,2,3]
    

})