// styles
import './styles.scss';

// scripts
export default {
  data() {
    return {
      imageLinkConfig: {
        linkClicked() {
          alert('link Clicked passed from parent...');
        }
      }
    }
  },
  methods: {
    linkClicked() {
      alert('link Clicked...')
    }
  }
}
