export default {
	saveCartId: function() {
		const id = ApiCreateCart.data.cart_id;
		storeValue("cart_id", id);
		showAlert("Το καλάθι δημιουργήθηκε", "success");
	}
}