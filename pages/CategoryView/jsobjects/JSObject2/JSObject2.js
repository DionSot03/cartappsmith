export default {
	Button1onClick () {
		{{ 
  appsmith.store.cart_id 
    ? showAlert("Υπάρχει ήδη ενεργό καλάθι. Ολοκληρώστε πρώτα την αγορά σας.", "warning")
    : ApiCreateCart.run(() => {
        storeValue("cart_id", ApiCreateCart.data.cart_id);
        showAlert("Το καλάθι δημιουργήθηκε!", "success");
      })
}}

	}
}