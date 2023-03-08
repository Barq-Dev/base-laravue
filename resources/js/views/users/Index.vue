<template>
  <v-card elevation="2" class="rounded-lg">
    <DataTable
      @saved="saved"
      :moduleName="moduleName"
      title="User List"
      :headers="headers"
      :slots="slots"
      :formData="true"
    >
      <template #modal-form="{ editedItem, dialog }">
        <ModulForm :form="editedItem" :dialog="dialog" />
      </template>

      <template #avatar="{ item }">
        <v-list-item-avatar>
          <v-img-preview width="90" :src="item.avatar_link" alt="Foto" />
        </v-list-item-avatar>
      </template>

      <template #actions="{ item }">
        <v-icon color="success" small class="mr-2" @click="notify(item)">
          mdi-bell
        </v-icon>
      </template>
    </DataTable>
  </v-card>
</template>
<script>
import DataTable from "@/components/DataTable";
import ModulForm from "./Form";
import { mapActions } from "vuex";
export default {
  components: {
    DataTable,
    ModulForm,
  },
  data() {
    return {
      dialog: false,
      moduleName: "Users",
      slots: ["avatar"],
      headers: [
        { text: "Avatar", value: "avatar" },
        { text: "Nama", value: "name" },
        { text: "Username", value: "username" },
        { text: "Email", value: "email" },
        { text: "Role", value: "role_list" },
        { text: "Actions", value: "actions", align: "center", sortable: false },
      ],
    };
  },
  methods: {
    ...mapActions("auth", ["auth"]),
    saved() {
      this.auth();
    },
    notify(item) {
      this.$swal({
        title: "Send Notification",
        text: "Are you sure want to send notification to this user?",
        icon: "warning",
        confirmButtonText: "Yes!",
        showCancelButton: true,
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          this.$http(`users/notify/${item.id}`);
        },
      });
    },
  },
};
</script>
