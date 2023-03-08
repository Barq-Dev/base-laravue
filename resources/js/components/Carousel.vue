<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    class="rounded-lg mx-auto"
    :show-arrows="slidesImg.length > 1"
  >
    <v-carousel-item v-for="(slide, i) in slidesImg" :key="i" :src="slide">
      <slot name="item" :slide="slide" />
      <!-- <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </v-row>
      </v-sheet> -->
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: ["slides"],
  data() {
    return {
      picsumSlides: [
        "https://picsum.photos/id/237/200/300",
        "https://picsum.photos/id/247/200/300",
        "https://picsum.photos/id/257/200/300",
      ],
    };
  },

  computed: {
    slidesImg() {
      return this.slides || this.picsumSlides;
    },
  },
};
</script>