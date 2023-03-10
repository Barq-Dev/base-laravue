<template>
  <v-card elevation="5" :loading="loading" shaped>
    <v-card-title class="blue lighten-2 white--text" primary-title>
      <v-icon class="pr-2 white--text">mdi-file-document-multiple</v-icon>
      Laporan
    </v-card-title>

    <v-form ref="form" v-model="valid">
      <!-- Button -->
      <v-card-actions>
        <v-btn
          dark
          :disabled="!valid"
          @click="load"
          :loading="loading"
          class="mx-1"
          :color="$appInfo.theme.primary"
        >
          <v-icon>send</v-icon> Submit
        </v-btn>
        <v-btn
          @click="
            $refs.form.reset();
            result = false;
          "
          class="mx-1 white--text"
          color="brown lighten-2"
        >
          <v-icon>refresh</v-icon> Reset
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="isDisabled"
          @click="exportData('excel')"
          class="ml-2 white--text"
          color="green"
        >
          <v-icon>mdi-microsoft-excel</v-icon> Download
        </v-btn>
      </v-card-actions>
    </v-form>

    <v-divider></v-divider>
    <component
      :is="'ResultIndex'"
      v-show="result"
      ref="result"
      :options="{ params: params, moduleName: moduleName }"
    />
    <!-- <ResultIndex
      v-show="result"
      ref="result"
      :options="{ params: params, moduleName: moduleName }"
    /> -->
  </v-card>
</template>
<script>
import { mapState } from "vuex";
import download from "downloadjs";
import ResultIndex from "./Result";
import BarqunVSelect from "@/components/FormInput/BarqunVSelect";
import BarqunMonthPicker from "@/components/FormInput/BarqunMonthPicker";
import BarqunDatePicker from "@/components/FormInput/BarqunDatePicker";
export default {
  components: {
    BarqunVSelect,
    BarqunMonthPicker,
    BarqunDatePicker,
    ResultIndex,
  },
  data() {
    return {
      valid: false,
      loading: false,
      result: false,
      form: {
        search: "",
      },
      params: {
        tanggal: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
      },
    };
  },
  methods: {
    init() {
      if (this.userRole("Validator") && this.user.sekolah && this.user.sekolah.id) {
        this.params.jenjang = this.user.sekolah.jenjang;
        this.params.status = this.user.sekolah.status;
      }
      this.result = false;
      this.params = {}; //
      this.params.tipe = this._.startCase(this.$route.params.modul);

      if (this.$route.params.modul == "tahanan") {
        this.params.useTemplate = true;
        this.params.with = [
          "creator",
          this.params.tipe == "Tahanan" ? "tempat" : "satuan",
        ];
      } else {
        this.params.with = ["jenis", "barang.satuan", "barang.creator"];
      }
    },
    async load() {
      this.result = false;

      this.loading = true;
      await setTimeout(() => {
        this.$refs.result.load();
        this.loading = false;
        this.result = true;
      }, 500);
    },
    exportData(type) {
      this.loading = true;
      let moduleUrl = this.moduleName == "Tahanan" ? "tahanan" : "jenis-barang-bukti";

      if (type == "pdf") window.open(`api/export/${type}/${this.url}`);
      else if (type == "excel")
        this.$http({
          url: `export/${type}/${moduleUrl}`,
          method: "get",
          responseType: "blob",
          params: {
            ...this.params,
          },
        })
          .then((response) => {
            this.loading = false;

            let fileName = `EXPORT_${this.params.tipe}_${this.$moment(new Date()).format(
              "DD-MM-YYYY"
            )}.xlsx`;
            let MIMEtypes =
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml";

            download(response.data, fileName, MIMEtypes);
          })
          .catch((error) => {
            console.log(error);
            this.loading = false;
            this.$swal("error", "error", "error");
          });
    },
    printNewTab() {
      let moduleUrl = this.isReport
        ? `report-kebutuhan-guru`
        : `perhitungan-kebutuhan-guru`;

      let link = `/print/${moduleUrl}?kelas_id=${this.params.kelas_id}&tahun_ajaran_id=${this.params.tahun_ajaran_id}&bulan_absensi=${this.params.bulan}&`;

      window.open(link);
    },
    download() {
      let query = new URLSearchParams(this.params).toString();

      let moduleUrl = this.isReport
        ? `report-kebutuhan-guru`
        : `perhitungan-kebutuhan-guru`;
      let link = `/print/${moduleUrl}?${query}&export=excel`;

      window.open(link);
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
    isDisabled() {
      return !this.result;
    },
    isReport() {
      return this.$route.name == "kebutuhan.report";
    },
    moduleName() {
      return this.$route.params.modul == "tahanan" ? "Tahanan" : "Jenis Barang Bukti";
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    $route: {
      deep: true,
      handler: function (v) {
        this.init();
      },
    },
    params: {
      deep: true,
      handler: function (v) {
        // console.log(v);
      },
    },
  },
};
</script>
