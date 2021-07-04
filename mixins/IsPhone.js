const IsPhone = {
  data() {
    return {
      isPhone: null,
    };
  },
  created() {
    this.checkDeviceSize();
    window.addEventListener('resize', this.checkDeviceSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkDeviceSize);
  },
  methods: {
    checkDeviceSize() {
      this.isPhone = document.documentElement.clientWidth < 480;
    },
  },
};

export default IsPhone;
