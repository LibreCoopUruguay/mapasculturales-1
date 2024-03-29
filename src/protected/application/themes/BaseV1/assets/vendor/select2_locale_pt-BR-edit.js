/**
 * Select2 Brazilian Portuguese translation - EDITED to MapasCulturais
 */
(function ($) {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches: function () { return "Ningún resultado encontrado"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Informe ao menos mais " + n + " caractere" + (n == 1? "" : "s"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Apague " + n + " caractere" + (n == 1? "" : "s"); },
        formatSelectionTooBig: function (limit) { return "Só é possível selecionar " + limit + " elemento" + (limit == 1 ? "" : "s"); },
        formatLoadMore: function (pageNumber) { return "Carregando mais resultados..."; },
        formatSearching: function () { return "Buscando..."; }
    });
})(jQuery);
