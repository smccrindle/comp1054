// STEP 6: Nab all the SUMMARY elements
const summaries = document.querySelectorAll('summary');

// STEP 7: Loop through the element array to add an event listener, and reference a function
summaries.forEach((summary) => {
	summary.addEventListener('click', closeOpenDetails);
});

// STEP 8a: Create the closeOpenDetails() function
function closeOpenDetails() {
	// STEP 8b: Loop through the summaries array again
	summaries.forEach((summary) => {
		// STEp 8c: Check to make sure the DETAILS element is not the parent of the SUMMARY that was clicked 
		let detail = summary.parentNode;
		if (detail != this.parentNode) {
			detail.removeAttribute('open');
		}
	});
}

// STEP 9: Check in the browser to make sure there are no errors - use the console, then proceed to the CSS for the final step