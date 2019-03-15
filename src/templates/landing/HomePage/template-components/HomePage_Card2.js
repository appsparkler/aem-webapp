import { AEMComponentConfig } from 'classes/AEMComponent';

export default new AEMComponentConfig({
    "static": {
        "renditions": {
            "w": 237,
            "h": 158
        }
    },
    "cq_config": {
        "placeholder": {
            "keepEmpty": false,
            "emptyIfKeys": ["imgSrc"]
        }
    },
    "meta": {
        "componentName": "Card",
        "componentPath": "/apps/aemarch13/src/components/content/Card",
        "resourceName": "HomePage_Card2",
        "storeKey": "pageInfo"
    }
})
