const IsPhone = {
  data() {
    return {
      isPhone: null,
    };
  },
  created() {
    if (process.client) {
      this.checkDeviceSize();
      window.addEventListener('resize', this.checkDeviceSize);
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.checkDeviceSize);
    }
  },
  methods: {
    checkDeviceSize() {
      if (process.client) {
        this.isPhone = window.innerWidth < 480;
      }
    },
  },
};

export default IsPhone;
