/**
 * @author Brian McVeigh
 */
(function ($) {
	$(document).ready(function () {
		$('.roundup-textfield').keyup(function () {
			// Round each emission value to up to 2 decimal places.
			var number = $('.roundup-textfield').val();
			var pieces = number.split('.');
			var value;

			if (pieces.length > 1) {
			    if (pieces[1].length > 2) {
			        value = Math.round(parseFloat(this.value) * 100) / 100;
					$('.roundup-textfield').val(value);        
			    }
			}
		});
	});
})(jQuery);
