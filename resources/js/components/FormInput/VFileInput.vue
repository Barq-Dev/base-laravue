<template>
  <div>
    <v-row>
      <v-col cols="cols" sm="sm" md="md">
        <v-file-input
          v-bind="$attrs"
          v-model="form[name || 'file']"
          color="primary accent-4"
          counter
          :label="label"
          placeholder="Select your file"
          prepend-icon="mdi-paperclip"
          outlined
          :show-size="1000"
          @change="onFileChange"
        >
          <template v-slot:selection="{ index, text }">
            <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
              {{ text }}
            </v-chip>

            <span
              v-else-if="index === 2"
              class="text-overline grey--text text--darken-3 mx-2"
            >
              +{{ file.length - 2 }} File(s)
            </span>
          </template>
        </v-file-input>
      </v-col>
      <!-- <v-col cols="cols" sm="sm" md="md" v-if="preview">
        <img width="200" :src="imageUrl" alt="Preview" />
      </v-col> -->
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["form", "name", "label", "preview"],
  data: () => ({
    // file: [],
    file: undefined,
    // to save image url
    imageUrl: "",
  }),
  methods: {
    createImage(files) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(files);
    },
    onFileChange(files) {
      if (!files) {
        return;
      }
      this.createImage(files);
    },
  },
};
</script>
