export default {
	Table1primaryColumnscustomColumn1onClick () {
		{{ 
  appsmith.store.cart_id 
    ? ApiAddtoCart.run({
        product_id: currentrow.id,
        quantity: 1
      }, 
      () => showAlert("Προστέθηκε στο καλάθι!", "success")
    )
    : showAlert("Δεν υπάρχει ενεργό καλάθι. Δημιουργήστε πρώτα καλάθι.", "warning")
}}

	}
}