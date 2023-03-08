<template>
  <div>
    <!-- Use the component in the right place of the template -->
    <tiptap-vuetify
      v-model="form.content"
      :extensions="extensions"
    />
    <v-img
      v-for="(img, i) in images"
      :key="'img-' + i"
      :alt="img.alt"
      :src="img.src"
      class="ma-2 selectable"
      multiple
      @click="selectImage(img)"
    />
  </div>
</template>

<script>
// import the component and the necessary extensions
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Image,
} from "tiptap-vuetify";
// import FileSelector from '~/Components/FileSelector'
export default {
  props: ["form"],
  name: "FileSelector",
  // specify TiptapVuetify component in "components"
  components: { TiptapVuetify },
  data() {
    return {
      images: [],
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        Image,
        [
          Heading,
          {
            options: {
              levels: [1, 2, 3],
            },
          },
        ],
        Bold,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak,
      ],
      // starting editor's contents
      contents: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `,
    };
  },
  methods: {
    input() {
      this.$emit("input", this.contents);
    },
    onInit() {
      if (this.form.content) this.content = this.form.content;
    },
    selectImage(img) {
      this.$emit('select-file', img);
    }
  },
};
</script>