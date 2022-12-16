const { createApp } = Vue;

createApp({
  data() {
    return {
      hotels: [],
      hotel: null,
    };
  },
  methods: {
    getHotelInfo(index) {
      axios
        .get("http://localhost:8888/php-hotel/api.php", {
          params: {
            index: index,
          },
        })
        .then((res) => {
          this.hotel = res.data;
        });
    },
  },
  created() {
    axios.get("http://localhost:8888/php-hotel/api.php").then((res) => {
      this.hotels = res.data;
    });
  },
}).mount("#app");
