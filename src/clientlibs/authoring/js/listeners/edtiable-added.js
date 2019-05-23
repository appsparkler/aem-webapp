(function($document, $) {
  $document.on('cq-inspectable-added', cb_inspectableAdded);
  function cb_inspectableAdded(evt) {
  	try {
  		var inspectable = evt.inspectable;
  		var ajaxConfig = {
  			url: evt.inspectable.path,
  			data: {
  				'sling:resourceType': inspectable.type
  			},
  			async: false
  		};

  		if(inspectable.type.indexOf('aemarch13/dist') > -1) $.post(ajaxConfig);
  	} catch(e) {
  		console.error(e);
  	}
  }
}($(document), jQuery));
