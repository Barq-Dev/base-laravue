<template>
  <div>
    <!-- Data List View -->
    <data-list
      v-if="$vuetify.breakpoint.mobile && responsive"
      :items="items"
      :itemKey="responsive"
      :options="options"
      @action="dataListAction"
    >
      <template v-for="slot in dataListSlots" :slot="slot" slot-scope="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </data-list>
    <!-- Data Table View -->
    <v-data-table
      v-else
      class="elevation-1"
      v-model="selected"
      :dense="dense"
      :show-select="showSelected"
      :headers="headers"
      :items="items"
      :items-per-page="perPage"
      :options.sync="options"
      :server-items-length="total"
      :loading="loading"
      :class="{
        clickable: clickable,
        freeze: freeze,
      }"
      @update:options="load"
      @dblclick:row="rowClick"
      @contextmenu:row="rowMenu"
      v-bind="bindProps"
    >
      <template #header="{ props }">
        <slot name="header" :props="props"></slot>
      </template>
      <template v-slot:[`group.header`]="{ group, headers }">
        <td :colspan="headers.length">
          <span style="font-weight: bold"> {{ group.toUpperCase() }} </span>
        </td>
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{ title || `Daftar ${moduleName}` }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-btn
            :disabled="loading"
            v-if="btnImport"
            class="mr-2"
            small
            outlined
            color="blue"
            @click="dialogImport = !dialogImport"
          >
            <v-icon>file_upload</v-icon>
          </v-btn>
          <v-btn
            :disabled="loading"
            v-if="userCan(`${url}-export`) && btnExport"
            class="mr-2"
            small
            color="blue"
            dark
            @click="exportData('excel')"
          >
            <v-icon>file_download</v-icon>
          </v-btn>
          <!-- <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :loading="loading"
              small
              color="blue"
              v-bind="attrs"
              v-on="on"
              v-if="userCan(`${url}-export`) && btnExport"
            >
              <v-icon>file_download</v-icon>
              Export
            </v-btn>
          </template>

          <v-list>
            <template v-for="item in ['excel', 'pdf']">
              <v-list-item dense :key="item" @click="exportData(item)">
                <v-list-item-title>
                  <v-icon>fa fa-file-{{ item }}</v-icon>
                  <span>{{ _.startCase(item) }}</span>
                </v-list-item-title>
              </v-list-item>
            </template>
          </v-list>
        </v-menu> -->

          <v-spacer></v-spacer>

          <v-text-field
            class="mb-2"
            v-model="search"
            @input="handleSearch"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <slot name="header-btn"></slot>

          <v-btn
            v-if="hasFilter"
            text
            fab
            small
            class="mb-2 ml-1"
            color="blue"
            @click="isFilterActive = !isFilterActive"
          >
            <v-icon>filter_alt</v-icon>
          </v-btn>
          <v-tooltip bottom v-if="isFilterActive">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                text
                small
                class="mb-2 ml-1"
                color="warning"
                @click="filterReset"
              >
                <v-icon>mdi-refresh-circle</v-icon>
              </v-btn>
            </template>
            <span>Reset Filter</span>
          </v-tooltip>
          <v-btn
            :disabled="loading"
            v-if="btnAdd && userCan(`${url}-create`)"
            color="success"
            small
            class="mb-2 ml-1"
            :to="btnAdd !== true ? btnAdd : null"
            @click="btnAdd !== true ? null : (dialog = !dialog)"
          >
            <v-icon>add</v-icon> Add
          </v-btn>

          <v-btn
            v-if="selected.length && userCan(`${url}-delete`)"
            outlined
            class="ml-2 mb-2"
            color="red"
            small
            :loading="loading"
            @click="deleteItem"
          >
            <v-icon>delete</v-icon> ({{ selected.length }})
          </v-btn>
          <v-btn
            outlined
            small
            class="ml-2 mb-2"
            color="blue"
            :loading="loading"
            @click="load"
          >
            <v-icon>cached</v-icon>
          </v-btn>
        </v-toolbar>
        <v-expand-transition>
          <v-row class="mt-1 ml-1" v-show="isFilterActive">
            <v-form ref="form_filter">
              <v-col cols="12">
                <slot name="filter" :load="load" :params="params">
                  <v-select
                    dense
                    class="mr-2"
                    :items="[1, 2, 3]"
                    prepend-icon="filter_alt"
                    label="Filter Permission"
                    hide-details
                  >
                  </v-select>
                </slot>
              </v-col>
            </v-form>
          </v-row>
        </v-expand-transition>

        <v-divider></v-divider>
      </template>

      <template v-for="slot in slots" v-slot:[`item.${slot}`]="{ item }">
        <slot :name="slot" :item="item"></slot>
      </template>
      <template
        v-for="custom in headers.filter((i) => i.slot)"
        v-slot:[`item.${custom.value}`]="{ item }"
      >
        <slot :name="custom.value" :item="item">
          {{ _.get(item, custom.value) }}
        </slot>
      </template>

      <template v-slot:[`item.num`]="{ item }">
        {{ items.indexOf(item) + 1 + (meta.page * meta.per_page - meta.per_page) }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-row class="text-center">
          <v-col class="text-center">
            <slot name="actions" :item="item"></slot>
            <v-icon
              small
              color="info"
              class="mr-2"
              v-if="btnShow"
              @click="showItem(item)"
            >
              visibility
            </v-icon>
            <v-icon
              small
              class="mr-2"
              color="warning"
              v-if="userCan(`${url}-edit`) && btnEdit"
              @click="editItem(item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              v-if="userCan(`${url}-delete`)"
              color="red"
              @click="deleteItem(item)"
            >
              delete
            </v-icon>
          </v-col>
        </v-row>
      </template>
      <template v-slot:no-data>
        <v-alert class="mt-2" border="left" colored-border color="blue" elevation="2">
          Data Tidak Ditemukan
        </v-alert>
      </template>
    </v-data-table>

    <!-- Menu & Dialog components -->
    <v-menu
      dense
      v-model="row.showMenu"
      :position-x="row.menuX"
      :position-y="row.menuY"
      absolute
      offset-y
    >
      <v-list dense>
        <v-list-item @click="showItem(editedItem)" v-if="btnShow">
          <v-list-item-icon>
            <v-icon color="info">mdi-eye</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Detail</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          @click="editItem(editedItem)"
          v-if="userCan(`${url}-edit`) && btnEdit"
        >
          <v-list-item-icon>
            <v-icon color="warning">mdi-pencil</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Edit</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-dialog v-model="dialogShow" max-width="80%" scrollable>
      <slot name="modal-show" :editedItem="editedItem" :action="showAction"></slot>
    </v-dialog>
    <v-dialog
      v-model="dialogImport"
      scrollable
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title blue-title> Import Data </v-card-title>
        <v-card-text>
          <v-file-input
            v-model="fileImport"
            label="File Import"
            prepend-icon="mdi-paperclip"
          ></v-file-input>
          <v-chip color="pink" class="white--text" @click="importSample">
            <v-icon left> file_download </v-icon>
            Download Sample.xlsx
          </v-chip>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            @click="importData"
            :disabled="!fileImport"
            :loading="loading"
          >
            <v-icon>file_upload</v-icon> Import</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" max-width="80%">
      <v-card>
        <v-card-title>
          <!-- <span class="headline">{{
                !editedItem.id ? "New Item" : "Edit Item"
              }}</span> -->
          <span class="headline">{{
            !editedItem.id ? `Tambah ${moduleName}` : `Edit ${moduleName}`
          }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-form v-model="isFormValid">
              <slot
                name="modal-form"
                :save="save"
                :dialog="dialog"
                :editedItem="editedItem"
              ></slot>
            </v-form>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
          <v-btn
            color="blue darken-1 white--text"
            :loading="loading"
            @click="save"
            :disabled="!isFormValid"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import download from "downloadjs";

import DataList from "@/components/DataList";
export default {
  props: {
    title: String,
    moduleName: String,
    headers: Array,
    slots: Array,
    params: {
      type: Object,
      default: () => {},
    },
    formData: {
      type: Boolean,
      default: false,
    },
    responsive: {
      default: false,
    },
    btnAdd: {
      default: true,
    },
    btnShow: {
      type: [Boolean, String],
      default: false,
    },
    btnEdit: {
      type: [Boolean, String],
      default: true,
    },
    btnImport: {
      type: [Boolean, String],
      default: false,
    },
    btnExport: {
      type: [Boolean, String],
      default: false,
    },
    bindProps: {
      default: () => {
        return {};
      },
    },
    hasFilter: {
      type: [Boolean, Array],
      default: false,
    },
    showSelected: {
      type: Boolean,
      default: false,
    },
    perPage: {
      default: 10,
    },
    dense: {
      type: Boolean,
      default: false,
    },
    clickable: {
      type: Boolean,
      default: false,
    },
    freeze: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataList,
  },
  data: () => ({
    fab: false,
    loading: false,
    selected: [],
    items: [],
    total: 0,
    search: "",
    options: {
      page: 1,
    },
    // errors: {},
    dialog: false,
    dialogShow: false,
    dialogImport: false,
    editedItem: {},
    fileImport: null,
    isFilterActive: false,
    isFormValid: true,
    // Datatable Row
    row: {
      showMenu: false,
      menuX: 0,
      menuY: 0,
    },
    // Data List
    dataListSlots: [
      "list-item-avatar",
      "list-item-content",
      "list-item-action",
      "list-item-action-base",
      "list-item-title",
      "list-item-headline",
      "list-item-sub_headline",
      "list-item-subtitle",
    ],
  }),

  computed: {
    ...mapState("base", ["errors", "standby"]),
    meta() {
      return {
        ...this.options,
        page: this.options.page,
        per_page: this.options.itemsPerPage,
        sortby: this.options.sortBy && this.options.sortBy[0],
        sortbydesc: this.options.sortDesc && this.options.sortDesc[0] ? "desc" : "asc",
        q: this.search,
        ...this.params,
      };
    },
    url() {
      return this._.kebabCase(this.moduleName);
    },
    form() {
      if (this.formData) {
        const formData = new FormData();

        // this.isArrayFormData(this.editedItem, formData);

        for (const key in this.editedItem) {
          if (this._.isObject(this.editedItem[key]) && !key.includes("file")) {
            for (const k in this.editedItem[key]) {
              //
              if (this._.isObject(this.editedItem[key][k]) && !key.includes("file")) {
                for (const y in this.editedItem[key][k]) {
                  if (
                    this._.isObject(this.editedItem[key][k][y]) &&
                    !key.includes("file")
                  ) {
                    for (const i in this.editedItem[key][k][y]) {
                      //
                      formData.append(
                        `${key}[${k}][${y}][${i}]`,
                        this.editedItem[key][k][y][i] == null
                          ? ""
                          : this.editedItem[key][k][y][i]
                      );
                    }
                  } else
                    formData.append(
                      `${key}[${k}][${y}]`,
                      this.editedItem[key][k][y] == null ? "" : this.editedItem[key][k][y]
                    );
                  //
                  // formData.append(
                  //   `${key}[${k}][${y}]`,
                  //   this.editedItem[key][k][y] == null ? "" : this.editedItem[key][k][y]
                  // );
                }
              } else
                formData.append(
                  `${key}[${k}]`,
                  this.editedItem[key][k] == null ? "" : this.editedItem[key][k]
                );
              //
              // formData.append(
              //   `${key}[${k}]`,
              //   this.editedItem[key][k] == null ? "" : this.editedItem[key][k]
              // );
            }
          } else
            formData.append(
              key,
              this.editedItem[key] == null ? "" : this.editedItem[key]
            );
        }
        return formData;
      } else return this.editedItem;
    },
  },
  mounted() {
    if (this.$vuetify.breakpoint.mobile) this.load();
  },

  watch: {
    options: {
      deep: true,
      handler: function (v) {
        if (this.$vuetify.breakpoint.mobile) this.load();
      },
    },
    dialog(val) {
      val || this.close();
    },
  },

  methods: {
    ...mapActions("base", ["getData", "saveData", "deleteData"]),
    // ...mapMutations('base',['SET_MODULE_NAME']),

    showAction(v) {
      switch (v.type) {
        case "edit":
          this.editItem(v.data);
          break;
        case "delete":
          this.deleteItem(v.data);
          break;

        default:
          break;
      }
    },
    dataListAction(v) {
      console.log(v);
      switch (v.type) {
        case "refresh":
          this.load();
          break;
        case "add":
          this.dialog = !this.dialog;
          break;
        case "download":
          this.exportData("excel");
          break;
        case "show":
          this.editedItem = v.data;
          if (this.btnShow) this.dialogShow = true;
          break;
        case "dblclicked":
          this.$emit("dblclick", v.data);
          this.editedItem = v.data;
          if (this.btnShow) this.dialogShow = true;
          break;
        case "search":
          this.search = v.data;
          this.handleSearch();
          break;
        case "pageChange":
          this.options.page = v.data;
          // setTimeout(() => {
          //   this.load();
          // }, 1000);

          break;

        default:
          break;
      }
    },
    async load() {
      this.loading = true;
      await this.getData({ customUrl: this.url, params: this.meta }).then((res) => {
        this.items = this.meta.per_page == -1 ? res : res.data;
        this.total = res.total;
        this.loading = false;
        if (res.last_page == 1) this.options.page = 1;

        this.options.page = res.current_page;
        this.options.last_page = res.last_page;

        this.$emit("loaded", this.items);
      });
    },

    async save() {
      this.loading = true;
      await this.saveData({
        customUrl: this.url,
        data: this.form,
        params: { noState: true },
      });
      this.load();

      if (this._.isEmpty(this.errors)) {
        this.$emit("saved", this.form);
        if (!this.standby) this.close();
      }
    },

    editItem(item) {
      if (_.isString(this.btnEdit)) this.$router.push(`${this.url}/${item.id}/edit`);
      else {
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      }
    },
    showItem(item) {
      if (_.isString(this.btnShow)) this.$router.push(`${this.btnShow}/${item.id}`);
      else {
        this.editedItem = item;
        if (this.btnShow) this.dialogShow = true;
      }
    },

    async deleteItem(item) {
      this.$swal({
        title: "Delete Item",
        text: "Are you sure want to delete this item?",
        icon: "warning",
        confirmButtonText: "Yes!",
        showCancelButton: true,
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          this.loading = true;
          await this.deleteData({
            customUrl: this.url,
            data: item,
            params: {
              noState: true,
              selected: this.selected.map((i) => i.id),
            },
          });
          this.loading = false;
          this.dialogShow = false;
          this.selected = [];
          this.load();
        },
      });
    },

    importSample() {
      window.location.assign(`/files/import_sample_${this.url}.xlsx`);
    },

    importData() {
      this.loading = true;
      let data = new FormData();
      data.append("file_import", this.fileImport);

      this.$http.post(`import/${this.url}`, data).then(() => {
        this.loading = false;
        this.dialogImport = false;
        this.$swal("success", "success", "success");
        this.load();
      });
    },

    exportData(type) {
      this.loading = true;
      if (type == "pdf") window.open(`api/export/${type}/${this.url}`);
      else if (type == "excel")
        this.$http({
          url: `export/${type}/${this.url}`,
          method: "get",
          responseType: "blob",
          params: {
            ...this.params,
            q: this.search,
          },
        })
          .then((response) => {
            this.loading = false;

            let fileName = `EXPORT_${this.moduleName.toUpperCase()}_${this.$moment(
              new Date()
            ).format("DD-MM-YYYY")}.xlsx`;
            let MIMEtypes =
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml";

            download(response.data, fileName, MIMEtypes);
          })
          .catch((error) => {
            // console.log(error);
            this.loading = false;
            this.$swal("error", "error", "error");
          });
    },

    filterReset() {
      this.$refs.form_filter.reset();

      this.load();
    },

    handleSearch: _.debounce(function (e) {
      this.load();
    }, 500),

    close() {
      this.dialog = false;
      this.load();
      this.$nextTick(() => {
        this.editedItem = Object.assign({});
      });
    },
    rowClick(event, row) {
      if (_.isString(this.btnShow))
        this.$router.push(`/${_.kebabCase(this.moduleName)}/${row.item.id}`);
      this.$emit("dblclick", row.item);
      this.editedItem = row.item;
      if (this.btnShow) this.dialogShow = true;
    },
    rowMenu(event, row) {
      event.preventDefault();
      this.editedItem = row.item;

      this.row.showMenu = false;
      this.row.menuX = event.clientX;
      this.row.menuY = event.clientY;
      this.$nextTick(() => {
        this.row.showMenu = true;
      });
    },
    isArrayFormData(form, formData) {
      for (const key in form) {
        if (this._.isObject(form[key]) && !key.includes("file")) {
          this.isArrayFormData(form[key], formData);
          // for (const k in form[key]) {
          //   formData.append(
          //     `${key}[${k}]`,
          //     form[key][k] == null ? "" : form[key][k]
          //   );
          // }
        } else formData.append(key, form[key] == null ? "" : form[key]);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.clickable >>> tbody tr :hover {
  cursor: pointer;
}
</style>
<style>
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
.borderless td,
.borderless th {
  border-bottom: 0 !important;
}
.borderless .v-data-footer {
  border-top: 0 !important;
}

.freeze > div > table > tbody > tr > td:nth-child(2) {
  position: sticky !important;
  position: -webkit-sticky !important;
  left: 0;
  z-index: 1;
  background: white;
}
.freeze > div > table > thead > tr > th:nth-child(2) {
  position: sticky !important;
  position: -webkit-sticky !important;
  left: 0;
  /* z-index: 1; */
  z-index: 3;
  background: white;
}
.v-data-table td {
  white-space: nowrap;
}
.v-row-group__header {
  font-weight: bold;
}
</style>
