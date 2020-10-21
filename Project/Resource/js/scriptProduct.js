var siteSliderRange = function () {
    $("#slider-range").slider({
        range: true,
        min: 10,
        max: 1500,
        values: [300, 1200],
        slide: function (event, ui) {
            $("#amount").val("L.E" + ui.values[0] + " - L.E" + ui.values[1]);
        }
    });
    $("#amount").val( $("#slider-range").slider("values", 0) + " L.E" +
        " - " + $("#slider-range").slider("values", 1) + " L.E ");
};
siteSliderRange();
