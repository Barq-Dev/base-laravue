<template>
  <div>
    <v-combobox
      v-if="combobox"
      v-model="form[name]"
      v-bind="$attrs"
      :items="itemList"
      :label="label"
      :item-value="itemValue"
      :item-text="itemText"
      :rules="[(value) => !required || !!value || 'Required.']"
      :error="false"
      @input="() => this.$emit('input')"
    >
      <template #label v-if="required">
        {{ label }} <span class="red--text"><strong> *</strong></span>
      </template>
    </v-combobox>
    <v-autocomplete
      v-else-if="autocomplete"
      v-model="form[name]"
      v-bind="$attrs"
      :items="itemList"
      :label="label"
      :item-value="itemValue"
      :item-text="itemText"
      :rules="[(value) => !required || !!value || 'Required.']"
      :error="false"
      @input="
        (value) => {
          this.$emit('input', value);
          this.$emit('input:this', this.$parent);
        }
      "
      @blur="() => this.$emit('blur')"
    >
      <template #label v-if="required">
        {{ label }} <span class="red--text"><strong> *</strong></span>
      </template>
      <template #item="data">
        <slot name="item" v-bind="data">
          {{ itemText ? data.item[itemText] : data.item }}
        </slot>
      </template>
      <slot slot="append" name="append" />
      <slot slot="append-outer" name="append-outer" />
    </v-autocomplete>
    <v-select
      v-else
      v-bind="$attrs"
      v-model="form[name]"
      :rules="[(value) => !required || !!value || 'Required.']"
      :error="false"
      :label="label"
      :autofocus="autofocus"
      :items="itemList"
      :item-value="itemValue"
      :item-text="itemText"
      @input="
        (value) => {
          this.$emit('input', value);
          this.$emit('input:this', this.$parent);
        }
      "
    >
      <template #label v-if="required">
        {{ label }} <span class="red--text"><strong> *</strong></span>
      </template>
    </v-select>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    url: String,
    name: String,
    itemValue: String,
    itemText: [String, Function],
    required: Boolean,
    autofocus: Boolean,
    autocomplete: Boolean,
    combobox: Boolean,
    form: {
      type: [Array, Object],
    },
    items: {
      type: [Array, Object],
      default: () => {
        return [];
      },
    },
    params: {
      type: [Object],
    },
  },
  data() {
    return {
      itemList: this.items || [],
    };
  },

  mounted() {
    if (this.url) this.getData();
  },

  methods: {
    getData() {
      this.$http(this.url, {
        params: { all: true, ...this.params },
      }).then(({ data }) => (this.itemList = data));
    },
  },

  watch: {
    items(val) {
      if (this.url) this.getData();
      else this.itemList = val;
    },
    url(val) {
      if (val) this.getData();
    },
  },
};
</script>
<style></style>
