import Vue from 'vue';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap\\dist\\css\\bootstrap.css'

import {VueAEMComponent} from 'common-script';

export default function generate_XTContainerComponent() {
    new VueAEMComponent(this, {
      data() {
        return {
          imageLinkConfig: {
            linkClicked() {
              alert('link Clicked passed from parent...');
            }
          }
        }
      }
    });
}
