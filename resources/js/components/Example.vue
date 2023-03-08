<template>
  <div>
    <!-- Errors -->
    <v-row v-if="!_.isEmpty(errors)">
      <v-col cols="12" sm="12" md="12">
        <v-alert border="top" color="red lighten-2" dark>
          <ul>
            <li v-for="error in errors" :key="error[0]">{{ error[0] }}</li>
          </ul>
        </v-alert>
      </v-col>
    </v-row>
    <!-- Textfield -->
    <v-text-field v-model="form.name" label="Name"></v-text-field>
    <v-text-field
      v-model="form.age"
      label="Age"
      type="number"
      min="0"
    ></v-text-field>
    <TextField
      name="tempat_lahir"
      label="Tempat Lahir"
      :form="form"
      required
    ></TextField>

    <!-- Datepicker -->
    <BarqunDatePicker
      label="Tanggal Lahir"
      picker="YEAR"
      field="tanggal_lahir"
      :form="form"
      required
    />

    <!-- Selecbox -->
    <BarqunVSelect
      name="gender"
      :form="form"
      :items="gender"
      itemValue="value"
      itemText="key"
      label="Gender"
      required
    >
    </BarqunVSelect>
    <BarqunVSelect
      name="religion"
      :form="form"
      :items="religions"
      label="Agama"
      required
    >
    </BarqunVSelect>

    <!-- Combobox -->
    <v-combobox v-model="form.hobby" label="Hobby" :items="hobby" clearable />

    <!-- File / Image Uploader -->
    <file-pond
      ref="foto"
      label-idle="Drop files here or browse"
      accepted-file-types="image/jpeg, image/png"
      @updatefiles="handleFileUpload('foto')"
      v-bind:files="getFiles('foto')"
      :allowDownloadByUrl="true"
    />
  </div>
</template>
<script>
import BarqunDatePicker from "@/components/FormInput/BarqunDatePicker";
import TextField from "@/components/FormInput/TextField";
import BarqunVSelect from "@/components/FormInput/BarqunVSelect";
export default {
  components: {
    BarqunDatePicker,
    TextField,
    BarqunVSelect,
  },
  data() {
    return {
      name: "",
      age: 20,
      born_date: "",
      gender: [
        { key: "Laki-Laki", value: "L" },
        { key: "Perempuan", value: "P" },
      ],
      religions: [
        "Islam",
        "Protestan",
        "Katolik",
        "Hindu",
        "Budha",
        "Konghucu",
      ],
      hobby: ["Cooking", "Fishing"],
    };
  },
  methods: {
    handleFileUpload(name) {
      this.form["file_" + name] = this.$refs[name].getFiles().length
        ? this.$refs[name].getFiles()[0].file
        : null;
    },
    getFiles(name) {
      if (!this.form.id) return "";
      else
        return this.form[name]
          ? ["/storage/uploads/foto/" + this.form[name]]
          : "";
    },
  },
};
</script>
<style lang="">
</style>