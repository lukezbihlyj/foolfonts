FoolFonts
=========

Making great websites even greater with the use of our beloved Comic Sans exclusively on April 1st!

Usage
---------

```
<script type="text/javascript" src="foolfonts.js"></script>
<script type="text/javascript">
    // If using jQuery you can use $(function() {});
    document.addEventListener("DOMContentLoaded", function() {
        foolfonts.init({
			force: true, // Force foolfonts even if it's not April 1st.
			ignore: ["FontAwesome"] // Ignore the following list of fonts.
		});
	});
</script>
```
