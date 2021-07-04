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
      this.isPhone = window.innerWidth < 480;
    },
  },
};

export default IsPhone;
