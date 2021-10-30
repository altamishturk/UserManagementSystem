// setting root route 
const getDomain = document.URL.split('/')[2];
const domain = 'user-management-app-by-me.herokuapp.com';
let rootRoute = getDomain == domain ? `https://${domain}` : 'http://localhost:3000';

$('#add-user').submit(function (e) {
    alert('data inserted successfully');
})

$('#update-user').submit(function (e) {
    e.preventDefault();
    var data = {};
    $.map($(this).serializeArray(), function (d, i) {
        data[d['name']] = d['value'];
    })

    // console.log(data.id);
    var request = {
        'url': `${rootRoute}/api/users/${data.id}`,
        'method': 'PUT',
        'data': data
    }

    $.ajax(request).done(function (res) {
        alert('Data Updated Successfully');
    })
});


if (window.location.pathname == '/') {
    $('.delete-btn').click(function () {
        var id = $(this).attr('data-id');

        var request = {
            'url': `${rootRoute}/api/users/${id}`,
            'method': 'DELETE',
        }

        if (confirm('Do you really want to delete this recoard')) {
            $.ajax(request).done(function (res) {
                alert('Data Deleted Successfully');
                location.reload();
            })
        }
    })
}




