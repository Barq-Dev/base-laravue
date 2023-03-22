<template>
  <div>
    <DataTable
      class="borderless"
      ref="table"
      clickable
      :btnEdit="false"
      :btnAdd="false"
      :freeze="false"
      :title="title"
      :moduleName="moduleName"
      :headers="headers"
      :slots="slots"
      :formData="true"
      @dblclick="read"
    >
      <template #message="{ item }">
        {{ item.data.title }}
        <div class="text-caption" v-text="item.data.message"></div>
      </template>
      <template #time="{ item }">
        {{ $moment(item.created_at).fromNow() }}
      </template>
      <template #status="{ item }">
        <v-icon :color="item.read_at ? `grey` : `info`">{{
          item.read_at ? `drafts` : `email`
        }}</v-icon>
      </template>

      <template #actions="{ item }">
        <v-icon
          v-if="!item.read_at"
          color="success"
          small
          class="mr-2"
          @click="read(item)"
        >
          mark_email_read
        </v-icon>
      </template>
    </DataTable>
  </div>
</template>
<script>
import DataTable from "@/components/DataTable";
import { mapActions } from "vuex";
export default {
  components: {
    DataTable,
  },
  data() {
    return {
      title: "Daftar Notifikasi",
      moduleName: "Notification",
      slots: ["message", "time", "status"],
      headers: [
        { text: "Message", value: "message" },
        { text: "Time", value: "time" },
        { text: "Status", value: "status" },
        { text: "Actions", value: "actions", sortable: false, align: "center" },
      ],
    };
  },
  methods: {
    ...mapActions("auth", ["markAsRead"]),
    async read(item) {
      await this.markAsRead(item);
      this.$refs.table.load();
    },
  },
};
</script>
