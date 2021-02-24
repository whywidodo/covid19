$.ajax({
    url: 'https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia',
    type: 'get',
    dataType: 'json',
    success: function (detail) {
        let data = detail[0];
        //console.log(data);
        $('.positif').html(data.positif);
        $('.sembuh').html(data.sembuh);
        $('.meninggal').html(data.meninggal);

    }
});