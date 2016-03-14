/**
 * @author Brian McVeigh
 */
(function ($) {
	$(document).ready(function () {
		$('.roundup-textfield').keyup(function () {
			var $self = $(this);
			// Round each emission value to up to 2 decimal places.
			var number = $self.val();
			var pieces = number.split('.');
			var value;

			if (pieces.length > 1) {
			    if (pieces[1].length > 2) {
			        value = Math.round(parseFloat(this.value) * 100) / 100;
					$self.val(value);        
			    }
			}
		});
	});
})(jQuery);
