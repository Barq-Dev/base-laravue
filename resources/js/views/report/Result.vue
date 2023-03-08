<template>
  <v-card elevation="2">
    <DataTable
      bordered
      freeze
      ref="table"
      title="Hasil Perhitungan"
      :moduleName="options.moduleName"
      :showSelected="false"
      :headers="headers"
      :formData="true"
      :btnAdd="false"
      :params="{ ...params, ...options.params }"
      :perPage="params.perPage"
      :bindProps="{
        'fixed-header': true,
        height: '450',
      }"
      @loaded="loaded"
    >
    </DataTable>
  </v-card>
</template>
<script>
import { mapState } from "vuex";
import DataTable from "@/components/DataTable";
export default {
  props: ["options"],
  components: {
    DataTable,
  },
  data() {
    return {
      params: {
        perPage: 100,
        // with: ["creator", "tempat"],
        sortby: "created_by",
        sortbydesc: "asc",
      },
      moduleName: "Tahanan",
    };
  },
  methods: {
    loaded() {},
    load() {
      this.$refs.table.load();
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
    headers() {
      let header = [
        {
          text: "No",
          value: "num",
          align: "center",
          class: "amber brown--text",
        },
        {
          text: "Nama",
          value: "nama",
          class: "amber brown--text",
        },
        {
          text: "Jenis Kelamin",
          value: "jekel",
          class: "amber brown--text",
        },
        {
          text: "TTL",
          value: "ttl",
          class: "amber brown--text",
          slot: true,
        },
        {
          text: "Status",
          value: "status",
          class: "amber brown--text",
        },
        { text: "Alamat", value: "alamat", class: "amber brown--text" },
        {
          text: "Pasal Di Langgar",
          value: "pasal_dilanggar",
          value: "pasal_dilanggar",
          class: "amber brown--text",
        },
        {
          text: "SPRIN Penahanan",
          value: "sprin_penahanan",
          slot: true,
          class: "amber brown--text",
        },
        {
          text: "Perpanjangan Penahanan",
          value: "perpanjangan_penahanan",
          slot: true,
          class: "amber brown--text",
        },
        {
          text: "SPRIN Pengeluaran Penahanan",
          value: "sprin_pengeluaran_tahanan",
          slot: true,
          class: "amber brown--text",
        },
        {
          text: "Status",
          value: "status_penahanan",
          slot: true,
          class: "amber brown--text",
        },
        {
          text: "Tempat Penahanan",
          value: "tempat.nama",
          slot: true,
          class: "amber brown--text",
        },
        { text: "Pembuat", value: "creator.name", class: "amber brown--text" },
        { text: "Resor", value: "resor", class: "amber brown--text" },
      ];

      return header;
    },
  },
  mounted() {},
};
</script>
