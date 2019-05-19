(function ($, $document, ns) {
    "use strict";
    $(document).on("click", ".cq-dialog-submit", callback_dialogSubmitClicked.bind(this));

    function callback_dialogSubmitClicked(evt) {
		addNode_navbarLogo_conditionally.call(this, arguments)
    }

    function addNode_navbarLogo_conditionally() {
        try {
			var currentEditablePath = Granite.author.DialogFrame.currentDialog.editable.path;
            var resourceURL = currentEditablePath + '.1.json'
            $
                .get({
                    url: resourceURL,
                    async: false
                })
            	.then(setup_requiredNodes.bind(null));
        } catch(e) {
            console.log('error : ', e);
        }
    }

    function setup_requiredNodes(res) {
        try {
            var requiredNodes = ['navbarLogo'];
            requiredNodes.forEach(setup_requiredNodes_1.bind(null, res))
        } catch(e) { 

        }
    }

    function setup_requiredNodes_1(res, nodeName) {
        try {
			if(!res[nodeName]) setup_requiredNodes_2.call(null, nodeName);
        } catch(e) {


        }
    }

    function setup_requiredNodes_2(nodeName) {
		try {
			var currentEditablePath = Granite.author.DialogFrame.currentDialog.editable.path;
			var url = currentEditablePath + '/' + nodeName;
            $
            	.post({
					url: url,
					data: {
						'./jcr:primaryType': 'nt:unstructured',
						'./sling:resourceType': 'myApp/components/global/xt-image-link'
					}
				})
				.then(console.info.bind(null));
		} catch(e) {
			console.error(e);
		}
    }

})($, $(document), Granite.author);