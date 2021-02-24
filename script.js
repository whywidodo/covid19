//API Kemenkes
$.ajax({
    url: 'https://data.covid19.go.id/public/api/update.json',
    type: 'get',
    dataType: 'json',
    success: function (detail) {
        let data = detail['update']['total'];
        let updatedata = detail['update']['penambahan'];
        //console.log(data);
        $('.positif').html(new Intl.NumberFormat().format(data.jumlah_positif));
        $('.sembuh').html(new Intl.NumberFormat().format(data.jumlah_sembuh));
        $('.meninggal').html(new Intl.NumberFormat().format(data.jumlah_meninggal));
        $('.dirawat').html(new Intl.NumberFormat().format(data.jumlah_dirawat));
        $('.update-data').html(updatedata.created);
    }
});