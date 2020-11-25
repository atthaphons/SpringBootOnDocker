let ProductFnJs = (function ($) {
    return {
        populateSearchResult: function (data) {
            if ($.fn.DataTable.isDataTable('#searchResultTable')) {
                $("#searchResultTable").DataTable().destroy()
                $("#searchResultTable").empty()
            }
            // datatable
            let dataTable = $("#searchResultTable").DataTable({
                "data": data,
                "lengthChange": false,

                "buttons": [{
                    text: '<i class="green file excel outline icon">',
                    titleAttr: 'Export to Excel',
                    extend: 'excelHtml5',
                    title: 'API TEST'
                }, 'pageLength'],

                "columns": [{
                        "title": "id",
                        "data": "id",
                        "orderable": true,
                        "searchable": true,
                        "className": "dt-body-left",

                    },
                    {
                        "title": "name",
                        "data": "name",
                        "orderable": true,
                        "searchable": true,
                        "className": "dt-body-left",
                    },
                    {
                        "title": "osVersion",
                        "data": "osVersion",
                        "orderable": true,
                        "searchable": true,
                        "className": "dt-body-left",
                    },
                    {
                        "title": "antiVirus",
                        "data": "antiVirus",
                        "orderable": true,
                        "searchable": true,
                        "className": "dt-body-left",
                    },
                    {
                        "title": "ipAddress",
                        "data": "ipAddress",
                        "orderable": true,
                        "searchable": true,
                        "className": "dt-body-left",
                    }
                ],


            });
            dataTable.buttons().container().appendTo($('div.eight.column:eq(0)', dataTable.table().container()));
        },
    }
}(jQuery));

$(document).ready(function () {
    let searchRoleInfo = $('#numberS');
    searchRoleInfo.dropdown({
        forceSelection: true
    });

    // button trigger
    $('#view-doctors').on('click', function () {
        var button = $(this);
        let dataValue = $("#numberS option:selected").text();
        // alert(dataValue)
        $.ajax({
                url: "/api/v1/products/" + dataValue,
                method: 'GET',
                cache: false,
                // data: dataValue
                // type: "text/json"
            })
            // .always(function () {
            //     $(button).html('Load Doctor Data...');
            // })
            .done(function (json) {
                $('#jsonTable').css("visibility", "visible").css("border", "1px solid green");
                $('#jsonTable').append("<tr><td>" + json.id + "</td><td>" + json.name + "</td><td>" + json.category + "</td></tr>");
                $('#jsonTable').append("</tbody>");
                $('th').css("border", "1px solid green");

                $('#textareajson').text(JSON.stringify(json))
            })
            .fail(function () {
                alert('Error : Failed to reach API Url or check your connection');
                $(button).prop('disabled', false);
            })
        // .then(function (evt) {
        //     setTimeout(function () {
        //         $(button).css({
        //             'background-color': '#ccc'
        //         }).hide();
        //     }, 1000);
        // });
    });

    $('#view-doctors-lombok').on('click', function () {
        let dataValue = $("#numberS option:selected").text();
        $.ajax({
                url: "/api/v1/products/lombok/" + dataValue,
                method: 'GET',
                cache: false,
            })
            .done(function (response) {
                console.log(JSON.stringify(response))
                ProductFnJs.populateSearchResult(response.data);
                if ($.fn.DataTable.isDataTable('#searchResultTable')) {
                    let table = $("#searchResultTable").DataTable();
                    table.columns.adjust().draw();
                }
            })
    });
});