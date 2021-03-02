//API Kemenkes
// $.ajax({
//     url: 'https://data.covid19.go.id/public/api/update.json',
//     type: 'get',
//     dataType: 'json',
//     crossDomain: true,
//     success: function (detail) {
//         let data = detail['update']['total'];
//         let updatedata = detail['update']['penambahan'];
//         //console.log(data);
//         $('.positif').html(new Intl.NumberFormat().format(data.jumlah_positif));
//         $('.sembuh').html(new Intl.NumberFormat().format(data.jumlah_sembuh));
//         $('.meninggal').html(new Intl.NumberFormat().format(data.jumlah_meninggal));
//         $('.dirawat').html(new Intl.NumberFormat().format(data.jumlah_dirawat));
//         $('.update-data').html(updatedata.created);
//     }
// });

//API Mathdroid
$.ajax({
    url: 'https://covid19.mathdro.id/api/',
    type: 'get',
    dataType: 'json',
    success: function (detail) {
        //console.log(data);
        $('.positif').html(new Intl.NumberFormat().format(detail['confirmed']['value']));
        $('.sembuh').html(new Intl.NumberFormat().format(detail['recovered']['value']));
        $('.meninggal').html(new Intl.NumberFormat().format(detail['deaths']['value']));
        $('.update-data').html(detail['lastUpdate']);
    }
});




// jQuery.support.cors = true;
// $.ajax({
//     url: "https://data.covid19.go.id/public/api/update.json",
//     type: "GET",
//     timeout: 30000,
//     dataType: "json", // "xml", "json"
//     success: function (data) {
//         // show text reply as-is (debug)
//         alert(data);

//         // show xml field values (debug)
//         //alert( $(data).find("title").text() );

//         // loop JSON array (debug)
//         //var str="";
//         //$.each(data.items, function(i,item) {
//         //  str += item.title + "\n";
//         //});
//         //alert(str);
//     },
//     error: function (jqXHR, textStatus, ex) {
//         alert(textStatus + "," + ex + "," + jqXHR.responseText);
//     }
// });


// $.getJSON('https://data.covid19.go.id/public/api/update.json?callback=?', function (data) {
//     console.log(data);
// });

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://data.covid19.go.id/public/api/update.json');
// xhr.responseType = 'json';
// xhr.onload = function (e) {
//     if (this.status == 200) {
//         console.log('response', this.response); // JSON response  
//     }
// };
// xhr.send();